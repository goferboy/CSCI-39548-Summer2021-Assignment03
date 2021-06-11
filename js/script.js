const grid = document.getElementById("grid");
const rowInput = document.getElementById("row-input");
const rowNumber = document.getElementById("row-number");
const columnInput = document.getElementById("column-input");
const columnNumber = document.getElementById("column-number");

let rowsDisplayed = parseInt(rowInput.getAttribute("initial"));
const rowsMax = parseInt(rowInput.getAttribute("max"));
const rowsMin = parseInt(rowInput.getAttribute("min"));
let columnsDisplayed = parseInt(columnInput.getAttribute("initial"));
const columnsMax = parseInt(columnInput.getAttribute("max"));
const columnsMin = parseInt(columnInput.getAttribute("min"));

let colorSelected = document.getElementById("colors").value;
rowNumber.innerHTML = `${rowsDisplayed} / ${rowsMax}`;
columnNumber.innerHTML = `${columnsDisplayed} / ${columnsMax}`;

const newColumnElement = () => {
    let newColumn = document.createElement("td");
    newColumn.setAttribute("class", "clear");
    newColumn.addEventListener('click', changeColor);
    return newColumn;
}

const addRow = () => {
    if (!(rowsDisplayed === rowsMax)) {
        rowsDisplayed++;
        let newRow = document.createElement("tr");
        for (let i = 0; i < columnsDisplayed; i++)
            newRow.append(newColumnElement());
        grid.append(newRow);
        rowNumber.innerHTML = `${rowsDisplayed} / ${rowsMax}`;
    }
}

const removeRow = () => {
    if (!(rowsDisplayed === rowsMin)) {
        rowsDisplayed--;
        grid.removeChild(grid.lastChild);
        rowNumber.innerHTML = `${rowsDisplayed} / ${rowsMax}`;
    }
}

const addColumn = () => {
    if (!(columnsDisplayed === columnsMax)) {
        columnsDisplayed++;
        for (row of grid.querySelectorAll("tr"))
            row.append(newColumnElement());
        columnNumber.innerHTML = `${columnsDisplayed} / ${columnsMax}`;
    }
}

const removeColumn = () => {
    if (!(columnsDisplayed === columnsMin)) {
        columnsDisplayed--;
        for (row of grid.querySelectorAll("tr"))
            row.removeChild(row.lastChild);
        columnNumber.innerHTML = `${columnsDisplayed} / ${columnsMax}`;
    }
}

const colorPicker = () => {
    colorSelected = document.getElementById("colors").value;
}

const changeColor = (event) => {
    event.target.setAttribute("class", colorSelected);
}

const fillUncolored = () => {
    for (cell of grid.querySelectorAll(".clear"))
        cell.setAttribute("class", colorSelected);
}

const fillAll = () => {
    for (cell of grid.querySelectorAll("td"))
        cell.setAttribute("class", colorSelected);
}

const clearAll = () => {
    for (cell of grid.querySelectorAll("td"))
        cell.setAttribute("class", "clear");
}
