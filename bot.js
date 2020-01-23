console.log('Bot has been started');
const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
let user = new VK();
const requests = require('request');
const fs = require("fs");
const rq = require("prequest");
const donate_key = '339f0a91edb2785e2ba72244a4941734d25e539f2d6e679bfb830253d5c02e29ad77e6e6dcca71c4465b0';
const bot_owner = 542439242;
let giving = false;
var wall_to_send = '';

const cars = [
	{
		name: 'Lada Granta',
		cost: 350000,
		id: 1
	},
	{
		name: 'Hyundai Solaris',
		cost: 525000,
		id: 2
	},
	{
		name: 'Kia Rio',
		cost: 750000,
		id: 3
	},
	{
		name: 'Skoda Octavia',
		cost: 1000000,
		id: 4
	},
	{
		name: 'Kia Optima',
		cost: 1900000,
		id: 5
	},
	{
		name: 'Lexus RX350',
		cost: 2750000,
		id: 6
	},
	{
		name: 'Tayota Land Cruiser',
		cost: 3000000,
		id: 7
	},
	{
		name: 'Mercedes-Benz A-Class',
		cost: 5000000,
		id: 8
	},
	{
		name: 'BMW 8-Series',
		cost: 10000000,
		id: 9
	},
	{
		name: 'Land Rover Range Rover',
		cost: 17500000,
		id: 10
	},
	{
		name: 'Lamborghini Huracan',
		cost: 25000000,
		id: 11
	},
	{
		name: 'Ferrari 812 Superfast',
		cost: 30000000,
		id: 12
	},
	{
		name: 'Porsche 911',
		cost: 50000000,
		id: 13
	},
	{
		name: 'Mercedes-Benz S-Class',
		cost: 75000000,
		id: 14
	},
	{
		name: 'Lamborghini Aventador',
		cost: 100000000,
		id: 15
	}
];

const yachts = [
	{
		name: 'Princess 60',
		cost: 1500000,
		id: 1
	},
	{
		name: 'Wider 165',
		cost: 5000000,
		id: 2
	},
	{
		name: 'Eclipse',
		cost: 10000000,
		id: 3
	},
	{
		name: 'Dubai',
		cost: 17500000,
		id: 4
	},
	{
		name: 'Streets of Monaco',
		cost: 30000000,
		id: 5
	}
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 900000,
		id: 1
	},
	{
		name: 'F-35A',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 25000000,
		id: 3
	},
	{
		name: 'F-22 Raptor',
		cost: 100000000,
		id: 4
	}
];

const helicopters = [
	{
		name: 'Robinson R44',
		cost: 3000000,
		id: 1
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 7500000,
		id: 2
	},
	{
		name: 'Bell 429WLG',
		cost: 16000000,
		id: 3
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 32575000,
		id: 4
	}
];

const homes = [
	{
		name: 'Подвал',
		cost: 150000,
		id: 1
	},
	{
		name: 'Домик на дереве',
		cost: 800000,
		id: 2
	},
	{
		name: 'Дом в лесу',
		cost: 2000000,
		id: 3
	},
	{
		name: 'Деревянный дом',
		cost: 7500000,
		id: 4
	},
	{
		name: 'Дача',
		cost: 30000000,
		id: 5
	},
	{
		name: 'Двухэтажная дача',
		cost: 80000000,
		id: 6
	},
	{
		name: 'Особняк',
		cost: 187500000,
		id: 7
	},
	{
		name: 'Дом на пляже',
		cost: 500000000,
		id: 8
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 25000,
		id: 1
	},
	{
		name: 'Однокомнатная квартира',
		cost: 300000,
		id: 2
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 1000000,
		id: 3
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 5000000,
		id: 4
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 10000000,
		id: 5
	}
];

const phones = [
	{
		name: 'Turbo X Mercury',
		cost: 4500,
		id: 1
	},
	{
		name: 'Honor 8A',
		cost: 7500,
		id: 2
	},
	{
		name: 'Xiamo Redmi 8',
		cost: 9000,
		id: 3
	},
	{
		name: 'Galaxy A40',
		cost: 15000,
		id: 4
	},
	{
		name: 'Xiami Mi 9T',
		cost: 19000,
		id: 5
	},
	{
		name: 'Mi Note 10',
		cost: 28000,
		id: 6
	},
	{
		name: 'iPhone 11',
		cost: 50000,
		id: 7
	}

];

const stranas = [

	{
		name: '-',
		cost: 0,
		id: 1
    },
	{
		name: 'США',
		cost: 0,
		id: 2
    },

	{
		name: 'Россия',
		cost: 0,
		id: 3
    },

	{
		name: 'Украина',
		cost: 0,
		id: 4
    }
];

const shlapas = [

	{
		name: '👒Панама',
		cost: 650,
		id: 1
    },
	{
		name: '🎩Цилиндр',
		cost: 3000,
		id: 2
    },
	{
		name: '🎓Школа',
		cost: 5000,
		id: 3
    },
	{
		name: '⛑Каска',
		cost: 75000,
		id: 4
    },
	{
		name: '👑Корона',
		cost: 15000,
		id: 5
    }
];

const obyvs = [
	{
		name: '👞Классическая обувь',
		cost: 500,
		id: 1
    },
	{
		name: '👟Спортивные кроссы',
		cost: 2500,
		id: 2
    }
];


const rubahkas = [
	{
		name: '👔Одет в Leviton',
		cost: 75000,
		id: 1
    },
	{
		name: '👕Одет в Gucci',
		cost: 12500,
		id: 2
    }
];

const golovas = [
	{
		name: '😎Крутой',
		cost: 0,
		id: 1
    },
	{
		name: '😡Злой',
		cost: 10,
		id: 2
    },
	{
		name: '👽Инопришенелец',
		cost: 20,
		id: 3
    },
	{
		name: '😇Ангел',
		cost: 30,
		id: 4
    },
	{
		name: '☹Грустный',
		cost: 40,
		id: 5
    },
	{
		name: '☹Демон',
		cost: 50,
		id: 6
    },
	{
		name: '👮Законник',
		cost: 60,
		id: 7
    },
	{
		name: '🤓Батаник',
		cost: 70,
		id: 8
    },
	{
		name: '🤠Ковбой',
		cost: 80,
		id: 9
    },
	{
		name: '😈Дьявол',
		cost: 100,
		id: 10
    },
	{
		name: '👻Marshmello',
		cost: 100000,
		id: 11
    }
];

const cams = [
	{
		name: 'Rekam DVC-540',
		cost: 6300,
		id: 1
    },
	{
		name: 'Panasonic HC-V770',
		cost: 24500,
		id: 2
    },
    {
		name: 'Sony FDR-AX700',
		cost: 81000,
		id: 3
    },
	{
		name: 'Insta360 Titan',
		cost: 1250000,
		id: 4
    }
];

const pitoms = [
	{
		name: 'Жук',
		cost: 5000,
		id: 1
    },
	{
		name: 'Паук',
		cost: 10000,
		id: 2
    },
		{
		name: 'Пчела',
		cost: 15000,
		id: 3
    },
	{
		name: 'Бабочка',
		cost: 25000,
		id: 4
    },
	{
		name: 'Улитка',
		cost: 30000,
		id: 5
    },
	{
		name: 'Ящерица',
		cost: 50000,
		id: 6
    },
    {
    	name: 'Черепаха',
    	cost: 100000,
    	id: 7
    },
    {
    	name: 'Попугай',
    	cost: 200000,
    	id: 8
    },
    {
    	name: 'Краб',
    	cost: 300000,
    	id: 9
    },
    {
    	name: 'Кальмар',
    	cost: 350000,
    	id: 10
    },
   	{
    	name: 'Дельфин',
    	cost: 1000000,
    	id: 11
    },
    {
    	name: 'Цыпа',
    	cost: 5000,
    	id: 12
    },
    {
    	name: 'Утка',
    	cost: 25000,
    	id: 13
    },
    {
    	name: 'Орел',
    	cost: 50000,
    	id: 14
    },
    {
    	name: 'Курица',
    	cost: 175000,
    	id: 15
    },
    {
    	name: 'Белка',
    	cost: 25000,
    	id: 16
    },
    {
    	name: 'Хомяк',
    	cost: 100000,
    	id: 17
    },
    {
    	name: 'Заяц',
    	cost: 300000,
    	id: 18
    },
    {
    	name: 'Кошка',
    	cost: 750000,
    	id: 19
    },
    {
    	name: 'Собака',
    	cost: 1000000,
    	id: 20
    },
    {
    	name: 'Куала',
    	cost: 325000,
    	id: 21
    },
    {
    	name: 'Миша',
    	cost: 800000,
    	id: 22
    },
    {
    	name: 'Тигр',
    	cost: 1750000,
    	id: 23
    },
    {
    	name: 'Лев',
    	cost: 3500000,
    	id: 24
    },
    {
    	name: 'Панда',
    	cost: 10000000,
    	id: 25
    }
];

const woods = [
	{
		name: 'Одуванчик',
		cost: 3000,
		id: 1
    },
	{
		name: 'Роза',
		cost: 6000,
		id: 2
    },
	{
		name: 'Пальма',
		cost: 10000,
		id: 3
    }
];

const teliks = [
	{
		name: 'Samsung',
		cost: 3000,
		id: 1
    },
	{
		name: 'Haier',
		cost: 5000,
		id: 2
    },
	{
		name: 'LG 43LK',
		cost: 8000,
		id: 3
    },	
	{
		name: 'Artel 32',
		cost: 12000,
		id: 4
    },
	{
		name: 'Sony KDL-40',
		cost: 20000,
		id: 5
    },
	{
		name: 'Elenberg',
		cost: 30000,
		id: 6
    },
	{
		name: 'Toshiba 32',
		cost: 45000,
		id: 7
    },	
	{
		name: 'Philips',
		cost: 60000,
		id: 8
    },
	{
		name: 'ERGO LE43',
		cost: 75000,
		id: 9
    }
];

