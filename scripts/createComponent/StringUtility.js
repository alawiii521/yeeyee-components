function camelToSnake(str){
	return str.split(/(?=[A-Z])/).join('_').toUpperCase();
}

function camelToKebab(str){
	return str.split(/(?=[A-Z])/).join('-').toLowerCase();
}

module.exports = {
	camelToSnake,
	camelToKebab
};