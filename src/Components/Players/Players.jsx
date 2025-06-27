import { useState } from "react";
import Player from "../Player/Player";

const Players = ({handleByePlayer}) => {
    const [players, setPlayers] = useState([]);
    useState(
        fetch("data.json")
        .then(res => res.json())
        .then(data => setPlayers(data))
    )
    return (
        <div className="max-w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mx-auto my-10">
            {/* <h1>Plyers:{players.length}</h1> */}
            {
                players.map(player => <Player key={player.id} player={player} 
                    handleByePlayer={handleByePlayer}></Player>)
            }
        </div>
    );
};

export default Players;