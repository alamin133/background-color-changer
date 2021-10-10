
import { useState } from 'react';
import Select from 'react-select';

const colors=[
  {
    value:1,
    label:"red"
  },
  {
    value:2,
    label:"yellow"
  },
  {
    value:3,
    label:"green"
  },
  {
    value:4,
    label:"black"
  },{
    value:5,
    label:"golden"
  }
]

function App() {
  const[color,setColor]=useState(colors.label);

  const handleChange=e=>{
    setColor(e.label)
  }

  
  return (
  
    <div className="App">

      
      <style>{'body {background-color:'+color+';'}</style>
    <Select onChange={handleChange}options={colors}></Select>

    <h2 style={{textAlign:"center"}}>Bckground color is:{color}</h2>
    </div>
  );
}

export default App;
