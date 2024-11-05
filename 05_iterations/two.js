//for each loop caN't retrun anything 

//so we man=ke use of filtter
const arr=[1,2,3,4,5]

// filters what to return and then the valuie thjat misyt be fuliflled

const v=arr.filter( (num) => { return num <4} )

// we can have omre condtiions as well by using && || in operatrorsd

console.log(v);

// the same things cabn be acchived with foreach loop, we just have to ahvce another emptyu array to store if the confudyto matchs

const arr1=[]
arr.forEach (function (num) { if (num<4) {arr1.push(num)}})

console.log (arr1)


// Using Map

// Better than for each

// exmaple if we have ot afdd 10 to each unmber then we use map and it returns thje sma eitems as well we don't have ot do it expilcityl

const n1=arr.map( function (num1) {return num1+10})

console.log(n1);


// chaining 

//we can put map after filter in a chain

const n2=arr
    .map( function (num1) {return num1+10})
    .map( function (num1) {return num1+10})
    .filter( function (num1) {return num1+10})
// similary we can have mulktiple maps or filters


//rediiuce