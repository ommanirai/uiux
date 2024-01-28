import React, { useEffect, useState } from "react"

export const Home = (props) => {
    // hooks
    // useState
    const [count, setCount] = useState(1)
    const [formData, setFormData] = useState("")
    const [number, setNumber] = useState([1, 2, 3])
    // console.log(number)

    useEffect(function () {
        alert("state change")
    }, [count])

    // useEffect(function () {
    //     console.log(formData)
    // }, [number])

    // useEffect(function () {
    //     alert("count updated!!!")
    // }, [count])
    // var count = 1
    // const increaseCount = () => {
    //     count++
    // }
    const increaseCount = () => {
        setCount(count + 1)
    }
    const handleChange = e => {
        setFormData(e.target.value)
    }

    const handleClick = e => {
        setNumber([...number, formData])
    }
    return (
        <>
            <h1>{count}</h1>
            {
                count < 10 && <button onClick={increaseCount}>increment Count</button>
            }
            <br />

            <input type="text" name="number" onChange={handleChange} />
            {/* <input type="text" name="number" onChange={(e) => setFormData(e.target.value)} /> */}
            <br />
            <button onClick={handleClick} >add elements</button>

            {
                number.map(function (item, index) {
                    return <h1 key={index} >{item}</h1>
                })
            }
        </>
    )
}