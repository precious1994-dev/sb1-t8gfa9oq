import React from 'react';
import { EmailItem } from './EmailItem';

const emails = [
  {
    id: 1,
    sender: 'Pasteur David',
    subject: 'Préparation du culte de dimanche',
    time: '1:24 PM',
    avatar: 'https://i.pravatar.cc/40?img=1'
  },
  {
    id: 2,
    sender: 'Marie (Ministère Jeunesse)',
    subject: 'Programme retraite jeunes',
    time: '12:32 PM',
    avatar: 'https://i.pravatar.cc/40?img=2'
  },
  {
    id: 3,
    sender: 'Paul (Chorale)',
    subject: 'Répétition chorale - Nouveaux chants',
    time: 'Hier à 8:57 PM',
    avatar: 'https://i.pravatar.cc/40?img=3'
  }
];

export function RecentEmails() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Messages Récents</h3>
      <div className="space-y-4">
        {emails.map((email) => (
          <EmailItem key={email.id} {...email} />
        ))}
      </div>
    </div>
  );
}