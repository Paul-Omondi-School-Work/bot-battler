import React,{useState,useEffect} from "react";
import BotCollection from "./BotCollection"

function BotContainer () {
const [armyBot,setarmyBot] = useState([])
const [cBot, setcBot] = useState([])




    return(
        <>
        <BotCollection/>
        <YourBotArmy />
        </>
        )
}

export default BotContainer;