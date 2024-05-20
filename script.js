
// ANIMATIONS ON LOAD

const body = document.querySelector('body')
const nav = document.querySelector('nav')
const fromBottom = document.getElementsByClassName('from-bottom')
const fromTop = document.getElementsByClassName('from-top')
const fromRight = document.getElementsByClassName('from-right')
const fromLeft = document.getElementsByClassName('from-left')


window.onload = function() {
  // wait 500 ms before display the page, just to be sure everything is loaded.
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    
    //body fade in
    gsap.from(body, {
        opacity: 0, 
        duration: 2,
    });
    gsap.to(body, {
        opacity: 1, 
        duration: 2,
    });

    //nav fade in
    gsap.from(nav, {
        y: -100, 
        duration: 2,
    });
    gsap.to(nav, {
        y: 0, 
        duration: 2,
    });

    // fade in from bottom
    gsap.from(fromBottom, {
        y: 100, 
        duration: 2,
    });
    gsap.to(fromBottom, {
        y: 0, 
        duration: 2,
    });

    // fade in from top
    gsap.from(fromTop, {
        y: -100, 
        duration: 2,
    });
    gsap.to(fromTop, {
        y: 0, 
        duration: 2,
    });

    // fade in from right
    gsap.from(fromRight, {
        x: 100, 
        y: 100,
        duration: 2,
    });
    gsap.to(fromRight, {
        y: 0, 
        x: 0,
        duration: 2,
    });

    // fade in from left
    gsap.from(fromLeft, {
        x: -100, 
        y: 100,
        duration: 2,
    });
    gsap.to(fromLeft, {
        y: 0, 
        x: 0,
        duration: 2,
    });
  },500);
};

// MOBILE NAV OPEN/CLOSE ANIMATION

function myFunction() {
  //select mobile-nav and close/open button
  var x = document.getElementById("mobile-nav");
  const close = document.getElementById('close')
  // when "close" is clicked
  if (x.style.display === "block") {
    //move out nav
    gsap.from(x, {
      x: 0, // 
      duration: 2,
    });
    gsap.to(x, {
      x: 500,
      duration: 2,
    });

    //fade out close button
    gsap.from(close, {
      opacity: 1,
      duration: 0.5,
    })

    gsap.to(close, {
      opacity: 0,
      duration: 0.5,
    })

    //wait for the animations to be done before displaying to none
    setTimeout(function() {
      x.style.display = "none";
    },2000);

    //wait for the previous animation to be done before showing the open button
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

  // when "open" is clicked
  } else {

    //move in nav
    gsap.from(x, {
      x: 500, 
      duration: 2,
    });
    gsap.to(x, {
      x: 0,
      duration: 2,
    });
    x.style.display = "block";

    //hide "open" button
    gsap.from(close, {
      opacity: 1,
      duration: 0.5,
    })

    gsap.to(close, {
      opacity: 0,
      duration: 0.5,
    })

    //wait for the previous animation to be done before showing the close button
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
    

// Select all <a> elements and iterate over them to add event listeners
document.querySelectorAll("a").forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Prevent the default action of the link (i.e., navigating to the target page)
        event.preventDefault();

        // fade out the body
        gsap.from(document.body, {
            opacity: 1, // starting opacity
            duration: 1,
        });
        gsap.to(document.body, {
            opacity: 0, // ending opacity
            duration: 1,
        });

        //fade in nav
        gsap.from(nav, {
            y: 0, 
            duration: 1,
        });
        gsap.to(nav, {
            y: -100, 
            duration: 1,
        });

        //fade in from bottom
        gsap.from(fromBottom, {
          y: 0, 
          duration: 2,
        });
        gsap.to(fromBottom, {
          y: 100, 
          duration: 2,
        });

        //fade in from top
        gsap.from(fromTop, {
          y: 0, 
          duration: 2,
        });
        gsap.to(fromTop, {
          y: -100, 
          duration: 2,
        });
    
        //fade in from right
        gsap.from(fromRight, {
            x: 0, 
            y: 0,
            duration: 2,
        });
        gsap.to(fromRight, {
            y: 100, 
            x: 100,
            duration: 2,
        });
    
        //fade in from left
        gsap.from(fromLeft, {
            x: 0, 
            y: 0,
            duration: 2,
        });
        gsap.to(fromLeft, {
            y: 100, 
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
