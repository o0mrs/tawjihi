import { useEffect, useState } from 'react';
import '../App.css'
import NavBar from './parts/navbar';
const Home = ()=>{
    const [first, setfirst] = useState(20)
    const [days, setdays] = useState()
    const [left, setleft] = useState(20)
useEffect(()=>{
    let today=new Date();
    var date1 = new Date();
    var date2 = new Date("08/01/2023");
      
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
      
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    console.log(Difference_In_Days)
    // parseInt(s/365)
    setdays(parseInt(Difference_In_Days))
    setleft(365 - Difference_In_Days )
    var s = 365 - Difference_In_Days ;
    var ss = (s/365)*100
    console.log(ss)
    setfirst(parseInt(ss))
},[])

    return(
<div className="max-w-[100vw] bga h-[96rem] ">

<NavBar />
<div className="text-center">
    <div className="grid place-items-center h-screen -mt-32">
    <div className="radial-progress  text-primary-content border-4d border-primary inter" style={{ "--value": first, "--size": "12rem", "--thickness": "1.5rem" }}>{first}%</div>

</div>
<div class=" inter text-white -mt-[40vh]">
        {days} Left 
        <br/>
        {parseInt(left)} Days
        </div>
    </div>

</div>
    )
}
export default Home;