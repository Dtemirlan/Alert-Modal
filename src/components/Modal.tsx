import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, title, children }) => {
    const modalClass = show ? 'modal fade show' : 'modal fade';
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
                </div>
            </div>
        </div>
    );
};

export default Modal;
