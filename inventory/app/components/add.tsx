// components/AddItem.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import db from '../firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

const AddItem: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [count, setCount] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "items"), {
                name: name,
                count: parseInt(count) || 0
            });
            console.log("Document written with ID: ", docRef.id);
            setName(''); // Clear the form
            setCount(''); // Clear the form
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleCount = (event: ChangeEvent<HTMLInputElement>) => {
        setCount(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-row justify-center gap-2 '>
            <input
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Add a new item"
                className="input input-bordered w-full max-w-xs"
            />
            <input
                type="number"
                value={count}
                onChange={handleCount}
                placeholder="Number of item"
                className="input input-bordered w-full max-w-xs"
            />
            <button type="submit" className="btn btn-neutral">Add Item</button>
        </form>
    );
};

export default AddItem;
