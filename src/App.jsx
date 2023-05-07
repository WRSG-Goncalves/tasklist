import './App.css';
import { useState } from 'react';

function App() {
  const ENTER_KEY= 13;
  const ESC_KEY= 27;

  
  const [value , setValue] = useState("");
  
  const erase = () => {
    setValue("");
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onSubmit = () =>{
    console.log('submit',`valor é: ${value}`);
    erase();
  }

  const onKeyDown = (e) => {
    if (e.which === ENTER_KEY) {
      onSubmit()
     } else if (e.which === ESC_KEY) {
      erase();
     }
    }

      
  return (

    <section id='app' className='container'>
      <header>
        <h1 className='title'>contole de tarefas</h1>
      </header>
      <section className='main'>
        <input type="text" className='new-task' placeholder='o que precisa ser feito'
        value={value} 
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
        
      </section>
      
    </section>
  );
}
export default App;
