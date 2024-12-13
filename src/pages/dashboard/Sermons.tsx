import React, { useState } from 'react';
import { Search, Plus, Play, Download, Trash2, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SermonForm } from '@/components/dashboard/sermons/SermonForm';
import { DeleteConfirmation } from '@/components/dashboard/shared/DeleteConfirmation';
import { useSermons } from '@/hooks/useSermons';
import { useModal } from '@/hooks/useModal';

export function Sermons() {
  const { sermons, addSermon, updateSermon, deleteSermon } = useSermons();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSermon, setSelectedSermon] = useState<any>(null);
  
  const addModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const handleAdd = async (data: any) => {
    try {
      if (!data.audioFile) {
        throw new Error('Audio file is required');
      }
      await addSermon(data, data.audioFile);
      addModal.close();
    } catch (error) {
      console.error('Error adding sermon:', error);
    }
  };

  const handleEdit = async (data: any) => {
    if (!selectedSermon) return;
    try {
      await updateSermon(selectedSermon.id, data, data.audioFile);
      editModal.close();
    } catch (error) {
      console.error('Error updating sermon:', error);
    }
  };

  const handleDelete = async () => {
    if (!selectedSermon) return;
    try {
      await deleteSermon(selectedSermon.id);
      deleteModal.close();
    } catch (error) {
      console.error('Error deleting sermon:', error);
    }
  };

  const filteredSermons = sermons.filter(sermon =>
    sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Gestion des Sermons</h1>
        <Button 
          className="flex items-center"
          onClick={addModal.open}
        >
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un sermon
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un sermon..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prédicateur
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durée
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSermons.map((sermon) => (
                <tr key={sermon.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {sermon.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{sermon.speaker}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(sermon.date).toLocaleDateString('fr-FR')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{sermon.duration}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                      <Play className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900 mr-3">
                      <Download className="w-4 h-4" />
                    </button>
                    <button 
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                      onClick={() => {
                        setSelectedSermon(sermon);
                        editModal.open();
                      }}
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => {
                        setSelectedSermon(sermon);
                        deleteModal.open();
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <SermonForm
        isOpen={addModal.isOpen}
        onClose={addModal.close}
        onSubmit={handleAdd}
        mode="create"
      />

      <SermonForm
        isOpen={editModal.isOpen}
        onClose={editModal.close}
        onSubmit={handleEdit}
        initialData={selectedSermon}
        mode="edit"
      />

      <DeleteConfirmation
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.close}
        onConfirm={handleDelete}
        itemName={selectedSermon?.title || 'ce sermon'}
      />
    </div>
  );
}