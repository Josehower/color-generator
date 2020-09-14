import React from 'react';

function Canvas(props) {
  return (
    <div>
      <label htmlFor={props.name}>Choose a {props.name}:</label>
      <select
        onChange={(e) => props.onChange(e.currentTarget.value)}
        name={props.name}
        id={props.name}
      >
        <option key="select" value=" ">
          {props.initial ? props.initial : 'select'}
        </option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Canvas;
