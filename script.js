



function handleClassSelection(selectedClass, isIncrease) {
    const selectionInput = document.getElementById(selectedClass + "-class-selection-count");
    const inputCount = parseInt(selectionInput.value);
    let inputNewCount = inputCount;
    if (isIncrease == true) {
        inputNewCount = inputCount + 1;
    } else if (isIncrease == false && inputNewCount > 0) {
        inputNewCount = inputCount - 1;
    }
    selectionInput.value = inputNewCount;
    let selectedClassPriceTotal = 0;
    if (selectedClass == 'first') {
        selectedClassPriceTotal = inputNewCount * 150;
    } else if (selectedClass == 'economy') {
        selectedClassPriceTotal = inputNewCount * 100;
    }
    document.getElementById(selectedClass + "-class-price").innerText = selectedClassPriceTotal;
    getTotalPrice();
}
function getInputValues(selectedClass) {
    const selectionInput = document.getElementById(selectedClass + "-class-selection-count");
    const inputCount = parseInt(selectionInput.value);
    return inputCount;
}
function getTotalPrice() {
    const inputFirstClassCount = getInputValues('first');
    const inputEconomyClassCount = getInputValues('economy');
    const subTotalPrice = inputFirstClassCount * 150 + inputEconomyClassCount * 100;
    document.getElementById("sub-total").innerText = subTotalPrice;
    const taxAmount = Math.round(subTotalPrice * 0.1);
    document.getElementById("tax-amount").innerText = taxAmount;
    const totalAmount = subTotalPrice + taxAmount;
    document.getElementById("total-amount").innerText = totalAmount;
}
// document.getElementById("book-btn").addEventListener("click", function () {
//     const bookingPage = document.getElementById("booking-page");
//     bookingPage.style.display = "none";
//     const contentPage = document.getElementById("content");
//     contentPage.style.display = "block";
// })
function displayHomePage(isTrue) {
    const bookingPage = document.getElementById("booking-page");
    const contentPage = document.getElementById("content");
    if (isTrue === true) {
        bookingPage.style.display = "none";
        contentPage.style.display = "block";
    } else {
        bookingPage.style.display = "block";
        contentPage.style.display = "none";
    }
} 