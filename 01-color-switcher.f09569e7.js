!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){document.body.setAttribute("style","background-color: "+"#".concat(Math.floor(16777215*Math.random()).toString(16))),console.log("Цвет меняется"),t.disabled=!0,e.disabled=!1}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),console.log("Цвет НЕ меняется"),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.f09569e7.js.map
