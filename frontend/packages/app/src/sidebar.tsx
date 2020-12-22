import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import FeaturedPlayListRoundedIcon from '@material-ui/icons/FeaturedPlayListRounded';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';
import {
  Sidebar,
  SidebarItem,
  SidebarDivider,
  SidebarSpace,
  SidebarUserSettings,
  SidebarPinButton,
} from '@backstage/core';

export const AppSidebar = () => (
  <Sidebar>
    <SidebarDivider />
    <SidebarItem icon={HomeRoundedIcon} to="" text="หน้าแรก" />
    <SidebarItem icon={FeaturedPlayListRoundedIcon} to="" text="ใหม่" />
    <SidebarItem icon={SubscriptionsRoundedIcon} to="" text="การติดตาม" />
    <SidebarItem icon={PlaylistPlayRoundedIcon} to="" text="เพลย์ลิสต์" />
    <SidebarItem icon={WatchLaterRoundedIcon} to="watch_video" text="ดูภายหลัง" />
    <SidebarDivider />
    <SidebarSpace />
    <SidebarDivider />
    {/* <SidebarUserSettings/> */}
    <SidebarPinButton />
  </Sidebar>
);
