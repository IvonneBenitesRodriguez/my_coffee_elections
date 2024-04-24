import React from 'react';
import { useState } from 'react';

function Modal ({ isOpen, onClose }) {
    console.log('Is modal open?', isOpen);
    return (
        <>
        {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className='bg-white rounded-lg shadow-md p-6' style={{backgroundColor: 'pink', color:'white', height:'90px'}}>
                    <h2 className="text-xl font-semibold mb-4" style={{marginTop:'20px'}}>Information submitted!</h2>
                    <div className='text-sm mb-2'>Thank you for subscribing.</div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded' 
                    onClick={onClose} style={{color:'white'}}>X</button>
                    </div>
            </div>
        )
        }
        </>
    );
}

function Newsletter() {
   
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
    <div style={{marginBottom: '30px'}}>
            <div style={{marginTop:'1.5rem', marginBottom:'1.2rem'}}>
                <h3 className='font-bold text-2xl'>Subscribe to our Monthly News</h3>
            </div>
            <div className='flex justify-center'>
                <input type='text' style={{marginRight:'1.5rem', color:'black', width:'245px'}} placeholder='Add your email...' />
                <button className='ml-6 text-white font-bold rounded' 
                style={{backgroundColor:'brown', width:'70px', borderRadius:'30px', height:'30px'}}
                onClick={handleSubmit}
                >
                    Add
                </button>
            </div>
            <Modal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
    );
}
export default Newsletter;
