import React, {  ReactNode } from 'react';

interface AlertProps {
    type: 'primary' | 'success' | 'danger' | 'warning';
    onDismiss?: () => void;
    children?: ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
    const alertClass = `alert alert-${type} alert-dismissible`;
    return (
        <div className={alertClass} role="alert">
            {children}
            {onDismiss && (
                <button type="button" className="close" aria-label="Close" onClick={onDismiss}>
                    <span aria-hidden="true">&times;</span>
                </button>
            )}
        </div>
    );
};

export default Alert;
