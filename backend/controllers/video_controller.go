package controllers

import (
	"context"
	"fmt"
	"strconv"

	"github.com/tanapon395/playlist-video/ent/user"
	"github.com/tanapon395/playlist-video/ent/video"

	"github.com/gin-gonic/gin"
	"github.com/tanapon395/playlist-video/ent"
)

type VideoController struct {
	client *ent.Client
	router gin.IRouter
}

type Video struct {
	Name  string
	URL   string
	Owner int
}

func (ctl *VideoController) CreateVideo(c *gin.Context) {
	obj := Video{}
	if err := c.ShouldBind(&obj); err != nil {
		c.JSON(400, gin.H{
			"error": "video binding failed",
		})
		return
	}

	v, err := ctl.client.Video.
		Create().
		SetName(obj.Name).
		SetURL(obj.URL).
		Save(context.Background())

	if err != nil {
		c.JSON(400, gin.H{
			"error": "saving video failed",
		})
		return
	}

	u, err := ctl.client.User.
		UpdateOneID(int(obj.Owner)).
		AddVideos(v).
		Save(context.Background())

	if err != nil {
		c.JSON(400, gin.H{
			"error": "saving edge failed",
		})
		return
	}

	c.JSON(200, u)
}

func (ctl *VideoController) GetVideos(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}
	v, err := ctl.client.Video.
		Query().
		WithOwner().
		Where(video.IDEQ(int(id))).
		Only(context.Background())

	if err != nil {
		c.JSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, v)
}

func (ctl *VideoController) ListVideo(c *gin.Context) {
	limitQuery := c.Query("limit")
	limit := 10
	if limitQuery != "" {
		limit64, err := strconv.ParseInt(limitQuery, 10, 64)
		if err == nil {
			limit = int(limit64)
		}
	}

	offsetQuery := c.Query("offset")
	offset := 0
	if offsetQuery != "" {
		offset64, err := strconv.ParseInt(offsetQuery, 10, 64)
		if err == nil {
			offset = int(offset64)
		}
	}

	videos, err := ctl.client.Video.
		Query().
		WithOwner().
		Limit(limit).
		Offset(offset).
		All(context.Background())

	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, videos)
}

func (ctl *VideoController) DeleteVideo(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	err = ctl.client.Video.
		DeleteOneID(int(id)).
		Exec(context.Background())
	if err != nil {
		c.JSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{"result": fmt.Sprintf("ok deleted %v", id)})
}

func (ctl *VideoController) UpdateVideo(c *gin.Context) {
	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	obj := Video{}
	if err := c.ShouldBind(&obj); err != nil {
		c.JSON(400, gin.H{
			"error": "video binding failed",
		})
		return
	}

	u, err := ctl.client.User.
		Query().
		Where(user.IDEQ(int(obj.Owner))).
		Only(context.Background())

	if err != nil {
		c.JSON(404, gin.H{
			"error": err.Error(),
		})
		return
	}

	v, err := ctl.client.Video.
		UpdateOneID(int(id)).
		SetName(obj.Name).
		SetURL(obj.URL).
		SetOwner(u).
		Save(context.Background())

	if err != nil {
		c.JSON(400, gin.H{
			"error": "update video failed",
		})
		return
	}

	c.JSON(200, v)
}

func NewVideoController(router gin.IRouter, client *ent.Client) *VideoController {
	vc := &VideoController{
		client: client,
		router: router,
	}

	vc.register()

	return vc

}

func (ctl *VideoController) register() {
	videos := ctl.router.Group("/videos")

	videos.POST("", ctl.CreateVideo)
	videos.GET(":id", ctl.GetVideos)
	videos.GET("", ctl.ListVideo)
	videos.DELETE(":id", ctl.DeleteVideo)
	videos.PUT(":id", ctl.UpdateVideo)

}
