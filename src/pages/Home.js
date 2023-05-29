import { useState } from "react";
import TallCounter from "./TallyCounter";
import { Grid } from "@mui/material";


const defaultValue = {name:'Tally Counter',value:0}

const Home = () =>{
    const [data,setData] = useState([defaultValue])

    const close = (i) =>{
        let list = [...data]
        list.splice(i,1)
        setData(list)
    }

    const setName = (name,i) =>{
        let list = [...data]
        list[i] = {...list[i],name:name}
        setData([...list])
    }

    const setValue = (value,i) =>{
        let list = [...data]
        list[i] = {...list[i],value:value}
        setData([...list])
    }

    const addData = () =>{
        setData([...data,defaultValue])
    }

    const calculate = (value,i,isDesc) =>{
        let add = 1
        if(isDesc){
            add = -1
        }
        let list = [...data]
        list[i] = {...list[i],value:value+add}
        setData([...list])
    }

    return(
        <>
            <div style={{width:'100%',height:25,display:'flex'}}>
                <div style={{paddingLeft:10,width:'50%'}}>
                    Email
                </div>
                <div style={{width:'50%'}}>
                    Logout
                </div>
            </div>
            <hr style={{borderTop: '1px dotted red'}}></hr>
            <button style={{backgroundColor:'red',padding:5}}  onClick={()=>addData()}>ADD COUNTER</button>
            <Grid container spacing={2}>
               
                {data?.map((item,i)=>{
                    return(
                        <Grid item xs={11} sm={3}>
                            <TallCounter calculate={(isDesc)=>calculate(item?.value,i,isDesc)} name={item?.name} value={item?.value} onClose={()=>close(i)} setName={(name)=>setName(name,i)} setValue={(value)=>setValue(value,i)} />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}

export default Home;