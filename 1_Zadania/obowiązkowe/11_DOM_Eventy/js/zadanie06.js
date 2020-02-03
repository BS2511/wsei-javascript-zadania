window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    let getGlobalX = document.getElementById("globalX");
    let getGlobalY = document.getElementById("globalY");
    let getLocalX = document.getElementById("localX");
    let getLocalY = document.getElementById("localY");
    let getBox = document.getElementById("box");

    document.addEventListener("mousemove", function(){
        getGlobalX.innerText = e.pageX;
        getGlobalY.innerText = e.pageY;
    });
    getBox.addEventListener("mousemove", function(){
        let rect = getBox.getBoundingClientRect();
        getLocalX.innerText = e.pageX - rect.left;
        getLocalY.innerText = e.pageY - rect.top;
    });
});