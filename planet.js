
var overviewBtn = document.getElementById('overview-btn');
    var internalBtn = document.getElementById('internal-btn');
    var geologyBtn = document.getElementById('geology-btn');

var overviewBtnNav = document.getElementById('overview-btn-nav');
    var internalBtnNav = document.getElementById('internal-btn-nav');
    var geologyBtnNav = document.getElementById('geology-btn-nav');

    var overviewInfo = document.getElementById('overview-info');
    var internalInfo = document.getElementById('internal-info');
    var geologyInfo = document.getElementById('geology-info');

    overviewBtn.addEventListener('click', function() {
        gsap.from(internalInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(internalInfo, {
            opacity: 0, // background-color
            duration: 1,
          });
        gsap.from(geologyInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(geologyInfo, {
            opacity: 0, // background-color
            duration: 1,
          });

          overviewBtn.classList.add('active');
          internalBtn.classList.remove('active');
          geologyBtn.classList.remove('active');

        setTimeout(() => { 

            overviewInfo.style.display = 'block';
            internalInfo.style.display = 'none';
            geologyInfo.style.display = 'none';
            gsap.from(overviewInfo, {
                opacity: 0, // background-color
                duration: 1,
              });
            gsap.to(overviewInfo, {
                opacity: 1, // background-color
                duration: 1,
              });
            
         },1000);
    });

    internalBtn.addEventListener('click', function() {
        gsap.from(overviewInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(overviewInfo, {
            opacity: 0, // background-color
            duration: 1,
          });
        gsap.from(geologyInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(geologyInfo, {
            opacity: 0, // background-color
            duration: 1,
          });

          overviewBtn.classList.remove('active');
          internalBtn.classList.add('active');
          geologyBtn.classList.remove('active');

        setTimeout(() => { 

            overviewInfo.style.display = 'none';
            internalInfo.style.display = 'block';
            geologyInfo.style.display = 'none';

            gsap.from(internalInfo, {
                opacity: 0, // background-color
                duration: 1,
              });
            gsap.to(internalInfo, {
                opacity: 1, // background-color
                duration: 1,
              });
            
         },1000);
    });

    geologyBtn.addEventListener('click', function() {
        gsap.from(overviewInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(overviewInfo, {
            opacity: 0, // background-color
            duration: 1,
          });
        gsap.from(internalInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(internalInfo, {
            opacity: 0, // background-color
            duration: 1,
          });

          overviewBtn.classList.remove('active');
          internalBtn.classList.remove('active');
          geologyBtn.classList.add('active');

        setTimeout(() => { 

            overviewInfo.style.display = 'none';
            internalInfo.style.display = 'none';
            geologyInfo.style.display = 'block';
            gsap.from(geologyInfo, {
                opacity: 0, // background-color
                duration: 1,
              });
            gsap.to(geologyInfo, {
                opacity: 1, // background-color
                duration: 1,
              });
            
         },1000);
    });

    gsap.from(".stats", {
        scrollTrigger: '.stats',
        innerText: 0,
        duration: 5,
        snap : {
           innerText: 0.1
        }
      });


    //   MOBILE

    overviewBtnNav.addEventListener('click', function() {
        gsap.from(internalInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(internalInfo, {
            opacity: 0, // background-color
            duration: 1,
          });
        gsap.from(geologyInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(geologyInfo, {
            opacity: 0, // background-color
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
                opacity: 0, // background-color
                duration: 1,
              });
            gsap.to(overviewInfo, {
                opacity: 1, // background-color
                duration: 1,
              });
            
         },1000);
    });

    internalBtnNav.addEventListener('click', function() {
        gsap.from(overviewInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(overviewInfo, {
            opacity: 0, // background-color
            duration: 1,
          });
        gsap.from(geologyInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(geologyInfo, {
            opacity: 0, // background-color
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
                opacity: 0, // background-color
                duration: 1,
              });
            gsap.to(internalInfo, {
                opacity: 1, // background-color
                duration: 1,
              });
            
         },1000);
    });

    geologyBtnNav.addEventListener('click', function() {
        gsap.from(overviewInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(overviewInfo, {
            opacity: 0, // background-color
            duration: 1,
          });
        gsap.from(internalInfo, {
            opacity: 1, // background-color
            duration: 1,
          });
        gsap.to(internalInfo, {
            opacity: 0, // background-color
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
                opacity: 0, // background-color
                duration: 1,
              });
            gsap.to(geologyInfo, {
                opacity: 1, // background-color
                duration: 1,
              });
            
         },1000);
    });


