import { useState, useEffect } from "react"
import MyButton from "./buttoncom/BtnCom"
import "../../App.css"

const CountCom = () => {

    let [count, setCount] = useState(0)

    const hendInc = () => {
        console.log("click inc");
        setCount(++count)
    }

    const hendDec = () => {
        console.log("click dec");
        if (count > 0) {
            setCount(--count)
        }
    }

    const Reset = () => {
        setCount(0); 
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex alin-center justify-center">
                        <div className="col-6 d-flex alin-center justify-center">
                            <div className="bg-count text-center">
                                <div className="wraper d-flex alin-center justify-center">
                                <MyButton type="dec" changeCount={hendDec} />
                                <span className="count-text">{count}</span>
                                <MyButton type="inc" changeCount={hendInc} />
                                </div>
                                <a href="#" onClick={Reset} className="reset">Reset</a>
                                {/* <button className="btn" onClick={hendDec}>-</button>
                                <span className="count-text">{count}</span>
                                <button className="btn" onClick={hendInc}>+</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CountCom