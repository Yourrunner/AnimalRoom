//在环境中找到对应的作品
//设置相机的位置和朝向
function findWork(px, py, pz, tx, ty, tz) {
    camera.position = new BABYLON.Vector3(px, py, pz);
    camera.setTarget(new BABYLON.Vector3(tx, ty, tz));
    $("#messageBox").css("display", "none");
    whoosh.play();
}

//Top Left 显示展览信息
function showEx() {
    var x = document.getElementById("messageBox");
    if (x.style.display === "none") {
        document.getElementById("about-exhibition").style.display = "block";
        document.getElementById("about-us").style.display = "none";
        document.getElementById("about-room").style.display = "none";
        x.style.display = "block";
        whoosh.play();
    }
}

//Bottom Left 显示展览信息
function showInfo(info) {
    var x = document.getElementById("messageBox");
    if (x.style.display === "none") {
        x.style.display = "block";
        whoosh.play();
    }

    switch (info) {
        case 'room':
            document.getElementById("about-room").style.display = "block";
            document.getElementById("about-exhibition").style.display = "none";
            document.getElementById("about-us").style.display = "none";
            break;
        case 'project':
            document.getElementById("about-room").style.display = "none";
            document.getElementById("about-exhibition").style.display = "block";
            document.getElementById("about-us").style.display = "none";
            break;
        case 'us':
            document.getElementById("about-room").style.display = "none";
            document.getElementById("about-exhibition").style.display = "none";
            document.getElementById("about-us").style.display = "block";
    }

}

//关闭信息栏
function closeMessage() {
    var x = document.getElementById("messageBox");
    x.style.display = "none";
    whoosh.play();
}


// 显示右上角tips
function showTips() {
    $("#all-tips").css("display", "block");
    $("#words-div").css("display", "none");
    beep.play();
}

function closeTips() {
    $("#all-tips").css("display", "none");
    $("#words-div").css("display", "block");
    beep.play();
}

// 拍照
function capture() {
    const screenshotTarget = $("body")[0];
    // const screenshotTarget = $("canvas")[0];
    
    // debugger;

    html2canvas(screenshotTarget).then((canvas) => {
        const dataURL = canvas.toDataURL("image/png");
        var newWindowWrapper = '<link rel="stylesheet" href="main.css">' + "<div style='background-color: #212121; width: 1024px; height: 100vh; margin: 0 auto'>"
        var captureImage = newWindowWrapper + "<div id='prompt-to-save'>Right click on the below image to save the photo for your memory &darr;&darr;&darr; </div>" + "<img style='width: 1024px; margin: 0 auto; border: solid 10px white' src='" + dataURL + "' /></>"
        var x = window.open();
        x.document.open();
        x.document.write(captureImage);
        x.document.close();

    });

}