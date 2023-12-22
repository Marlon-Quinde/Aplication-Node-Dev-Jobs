/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.ts":
/*!***********************!*\
  !*** ./src/js/app.ts ***!
  \***********************/
/***/ (() => {

eval("\ndocument.addEventListener('DOMContentLoaded', () => {\n    const skill = document.querySelector('.lista-conocimientos');\n    if (skill) {\n        skill.addEventListener('click', agregarSkills);\n    }\n});\nconst skills = new Set();\nconst agregarSkills = (e) => {\n    if (e.target.tagName === 'LI') {\n        if (e.target.classList.contains('activo')) {\n            //* Quitarlo del Set y quitar la clase\n            skills.delete(e.target.textContent);\n            e.target.classList.remove('activo');\n        }\n        else {\n            //* Agregarlo al Set y agregar la clase\n            skills.add(e.target.textContent);\n            e.target.classList.add('activo');\n        }\n    }\n    const skillsArray = [...skills];\n    document.querySelector('#skills').value = skillsArray;\n};\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.ts"]();
/******/ 	
/******/ })()
;