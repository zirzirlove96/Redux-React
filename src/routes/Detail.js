import React from "react";
import { connect } from "react-redux";
import {useParams} from "react-router-dom";

function Detail ({toDos}) {
    const id = useParams().id;
    const toDo = toDos.find(todo => todo.id === parseInt(id));
    return (<>
        {toDo?.text} <br></br>
        Created at: {toDo?.id}
    </>)
}

function mapStatToProps(state, ownProps){
    return {toDos: state};
}
export default connect(mapStatToProps)(Detail);