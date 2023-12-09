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
import {TYPE_OF_FILTER} from "./redux/filter/reduser";
import {getActiveFilter} from "./redux/filter/selector";



const App = () => {
  const todos = useSelector(getTodos);
  const activeTodoFilter = useSelector(getActiveFilter)
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


  const filterTodos = (todos, filter) => {
    if (filter === TYPE_OF_FILTER.SHOW_ALL) {
      return todos;
    }
    if (filter === TYPE_OF_FILTER.SHOW_ACTIVE) {
      return todos.filter(todo => !todo.isComplete);
    }
    if (filter === TYPE_OF_FILTER.SHOW_COMPLETED) {
      return todos.filter(todo => todo.isComplete);
    }
    return todos;
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
      {filterTodos(todos, activeTodoFilter).map(renderTodoItem)}
      </div>
      <div className={styled['filter-buttons']}>
      <Button onClick={() => dispatch(filterTodo(TYPE_OF_FILTER.SHOW_ALL))}>
          All
        </Button>
        <Button onClick={() => dispatch(filterTodo(TYPE_OF_FILTER.SHOW_ACTIVE))}>
          Active
        </Button>
        <Button onClick={() => dispatch(filterTodo(TYPE_OF_FILTER.SHOW_COMPLETED))}>
          Completed
        </Button>
      </div>
    </div>
  );
};

export default App;


