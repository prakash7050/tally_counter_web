import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "../firebase";


const Login = () =>{
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isView, setIsView] = useState(false)
    const navigate = useNavigate()

    const submit = async() =>{
        if(!email){
            return alert('Pleae Enter email id')
        }else if(!password){
            return alert('Please Enter pasword')
        }else{
            try{
                const result = await logInWithEmailAndPassword(email,password)
                navigate('/home')
                alert('Login Successfully !')
            }
            catch(err){
                console.log(`<<error<<<<<<`,err)
            }
        }
    }


    return(
        <>
            <div style={{margin:'20%',textAlign:'center',backgroundColor:'GrayText'}}>
                <div style={{textAlign:'center',paddingBottom:20,paddingTop:20,fontWeight:"bold",fontSize:30}}>
                    Login
                </div>
                <div style={{textAlign:'center',paddingBottom:20}}>
                    {/* <label>Email</label> */}
                    <input placeholder="Enter Email" name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div style={{textAlign:'center',paddingBottom:20}}>
                    {/* <label>Password</label> */}
                    <input placeholder="Enter Password" name="password" type={isView ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button style={{margin:-20}} onClick={()=>setIsView(!isView)}>view</button>
                </div>
                <div style={{textAlign:'center',paddingBottom:20}}>
                    <button onClick={()=>submit()}>Submit</button>
                </div>
                <div style={{textAlign:'center',paddingBottom:20}}>
                    <div>Have not any account ? </div><button style={{color:'blue'}} onClick={()=>navigate('/signup')}>Create New account</button>
                </div>
            </div>
        </>
    )
}

export default Login;