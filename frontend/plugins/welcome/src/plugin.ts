import { createPlugin } from '@backstage/core';
import RecommendedVideo from './components/RecommendedVideo';
import WatchVideo from './components/WatchVideo'
import SignIn from './components/SignIn'


export const plugin = createPlugin({
  id: 'welcome',
  register({ router }) {
    router.registerRoute('/', RecommendedVideo);
    router.registerRoute('/watch_video', WatchVideo);
    router.registerRoute('/signin', SignIn);
  },
});
