
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
        libraryId : 4121,
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
        libraryId : 3001,
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false,
        libraryId: 2402,
    },{
        author:'Keen Mysore',
        title: 'John Doe',
        readingStatus: true,
        libraryId : 3400,

    },{
        author: 'Jack Morrison',
        title: 'Kojo : The dojo ban of the Jungle',
        readingStatus: false,
        libraryId:1214,
        
   }];

    library.sort(function(a,b){
        return a.libraryId - b.libraryId;
    });

    console.log(library);
        
    
    





