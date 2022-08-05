// varible delaration
const myBars = document.querySelector(".bars-cont");
const mobile = document.querySelector(".mobile-cont");
const timesCont = document.querySelector(".times-cont");
// observer content;
const trenImage = document.querySelectorAll(".trend-img");
const secTrend = document.querySelectorAll(".sec-trend");
const latImge = document.querySelectorAll(".lat-img");
const redCont1 = document.querySelectorAll(".red-cont");
const redCont2 = document.querySelectorAll(".red-cont-two");
const redCont3 = document.querySelectorAll(".red-cont-three");
const myObserve = [
  ...trenImage,
  ...secTrend,
  ...latImge,
  ...redCont1,
  ...redCont2,
  ...redCont3,
];
myBars.addEventListener("click", () => {
  mobile.classList.toggle("show");
  console.log("click");
});
timesCont.addEventListener("click", () => {
  mobile.classList.remove("show");
});

const observer = new IntersectionObserver(
  (items) => {
    items.forEach((el) => {
      el.target.classList.toggle("work", el.isIntersecting);
      // if (el.isIntersecting) {
      //   observer.unobserve(el.target);
      // }
      el.isIntersecting
        ? observer.unobserve(el.target)
        : observer.observe(el.target);
    });
  },
  {
    threshold: 1,
  }
);
myObserve.forEach((e) => {
  observer.observe(e);
});
