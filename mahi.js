

// function b() {
//     a();
//     console.log("called b!")
// }
// function a() {
//     console.log("called a!")
    
// }
// b();

// console.log("global");



// function a() {
//     myvar="2";
//     b();
//     function b() {
    
//         console.log(myvar)
//     }
// }
// console.log(myvar);

// var myvar="1";

// console.log(myvar);

// a();

// console.log(myvar);



// function a() {
//     myvar;
//     b();
//     function b() {
    
//         console.log(myvar)
//     }
// }
// console.log(myvar);

// var myvar;

// console.log(myvar);

// a();

// console.log(myvar);






function a() {
    console.log();
    
    function b() {
    myvar =2;
    a();
        console.log();
    }
}
console.log(myvar);

var myvar =1;

console.log(myvar);

a();

console.log(myvar);



s=2;
t=3;
if (s>t) {
    let q=5;
    console.log(q);
    
}
else{
    console.log("mahendra");
}
// objects

var car = new Object();

car.color = "Black";
car.brand = "Maruthi";                         
car.number=9765;
car["engineCondition"] = "Good";

car.owner = new Object();

car.owner.firstName = "Sivakumar";
car.owner.lastName="Kalisetty";
car.owner.color="shdhs";
car.owner.noOfvehicles=3;

console.log(car.color);
console.log(car.brand);
console.log(car.number);
console.log(car.color," ,", car.brand," ," , car.number, " ," ,car["engineCondition"]);

console.log(car["engineCondition"])


