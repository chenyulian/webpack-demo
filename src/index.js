import x from "./x.js";
import "./x.scss";
import "./y.less";
import "./z.styl";
import "./a.css";
console.log(x);
// console.log("hiqqqqzz");
import img from "./assets/images/1.jpeg";

const div = document.getElementById("app");
div.innerHTML = `
    <img src="${img}" />
`;

const button = document.createElement("button");
div.appendChild(button);
button.innerText = "懒加载";
button.onclick = () => {
  const lazy = import("./lazy.js");
  lazy.then(
    (module) => {
      const fn = module.default;
      fn.call(null);
    },
    () => {
      console.log("失败了");
    }
  );
};
