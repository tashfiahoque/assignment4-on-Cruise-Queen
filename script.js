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
    document.getElementById("final-count-first-class").innerText = inputFirstClassCount;
    document.getElementById("final-count-economy-class").innerText = inputEconomyClassCount;
    const subTotalPrice = inputFirstClassCount * 150 + inputEconomyClassCount * 100;
    document.getElementById("sub-total").innerText = subTotalPrice;
    document.getElementById("sub-total-final").innerText = subTotalPrice;
    const taxAmount = Math.round(subTotalPrice * 0.1);
    document.getElementById("tax-amount").innerText = taxAmount;
    document.getElementById("tax-amount-final").innerText = taxAmount;
    const totalAmount = subTotalPrice + taxAmount;
    document.getElementById("total-amount").innerText = totalAmount;
    document.getElementById("total-amount-final").innerText = totalAmount;
}


function displayHomePage(state) {
    if (state == true) {
        document.getElementById("booking-page").style.display = "none";
        document.getElementById("billing-page").style.display = "block";
    } else {
        document.getElementById("booking-page").style.display = "block";
        document.getElementById("billing-page").style.display = "none";
    }
} 