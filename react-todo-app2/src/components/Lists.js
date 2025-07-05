import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from "./List";
import React from 'react'

const Lists = ({todoData, setTodoData, handleClick}) => {

    console.log('Lists Component');

    const handleEnd = (result) => {
    if(!result.destination) return;

    const newTodoData = Array.from(todoData);
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);
    newTodoData.splice(result.destination.index, 0, reorderedItem);

    const reorderedWithOrder = newTodoData.map((todo, index) => ({
        _id: todo._id,  // _id만 보내고
        order: index,    // order(순서)만 보내기
    }));
    
    // 화면 상태 업데이트 (order 필드 포함)
    setTodoData(newTodoData.map((todo, index) => ({
      ...todo,
      order: index,
    })));

    // 서버에 순서 변경 상태 전송
    fetch('http://localhost:5001/api/todos/order', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ todos: reorderedWithOrder }),
    })
    .then(res => res.json())
    .then(data => {
        console.log('서버 순서 업데이트 완료', data);
    })
    .catch(err => console.error('서버 순서 업데이트 실패', err));
}



  return (
   <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                todoData.map((data, index) => (
                                    <Draggable
                                        key={data._id}
                                        draggableId={data._id.toString()}
                                        index={index}>
                                        {(provided, snapshot ) => (
                                            <List 
                                                handleClick={handleClick}
                                                key={data._id} 
                                                title={data.text}
                                                completed={data.completed}
                                                _id={data._id}
                                                todoData={todoData}
                                                setTodoData={setTodoData}
                                                provided={provided}
                                                snapshot={snapshot}
                                            />
                                        )}
                                    </Draggable>
                                
                                ))}
                                {provided.placeholder}  
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
  )
}

export default Lists