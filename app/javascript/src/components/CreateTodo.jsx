import React from 'react';
import {todoStore} from "../todoStore";
export const CreateTodo = ({ onCreate }) => {
    const [ text, setText ] = React.useState("");

    const handleChange = React.useCallback(e => {
        setText(e.target.value);
    }, []);

    const handleCreate = React.useCallback(e => {
        e.preventDefault();
        todoStore.addTodo(text);
        // console.log('event value', e.target.value)
        // console.log('event', e)
        // To create a todo, we must add it to the todoStore.
        // take a look at todoStore.js, and determine how to do add
        // a todo
        // throw new Error("Not yet implemented");

        setText("");
    }, [onCreate, setText, text]);

    return(
        <form className="box" onSubmit={handleCreate}>
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input className="input is-rounded" placeholder="What needs to be done?" value={text} onChange={handleChange} />
                </div>
                <div className="control">
                    <button className="button is-info" disabled={!text.length}>Add</button>
                </div>
            </div>
        </form>
    )
}