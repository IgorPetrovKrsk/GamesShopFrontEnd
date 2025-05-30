import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/authContext";
import { userInfo } from "../context/user/userContext";
import { useEffect } from "react";
import axios from "axios";

export default function Nav() {

  const nav = useNavigate();
  const { user, setUser, setCart } = userInfo();

  const { cookies, logout } = useAuth();

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
    if (cookies.token && !user)
      getUser();
  }, [])

  function onLogout() {
    logout();
    nav('/');
  }

  return (
    <div style={styles.navbar}>
      <Link to="/"><img src="src\assets\Games shop logo.png" alt="Games shop logo" width={50} /></Link>
      {/* <Link to="">←</Link> */}
      <Link to="/">HOME</Link>
      <Link to="/auth">Log in</Link>
      {cookies.token ?
        <>
          <Link to="/dashboard">Dashboard</Link>
          {user?.admin ? (
            <Link to="/create">Create Form</Link>
          ) : null}
          <button onClick={onLogout}>LogOut </button>
        </>
        : null
      }
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between", // Spreads items evenly
    border: "10px solid #646cff",
    alignItems: "center", // Centers items vertically
    padding: "10px 20px",
  },
};

