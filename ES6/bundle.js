/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export multWebPack [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subWebPack [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ somaWebPack,\n/* harmony export */   \"subWebPack\": () => /* binding */ subWebPack,\n/* harmony export */   \"multWebPack\": () => /* binding */ multWebPack\n/* harmony export */ });\n// Para fazer a exportação e importação de funções entre arquivos JS é extritamente necessario ser o mesmo nome\nfunction somaWebPack(a, b) {\n  return a + b;\n}\nfunction subWebPack(a, b) {\n  return a - b;\n} // export defult, é quando um arquivo js conterm somente uma função ou é declarada como default\n\nfunction multWebPack(a, b) {\n  return a * b;\n}\n\n//# sourceURL=webpack://ES6/./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n/* harmony import */ var _subtracao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtracao */ \"./subtracao.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar List = /*#__PURE__*/function () {\n  function List() {\n    _classCallCheck(this, List);\n\n    this.data = [];\n  }\n\n  _createClass(List, [{\n    key: \"add\",\n    value: function add(data) {\n      this.data.push(data);\n      console.log(this.data);\n    }\n  }]);\n\n  return List;\n}();\n\nvar TodoList = /*#__PURE__*/function (_List) {\n  _inherits(TodoList, _List);\n\n  var _super = _createSuper(TodoList);\n\n  function TodoList() {\n    var _this;\n\n    _classCallCheck(this, TodoList);\n\n    // chamar o constructor da classe pai\n    _this = _super.call(this);\n    _this.usuario = 'Diego';\n    return _this;\n  }\n\n  _createClass(TodoList, [{\n    key: \"mostraUsuario\",\n    value: function mostraUsuario() {\n      console.log(this.usuario);\n    }\n  }]);\n\n  return TodoList;\n}(List);\n\nvar MinhaLista = new TodoList();\n\ndocument.getElementById('novotodo').onclick = function () {\n  MinhaLista.add('Novo Tudo');\n};\n\nMinhaLista.mostraUsuario(); // com metodos static, nao precisa criar uma classe completa, pois nao ira encontrar. se tentar chamar\n\nvar Matematica = /*#__PURE__*/function () {\n  function Matematica() {\n    _classCallCheck(this, Matematica);\n  }\n\n  _createClass(Matematica, null, [{\n    key: \"soma\",\n    value: function soma(a, b) {\n      return a + b;\n    }\n  }]);\n\n  return Matematica;\n}();\n\nconsole.log(Matematica.soma(1, 2));\nvar arr = [1, 3, 4, 5, 8, 9]; // utilizado para mapear cada unidade de um array\n\nvar newArr = arr.map(function (item, index) {\n  return item + index;\n});\nconsole.log(newArr); // utilizado para retorna a junção de todos os valores de um array\n\nvar sum = arr.reduce(function (total, next) {\n  return total + next;\n}); // precisa retornar true ou false, para que o novo array seja passado\n\nvar filter = arr.filter(function (item) {\n  return item % 2 === 0;\n}); // retorna o item que seja igual ao que esta buscando\n\nvar find = arr.find(function (item) {\n  return item === 4;\n}); // arrow function\n\nvar newArr1 = arr.map(function (item) {\n  return item + 2;\n}); // ou\n\nvar newArr2 = arr.map(function (item) {\n  return item + 2;\n}); // ou\n\nvar teste = function teste() {\n  return {\n    nome: 'Diego'\n  };\n}; // Valores padroes\n\n\nfunction somaA() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;\n  return a + b;\n}\n\nvar somaB = function somaB() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;\n  return a + b;\n};\n\nconsole.log(somaA(3, 4)); // Desestruturação\n\nvar desestruturacao = {\n  nomeDesestruturacao: 'Will',\n  idade: 26,\n  endereco: {\n    cidade: 'Belém',\n    estado: 'PA'\n  }\n};\nvar nomeDesestruturacao = desestruturacao.nomeDesestruturacao,\n    idade = desestruturacao.idade,\n    _desestruturacao$ende = desestruturacao.endereco,\n    cidade = _desestruturacao$ende.cidade,\n    estado = _desestruturacao$ende.estado;\nconsole.log(nomeDesestruturacao);\nconsole.log(cidade);\nconsole.log(idade);\n\nfunction mostraNome(desestruturacao) {\n  console.log(desestruturacao.nome);\n}\n\nmostraNome(desestruturacao);\n\nfunction mostraNome2(_ref) {\n  var nome = _ref.nome,\n      idade = _ref.idade;\n  console.log(nome, idade);\n}\n\nmostraNome2(desestruturacao); // Operadores Rest\n// instalar yarn add @babel/plugin-proposal-object-rest-spread\n// Serve para pegar o resto das propriedades  de um array\n\nvar usuarioRest = {\n  nomeUsuario: 'Will',\n  idade: 26,\n  endereco: {\n    cidade: 'Belém',\n    estado: 'PA'\n  }\n};\n\nvar nomeUsuario = usuarioRest.nomeUsuario,\n    resto = _objectWithoutProperties(usuarioRest, [\"nomeUsuario\"]);\n\nconsole.log(nomeUsuario);\nconsole.log(resto);\nvar arrRest = [1, 2, 3, 4];\nvar x = arrRest[0],\n    y = arrRest[1],\n    z = arrRest.slice(2);\nconsole.log(x);\nconsole.log(y);\nconsole.log(z);\n\nfunction somaRest() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  return params.reduce(function (total, next) {\n    return total + next;\n  });\n}\n\nconsole.log(somaRest(1, 50, 3)); // Operador Spread\n// Serve para repassar as informações de um array para outra estrutura de dados\n// ex1\n\nvar arr1 = [1, 2, 3];\nvar arr2 = [4, 5, 6];\nvar arr3 = [].concat(arr1, arr2);\nconsole.log(arr3); // ex2\n\nvar usuarioSpread = {\n  nomeUsuario: 'Will',\n  idade: 26,\n  endereco: {\n    cidade: 'Belém',\n    estado: 'PA'\n  }\n};\n\nvar usuarioSpread2 = _objectSpread(_objectSpread({}, usuarioSpread), {}, {\n  nomeUsuario: 'Pedrinho'\n});\n\nconsole.log(usuarioSpread2); // Templates Literals\n// Forma de incluir variaveis dentro de strings com o ES6\n\nvar nomeLiterais = 'Will';\nvar idadeLiterais = 23;\nconsole.log(\"{Meu nome \\xE9 \".concat(nomeLiterais, \" e tenho \").concat(idadeLiterais, \" anos}\")); // Object Short Syntax\n\nvar nomeSS = 'Will';\nvar idadeSS = 23;\nvar usuarioSS = {\n  nomeSS: nomeSS,\n  idadeSS: idadeSS,\n  empresa: 'Impactus'\n}; // WebPack\n\nconsole.log((0,_funcoes__WEBPACK_IMPORTED_MODULE_0__.default)(100, 200));\nconsole.log((0,_funcoes__WEBPACK_IMPORTED_MODULE_0__.subWebPack)(100, 200));\nconsole.log((0,_subtracao__WEBPACK_IMPORTED_MODULE_1__.default)(100, 200)); // Funçoes\n\n//# sourceURL=webpack://ES6/./main.js?");

/***/ }),

/***/ "./subtracao.js":
/*!**********************!*\
  !*** ./subtracao.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ subdDfault\n/* harmony export */ });\n// export defult, é quando um arquivo js contem somente uma função.\nfunction subdDfault(a, b) {\n  return a - b;\n}\n\n//# sourceURL=webpack://ES6/./subtracao.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;