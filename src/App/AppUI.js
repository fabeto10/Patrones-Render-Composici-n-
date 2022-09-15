import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoContext } from "../TodoContext"; 
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButtom";

function AppUI() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({ 
                    error, 
                    loading, 
                    searchedTodos, 
                    completeTodo, 
                    deleteTodo
                }) => (
                    <TodoList>
                        {error && <p>Hubo un error....</p>}
                        {loading && <p>Estamos cargando.....</p>}
                        {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}
                        {searchedTodos.map(todo => (
                        <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </React.Fragment>
    )
}

export {AppUI}