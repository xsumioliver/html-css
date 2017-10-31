function swapList() {
    let firstId = prompt("Choose which list you will like to swap [one,two,three,four]")
    let secondId = prompt("Choose which list you will like to swap with [one,two,three,four]")
    
    let firstText = document.getElementById(firstId).innerText
    let secondText = document.getElementById(secondId).innerText
    
    document.getElementById(firstElement).innerText = secondText
    document.getElementById(secondElement).innerText = firstText

}
swapList()