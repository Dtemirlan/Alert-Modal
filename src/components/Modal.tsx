// Modal.tsx
import React, {  ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ButtonConfig {
    type: 'primary' | 'success' | 'danger' | 'warning';
    label: string;
    onClick: () => void;
}

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    buttons?: ButtonConfig[];
}

const Modal: React.FC<ModalProps> = ({ show, onClose, title, children, buttons }) => {
    const modalClass = `modal fade text-center ${show ? 'show' : ''}`;
    return (
        <div className={modalClass} tabIndex={-1} role="dialog" style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    {buttons && buttons.length > 0 && (
                        <div className="modal-footer">
                            {buttons.map((button, index) => (
                                <button key={index} type="button" className={`btn btn-${button.type}`} onClick={button.onClick}>
                                    {button.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
