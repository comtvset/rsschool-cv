window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtnDown").style.display = "none";
        document.getElementById("myBtnUp").style.display = "block";
    } else {
        document.getElementById("myBtnDown").style.display = "block";
        document.getElementById("myBtnUp").style.display = "none";
    }
}

function upFunction() {
    document.documentElement.scrollTop = 0;
}

function downFunction() {
    document.documentElement.scrollTop += 1000;
}
