'use strict';

var assert = require('assert'),
	temporelle = require(__dirname+'/../index.js');

describe('temporelle()', function(){
	it('returns an integer for a 500 millisecond interval', function(){
		var one = temporelle('500 milliseconds'),
			two = temporelle('500 milliseconds');
		assert.equal(one, two);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 1 second interval', function(){
		var one = temporelle('1 second'),
			two = temporelle('1 second');
		assert.equal(one, two);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 1 second interval and asserts they are not equal 1 second apart', function(d){
		var one = temporelle('1 second');

		setTimeout(function(){
			var two = temporelle('1 second');
			assert.notEqual(one, two);
			d();
		}, 1001);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 200 millisecond interval and asserts they are equal 200 milliseconds apart', function(d){
		var one = temporelle('200 milliseconds');

		setTimeout(function(){
			var two = temporelle('200 milliseconds', 1);
			assert.equal(one, two);
			d();
		}, 150);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 100 millisecond interval and asserts they are equal 200 milliseconds apart (2 generations)', function(d){
		var one = temporelle('100 milliseconds');

		setTimeout(function(){
			var two = temporelle('100 milliseconds', 2);
			assert.equal(one, two);
			d();
		}, 200);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 20 millisecond interval and asserts they are equal 199 milliseconds apart (10 generations)', function(d){
		var one = temporelle('20 milliseconds');

		setTimeout(function(){
			var two = temporelle('20 milliseconds', 10);
			assert.equal(one, two);
			d();
		}, 199);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 30 second interval', function(){
		var one = temporelle('30 seconds'),
			two = temporelle('30 seconds');
		assert.equal(one, two);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 40 minute interval', function(){
		var one = temporelle('40 minutes'),
			two = temporelle('40 minutes');
		assert.equal(one, two);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 5 hour interval', function(){
		var one = temporelle('5 hours'),
			two = temporelle('5 hours');
		assert.equal(one, two);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 1 day interval', function(){
		var one = temporelle('1 day'),
			two = temporelle('1 day');
		assert.equal(one, two);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 3 day interval', function(){
		var one = temporelle('3 days'),
			two = temporelle('3 days');
		assert.equal(one, two);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 5 year interval', function(){
		var one = temporelle('5 years'),
			two = temporelle('5 years');
		assert.equal(one, two);
	});
});

describe('temporelle()', function(){
	it('returns an integer for a 30 second interval 4 generations ago', function(){
		var one = temporelle('30 seconds', 4),
			two = temporelle('30 seconds', 4);
		assert.equal(one, two);
	});
});

