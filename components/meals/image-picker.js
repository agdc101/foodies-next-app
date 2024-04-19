'use client';

import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}) {
    const input = useRef();
    
    function handlePickClick() {
        input.current.click();
    }   
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls} >
                <input ref={input} className={classes.input} type="file" id="image" name={name} accept=".jpg,.jpeg,.png" />
                <button className={classes.button} onClick={handlePickClick} type="button">Pick Image</button>
            </div>
        </div>
    );
}
