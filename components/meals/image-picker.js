'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState();

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }
        const reader = new FileReader();
        reader.onload = function() {
            setPickedImage(reader.result);
        };
        reader.readAsDataURL(file);
    }

    const input = useRef();
    
    function handlePickClick() {
        input.current.click();
    }   
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls} >
                <div className={classes.preview}>
                    {pickedImage && <Image src={pickedImage} alt="image selected by user" fill /> }
                    {!pickedImage && <p>No image picked yet.</p>}
                </div>
                <input ref={input} className={classes.input} type="file" id="image" name={name} accept=".jpg,.jpeg,.png" onChange={handleImageChange} required />
                <button className={classes.button} onClick={handlePickClick} type="button">Pick Image</button>
            </div>
        </div>
    );
}
