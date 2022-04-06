import React from 'react';

const style = {
  backgroundColor: "#c6ffe2",
  height: "auto",
  minHeight: "200px"
};
export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
      <div style={style} className="input-area">
        <p>未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
  );
};
