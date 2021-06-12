//Henry Baum
//CSCI-39548-01
//Prof. Melissa Lynch
//Date: June 14 2021
//Assignment #3: DOM and Gridmaker

/*****************************************************************
*****                    Initializers                        *****
*****************************************************************/

//The following variables help in accessing common elements in
//index.html by shorthand (instead of needing to type out
//document.getElementByID("element") everytime)
const grid = document.getElementById("grid");
const rowInput = document.getElementById("row-input");
const rowNumber = document.getElementById("row-number");
const columnInput = document.getElementById("column-input");
const columnNumber = document.getElementById("column-number");

//These variables are used in gird cell creation and modification
let rowsDisplayed = parseInt(rowInput.getAttribute("initial"));
const rowsMax = parseInt(rowInput.getAttribute("max"));
const rowsMin = parseInt(rowInput.getAttribute("min"));
let columnsDisplayed = parseInt(columnInput.getAttribute("initial"));
const columnsMax = parseInt(columnInput.getAttribute("max"));
const columnsMin = parseInt(columnInput.getAttribute("min"));
let colorSelected = document.getElementById("colors").value;

/*****************************************************************
*****                      Functions                         *****
*****************************************************************/

//Helper function that returns a new <td> element with default
//"clear" class and click event listener. Is called whenever a new
//<td>/column element is needed
const newColumnElement = () => {
    let newColumn = document.createElement("td");
    newColumn.setAttribute("class", "clear");
    newColumn.addEventListener('click', changeColor);
    return newColumn;
}

//Event function for add-row button, propagates a new row with
//columnsDisplayed number of columns appended to it and appends the
//row to the grid
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

//Event function for remove-row button, removes last row created
const removeRow = () => {
    if (!(rowsDisplayed === rowsMin)) {
        rowsDisplayed--;
        grid.removeChild(grid.lastChild);
        rowNumber.innerHTML = `${rowsDisplayed} / ${rowsMax}`;
    }
}

//Event function for add-column button, accesses every row/<tr>
//element to append a new column to it
const addColumn = () => {
    if (!(columnsDisplayed === columnsMax)) {
        columnsDisplayed++;
        for (row of grid.querySelectorAll("tr"))
            row.append(newColumnElement());
        columnNumber.innerHTML = `${columnsDisplayed} / ${columnsMax}`;
    }
}

//Event function for remove-column button, accesses every row/<tr>
//element to remove last column created.
const removeColumn = () => {
    if (!(columnsDisplayed === columnsMin)) {
        columnsDisplayed--;
        for (row of grid.querySelectorAll("tr"))
            row.removeChild(row.lastChild);
        columnNumber.innerHTML = `${columnsDisplayed} / ${columnsMax}`;
    }
}

//Event function for color selection
const colorPicker = () => {
    colorSelected = document.getElementById("colors").value;
}

//Click event function for <td> elements to change their class value
//to the colorSelected value, thus filling the cell with the color
//selected.
const changeColor = (event) => {
    event.target.setAttribute("class", colorSelected);
}

//Event function for fill-uncolored button, finds every cell with
//the class "clear" and changes it the colorSelected value
const fillUncolored = () => {
    for (cell of grid.querySelectorAll(".clear"))
        cell.setAttribute("class", colorSelected);
}

//Event function for fill-all button, changes every cell/<td> element
//class to colorSelected value
const fillAll = () => {
    for (cell of grid.querySelectorAll("td"))
        cell.setAttribute("class", colorSelected);
}

//Event function for clear-all button, changes every cell/<td> element
//class to clear
const clearAll = () => {
    for (cell of grid.querySelectorAll("td"))
        cell.setAttribute("class", "clear");
}

//Propogates grid when page is loaded to the initial values of row-input
//and column-input.
window.onload = () => {
    rowNumber.innerHTML = `${rowsDisplayed} / ${rowsMax}`;
    columnNumber.innerHTML = `${columnsDisplayed} / ${columnsMax}`;
    for (let i = 0; i < rowsDisplayed; i++) {
        let newRow = document.createElement("tr");
        for (let j = 0; j < columnsDisplayed; j++)
            newRow.append(newColumnElement());
        grid.append(newRow);
    }
}
