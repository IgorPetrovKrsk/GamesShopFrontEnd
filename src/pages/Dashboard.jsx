import { useEffect } from "react"
import { userInfo } from "../context/user/userContext"
import { useAuth } from "../context/auth/authContext";
import axios from "axios"

export default function Dashboard() {
    const { cookies } = useAuth();
    const { setUser, setCart } = userInfo();

    useEffect(() => {
        async function getUser() {
            try {
                let res = await axios.get(`http://localhost:3000/api/user`, {
                    headers: { 'x-auth-token': cookies.token }
                });
                setCart(res.data.cart.items);
                const { username, admin, email } = res.data
                setUser({ username, email, admin });
            } catch (err) {
                console.error(err.massage);
            }
        }

        getUser();
    }, [])

    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}