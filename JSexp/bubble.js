var array1= [99,4,10,15,55,75,66,64,81,150]


for (let index = 0; index < array1.length-1; index++) {
    if (array1[index]>array1[index+1]) {
        var x = array1[index+1];
        array1[index+1] = array1[index];
        array1[index] = x;
    }
}

console.log(array1);

// ----------------------------REVERSE-----------------------------------------


let reverse = function(num){
    num=num+""
    return num
    .split("")
    .reverse()
    .join("");

}

console.log(reverse(123456));


// ----------------------------------Alphabetical Order-------------------------


// function sort(name){
//     return name.split("").sort().join("");
// }
// console.log(sort("wilderbeast"));

// ----------------------------------Arrow Function---------------------------

// var greet = (name)=>`Heyy,Welcome ${name}, !`  
// console.log(greet("Aditya"));

// let  myTodos = [{
//     title:'Go to gym',
//     isDone:true,
// },{
//     title:'Buy Bread',
//     isDone:true,
// },{
//     title:'Starting Coding',
//     isDone:false,
// },{
//     title:'Exercise',
//     isDone:true,
// },{
//     title:'Eat Lunch',
//     isDone:false,
// },{
//     title:'Sleep',
//     isDone:true,
// },]

// const check = myTodos.filter((todo)=>{
//     if(todo.isDone ===true){
//         console.log(todo.title);
//     }
// });


// ----------------------------------------------------------Try and catch------------------------------



// let convertToRs = (dollar)=>{
// if(typeof dollar=='number') {
//     return dollar*64
// }else{
//     throw Error
// }
// }
// try {
//     let amount = convertToRs('Five')
//         console.log(amount);

// } catch (error) {
//     console.log(error);
// }
// console.log('The program will run till the end even it will crash');

// --------------------------------------------------------Map and For of Loop--------------------------------------------------------------


// var John = {
//     name:' I am John',
//     age:24,
//     isActive: true,
// }
// var marry=  { 
//     name:' I am Marry',
//     age:29,
//     isActive:true,
// }

// var sam={ 
//     name:'I am Sam',
//     age:21,
//     isActive:false,
// }

// let users = new Map()

// users.set('john',John)
// users.set('marry',marry)
// users.set('sam',sam)

// // console.log(users.size);
// // console.log(users.values());
// // console.log(users.get('sam'));

// for (const value of users.values()) {
//console.log(value.name);
// }

// -------------------------------------------------Repeated Alphabets-----------------------------------------------------




// var repeat = function(str){


//     var split = str.split('');

//     var x =split[0]
//     var y = split[0]
//     var ctr = 0
//     var result = ''
    



//     for (var x=0 ;x<split.length;x++)
// {
//     ctr=0;
//     for(var y=0 ; y<split.length;y++){
//         if(split[x]===split[y]){
//             ctr+=1
//         }
//     }

//     if(ctr<2)
//     {
//         result = split[x]
//     }
// }
// return result

// }

// console.log(repeat('go goa gone'))






// var findLongestWord = function(array1){

//     var longestWord = array1.sort(function(a,b){
//         return b.length-a.length;
        
//     })
    
//     return longestWord[0]
    
// }

// console.log(findLongestWord(['Australia','Germany','United States of America','Bhopal the lake city of the world']));




