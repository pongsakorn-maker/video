import React, { FC } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { Header, Content, Page, pageTheme } from '@backstage/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoCard from '../VideoCard';
import classes from '*.css';

// header css
const HeaderCustom = {
  minHeight: '50px',
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  header: {
    minHeight: '50px',
  },
});

const WelcomePage: FC<{}> = () => {
  const classes = useStyles();
  return (
    <Page theme={pageTheme.home}>
      <Header style={HeaderCustom} title={`Video On Demand`}>
        <Avatar alt="Remy Sharp" src="../../image/account.jpg" />
        <div style={{ marginLeft: 10 }}>Tanapon Kongjaroensuk</div>
      </Header>
      <Content>
        <Grid container>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 1'}
            chanel={'Anime'}
            watched={10}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 2'}
            chanel={'Anime'}
            watched={101}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 3'}
            chanel={'Anime'}
            watched={1010}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 4'}
            chanel={'Anime'}
            watched={10101}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 5'}
            chanel={'Anime'}
            watched={101010}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 6'}
            chanel={'Anime'}
            watched={1010101}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 7'}
            chanel={'Anime'}
            watched={10101010}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 8'}
            chanel={'Anime'}
            watched={20}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 9'}
            chanel={'Anime'}
            watched={102}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 10'}
            chanel={'Anime'}
            watched={1020}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 11'}
            chanel={'Anime'}
            watched={10202}
          ></VideoCard>
          <VideoCard
            title={'ดาบพิฆาตอสูร EP ที่ 12'}
            chanel={'Anime'}
            watched={1020220}
          ></VideoCard>
        </Grid>
      </Content>
    </Page>
  );
};

export default WelcomePage;
