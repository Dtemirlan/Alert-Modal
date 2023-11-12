
import  { useState } from 'react';
import Alert from './components/Alert.tsx';
import Modal from './components/Modal.tsx';

type ButtonType = 'primary' | 'success' | 'danger' | 'warning';

interface ButtonConfig {
    type: ButtonType;
    label: string;
    onClick: () => void;
}

const App = () => {
    const [showAlert, setShowAlert] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const closeAlert = () => {
        setShowAlert(false);
    };

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
        <div className="container mt-5">
            {showAlert && (
                <>
                    <Alert type="warning" onDismiss={closeAlert}>
                        This is a warning type alert
                    </Alert>

                    <Alert type="success">
                        This is a success type alert
                    </Alert>
                </>
            )}

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
