import React, { FC } from 'react';
import { Typography, Grid, AppBar } from '@material-ui/core';
import { Content, Page, pageTheme } from '@backstage/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export type VideoDescriptionProps = {
  title: string;
  chanel: string;
  watched: number;
};

function VideoCard({ title, chanel, watched }: VideoDescriptionProps) {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  return (
    <Grid item xs={12} md={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            image="https://wallpapercave.com/wp/wp5615561.jpg"
            title="video-title"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h1">
              {title}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="h2">
              <Link color="inherit" href="#" onClick={preventDefault}>
                {chanel}
              </Link>
            </Typography>
            <Typography gutterBottom variant="caption" component="h3">
              {'การดู'} {watched} {'ครั้ง'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default VideoCard;
