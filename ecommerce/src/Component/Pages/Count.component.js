import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Count = () => {
    const data = useSelector(data => data)
    // console.log(data)
    const counts = data.count.count
    const games = data.game.gameName

    const [game, setGame] = useState("")

    const dispatch = useDispatch()
    /*
    data = {
        count:{
            count:100
        },
        game:{
            gameName:'football'
        }
    }
    
    
    */
    const handleSubmit = e => {
        dispatch({
            type: 'CHANGE_GAME',
            payload: game
        })
    }
    return (
        <>
            <div>Count: {counts}</div>
            <div>Game: {games}</div>
            Update Game:
            <input type='text' onChange={e => setGame(e.target.value)} />
            <br></br>
            <button type='submit' onClick={handleSubmit} >submit</button>
        </>
    )
}

export default Count