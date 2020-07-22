let myTodos = {
    day:'Monday',
    meetings:0,
    meetDone:0,

    addMeetings: function(num){
       this.meetings = this.meetings + num;
    },

    addMeetDone: function(num){
        this.meetDone = this.meetDone + num;
    },

    addSummary: function(){
        return `You have ${this.meetings} meetings today  and have done ${this.meetDone}`
    }

}

myTodos.addMeetings(8)
myTodos.addMeetDone(3)

console.log(myTodos.addSummary());



