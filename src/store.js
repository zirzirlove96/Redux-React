import {legacy_createStore as createStore}from "redux";
import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

//const ADD = "ADD";
//const DELETE = "DELETE";
//dd
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
/*const addTodo = (text) => {
    return {
        type:ADD,
        text
    }
}

const deleteTodo = (id) => {
    return {
        type:DELETE,
        id
    }
}*/

// const reducer = (state=[], action) => {
//     console.log(action);
//     switch(action.type){
//         case addToDo.type : 
//         //reduxjs/toolkit의 createAction에서 type과 payload는 기본으로 가지고 있으며, id, text는 payload에서 보관
//         //createAction을 사용하게 되면 직접 action을 정의하지 않아도 된다.
//             //return [{text: action.text, id: Date.now()}, ...state];
//             return [{text: action.payload, id: Date.now()}, ...state];
//         case deleteToDo.type:
//             return state.filter(todo => todo.id !== action.payload);
//         default:
//             return state;
//     }
// }

//toolkit에서 제공하는 createReducer를 통해 reducer를 간소화한다
//return하지 않고 state를 mutate(변경)하면서 제공하는 함수이다.
//또한 swtich를 사용하지 않는다.
//기존에는 state를 새로운 형태로 생성하여 return하였으나, 이번에는 state에 push해서 array 제공하는 형식
//filter은 새로운 array를 제공하기 때문에 state를 mutate하지 않는다.(참고)
const reducer = createReducer([], {
    [addToDo] : (state, action) => {
        state.push({text:action.payload, id:Date.now()});
    },
    [deleteToDo] : (state, action) => {
        state.filter(toDo => toDo.id !== action.payload)
    }
});

const store = configureStore({reducer:reducer});

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;