const copters = [

	{
		name: 'Hubsan X4',
		cost: 300000,
		id: 1
	},
	{
		name: 'Sima X5C',
		cost: 350000,
		id: 2
	},
	{
		name: 'DJI phantom',
		cost: 400000,
		id: 3
	},
	{
		name: 'FPV mt2204',
		cost: 500000,
		id: 4
	}

];

const tables = [
	{
		name: 'Digma Plane 7594',
		cost: 3500,
		id: 1
	},
	{
		name: 'Huawei Mediapad T3',
		cost: 10000,
		id: 2
	},
	{
		name: 'Samsung Galaxy Tab',
		cost: 25000,
		id: 3
	},
	{
		name: 'Apple iPad Pro',
		cost: 50000,
		id: 4
	},
	{
		name: 'Microsoft Surface',
		cost: 75000,
		id: 5
	}
];

const motos = [
	{
		name: 'Faggio',
		cost: 100000,
		id: 1
	},
	{
		name: 'Freeway',
		cost: 250000,
		id: 2
	},
	{
		name: 'PCJ-500',
		cost: 500000,
		id: 3
	},
	{
		name: 'BF-400',
		cost: 750000,
		id: 4
	},
	{
		name: 'NRG-500',
		cost: 1500000,
		id: 5
	}
];

const farms = [
	{
		name: 'Antminer T17',
		cost: 150000,
		id: 1
	},
	{
		name: 'Ферма для майнинга',
		cost: 500000,
		id: 2
	},
	{
		name: 'Офис для майнинга',
		cost: 3000000,
		id: 3
	}
];

const businesses = [
	[ // Бизнес #1
		{ // Стандартный бизнес
			name: 'Забегаловка',
			cost: 100000,
			earn: 300,
			workers: 1,
			id: 1,
			icon: '🍖'
		},

		{ // Первое улучшение
			name: 'Две забегаловки',
			cost: 500000,
			earn: 900,
			workers: 5,
			id: 1,
			icon: '🌭'
		},

		{ // Второе улучшение
			name: 'Три забегаловки',
			cost: 1000000,
			earn: 1800,
			workers: 10,
			id: 1,
			icon: '🥐'
		},

		{ // 3 улучшение
			name: 'Четыре забегаловки',
			cost: 2500000,
			earn: 3600,
			workers: 15,
			id: 1,
			icon: '🍔'
		},

		{ // Последнее улучшение
			name: 'Компания забегаловок',
			cost: 5000000,
			earn: 7200,
			workers: 20,
			id: 1,
			icon: '🍧'
		}
	],

	[
		{
			name: 'Пятёрочка',
			cost: 300000,
			earn: 600,
			workers: 1,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Две пятёрочки',
			cost: 1000000,
			earn: 1200,
			workers: 5,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Три пятёрочки',
			cost: 3000000,
			earn: 2400,
			workers: 10,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Сеть пятёрочек',
			cost: 7500000,
			earn: 5000,
			workers: 15,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Компания пятерочек',
			cost: 15250000,
			earn: 10000,
			workers: 20,
			id: 2,
			icon: '🏪'
		}
	],

	[
		{
			name: 'Столовая',
			cost: 750000,
			earn: 900,
			workers: 2,
			id: 3,
			icon: '🍴'
		},

		{
			name: 'Кафе',
			cost: 2500000,
			earn: 1800,
			workers: 5,
			id: 3,
			icon: '☕'
		},

		{
			name: 'Пиццерия',
			cost: 5000000,
			earn: 3600,
			workers: 10,
			id: 3,
			icon: '🍕'
		},

		{
			name: 'Бар',
			cost: 15000000,
			earn: 7200,
			workers: 15,
			id: 3,
			icon: '🍰'
		},

		{
			name: 'Ресторан',
			cost: 30000000,
			earn: 12400,
			workers: 20,
			id: 3,
			icon: '🍹'
		}
	],

	[
		{
			name: 'Завод',
			cost: 5000000,
			earn: 2880,
			workers: 2,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Стройка',
			cost: 10000000,
			earn: 5600,
			workers: 7,
			id: 5,
			icon: '🏗'
		},

		{
			name: 'Ремонт',
			cost: 18000000,
			earn: 11200,
			workers: 15,
			id: 5,
			icon: '🏘'
		},

		{
			name: 'Курорт',
			cost: 54000000,
			earn: 22400,
			workers: 20,
			id: 5,
			icon: '🏝'
		}
	],

	[
		{
			name: 'Маленький офис',
			cost: 27000000,
			earn: 11200,
			workers: 2,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Большой офис',
			cost: 81000000,
			earn: 22400,
			workers: 5,
			id: 7,
			icon: '🏦'
		},

		{
			name: 'Небоскрёб',
			cost: 162000000,
			earn: 44800,
			workers: 10,
			id: 7,
			icon: '🏢'
		},
	],

	[
		{
			name: 'Кинотеатр',
			cost: 126000000,
			earn: 22400,
			workers: 1,
			id: 11,
			icon: '🕶'
		},

		{
			name: 'Киностудия',
			cost: 243000000,
			earn: 67200,
			workers: 12,
			id: 11,
			icon: '🎬'
		}
	]
];

const works = [
	{
		name: 'Дворник',
		requiredLevel: 1,
		min: 400,
		max: 750,
		id: 1
	},
	{
		name: 'Сантехник',
		requiredLevel: 3,
		min: 750,
		max: 1500,
		id: 2
	},
	{
		name: 'Электрик',
		requiredLevel: 5,
		min: 1500,
		max: 3000,
		id: 3
	},
	{
		name: 'Слесарь',
		requiredLevel: 8,
		min: 3000,
		max: 5000,
		id: 4
	},
	{
		name: 'Юрист',
		requiredLevel: 10,
		min: 5000,
		max: 6000,
		id: 5
	},
	{
		name: 'Бухгалтер',
		requiredLevel: 14,
		min: 6000,
		max: 9000,
		id: 6
	},
	{
		name: 'Бармен',
		requiredLevel: 22,
		min: 10000,
		max: 20000,
		id: 7
	},
	{
		name: 'Администратор',
		requiredLevel: 25,
		min: 22500,
		max: 37500,
		id: 8
	},
	{
		name: 'Программист',
		requiredLevel: 49,
		min: 50000,
		max: 100000,
		id: 9
	}
];

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'ДОХЕРА');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	},
	time: () => {
		return parseInt(new Date().getTime()/1000)
	}
}

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

let users = require('./users.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log('saved');
}, 30000);

setInterval(async () => {
	users.filter(x=> x.misc.farm !== 0).map(x=> {
		if(x.misc.farm === 1)
		{
			x.farm_btc += 1;
		}

		if(x.misc.farm === 2)
		{
			x.farm_btc += 3;
		}

		if(x.misc.farm === 3)
		{
			x.farm_btc += 5;
		}
	});
}, 3600000);

setInterval(async () => {
	users.map(user => {
		for(var i = 0; i < user.business.length; i++)
		{
			const biz = businesses[user.business[i].id - 1][user.business[i].upgrade - 1];
			user.business[i].moneys += Math.floor(biz.earn / biz.workers * user.business[i].workers)
		}
	});
}, 3600000);

function clearTemp()
{
	users.map(user => {
		user.timers.hasWorked = false;
		user.timers.bonus = false;
	});
}

clearTemp();

async function saveUsers()
{
	require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
	return true;
}

vk.setOptions({ token: '339f0a91edb2785e2ba72244a4941734d25e539f2d6e679bfb830253d5c02e29ad77e6e6dcca71c4465b0', pollingGroupId: 185115712   });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club185115712\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club185115712\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			id: message.senderId,
			uid: users.length,
			balance: 1000,
			bank: 0,
			admin: false,
			btc: 0,
			farm_btc: 0,
			biz: 0,
			btc: 0,
			golod: 0,
			ryuda: 0,
			ryda: 0,
			legend: 0,
			ryda: 0,
			bonia: 1,
			biz: 0,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			timers: {
				hasWorked: false,
				bonus: false,
				pet: false,
				promo: false,
				taxi: false,
				safe: false,
				film: false,
				vzlom: false,
				isl: false,
				edae: false
			},
			tag: user_info.first_name,
			work: 0,
			business: [],
			notifications: true,
			exp: 1,
			level: 1,
			referal: null,
			transport: {
				zapret: 0,
				zapret2: 0,
				car: 0,
				promocod: 0,
				moto: 0,
				wood: 0,
				shlapa: 0,
				pas: 0,
				shtani: 1,
				obyv: 1,
				rubahka: 1,
				golova: 1,
				cam: 0,
				passp: 0,
				strana: 1,
				pitom: 1,
				telik: 0,
				copter: 0,
				table: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
				farm: 0,
				farm_count: 0
			},
			marriage: {
				partner: 0,
				requests: []
			},
			limit: {
				timer: utils.time(),
				sent: 0
			}
		});
		message.send(`Приветствуем, огонёк. Вы зарегистрированы!🆕\n\n🌈Воспользуйтесь первоначальными квестами командой <<Задания>>, чтобы узнать что к чему и как работает бот.🔥\n❓Отправьте сообщение <<Помощь>>, для просмотра команд!`)
		message.sendSticker(`16785`);
	}

	message.user = users.find(x=> x.id === message.senderId);
	if(message.user.ban) return;

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	const command = commands.find(x=> x[0].test(message.text));
	if(!command) return;

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	console.log(`Executed: ${message.text}`)
});

const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.hear(/^(?:eval)\s([^]+)$/i, async (message, bot) => {
	if(message.senderId !== 542439242| message.senderId !== 542439242) return;

	try {
		const result = eval(message.args[1]);

		if(typeof(result) === 'string')
		{
			return bot(`string: ${result}`);
		} else if(typeof(result) === 'Готово')
		{
			return bot(`number: ${result}`);
		} else {
			return bot(`${typeof(result)}: ${JSON.stringify(result, null, '&#12288;\t')}`);
		}
	} catch (e) {
		console.error(e);
		return bot(`ошибка:
		${e.toString()}`);
	}
});



