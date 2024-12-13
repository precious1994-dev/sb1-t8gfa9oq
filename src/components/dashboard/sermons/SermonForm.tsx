import React from 'react';
import { Modal } from '../shared/Modal';
import { Button } from '@/components/ui/Button';

interface SermonFormData {
  title: string;
  speaker: string;
  date: string;
  duration: string;
  audioFile?: File;
}

interface SermonFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SermonFormData) => void;
  initialData?: SermonFormData;
  mode: 'create' | 'edit';
}

export function SermonForm({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  mode
}: SermonFormProps) {
  const [formData, setFormData] = React.useState<SermonFormData>(
    initialData || {
      title: '',
      speaker: '',
      date: new Date().toISOString().split('T')[0],
      duration: '',
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
      title={mode === 'create' ? 'Ajouter un sermon' : 'Modifier le sermon'}
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
            Prédicateur
          </label>
          <input
            type="text"
            value={formData.speaker}
            onChange={(e) => setFormData({ ...formData, speaker: e.target.value })}
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
            Durée (mm:ss)
          </label>
          <input
            type="text"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            placeholder="45:30"
            pattern="[0-9]{2}:[0-9]{2}"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fichier Audio
          </label>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setFormData({ 
              ...formData, 
              audioFile: e.target.files?.[0] 
            })}
            className="mt-1 block w-full"
          />
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
            {mode === 'create' ? 'Ajouter' : 'Enregistrer'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}