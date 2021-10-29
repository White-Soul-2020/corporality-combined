import jQuery from "jquery";
import * as $ from 'jquery';

export function nav() {

    // sidebar open close js code
    let navLinks = document.querySelector(".nav-links");
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    menuOpenBtn.onclick = function () {
        navLinks.style.left = "0";
    }
    menuCloseBtn.onclick = function () {
        navLinks.style.left = "-100%";
    }

    // sidebar submenu open close js code
    let htmlcssArrow = document.querySelector(".nav-li");
    // window.onload = function () {

    htmlcssArrow.onclick = function () {
        navLinks.classList.toggle("show1");
    }
    // }


    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
}