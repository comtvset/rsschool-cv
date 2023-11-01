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
    document.documentElement.scrollTop += 10000;
}



const popup = document.querySelector('.popup');
const popupLinks = document.querySelectorAll('.popup-link');

function bodyLock() {
    document.body.classList.toggle('lock');
}

function bodyUnlock() {
    document.body.classList.remove('lock');
}

for (let i = 0; i < popupLinks.length; i++) {
    popupLinks[i].addEventListener('click', () => {
        popup.classList.toggle('open');
        const Img = popupLinks[i].children[0].src;
        popup.children[0].children[1].src = Img;
        bodyLock();
        document.getElementById("myBtnDown").style.display = "none";
        document.getElementById("myBtnUp").style.display = "none";
    });
}

const cross = document.querySelector('.popup-close');

function close() {
    popup.addEventListener('click', (event) => {
        if(event.target.classList.contains('popup-body')) {
            popup.classList.toggle('open')
            bodyUnlock();
        }
    })
    cross.addEventListener('click', (event) => {
        popup.classList.toggle('open')
            bodyUnlock();
            console.log('CLICK')
    })
}
close();