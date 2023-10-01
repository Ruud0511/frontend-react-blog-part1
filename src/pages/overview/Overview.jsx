import './Overview.css'
import {useParams} from "react-router-dom";
function Overview () {
    const {postId} = useParams()
    return (
        <h1>Hier lees je bericht {postId}</h1>
    )
}

export default Overview

