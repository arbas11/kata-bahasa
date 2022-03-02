import React, { useEffect, useState } from 'react'

function Timer({setGameOn, timerOut, setTimerOut, gameOn}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = count <= 4 &&  setInterval(() => setCount(count + 1), 500)
        return () => clearInterval(timer);
    }, [count])
    useEffect(()=>{
        const setter = count === 4 && setInterval(()=>{
                setTimerOut(false)
                setGameOn(true)
            }, 500)
        return ()=> clearTimeout(setter)
    }, [count])

  return (
    <div className='timer'>
        {count <= 3 && <h1>{count}</h1>}
        {count === 4 && <h1>MULAI</h1>}
    </div>
  )
}

export default Timer