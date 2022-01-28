import { useState } from "react"

export function Input(props) {
    return (
            <div className="inputdiv">
            <label className="label" htmlFor={props.label}>{props.label}</label>
            <input value={props.value} onChange={props.onch} className={props.customclass} placeholder={props.placeholder} type="text" />
            </div>
    )
}