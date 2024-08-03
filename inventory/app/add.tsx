// components/AddItem.tsx
'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import db from './firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

const AddItem: React.FC = () => {
    const [value, setValue] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "items"), {
                name: value
            });
            console.log("Document written with ID: ", docRef.id);
            setValue(''); // Clear the form
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Add a new item"
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItem;
