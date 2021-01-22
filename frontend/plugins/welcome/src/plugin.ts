import { createPlugin } from '@backstage/core';
import RecommendedVideo from './components/RecommendedVideo';
import WatchVideo from './components/WatchVideo'
import SignIn from './components/SignIn'
import Signup from './components/SignUp'
import ForgotPass from './components/ForgotPass'

export const plugin = createPlugin({
  id: 'welcome',
  register({ router }) {
    router.registerRoute('/', SignIn);
    router.registerRoute('/signup', Signup);
    router.registerRoute('/forgotpass', ForgotPass);
    router.registerRoute('/watch_video', WatchVideo);
    router.registerRoute('/recommendedvideo', RecommendedVideo);
  },
});