cmd.hear(/^(?:помощь|📚Помощь|команды|меню|help|commands|cmds|menu|начать|start)$/i, async (message, bot) => {
	await bot(`команды:

💰› Заработок: 
⠀📃Работы 
⠀👷‍♂Работать 
⠀❌Уволиться 

⠀🚕Таксовать 
⠀👫Реферал 
⠀🌳Копать 

⠀🐒Питомцы 
⠀⠀🌽Пит поход 
⠀🎬Снять видео 
⠀🔋Фермы 
⠀💸Продать 
⠀👔Бизнес 

🎉› Развлечения: 
⠀ ↕Переверни
⠀ 🔮Гадалка
⠀ ❓Инфа
⠀ ⚖Выбери
⠀ 😆Анекдот
🥂› Дополнение:
⠀ 🎲Кубик
⠀ 🎰Казино
⠀ 📈Трейд
⠀ 📦Сейф
⠀ 🥛Стаканчик

🖥› Основное:
⠀ 📒Профиль
⠀ 💲Баланс
⠀ ⠀ 💳Банк
⠀ 🏡Имущество
⠀ 🎁Бонус
⠀ 🛍Магазин
⠀ 💴Задания
⠀ 🏆Рейтинг
⠀ 🤝🏻Передать
⠀ 💞Брак [ID]
⠀ ⠀ 💔Развод
⠀ 👑Топ
⠀ 💎Донат
⠀ 🆘Репорт`, {keyboard:JSON.stringify({"one_time": false, 
 		"buttons": [
 		[
 		{
 			"action": {
 				"type": "text", 
 				"payload": "{\"button\": \"1\"}", 
 				"label": "📄Профиль"
 			}, 
 			"color": "primary" 
 		}, 
 		{ 
 			"action": { 
 				"type": "text", 
 				"payload": "{\"button\": \"1\"}", 
 				"label": "📚Помощь" 
 			}, 
 			"color": "primary"}, 
 			{
 				"action": { 
 					"type": "text", 
 					"payload": "{\"button\": \"1\"}", 
 					"label": "🔑Бонус" 
 				}, 
 				"color": "primary"
 			}],
 		[
 			{
 				"action": { 
 					"type": "text", 
 					"payload": "{\"button\": \"1\"}", 
 					"label": "🔋Ферма" 
 				}, 
 				"color": "default"
 			},
 			{
 				"action": { 
 					"type": "text", 
 					"payload": "{\"button\": \"1\"}", 
 					"label": "🏬Бизнес" 
 				}, 
 				"color": "default"
 			}],
 		[
 			{
 				"action": { 
 					"type": "text", 
 					"payload": "{\"button\": \"1\"}", 
 					"label": "🐯Питомцы" 
 				}, 
 				"color": "default"
 			}],
 			],
 		})
 })
 });

cmd.hear(/^(?:донат)$/i, async (message, bot) => {
	return bot(`донат не завезли.`);
});

cmd.hear(/^(?:переверни)\s([^]+)$/i, async (message, bot) => {
	let text = ``;
	message.args[1].split('').map(x=> {
		if(rotateText[x])
		{
			text += rotateText[x];
		}
	});

	return bot(`: "${text.split('').reverse().join('')}"`)
});

cmd.hear(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['конечно', 'безусловно', 'естественно', 'скорее нет, чем да', 'конечно-же нет', 'сложно согласится']);
	return bot(phrase);
});

cmd.hear(/^(?:setwall)\s(.*)$/i, async (message, bot) => {
	if(message.senderId !== 542439242| message.senderId !== 542439242) return;

	message.args[1] = message.args[1].replace("wall", "");
	message.args[1] = message.args[1].split('_');
	wall_to_send = "wall" + message.args[1][0] + "_" + message.args[1][1];
	return bot(`пост для рассылки обновлен`);
});

cmd.hear(/^(?:textsend)\s([^]+)/i, async (message, bot) => {
if(message.senderId !== 542439242| message.senderId !== 542439242) return;

	await bot(`рассылка завершена`);
	users.map(user => {
		vk.api.messages.send({ user_id: user.id, message: message.args[1], attachment: wall_to_send }).then(() => {
		});
	});

	for(var i = 1; i < 900; i++) {
		vk.api.messages.send({ peer_id: 2000000000 + i, message: message.args[1], attachment: wall_to_send }).then(() => {
		});
	}
});

cmd.hear(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
	const phrase = utils.pick(['шанс равен']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
	const first = message.args[1];
	const second = message.args[2];

	const phrase = utils.pick([`конечно же ${utils.random(1, 2)} вариант`, `я предпочинаю второй вариант - ${utils.random(1, 2)}`]);
	return bot(`${phrase}`);
});

cmd.hear(/^(?:профиль|📄Профиль)$/i, async (message, bot) => {
	let text = ``;

	text += `🆔Игровой ID:  ${message.user.uid}\n`;
	text += `💎Баланс: ${utils.sp(message.user.balance)}$\n`;
	text += `💳В банке:  ${utils.sp(message.user.bank)}$\n`;
	text += `🍹Сытость:  ${message.user.golod}\n`;	
	if(message.user.transport.strana) text += `🇺🇸Страна: ${stranas[message.user.transport.strana - 1].name}\n`;
	if(message.user.transport.pitom) text += `🐼Питомец:  ${pitoms[message.user.transport.pitom - 1].name}\n`;
	text += `🌟Рейтинг:  ${utils.sp(message.user.rating)}\n`;
	if(message.user.work) text += `👔Работа: ${works[message.user.work - 1].name}\n`;
	text += `🌿Уровень:  ${message.user.level} [${message.user.exp}/24]\n`;
	text += `🔋Биткоинов:  ${utils.sp(message.user.btc)}\n\n`;

	if(message.user.transport.shlapa) text += `${shlapas[message.user.transport.shlapa - 1].name}\n`;
	if(message.user.transport.golova) text += `${golovas[message.user.transport.golova - 1].name}\n`;
	if(message.user.transport.rubahka) text += `${rubahkas[message.user.transport.rubahka - 1].name}\n`;
	if(message.user.transport.obyv) text += `${obyvs[message.user.transport.obyv - 1].name}\n`;

	if(message.user.ryuda) text += `\n🌾Травы: ${utils.sp(message.user.ryuda)}\n`;
	return bot(`твоя статистика:\n\n${text}`);
});

cmd.hear(/^(?:имущество)$/i, async (message, bot) => {
	
	    let text = ``;
		if(message.user.realty.home) text += `🏡Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.business) text += `🏢Бизнес: ${businesses[message.user.business - 1].name}\n`;	
		if(message.user.realty.apartment) text += `🏨Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;
		if(message.user.misc.farm) text += `🚣Ферма: ${farms[message.user.misc.farm - 1].name}\n`;
		if(message.user.transport.wood) text += `🔫Фигурка: ${woods[message.user.transport.wood - 1].name}\n`;
		if(message.user.transport.pitom) text += `🐾Питомец: ${pitoms[message.user.transport.pitom - 1].name}\n`;

		if(message.user.transport.car) text += `🚗Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.moto) text += `🏍Байк: ${motos[message.user.transport.moto - 1].name}\n`;
		if(message.user.transport.yacht) text += `🚤Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `✈Самолет: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `🚁Вертолет: ${helicopters[message.user.transport.helicopter - 1].name}\n`;

		if(message.user.transport.car || message.user.transport.yacht || message.user.transport.golova || message.user.transport.airplane || message.user.transport.helicopter || message.user.transport.telik ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.misc.farm || message.user.transport.table || message.user.transport.moto || message.user.transport.copter || message.user.business)		
		
		if(message.user.misc.phone) text += `📱Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.transport.table) text += `⌨Планшет: ${tables[message.user.transport.table - 1].name}\n`;
		if(message.user.transport.telik) text += `📺Телевизор:  ${teliks[message.user.transport.telik - 1].name}\n`;
		if(message.user.transport.cam) text += 	`📷Камера: ${cams[message.user.transport.cam - 1].name}\n`;
		if(message.user.transport.copter) text += `🚡Квадрик: ${copters[message.user.transport.copter - 1].name}\n`;
		return bot(`Ваше имущество:\n${text}`);
});

cmd.hear(/^(?:баланс)$/i, async (message, bot) => {
	let text = `я перезапущен с новыми изменениями`;
	if(message.user.btc) text += `\n💎Биткоинов: ${utils.sp(message.user.btc)}฿`;

	return bot(text);
});

cmd.hear(/^(?:банк)$/i, async (message, bot) => {
	return bot(`на счету ${utils.sp(message.user.bank)}$`);
});

cmd.hear(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.bank);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.bank) return bot(`у вас нет данной суммы😕`);
	else if(message.args[1] <= message.user.bank)
	{
		message.user.balance += message.args[1];
		message.user.bank -= message.args[1];

		return bot(`вы успешно сняли ${utils.sp(message.args[1])}$
♻Баланс в банке: ${utils.sp(message.user.bank)}$`);
	}
});

cmd.hear(/^(?:банк)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;
	if(message.args[1] <= 5000) return bot(`минимальная сумма пополнения: 5.000$😑`);
	if(message.args[1] > 100000000) return bot(`максимальная сумма: 100.000.000$`);

	if(message.args[1] > message.user.balance) return bot(`у Вас нет данной суммы😕`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		message.user.bank += message.args[1];

		return bot(`Вы положили на свой банковский счёт ${utils.sp(message.args[1])}$`);
	}
});

cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.notifications = true;
		return bot(`уведомления включены! 🔔`);
	}
});

