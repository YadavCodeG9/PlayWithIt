import { useState,useEffect } from "react"

const counter=(inityialSatet)=>{
const [count, setCount]= useState(inityialSatet);

useEffect(()=>{
console.log("Number :" + count)
},[count])

const increment=()=>{
    setCount(preCount=>preCount+1);

}
return {count,increment}
}

export default counter;