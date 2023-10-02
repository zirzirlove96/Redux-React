import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo ({text, onClickbtn, id }) {
    console.log(id);
    return (<li>
        <Link to={`/${id}`}>
        {text}</Link> <button onClick={onClickbtn}>DELETE</button>
    </li>);
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        onClickbtn : () => dispatch(actionCreators.deleteTodo(ownProps.id))
    }
}
export default connect(null, mapDispatchToProps)(ToDo);