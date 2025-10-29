// alert("Hello");

//syllabus for today

/*
Fundamentals of js
arrays and objects
function returns
async js coding
*/

var arr = [1, 2, 3, 4, "hey", function(){}, []]

// forEach, map, filter, find, indexOf,


// forEach
var a1 = [1,2,3,4];
a1.forEach(function(val){
    console.log(val +" "+ "hello");
})


// map 
 var a2 = [10, 11, 12, 13, 14]

 var ans = a2.map(function(val){
    // console.log(val*2);
    return 12;
})

 var ans = a2.map(function(val){
     return (val+12);
    })
    console.log(ans)
     


// filter 
 var a4 = [-1 , 2 , 3 , 50, 90]
var ans4= a4.filter(function(val){
      if(val>3) {return true}
    })
    console.log(ans4)


//find
var a5 = [1,2,3,4 ,5,6]
var ans5 = a5.find(function(val){
    if(val === 2 ) return val;
})
console.log(ans5)

// indexOf
var ans6 = a5.indexOf(5)
console.log(ans6)


//Objects
var person = {
    name: "Arpit",
    age: 22,
    xyz: "Abc"
};
console.log(person.age)
console.log(person['age'])
person.age = 21;
console.log(person['age'])

 
// async js coding 
async function abcd(){
    await fetch('https://randomuser.me/api/');
    var ans = await blob.json();

    console.log(ans.results[0].name);
}

abcd();


console.log("chl rha hai");