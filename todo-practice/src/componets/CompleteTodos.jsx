import React from 'react';

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
      <div className="input-area input-area_complete">
        <p>未完了のTODO</p>
        <ul>
           {todos.map((todo, index) => {
            return (
              <div key={index}>
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
  );
};
