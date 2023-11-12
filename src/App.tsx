// App.tsx
import  { useState } from 'react';
import Modal from './components/Modal.tsx';

type ButtonType = 'primary' | 'success' | 'danger' | 'warning';

interface ButtonConfig {
    type: ButtonType;
    label: string;
    onClick: () => void;
}

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const continueHandler = () => {
        alert('Continue clicked');
    };

    const cancelHandler = () => {
        alert('Cancel clicked');
    };

    const buttons: ButtonConfig[] = [
        { type: 'primary', label: 'Continue', onClick: continueHandler },
        { type: 'danger', label: 'Close', onClick: cancelHandler },
    ];

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <button className="btn btn-primary" onClick={openModal}>Open Modal</button>
            <Modal
                show={showModal}
                onClose={closeModal}
                title="Some kinda modal title"
                buttons={buttons}
            >
                <p>This is modal content</p>
            </Modal>
        </div>
    );
};

export default App;
