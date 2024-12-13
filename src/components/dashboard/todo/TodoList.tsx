import React from 'react';
import { Calendar, Music, BookOpen, Heart } from 'lucide-react';
import { TodoItem } from './TodoItem';

const todos = [
  {
    id: 1,
    title: 'Préparer le culte de dimanche',
    time: 'Dim 3 à 10:30',
    icon: Calendar
  },
  {
    id: 2,
    title: 'Répétition chorale',
    time: 'Sam 2 à 15:00',
    icon: Music
  },
  {
    id: 3,
    title: 'Étude biblique',
    time: 'Mer 6 à 19:00',
    icon: BookOpen
  },
  {
    id: 4,
    title: 'Réunion ministère des femmes',
    time: 'Jeu 7 à 18:30',
    icon: Heart
  }
];

export function TodoList() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Événements à Venir</h3>
      <div className="space-y-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
}