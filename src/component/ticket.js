// import {Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import React from 'react'
import {addTodo} from '../actions';
import {connect} from 'react-redux';

// const Ticket =(props)=>{
export class Ticket extends React.Component{
    render(){
        return(
            <div>
                <h2>Ticket作成</h2>
                <div>チケット名:<input/></div>
                {/* <div>詳細:　　　<input/></div>
                <div>担当者:　　<input/></div>
                <div>期日:　　　<input/></div>
                <div>開始日:　　<input/></div> */}
                <button onClick={addTodo}>追加</button>
            </div>
        )
    }}

    const mapStateToProps =state=>({
        todos:state.todo.todos
      })
      const mapDispatchToProps =dispatch=>({
        addTodo:(e)=>dispatch(addTodo(e)),
        // removeTask:(index)=>dispatch(removeTask(index))
      })
      
      export default connect (mapStateToProps,mapDispatchToProps)(Ticket)
// export default Ticket
