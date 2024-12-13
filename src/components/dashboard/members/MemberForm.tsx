import React from 'react';
import { Modal } from '../shared/Modal';
import { Button } from '@/components/ui/Button';

interface MemberFormData {
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
}

interface MemberFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MemberFormData) => void;
  initialData?: MemberFormData;
  mode: 'create' | 'edit';
}

export function MemberForm({ 
  isOpen, 
  onClose, 
  onSubmit, 
  initialData, 
  mode 
}: MemberFormProps) {
  const [formData, setFormData] = React.useState<MemberFormData>(
    initialData || {
      name: '',
      email: '',
      phone: '',
      status: 'active'
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
      title={mode === 'create' ? 'Ajouter un membre' : 'Modifier le membre'}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Statut
          </label>
          <select
            value={formData.status}
            onChange={(e) => setFormData({ 
              ...formData, 
              status: e.target.value as 'active' | 'inactive' 
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="active">Actif</option>
            <option value="inactive">Inactif</option>
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
            {mode === 'create' ? 'Ajouter' : 'Enregistrer'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}