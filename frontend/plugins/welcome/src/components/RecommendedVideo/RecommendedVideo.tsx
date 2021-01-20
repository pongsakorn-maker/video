import React, { FC } from 'react';
import { Grid, Avatar, IconButton } from '@material-ui/core';
import { Header, Content, Page, pageTheme, SidebarPage } from '@backstage/core';
import {
  makeStyles,
  fade,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import VideoCard from '../VideoCard';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { AppSidebar } from '../../../../../packages/app/src/sidebar';
// header css
const HeaderCustom = {
  minHeight: '50px',
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      paddingRight: 100,
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

const RecommendedVideo: FC<{}> = () => {
  const classes = useStyles();

  return (
    <SidebarPage>
      <AppSidebar />
      <Page theme={pageTheme.service}>
        <Header style={HeaderCustom} title={`Video On Demand`}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="ค้นหา"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div>
              <IconButton>
                <Avatar
                  alt=""
                  src="https://png.pngitem.com/pimgs/s/339-3390436_transparent-kaneki-png-ken-kaneki-png-png-download.png"
                />
              </IconButton>
              <div style={{ marginLeft: 10 }}>Pongsakorn Maprakhon</div>
            </div>
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
    </SidebarPage>
  );
};

export default RecommendedVideo;
