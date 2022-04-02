import React, { useState ,useEffect} from 'react';
import logo from './logo.svg';
import { FC } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';

import { ToDoForm } from "./components/ToDoForm/ToDoForm";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { ITodo } from './interface';


//el petk chi dnes window confir-ic arag ,ment type talis enq typecript-y hakanuma


//ete ogtagorcum enq sovorakan react mez petka tank callback comp. ToDoForm-in vor petka kanchvi erb kanchenq current.value

//erbvor ToDoForm-um inchvor mi ban katarvi urem nor elementa pet add anel list-um
declare var confirm: (question: string) => boolean


const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])//ITodo is array 



  //kkatarvi effect-y mi angam ain zjamanak erb React-y kmiacni ais component-i pattern-y DOM- i het
  //mez petka hamel ueEffecty vor hishenk te inchev enbq avelaclel local
  // mez petka tvyalner stanank localStorage-ic ,ete localtorage- inch vor mi ban ka  ,bay minchev et parse -ov anenq
  //ete localtorage()-umk vochmiabn chka tox JSON.parse() parse ai empty array
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    //ev itogum  saved -um klini ampty array  kamel array baxkacac todo-ic 
    setTodos(saved)

  }, [])


  //ete tate change exe todos-y tox useEffect -y katari tvyal callBack-y(effect-y)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  //state and props  in react change aynchrounus
  //todos dependese -a



  const addHandler = (title: string) => {
    // console.log('add new Todo', title);
    //talisenq  ITodo-in nor marmin ,ITodo rtalisenq vorpes value
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      //vor unenank amen elementi=i hamar  id 
      completed: false
    }

    // setDotos([newTodo,...todos])
    setTodos(prev => [newTodo, ...prev])
    //veradarcnum enq nor zangvac himnvelov naxkin state  -i vra
  }


  //id:number vorovhetev interface um sax sax elemntner-i hamar number-a
  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }
  //gngelu hamara ,petke poxancel TodOlIT ,EVENTER-I ZJAMANAK RANK PETKE KANCH

  const removeHandler = (id: number) => {
    const shoudRemove = confirm('DO you wont delete this element')
    if (shoudRemove) {
      //ete todo.id havasar id:number vory talis enq  apa ayd id-i elementy  kmna array-um
      //menq delete anum todo.id! ays elemnty menak(qo uzacy eli) filter- i michocov
      setTodos(prev => prev.filter(todo => todo.id !== id))

    }



  }


  return (<>

    <Navbar />

    <div className='container'>
      <ToDoForm onAdd={addHandler} />
      <ToDoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </div>

  </>

  )



}

export default App;
