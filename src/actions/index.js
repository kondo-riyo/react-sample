// export const COUNTPLUS='countPlus'
// export const COUNTMINUS='countMinus'


// export const countPlus=()=>({
//     type: COUNTPLUS
// })
// export const countMinus=()=>({
//     type: COUNTMINUS
// })

// export default ActionsCreater

export const ADDTODO='addTodo'
export const REMOVETODO='removeTask'

export const addTodo=(e)=>{
    console.log('action addTodo')
    return{
        type:ADDTODO,
        title:e.target.previousElementSibling.value,
        // todo:{
        //     name:task,
            // complete:false
        // }
    }
}
export const removeTask=(index)=>{
    return{
        type:REMOVETODO,
        index:index
    }
}

