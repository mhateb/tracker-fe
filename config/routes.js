import Default from '../src/containers/default/default';
import Profile from '../src/containers/profile/profile';
import Announcment from '../src/containers/announcment/announcment';
import Options from '../src/containers/options/options';
import Dictionary from '../src/containers/dictionary/dictionary';
import Training from '../src/containers/training/training';
import Rating from '../src/containers/rating/rating';

const routes = [
  {
    id: 1,
    path: '/profile',
    component: Profile
  },
  {
    id: 2,
    path: '/announcment',
    component: Announcment
  },
  {
    id: 3,
    path: '/options',
    component: Options
  },
  {
    id: 4,
    path: '/dictionary',
    component: Dictionary
  },
  {
    id: 5,
    path: '/training',
    component: Training
  },
  {
    id: 6,
    path: '/rating',
    component: Rating
  }
];

export default routes;
