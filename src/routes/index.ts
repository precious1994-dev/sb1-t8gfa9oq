import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Ministries } from '@/pages/Ministries';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/ministries',
    component: Ministries,
  },
] as const;