cmd.hear(/^(?:give)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
if(message.senderId !== 542439242| message.senderId !== 542439242) return;
	if(message.args[2] <= 0) return;

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		message.user.balance += message.args[1];


		await bot(`вы выдали игроку ${user.tag} ${utils.sp(message.args[2])}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `
📥› На ваш счет поступил платеж ${utils.sp(message.args[2])} от ${message.user.tag}
🔕Чтобы выключить уведомления отправьте: «Уведомления выкл»` });
	}
});

cmd.hear(/^(?:ban)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');


	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(message.user.admin == true) return

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.ban = true;

		await bot(`игрок ${user.tag} был заблокирован (${utils.sp(message.args[2])}$)`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `
🚫› Администратор ${message.user.tag} заблокировал Вам аккаунт по причине: ${utils.sp(message.args[2])}!
` });
	}
});



cmd.hear(/^(?:unban)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');


	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(message.user.admin == true) return

	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);


		user.ban = true;

		await bot(`игрок ${user.tag} успешно разблокирован (${utils.sp(message.args[2])}$)`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `
☑› Администратор ${message.user.tag} разблокировал Вас ${utils.sp(message.args[2])}!
` });
	}
});

cmd.hear(/^(?:set)\s([0-9]+)\s(.*)\s(.*)$/i, async (message, bot) => {
	if(message.user.admin == false) return;
	message.args[3] = message.args[3].replace(/(\.|\,)/ig, '');
	message.args[3] = message.args[3].replace(/(к|k)/ig, '000');
	message.args[3] = message.args[3].replace(/(м|m)/ig, '000000');

	if(Number(message.args[3])) message.args[3] = Math.floor(Number(message.args[3]));
	if(message.args[3] == "true" || message.args[3] == "false") message.args[3] = message.args[3] == "true" ? true : false;
	if(message.args[2] == "admin" && bot_owner != message.user.id) return bot(`доступ закрыт`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID игрока`);

	if(user[message.args[2]] == null) return bot(`неизвестное значение`);
	user[message.args[2]] = message.args[3];

	return bot(`вы сменили значение ${message.args[2]} игроку ${user.tag} на: ${message.args[3]}`);
});

/*cmd.hear(/^(?:бан)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.admin == false) return;

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID игрока`);

	user.ban = true;

	return bot(`вы забанили игрока ${user.tag}`);
});

cmd.hear(/^(?:разбан)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.admin == false) return;

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID игрока`);

	user.ban = false;

	return bot(`вы разбанили игрока ${user.tag}`);
});*/

cmd.hear(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас недостаточно средств`);
	else if(message.args[2] <= message.user.balance)
	{
		if(message.user.limit == null) message.user.limit = { timer: utils.time(), sent: 0 };
		if(utils.time() - message.user.limit.timer >= 86400) { message.user.limit.timer = utils.time(); message.user.limit.sent = 0; }
		if(message.args[2] + message.user.limit.sent > 10000000) return bot(`достигнут максимум. Всего доступно: ${utils.sp(10000000 - message.user.limit.sent)}$`)
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		message.user.balance -= message.args[2];
		message.user.limit.sent += message.args[2];
		user.balance += message.args[2];

		await bot(`вы передали игроку ${user.tag} ${utils.sp(message.args[2])}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `
💸Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!
🔕Чтобы выключить уведомления отправьте: «Уведомления выкл»` });
	}
});

cmd.hear(/^(?:рейтинг)$/i, async (message, bot) => {
	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}🏆`);
});

cmd.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`кликабельность активирована.`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`кликабельность отключена!`);
	}
});

cmd.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length > 10) return bot(`слишком длинный запрос (максимум: 10 символов)`);

	message.user.tag = message.args[1];
	return bot(`теперь вы «${message.user.tag}»`);
});

cmd.hear(/^(?:магазин)$/i, async (message, bot) => {
	return bot(`магазин: 

🏢Бизнесы 
🏡Дома
🚗Машины
✈Самолеты 
🚁Вертолеты 
🚤Яхты 
🏍Мотоциклы 

⌨Планшеты
📱Телефоны
📷Камеры 

👒Шляпы
🙂Головы 
👕Рубашки 
👟Обувь

🔋Фермы
🏆Рейтинг 
💎Биткоины
🐾Питомцы 
📦Кейсы`);
});

cmd.hear(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}
	
	if(/квадрокоптер/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.copter) return bot(`у вас нет твадрокоптера⛔`);
		let a = Math.floor(copters[message.user.transport.copter - 1].cost * 0.85);

		message.user.balance += Math.floor(copters[message.user.transport.copter - 1].cost * 0.85);
		message.user.transport.copter = 0;

		return bot(`вы продали свой квадрокоптер за ${utils.sp(a)}$`);
	}

	if(/Телевизор/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.telik) return bot(`у вас нет телевизора⛔`);
		let a = Math.floor(teliks[message.user.transport.telik - 1].cost * 0.85);

		message.user.balance += Math.floor(teliks[message.user.transport.telik - 1].cost * 0.85);
		message.user.transport.telik = 0;

		return bot(`вы продали свой телевизор за ${utils.sp(a)}$`);
	}

	if(/Фигурк/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.telik) return bot(`у вас нет игрушки.`);
		let a = Math.floor(woods[message.user.transport.wood - 1].cost * 0.85);

		message.user.balance += Math.floor(woods[message.user.transport.wood - 1].cost * 0.85);
		message.user.transport.wood = 0;

		return bot(`вы продали свой телевизор за ${utils.sp(a)}$`);
	}
	
	if(/Питомца|питомец/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.pitom) return bot(`у вас нет питомца⛔`);
		let a = Math.floor(pitoms[message.user.transport.pitom - 1].cost * 0.85);

		message.user.balance += Math.floor(pitoms[message.user.transport.pitom - 1].cost * 0.85);
		message.user.transport.pitom = 0;

		return bot(`вы продали своего питомца за ${utils.sp(a)}$`);
	}
	
		if(/голов/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.golova) return bot(`у вас нет головы на плечах!!⛔`);
		let a = Math.floor(golovas[message.user.transport.golova - 1].cost * 0.85);

		message.user.balance += Math.floor(golovas[message.user.transport.golova - 1].cost * 0.85);
		message.user.transport.golova = 0;

		return bot(`Вы продали свою голову за ${utils.sp(a)}$`);
	}
	
		if(/рубашк/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.rubahka) return bot(`у вас нет рубашки⛔`);
		let a = Math.floor(rubahkas[message.user.transport.rubahka - 1].cost * 0.85);

		message.user.balance += Math.floor(rubahkas[message.user.transport.rubahka - 1].cost * 0.85);
		message.user.transport.rubahka = 0;

		return bot(`Вы продали рубашку за ${utils.sp(a)}$`);
	}
	
		if(/обув/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.obyv) return bot(`у вас нет кросовок⛔`);
		let a = Math.floor(obyvs[message.user.transport.obyv - 1].cost * 0.85);

		message.user.balance += Math.floor(obyvs[message.user.transport.obyv - 1].cost * 0.85);
		message.user.transport.obyv = 0;

		return bot(`Вы продали обувь за ${utils.sp(a)}$`);
	}

	if(/камер(ы|а|у)/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.cam) return bot(`у вас нет камеры⛔`);
		let a = Math.floor(cams[message.user.transport.cam - 1].cost * 0.85);

		message.user.balance += Math.floor(cams[message.user.transport.cam - 1].cost * 0.85);
		message.user.transport.cam = 0;

		return bot(`вы продали свою камеру за ${utils.sp(a)}$`);
	}

	if(/шляпа/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.shlapa) return bot(`у вас нет шляпы⛔`);
		let a = Math.floor(shlapas[message.user.transport.shlapa - 1].cost * 0.85);

		message.user.balance += Math.floor(shlapas[message.user.transport.shlapa - 1].cost * 0.85);
		message.user.transport.shlapa = 0;

		return bot(`Вы продали шляпу за ${utils.sp(a)}$`);
	}

	if(/мотоцикл/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.moto) return bot(`у вас нет мотоцикла⛔`);
		let a = Math.floor(motos[message.user.transport.moto - 1].cost * 0.85);

		message.user.balance += Math.floor(motos[message.user.transport.moto - 1].cost * 0.85);
		message.user.transport.moto = 0;

		return bot(`вы продали свой мотоцикл за ${utils.sp(a)}$`);
	}
	
	if(/планшет/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.table) return bot(`у вас нет планшета⛔`);
		let a = Math.floor(tables[message.user.transport.table - 1].cost * 0.85);

		message.user.balance += Math.floor(tables[message.user.transport.table - 1].cost * 0.85);
		message.user.transport.table = 0;

		return bot(`вы продали свой планшет за ${utils.sp(a)}$`);
	}
	
	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины⛔`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return bot(`вы продали свою машину за ${utils.sp(a)}$`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет яхты⛔`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`вы продали свою яхту за ${utils.sp(a)}$`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолета⛔`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`вы продали свой самолёт за ${utils.sp(a)}$`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет вертолета⛔`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return bot(`вы продали свой вертолёт за ${utils.sp(a)}$`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома⛔`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return bot(`вы продали свой дом за ${utils.sp(a)}$`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры⛔`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return bot(`вы продали свою квартиру за ${utils.sp(a)}$`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона⛔`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}$`);
	}

	if(/ферм/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.farm) return bot(`у вас нет ферм⛔`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);

		message.user.balance += Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
		message.user.misc.farm = 0;

		return bot(`вы продали свою ферму за ${utils.sp(a)}$`);
	}

	if(/рейтинг|куб/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет кубков⛔`);
		let a = (20 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['кубок', 'кубов', 'кубков'])} за ${utils.sp(Math.floor(a))}`);
	}

	if(/трав/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.ryuda) return bot(`у вас нет травы⛔`);
		let a = (20 * options.count);

		message.user.balance += Math.floor(a);
		message.user.ryuda -= options.count;

		return bot(`Вы продали ${options.count} ${utils.decl(options.count, ['травы', 'травы', 'травы'])} за ${utils.sp(Math.floor(a))}$`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.business) return bot(`у вас нет бизнеса⛔`);
		let a = Math.floor(businesses[message.user.business - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business = 0;

		return bot(`вы продали свой бизнес за ${utils.sp(a)}$`);
	}

	if(/биткоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно биткоинов❗`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		bot(`вы продали ${options.count}₿ за ${utils.sp(a)}$`)
		message.sendSticker(`13361`);
	}
});

