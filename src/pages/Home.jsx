import axios from "axios";
import { useEffect, useState } from "react"

export default function Home() {
    const [games, setGames] = useState([{}]);

    useEffect(() => {
        async function getGames() {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/game');
                if (response.status == 200) {
                    setGames(response.data);
                }
                else {
                    console.error(`Bad request. Error status ${response.status}`);
                }
            } catch (err) {
                console.error(`Bad request. Error status ${err.message}`);
            }
        }
        getGames();
    }, [])

    let loading = () => {
         <p>Loading data</p> 
    }
    let loaded = () => {
        return games.map((it)=>{
            return <div>
            <h3>{it.title}</h3>
            <p>$ {it.price}</p>
            <p>Description: {it.desc}</p>
            </div>
        }) 
    }

    return (
        <>
            {(games.length != 0) ? loaded() : loading()}
        </>
    )
}