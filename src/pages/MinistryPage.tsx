import React from 'react';
import { useParams } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { ministryRoutes } from '@/routes/ministries.routes';
import { ministryContent } from '@/data/ministry-content';
import { Calendar, Target, Users } from 'lucide-react';

export function MinistryPage() {
  const { id } = useParams();
  const ministry = ministryRoutes.find(m => m.link === `/ministries/${id}`);
  const content = id ? ministryContent[id] : null;

  if (!ministry || !content) {
    return (
      <Section className="pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Ministère non trouvé</h1>
        </div>
      </Section>
    );
  }

  const Icon = ministry.icon;

  return (
    <>
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-indigo-100 rounded-full">
              <Icon className="h-12 w-12 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
          <p className="text-xl text-indigo-600 mb-6">{content.subtitle}</p>
          <p className="text-xl text-gray-600">{content.description}</p>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <Target className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold">Notre Vision</h2>
          </div>
          <p className="text-gray-600 text-lg">{content.vision}</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold">Horaires</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm divide-y">
            {content.schedule.map((item, index) => (
              <div key={index} className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{item.activity}</p>
                    <p className="text-gray-600">{item.day}</p>
                  </div>
                  <p className="text-indigo-600 font-medium">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Nos Activités</h2>
          <div className="grid gap-6">
            {content.activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold">Notre Équipe</h2>
          </div>
          <div className="grid gap-8">
            {content.leaders.map((leader, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{leader.name}</h3>
                  <p className="text-gray-600">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}