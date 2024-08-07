import React from "react";

export default function RadioInput({name,label,value,setValue}){
    return(
        <>
            <label style={{display:"flex",flexDirection:"row",alignItems:"center", position:"relative"}}>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    onChange={(e) => {setValue(e.target.value)}}
                />
                <span>{label}</span>
            </label>
        </>
    )
}