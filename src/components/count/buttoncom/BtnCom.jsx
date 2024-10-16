import "../../../App.css"

const BtnCom = ({type,changeCount}) => {
    return (
        <>
            <button className="btn" onClick={changeCount}>{type == 'dec' ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}</button>
        </>
    )
}

export default BtnCom