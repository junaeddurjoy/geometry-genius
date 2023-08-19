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