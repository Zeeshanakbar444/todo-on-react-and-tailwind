
import { useState } from 'react';
import './App.css'
import Button from './component/Button'
import Header from './component/Header'

function App() {
  let [todoValue, setTodoValue] = useState("");
  let [todos, setTodos] = useState([]);
  let [todoEditValue, setTodoEditValue] = useState('')



  function addTodo() {
    if (!todoValue) {
      console.log("fill the required field")
      alert("fill the required field")
      return
    } else {
      // console.log(todoValue)
      let obj = {
        value: todoValue,
        isEdit: false
      }
      todos.push(obj)
      setTodos([...todos])

      setTodoValue("")

    }

  }
  function deleteAll() {
    console.log("deleteAll")
    setTodos([])

  }

  function deleteTodo(id) {
    todos.splice(id, 1)
    setTodos([...todos])
  }
  function editTodo(ind) {
    todos.forEach(ele => {
      ele.isEdit = false
    });
    todos[ind].isEdit = true
    setTodos([...todos])
    setTodoEditValue(todos[ind].value);
  }


  function saveTodoValue(id) {
    
    todos[id].value = todoEditValue;
    todos[id].isEdit = false;
    setTodos([...todos]);
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
          {
          todos && todos &&
          todos?.map((val, ind) => {
            return val.isEdit ? (<div className="flex  mx-auto" key={ind}>
              <input
                type="text"
                className="border w-full rounded-lg p-3 outline-none border-gray-600 "
                value={todoEditValue || " "}
                onChange={(e) => setTodoEditValue(e.target.value)}
              />
              <Button
                title="Save"
                funHeandler={() => saveTodoValue(ind)}
              />
            </div>):
              (
                <li className='text-xl  p-3 flex justify-between items-center mt-2' key={ind}>{val.value}
                  <div>
                    <Button title="Edit" funHeandler={() => editTodo(ind)} />
                    <Button title="Delete" customCol='bg-rose-600' funHeandler={() => deleteTodo(ind)} />
                  </div>
                </li>
              )
          })
          }

        </ul>
      </div>


    </>
  )
}

export default App
