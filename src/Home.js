import React  from 'react';

function Home({items, setItems, addTodo, TodoItemHome, removeItem, updateItem, openDialog, handleSubmit, setInput, input}) {
    return (
        <div>
            <h2 className = "text-white">This is home</h2>
            <div>
                <ul className="text-left list-group text-info">
                        {items.map((item, index) => (
                            <TodoItemHome
                                key={index}
                                id={index}
                                item={item}
                                onCheck={removeItem}
                                onUpdate={updateItem}
                                onPopUp={openDialog}
                            />
                        ))}
                    </ul>
            </div>
            <div id="dialog-change" style={{display :'none'}}>
              <form onSubmit={handleSubmit} className="py-3">
                    <div className="my-2 input-group">
                        <input
                            id = "input-field"
                            className = "mr-4 form-control"
                            type="text"
                            value = {input}
                            placeholder = "type a task"
                            onChange={(event) => {
                              setInput(event.target.value)
                            }}
                        />
                        <button id = "button-add" className = "ml-4 btn btn-outline-light input-group-append" type="submit" onClick={() => {
              updateItem()
            }} >Update this task</button>
                    </div>
                </form>
          </div>
            
        </div>
        
    );
}

export default Home;    