"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    // chamar o constructor da classe pai
    _this = _super.call(this);
    _this.usuario = 'Diego';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo Tudo');
};

MinhaLista.mostraUsuario(); // com metodos static, nao precisa criar uma classe completa, pois nao ira encontrar. se tentar chamar

var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
var arr = [1, 3, 4, 5, 8, 9]; // utilizado para mapear cada unidade de um array

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // utilizado para retorna a junção de todos os valores de um array

var sum = arr.reduce(function (total, next) {
  return total + next;
}); // precisa retornar true ou false, para que o novo array seja passado

var filter = arr.filter(function (item) {
  return item % 2 === 0;
}); // retorna o item que seja igual ao que esta buscando

var find = arr.find(function (item) {
  return item === 4;
}); // arrow function

var newArr1 = arr.map(function (item) {
  return item + 2;
}); // ou

var newArr2 = arr.map(function (item) {
  return item + 2;
}); // ou

var teste = function teste() {
  return {
    nome: 'Diego'
  };
}; // Valores padroes


function somaA() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return a + b;
}

var somaB = function somaB() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return a + b;
};

console.log(somaA(3, 4)); // Desestruturação

var desestruturacao = {
  nomeDesestruturacao: 'Will',
  idade: 26,
  endereco: {
    cidade: 'Belém',
    estado: 'PA'
  }
};
var nomeDesestruturacao = desestruturacao.nomeDesestruturacao,
    idade = desestruturacao.idade,
    _desestruturacao$ende = desestruturacao.endereco,
    cidade = _desestruturacao$ende.cidade,
    estado = _desestruturacao$ende.estado;
console.log(nomeDesestruturacao);
console.log(cidade);
console.log(idade);

function mostraNome(desestruturacao) {
  console.log(desestruturacao.nome);
}

mostraNome(desestruturacao);

function mostraNome2(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome2(desestruturacao); // Operadores Rest
// instalar yarn add @babel/plugin-proposal-object-rest-spread
// Serve para pegar o resto das propriedades  de um array

var usuarioRest = {
  nomeUsuario: 'Will',
  idade: 26,
  endereco: {
    cidade: 'Belém',
    estado: 'PA'
  }
};

var nomeUsuario = usuarioRest.nomeUsuario,
    resto = _objectWithoutProperties(usuarioRest, ["nomeUsuario"]);

console.log(nomeUsuario);
console.log(resto);
var arrRest = [1, 2, 3, 4];
var x = arrRest[0],
    y = arrRest[1],
    z = arrRest.slice(2);
console.log(x);
console.log(y);
console.log(z);

function somaRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(somaRest(1, 50, 3)); // Operador Spread
// Serve para repassar as informações de um array para outra estrutura de dados
// ex1

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3); // ex2

var usuarioSpread = {
  nomeUsuario: 'Will',
  idade: 26,
  endereco: {
    cidade: 'Belém',
    estado: 'PA'
  }
};

var usuarioSpread2 = _objectSpread(_objectSpread({}, usuarioSpread), {}, {
  nomeUsuario: 'Pedrinho'
});

console.log(usuarioSpread2);
