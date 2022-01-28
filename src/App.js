import logo from './logo.svg';
import arrow from './photos/arrow.png'
import './App.css';
import { Button } from './button';
import { Input } from './input'
import { useState } from 'react';

function App() {

  const [value, changevalue] = useState('')

  function click(e) {
    e.preventDefault()
    if (!value) {
      alert('Field is empty, please fill field and submit again')
    } else {
      alert(value)
      changevalue('')
    }
  }

  return (
     <div>

       <div className='formpar'>
         <form className='formbody' action="">
       <Input value={value} onch = {(e) => changevalue(e.target.value)} customclass = {'input'} label = {'Rooms'} placeholder = {'rooms'}/>
       <Button onck = {(e) => {click(e)}} textcontent = {'Submit'} customsrc = {arrow} customclass= {'button'}/>
         </form>
       </div>

     </div>
  )
}

export default App;
