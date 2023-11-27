import List from "../List/List";
import {useState} from "react";
import './Main.css';

function Main(){
    const[tasks,setTasks]=useState(()=>{
        let storedTodos = localStorage.getItem('tasks');
        if(!storedTodos){
            return [];
        }
        else{
            return JSON.parse(storedTodos);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));

    const[inputvalue,setInputValue]=useState(' ');
    function takeInputValueFunc(e){
        setInputValue(e.currentTarget.value)
    }

    function addTaskFunc(e){
        const storeTodos = JSON.parse(localStorage.getItem('tasks'))
        //berem s local storage wse zapisannyje taski(a u nas tam wse, kromie udalennych, my eto propisali w komponientie iTEM).Ili tam woobsze niet taskow, eto nasz istochnik istiny tak kak by. Initial state
        if(e.key === "Enter" && e.currentTarget.value != ''){
            setTasks(
                [...storeTodos, {
                    id: 1,
                    title:inputvalue,
                    status:false
                }
                ]);
            setInputValue(' ');
        }
    }


    return(
        <div className='container'>
            <h1>Note your tasks</h1>
            <h6>
                {
                    new Date().toLocaleDateString()
                }
            </h6>
            <div className='input-filed'>
                <input value={inputvalue} onKeyDown={addTaskFunc} onChange={takeInputValueFunc} type="text"/>
                <label>Your task</label>
            </div>
            <List mainpropstask = {tasks}/>
        </div>
    )
}

export default Main;