import React, {useState} from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home ({toDos, addToDo}) {
    const [text, setText] = useState("");
    function onChnage (e) {
        setText(e.target.value);
    } 
    function onSubmit (e) {
        e.preventDefault();
        addToDo(text);
        setText("");        
    }
    //js 파일에서는 상태를 체크해 주는 useState 필요함! 
    //그래야 input에 값이 들어감
    return (
        <>
        <h1>To DoList</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChnage}/>
            <button>Add</button>
        </form>
        <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}</ul>
        </>
    )
}

function mapStateToProps (state) {
    //return {sexy: true}
    return { toDos: state }
}

function mapDispatcTohProps (dispatch) {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    }
}

//connet를 통해 store에 있는 state, dispatch를 사용할 것이다.
//react-redux를 통해 Home에서 redux의 state를 사용할 수 있게됨
//connect는 내가 만든 copmonent의 prop에 object를 추가하게 해준다.

//store.dispatch(state, action)과 비슷한..
export default connect(mapStateToProps, mapDispatcTohProps) (Home);