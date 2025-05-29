import { useAuth } from "../../context/auth/authContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({ setNewUser }) {

    const { signup } = useAuth();
    const nav = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    function onChange(ev) {
        setFormData({ ...formData, [ev.target.name]: ev.target.value })
    };

    async function onSubmit(ev) {
        ev.preventDefault();


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let msg = '';

        if (!formData.username.trim()) {
            msg += `Please include UserName \n`
        }

        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            msg += 'Please include valid Email \n'
        }
        if (!formData.password.trim() || formData.password !== formData.password2) {
            msg += 'Please include a password and make sure they match'
        }

        if (msg) {
            return alert(msg)
        }

        try {
            await signup(formData);
            nav("/dashboard");
        } catch (err) {
            alert("Regsiter Failed, Make sure you dont have an account already");
            console.error(err);
        }
    }

    return <form onSubmit={onSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="username" placeholder='Username' onChange={onChange} value={formData.username} />
        <br />
        <label htmlFor="">Email</label>
        <input type='email' name="email" onChange={onChange} placeholder='Email' value={formData.email} />
        <br />
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={onChange} placeholder='Password' value={formData.password} />
        <br />
        <label htmlFor="">Confirm password</label>
        <input type="password" name="password2" onChange={onChange} placeholder='Confirm password' value={formData.password2} />
        <br />
        <input type="submit" value='Register' />
        <p>Already a User? <span onClick={() => { setNewUser(false) }}>Login</span></p>
    </form>
}