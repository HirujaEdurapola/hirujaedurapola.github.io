document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter-div");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    };
  
    const countUp = (element, target) => {
      let count = 0;
      const step = target / 100;
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          element.innerText = target;
          clearInterval(interval);
        } else {
          element.innerText = Math.ceil(count);
        }
      }, 20);
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute("data-target");
          countUp(entry.target, target);
          observer.unobserve(entry.target);  // Stop observing after counting
        }
      });
    }, options);
  
    counters.forEach(counter => observer.observe(counter));
  });