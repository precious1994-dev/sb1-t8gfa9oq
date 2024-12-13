import type { MinistryContent } from '@/types/ministry';

export const ministryContent: Record<string, MinistryContent> = {
  youth: {
    title: "Ministère de la Jeunesse",
    subtitle: "Grandir ensemble dans la foi",
    description: "Un espace dynamique où les jeunes peuvent grandir dans leur foi tout en développant des relations authentiques.",
    vision: "Former une nouvelle génération de leaders chrétiens passionnés et engagés.",
    schedule: [
      {
        day: "Vendredi",
        time: "19h30 - 21h30",
        activity: "Soirée Jeunesse"
      },
      {
        day: "Samedi",
        time: "15h00 - 17h00",
        activity: "Formation des Leaders"
      }
    ],
    activities: [
      {
        title: "Études Bibliques",
        description: "Sessions hebdomadaires d'étude approfondie de la Parole de Dieu"
      },
      {
        title: "Worship Night",
        description: "Soirées de louange et d'adoration mensuelles"
      },
      {
        title: "Missions Urbaines",
        description: "Projets d'évangélisation et de service communautaire"
      }
    ],
    leaders: [
      {
        name: "Thomas Martin",
        role: "Responsable Jeunesse",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
      }
    ]
  },
  children: {
    title: "Ministère des Enfants",
    subtitle: "Grandir dans l'amour de Dieu",
    description: "Un environnement sûr et amusant où les enfants découvrent l'amour de Dieu à travers des activités adaptées.",
    vision: "Accompagner chaque enfant dans sa découverte de Dieu et le développement de sa foi.",
    schedule: [
      {
        day: "Dimanche",
        time: "10h30 - 12h00",
        activity: "École du Dimanche"
      },
      {
        day: "Mercredi",
        time: "14h00 - 16h00",
        activity: "Club Biblique"
      }
    ],
    activities: [
      {
        title: "École du Dimanche",
        description: "Leçons bibliques adaptées à chaque tranche d'âge"
      },
      {
        title: "Club Vacances",
        description: "Activités spéciales pendant les vacances scolaires"
      },
      {
        title: "Chorale des Enfants",
        description: "Apprentissage de chants chrétiens et participation aux cultes"
      }
    ],
    leaders: [
      {
        name: "Marie Dubois",
        role: "Directrice du Ministère des Enfants",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
      }
    ]
  },
  adults: {
    title: "Ministère des Adultes",
    subtitle: "Croître dans la maturité spirituelle",
    description: "Des opportunités de croissance spirituelle et de communion fraternelle pour les adultes de tous âges.",
    vision: "Équiper les adultes pour une vie chrétienne épanouie et un impact positif dans leur sphère d'influence.",
    schedule: [
      {
        day: "Mardi",
        time: "19h00 - 20h30",
        activity: "Étude Biblique"
      },
      {
        day: "Samedi",
        time: "09h00 - 11h00",
        activity: "Petit-déjeuner & Prière"
      }
    ],
    activities: [
      {
        title: "Formation Disciples",
        description: "Programme de formation pour nouveaux convertis"
      },
      {
        title: "Groupes de Maison",
        description: "Rencontres hebdomadaires en petits groupes"
      },
      {
        title: "Séminaires Thématiques",
        description: "Formations sur des sujets spécifiques de la vie chrétienne"
      }
    ],
    leaders: [
      {
        name: "Pierre Durand",
        role: "Coordinateur du Ministère des Adultes",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
      }
    ]
  },
  women: {
    title: "Ministère des Femmes",
    subtitle: "Unies dans la foi et l'amour",
    description: "Un espace dédié aux femmes pour grandir ensemble dans la foi et se soutenir mutuellement.",
    vision: "Encourager et équiper les femmes pour rayonner l'amour de Christ dans tous les aspects de leur vie.",
    schedule: [
      {
        day: "Samedi",
        time: "14h00 - 16h00",
        activity: "Rencontre des Femmes"
      },
      {
        day: "Jeudi",
        time: "10h00 - 12h00",
        activity: "Groupe de Prière"
      }
    ],
    activities: [
      {
        title: "Petit-déjeuner des Femmes",
        description: "Moments de partage et d'encouragement mensuels"
      },
      {
        title: "Ateliers Pratiques",
        description: "Sessions sur des thèmes pertinents pour les femmes"
      },
      {
        title: "Projets Caritatifs",
        description: "Actions sociales et soutien communautaire"
      }
    ],
    leaders: [
      {
        name: "Sophie Laurent",
        role: "Responsable du Ministère des Femmes",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
      }
    ]
  },
  men: {
    title: "Ministère des Hommes",
    subtitle: "Bâtir des hommes selon le cœur de Dieu",
    description: "Un lieu où les hommes peuvent se rencontrer, partager et grandir ensemble dans leur marche avec Dieu.",
    vision: "Former des hommes de caractère, ancrés dans la Parole et leaders dans leur sphère d'influence.",
    schedule: [
      {
        day: "Samedi",
        time: "07h00 - 09h00",
        activity: "Petit-déjeuner des Hommes"
      },
      {
        day: "Mardi",
        time: "19h00 - 20h30",
        activity: "Groupe d'Étude"
      }
    ],
    activities: [
      {
        title: "Mentorat",
        description: "Programme de mentorat entre hommes"
      },
      {
        title: "Retraites",
        description: "Week-ends de ressourcement spirituel"
      },
      {
        title: "Projets de Service",
        description: "Actions pratiques au service de l'église et de la communauté"
      }
    ],
    leaders: [
      {
        name: "Jean-Marc Bernard",
        role: "Coordinateur du Ministère des Hommes",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
      }
    ]
  }
};