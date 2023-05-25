let skils = document.querySelector('.aboutResult');
let prj = document.querySelector('#prjRender');
let eduCheck = document.querySelector('#eduCheck');
let skilCheck = document.querySelector('#skilCheck');

let hmCheck = document.querySelector('#hmCheck');
let abCheck = document.querySelector('#abCheck');
let prCheck = document.querySelector('#prCheck');
let cnCheck = document.querySelector('#cnCheck');

let data = [
    resto = {
        keys: 1,
        check: 'resto',
        name: 'Resturant App',
        link: 'https://mdowais99.github.io/Restaurant-Web/',
        imgSrc: './content/images/restro-pic.png'
    },
    quiz = {
        keys: 2,
        check: 'quiz',
        name: 'Quiz App',
        link: 'https://mdowais99.github.io/',
        imgSrc: './content/images/quiz-pic.png'
    },
    todo = {
        keys: 3,
        check: 'todo',
        name: 'ToDo App',
        link: 'https://mdowais99.github.io/ToDo-App/',
        imgSrc: './content/images/todo-pic.png'
    }
];


// ========    SKILLS RENDER   ========
const tecShow = () => {
    skils.innerHTML = `
    <li>React JS</li>
    <li>Material UI</li>
    <li>JavaScript</li>
    <li>Bootstrap</li>
    <li>HTML</li>
    <li>CSS</li>`
    eduCheck.style.borderBottom = 'none';
    skilCheck.style.borderBottom = '#74FFFF 4px solid'
}
const eduShow = () => {
    skils.innerHTML = `
    <li>Bachelors of Computer Science</li>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020 - 2023 &nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    continue...</p>
    <li>Intermediate </li>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2016 - 2018</p>
    <li>Matriculation</li>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2016</p>`
    skilCheck.style.borderBottom = 'none';
    eduCheck.style.borderBottom = '#74FFFF 4px solid'
}


// ========    PROJECT RENDER ==========
(
    function () {

        data.map(({ name, link, imgSrc, keys, check }) => {
           
            prj.innerHTML += `<div id="prCardId" class="car text-white col-12 col-md-6 mb-lg-5 mb-md-4 mb-sm-3 mb-4 text-center softLeftAni" onclick="how(${check})" style="background-image: url(${imgSrc});">
            <div class="inCar">
                    <h1 class="text-center pb-2 pt-3 bCol">${name}</h1>
                    <p class='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis repellat molestiae,
                        optio at repellendus sed et.</p>
                        <button class="downBtn rounded-pill" id="visitBtn" )'>Demo</button>
                </div>
        </div>`
        })
    }


)();

const how = (an) => {
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = `${an.link}`;
    a.click();
}


// ===========     scroll   ========
ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2000,
    delay: 50
});
ScrollReveal().reveal('.topAni ', { origin: 'top' });
ScrollReveal().reveal('.bottomAni', { origin: 'bottom' });
ScrollReveal().reveal('.leftAni', { origin: 'left' });
ScrollReveal().reveal('.rightAni', { origin: 'right' });

ScrollReveal({
    //  reset: true,
    distance: '30px',
    duration: 1600,
    delay: 30
});
ScrollReveal().reveal('.softTopAni', { origin: "top" })
ScrollReveal().reveal('.softLeftAni', { origin: "left" })
ScrollReveal().reveal('.softBottomAni', { origin: "bottom" })
ScrollReveal().reveal('.softRightAni', { origin: "right" })


// ======  TYPE-Text   =====
setTimeout(() => {
    const typed = new Typed('.multi-text', {
        strings: ['Frontend Developer', 'React Js Developer', 'Web Designer'],
        typeSpeed: 100,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });

}, 800);


// ======  LINKS BORDER CHECK    ======
const linkBorderCheck = (something) => {
    if (something === "home") {
        hmCheck.style.borderBottom = "#74FFFF 4px solid"
        abCheck.style.borderBottom = "none"
        prCheck.style.borderBottom = "none"
        cnCheck.style.borderBottom = "none"
    } else if (something === 'about') {
        hmCheck.style.borderBottom = "none"
        abCheck.style.borderBottom = "#74FFFF 4px solid"
        prCheck.style.borderBottom = "none"
        cnCheck.style.borderBottom = "none"
    } else if (something === 'project') {
        hmCheck.style.borderBottom = "none"
        abCheck.style.borderBottom = "none"
        prCheck.style.borderBottom = "#74FFFF 4px solid"
        cnCheck.style.borderBottom = "none"
    } else if (something === 'contact') {
        hmCheck.style.borderBottom = "none"
        abCheck.style.borderBottom = "none"
        prCheck.style.borderBottom = "none"
        cnCheck.style.borderBottom = "#74FFFF 4px solid"
    }
}


function myFun(win) {
    if (win.matches) {

        window.addEventListener('scroll', function () {
            if (window.pageYOffset < 400) {
                hmCheck.style.borderBottom = "#74FFFF 4px solid"
                abCheck.style.borderBottom = "none"
                prCheck.style.borderBottom = "none"
                cnCheck.style.borderBottom = "none"
            } else if (window.pageYOffset > 400 && this.window.pageYOffset < 1100) {
                hmCheck.style.borderBottom = "none"
                abCheck.style.borderBottom = "#74FFFF 4px solid"
                prCheck.style.borderBottom = "none"
                cnCheck.style.borderBottom = "none"

            } else if (window.pageYOffset > 1100 && this.window.pageYOffset < 1700) {
                hmCheck.style.borderBottom = "none"
                abCheck.style.borderBottom = "none"
                prCheck.style.borderBottom = "#74FFFF 4px solid"
                cnCheck.style.borderBottom = "none"
            } else if (window.pageYOffset > 1700) {
                hmCheck.style.borderBottom = "none"
                abCheck.style.borderBottom = "none"
                prCheck.style.borderBottom = "none"
                cnCheck.style.borderBottom = "#74FFFF 4px solid"
            }
        }, true);
    } else {
        console.log('screen width is min')
        // window.addEventListener('scroll', function () {
        //     if (window.pageYOffset < 800) {
        //         hmCheck.style.borderBottom = "#74FFFF 4px solid"
        //         abCheck.style.borderBottom = "none"
        //         prCheck.style.borderBottom = "none"
        //         cnCheck.style.borderBottom = "none"
        //     } else if (window.pageYOffset > 800 && this.window.pageYOffset < 1500) {
        //         hmCheck.style.borderBottom = "none"
        //         abCheck.style.borderBottom = "#74FFFF 4px solid"
        //         prCheck.style.borderBottom = "none"
        //         cnCheck.style.borderBottom = "none"

        //     } else if (window.pageYOffset > 1600 && this.window.pageYOffset < 2400) {
        //         hmCheck.style.borderBottom = "none"
        //         abCheck.style.borderBottom = "none"
        //         prCheck.style.borderBottom = "#74FFFF 4px solid"
        //         cnCheck.style.borderBottom = "none"
        //     } else if (window.pageYOffset > 2400) {
        //         hmCheck.style.borderBottom = "none"
        //         abCheck.style.borderBottom = "none"
        //         prCheck.style.borderBottom = "none"
        //         cnCheck.style.borderBottom = "#74FFFF 4px solid"
        //     }
        // }, true);
    }
}
let win = window.matchMedia('(width >700px)')
myFun(win)
win.addEventListener('onload', myFun)


const download = ()=>{
    let a = document.createElement('a')
    let url = "./content/MHD-Cv.pdf"
    a.href = url
    a.download = 'MHD-Cv'
    document.body.appendChild(a)
    a.click()
    // document.body.removeChild(a)
}