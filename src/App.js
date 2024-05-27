
import { useSelector, useDispatch } from 'react-redux'
import { increment, pushuj } from "./features/counter/counterSlice.js"
import { load, clear} from "./features/counter/secondCounterSlice.js"
import Timer from './Timer.js'
import NpmTimer from './npmTimer.js'



function App() {

  const count = useSelector((state) => state.counter.value)
  const countTab = useSelector((state) => state.counter.value2)
  const counterSec = useSelector((state) => state.secondCounter.tabb)
  const dispatch = useDispatch()

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return (
    <div className="App">
      <center>
        <button 
        style={{marginTop: "30px"}}
        onClick={()=> dispatch(increment())}>Dodaj</button>
        <p>Wynik: {count} </p>
        <hr />
        <button onClick={()=> dispatch(pushuj())}>push</button>
        <p>{countTab}</p>
        <hr />
        <button onClick={()=> dispatch(load())}>tabliczka</button>
        <p>{counterSec}</p>
        <button onClick={() => dispatch(clear())}>Usun tab</button>
      </center>
      <Timer />
      <NpmTimer expiryTimestamp={time} />
    </div>
    
  );
}

export default App;

