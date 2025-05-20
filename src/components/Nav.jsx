import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div style={styles.navbar}>
            <Link to="/"><img src="src\assets\Games shop logo.png" alt="Games shop logo" width={50}/></Link>
            <Link to="">←</Link>
            <Link to="/">HOME</Link>
            <Link to="/auth">Log in</Link>
            <Link to="">Dashboard</Link>            
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

