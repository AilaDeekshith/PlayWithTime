import { forwardRef,useImperativeHandle,useRef } from "react";
import { createPortal} from "react-dom";

const ResultModal = forwardRef(function ResultModal({targetTime,remTime,reset},ref){

    const result = remTime < 0;

    const formattedTime = (remTime/1000).toFixed(2);

    const score = Math.round((1-remTime/(targetTime*1000))*100);

    const dialog = useRef();

    useImperativeHandle(ref,() => {
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {result ?  <h2> you lost</h2> : <h2>your score : {score}</h2>}
            <p>
                The target time was <strong>{targetTime} second{targetTime > 1 ?"s":""}</strong>
            </p>
            <p>
                You stopped the timer with<strong>{formattedTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={reset}>
                <button>close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
})

export default ResultModal;