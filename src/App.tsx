import { useState } from 'react';
import Alert from './components/Alert.tsx';
import Modal from './components/Modal.tsx';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const closeAlert = () => {
        console.log('Alert closed');
    };

    return (
        <div className="container mt-5">
            <Alert type="warning" onDismiss={closeAlert}>
                This is a warning type alert
            </Alert>

            <Alert type="success">
                This is a success type alert
            </Alert>

            <button className="btn btn-primary" onClick={openModal}>Open Modal</button>
            <Modal
                show={showModal}
                onClose={closeModal}
                title="Some kinda modal title"
            >
                <p>This is modal content</p>
            </Modal>
        </div>
    );
};

export default App;
