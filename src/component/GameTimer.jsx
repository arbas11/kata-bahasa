import React, { useEffect, useState } from 'react'

function GameTimer({level, setLevel, setGameTimerOn, gameTimerOn, setFromStart, setGameOn, benar}) {
    const [count, setCount] = useState(20);
    useEffect(() => {
        setCount(20)
        setLevel(1)
    }, [gameTimerOn])
    useEffect(() => {
        setCount(20)
    }, [benar])
    useEffect(() => {
        let timer = level === 1 &&  setInterval(() =>{        
            setCount(count - 1);}, 1000)
            return () => clearInterval(timer);
    }, [count])
    useEffect(() => {
        let timer = level === 2 &&  setInterval(() =>{        
            setCount(count - 1);}, 800)
            return () => clearInterval(timer);
    }, [count])
    useEffect(() => {
        let timer = level === 3 &&  setInterval(() =>{        
            setCount(count - 1);}, 600)
            return () => clearInterval(timer);
    }, [count])
    useEffect(() => {
        let timer = level === 4 &&  setInterval(() =>{        
            setCount(count - 1);}, 500)
            return () => clearInterval(timer);
    }, [count])
    useEffect(() => {
        let timer = level === 5 &&  setInterval(() =>{        
            setCount(count - 1);}, 300)
            return () => clearInterval(timer);
    }, [count])
    useEffect(() => {
        let timer = level === 6 &&  setInterval(() =>{        
            setCount(count - 1);}, 200)
            return () => clearInterval(timer);
    }, [count])
    useEffect(() => {
        let timer = level >= 7 &&  setInterval(() =>{        
            setCount(count - 1);}, 100)
            return () => clearInterval(timer);
    }, [count])
    useEffect(()=>{
        if(count < 0){
                setGameTimerOn(false)
                setGameOn(false);
                setFromStart(true);
        }
    }, [count])

  return (
    <div>
        {count >= 1 && <h1>{count}</h1>}
        {count === 0 && <h1>{count}</h1>}
    </div>
  )
}

export default GameTimer