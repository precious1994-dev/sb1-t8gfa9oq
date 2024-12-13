import { Users, Baby, Heart, UserPlus, UserCircle } from 'lucide-react';
import type { Ministry } from '@/types/ministry';

export const ministries: Ministry[] = [
  {
    icon: Users,
    title: "Ministère de la Jeunesse",
    description: "Un espace dynamique où les jeunes peuvent grandir dans leur foi tout en développant des relations authentiques.",
    link: "/ministries/youth"
  },
  {
    icon: Baby,
    title: "Ministère des Enfants",
    description: "Un environnement sûr et amusant où les enfants découvrent l'amour de Dieu à travers des activités adaptées.",
    link: "/ministries/children"
  },
  {
    icon: UserPlus,
    title: "Ministère des Adultes",
    description: "Des opportunités de croissance spirituelle et de communion fraternelle pour les adultes de tous âges.",
    link: "/ministries/adults"
  },
  {
    icon: Heart,
    title: "Ministère des Femmes",
    description: "Un espace dédié aux femmes pour grandir ensemble dans la foi et se soutenir mutuellement.",
    link: "/ministries/women"
  },
  {
    icon: UserCircle,
    title: "Ministère des Hommes",
    description: "Un lieu où les hommes peuvent se rencontrer, partager et grandir ensemble dans leur marche avec Dieu.",
    link: "/ministries/men"
  }
];