import React from "react";
import Button from "../button";
import styled from "./styled.module.scss";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TodoItem = (props) => {
  const { isComplete, text, onClick, onDelete } = props;

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div
      style={{
        textDecoration: isComplete ? 'line-through' : 'none'
      }}
      className={styled['todo-list-item']}
    >
      <label className={styled['custom-checkbox']}>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={onClick}
          className={styled['checkbox-input']}
        />
        <span className={styled['checkmark']}></span>
      </label>

      {text}
      <Button onClick={handleDelete}>
      <DeleteForeverIcon/>
      </Button>
    </div>
  );
};

export default TodoItem;
