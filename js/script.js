let name = "";
let car = {make:"Saturn", model:"SC1", MPG:30};
let carrArray = ["Saturn", "SC1", 30];
//console.log(carrArray[0]);
let property = "make";
//console.log(car[property]);
//console.log(car.make);

//loop through all the properties in the car
for (prop in car){
    //console.log(z)
    //console.log(car[z]);
    console.log(prop, car[prop])
}


const myPromise = new Promise ((resolve, reject)=>{
    let coin = math.random();
    if(coin>.5){
    resolve(`Flipped a head ${coin}`)
    }else{
    reject(`flipped a tail ${coin}`)
    }
})
myPromise
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})

console.log("more code");

function getData(){
    fetch('data.json')
    .then((response)=>{
        console.log(response)
        return response.json();
    })
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log('error!!!!')
    })
}