// import {COUNTPLUS,COUNTMINUS} from '../actions'

// const initialState ={val:0}

// export default(state=initialState,action)=>{
//     switch(action.type){
//         case COUNTPLUS:
//             return {val: state.val +1}
//         case COUNTMINUS:
//             return {val: state.val -1}
//         default:
//             return state
//     }
// }

import {ADDTODO,REMOVETODO} from '../actions'


let initialState={todos:[
      { title: '概要作成' ,flg:false},
      { title: '画面設計作成' ,flg:false},
      { title: '詳細設計作成' ,flg:false},
      { title: 'コーディング' ,flg:false},
    { title: 'テスト', flg: false }
]}
console.log('todo.js')
const todos=(state=initialState,action)=>{
    switch(action.type){
        case ADDTODO:
            console.log(action)
            return {
                todos:[
                    ...state.todos,{title:action.title},
                // console.log('todo.js addTodo move')
            ],
            // title:[]
            }
        case REMOVETODO:
            const removeTodo=[...state.todos]
            // console.log(newTodos)
            removeTodo.splice(action.index, 1)
            return {
                todos:removeTodo 
            }
        default:
            return state
    }
}

export default todos