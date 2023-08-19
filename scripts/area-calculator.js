function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base=parseFloat(baseValueText)
    console.log(base);
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height=parseFloat(heightValueText)
    console.log(height);

    const area = 0.5*base*height;
    console.log(area);

    // show area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    const baseField = document.getElementById('rectangle-base');
    const baseValueText = baseField.value;
    const base=parseFloat(baseValueText)
    console.log(base);
    const heightField = document.getElementById('rectangle-height');
    const heightValueText = heightField.value;
    const height=parseFloat(heightValueText)
    console.log(height);

    const area = base*height;
    console.log(area);

    // show area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base*height;

    setInnerText('parallelogram-area',area);
}
function calculateEllipseArea(){
    const radius1 = getInputValue('ellipse-first-radius');
    const radius2 = getInputValue('ellipse-first-radius');
    const area = 3.14*radius1*radius2;

    setInnerText('ellipse-area',area);
}
// reusable
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}