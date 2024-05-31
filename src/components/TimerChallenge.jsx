import { useRef } from "react";
import { useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge ({title,timePeriod}) {

    const timer = useRef();
    const dialog = useRef();

    // const [timerStarted,setTimerStarted] = useState(false);
    // const [timeExpired,setTimeExpired] = useState(false);

    const [remainingTime,setRemainingTime] = useState(timePeriod*1000);

    const isTimeActive = (remainingTime > 0 && remainingTime < (timePeriod * 1000));

    if(remainingTime < 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function Reset(){
        setRemainingTime(timePeriod*1000);
    }

    function handleStart(){
        timer.current = setInterval(()=>{
            setRemainingTime(prevRemainTime => prevRemainTime-10);
        },10)
    }

    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);

    }

  return (
    <>
    <ResultModal targetTime={timePeriod} ref={dialog} remTime={remainingTime} reset={Reset}/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {timePeriod} second{timePeriod > 1 ?"s":""}
        </p>
        <p>
            <button onClick={isTimeActive ? handleStop : handleStart}>{isTimeActive?'Stop':'Start'} Challenge</button>
        </p>
        <p className={isTimeActive?"active":undefined}>{isTimeActive?'timer is running...' : 'timer is inactive'}</p>
    </section>
    </>
  )
}
