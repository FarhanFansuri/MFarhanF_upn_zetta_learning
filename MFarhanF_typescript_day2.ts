function concatination(data:any[]):string{
var result:string = "";
data.forEach((element) => {
    result = `${result} ${element}`
});
    return result;
} 

var data1:any[] = [1, "data", 3, "result"];
var data2:any[] = ["Bejo","has", 4, "sport", "cars"];

console.log(concatination(data1));
console.log(concatination(data2));

