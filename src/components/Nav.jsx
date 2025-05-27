import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/authContext";

export default function Nav() {
  const { cookies } = useAuth();

  function logout() {
    logout();
  }

  return (
    <div style={styles.navbar}>
      <Link to="/"><img src="src\assets\Games shop logo.png" alt="Games shop logo" width={50} /></Link>
      <Link to="">←</Link>
      <Link to="/">HOME</Link>
      <Link to="/auth">Log in</Link>
      {cookies.token ?
        <>
          <Link to="">Dashboard</Link>
          <button onClick={logout}>LogOut </button>
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

