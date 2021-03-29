import x from "./x.js";
import "./x.scss";
import "./y.less";
import "./z.styl";
// console.log(x);
// console.log("hiqqqqzz");
import img from "./assets/images/1.jpeg";

const div = document.getElementById("app");
div.innerHTML = `
    <img src="${img}" />
`;
