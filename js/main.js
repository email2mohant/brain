// TODO: let the animation be driven through one single class.
const clss = ["from-left", "from-top"];
clss.forEach((cls) => {
  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(cls);
        console.log("intersected");
        return;
      }
      entry.target.classList.remove(cls);
    });
    console.log(entries.length);
  });
  document.querySelectorAll("." + cls).forEach((el) => observer.observe(el));
});

// Tell the observer which elements to track
