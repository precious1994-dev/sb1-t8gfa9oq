import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MemberForm } from '@/components/dashboard/members/MemberForm';
import { DeleteConfirmation } from '@/components/dashboard/shared/DeleteConfirmation';
import { useMembers } from '@/hooks/useMembers';
import { useModal } from '@/hooks/useModal';

export function Members() {
  const { members, addMember, updateMember, deleteMember } = useMembers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState<any>(null);
  
  const addModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const handleAdd = async (data: any) => {
    try {
      await addMember({
        ...data,
        joinDate: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  const handleEdit = async (data: any) => {
    if (!selectedMember) return;
    try {
      await updateMember(selectedMember.id, data);
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  const handleDelete = async () => {
    if (!selectedMember) return;
    try {
      await deleteMember(selectedMember.id);
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Gestion des Membres</h1>
        <Button 
          className="flex items-center"
          onClick={addModal.open}
        >
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un membre
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un membre..."
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
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Téléphone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date d'adhésion
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {member.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{member.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{member.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      member.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {member.status === 'active' ? 'Actif' : 'Inactif'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(member.joinDate).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      className="text-indigo-600 hover:text-indigo-900 mr-3"
                      onClick={() => {
                        setSelectedMember(member);
                        editModal.open();
                      }}
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => {
                        setSelectedMember(member);
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

      <MemberForm
        isOpen={addModal.isOpen}
        onClose={addModal.close}
        onSubmit={handleAdd}
        mode="create"
      />

      <MemberForm
        isOpen={editModal.isOpen}
        onClose={editModal.close}
        onSubmit={handleEdit}
        initialData={selectedMember}
        mode="edit"
      />

      <DeleteConfirmation
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.close}
        onConfirm={handleDelete}
        itemName={selectedMember?.name || 'ce membre'}
      />
    </div>
  );
}