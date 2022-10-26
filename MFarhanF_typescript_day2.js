function concatination(data) {
    var result = "";
    data.forEach(function (element) {
        result = "".concat(result, " ").concat(element);
    });
    return result;
}
var data1 = [1, "data", 3, "result"];
var data2 = ["Bejo", "has", 4, "sport", "cars"];
var data3 = [1, 2, 3, 4, 5];
var data4 = ["nama", "saya", "farhan"];
function getData(data) {
    data.forEach(function (element) {
        console.log(element);
    });
}
console.log(concatination(data1));
console.log(concatination(data2));
getData(data3);
getData(data4);
