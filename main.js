
var result;
var opVisual;

function Operator() {
    num1String = document.getElementById("num1").value;
    num1 = parseInt(num1String);        
    num2String = document.getElementById("num2").value;
    num2 = parseInt(num2String);
    selectElement = document.querySelector('#opBox');
    getOp = selectElement.value;
    if(getOp != ('none')){
    if(getOp == ('add')){
        opVisual = "+";
        result = num1 + num2;
        tableAdd(num1String, num2String, opVisual, result);
    } if(getOp == ('sub')){
        opVisual = "-";
        result = num1 - num2;
        tableAdd(num1String, num2String, opVisual, result);
    } if (getOp == ('multiply')){
        opVisual = "*";
        result = num1 * num2;
        tableAdd(num1String, num2String, opVisual, result);
    } if (getOp == ('divide')){
        opVisual = "/";
        result = num1 / num2;
        tableAdd(num1String, num2String, opVisual, result);
    } 
    } else {
        window.alert("Please choose an Operator!");
    }

}

function tableAdd(String, String, String, Int) {
    var table = document.getElementById('table');
    var tableChild = document.createElement('tr');
    tableChild.innerHTML = "<td>" + "<p>" + num1String + " " + opVisual + " "  + num2String + " " + "=" + " " + result + "</p>" + "</td>";
    table.appendChild(tableChild);
}
