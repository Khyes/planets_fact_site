// create variable for info buttons
const overviewBtn = document.getElementById('overview-btn');
const internalBtn = document.getElementById('internal-btn');
const geologyBtn = document.getElementById('geology-btn');

// create variable for info mobile buttons
const overviewBtnNav = document.getElementById('overview-btn-nav');
const internalBtnNav = document.getElementById('internal-btn-nav');
const geologyBtnNav = document.getElementById('geology-btn-nav');

// create variable for info sections
const overviewInfo = document.getElementById('overview-info');
const internalInfo = document.getElementById('internal-info');
const geologyInfo = document.getElementById('geology-info');

// animation when overview button is clicked
overviewBtn.addEventListener('click', function() {
    //hide the two other info section
    gsap.from(internalInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(internalInfo, {
        opacity: 0,
        duration: 1,
    });
    gsap.from(geologyInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(geologyInfo, {
        opacity: 0,
        duration: 1,
    });

    //change the active class on the buttons
    overviewBtn.classList.add('active');
    internalBtn.classList.remove('active');
    geologyBtn.classList.remove('active');

    //show the overview info section after the other ones where hidden
    setTimeout(() => {
        overviewInfo.style.display = 'block';
        internalInfo.style.display = 'none';
        geologyInfo.style.display = 'none';
        gsap.from(overviewInfo, {
            opacity: 0,
            duration: 1,
        });
        gsap.to(overviewInfo, {
            opacity: 1,
            duration: 1,
        });

    }, 1000);
});

// animation when internal button is clicked
internalBtn.addEventListener('click', function() {
  //hide the two other info section
    gsap.from(overviewInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(overviewInfo, {
        opacity: 0,
        duration: 1,
    });
    gsap.from(geologyInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(geologyInfo, {
        opacity: 0,
        duration: 1,
    });

    //change the active class on the buttons
    overviewBtn.classList.remove('active');
    internalBtn.classList.add('active');
    geologyBtn.classList.remove('active');

    //show the internal info section after the other ones where hidden
    setTimeout(() => {

        overviewInfo.style.display = 'none';
        internalInfo.style.display = 'block';
        geologyInfo.style.display = 'none';

        gsap.from(internalInfo, {
            opacity: 0,
            duration: 1,
        });
        gsap.to(internalInfo, {
            opacity: 1,
            duration: 1,
        });

    }, 1000);
});

// animation when geology button is clicked
geologyBtn.addEventListener('click', function() {
   //hide the two other info sections
    gsap.from(overviewInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(overviewInfo, {
        opacity: 0,
        duration: 1,
    });
    gsap.from(internalInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(internalInfo, {
        opacity: 0,
        duration: 1,
    });

    //change the active class on the buttons
    overviewBtn.classList.remove('active');
    internalBtn.classList.remove('active');
    geologyBtn.classList.add('active');

    //show the geology info section after the other ones where hidden
    setTimeout(() => {

        overviewInfo.style.display = 'none';
        internalInfo.style.display = 'none';
        geologyInfo.style.display = 'block';
        gsap.from(geologyInfo, {
            opacity: 0,
            duration: 1,
        });
        gsap.to(geologyInfo, {
            opacity: 1,
            duration: 1,
        });

    }, 1000);
});

//stats count up animation
gsap.from(".stats", {
    scrollTrigger: '.stats',
    innerText: 0,
    duration: 5,
    snap: {
        innerText: 0.1
    }
});


//   MOBILE
overviewBtnNav.addEventListener('click', function() {
    gsap.from(internalInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(internalInfo, {
        opacity: 0,
        duration: 1,
    });
    gsap.from(geologyInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(geologyInfo, {
        opacity: 0,
        duration: 1,
    });


    overviewBtnNav.classList.add('active-mobile');
    internalBtnNav.classList.remove('active-mobile');
    geologyBtnNav.classList.remove('active-mobile');


    setTimeout(() => {

        overviewInfo.style.display = 'block';
        internalInfo.style.display = 'none';
        geologyInfo.style.display = 'none';
        gsap.from(overviewInfo, {
            opacity: 0,
            duration: 1,
        });
        gsap.to(overviewInfo, {
            opacity: 1,
            duration: 1,
        });

    }, 1000);
});

internalBtnNav.addEventListener('click', function() {
    gsap.from(overviewInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(overviewInfo, {
        opacity: 0,
        duration: 1,
    });
    gsap.from(geologyInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(geologyInfo, {
        opacity: 0,
        duration: 1,
    });

    overviewBtnNav.classList.remove('active-mobile');
    internalBtnNav.classList.add('active-mobile');
    geologyBtnNav.classList.remove('active-mobile');

    setTimeout(() => {

        overviewInfo.style.display = 'none';
        internalInfo.style.display = 'block';
        geologyInfo.style.display = 'none';

        gsap.from(internalInfo, {
            opacity: 0,
            duration: 1,
        });
        gsap.to(internalInfo, {
            opacity: 1,
            duration: 1,
        });

    }, 1000);
});

geologyBtnNav.addEventListener('click', function() {
    gsap.from(overviewInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(overviewInfo, {
        opacity: 0,
        duration: 1,
    });
    gsap.from(internalInfo, {
        opacity: 1,
        duration: 1,
    });
    gsap.to(internalInfo, {
        opacity: 0,
        duration: 1,
    });

    overviewBtnNav.classList.remove('active-mobile');
    internalBtnNav.classList.remove('active-mobile');
    geologyBtnNav.classList.add('active-mobile');

    setTimeout(() => {

        overviewInfo.style.display = 'none';
        internalInfo.style.display = 'none';
        geologyInfo.style.display = 'block';
        gsap.from(geologyInfo, {
            opacity: 0,
            duration: 1,
        });
        gsap.to(geologyInfo, {
            opacity: 1,
            duration: 1,
        });

    }, 1000);
});