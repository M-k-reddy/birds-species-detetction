import React, { useState } from 'react';
import { FaDove,  FaCamera, FaImage, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import './MainContent.css'; // Assuming you have a CSS file for styling

const MainContent = () => {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [species, setSpecies] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleFileUpload = async (event) => {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await axios.post('http://localhost:5000/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Response:', response.data); // Log the response for debugging
                if (response.data.birds) {
                    setSpecies(response.data.birds.join(', '));
                    setImageUrl(response.data.image_url);
                    setFileUploaded(true);
                } else {
                    console.error('No species detected in response:', response.data);
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    const handleClose = () => {
        setFileUploaded(false);
        setSpecies('');
        setImageUrl('');
    };

    return (
        <>
            <div className="main-container">
                <div className="inner-container">
                    <div className='inner-main-container'>
                        <p className='inner-container-heading'>All About Birds</p>
                        <div className='tag-line'>
                            <p className='inner-container-content'>Detect Species by Image!</p>
                            <FaDove />
                            <FaCamera />
                        </div>
                        <p className='tag-line-2'>"Capturing Birds in Every Frame"</p>
                    </div>
                    <div className='img-input'>
                        <label className='centered-label'>
                            <FaImage className='gallery-img' />
                            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileUpload} />
                        </label>
                    </div>
                </div>
            </div>
            {fileUploaded && (
                <div className='upload-message'>
                    <FaTimes className='close-icon' onClick={handleClose} />
                    <p>File has been uploaded successfully!</p>
                    <p>Detected Species: {species}</p>
                    {imageUrl && <img src={`http://localhost:5000/${imageUrl}`} alt="Uploaded Bird" style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px', marginBottom: '20px' }} />}
                </div>
            )}
        </>
    );
};

export default MainContent;