cmd.hear(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`автомобили: 
${message.user.transport.car === 1 ? '🚙' : '🚙'} 1. Lada Granta | 350.000$
${message.user.transport.car === 2 ? '🚙' : '🚙'} 2. Hyundai Solaris | 525.000$
${message.user.transport.car === 3 ? '🚙' : '🚙'} 3. Kia Rio | 750.000$
${message.user.transport.car === 4 ? '🚙' : '🚙'} 4. Skoda Octavia | 1.000.000$

${message.user.transport.car === 5 ? '🚗' : '🚗'} 5. Kia Optima | 1.900.000$
${message.user.transport.car === 6 ? '🚗' : '🚗'} 6. Lexus RX350 | 2.750.000$
${message.user.transport.car === 7 ? '🚗' : '🚗'} 7. Tayota Land Cruiser | 3.000.000$
${message.user.transport.car === 8 ? '🚗' : '🚗'} 8. Mercedes-Benz A-Class | 5.000.000$
${message.user.transport.car === 9 ? '🚗' : '🚗'} 9. BMW 8-Series | 10.000.000$
${message.user.transport.car === 10 ? '🚗' : '🚗'} 10. Land Rover Range Rover | 17.500.000$
${message.user.transport.car === 11 ? '🚗' : '🚗'} 11. Lamborghini Huracan | 25.000.000$
${message.user.transport.car === 12 ? '🚗' : '🚗'} 12. Ferrari 812 Superfast | 30.000.000$

${message.user.transport.car === 13 ? '🚀' : '🚀'} 13. Porsche 911 | 50.000.000$ 
${message.user.transport.car === 14 ? '🚀' : '🚀'} 14. Mercedes-Benz S-Class | 75.000.000$
${message.user.transport.car === 15 ? '🚀' : '🚀'} 15. Lamborghini Aventador | 100.000.000$

📢Для покупки введите «Машины [номер]»`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у Вас уже есть машина! Отправьте: <<Продать машину>>.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});


cmd.hear(/^(?:фермы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`майнинговые фермы: 
${message.user.misc.farm === 1 ? '🌐' : '🌐'} 1. Antminer T17 1฿/12ч. | 150.000$
${message.user.misc.farm === 2 ? '🌐' : '🌐'} 2. Ферма для майнинга | 500.000$
${message.user.misc.farm === 3 ? '🌐' : '🌐'} 3. Шахта для майнинга | 3.000.000$
📢Для покупки введите <<Фермы [номер]>>`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;

	if(message.user.balance < sell.cost) return bot(`недостаточно средств.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.farm = sell.id;

		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:квадрокоптер|квадрокоптеры)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`квадрокоптеры: 
${message.user.transport.copter === 1 ? '🎾' : '⚽'} 1. Hubsan X4 300.000$
${message.user.transport.copter === 2 ? '🎾' : '⚽'} 2. Sima X5C 350.000$
${message.user.transport.copter === 3 ? '🎾' : '⚽'} 3. DJI phantom 400.000$
${message.user.transport.copter === 4 ? '🎾' : '⚽'} 4. FPV mt2204 500.000$
${message.user.transport.copter === 5 ? '🎾' : '⚽'} 5. RTX Copter 100$

📢Для покупки введите <<Квадрокоптеры [номер]>>`);

	const sell = copters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.copter) return bot(`у Вас уже имеется квадрокоптер. Отправьте <<Продать квадрокоптеры>>`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств!`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.copter = sell.id;

		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:телевизор|телевизоры)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`телевизоры: 
${message.user.transport.telik === 1 ? '🎾' : '⚽'} 1. Samsung 3.000$
${message.user.transport.telik === 2 ? '🎾' : '⚽'} 2. Haier 5.000$
${message.user.transport.telik === 3 ? '🎾' : '⚽'} 3. LG 43LK 8.000$
${message.user.transport.telik === 4 ? '🎾' : '⚽'} 4. Artel 32 12.000$
${message.user.transport.telik === 5 ? '🎾' : '⚽'} 5. Sony KDL-40 20.000$
${message.user.transport.telik === 6 ? '🎾' : '⚽'} 6. Elenberg 30.000$
${message.user.transport.telik === 7 ? '🎾' : '⚽'} 7. Toshiba 32 45.000$
${message.user.transport.telik === 8 ? '🎾' : '⚽'} 8. Philips 60.000$
${message.user.transport.telik === 9 ? '🎾' : '⚽'} 9. ERGO LE43 75.000$

📢Для покупки введите <<Телевизоры [номер]>>`);

	const sell = teliks.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.telik) return bot(`у вас уже есть телевизор. Отправьте <<Продать телевизор>>.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.telik = sell.id;

		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Голова|головы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`головы для плечей: 
${message.user.transport.golova === 1 ? '😎' : '😎'} 1.  Крутой 0$
${message.user.transport.golova === 2 ? '😡' : '😡'} 2.  Злой 10$
${message.user.transport.golova === 3 ? '👽' : '👽'} 3.  Инопланетянин 20$
${message.user.transport.golova === 4 ? '😇' : '😇'} 4.  Ангел 30$
${message.user.transport.golova === 5 ? '☹' : '☹'} 5.  Грустный 40$
${message.user.transport.golova === 6 ? '👺' : '👺'} 6.  Дьявол 50$
${message.user.transport.golova === 7 ? '👮' : '👮'} 7.  Полицейский 60$
${message.user.transport.golova === 8 ? '🤓' : '🤓'} 8.  Батаник 70$
${message.user.transport.golova === 9 ? '🤠' : '🤠'} 9.  Ковбой 80$
${message.user.transport.golova === 10 ? '😈' : '😈'} 10.  Дьявол 100$
${message.user.transport.golova === 11 ? '👻' : '👻'} 11.  Marshmello 100.000$🆕

📢Для покупки введите <<Голова [номер]>>`);

	const sell = golovas.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.golova) return bot(`у вас уже есть голова на плечах. Введите <<Продать голову>>`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств❗`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.golova = sell.id;

		return bot(`вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});


cmd.hear(/^(?:Рубашка|Рубашки)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`рубашки: 
${message.user.transport.rubahka === 1 ? '👔' : '👔'} 1.Leviton 75.000$
${message.user.transport.rubahka === 2 ? '👕' : '👕'} 2.Gucci 125.000$
📢Для покупки введите <<Рубашка [номер]>>`);

	const sell = rubahkas.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.rubahka) return bot(`у вас уже есть рубашка. Введите <<Продать рубашка>>!`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.rubahka = sell.id;

		return bot(`вы купили рубашку <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Обувь|Ботинки)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`кроссовки: 
${message.user.transport.obyv === 1 ? '👞' : '👞'} 1. Классические кроссовки 500$
${message.user.transport.obyv === 2 ? '👟' : '👟'} 1. Спортивные кроссовки 2.500$
📢Для покупки введите <<Обувь [номер]>>`);

	const sell = obyvs.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.obyv) return bot(`у вас уже есть обувь. Введите <<Продать обувь>>.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств!`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.obyv = sell.id;

		return bot(`вы приобрели обувь <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:фегурки|фигурки)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`фигурки для одежды: 
${message.user.transport.wood === 1 ? '🌻' : '🌻'} 1. Одуванчик 3.000$
${message.user.transport.wood === 2 ? '🌹' : '🌹'} 2. Роза 6.000$
${message.user.transport.wood === 3 ? '🌴' : '🌴'} 3. Пальма 10.000$

📢Для покупки введите <<Фигурки [номер]>>`);

	const sell = woods.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.wood) return bot(`у вас уже игрушка. Отправьте <<Продать фигурку>>`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.wood = sell.id;

		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Камера|камеры)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`камеры: 
${message.user.transport.cam === 1 ? '📷' : '📷'} 1. Rekam DVC-540 | 6.300$
${message.user.transport.cam === 2 ? '📷' : '📷'} 2. Panasonic HC-V770 | 24.500$
${message.user.transport.cam === 3 ? '📷' : '📷'} 3. Sony FDR-AX700 | 81.000$
${message.user.transport.cam === 4 ? '📷' : '📷'} 4. Insta360 Titan | 1.250.000$

📢Для покупки введите <<Камеры [номер]>>`);

	const sell = cams.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.cam) return bot(`у вас уже есть камера! Введите <<Продать камеру>>.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств❗`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.cam = sell.id;

		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Питомец|Питомцы|🐯Питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`питомцы: 
🐛:
${message.user.transport.pitom === 1 ? '🐞' : '🐞'} 1. Жук | 5.000$  
${message.user.transport.pitom === 2 ? '🕷' : '🕷'} 2. Паук | 10.000$
${message.user.transport.pitom === 3 ? '🐝' : '🐝'} 3. Пчела | 15.000$
${message.user.transport.pitom === 4 ? '🦋' : '🦋'} 4. Бабочка | 25К$ 
${message.user.transport.pitom === 5 ? '🐌' : '🐌'} 5. Улитка | 30К$

🌲: 
${message.user.transport.pitom === 6 ? '🦎' : '🦎'} 6. Ящерица | 50К$ 
${message.user.transport.piton === 7 ? '🐢' : '🐢'} 7. Черепаха | 100К$ 
${message.user.transport.piton === 8 ? '🦜' : '🦜'} 8. Попугай | 200К$ 

💧: 
${message.user.transport.piton === 9 ? '🦀' : '🦀'} 9. Краб | 300К$
${message.user.transport.piton === 10 ? '🦑' : '🦑'} 10. Кальмар | 350К$
${message.user.transport.piton === 11 ? '🐬' : '🐬'} 11. Дельфин | 1КК$ 

🌿:  
${message.user.transport.piton === 12 ? '🐣' : '🐣'} 12. Цыпа | 5.000$ 
${message.user.transport.piton === 13 ? '🦆' : '🦆'} 13. Утка | 25.000$ 
${message.user.transport.piton === 14 ? '🦅' : '🦅'} 14. Орел | 50.000$
${message.user.transport.piton === 15 ? '🐓' : '🐓'} 15. Курица | 175К$

🏡:   
${message.user.transport.piton === 16 ? '🐿' : '🐿'} 16. Белка | 25.000$ 
${message.user.transport.piton === 17 ? '🐹' : '🐹'} 17. Хомяк | 100К$ 
${message.user.transport.piton === 18 ? '🐰' : '🐰'} 18. Заяц | 300К$
${message.user.transport.piton === 19 ? '🐈' : '🐈'} 19. Кошка | 750К$ 
${message.user.transport.piton === 20 ? '🐕' : '🐕'} 20. Собака | 1КК$

👑:  
${message.user.transport.piton === 21 ? '🐨' : '🐨'} 21. Куала | 325К$ 
${message.user.transport.piton === 22 ? '🐻' : '🐻'} 22. Миша | 800К$ 
${message.user.transport.piton === 23 ? '🐯' : '🐯'} 23. Тигр | 1.75КК$
${message.user.transport.piton === 24 ? '🦁' : '🦁'} 24. Лев | 3.50КК$ 
${message.user.transport.piton === 25 ? '🐼' : '🐼'} 25. Панда | 10КК$

📢Для покупки введите «питомцы [номер]»`);

	const sell = pitoms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.pitom) return bot(`у вас уже есть питомец.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.pitom = sell.id;

		return bot(`вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:Шляпа|Шляпы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Шляпы: 
${message.user.transport.shlapa === 1 ? '👒' : '👒'} 1. Панама 650$
${message.user.transport.shlapa === 2 ? '🎩' : '🎩'} 2. Цилиндр 3.000$
${message.user.transport.shlapa === 3 ? '🎓' : '🎓'} 3. Школа 5.000$
${message.user.transport.shlapa === 4 ? '⛑' : '⛑'} 4. Каска 7.500$
${message.user.transport.shlapa === 5 ? '👑' : '👑'} 5. Корона 15.000$

📢Для покупки введите <<Шляпы [номер]>>`);

	const sell = shlapas.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.shlapa) return bot(`у Вас уже есть шляпа. Отправьте <<Продать шляпа>>`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств❗`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.shlapa = sell.id;

		return bot(`Вы купили шляпу <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:мотоцикл|мотоциклы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`мотоциклы: 
${message.user.transport.moto === 1 ? '🛵' : '🛵'} 1. Faggio 100.000$
${message.user.transport.moto === 2 ? '🛵' : '🛵'} 2. Freeway 250.000$
${message.user.transport.moto === 3 ? '🛵' : '🛵'} 3. PCJ-500 500.000$
${message.user.transport.moto === 4 ? '🛵' : '🛵'} 4. BF-400 750.000$
${message.user.transport.moto === 5 ? '🛵' : '🛵'} 5. NRG-500 1.500.000$

📢Для покупки введите <<Мотоцикл [номер]>>`);

	const sell = motos.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.moto) return bot(`у вас уже есть мотоцикл! Введите <<Продать мотоцикл>>.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.moto = sell.id;

		return bot(`вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:планшет|планшеты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`Планшеты: 
${message.user.transport.table === 1 ? '💻' : '💻'} 1. Digma Plane 7594 | 3.5К$
${message.user.transport.table === 2 ? '💻' : '💻'} 2. Huawei Mediapad T3 | 10К$
${message.user.transport.table === 3 ? '💻' : '💻'} 3. Samsung Galaxy Tab | 25К$
${message.user.transport.table === 4 ? '💻' : '💻'} 4. Apple iPad Pro | 50К$
${message.user.transport.table === 5 ? '💻' : '💻'} 5. Microsoft Surface | 75К$

📢Для покупки введите <<Планшет [номер]>>`);

	const sell = tables.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.table) return bot(`у вас уже есть планшет! Отправьте <<Продать планшет>>.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств!`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.table = sell.id;

		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`яхты: 
${message.user.transport.yacht === 1 ? '🚤' : '🚤'} 1. Princess 60 1.500.000$
${message.user.transport.yacht === 2 ? '🚤' : '🚤'} 2. Wider 165 5.000.000$
${message.user.transport.yacht === 3 ? '🚤' : '🚤'} 3. Eclipse 10.000.000$
${message.user.transport.yacht === 4 ? '🚤' : '🚤'} 4. Dubai 17.500.000$
${message.user.transport.yacht === 5 ? '🚤' : '🚤'} 5. Streets of Monaco 30.000.000$

📢Для покупки введите <<Яхта [номер]>>`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть яхта❗ Введите <<Продать яхту>>.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});


