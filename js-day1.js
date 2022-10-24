function bookPurchasing(detailOfBook, percentageOfDiscount, percentageOfTax){
    let calculation = "selling price + (selling price x percentageOfTax)";
    let amountOfDiscount = detailOfBook.price*percentageOfDiscount/100;
    let amountOfTax = detailOfBook.price*percentageOfTax/100;
    let priceAfterDiscount = detailOfBook.price - detailOfBook.price*percentageOfDiscount/100;
    let priceAfterTax = priceAfterDiscount + amountOfTax;
    console.log(`Amount of Discount : ${amountOfDiscount}`);
    console.log(`Price after Discount : ${priceAfterDiscount}`);
    console.log(`Amount of Tax : ${amountOfTax}`);
    console.log(`Price after Tax : ${priceAfterTax}`);
}

let detail = {
    'price':100000,
    'title':"javascript basic",
    'description':"this is book about javascript",
}

bookPurchasing(detail,10,5);