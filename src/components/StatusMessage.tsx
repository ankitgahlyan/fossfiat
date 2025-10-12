import React from 'react';

interface StatusMessageProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose?: () => void;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ message, type, onClose }) => {
  return (
    <div className={`status-message status-${type}`}>
      {message}
      {onClose && <button onClick={onClose} className="close-btn">×</button>}
    </div>
  );
};