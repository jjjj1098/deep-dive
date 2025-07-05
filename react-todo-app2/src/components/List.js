import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5001/api/todos';


//const List = React.memo(
const List = (
    ({
        title, 
        completed, 
        _id, 
        todoData, 
        setTodoData, 
        provided, 
        snapshot,
        handleClick,
    }) => { 

    const [isEditing, setIsEditing] = useState(false); 
    const [editedTitle, setEditedTitle] = useState(title);

    useEffect(() => {
        setEditedTitle(title);
    }, [title]);

    
    const handleCompleteChange = (_id, completed) => {
        console.log("체크박스 클릭:", _id, completed);
        fetch(`${API_URL}/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !completed }),
        })
        .then(res => res.json())
        .then(updatedTodo => {
            setTodoData(prevTodoData =>
                prevTodoData.map(todo =>
                    todo._id === updatedTodo._id ? updatedTodo : todo
                )
            );
        })
        .catch(err => console.error(err));
    };



    const handleEditChange = (event) => {
        setEditedTitle(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${API_URL}/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: editedTitle }),
        })
        .then(res => res.json())
        .then(updatedTodo => {
            console.log('Updated Todo:', updatedTodo);
            setTodoData(prevTodoData =>
                prevTodoData.map(todo =>
                    todo._id === updatedTodo._id ? updatedTodo : todo
                )
            );
            setIsEditing(false);
        })
        .catch(err => console.error(err));
    };



    if(isEditing) {
        return ( 
            <div className={'flex items-center justify-between w-full px-4 py-1 bg-gray-100 text-gray-600 border rounded'}>
                    <div className='items-center'>
                        <form onSubmit={handleSubmit}>
                            <input
                            value={editedTitle}
                            onChange={handleEditChange}
                            className='w-full px-3 py-2 mr-4 text-gray-500 rounded'
                            />

                        </form>
                    </div>
                    <div className='items-center'>
                        <button className="px-4 p-2 float-right" 
                        onClick={() => {
                            setIsEditing(false);
                            setEditedTitle(title);
                        }}
                        >
                            x
                        </button>
                        <button
                            onClick={handleSubmit} 
                            className="px-4 p-2 float-right"
                            type="submit"
                        >
                            save
                        </button>
                    </div>
                
            </div>
        )  
    }else {
        return (
            <div 
                key={_id} 
                {...provided.draggableProps} 
                ref={provided.innerRef} 
                {...provided.dragHandleProps}
                className={`${
                    snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
                } flex items-center justify-between w-full px-4 py-1 text-gray-600 border rounded`}
            >
                    <div className='items-center'>
                        <input type='checkbox'
                        onChange={() => handleCompleteChange(_id, completed)}
                        checked={completed} 
                        />{" "}
                        <span className={completed ? "line-through" : undefined}>
                            {title}
                        </span>
                    </div>
                    <div className='items-center'>
                        <button className="px-4 p-2 float-right" 
                        onClick={() => handleClick(_id)}
                        >
                            x
                        </button>
                        <button className="px-4 p-2 float-right"
                        onClick={() => setIsEditing(true)}
                        >
                            edit
                        </button>
                    </div>
                
            </div>
            

        )
    }
})

export default List