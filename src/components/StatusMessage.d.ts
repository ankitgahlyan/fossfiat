import React from 'react';
interface StatusMessageProps {
    message: string;
    type: 'success' | 'error' | 'info';
    onClose?: () => void;
}
export declare const StatusMessage: React.FC<StatusMessageProps>;
export {};
