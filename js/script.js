const grid = document.getElementById("grid");
const rowInput = document.getElementById("row-input");
const rowNumber = document.getElementById("row-number");

let rowsDisplayed = parseInt(rowInput.getAttribute("initial"));
let rowsMax = parseInt(rowInput.getAttribute("max"));
let rowsMin = parseInt(rowInput.getAttribute("min"));
let columnsDisplayed = 5;

rowNumber.innerHTML = rowsDisplayed;

const addRow = () => {
    if (!(rowsDisplayed === rowsMax)) {
        rowsDisplayed++;
        let newRow = document.createElement("tr");
        for (let i = 0; i < columnsDisplayed; i++) {
            let newColumn = document.createElement("td");
            newRow.append(newColumn);
        }
        grid.append(newRow);
        rowNumber.innerHTML = rowsDisplayed;
    }
}

const removeRow = () => {
    if (!(rowsDisplayed === rowsMin)) {
        rowsDisplayed--;
        grid.removeChild(grid.lastChild);
        rowNumber.innerHTML = rowsDisplayed;
    }
}
