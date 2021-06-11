let rows;
let columns;

const grid = document.getElementById("grid");
const rowInput = document.getElementById("row-input");
const maxRow = parseInt(rowInput.getAttribute("max"));

/*
validateInput() is a helper function used for the rows and columns input field 
to verify that given input was 0-9. paste from clipboard, backspace, and DEL key
in order to properly display numeric integers valid with the input fields.
*/
const validateInput = (eventObj) => {
    if (Number.isInteger(parseInt(eventObj.data)) ||        //tests to make sure input was an integer
        eventObj.inputType === "insertFromPaste" ||         //allows pasting from clipboard
        eventObj.inputType === "deleteContentForward" ||    //allows front deletion (DEL key)
        eventObj.inputType === "deleteContentBackward" ||   //allows backspace deletion
        !('inputType' in eventObj))                         //Prevents a Chrome Behavior in which clicking
                                                            //up or down would clear the input field
        return true;
    else
        return false;
}

const rowModifier = (event) => {
    if (validateInput(event)) {
        if (rowInput.value > maxRow)
            rowInput.value = maxRow.toString();
        rows = parseInt(rowInput.value);
    }
    else 
        rowInput.value = rows;
}

document.getElementById("row-input").addEventListener('input', rowModifier);
