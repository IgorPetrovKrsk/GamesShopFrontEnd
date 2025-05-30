import { useState } from "react"
import { useAuth } from "../../context/auth/authContext";
import axios from "axios";

export default function GameControls({ admin, gameId }) {
    const { cookies } = useAuth();
    const [qty, setQty] = useState(0);

    function onChange(ev) {
        setQty(ev.target.value)
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        try {
            await axios.post(`http://localhost:3000/api/cart/${gameId}`, { qty: qty },
                { headers: { 'x-auth-token': cookies.token } });
            alert('Successfully added to cart');
        } catch (err) {
            console.error(err);
        }

    }

    async function onDelete(ev) {
        try {
            await axios.delete(`http://localhost:3000/api/game/${gameId}`,
                { headers: { 'x-auth-token': cookies.token } }
            )
            alert('Game deleted')
        } catch (err) {
            console.error(err);

        }

    }

    return (
        <>
            {admin ?
                <>
                    <button onClick={onDelete}>
                        Delete
                    </button>
                    <button>
                        Edit
                    </button>
                </> :
                <form onSubmit={onSubmit}>
                    <input type='number' name='qty' placeholder="1" onChange={onChange} />
                    <input type="submit" value='Add / Remove from cart' />
                </form >
            }

        </>
    )

}