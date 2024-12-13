import { 
  Home,
  Users,
  BookOpen,
  Calendar,
  Heart,
  Music,
  MessageSquare,
  Settings,
  HelpCircle
} from 'lucide-react';

import { DashboardOverview } from '@/pages/dashboard/DashboardOverview';
import { Members } from '@/pages/dashboard/Members';
import { Sermons } from '@/pages/dashboard/Sermons';
import { Events } from '@/pages/dashboard/Events';
import { DashboardMinistries } from '@/pages/dashboard/DashboardMinistries';
import { Choir } from '@/pages/dashboard/Choir';
import { Messages } from '@/pages/dashboard/Messages';
import { DashboardSettings } from '@/pages/dashboard/DashboardSettings';
import { Help } from '@/pages/dashboard/Help';

export const dashboardRoutes = [
  {
    path: '',
    name: 'Accueil',
    icon: Home,
    component: DashboardOverview
  },
  {
    path: 'members',
    name: 'Membres',
    icon: Users,
    component: Members
  },
  {
    path: 'sermons',
    name: 'Sermons',
    icon: BookOpen,
    component: Sermons
  },
  {
    path: 'events',
    name: 'Événements',
    icon: Calendar,
    component: Events
  },
  {
    path: 'ministries',
    name: 'Ministères',
    icon: Heart,
    component: DashboardMinistries
  },
  {
    path: 'choir',
    name: 'Chorale',
    icon: Music,
    component: Choir
  },
  {
    path: 'messages',
    name: 'Messages',
    icon: MessageSquare,
    component: Messages
  },
  {
    path: 'settings',
    name: 'Paramètres',
    icon: Settings,
    component: DashboardSettings
  },
  {
    path: 'help',
    name: 'Aide',
    icon: HelpCircle,
    component: Help
  }
] as const;