import React from "react";

const Todo = (props) => {
    return (
        <li>{props?.todo?.item}</li>
    )
}
export default Todo;