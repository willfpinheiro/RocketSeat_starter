class List {
	constructor() {
		this.data = [];
	}

	add(data) {
		this.data.push(data);
		console.log(this.data);
	}
}

class TodoList extends List {
	constructor() {
		// chamar o constructor da classe pai
		super();

		this.usuario = 'Diego';
	}

	mostraUsuario() {
		console.log(this.usuario);
	}
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
	MinhaLista.add('Novo Tudo');
};

MinhaLista.mostraUsuario();

// com metodos static, nao precisa criar uma classe completa, pois nao ira encontrar. se tentar chamar
class Matematica {
	static soma(a, b) {
		return a + b;
	}
}

console.log(Matematica.soma(1, 2));

const arr = [1, 3, 4, 5, 8, 9];

// utilizado para mapear cada unidade de um array
const newArr = arr.map(function (item, index) {
	return item + index;
});

console.log(newArr);

// utilizado para retorna a junção de todos os valores de um array
const sum = arr.reduce(function (total, next) {
	return total + next;
});

// precisa retornar true ou false, para que o novo array seja passado
const filter = arr.filter(function (item) {
	return item % 2 === 0;
});

// retorna o item que seja igual ao que esta buscando
const find = arr.find(function (item) {
	return item === 4;
});

// arrow function
const newArr1 = arr.map((item) => {
	return item + 2;
});
// ou
const newArr2 = arr.map((item) => item + 2);
// ou
const teste = () => ({ nome: 'Diego' });

// Valores padroes
function somaA(a = 2, b = 3) {
	return a + b;
}
const somaB = (a = 2, b = 3) => a + b;

console.log(somaA(3, 4));

// Desestruturação
const desestruturacao = {
	nomeDesestruturacao: 'Will',
	idade: 26,
	endereco: {
		cidade: 'Belém',
		estado: 'PA',
	},
};

const {
	nomeDesestruturacao,
	idade,
	endereco: { cidade, estado },
} = desestruturacao;

console.log(nomeDesestruturacao);
console.log(cidade);
console.log(idade);

function mostraNome(desestruturacao) {
	console.log(desestruturacao.nome);
}

mostraNome(desestruturacao);

function mostraNome2({ nome, idade }) {
	console.log(nome, idade);
}

mostraNome2(desestruturacao);

// Operadores Rest/Spread
// instalar yarn add @babel/plugin-proposal-object-rest-spread
// Serve para pegar o resto das propriedades

const usuarioRest = {
	nomeUsuario: 'Will',
	idade: 26,
	endereco: {
		cidade: 'Belém',
		estado: 'PA',
	},
};

const { nomeUsuario, ...resto } = usuarioRest;

console.log(nomeUsuario);
console.log(resto);