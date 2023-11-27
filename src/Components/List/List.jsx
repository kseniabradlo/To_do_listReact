import Item from "../Item";
import './List.css';

function List(props){
    return(
    <div>
        <ul className="list">
            {
                props.mainpropstask.map(item=><Item {...item}/>)
            }
        </ul>


    </div>
    )
}

export default List;