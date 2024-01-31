import React from 'react'

export const Card = ({ card_item }) => {
    // console.log(props.id)
    return (
        <div className='text-center'>
            <h1>Id: {card_item.id}</h1>
            <h3>Title: {card_item.title}</h3>
            <p>Body: {card_item.body}</p>
            <hr />
        </div>
    )
}
