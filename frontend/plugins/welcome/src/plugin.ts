import { createPlugin } from '@backstage/core';
import RecommendedVideo from './components/RecommendedVideo';
import WatchVideo from './components/WatchVideo'
import SignIn from './components/SignIn'
import Register from './components/Register'

export const plugin = createPlugin({
  id: 'welcome',
  register({ router }) {
    router.registerRoute('/', SignIn);
    router.registerRoute('/register', Register);
    router.registerRoute('/watch_video', WatchVideo);
    router.registerRoute('/recommendedvideo', RecommendedVideo);
  },
});
