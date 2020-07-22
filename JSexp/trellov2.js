myTodos = [{
    title:'Buy Bread',
    isDone:true,
},{
    title:'Go to gym',
    isDone:false,
},{
    title:'Make to youtube videos',
    isDone:true,
},]

const index = myTodos.findIndex(function(todo,index){

    return todo.title==='Go to gym'


})
console.log(index);