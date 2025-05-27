import { useState } from "react";
import RegisterForm from "../components/Forms/RegisterForm";
import LoginForm from "../components/Forms/LoginForm";

export default function AuthPage() {
    const [newUser, setNewUser] = useState(false);
    return newUser ? (<RegisterForm setNewUser={setNewUser} />) : (<LoginForm setNewUser={setNewUser} />);
}