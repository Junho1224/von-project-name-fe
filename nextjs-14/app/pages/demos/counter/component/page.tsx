import React from "react"
import { Button } from "@mui/material"

interface Props{
    count: number
    handlePlus: ()=>0
    handleMinus: ()=>0

}

const CounterComponent = React.memo(({ count, handlePlus, handleMinus }: Props)=> {
    return (
        <>
            <h1>Counter : {count}</h1><br />

            <Button onClick={handlePlus}>+</Button>
            <Button onClick={handleMinus}>-</Button>


        </>


    )

})

export default CounterComponent
