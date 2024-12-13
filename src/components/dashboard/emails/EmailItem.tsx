import React from 'react';

interface EmailItemProps {
  sender: string;
  subject: string;
  time: string;
  avatar: string;
}

export function EmailItem({ sender, subject, time, avatar }: EmailItemProps) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={avatar}
        alt={sender}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {sender}
        </p>
        <p className="text-sm text-gray-500 truncate">{subject}</p>
      </div>
      <div className="text-sm text-gray-500">{time}</div>
    </div>
  );
}