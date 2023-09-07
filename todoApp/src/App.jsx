
import { useState } from 'react';
import './App.css'
import Button from './component/Button'
import Header from './component/Header'

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos)


  function addTodo() {
    if (!todoValue) {
      console.log("fill the required field")
      alert("fill the required field")
      return
    } else {
      console.log(todoValue)
      // todos.push(todoValue)
      // setTodos([...todos])
      setTodos([todoValue, ...todos])
      setTodoValue("")

    }

  }
  function deleteAll() {
    console.log("deleteAll")
    setTodos([])

  }

  function editTodo() {
    console.log("editTodo")
  }
  function deleteTodo(id) {
    console.log("deleteTodo")

    let deleteTodo = todos.filter((val, index) => {
      return id !== index
    })
    setTodos(deleteTodo)
  }


  return (
    <>
      <Header />
      <div className='flex justify-center  items-center mt-5 flex-col'>
        <div className='w-[70%]'>
          <input type="text"
            value={todoValue}
            className='w-full rounded-lg p-3 outline    border-red-600'
            onChange={(e) => setTodoValue(e.target.value)}
          />
        </div>
        <div className='flex mt-5'>
          <Button title="ADD " funHeandler={addTodo} />
          <Button title="Delete All " customCol='bg-rose-600' funHeandler={deleteAll} />

        </div>
      </div>


      <div className=' w-[70%] mx-auto mt-6'>
        <ul>
          {todos.map((val, ind) => {
            return (
              <li className='text-xl  p-3 flex justify-between items-center mt-2' key={ind}>{val}
                <div>
                  <Button title="Edit" funHeandler={editTodo} />
                  <Button title="Delete" customCol='bg-rose-600' funHeandler={() => deleteTodo(ind)} />
                </div>
              </li>
            )
          })}

        </ul>
      </div>


    </>
  )
}

export default App
