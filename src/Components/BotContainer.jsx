import React,{useState,useEffect} from "react";
import BotCollection from "./BotCollection"


function BotContainer () {
const [cBot, setcBot] = useState([])


useEffect(()=>{
fetch('http://localhost:3000/bots')
.then(r=>r.json())
.then(data=> setcBot(data))
.catch(error=>console.log(error))
},[])




    return(
        <>
        
        <BotCollection collection={cBot} />
        
        </>
        )
}

export default BotContainer;