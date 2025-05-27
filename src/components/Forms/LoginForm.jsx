import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";
import { useState } from "react";

export default function LoginForm({ setNewUser }) {

    const { login } = useAuth();
    const nav = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function onChange(ev) {
        setFormData({ ...formData, [ev.target.name]: ev.target.value });
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        try {
            await login(formData);
            nav("/dashboard");
        } catch (err) {
            console.error(err);
        }
    }
    return <form onSubmit={onSubmit}>
        <input type="text" name="email" id="" placeholder="Email" onChange={onChange} />
        <input type='password' name="password" id="" placeholder="Password" onChange={onChange} />
        <input type="submit" value='Login' />
        <p>Not a User? <span onClick={() => { setNewUser(true) }}> Sing UP</span></p>
    </form>
}