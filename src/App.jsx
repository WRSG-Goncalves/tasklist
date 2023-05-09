import './App.css';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";

function App() {
  const initialTasks = []

  const [tasks, setTasks] = useState(initialTasks);


  const onToggle = (task) => {

    setTasks(tasks.map((obj => (obj.id === task.id ? { ...obj, checked: !task.checked } : obj))));

    console.log('toggle', tasks)
  }

  const onRemove = (task) => {
    setTasks(tasks.filter((obj) => obj.id !== task.id))
    console.log('remove', tasks)
  }

  return (
    <section id='app' className='container'>
      <header>
        <h1 className='title'>contole de tarefas</h1>
      </header>
      <section className='main'>
        
        {/*  <newTask />
        <input type="text" className='new-task' placeholder='o que precisa ser feito'
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
         */}

        <ul className='task-list'>
          {
            tasks.map((task) => (
              <li key={task.id.toString()} >
                <span
                  className={['task', task.checked ? "checked" : ""]}
                  onClick={() => onToggle(task)}
                  role="button"
                  tabIndex={0}
                >{task.id} - {task.title}
                </span>
                <button
                  className='remove'
                  type='button'
                  onClick={() => onRemove(task)}
                >
                  <MdDelete size={28} />
                </button>
              </li>
            ))
          }
        </ul>
      </section>

    </section>
  );
}
export default App;
