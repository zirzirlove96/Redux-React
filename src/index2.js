import {legacy_createStore as createStore} from "redux";

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state =[], action) => {
    switch(action.type){
        case ADD_TODO:
            //state.push는 mutation state이다.
            //새로운 state를 create하고 그 새로운 state를 return해줘야한다.\
            //즉 state는 변경되지 않고 새로운 값을 리턴해 주고 있다.
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE_TODO:
            //filter() 함수는 새로운 array를 만들어낸다.
            //상태를 변형하지 않고 id 와 다른 값들의 array를 생성해서 return
            return state.filter(word => word.id !== parseInt(action.id));
        default:
            return state;
    }
}

const store = createStore(reducer);


const addToDo = text => {
    //dispatch에 인풋값을 할당한다.
    store.dispatch({type: ADD_TODO, text});
}

const deleteToDo = (e) => {
    store.dispatch({type: DELETE_TODO, id: e.target.parentNode.id});        
}

const paintToDo = () => {
    const ToDos = store.getState();
    ul.innerText = "";
    ToDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DELETE";
        btn.addEventListener("click", deleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        ul.appendChild(li);
        li.appendChild(btn);
    });
}

store.subscribe(paintToDo);

const onSubmit = (e) => {
    e.preventDefault();
    const ToDo = input.value;
    input.value = "";
    addToDo(ToDo);
}

form.addEventListener("submit", onSubmit);