cmd.hear(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`самолеты: 
${message.user.transport.airplane === 1 ? '✈' : '✈'} 1. Параплан 900.000$
${message.user.transport.airplane === 2 ? '✈' : '✈'} 2. F-35A 10.000.000$
${message.user.transport.airplane === 3 ? '✈' : '✈'} 3. Boeing 747-430 Custom 25.000.000$
${message.user.transport.airplane === 4 ? '✈' : '✈'} 4. F-22 Raptor 100.000.000$

📢Для покупки отправьте <<Самолет [номер]>>`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт! Введите <<Продать самолёт>>.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств❗`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`вертолеты: 
${message.user.transport.helicopter === 1 ? '🚁' : '🚁'} 1. Robinson R44 3.000.000$
${message.user.transport.helicopter === 2 ? '🚁' : '🚁'} 2. Leonardo AW109 Power 7.500.000$
${message.user.transport.helicopter === 3 ? '🚁' : '🚁'} 3. Bell 429WLG 16.000.000$
${message.user.transport.helicopter === 4 ? '🚁' : '🚁'} 4. Bell V-22 Osprey 32.575.000$

📢Для покупки введите <<Вертолет [номер]>>`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть вертолёт. Отправьте <<Продать вертолёт>>`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});


cmd.hear(/^(?:дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🏠' : '🏠'} 1. Подвал - 150.000$
${message.user.realty.home === 2 ? '🏠' : '🏠'} 2. Домик на дереве - 800.000$
${message.user.realty.home === 3 ? '🏠' : '🏠'} 3. Дом в лесу - 2.000.000$
${message.user.realty.home === 4 ? '🏠' : '🏠'} 4. Деревянный дом - 7.500.000$
${message.user.realty.home === 5 ? '🏠' : '🏠'} 5. Дача - 30.000.000$
${message.user.realty.home === 6 ? '🏠' : '🏠'} 6. Двухэтажная дача - 80.000.000$
${message.user.realty.home === 7 ? '🏠' : '🏠'} 7. Особняк - 187.500.000$
${message.user.realty.home === 8 ? '🏠' : '🏠'} 8. Дом на пляже - 500.000.000$

📢Для покупки введите <<Дом [номер]>>`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом. Введите <<Продать дом>>!`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств!`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🏨' : '🏨'} 1. Чердак 25.000$
${message.user.realty.apartment === 2 ? '🏨' : '🏨'} 2. Однокомнатная квартира 300.000$
${message.user.realty.apartment === 3 ? '🏨' : '🏨'} 3. Двухкомнатная квартира 1.000.000$
${message.user.realty.apartment === 4 ? '🏨' : '🏨'} 4. Четырехкомнатная квартира 5.000.000$
${message.user.realty.apartment === 5 ? '🏨' : '🏨'} 5. Квартира с Евроремонтом 10.000.000$

📢Для покупки введите <<Квартира [номер]>>`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира! Введите <<Продать квартиру>>.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств❗`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});

cmd.hear(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`телефоны: 
${message.user.misc.phone === 1 ? '📱' : '📱'} 1. Turbo X Mercury | 4.500$
${message.user.misc.phone === 2 ? '📱' : '📱'} 2. Honor 8A | 7.500$
${message.user.misc.phone === 3 ? '📱' : '📱'} 3. Xiami Redmi 8 | 9.000$
${message.user.misc.phone === 4 ? '📱' : '📱'} 4. Galaxy A40 | 15.000$
${message.user.misc.phone === 5 ? '📱' : '📱'} 5. Xiami 9T | 19.000$
${message.user.misc.phone === 6 ? '📱' : '📱'} 6. Mi Note 10 | 28.000$
${message.user.misc.phone === 7 ? '📱' : '📱'} 7. iPhone 11 | 50.000$

📢Для покупки введите «Телефон [номер]»`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств!`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;
		
		return bot(`вы купили <<${sell.name}>> за ${utils.sp(sell.cost)}$`);
	}
});


cmd.hear(/^(?:купить рейтинг|купить кубки)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 50000 ) > message.user.balance) return bot(`недостаточно средств.`);
	else if(( message.args[1] * 50000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 50000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свои кубки на ${message.args[1]}шт. за ${message.args[1] * 50000}$`);
	}
});
cmd.hear(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`список бизнесов: 
${message.user.business === 1 ? '🌯' : '🌯'} 1. Шаурмичная +800$ | 150.000$
${message.user.business === 2 ? '🍥' : '🍥'} 2. Ларёк +2.000$ | 500.000$
${message.user.business === 3 ? '🏬' : '🏬'} 3. Магазин +5.000$ | 3КК$
${message.user.business === 4 ? '🍹' : '🍹'} 4. Ресторан +10К$ | 9.3КК$
${message.user.business === 5 ? '🏭' : '🏭'} 5. Завод +50К$ | 100КК$
${message.user.business === 6 ? '🏢' : '🏢'} 6. Офис +150К$ | 300КК$
${message.user.business === 7 ? '🎬' : '🎬'} 7. Киностудия +500К$ | 1ККК$

📢Для покупки введите <<Бизнесы [номер]>>`);

	const sell = businesses.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.business) return bot(`у вас уже есть бизнес. Отправьте <<Продать бизнес>>.`);

	if(message.user.balance < sell.cost) return bot(`недостаточно средств.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.business.push({
			"id": message.args[1] + 1,
			"upgrade": 1,
			"workers": 1,
			"moneys": 0
	});
		if(message.user.business == 1) message.send(`${message.user.tag}, вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`, {attachment: `photo559301136_457239896`})
		if(message.user.business == 2) message.send(`${message.user.tag}, вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`, {attachment: `photo559301136_457239897`})
		if(message.user.business == 3) message.send(`${message.user.tag}, вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`, {attachment: `photo559301136_457239898`})
		if(message.user.business == 4) message.send(`${message.user.tag}, вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`, {attachment: `photo559301136_457239899`})
		if(message.user.business == 5) message.send(`${message.user.tag}, вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`, {attachment: `photo559301136_457239900`})
		if(message.user.business == 6) message.send(`${message.user.tag}, вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`, {attachment: `photo542439242_457246046`})
		if(message.user.business == 7) message.send(`${message.user.tag}, вы приобрели <<${sell.name}>> за ${utils.sp(sell.cost)}$`, {attachment: `photo559301136_457239901`})								
	}
});

