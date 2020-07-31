function soldout(){
    const empty = document.getElementsByClassName("text-hover")
    const stock = document.getElementById("quantity")
    if(empty.contains('Sold Out')){
        stock.remove(stock)
    }
}
