import React, { useEffect, useState } from 'react'

function Timer({setGameOn, timerOut, setTimerOut, gameOn}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = count <= 4 &&  setInterval(() => setCount(count + 1), 1000)
        return () => clearInterval(timer);
    }, [count])
    useEffect(()=>{
        const setter = count === 4 && setInterval(()=>{
                setTimerOut(false)
                setGameOn(true)
            }, 1000)
        return ()=> clearTimeout(setter)
    }, [count])

  return (
    <div className='timer'>
        {count <= 3 && <h1>{count}</h1>}
        {count === 4 && <h1>pilih yang benar!</h1>}
    </div>
  )
}

export default Timer