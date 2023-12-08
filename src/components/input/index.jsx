import React from "react";
import styled from './styled.module.scss'

const Input = ({ onChange, value, onKeyPress }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onKeyPress(); 
    }
  };

  return (
    <div className={styled['input']}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress} 
        type="text"
        className={styled.input}
      />
    </div>
  );
};

export default Input;