cmd.hear(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно средств`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${message.args[1]}👑 за ${message.args[1] * 250000000}$`);
	}
});

cmd.hear(/^(?:курс)$/i, async (message, bot) => {
	return bot(`Биткоин: ${utils.sp(btc)}$🏭`);
});

cmd.hear(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * btc ) > message.user.balance) return bot(`недостаточно средств!
🏭Курс биткоина: ${btc}$`);
	else if(( message.args[1] * btc ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * btc );
		message.user.btc += message.args[1];

		return bot(`вы приобрели ${utils.sp(message.args[1])}₿ за ${utils.sp(message.args[1] * btc)}$`);
	}
});

cmd.hear(/^(?:топ)$/i, async (message, bot) => {
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑${utils.sp(user.rating)} | $${utils.rn(user.balance)}
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 🏆${utils.sp(message.user.rating)} | $${utils.rn(message.user.balance)}`);
});


cmd.hear(/^(?:Таксовать)$/i, async (message, bot) => {
		if(message.user.golod < 10) return bot(`вы проголодался. Отправляйтесь в <<Макдак>>!`);
	if(message.user.golod = 0) return bot(`вы голодные. Зайдите в <<Макдак>>`);
	if(message.user.timers.taxi) return bot(`таксовать можно каждый час❗`);
	if(!message.user.transport.car) return bot(`у вас нет машины.`);
	let prize = utils.pick([1]);

	setTimeout(() => {
		message.user.timers.taxi = false;
	}, 3600000);

	message.user.timers.taxi = true;

	if(prize === 1)
	{
		message.user.golod -= 10;
		message.user.balance += 33563;
		return bot(`таксуя по Москве вы заработали 33.563$🚖`);
	}
	
	if(prize === 2)
	{
		message.user.golod -= 10;
		message.user.transport.car = 0;
		return bot(`ваша машина заглохла🎯`);
	}
	
	if(prize === 3)
	{
		message.user.golod -= 10;
		message.user.balance += 26873;
		return bot(`таксуя по Санкт-Петербургу вы заработали 26.873$🚖`);
	}
	
	if(prize === 4)
	{
		message.user.golod -= 10;
		message.user.transport.car = 0;
		return bot(`ваша машина попала в ДТП🎯`);
	}
	
	if(prize === 5)
	{
		message.user.golod -= 10;
		message.user.transport.car = 0;
		return bot(`ваша машина сломалась🎯`);
	}
	
	if(prize === 6)
	{
		message.user.golod -= 10;
		message.user.balance += 21755;
		return bot(`таксуя по Воронежу вы заработали 21.755$🚖`);
	}
	
	if(prize === 7)
	{
		message.user.golod -= 10;
		message.user.transport.car = 0;
		return bot(`ваша машина попала в аварию🎯`);
	}
	
});

cmd.hear(/^(?:Копать)$/i, async (message, bot) => {
	if(message.user.golod < 10) return bot(`вы проголодались! Отправляйтесь в <<Макдак>>.`);
	let prize = utils.pick([1,2]);

	if(prize === 1)
	{
		const earn = utils.random(3, 14);
		const phrase = utils.pick([`🥔`,`🌿`,`🌾`]);
		message.user.ryuda += earn;
		message.user.exp += 1;
		bot(`работая на ферме Вы получили ${utils.sp(earn)}кг${phrase}`)
	}
	if(prize === 2)
	{
		const sornyak = utils.random(5, 50);
		const phrase = utils.pick([`🌷`,`🌼`,`🌱`]);
		message.user.ryuda += earn;
		message.user.exp += 1;
		bot(`Вам попался сорняк. Получено +${utils.sp(earn)}$${phrase}`)
	}

});


cmd.hear(/^(?:анекдот)$/i, async (message, bot) => {
		let filter = (text) => {
			text = text.replace('&quot;', '"');
			text = text.replace('!&quot;', '"');
			text = text.replace('?&quot;', '"');
			text = text.replace(/(&quot;)/ig, '"');
			return text;
		}

    let anek = await getAnek();
    return bot(`результат:\n\n ${filter(anek)}`);

function getAnek() {
    return rq('https://www.anekdot.ru/random/anekdot/').then(body => {
        		let res = body.match(/(?:<div class="text">([^]+)<\/div>)/i);
        		res = res[0].split('</div>');
        		return res[0].split(`<div class="text">`).join('').split('<br>').join('\n');
        	});

	}
});

cmd.hear(/^(?:Снять видео|Снять блог|Снять)$/i, async (message, bot) => {
		if(message.user.golod < 10) return bot(`вы проголодались! Зайдите в <<Макдак>>`);
	if(message.user.timers.film) return bot(`блог доступен раз в час.`);
	if(!message.user.transport.cam) return bot(`у вас нет камеры, приобретите ее в <<Магазине>>.`);
	let prize = utils.pick([1, 2, 3, 4, 5]);

	setTimeout(() => {
		message.user.timers.film = false;
	}, 3600000);

	message.user.timers.film = true;

	if(prize === 1)
	{
		message.user.golod -= 10;
		message.user.balance += 5000;
		return bot(`вы отсняли видео на ютуб и получили +5.000⭐`);
	}
	
	if(prize === 2)
	{
		message.user.golod -= 10;
		message.user.balance += 10000;
		return bot(`вы отсняли видео на ютуб и получили +10.000$`);
	}
	
	if(prize === 3)
	{
		message.user.golod -= 10;
		message.user.rating += 1;
		return bot(`вы отсняли видео на ютуб и получили +1⭐`);
	}
	
	if(prize === 4)
	{
		message.user.golod -= 10;
		message.user.rating += 2;
		return bot(`вы отсняли видео на ютуб и получили +2⭐`);
	}
	
	if(prize === 5)
	{
		message.user.golod -= 10;
		message.user.rating += 3;
		return bot(`вы отсняли видео на ютуб и получили +3⭐`);
	}
});


cmd.hear(/^(?:Бонус|🔑Бонус)$/i, async (message, bot) => {
	if(message.user.timers.bonus) return bot(`бонус доступен раз в день.`);
	let prize = utils.pick([1]);

	setTimeout(() => {
		message.user.timers.bonus = false;
	}, 86400000);

	message.user.timers.bonus = true;

	if(prize === 1)
	{
		const earn = utils.random(2500, 10000);
		message.user.balance += earn;
		bot(`получено ${utils.sp(earn)}$`)
		message.sendSticker(`17087`)
	}
});


cmd.hear(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`брак невозможен.`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке.`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`этому игроку уже сделано предложение.`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`вы вступили в брак с игроком <<${user.tag}>>`);
	}

	user.marriage.requests.push(message.user.uid);
	return bot(`вы сделали предложение игроку <<${user.tag}>>`);
});

cmd.hear(/^(?:браки)$/i, async (message, bot) => {
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке.`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока: ${users[x].tag}[${x}]`).join('\n')}`);
});

cmd.hear(/^(?:развод)$/i, async (message, bot) => {
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке!`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`брак распался.`);
});

cmd.hear(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
	vk.api.messages.send({ user_id: 542439242, forward_messages: message.id, message: `ID: ${message.user.uid} ${message.args[1]}` }).then(() => {
		return bot(`жалоба/предложение отправлены на рассмотрение.`)
		bot(`✨Здравствуйте, администрация работает над Вашим вопросом.`);
	}).catch((err) => {
		return bot(`произошла внутреняя ошибка.`);
	});
});

cmd.hear(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	if(message.senderId !== 542439242) return;

	const user = await users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return;

	vk.api.messages.send({ user_id: user.id, message: `✉Ответ от администратора:
	${message.args[2]}` });
});

