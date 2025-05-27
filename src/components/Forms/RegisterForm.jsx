import { useAuth } from "../../context/auth/authContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({setNewUser}) {
    const nav = useNavigate;
    const {login} = useAuth();
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function onChange(ev){
        setFormData({...formData, [ev.target.name]: ev.target.value})
    };

    async function onSubmit(ev) {
        ev.preventDefault();
        try {
            login(formData);
            //nav()
        } catch (error) {
            
        }
        
    }


    

    return <form>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="password" name="" id="" />
        <input type="password" name="" id="" />
        <input type="submit" value='Register' />
        <p>Already a User? <span onClick={()=>{setNewUser(false)}}>Login</span></p>
    </form>
}