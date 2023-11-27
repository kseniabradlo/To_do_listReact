import './Item.css';
import {useState} from "react";

function Item({title,id,status}){

    const[checked,setChecked]=useState(status);
    const classes =['task-title'];

        if(checked){
            classes.push('line-through')
        }

        function updateStatus(){
            setChecked(!checked);
            const storedTodos = JSON.parse(localStorage.getItem('tasks'));
            storedTodos.map(el=>{
                if(el.title === title){
                    el.status=!checked;
                }
                return true;
            })
            localStorage.setItem('tasks',JSON.stringify(storedTodos))
        }


        const [visible,setVisible]=useState(true);
        function removeTaskFunc(){
            setVisible(prev=>!prev)
            const storedTodos = JSON.parse(localStorage.getItem('tasks'))
            // const removeTodos - wse taski, kromie udalennych
            const removeTodos = storedTodos.filter(item=>{
                if(item.title != title){
                    return true;
                }
                return false
                // jesli title taska, po kotoromu kliknuli x(UDALIT) sowpadaet s taskom w localstorage(storedtodos), to return false i on nie popadet w removeTodos.
            })
            localStorage.setItem('tasks', JSON.stringify(removeTodos))
            //zapisywajem w localstorage wse taski, kromie udalenncyh
        }


    return(
        <>
            {visible && (
            <ul className="ul-task">
                <li className="task-li">
                    <input type="checkbox" checked={checked} onChange={updateStatus} />
                   <p className={classes.join(' ')}>
                       {title}
                   </p>
                    <p onClick={removeTaskFunc}>X</p>
                </li>
            </ul>
            )}
        </>
    )
}

export default Item;