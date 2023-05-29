import { useState } from "react";



const TallCounter = (props) =>{
    const [isSet, setIsSet] = useState(false)
    const [value, setValue] = useState('')
    const [isName, setIsName] = useState(false)
    const [name, setName] = useState(false)

    return(
    <div style={{backgroundColor:'GrayText',width:300}}>
        <div style={{textAlign:'center',paddingBottom:10,paddingTop:20,fontWeight:"bold",fontSize:30,display:"block"}}>
            {props?.name} <button onClick={()=>props?.onClose()} style={{backgroundColor:"red",textAlign:"end"}}>X</button>
        </div>
        <div style={{textAlign:'center',paddingBottom:10}}>
            {/* <label>Email</label> */}
            <input disabled={true} value={props?.value || 0} />
        </div>
        <div style={{textAlign:'center',paddingBottom:10}}>
            <button style={{fontSize:20,fontWeight:'bolder',width:90,height:30}} onClick={()=>props?.calculate(true)}>-</button>
            <button style={{fontSize:20,fontWeight:'bolder',width:90,height:30}} onClick={()=>props?.calculate(false)}>+</button>
        </div>
        <div style={{textAlign:'center',paddingBottom:5}}>
            <button onClick={()=>props?.setValue(0)}>RESET COUNTER</button>
        </div>
        <div style={{textAlign:'center',paddingBottom:5}}>
            {!isSet ? <button onClick={()=>setIsSet(true)}>START VALUE</button>
            :
            <div style={{textAlign:'center',paddingBottom:20}}>
                <input onChange={(e)=>setValue(e.target.value)} />
                <button style={{margin:-20}} onClick={()=>{props?.setValue(value);setIsSet(false)}}>SET</button>
            </div>}
        </div>
        <div style={{textAlign:'center',paddingBottom:5}}>
            {!isName ? <button onClick={()=>setIsName(true)}>COUNTER NAME</button>
            :
            <div style={{textAlign:'center',paddingBottom:20}}>
                <input onChange={(e)=>setName(e.target.value)} />
                <button style={{margin:-20}} onClick={()=>{props?.setName(name);setIsName(false)}}>SET</button>
            </div>}
        </div>
    </div>
    )
}

export default TallCounter;