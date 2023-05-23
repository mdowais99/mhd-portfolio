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
        link: 'https://www.google.com',
        imgSrc: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg'
    },
    quiz = {
        keys: 2,
        check: 'quiz',
        name: 'Quiz App',
        link: 'https://www.facebook.com',
        imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
    },
    todo = {
        keys: 3,
        check: 'todo',
        name: 'ToDo App',
        link: 'https://www.instagram.com',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUhXnwubBIwWfZCw9NSlNBbi_RxrCq9ViyA&usqp=CAU'
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
            // prj.innerHTML += `<div class="card " style="width: 18rem; background-color:gray">
            // <img src="${imgSrc}" class="card-img-top" alt="..." style="width:100%">
            // <div class="card-body text-center ">
            // <h5 class="card-title">${name}</h5>
            // </div>
            // </div>`

            //     prj.innerHTML += `<div class="card bg-dark text-white col-md-4 col-12 showw" >
            //     <img src="${imgSrc}" class="card-img" alt="...">
            //     <div class="card-img-overlay hid">
            //       <h5 class="card-title">${name}</h5>
            //       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

            //     </div>
            //   </div>`

            prj.innerHTML += `<div id="dafa" class="car text-white col-12 col-md-5 text-center softLeftAni" onclick="how(${check})" style="background-image: url(${imgSrc});">
            <div class="inCar">
                    <h1 class="text-center">${name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis repellat molestiae,
                        optio at repellendus sed et.</p>
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
(
    function () {
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
    }
)();