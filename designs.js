
// Select size input vals
let PixelsHight = document.getElementById("inputHeight");
let PixelsWidth = document.getElementById("inputWidth");
// Select color input val
let PixleColor = document.getElementById("colorPicker");
// Where the change will be done val
let DrowTable = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
let StartGrid = document.getElementById("sizePicker");
StartGrid.addEventListener("submit",function(event){
    event.preventDefault();
    makeGrid();
})

//begining of the makeGrid function
function makeGrid() {

// To remove ther prevues table values
DrowTable.innerHTML = ""
let a = 0;
let b = 0;

//Where the change will be done
do
{
    a++
    b=0
    //Select size input
    let cell = DrowTable.insertRow(0)
    do
    {
        b++
        //Select size input
        cell.insertCell(0);
        // Select color input
        cell.addEventListener("click",function(e)
        {
            e.target.style.backgroundColor = PixleColor.value;
        })
    }
    while (b < PixelsWidth.value);
}
while (a < PixelsHight.value);

}
//end of the makeGrid function
