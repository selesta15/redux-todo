import React, { useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import TodoItem from "./components/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/todo/actions";
import { getTodos } from "./redux/todo/selectors";
import { filterTodo } from "./redux/filter/actions"; 
import styled from "./styled.module.scss";
import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const todos = useSelector(getTodos);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleKeyPress = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== "") {
      dispatch(addTodo(trimmedValue));
      setInputValue("");
    }
  };

  const handleClickAddButton = () => {
    handleKeyPress(); 
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleFilterClick = (filter) => {
    dispatch(filterTodo(filter)); 
  };

  const renderTodoItem = (todo, idx) => {
    return (
      <TodoItem
        key={todo.id}
        isComplete={todo.isComplete}
        text={todo.text}
        onClick={() => handleToggleTodo(todo.id)}
        onDelete={() => handleDeleteTodo(todo.id)}
      />
    );
  };

  return (
    <div className={styled['container']}>
      <div className={styled['input-form']}>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleClickAddButton}>
        <AddIcon/>
        </Button>
      </div>
      <div className={styled['todo-list']}>
        {todos.map(renderTodoItem)}
      </div>
      <div className={styled['filter-buttons']}>
        <Button onClick={() => handleFilterClick('SHOW_ALL')}>
          All
        </Button>
        <Button onClick={() => handleFilterClick('SHOW_ACTIVE')}>
           Active
        </Button>
        <Button onClick={() => handleFilterClick('SHOW_COMPLETED')}>
           Completed
        </Button>
      </div>
    </div>
  );
};

export default App;


