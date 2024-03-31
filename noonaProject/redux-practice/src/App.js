import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import GrandSonBox from './component/GrandSonBox';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  const value = useSelector(state => state.value)

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: value } })
  }
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: value } })
  }
  const setValue = (values) =>{
    dispatch({ type: "setValue", payload: { num: values } })
  }
 
  
  return (
    
    <>
      <h1>{count}</h1>
      <input onChange={(e)=>{setValue(e.target.value)}} value={value}/>
      <button onClick={() => { increase(); setValue(0) }}>증가</button>
      <button onClick={() => { decrease(); setValue(0)}}>감소</button>
      <Box />

    </>
  );
}

export default App;
