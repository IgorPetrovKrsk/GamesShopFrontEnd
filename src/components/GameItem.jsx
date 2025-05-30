import { Link } from 'react-router-dom'
import style from './gameItem.module.css'
import { userInfo } from '../context/user/userContext'
import GameControls from './GameControls/GameControls';

export default function GameItem({ gameItem }) {
    const { user } = userInfo();

    return (<div className={style.gameItem}>
        <Link to={`/product/${gameItem._id}`}><h3>{gameItem.title}</h3></Link>
        <p>$ {gameItem.price}</p>
        <p>Description: {gameItem.desc}</p>
        {user && <GameControls gameId={gameItem._id} admin={user.admin} />}
    </div>)
}