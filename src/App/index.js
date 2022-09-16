import React from "react";
// import { TodoCounter } from "../components/TodoCounter";
// import { TodoItem } from "../components/TodoItem";
// import { TodoList } from "../components/TodoList";
// import { TodoSearch } from "../components/TodoSearch";
// import { TodoProvider } from "../TodoContext";
// import { AppUI } from "./AppUI";
//import './App.css';
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  return(
    <React.Fragment>
      <TodoHeader/>
      <TodoList/>
    </React.Fragment>
  ) ;
};

function TodoHeader() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
    </React.Fragment>
  );
};

function TodoList() {
  return (
    <React.Fragment>
      <TodoItem/>
    </React.Fragment>
  );
};

function TodoCounter() {
  return(
    <p>TodoCounter</p>
  );
};

function TodoSearch() {
  return (
    <p>TodoSearch</p>
  );
}

function TodoItem() {
  return (
    <p>TodoItem</p>
  );
}
// function App() {

//   return (
//     <TodoProvider>
//       <AppUI/>
//     </TodoProvider>
//   );
// };

export default App;