cmd.hear(/^(?:работа|работы)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша новая профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `работать можно каждые 10 минут!` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не подходите требованиям этой работы.`);
	else if(work.requiredLevel <= message.user.level)
	if(message.args[1] == 1)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать <<${work.name}>> 
		🧹Введите команду <<Работать>>.`, {attachment: `photo559301136_457239914`});
	};
	if(message.args[1] == 2)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать <<${work.name}>> 
		🔧Введите команду <<Работать>>.`, {attachment: `photo559301136_457239915`});
	};
	if(message.args[1] == 3)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать <<${work.name}>> 
		🧬Введите команду <<Работать>>.`, {attachment: `photo559301136_457239916`});
	};
	if(message.args[1] == 4)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать <<${work.name}>> 
		⚙Введите команду <<Работать>>.`, {attachment: `photo559301136_457239917`});
	};
	if(message.args[1] == 5)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать <<${work.name}>> 
		📄Введите команду <<Работать>>.`, {attachment: `photo559301136_457239918`});
	};
	if(message.args[1] == 6)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать <<${work.name}>> 
		📝Введите команду <<Работать>>.`, {attachment: `photo559301136_457239919`});
	};
	if(message.args[1] == 7)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать <<${work.name}>> 
		🍾Введите команду <<Работать>>.`, {attachment: `photo559301136_457239920`});
	}
	if(message.args[1] == 8)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать <<${work.name}>> 
		👤Введите команду <<Работать>>.`, {attachment: `photo559301136_457239921`});
	};
	if(message.args[1] == 9)
	{
		message.user.work = work.id;
		return bot(`вы устроились работать <<${work.name}>> 
		👓Введите команду <<Работать>>.`, {attachment: `photo559301136_457239922`});
	}
});

cmd.hear(/^(?:работа)$/i, async (message, bot) => {
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `работать можно каждые 10 минут.` : ``}`);
	return bot(`профессии: 

	🧹 1. Дворник 400-750$ | 1LVL 
	🔧 2. Сантехник 750-1.500$ | 3LVL
	🧬 3. Электрик 1.500-3.000$ | 5LVL
	⚙ 4. Слесарь 3.000-5.000$ | 8LVL
	📄 5. Юрист 5.000-6.000$ | 10LVL
	📝 6. Бухгалтер 6.000-9К$ | 14LVL
	🍾 7. Бармен 10.000-20.000$ | 22LVL
	👤 8. Админ 22.500-37.5К$ | 25LVL
	👓 9. Коддер 50К-100К | 49LVL

	🔔Для трудоустройства введите <<Работа [номер]>>`);
});

cmd.hear(/^(?:работать)$/i, async (message, bot) => {
		if(message.user.golod < 10) return bot(`вы проголодались. Введите <<Макдак>>`);
	if(!message.user.work) return bot(`у вас нет работы😩`);

	if(message.user.timers.hasWorked) return bot(`вы слишком устали, подождите 10 минут.`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;
	message.user.golod -= 10;

	bot(`рабочий день окончен.
	💰Вы заработали ${utils.sp(earn)}$`)
	message.sendSticker(`17623`);
});

cmd.hear(/^(?:уволиться)$/i, async (message, bot) => {
	if(!message.user.work) return bot(`вы нигде не работаете.`);
	
	message.user.work = 0;
	return bot(`Вы успешно увоволились с прежней работы.`);
});

cmd.hear(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2500;
		return bot(`выпало правильное число. Приз: 2.500$`);
	} else return bot(`Выпало число ${int}🎲`);
});

cmd.hear(/^(?:казино|азино)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(message.args[1] <= 0) return;
	if(message.args[1] < 1000) return bot(`минимальная сумма 1.000$`);

const phrase = utils.pick(['😔', '😉',`🤑`,`🙁`,`🙁`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));;
	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 1, 0.5, 2, 2, 0.5, 0.50, 0.75, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 2, 2, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		if(multiply < 1) message.send(`${message.user.tag}, вы проиграли ${utils.sp(message.args[1] * multiply)}$ ${phrase}`, {attachment: `photo559301136_457239873`});
		if(multiply > 1) message.send(`${message.user.tag}, вы выиграли ${utils.sp(message.args[1] * multiply)}$ ${phrase}`, {attachment: `photo559301136_457239872`})
		if(multiply === 1) message.send(`${message.user.tag}, ничего не выпало. Баланс остался прежним!`)
	}
});

cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	if(!message.user.transport.table) return bot(`у вас нет планшета.`);
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас недостаточно средств!`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 5.0, 1.25, 1.5, 1.75, 2, 2.5, 5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			✅Вы получили +${message.args[2] * multiply}$
			💴Баланс: ${message.user.balance}$`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}$
			❌Вы потеряли ${message.args[2]}$ 
			💴Баланс: ${message.user.balance}`);
		}
	}
});

cmd.hear(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`недостаточно средств❗`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы угадали. Приз ${message.args[2] * multiply}`);
		} else {
			return bot(`вы не угадали! Правильным был ${cup} стаканчик.`);
		}
	}
});

cmd.hear(/^(?:бизнес|🏬Бизнес)\s(\d)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: «Бизнес 1/2»`);
	if(message.user.business.length < message.args[1]) return bot(`бизнес не найден`);
	message.args[1]--;
	const biz = businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1];

	return bot(`статистика <<${biz.name}>>:
	📦Прибыль: ${utils.sp(Math.floor(biz.earn / biz.workers * message.user.business[message.args[1]].workers))}$/час
	👷‍Рабочих: ${message.user.business[message.args[1]].workers}/${biz.workers}
	💰На счёте: ${utils.sp(message.user.business[message.args[1]].moneys)}$

	${ (businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] != null ? "✅ Доступно улучшение! (" + utils.sp(businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost) + "$)" : "") }`);
});

cmd.hear(/^(?:бизнес)\s(?:снять)\s(.*)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: «Бизнес снять 1/2 сумма»`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.business[message.args[1]].moneys);
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] <= 0) return bot(`произошла ошибка`);
	if(message.args[2] > message.user.business[message.args[1]].moneys) return bot(`у вас недостаточно средств`);

	message.user.balance += message.args[2];
	message.user.business[message.args[1]].moneys -= message.args[2];

	return bot(`вы сняли со счёта своего бизнеса ${utils.sp(message.args[2])}$`);
});

cmd.hear(/^(?:бизнес)\s(?:улучшить)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: «Бизнес улучшить 1/2»`);
	if(message.user.business.length < message.args[1]) return bot(`бизнес не найден`);
	message.args[1]--;
	if(businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] == null) return bot(`улучшения отключены`);
	const cost = businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost;
	if(cost > message.user.balance) return bot(`у вас недостаточно денег для улучшения`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].upgrade++;

	return bot(`вы улучшили бизнес «${message.args[1] + 1}» за ${utils.sp(cost)}$`);
});

cmd.hear(/^(?:бизнес)\s(?:нанять)\s(.*)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: «Бизнес нанять 1/2 число»`);
	if(message.user.business.length < message.args[1]) return bot(`бизнес не найден`);
	message.args[1]--;
	if(message.user.business[message.args[1]].workers + message.args[2] > businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1].workers) return bot(`недостаточно мест`);
	const cost = message.args[2] * 0;
	if(cost > message.user.balance) return bot(`у вас недостаточно средств`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].workers += message.args[2];

	return bot(`вы наняли ${message.args[2]} рабочих для бизнеса «${message.args[1] + 1}»`);
});

cmd.hear(/^(?:ферма|🔋Ферма)$/i, async (message, bot) => {
	if(!message.user.misc.farm) return bot(`у вас нет фермы`);
	if(!message.user.farm_btc) return bot(`ферма пустая`);

	const btc_ = message.user.farm_btc * message.user.misc.farm_count;
	let prize = utils.pick([1,2,3]);

	if(prize === 1)
	{
		const btc_ = message.user.farm_btc;
		message.user.btc += message.user.farm_btc;
		message.user.farm_btc = 0
		bot(`вы собрали ${utils.sp(btc_)}₿ за все время
		🔋Биткоинов: ${utils.sp(message.user.btc)}шт.`,{attachment: `photo559301136_457239877`});
	}
	if(prize === 2)
	{
		const btc_ = message.user.farm_btc;
		message.user.btc += message.user.farm_btc;
		message.user.farm_btc = 0
		bot(`вы собрали ${utils.sp(btc_)}₿ за все время
		🔋Биткоинов: ${utils.sp(message.user.btc)}шт.`,{attachment: `photo559301136_457239879`});
	}
	if(prize === 3)
	{
		const btc_ = message.user.farm_btc;
		message.user.btc += message.user.farm_btc;
		message.user.farm_btc = 0
		bot(`вы собрали ${utils.sp(btc_)}₿ за все время
		🔋Биткоинов: ${utils.sp(message.user.btc)}шт.`,{attachment: `photo559301136_457239880`});
	}
});

cmd.hear(/^(?:restart)$/i, async (message, bot) => {
	if(message.senderId !== 542439242) return;
	await bot(`бот перезагружается`);

	await saveUsers();
	process.exit(-1);
});

cmd.hear(/^(?:реф|реферал)$/i, async (message, bot) => {
	return bot(`пришло: ${users.filter(x=> x.referal === message.user.uid).length} друзей
	Чтобы вам засчитали друга он должен написать команду <<Реф ${message.user.uid}>>👀
	
	👫За каждого друга приходит бонус 15.000$, а другу - 30.000$`);
});

cmd.hear(/^(?:реф|реферал)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.referal !== null) return bot(`вы уже активировали рефералку!`);
	let user = users.find(x=> x.uid === Number(message.args[1]));

	if(!users) return bot(`неверный ID`);
	if(user.id === message.senderId) return bot(`неверный ID`);

	user.balance += 25000;
	message.user.balance += 50000;

	message.user.referal = Number(message.args[1]);

	vk.api.messages.send({ user_id: user.id, message: `спасибо за приглашенного друга🎉
	💲Вам начислено 25.000$ на баланс` });
	return bot(`вы активировали рефералку.
	💵Вам начислено 50.000$`);
});

cmd.hear(/^(?:гиф)\s(.*)$/i, async (message, bot) => {
       bot(`гифки по запросу ${message.args[1]}:`)
       	vk.api.call('docs.search', {q: message.args[1] + '.gif', count: 10})
        .then(response => {
            let items = response.items.map(x => `doc${x.owner_id}_${x.id}`).join(',');
            let item = utils.pick(response.items);
            message.send({attachment: items})
        })
});

cmd.hear(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.timers.safe) return bot(`взламывать можно раз в час.`);
	let prize = utils.pick([1]);

	setTimeout(() => {
		message.user.timers.safe = false;
	}, 3600000);

	message.user.timers.safe = true;
	
	if(message.args[1] < 10 || message.args[1] >= 100) return;

	const int = utils.random(10, 99);
	message.args[1] = Number(message.args[1]);

	if(int === message.args[1])
	{
		message.user.balance += 5.000;
		return bot(`правильно!
		💰Вам начислено 5.000$`);
	} else if(int !== message.args[1])
	{
		return bot(`неправильно. (${int})`);
	}
});