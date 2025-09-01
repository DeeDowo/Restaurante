import "./style.css";
import {getHome} from "./home.js"
import {us} from "./us.js"
import {menu} from "./menu.js"

const boton_home = document.querySelector(".header__nav--home");
const boton_menu = document.querySelector(".header__nav--menu");
const boton_sobre_nosotros = document.querySelector(".header__nav--about");

boton_home.addEventListener("click", getHome);
boton_menu.addEventListener("click", menu);
boton_sobre_nosotros.addEventListener("click", us);