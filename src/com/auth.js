import '../App.css'
import NavBar from './parts/navbar';
import { useState } from "react";
import {Signupa,Github,Twitter} from './firebase'
import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { getAuth, onAuthStateChanged, } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";

const Auth = ()=>{
    let navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, seterror] = useState("");
    const [stage, setstage] = useState(0);
    useEffect(()=>{
        if(stage===0){
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  console.log(user)
                //   navigate("/home", { replace: true });
                  const uid = user.uid;
                } else {
                    setstage(1)

                }
              });

        }
    },[])
    if(stage == 0 ){
        return(
            
            <div className="max-w-[100vw]   bg-[#121416] h-[96rem] 
            ">
                            <Helmet>
                <title>Authorization</title>
            </Helmet>
            <div>
            
            <NavBar />
            </div>
            <div>
            
            <div className='grid place-items-center mt-[30vh] text-white w-screen'>
            <ReactLoading type={'bubbles'} color={'#ffffff'} height={'3rem'} width={'3rem'} />

            
            </div>
                    </div>
            
            
            
            </div>
                )
    }else{
        return(
            <div className="max-w-[100vw]   bg-[#121416] h-[96rem] 
            ">
                                            <Helmet>
                <title>Authorization</title>
            </Helmet>
            <div>
            
            <NavBar />
            </div>
            <div>
            
            <div className='grid place-items-center text-white w-screen'>
                    <div className='bg-[#0f1113] rounded-2xl sm:w-[90vw] md:w-[30vw] pb-12 mt-8'>
            <h1 className='text-center text-white font-bold text-3xl mt-12'>
                Sign Up
            </h1>
            {stage == 0 && (<div>loading</div>)}
            {stage == 1 && (
                <div className='grid mt-7 place-items-center'>
            <div onClick={Signupa} className='w-[70%] flex h-12 rounded-xl cursor-pointer justify-center border bg-[#121416] pt-3 text-center  border-[#181b1d]'>
            <i className="fa-brands fa-google mt-[0.19rem] mr-2"></i>
            <div className='-mt-[0.1rem] cursor-pointer'><a>Continue with Google</a></div>
            </div>
            <div onClick={Github} className='w-[70%] mt-4 flex h-12 rounded-xl cursor-pointer justify-center border bg-[#121416] pt-3 text-center  border-[#181b1d]'>
            <i className="fa-brands fa-github mt-[0.19rem] mr-2"></i>
            <div className='-mt-[0.1rem] cursor-pointer'><a>Continue with Github </a></div>
            </div>
            <div onClick={Twitter} className='w-[70%] mt-4 flex h-12 rounded-xl cursor-pointer justify-center border bg-[#121416] pt-3 text-center  border-[#181b1d]'>
            <i className="fa-brands fa-twitter mt-[0.19rem] mr-2"></i>
            <div className='-mt-[0.1rem] cursor-pointer'><a>Continue with Twitter </a></div>
            </div>
            <div className="divider w-[75%]"></div> 
            <div className='border-l pl-2 border-yellow-600'>
            Only 3rd party authorisations are available
            </div>
            {/* <label className="input-group w-[70%]">
                <span className='bg-[#171a1d] w-2'><i className="fa-regular fa-envelope"></i></span>
                <input disabled type="text" placeholder="info@site.com" className="input w-[100%] 	 focus:outline-none		 bg-[#171a1d]" />
              </label> */}
            
            {/* <button  className='btn btn-outline btn-accent mt-5 w-[70%]'>ONLY 3rd party availbe</button> */}
            </div>
            )}
            
            {/* {stage == 2 && (
                <>
                    <div className='grid mt-7 place-items-center'>
            
            
            <label className="input-group w-[70%]">
                <span className='bg-[#171a1d] w-2'><i className="fa-solid fa-key"></i></span>
                <input type="password" placeholder="Password" className="input w-[100%] focus:outline-none	 input-active bg-[#171a1d]" />
              </label>
            
            <button onClick={()=>{setstage(2)}} className='btn btn-outline btn-accent mt-5 w-[70%]'>NEXT</button>
            <div className='w-[70%] grid place-items-cdenter mt-3 cursor-pointer'>
                <div className='text-left text-xs' onClick={()=>{setstage(1)}}>
                <i className="fa-solid text-left fa-chevron-left text-[0.5rem] -mt-[04.3rem]" onClick={()=>{setstage(1)}}></i> Back
            
                </div>
            </div>
            </div>
            
               </>
            
            )} */}
            
                </div>
            
            </div>
                    </div>
            
            
            
            </div>
                )
    }

}
export default Auth;