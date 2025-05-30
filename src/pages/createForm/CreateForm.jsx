import { useState } from 'react'
import styles from './createform.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';


export default function CreateForm() {

    //const adminUserToken = import.meta.env.VITE_ADMIN_USER_TOKEN;
    const { cookies } = useAuth();
    const nav = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: 0.00,
        desc: '',
        qty: 0,
        img: ''
    });

    function onChange(ev) {
        setFormData({ ...formData, [ev.target.name]: ev.target.value })
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        try {
            if (formData.title && formData.category && formData.desc && formData.img) {
                let response = await axios.post('http://localhost:3000/api/game', formData, {
                    headers: {
                        'x-auth-token': cookies.token
                    }
                });
                nav('/');

            } else {
                return alert('Please fill all fields');
            }
        } catch (er) {
            console.error(er);
        }
    }


    return (
        <>
            <form onSubmit={onSubmit} className={styles.createForm}>
                <h3>Add new game</h3>
                <input type="text" name="title" onChange={onChange} placeholder="Title..." value={formData.title} />
                <select name="category" onChange={onChange} value={formData.category}>
                    <option value="">...Choose one</option>
                    <option value="Board">Board</option>
                    <option value="Dice">Dice</option>
                    <option value="Card">Card</option>
                    <option value="Outdor">Outdor</option>
                    <option value="Video">Video</option>
                    <option value="Other">Other</option>
                </select>
                <label>Price:
                    <input type="number" name="price" onChange={onChange} placeholder="" value={formData.price} />
                </label>
                <input type="textarea" name="desc" onChange={onChange} placeholder="Please Enter a Description" value={formData.desc} />
                <label>Quantity:
                    <input type="number" name="qty" onChange={onChange} min={0} placeholder="" value={formData.qty} />
                </label>
                <input type="text" name="img" onChange={onChange} placeholder="Image URL..." value={formData.img} />
                <input type="submit" value="Add Game" />
                <button>Cancel</button>
            </form>

        </>
    )
}