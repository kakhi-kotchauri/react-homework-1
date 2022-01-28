
export function Button(props) {
    return (
        <div className="buttondiv">
        <button onClick={props.onck} className={props.customclass}>
        <div className="buttoncontent">
         <div className="buttontext">{props.textcontent}</div>
         <img className="arrow" src={props.customsrc} alt="buttonimg" />
         </div>
        </button>
        </div>
    )
} 