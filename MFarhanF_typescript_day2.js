function concatination(data) {
    var result = "";
    data.forEach(function (element) {
        result = "".concat(result, " ").concat(element);
    });
    return result;
}
var data1 = [1, "data", 3, "result"];
var data2 = ["Bejo", "has", 4, "sport", "cars"];
console.log(concatination(data1));
console.log(concatination(data2));
