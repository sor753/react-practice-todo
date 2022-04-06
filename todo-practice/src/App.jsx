import React, { useState } from "react";
import "./style.css";
import { InputTodo } from './componets/InputTodo';
import { IncompleteTodos } from './componets/IncompleteTodos';
import { CompleteTodos } from './componets/CompleteTodos';

export const App =() => {
  const [ todoText, setTodoText ] = useState('');
  const [ incompleteTodos, setIncompleteTodos ] = useState( [] );
  const [ completeTodos, setCompleteTodos ] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value)
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5} />
      {incompleteTodos.length >= 5 && <p style={{ color: "red" }}>登録できるのは５個までです。消化してください。</p>}
      <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/> 
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack}/>
    </>
  );
}
