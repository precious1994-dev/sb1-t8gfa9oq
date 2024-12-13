import React from 'react';
import { Modal } from './Modal';
import { Button } from '@/components/ui/Button';

interface DeleteConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
}

export function DeleteConfirmation({ 
  isOpen, 
  onClose, 
  onConfirm, 
  itemName 
}: DeleteConfirmationProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Confirmer la suppression"
    >
      <div className="mt-2">
        <p className="text-gray-600">
          Êtes-vous sûr de vouloir supprimer {itemName} ? 
          Cette action est irréversible.
        </p>
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <Button
          variant="outline"
          onClick={onClose}
        >
          Annuler
        </Button>
        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          className="bg-red-600 hover:bg-red-700"
        >
          Supprimer
        </Button>
      </div>
    </Modal>
  );
}