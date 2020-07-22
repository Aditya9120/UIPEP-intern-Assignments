let myTodos = {
  day:"Monday",
  meetings:0,
  meetDone:0,
}

let addMeetings = function( todo,meet=0){
  todo.meetings = todo.meetings + meet;

}

let meetDone = function(todo,meet=0){
  todo.meetDone = todo.meetDone + meet;
}

let resetDay = function(todo){
  todo.meetings=0
  todo.meetDone=0
}


let meetSummary = function(todo){
  let meetLeft = todo.meetings- todo.meetDone
  return `The meetings left for the day is : ${meetLeft}`
}

addMeetings(myTodos,2)
addMeetings(myTodos,4)
meetDone(myTodos,2)

console.log(meetSummary(myTodos));