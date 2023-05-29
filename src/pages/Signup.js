import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";


const Signup = () =>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')
    const [isView, setIsView] = useState(false)
    const navigate = useNavigate()

    const submit = async() =>{
        if(!name){
            return alert('Please enter name')
        }
        else if(!email){
            return alert('Pleae Enter email id')
        }else if(!password){
            return alert('Please Enter pasword')
        }else if(password !== confPass){
            return alert('Conform password does not matech')
        }else{
            await registerWithEmailAndPassword(name,email,password)
            navigate('/login')
            alert('SignUp Successfully !')
        }
    }

    return(
        <>
            <div style={{margin:'20%',textAlign:'center',backgroundColor:'GrayText'}}>
                <div style={{textAlign:'center',paddingBottom:20,paddingTop:20,fontWeight:"bold",fontSize:30}}>
                    Signup
                </div>
                <div style={{textAlign:'center',paddingBottom:20}}>
                    {/* <label>Email</label> */}
                    <input placeholder="Enter name" name="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
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
                    {/* <label>Password</label> */}
                    <input placeholder="Enter Conform Password" name="confPass" type={isView ? 'text' : 'password'} value={confPass} onChange={(e)=>setConfPass(e.target.value)} />
                </div>
                <div style={{textAlign:'center',paddingBottom:20}}>
                    <button onClick={()=>submit()}>Submit</button>
                </div>
                <div style={{textAlign:'center',paddingBottom:20}}>
                    <div>Have a account ? </div><button style={{color:'blue'}} onClick={()=>navigate('/login')}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Signup;