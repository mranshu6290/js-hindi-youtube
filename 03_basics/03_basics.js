//

const user ={
username:"anshu",
price:999,
welcomeMessage: function ()
{
    console.log(`${this.username} Welcome !!`);
    console.log(this);
}

}
console.log(user.welcomeMessage());


user.username="ganju"
console.log(user.welcomeMessage());


//do a cosnole log

console.log(this);


//current contect is empty object i.e. {} if you just print in the console

//current context is Window in web browser, that is why we can capture windows actions like clicks etc


//arrow fxn

function hello()

{
    const name="anshu1"
    console.log(`${this.name} Welcome !!!!`);
    
}

hello() // here output is undefuned as there is no object cllaing this function

//arrow function

//this is a sorter way to write function and we just skip the word function when declaring it and assi7ing ti a vairable

const abc =function ()

{
    const name="anshu1"
    console.log(`${this.name} Welcome !!!!`);
    
}

//now remove the rowrd function and replace by => after the ()


const abc1 = () =>

{
    const name="anshu1"
    console.log(`${this.name} Welcome !!!!`);
    
}


//implicit return

// If statement is one line only then we can get rid of {} and return fucntion

//Pending