import React, { useState } from 'react';
import { Search, Plus, Calendar, MapPin, Users, Trash2, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { EventForm } from '@/components/dashboard/events/EventForm';
import { DeleteConfirmation } from '@/components/dashboard/shared/DeleteConfirmation';
import { useEvents } from '@/hooks/useEvents';
import { useModal } from '@/hooks/useModal';

export function Events() {
  const { events, addEvent, updateEvent, deleteEvent } = useEvents();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  
  const addModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();

  const handleAdd = async (data: any) => {
    try {
      await addEvent(data);
      addModal.close();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleEdit = async (data: any) => {
    if (!selectedEvent) return;
    try {
      await updateEvent(selectedEvent.id, data);
      editModal.close();
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleDelete = async () => {
    if (!selectedEvent) return;
    try {
      await deleteEvent(selectedEvent.id);
      deleteModal.close();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Gestion des Événements</h1>
        <Button 
          className="flex items-center"
          onClick={addModal.open}
        >
          <Plus className="w-4 h-4 mr-2" />
          Créer un événement
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un événement..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mt-1">
                    {event.category}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button 
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => {
                      setSelectedEvent(event);
                      editModal.open();
                    }}
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => {
                      setSelectedEvent(event);
                      deleteModal.open();
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(event.date).toLocaleDateString('fr-FR')} à {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EventForm
        isOpen={addModal.isOpen}
        onClose={addModal.close}
        onSubmit={handleAdd}
        mode="create"
      />

      <EventForm
        isOpen={editModal.isOpen}
        onClose={editModal.close}
        onSubmit={handleEdit}
        initialData={selectedEvent}
        mode="edit"
      />

      <DeleteConfirmation
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.close}
        onConfirm={handleDelete}
        itemName={selectedEvent?.title || 'cet événement'}
      />
    </div>
  );
}