import React from 'react';
import {connect} from 'react-redux';
import {addTodo,removeTask} from './actions';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import {Ticket} from './component/ticket';
import {List} from './component/list';
import Navi from './component/navi';
// import todoList from ''
const App =(props)=>{
  
  return (
    <Router>
    <div>
      <Navi/>
      <h1>todoリスト</h1>
      <input />
      <button onClick={props.addTodo}>追加</button>
      <ul>
        { props.todos.map((todo,index) => (
          <li key={index}>{todo.title}<button onClick={ ()=>props.removeTask(index)}>削除</button></li>
        ))}
        <Link to='/todolist'>ID</Link>
      </ul>
    </div>
    <Switch>
      <Route path='/ticket' component={Ticket}/>
      <Route path='/list' component={List}/>
      <Route path='/todolist'><todoList/></Route>
    </Switch>
    </Router>
  )
}
// const todoList =()=>{
//   const {todolist}=useParams();
//   return <div>{todolist}</div>
// }
const mapStateToProps =state=>({
  todos:state.todo.todos
})
const mapDispatchToProps =dispatch=>({
  addTodo:(e)=>dispatch(addTodo(e)),
  removeTask:(index)=>dispatch(removeTask(index))
})

export default connect (mapStateToProps,mapDispatchToProps)(App)