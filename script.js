function myFunction() {
    var x = document.getElementById("mobile-nav");
    const close = document.getElementById('close')
    if (x.style.display === "block") {
      gsap.from(x, {
        x: 0, // background-color
        duration: 2,
      });
      gsap.to(x, {
        x: 500,
        duration: 2,
      });

      setTimeout(function() {
        x.style.display = "none";
      },2000);

      gsap.from(close, {
        opacity: 1,
        duration: 0.5,
      })

      gsap.to(close, {
        opacity: 0,
        duration: 0.5,
      })
      setTimeout(function() {
        close.classList.add('fa-bars');
        close.classList.remove('fa-xmark');

        gsap.from(close, {
          opacity: 0,
          duration: 0.5,
        })
  
        gsap.to(close, {
          opacity: 1,
          duration: 0.5,
        })

      }, 500);

    
    } else {

      gsap.from(x, {
        x: 500, // background-color
        duration: 2,
      });
      gsap.to(x, {
        x: 0,
        duration: 2,
      });
      x.style.display = "block";

      gsap.from(close, {
        opacity: 1,
        duration: 0.5,
      })

      gsap.to(close, {
        opacity: 0,
        duration: 0.5,
      })
      setTimeout(function() {
        close.classList.remove('fa-bars');
        close.classList.add('fa-xmark');

        gsap.from(close, {
          opacity: 0,
          duration: 0.5,
        })
  
        gsap.to(close, {
          opacity: 1,
          duration: 0.5,
        })

      }, 500);
    }
  }


const body = document.querySelector('body')
const nav = document.querySelector('nav')
const fromBottom = document.getElementsByClassName('from-bottom')
const fromTop = document.getElementsByClassName('from-top')
const fromRight = document.getElementsByClassName('from-right')
const fromLeft = document.getElementsByClassName('from-left')


document.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(() => {

    document.getElementById("loading").style.display = "none";
    // gsap code here!
    gsap.from(body, {
        opacity: 0, // background-color
        duration: 2,
      });
    gsap.to(body, {
        opacity: 1, // background-color
        duration: 2,
      });
    gsap.from(nav, {
        y: -100, // background-color
        duration: 2,
      });
    gsap.to(nav, {
        y: 0, // background-color
        duration: 2,
      });

    gsap.from(fromBottom, {
        y: 100, // background-color
        duration: 2,
      });
    gsap.to(fromBottom, {
        y: 0, // background-color
        duration: 2,
      });

    gsap.from(fromTop, {
        y: -100, // background-color
        duration: 2,
      });
    gsap.to(fromTop, {
        y: 0, // background-color
        duration: 2,
      });

    gsap.from(fromRight, {
        x: 100, // background-color
        y: 100,
        duration: 2,
      });
    gsap.to(fromRight, {
        y: 0, // background-color
        x: 0,
        duration: 2,
      });

    gsap.from(fromLeft, {
        x: -100, // background-color
        y: 100,
        duration: 2,
      });
    gsap.to(fromLeft, {
        y: 0, // background-color
        x: 0,
        duration: 2,
      });
  },500);


   });
    

// Select all <a> elements and iterate over them to add event listeners
document.querySelectorAll("a").forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Prevent the default action of the link (i.e., navigating to the target page)
        event.preventDefault();

        // Perform GSAP animation on the body element
        gsap.from(document.body, {
            opacity: 1, // starting opacity
            duration: 1,
        });
        gsap.to(document.body, {
            opacity: 0, // ending opacity
            duration: 1,
        });

        gsap.from(nav, {
            y: 0, // background-color
            duration: 1,
          });
        gsap.to(nav, {
            y: -100, // background-color
            duration: 1,
          });

          gsap.from(fromBottom, {
            y: 0, // background-color
            duration: 2,
          });
        gsap.to(fromBottom, {
            y: 100, // background-color
            duration: 2,
          });

          gsap.from(fromTop, {
            y: 0, // background-color
            duration: 2,
          });
        gsap.to(fromTop, {
            y: -100, // background-color
            duration: 2,
          });
    
    
        gsap.from(fromRight, {
            x: 0, // background-color
            y: 0,
            duration: 2,
          });
        gsap.to(fromRight, {
            y: 100, // background-color
            x: 100,
            duration: 2,
          });
    
        gsap.from(fromLeft, {
            x: 0, // background-color
            y: 0,
            duration: 2,
          });
        gsap.to(fromLeft, {
            y: 100, // background-color
            x: -100,
            duration: 2,
          });

        // Wait for 2 seconds (2000 milliseconds) before redirecting to the target page
        setTimeout(function() {
            // Get the target URL from the link's href attribute
            var targetURL = event.target.href;
            
            // Redirect to the target page
            window.location.href = targetURL;
        }, 1000); // 2000 milliseconds = 2 seconds
    });
});

// mobile nav animation
