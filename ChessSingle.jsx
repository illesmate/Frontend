import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

export const ChessSingle = ()=> {
    const params = useParams();
    const id = params.chessId;
    //VAGY:
    // const { chessId } = useParams(); viszont közvetlenül kell használni chessId-ként!
    //végpontnál a + chessId-ként tudjátok használni!
const [chess, setChess] = useState([]);
const [isPending, setPending] = useState(false);
useEffect(() => {
    {(async () => {
        setPending(true);
        try {
            const response = await fetch(`https://chess.sulla.hu/chess/${id}`)
            const result = await response.json();
            setChess(result);
        }
        catch(error) {
            console.log("Hiba: ", error);
        }
        finally {
            setPending(false);
        }
    })();
}
},[]);

return (
    <div className="p-5 m-auto text-center content bg-levander">
        {isPending || !chess.id ? (
            <div className="spinner-border text-danger"></div>
        ) : (
            <div className="card p-3">
                <div className="card-body">
                <h5 className="card-title">Sakkozó neve: {chess.name}</h5>
                <div className="lead">Születési név: {chess.birth_date}</div>
                <div className="lead">Nyert világbajnokságok száma: {chess.world_ch_won}</div>
                <Link to={chess.profile_url} target="_blank">Profil link</Link><br />
                <img src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400x800"} 
                alt={chess.name} style={{ maxHeight: "250px"}} className="img-fluid" />
            </div>
            <Link to="/"><i className="bi bi-backspace-fill"></i></Link>
            </div>
        )}
    </div>
);
}