function concatination(data:any[]):string{
var result:string = "";
data.forEach((element) => {
    result = `${result} ${element}`
});
    return result;
} 

var data1:any[] = [1, "data", 3, "result"];
var data2:any[] = ["Bejo","has", 4, "sport", "cars"];
var data3:number[] = [1,2,3,4,5];
var data4:string[] = ["nama", "saya", "farhan"];

function getData(data:string[]|number[]){
    data.forEach(element => {
        console.log(element);
    });
}

console.log(concatination(data1));
console.log(concatination(data2));

getData(data3);
getData(data4);