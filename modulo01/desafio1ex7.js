/**
 * 7
 * Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
 * const nome = 'Danilo';
 * const idade = 35;
 * const usuario = {
 *      nome: nome,
 *      idade: idade,
 *      cidade: 'Rio do Sul',
 * };
 */
const nome = "Danilo";
const idade = 35;
const usuario = {
	nome,
	idade,
	cidade: "Rio do Sul",
};
console.log(usuario);