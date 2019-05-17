import styles from "./scss/main.scss";
import styleAnimate from "animate.css";
import Rellax from "rellax";
import routes from "./js/routes";
import Parrallax from "./js/parallax";
const footerYear=document.querySelector(".footer-year")
footerYear.textContent=new Date().getFullYear()

routes()
Parrallax()
Rellax()