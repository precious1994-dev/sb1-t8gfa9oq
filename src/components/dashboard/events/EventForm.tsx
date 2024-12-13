import React from 'react';
import { Modal } from '../shared/Modal';
import { Button } from '@/components/ui/Button';

interface EventFormData {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

interface EventFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EventFormData) => void;
  initialData?: EventFormData;
  mode: 'create' | 'edit';
}

export function EventForm({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  mode
}: EventFormProps) {
  const [formData, setFormData] = React.useState<EventFormData>(
    initialData || {
      title: '',
      date: new Date().toISOString().split('T')[0],
      time: '',
      location: '',
      category: 'Culte'
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'create' ? 'Créer un événement' : 'Modifier l\'événement'}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Titre
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Heure
          </label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Lieu
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Catégorie
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="Culte">Culte</option>
            <option value="Formation">Formation</option>
            <option value="Jeunesse">Jeunesse</option>
            <option value="Enfants">Enfants</option>
            <option value="Femmes">Femmes</option>
            <option value="Hommes">Hommes</option>
          </select>
        </div>

        <div className="flex justify-end space-x-3">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Annuler
          </Button>
          <Button type="submit">
            {mode === 'create' ? 'Créer' : 'Enregistrer'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}