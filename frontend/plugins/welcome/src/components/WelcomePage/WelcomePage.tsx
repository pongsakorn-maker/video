import React, { FC } from 'react';
import { Typography, Grid, AppBar } from '@material-ui/core';
import {
  Content,
  Page,
  pageTheme,
} from '@backstage/core';
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
  watched : number;
};

export function VideoCard({ title, chanel, watched }: VideoDescriptionProps) {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
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
              {"การดู"} {watched} {"ครั้ง"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

const WelcomePage: FC<{}> = () => {
  return (
    <Page theme={pageTheme.home}>
      <AppBar />
      <Content>
        <Grid container>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 1"} chanel={"Anime"} watched={10}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 2"} chanel={"Anime"} watched={101}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 3"} chanel={"Anime"} watched={1010}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 4"} chanel={"Anime"} watched={10101}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 5"} chanel={"Anime"} watched={101010}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 6"} chanel={"Anime"} watched={1010101}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 7"} chanel={"Anime"} watched={10101010}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 8"} chanel={"Anime"} watched={20}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 9"} chanel={"Anime"} watched={102}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 10"} chanel={"Anime"} watched={1020}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 11"} chanel={"Anime"} watched={10202}></VideoCard>
          <VideoCard title={"ดาบพิฆาตอสูร EP ที่ 12"} chanel={"Anime"} watched={1020220}></VideoCard>
        </Grid>
      </Content>
    </Page>
  );
};

export default WelcomePage;
