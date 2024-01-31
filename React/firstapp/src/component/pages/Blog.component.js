import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from './Card'

const Blog = () => {
    const [user, setUser] = useState([])
    const [limit, setLimit] = useState(10)
    // console.log(user)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => { return setUser(response.data.slice(0, limit)) })
            .catch(err => console.log(err))
    }, [limit])


    return (
        <>
            {
                user.map((item, index) => {
                    return <Card key={index} card_item={item} />
                })
            }
            <div className='text-center'>
                {
                    limit < 100 &&
                    <button onClick={() => setLimit(limit + 5)} >View More</button>
                }
                <button onClick={() => setLimit(limit - 5)} >View Less</button>
            </div>
        </>
    )
}

export default Blog