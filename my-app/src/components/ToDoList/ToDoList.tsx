
import React, { Component } from "react";

import { FC } from "react";
import { ITodo } from '../../interface'


type TodoListProps = {
    todos: ITodo[]
    onToggle(id:number):void
    onRemove:(id:number)=>void
}


export const ToDoList: FC<TodoListProps> = ({ todos,onToggle,onRemove }) => {
    if(todos.length===0){
        return <p className="center">not work</p>

    }
    return (
        <ul>

            {/* amen iteracia-i zjamanak stanum enq todo u lcnum array  */}

            {todos.map(todo => {

                const classes =['todo']

                if(todo.completed){
                    classes.push('completed')
                }

            

                                //onChange={onToggle.bind(null,todo.id)  mez kveradarcni nor function av el chi kanchi

                return (

                    <li className={classes.join('')} key={todo.id}>
                        <label>
                            {/* kapum enq konkret parametre es function-i hamar */}
                            <div className="pp">
                            <input type="checkbox" checked={todo.completed}  onChange={onToggle.bind(null,todo.id)}/>
                            <span>{todo.title}</span>
                          
                            <i className="material-icons red-text " onClick={()=>onRemove(todo.id)}>delete</i>
                            </div>
                        </label>
                    </li>
                )
            })}

        </ul>
    )



}