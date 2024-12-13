import React from 'react';
import { Modal } from '../shared/Modal';
import { Button } from '@/components/ui/Button';
import { MinistryFormBasicInfo } from './MinistryFormBasicInfo';
import { MinistryFormLeaders } from './MinistryFormLeaders';

interface MinistryFormData {
  title: string;
  description: string;
  category: string;
  leaders: string[];
}

interface MinistryFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MinistryFormData) => void;
  initialData?: MinistryFormData;
  mode: 'create' | 'edit';
}

export function MinistryForm({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  mode
}: MinistryFormProps) {
  const [formData, setFormData] = React.useState<MinistryFormData>(
    initialData || {
      title: '',
      description: '',
      category: 'Jeunesse',
      leaders: []
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
      title={mode === 'create' ? 'Nouveau ministère' : 'Modifier le ministère'}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <MinistryFormBasicInfo
          data={formData}
          onChange={(data) => setFormData({ ...formData, ...data })}
        />

        <MinistryFormLeaders
          leaders={formData.leaders}
          onChange={(leaders) => setFormData({ ...formData, leaders })}
        />

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