import React  from 'react';
import './App.css';


function AddToDoList({items, setItems, TodoItem, input,setInput, addItem, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit} className="py-3">
            <div className="my-2 input-group">
                <input
                    id = "input-field"
                    className = "mr-4 form-control"
                    type="text"
                    placeholder="Add a new task"
                    value={input}
                    onChange={(event) => {
                    setInput(event.target.value)
                    }}
                />
                <button id = "button-add" className = "ml-4 btn btn-outline-light input-group-append" type="submit" onClick={addItem}>Add this task</button>
            </div>
            <div className="items">
                <ul className="text-left list-group text-info">
                    {items.map((item, index) => (
                        <TodoItem
                            key={index}
                            id={index}
                            item={item}
                        />
                    ))}
                </ul>
            </div>
        </form>
        
    );
};

export default AddToDoList