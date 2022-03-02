import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap';
import questions from '../Questions'
import GameTimer from './GameTimer';

function GameBoard({setFromStart, setGameOn, gameOn}) {
    const [questToShow, setQuestToShow] = useState([])
    const [theNum, setTheNum] = useState(0)
    const [next, setNext] = useState(0)
    const [benar, setBenar] = useState(0)
    const [salah, setSalah] = useState(0)
    const [theAnswer, setTheAnswer] = useState("")
    const [toPickNum, setToPickNum] = useState([])
    const [gameTimerOn, setGameTimerOn] = useState(false)
    const [level, setLevel] = useState(1);

    function randomNum(){
        let nums = [1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,102, 103, 104, 105, 106,107, 108, 109];
        let i = nums.length;
        let ranNums = [];
        let j = 0;
    
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            ranNums.push(nums[j]);
            nums.splice(j, 1);
        }
        return ranNums;
    }

    useEffect(() => {
        const temp = randomNum()
        setToPickNum(temp)
        setGameTimerOn(true)
    },[])

    useEffect(() => {
        if(benar % 3 === 0){
        setLevel(level + 1)
        }
    },[benar])

    useEffect(() => {
        const num = Math.floor(Math.random() * 2) + 1
        setTheNum(num)
        const index = toPickNum[next]
        let theQuest = '';
        if(index){
            theQuest = questions[index]
        }else{
            theQuest = questions[next]
        }
        setQuestToShow(theQuest)
    }, [gameOn, next])
    
    function handleCorrect(){
        setTheAnswer("correct")
        setNext(next + 1)
        setBenar(benar + 1)
    }

    function handleWrong(){
        setTheAnswer("wrong")
        setNext(next + 1)
        setSalah(salah + 1)
    }

    function resetGame(){
        setGameOn(false);
        setFromStart(true);
    }
  return (
    <div className='game-board'>
        <Button onClick={resetGame}>Menyerah</Button>
        <GameTimer 
        setGameTimerOn= {setGameTimerOn}
        gameTimerOn = {gameTimerOn} 
        level = {level}
        setLevel = {setLevel}
        setFromStart={setFromStart}
        setGameOn={setGameOn}
        benar = {benar}
        />
        <>
        {theNum === 1 &&
                <div className='button-question-container'>
                    <button className = "button-question" onClick={handleCorrect}>{questToShow.correct}</button>
                    <button className = "button-question" onClick={handleWrong}>{questToShow.wrong}</button>
                </div>}
         {theNum === 2 &&  
                <div className='button-question-container'>
                    <button className = "button-question" onClick={handleWrong}>{questToShow.wrong}</button>
                    <button className = "button-question" onClick={handleCorrect}>{questToShow.correct}</button>
                </div>}
        </>
        {theAnswer === "correct" && 
        <>
        <p className='anda-benar'>anda benar</p>
        </>}
        {theAnswer === "wrong" && 
        <>
        <p className="kurang-tepat">kurang tepat</p>
        <p className='explain'>{questToShow.explain}</p>
        </>}
        <div className='benar-salah-container'>
        <h1>{benar}</h1>
        <h2>{salah}</h2>
        </div>
    </div>
  )
}

export default GameBoard