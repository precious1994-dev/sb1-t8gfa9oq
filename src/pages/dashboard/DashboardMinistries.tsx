import React, { useState } from 'react';
import { Search, Plus, Users, Calendar, Heart, Edit2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MinistryForm } from '@/components/dashboard/ministries/MinistryForm';
import { DeleteConfirmation } from '@/components/dashboard/shared/DeleteConfirmation';
import { useMinistries } from '@/hooks/useMinistries';
import { useModal } from '@/hooks/useModal';

export function DashboardMinistries() {
  const { ministries, addMinistry, updateMinistry, deleteMinistry } = useMinistries();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMinistry, setSelectedMinistry] = useState<any>(null);
  
  const addModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const handleAdd = async (data: any) => {
    try {
      await addMinistry(data);
      addModal.close();
    } catch (error) {
      console.error('Error adding ministry:', error);
    }
  };

  const handleEdit = async (data: any) => {
    if (!selectedMinistry) return;
    try {
      await updateMinistry(selectedMinistry.id, data);
      editModal.close();
    } catch (error) {
      console.error('Error updating ministry:', error);
    }
  };

  const handleDelete = async () => {
    if (!selectedMinistry) return;
    try {
      await deleteMinistry(selectedMinistry.id);
      deleteModal.close();
    } catch (error) {
      console.error('Error deleting ministry:', error);
    }
  };

  const filteredMinistries = ministries.filter(ministry =>
    ministry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ministry.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Gestion des Ministères</h1>
        <Button 
          className="flex items-center"
          onClick={addModal.open}
        >
          <Plus className="w-4 h-4 mr-2" />
          Nouveau ministère
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un ministère..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredMinistries.map((ministry) => (
            <div key={ministry.id} className="bg-white border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Heart className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold">{ministry.title}</h3>
                </div>
                <div className="flex space-x-2">
                  <button 
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => {
                      setSelectedMinistry(ministry);
                      editModal.open();
                    }}
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => {
                      setSelectedMinistry(ministry);
                      deleteModal.open();
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {ministry.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-indigo-600">
                    {ministry.leaders.length}
                  </div>
                  <div className="text-xs text-gray-500">Leaders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-indigo-600">
                    {ministry.category}
                  </div>
                  <div className="text-xs text-gray-500">Catégorie</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MinistryForm
        isOpen={addModal.isOpen}
        onClose={addModal.close}
        onSubmit={handleAdd}
        mode="create"
      />

      <MinistryForm
        isOpen={editModal.isOpen}
        onClose={editModal.close}
        onSubmit={handleEdit}
        initialData={selectedMinistry}
        mode="edit"
      />

      <DeleteConfirmation
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.close}
        onConfirm={handleDelete}
        itemName={selectedMinistry?.title || 'ce ministère'}
      />
    </div>
  );
}