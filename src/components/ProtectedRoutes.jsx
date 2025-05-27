import { Outlet } from "react-router-dom";
import { useAuth } from "../context/auth/authContext";
import LoginPage from '../pages/Login'

export default function ProtectedRoutes(){
    const {cookies} = useAuth();
    return cookies.token? <Outlet/> : <LoginPage/>
}
