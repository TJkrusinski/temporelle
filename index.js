'use strict';

module.exports = temporelle;

/**
 *	@function temporelle
 *	@param {String} arg
 *	@param {Number} generations
 *	@return {Integer}
 */
function temporelle (arg, generations) {
	if (!typeof arg == 'string') return 0;
	generations = parseInt(generations, 10) || 0;

	var ammount = parseInt(arg, 10),
		divisor = parseDivisor(arg);
	
	generations = ammount * generations;

	return Math.floor((divisor(new Date().getTime())-generations)/ammount);
};

/**
 *	Return a fuction that given an integer will divide it by the arg
 *	@function parseDivisor
 *	@param {String} arg
 *	@return {Funciton}
 */
function parseDivisor (arg) {
	return function(val) {
		if (arg.match(/milliseconds|millisecond/gi)) return val;
		if (arg.match(/seconds|second/gi)) return val / 1000;
		if (arg.match(/minutes|minute/gi)) return val / (1000 * 60);
		if (arg.match(/hours|hour/gi)) return val / (1000 * 60 * 60);
		if (arg.match(/days|day/gi)) return val / (1000 * 60 * 60 * 24);
		if (arg.match(/years|year/gi)) return val / (1000 * 60 * 60 * 24 * 365);
	};
};
