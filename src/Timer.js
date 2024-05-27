import { useEffect, useState } from "react";



const Timer = ()=> {

const [days, setDays] = useState(0);
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);
const [partyTime, setPartyTime] = useState(false);

useEffect(() => {


const interval = setInterval(()=> {
 
  const difference = +new Date("2023-05-20 12:55") - +new Date(); // Plus + zamienia na integera
  

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  setDays(d);
  const h = Math.floor((difference/(1000 * 60 * 60)) % 24)          
  setHours(h);
  const m = Math.floor((difference/(1000 * 60 )) % 60)
  setMinutes(m);
  const s = Math.floor((difference/(1000)) % 60 )
  setSeconds(s);
 if(d<=0 && h <= 0 && m <= 0 && s <= 0){
    setPartyTime(true); 
  }  
}, 1000)

return ()=> clearInterval(interval) 
/*The cleaning function-runs after the user exits the page and the component unmounts.
It helps to avoid sending many requests while a user is typing, which would slow 
down our web app.
*/

}, [])


return(
  <div>
    <center style={{marginTop: "40px"}}>
      <hr />
      <h1>Timer: </h1>
      {partyTime? (
        <>
          <h1>Happy Party Time!</h1>
        </>
      ) :
       (
        <>
          <span style={{border: "2px solid red",
          padding: "10px", marginRight: "3px"}}>Days: {days} 
          </span>
          <span style={{border: "2px solid purple",
          padding: "10px", marginRight: "3px"}}>Hours: {hours} 
          </span>
          <span style={{border: "2px solid blue",
          padding: "10px", marginRight: "3px"}}>Minutes: {minutes} 
          </span>
          <span style={{border: "2px solid green",
          padding: "10px"}}>Seconds: {seconds}
          </span>
        </>
       )}  
       <hr />
    </center>
  </div>
)

}

export default Timer


