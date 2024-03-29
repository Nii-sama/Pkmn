exports.BattleFormatsData = {
	bulbasaur: {
		randomBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","leechseed","synthesis"],
		randomDoubleBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","protect"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["sweetscent","growth","solarbeam","synthesis"]},
			{"generation":3,"level":10,"gender":"M","moves":["tackle","growl","leechseed","vinewhip"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tackle","growl","leechseed","vinewhip"]},
			{"generation":5,"level":1,"isHidden":false,"moves":["falseswipe","block","frenzyplant","weatherball"]}
		],
		tier: "LC"
	},
	ivysaur: {
		randomBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","leechseed","synthesis"],
		randomDoubleBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","protect"],
		tier: "NFE"
	},
	venusaur: {
		randomBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","knockoff","leechseed","synthesis","earthquake"],
		randomDoubleBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","protect"],
		tier: "OU"
	},
	venusaurmega: {
		randomBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","swordsdance","powerwhip","leechseed","synthesis","earthquake"],
		randomDoubleBattleMoves: ["sleeppowder","gigadrain","hiddenpowerfire","hiddenpowerice","sludgebomb","powerwhip","protect"],
		requiredItem: "Venusaurite"
	},
	charmander: {
		randomBattleMoves: ["flamethrower","overheat","dragonpulse","hiddenpowergrass","fireblast"],
		randomDoubleBattleMoves: ["heatwave","dragonpulse","hiddenpowergrass","fireblast","protect"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["scratch","growl","ember"]},
			{"generation":4,"level":40,"gender":"M","nature":"Mild","moves":["return","hiddenpower","quickattack","howl"]},
			{"generation":4,"level":40,"gender":"M","nature":"Naive","moves":["return","hiddenpower","quickattack","howl"]},
			{"generation":4,"level":40,"gender":"M","nature":"Naughty","moves":["return","hiddenpower","quickattack","howl"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["scratch","growl","ember","smokescreen"]},
			{"generation":4,"level":40,"gender":"M","nature":"Hardy","moves":["return","hiddenpower","quickattack","howl"],"pokeball":"cherishball"},
			{"generation":5,"level":1,"isHidden":false,"moves":["falseswipe","block","blastburn","acrobatics"]}
		],
		tier: "LC"
	},
	charmeleon: {
		randomBattleMoves: ["flamethrower","overheat","dragonpulse","hiddenpowergrass","fireblast","dragondance","flareblitz","shadowclaw","dragonclaw"],
		randomDoubleBattleMoves: ["heatwave","dragonpulse","hiddenpowergrass","fireblast","protect"],
		tier: "NFE"
	},
	charizard: {
		randomBattleMoves: ["fireblast","focusblast","airslash","roost","dragondance","flareblitz","dragonclaw","earthquake"],
		randomDoubleBattleMoves: ["heatwave","fireblast","solarbeam","airslash","dragondance","flareblitz","dragonclaw","earthquake","protect"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["wingattack","slash","dragonrage","firespin"]},
			{"generation":6,"level":36,"gender":"M","isHidden":false,"moves":["firefang","flamethrower","airslash","inferno"],"pokeball":"cherishball"},
			{"generation":6,"level":36,"gender":"M","isHidden":false,"moves":["dragonrage","firefang","airslash","dragonclaw"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	charizardmegax: {
		randomBattleMoves: ["dragondance","flareblitz","dragonclaw","earthquake","roost","substitute"],
		requiredItem: "Charizardite X"
	},
	charizardmegay: {
		randomBattleMoves: ["flamethrower","fireblast","airslash","roost","solarbeam"],
		requiredItem: "Charizardite Y"
	},
	squirtle: {
		randomBattleMoves: ["icebeam","hydropump","rapidspin","scald","aquajet","toxic"],
		randomDoubleBattleMoves: ["muddywater","icebeam","hydropump","fakeout","scald","followme","icywind","protect"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","tailwhip","bubble","withdraw"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tackle","tailwhip","bubble","withdraw"]},
			{"generation":5,"level":1,"isHidden":false,"moves":["falseswipe","block","hydrocannon","followme"]}
		],
		tier: "LC"
	},
	wartortle: {
		randomBattleMoves: ["icebeam","hydropump","rapidspin","scald","aquajet","toxic"],
		randomDoubleBattleMoves: ["muddywater","icebeam","hydropump","fakeout","scald","followme","icywind","protect"],
		tier: "NFE"
	},
	blastoise: {
		randomBattleMoves: ["icebeam","hydropump","rapidspin","scald","toxic","darkpulse","aurasphere"],
		randomDoubleBattleMoves: ["muddywater","icebeam","hydropump","fakeout","scald","darkpulse","aurasphere","followme","icywind","protect"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["protect","raindance","skullbash","hydropump"]}
		],
		tier: "UU"
	},
	blastoisemega: {
		randomBattleMoves: ["icebeam","hydropump","rapidspin","scald","aquajet","toxic","dragontail","darkpulse","aurasphere"],
		randomDoubleBattleMoves: ["muddywater","icebeam","hydropump","fakeout","scald","darkpulse","aurasphere","followme","icywind","protect"],
		requiredItem: "Blastoisinite"
	},
	caterpie: {
		randomBattleMoves: ["bugbite","snore","tackle","electroweb"],
		tier: "LC"
	},
	metapod: {
		randomBattleMoves: ["snore","bugbite","tackle","electroweb"],
		tier: "NFE"
	},
	butterfree: {
		randomBattleMoves: ["quiverdance","roost","bugbuzz","substitute","sleeppowder","gigadrain","psychic"],
		randomDoubleBattleMoves: ["quiverdance","bugbuzz","substitute","sleeppowder","gigadrain","psychic","shadowball","protect"],
		eventPokemon: [
			{"generation":3,"level":30,"moves":["morningsun","psychic","sleeppowder","aerialace"]}
		],
		tier: "NU"
	},
	weedle: {
		randomBattleMoves: ["bugbite","stringshot","poisonsting","electroweb"],
		tier: "LC"
	},
	kakuna: {
		randomBattleMoves: ["electroweb","bugbite","irondefense","poisonsting"],
		tier: "NFE"
	},
	beedrill: {
		randomBattleMoves: ["toxicspikes","xscissor","swordsdance","uturn","endeavor","poisonjab","drillrun","knockoff"],
		randomDoubleBattleMoves: ["xscissor","uturn","endeavor","poisonjab","drillrun","brickbreak","knockoff","protect","stringshot"],
		eventPokemon: [
			{"generation":3,"level":30,"moves":["batonpass","sludgebomb","twineedle","swordsdance"]}
		],
		tier: "NU"
	},
	pidgey: {
		randomBattleMoves: ["roost","bravebird","heatwave","return","workup","uturn","thief"],
		randomDoubleBattleMoves: ["bravebird","heatwave","return","uturn","tailwind","protect"],
		tier: "LC"
	},
	pidgeotto: {
		randomBattleMoves: ["roost","bravebird","heatwave","return","workup","uturn","thief"],
		randomDoubleBattleMoves: ["bravebird","heatwave","return","uturn","tailwind","protect"],
		eventPokemon: [
			{"generation":3,"level":30,"abilities":["keeneye"],"moves":["refresh","wingattack","steelwing","featherdance"]}
		],
		tier: "NFE"
	},
	pidgeot: {
		randomBattleMoves: ["roost","bravebird","pursuit","heatwave","return","uturn","hurricane"],
		randomDoubleBattleMoves: ["bravebird","heatwave","return","uturn","tailwind","protect"],
		eventPokemon: [
			{"generation":5,"level":61,"gender":"M","nature":"Naughty","isHidden":false,"abilities":["keeneye"],"moves":["whirlwind","wingattack","skyattack","mirrormove"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	rattata: {
		randomBattleMoves: ["facade","flamewheel","suckerpunch","uturn","wildcharge","thunderwave","crunch","revenge"],
		randomDoubleBattleMoves: ["facade","flamewheel","suckerpunch","uturn","wildcharge","superfang","crunch","protect"],
		tier: "LC"
	},
	raticate: {
		randomBattleMoves: ["facade","flamewheel","suckerpunch","uturn","wildcharge","crunch"],
		randomDoubleBattleMoves: ["facade","flamewheel","suckerpunch","uturn","wildcharge","superfang","crunch","protect"],
		eventPokemon: [
			{"generation":3,"level":34,"moves":["refresh","superfang","scaryface","hyperfang"]}
		],
		tier: "NU"
	},
	spearow: {
		randomBattleMoves: ["return","drillpeck","doubleedge","uturn","quickattack","pursuit","drillrun","featherdance"],
		randomDoubleBattleMoves: ["return","drillpeck","doubleedge","uturn","quickattack","drillrun","protect"],
		eventPokemon: [
			{"generation":3,"level":22,"moves":["batonpass","falseswipe","leer","aerialace"]}
		],
		tier: "LC"
	},
	fearow: {
		randomBattleMoves: ["return","drillpeck","doubleedge","uturn","quickattack","pursuit","drillrun","roost"],
		randomDoubleBattleMoves: ["return","drillpeck","doubleedge","uturn","quickattack","drillrun","protect"],
		tier: "NU"
	},
	ekans: {
		randomBattleMoves: ["coil","gunkshot","seedbomb","glare","suckerpunch","aquatail","earthquake","rest","rockslide"],
		randomDoubleBattleMoves: ["gunkshot","seedbomb","suckerpunch","aquatail","earthquake","rest","rockslide","protect"],
		eventPokemon: [
			{"generation":3,"level":14,"abilities":["shedskin"],"moves":["leer","wrap","poisonsting","bite"]},
			{"generation":3,"level":10,"gender":"M","moves":["wrap","leer","poisonsting"]}
		],
		tier: "LC"
	},
	arbok: {
		randomBattleMoves: ["coil","gunkshot","suckerpunch","aquatail","earthquake","rest"],
		randomDoubleBattleMoves: ["gunkshot","seedbomb","suckerpunch","aquatail","crunch","earthquake","rest","rockslide","protect"],
		eventPokemon: [
			{"generation":3,"level":33,"moves":["refresh","sludgebomb","glare","bite"]}
		],
		tier: "NU"
	},
	pichu: {
		randomBattleMoves: ["fakeout","volttackle","encore","irontail","toxic","thunderbolt"],
		randomDoubleBattleMoves: ["fakeout","volttackle","encore","irontail","protect","thunderbolt","discharge"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["thundershock","charm","surf"]},
			{"generation":3,"level":5,"moves":["thundershock","charm","wish"]},
			{"generation":3,"level":5,"moves":["thundershock","charm","teeterdance"]},
			{"generation":3,"level":5,"moves":["thundershock","charm","followme"]},
			{"generation":4,"level":1,"moves":["volttackle","thunderbolt","grassknot","return"]},
			{"generation":4,"level":30,"shiny":true,"gender":"M","nature":"Jolly","moves":["charge","volttackle","endeavor","endure"],"pokeball":"cherishball"},
			{"generation":4,"level":30,"shiny":true,"gender":"M","nature":"Jolly","moves":["volttackle","charge","endeavor","endure"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	pichuspikyeared: {
		eventPokemon: [
			{"generation":4,"level":30,"gender":"F","nature":"Naughty","moves":["helpinghand","volttackle","swagger","painsplit"]}
		],
		tier: ""
	},
	pikachu: {
		randomBattleMoves: ["thunderbolt","volttackle","voltswitch","grassknot","hiddenpowerice","brickbreak","extremespeed","encore","substitute","knockoff","signalbeam"],
		randomDoubleBattleMoves: ["fakeout","thunderbolt","volttackle","voltswitch","feint","grassknot","hiddenpowerice","brickbreak","extremespeed","encore","substitute","knockoff","protect","discharge"],
		eventPokemon: [
			{"generation":3,"level":50,"moves":["thunderbolt","agility","thunder","lightscreen"]},
			{"generation":3,"level":10,"moves":["thundershock","growl","tailwhip","thunderwave"]},
			{"generation":3,"level":10,"moves":["fly","tailwhip","growl","thunderwave"]},
			{"generation":3,"level":5,"moves":["surf","growl","tailwhip","thunderwave"]},
			{"generation":3,"level":10,"moves":["fly","growl","tailwhip","thunderwave"]},
			{"generation":3,"level":10,"moves":["thundershock","growl","thunderwave","surf"]},
			{"generation":3,"level":70,"moves":["thunderbolt","thunder","lightscreen","fly"]},
			{"generation":3,"level":70,"moves":["thunderbolt","thunder","lightscreen","surf"]},
			{"generation":3,"level":70,"moves":["thunderbolt","thunder","lightscreen","agility"]},
			{"generation":4,"level":10,"gender":"F","nature":"Hardy","moves":["surf","volttackle","tailwhip","thunderwave"]},
			{"generation":3,"level":10,"gender":"M","moves":["thundershock","growl","tailwhip","thunderwave"]},
			{"generation":4,"level":50,"gender":"M","nature":"Hardy","moves":["surf","thunderbolt","lightscreen","quickattack"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"F","nature":"Bashful","moves":["present","quickattack","thundershock","tailwhip"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"M","nature":"Jolly","moves":["grassknot","thunderbolt","flash","doubleteam"],"pokeball":"cherishball"},
			{"generation":4,"level":40,"gender":"M","nature":"Modest","moves":["surf","thunder","protect"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"F","nature":"Bashful","moves":["quickattack","thundershock","tailwhip","present"],"pokeball":"cherishball"},
			{"generation":4,"level":40,"gender":"M","nature":"Mild","moves":["surf","thunder","protect"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"F","nature":"Bashful","moves":["present","quickattack","thunderwave","tailwhip"],"pokeball":"cherishball"},
			{"generation":4,"level":30,"gender":"M","moves":["lastresort","present","thunderbolt","quickattack"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"gender":"M","nature":"Relaxed","moves":["rest","sleeptalk","yawn","snore"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"M","nature":"Docile","moves":["present","quickattack","thundershock","tailwhip"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"gender":"M","nature":"Naughty","moves":["volttackle","irontail","quickattack","thunderbolt"],"pokeball":"cherishball"},
			{"generation":4,"level":20,"gender":"M","nature":"Bashful","moves":["present","quickattack","thundershock","tailwhip"],"pokeball":"cherishball"},
			{"generation":5,"level":30,"gender":"F","isHidden":true,"moves":["sing","teeterdance","encore","electroball"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["fly","irontail","electroball","quickattack"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"gender":"F","isHidden":false,"moves":["thunder","volttackle","grassknot","quickattack"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"gender":"F","isHidden":false,"moves":["extremespeed","thunderbolt","grassknot","brickbreak"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"gender":"F","isHidden":true,"moves":["fly","thunderbolt","grassknot","protect"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["thundershock","tailwhip","thunderwave","headbutt"]},
			{"generation":5,"level":100,"gender":"M","isHidden":true,"moves":["volttackle","quickattack","feint","voltswitch"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"gender":"M","nature":"Brave","isHidden":false,"moves":["thunderbolt","quickattack","irontail","electroball"],"pokeball":"cherishball"},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","growl","playnice","quickattack"],"pokeball":"cherishball"},
			{"generation":6,"level":22,"isHidden":false,"moves":["quickattack","electroball","doubleteam","megakick"],"pokeball":"cherishball"}
		],
		tier: "NFE"
	},
	raichu: {
		randomBattleMoves: ["nastyplot","encore","thunderbolt","grassknot","hiddenpowerice","focusblast","substitute"],
		randomDoubleBattleMoves: ["fakeout","encore","thunderbolt","grassknot","hiddenpowerice","focusblast","substitute","extremespeed","knockoff","signalbeam","feint","protect"],
		tier: "NU"
	},
	sandshrew: {
		randomBattleMoves: ["earthquake","rockslide","swordsdance","rapidspin","xscissor","stealthrock","toxic","knockoff"],
		randomDoubleBattleMoves: ["earthquake","rockslide","swordsdance","xscissor","knockoff","protect"],
		eventPokemon: [
			{"generation":3,"level":12,"moves":["scratch","defensecurl","sandattack","poisonsting"]}
		],
		tier: "LC"
	},
	sandslash: {
		randomBattleMoves: ["earthquake","stoneedge","swordsdance","rapidspin","xscissor","stealthrock","toxic","knockoff"],
		randomDoubleBattleMoves: ["earthquake","rockslide","stoneedge","swordsdance","xscissor","knockoff","protect"],
		tier: "NU"
	},
	nidoranf: {
		randomBattleMoves: ["toxicspikes","crunch","poisonjab","honeclaws"],
		randomDoubleBattleMoves: ["helpinghand","crunch","poisonjab","protect"],
		tier: "LC"
	},
	nidorina: {
		randomBattleMoves: ["toxicspikes","crunch","poisonjab","honeclaws","icebeam","thunderbolt","shadowclaw"],
		randomDoubleBattleMoves: ["helpinghand","crunch","poisonjab","protect","icebeam","thunderbolt","shadowclaw"],
		tier: "NFE"
	},
	nidoqueen: {
		randomBattleMoves: ["toxicspikes","stealthrock","fireblast","thunderbolt","icebeam","earthpower","sludgewave","focusblast"],
		randomDoubleBattleMoves: ["helpinghand","protect","fireblast","thunderbolt","icebeam","earthpower","sludgebomb","focusblast"],
		tier: "UU"
	},
	nidoranm: {
		randomBattleMoves: ["suckerpunch","poisonjab","headsmash","honeclaws","shadowclaw"],
		randomDoubleBattleMoves: ["suckerpunch","poisonjab","shadowclaw","helpinghand","protect"],
		tier: "LC"
	},
	nidorino: {
		randomBattleMoves: ["suckerpunch","poisonjab","headsmash","honeclaws","shadowclaw"],
		randomDoubleBattleMoves: ["suckerpunch","poisonjab","shadowclaw","helpinghand","protect"],
		tier: "NFE"
	},
	nidoking: {
		randomBattleMoves: ["stealthrock","fireblast","thunderbolt","icebeam","earthpower","sludgewave","focusblast"],
		randomDoubleBattleMoves: ["helpinghand","protect","fireblast","thunderbolt","icebeam","earthpower","sludgebomb","focusblast"],
		tier: "UU"
	},
	cleffa: {
		randomBattleMoves: ["reflect","thunderwave","lightscreen","toxic","fireblast","encore","wish","protect","aromatherapy","moonblast"],
		randomDoubleBattleMoves: ["reflect","thunderwave","lightscreen","safeguard","fireblast","protect","moonblast"],
		tier: "LC"
	},
	clefairy: {
		randomBattleMoves: ["healingwish","reflect","thunderwave","lightscreen","toxic","fireblast","encore","wish","protect","aromatherapy","stealthrock","moonblast","knockoff","moonlight"],
		randomDoubleBattleMoves: ["reflect","thunderwave","lightscreen","safeguard","fireblast","followme","protect","moonblast"],
		tier: "NFE"
	},
	clefable: {
		randomBattleMoves: ["calmmind","softboiled","fireblast","thunderbolt","icebeam","moonblast"],
		randomDoubleBattleMoves: ["reflect","thunderwave","lightscreen","safeguard","fireblast","followme","protect","moonblast","softboiled"],
		tier: "OU"
	},
	vulpix: {
		randomBattleMoves: ["flamethrower","fireblast","willowisp","energyball","substitute","toxic","hypnosis","painsplit"],
		randomDoubleBattleMoves: ["heatwave","fireblast","willowisp","energyball","substitute","protect"],
		eventPokemon: [
			{"generation":3,"level":18,"moves":["tailwhip","roar","quickattack","willowisp"]},
			{"generation":3,"level":18,"moves":["charm","heatwave","ember","dig"]}
		],
		tier: "LC"
	},
	ninetales: {
		randomBattleMoves: ["flamethrower","fireblast","willowisp","solarbeam","nastyplot","substitute","toxic","painsplit"],
		randomDoubleBattleMoves: ["heatwave","fireblast","willowisp","solarbeam","substitute","protect"],
		eventPokemon: [
			{"generation":5,"level":50,"gender":"M","nature":"Bold","isHidden":true,"moves":["heatwave","solarbeam","psyshock","willowisp"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	igglybuff: {
		randomBattleMoves: ["wish","thunderwave","reflect","lightscreen","healbell","seismictoss","counter","protect","knockoff","dazzlinggleam"],
		randomDoubleBattleMoves: ["wish","thunderwave","reflect","lightscreen","seismictoss","protect","knockoff","dazzlinggleam"],
		eventPokemon: [
			{"generation":3,"level":5,"abilities":["cutecharm"],"moves":["sing","charm","defensecurl","tickle"]}
		],
		tier: "LC"
	},
	jigglypuff: {
		randomBattleMoves: ["wish","thunderwave","reflect","lightscreen","healbell","seismictoss","counter","stealthrock","protect","knockoff","dazzlinggleam"],
		randomDoubleBattleMoves: ["wish","thunderwave","reflect","lightscreen","seismictoss","protect","knockoff","dazzlinggleam"],
		tier: "NFE"
	},
	wigglytuff: {
		randomBattleMoves: ["wish","thunderwave","healbell","fireblast","stealthrock","dazzlinggleam","hypervoice"],
		randomDoubleBattleMoves: ["thunderwave","reflect","lightscreen","seismictoss","protect","knockoff","dazzlinggleam","fireblast","icebeam","hypervoice"],
		tier: "NU"
	},
	zubat: {
		randomBattleMoves: ["bravebird","roost","toxic","taunt","nastyplot","gigadrain","sludgebomb","airslash","uturn","whirlwind","heatwave","superfang"],
		randomDoubleBattleMoves: ["bravebird","taunt","nastyplot","gigadrain","sludgebomb","airslash","uturn","protect","heatwave","superfang"],
		tier: "LC"
	},
	golbat: {
		randomBattleMoves: ["bravebird","roost","toxic","taunt","nastyplot","gigadrain","sludgebomb","airslash","uturn","whirlwind","heatwave","superfang"],
		randomDoubleBattleMoves: ["bravebird","taunt","nastyplot","gigadrain","sludgebomb","airslash","uturn","protect","heatwave","superfang"],
		tier: "RU"
	},
	crobat: {
		randomBattleMoves: ["bravebird","roost","toxic","taunt","defog","uturn","superfang"],
		randomDoubleBattleMoves: ["bravebird","taunt","nastyplot","gigadrain","sludgebomb","airslash","uturn","protect","heatwave","superfang"],
		eventPokemon: [
			{"generation":4,"level":30,"gender":"M","nature":"Timid","moves":["heatwave","airslash","sludgebomb","superfang"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	oddish: {
		randomBattleMoves: ["gigadrain","sludgebomb","synthesis","sleeppowder","stunspore","toxic","hiddenpowerfire","leechseed","dazzlinggleam","sunnyday"],
		randomDoubleBattleMoves: ["gigadrain","sludgebomb","sleeppowder","stunspore","protect","hiddenpowerfire","leechseed","dazzlinggleam","sunnyday"],
		eventPokemon: [
			{"generation":3,"level":26,"moves":["poisonpowder","stunspore","sleeppowder","acid"]},
			{"generation":3,"level":5,"moves":["absorb","leechseed"]}
		],
		tier: "LC"
	},
	gloom: {
		randomBattleMoves: ["gigadrain","sludgebomb","synthesis","sleeppowder","stunspore","toxic","hiddenpowerfire","leechseed","dazzlinggleam","sunnyday"],
		randomDoubleBattleMoves: ["gigadrain","sludgebomb","sleeppowder","stunspore","protect","hiddenpowerfire","leechseed","dazzlinggleam","sunnyday"],
		eventPokemon: [
			{"generation":3,"level":50,"moves":["sleeppowder","acid","moonlight","petaldance"]}
		],
		tier: "NFE"
	},
	vileplume: {
		randomBattleMoves: ["gigadrain","sludgebomb","synthesis","sleeppowder","stunspore","toxic","hiddenpowerfire","leechseed","aromatherapy"],
		randomDoubleBattleMoves: ["gigadrain","sludgebomb","sleeppowder","stunspore","protect","hiddenpowerfire","leechseed","dazzlinggleam","sunnyday"],
		tier: "NU"
	},
	bellossom: {
		randomBattleMoves: ["gigadrain","sludgebomb","synthesis","sleeppowder","hiddenpowerfire","leafstorm","sunnyday"],
		randomDoubleBattleMoves: ["gigadrain","sludgebomb","sleeppowder","stunspore","protect","hiddenpowerfire","leechseed","dazzlinggleam","sunnyday","leafstorm"],
		tier: "NU"
	},
	paras: {
		randomBattleMoves: ["spore","stunspore","xscissor","seedbomb","synthesis","leechseed","aromatherapy","knockoff"],
		randomDoubleBattleMoves: ["spore","stunspore","xscissor","seedbomb","ragepowder","leechseed","protect","knockoff","wideguard"],
		eventPokemon: [
			{"generation":3,"level":28,"abilities":["effectspore"],"moves":["refresh","spore","slash","falseswipe"]}
		],
		tier: "LC"
	},
	parasect: {
		randomBattleMoves: ["spore","stunspore","xscissor","seedbomb","synthesis","leechseed","aromatherapy","knockoff"],
		randomDoubleBattleMoves: ["spore","stunspore","xscissor","seedbomb","ragepowder","leechseed","protect","knockoff","wideguard"],
		tier: "NU"
	},
	venonat: {
		randomBattleMoves: ["sleeppowder","morningsun","toxicspikes","sludgebomb","signalbeam","stunspore","psychic"],
		randomDoubleBattleMoves: ["sleeppowder","morningsun","ragepowder","sludgebomb","signalbeam","stunspore","psychic","protect"],
		tier: "LC"
	},
	venomoth: {
		randomBattleMoves: ["sleeppowder","roost","quiverdance","batonpass","bugbuzz","sludgebomb","substitute"],
		randomDoubleBattleMoves: ["sleeppowder","roost","ragepowder","quiverdance","protect","bugbuzz","sludgebomb","gigadrain","substitute","psychic"],
		eventPokemon: [
			{"generation":3,"level":32,"abilities":["shielddust"],"moves":["refresh","silverwind","substitute","psychic"]}
		],
		tier: "BL"
	},
	diglett: {
		randomBattleMoves: ["earthquake","rockslide","stealthrock","suckerpunch","reversal","substitute","shadowclaw"],
		randomDoubleBattleMoves: ["earthquake","rockslide","protect","suckerpunch","shadowclaw"],
		tier: "LC"
	},
	dugtrio: {
		randomBattleMoves: ["earthquake","stoneedge","stealthrock","suckerpunch","reversal","substitute"],
		randomDoubleBattleMoves: ["earthquake","rockslide","protect","suckerpunch","shadowclaw","stoneedge"],
		eventPokemon: [
			{"generation":3,"level":40,"moves":["charm","earthquake","sandstorm","triattack"]}
		],
		tier: "RU"
	},
	meowth: {
		randomBattleMoves: ["fakeout","uturn","thief","taunt","return","hypnosis"],
		randomDoubleBattleMoves: ["fakeout","uturn","nightslash","taunt","return","hypnosis","feint","protect"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["scratch","growl","petaldance"]},
			{"generation":3,"level":5,"moves":["scratch","growl"]},
			{"generation":3,"level":10,"gender":"M","moves":["scratch","growl","bite"]},
			{"generation":3,"level":22,"moves":["sing","slash","payday","bite"]},
			{"generation":4,"level":21,"gender":"F","nature":"Jolly","abilities":["pickup"],"moves":["bite","fakeout","furyswipes","screech"],"pokeball":"cherishball"},
			{"generation":4,"level":10,"gender":"M","nature":"Jolly","abilities":["pickup"],"moves":["fakeout","payday","assist","scratch"],"pokeball":"cherishball"},
			{"generation":5,"level":15,"gender":"M","isHidden":false,"abilities":["pickup"],"moves":["furyswipes","sing","nastyplot","snatch"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	persian: {
		randomBattleMoves: ["fakeout","uturn","taunt","return","knockoff"],
		randomDoubleBattleMoves: ["fakeout","uturn","nightslash","taunt","return","hypnosis","feint","protect"],
		tier: "NU"
	},
	psyduck: {
		randomBattleMoves: ["hydropump","scald","icebeam","hiddenpowergrass","crosschop","encore","psychic","signalbeam"],
		randomDoubleBattleMoves: ["hydropump","scald","icebeam","hiddenpowergrass","crosschop","encore","psychic","signalbeam","surf","icywind","protect"],
		eventPokemon: [
			{"generation":3,"level":27,"abilities":["damp"],"moves":["tailwhip","confusion","disable"]},
			{"generation":3,"level":5,"moves":["watersport","scratch","tailwhip","mudsport"]}
		],
		tier: "LC"
	},
	golduck: {
		randomBattleMoves: ["hydropump","scald","icebeam","hiddenpowergrass","encore","focusblast","calmmind"],
		randomDoubleBattleMoves: ["hydropump","scald","icebeam","hiddenpowergrass","focusblast","encore","psychic","signalbeam","surf","icywind","protect"],
		eventPokemon: [
			{"generation":3,"level":33,"moves":["charm","waterfall","psychup","brickbreak"]}
		],
		tier: "NU"
	},
	mankey: {
		randomBattleMoves: ["closecombat","uturn","icepunch","rockslide","punishment","earthquake","poisonjab"],
		randomDoubleBattleMoves: ["closecombat","uturn","icepunch","rockslide","punishment","earthquake","poisonjab","protect"],
		tier: "LC"
	},
	primeape: {
		randomBattleMoves: ["closecombat","uturn","icepunch","stoneedge","encore","earthquake"],
		randomDoubleBattleMoves: ["closecombat","uturn","icepunch","rockslide","punishment","earthquake","poisonjab","protect","taunt","stoneedge"],
		eventPokemon: [
			{"generation":3,"level":34,"abilities":["vitalspirit"],"moves":["helpinghand","crosschop","focusenergy","reversal"]}
		],
		tier: "NU"
	},
	growlithe: {
		randomBattleMoves: ["flareblitz","wildcharge","hiddenpowergrass","closecombat","morningsun","willowisp","toxic","flamethrower"],
		randomDoubleBattleMoves: ["flareblitz","wildcharge","hiddenpowergrass","closecombat","willowisp","snarl","heatwave","helpinghand","protect"],
		eventPokemon: [
			{"generation":3,"level":32,"abilities":["intimidate"],"moves":["leer","odorsleuth","takedown","flamewheel"]},
			{"generation":3,"level":10,"gender":"M","moves":["bite","roar","ember"]},
			{"generation":3,"level":28,"moves":["charm","flamethrower","bite","takedown"]}
		],
		tier: "LC"
	},
	arcanine: {
		randomBattleMoves: ["flareblitz","wildcharge","extremespeed","closecombat","morningsun","willowisp","toxic"],
		randomDoubleBattleMoves: ["flareblitz","wildcharge","hiddenpowergrass","closecombat","willowisp","snarl","heatwave","helpinghand","protect","extremespeed"],
		tier: "UU"
	},
	poliwag: {
		randomBattleMoves: ["hydropump","icebeam","encore","bellydrum","hypnosis","waterfall","return"],
		randomDoubleBattleMoves: ["hydropump","icebeam","encore","icywind","hypnosis","waterfall","return","protect","helpinghand"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["bubble","sweetkiss"]}
		],
		tier: "LC"
	},
	poliwhirl: {
		randomBattleMoves: ["hydropump","icebeam","encore","bellydrum","hypnosis","waterfall","return","earthquake"],
		randomDoubleBattleMoves: ["hydropump","icebeam","encore","icywind","hypnosis","waterfall","return","protect","helpinghand","earthquake"],
		tier: "NFE"
	},
	poliwrath: {
		randomBattleMoves: ["substitute","focuspunch","bulkup","encore","waterfall","toxic","rest","sleeptalk","protect","scald","earthquake","circlethrow"],
		randomDoubleBattleMoves: ["substitute","helpinghand","icywind","encore","waterfall","protect","icepunch","poisonjab","earthquake","brickbreak"],
		eventPokemon: [
			{"generation":3,"level":42,"moves":["helpinghand","hydropump","raindance","brickbreak"]}
		],
		tier: "NU"
	},
	politoed: {
		randomBattleMoves: ["scald","toxic","encore","perishsong","protect","icebeam","focusblast","hydropump","hiddenpowergrass"],
		randomDoubleBattleMoves: ["scald","hypnosis","icywind","encore","helpinghand","protect","icebeam","focusblast","hydropump","hiddenpowergrass"],
		eventPokemon: [
			{"generation":5,"level":50,"gender":"M","nature":"Calm","isHidden":true,"moves":["scald","icebeam","perishsong","protect"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	abra: {
		randomBattleMoves: ["calmmind","psychic","psyshock","hiddenpowerfighting","shadowball","encore","substitute"],
		randomDoubleBattleMoves: ["protect","psychic","psyshock","hiddenpowerfighting","shadowball","encore","substitute"],
		tier: "LC"
	},
	kadabra: {
		randomBattleMoves: ["calmmind","psychic","psyshock","hiddenpowerfighting","shadowball","encore","substitute"],
		randomDoubleBattleMoves: ["protect","psychic","psyshock","hiddenpowerfighting","shadowball","encore","substitute"],
		tier: "NFE"
	},
	alakazam: {
		randomBattleMoves: ["calmmind","psychic","psyshock","focusblast","shadowball","encore","substitute","dazzlinggleam"],
		randomDoubleBattleMoves: ["protect","psychic","psyshock","focusblast","shadowball","encore","substitute","energyball"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["futuresight","calmmind","psychic","trick"]}
		],
		tier: "UU"
	},
	alakazammega: {
		randomBattleMoves: ["calmmind","psychic","psyshock","focusblast","shadowball","encore","substitute","energyball"],
		randomDoubleBattleMoves: ["protect","psychic","psyshock","focusblast","shadowball","encore","substitute","energyball"],
		requiredItem: "Alakazite",
		tier: "BL"
	},
	machop: {
		randomBattleMoves: ["dynamicpunch","payback","bulkup","icepunch","rockslide","bulletpunch","knockoff"],
		randomDoubleBattleMoves: ["dynamicpunch","payback","protect","icepunch","rockslide","bulletpunch","knockoff"],
		tier: "LC"
	},
	machoke: {
		randomBattleMoves: ["dynamicpunch","payback","bulkup","icepunch","rockslide","bulletpunch","poweruppunch","knockoff"],
		randomDoubleBattleMoves: ["dynamicpunch","payback","protect","icepunch","rockslide","bulletpunch","knockoff"],
		eventPokemon: [
			{"generation":3,"level":38,"abilities":["guts"],"moves":["seismictoss","foresight","revenge","vitalthrow"]},
			{"generation":5,"level":30,"isHidden":false,"moves":["lowsweep","foresight","seismictoss","revenge"],"pokeball":"cherishball"}
		],
		tier: "NFE"
	},
	machamp: {
		randomBattleMoves: ["dynamicpunch","bulkup","icepunch","stoneedge","bulletpunch","earthquake","knockoff"],
		randomDoubleBattleMoves: ["dynamicpunch","payback","protect","icepunch","rockslide","bulletpunch","knockoff","wideguard"],
		tier: "UU"
	},
	bellsprout: {
		randomBattleMoves: ["swordsdance","sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","seedbomb"],
		randomDoubleBattleMoves: ["swordsdance","sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","seedbomb","protect"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["vinewhip","teeterdance"]},
			{"generation":3,"level":10,"gender":"M","moves":["vinewhip","growth"]}
		],
		tier: "LC"
	},
	weepinbell: {
		randomBattleMoves: ["swordsdance","sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","seedbomb","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","seedbomb","protect","knockoff"],
		eventPokemon: [
			{"generation":3,"level":32,"moves":["morningsun","magicalleaf","sludgebomb","sweetscent"]}
		],
		tier: "NFE"
	},
	victreebel: {
		randomBattleMoves: ["sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","powerwhip","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","sleeppowder","sunnyday","growth","solarbeam","gigadrain","sludgebomb","weatherball","suckerpunch","powerwhip","protect","knockoff"],
		tier: "NU"
	},
	tentacool: {
		randomBattleMoves: ["toxicspikes","rapidspin","scald","sludgebomb","icebeam","knockoff","gigadrain","toxic","dazzlinggleam"],
		randomDoubleBattleMoves: ["muddywater","scald","sludgebomb","icebeam","knockoff","gigadrain","protect","dazzlinggleam"],
		tier: "LC"
	},
	tentacruel: {
		randomBattleMoves: ["toxicspikes","rapidspin","scald","sludgebomb","icebeam","toxic","substitute"],
		randomDoubleBattleMoves: ["muddywater","scald","sludgebomb","icebeam","knockoff","gigadrain","protect","dazzlinggleam"],
		tier: "UU"
	},
	geodude: {
		randomBattleMoves: ["stealthrock","earthquake","stoneedge","suckerpunch","hammerarm","firepunch","rockblast"],
		randomDoubleBattleMoves: ["rockslide","earthquake","stoneedge","suckerpunch","hammerarm","firepunch","rockblast","protect"],
		tier: "LC"
	},
	graveler: {
		randomBattleMoves: ["stealthrock","earthquake","stoneedge","suckerpunch","hammerarm","firepunch","rockblast"],
		randomDoubleBattleMoves: ["rockslide","earthquake","stoneedge","suckerpunch","hammerarm","firepunch","rockblast","protect"],
		tier: "NFE"
	},
	golem: {
		randomBattleMoves: ["stealthrock","earthquake","stoneedge","suckerpunch","toxic","rockblast"],
		randomDoubleBattleMoves: ["rockslide","earthquake","stoneedge","suckerpunch","hammerarm","firepunch","rockblast","protect"],
		tier: "NU"
	},
	ponyta: {
		randomBattleMoves: ["flareblitz","wildcharge","morningsun","hypnosis","flamecharge"],
		randomDoubleBattleMoves: ["flareblitz","wildcharge","protect","hypnosis","flamecharge"],
		tier: "LC"
	},
	rapidash: {
		randomBattleMoves: ["flareblitz","wildcharge","morningsun","megahorn","drillrun","willowisp","sunnyday","solarbeam"],
		randomDoubleBattleMoves: ["flareblitz","wildcharge","protect","hypnosis","flamecharge","megahorn","drillrun","willowisp","sunnyday","solarbeam"],
		eventPokemon: [
			{"generation":3,"level":40,"moves":["batonpass","solarbeam","sunnyday","flamethrower"]}
		],
		tier: "NU"
	},
	slowpoke: {
		randomBattleMoves: ["scald","aquatail","zenheadbutt","thunderwave","toxic","slackoff","trickroom"],
		randomDoubleBattleMoves: ["scald","aquatail","zenheadbutt","thunderwave","slackoff","trickroom","protect"],
		eventPokemon: [
			{"generation":3,"level":31,"abilities":["oblivious"],"moves":["watergun","confusion","disable","headbutt"]},
			{"generation":3,"level":10,"gender":"M","moves":["curse","yawn","tackle","growl"]},
			{"generation":5,"level":30,"isHidden":false,"moves":["confusion","disable","headbutt","waterpulse"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	slowbro: {
		randomBattleMoves: ["scald","fireblast","icebeam","psychic","grassknot","calmmind","thunderwave","toxic","slackoff","trickroom","psyshock"],
		randomDoubleBattleMoves: ["scald","fireblast","icebeam","psychic","grassknot","thunderwave","slackoff","trickroom","protect","psyshock"],
		tier: "UU"
	},
	slowking: {
		randomBattleMoves: ["scald","fireblast","icebeam","psychic","grassknot","calmmind","thunderwave","toxic","slackoff","trickroom","nastyplot","dragontail","psyshock"],
		randomDoubleBattleMoves: ["scald","fireblast","icebeam","psychic","grassknot","thunderwave","slackoff","trickroom","protect","psyshock"],
		tier: "RU"
	},
	magnemite: {
		randomBattleMoves: ["thunderbolt","thunderwave","magnetrise","substitute","flashcannon","hiddenpowerice","voltswitch"],
		randomDoubleBattleMoves: ["thunderbolt","thunderwave","magnetrise","substitute","flashcannon","hiddenpowerice","voltswitch","protect","electroweb","discharge"],
		tier: "LC"
	},
	magneton: {
		randomBattleMoves: ["thunderbolt","thunderwave","magnetrise","substitute","flashcannon","hiddenpowerice","voltswitch","chargebeam","hiddenpowerfire"],
		randomDoubleBattleMoves: ["thunderbolt","thunderwave","magnetrise","substitute","flashcannon","hiddenpowerice","voltswitch","protect","electroweb","discharge","hiddenpowerfire"],
		eventPokemon: [
			{"generation":3,"level":30,"moves":["refresh","doubleedge","raindance","thunder"]}
		],
		tier: "RU"
	},
	magnezone: {
		randomBattleMoves: ["thunderbolt","substitute","flashcannon","hiddenpowerice","voltswitch","chargebeam","hiddenpowerfire"],
		randomDoubleBattleMoves: ["thunderbolt","thunderwave","magnetrise","substitute","flashcannon","hiddenpowerice","voltswitch","protect","electroweb","discharge","hiddenpowerfire"],
		tier: "BL"
	},
	farfetchd: {
		randomBattleMoves: ["bravebird","swordsdance","return","leafblade","roost"],
		randomDoubleBattleMoves: ["bravebird","swordsdance","return","leafblade","protect"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["yawn","wish"]},
			{"generation":3,"level":36,"moves":["batonpass","slash","swordsdance","aerialace"]}
		],
		tier: "NU"
	},
	doduo: {
		randomBattleMoves: ["bravebird","return","doubleedge","roost","quickattack","pursuit"],
		randomDoubleBattleMoves: ["bravebird","return","doubleedge","quickattack","protect"],
		tier: "LC"
	},
	dodrio: {
		randomBattleMoves: ["bravebird","return","doubleedge","roost","quickattack","knockoff"],
		randomDoubleBattleMoves: ["bravebird","return","doubleedge","quickattack","protect"],
		eventPokemon: [
			{"generation":3,"level":34,"moves":["batonpass","drillpeck","agility","triattack"]}
		],
		tier: "NU"
	},
	seel: {
		randomBattleMoves: ["surf","icebeam","aquajet","protect","rest","toxic","drillrun"],
		randomDoubleBattleMoves: ["surf","icebeam","aquajet","protect","rest","fakeout","drillrun","icywind"],
		eventPokemon: [
			{"generation":3,"level":23,"abilities":["thickfat"],"moves":["helpinghand","surf","safeguard","icebeam"]}
		],
		tier: "LC"
	},
	dewgong: {
		randomBattleMoves: ["surf","icebeam","aquajet","iceshard","toxic","drillrun","encore"],
		randomDoubleBattleMoves: ["surf","icebeam","aquajet","protect","rest","fakeout","drillrun","icywind"],
		tier: "NU"
	},
	grimer: {
		randomBattleMoves: ["curse","gunkshot","poisonjab","shadowsneak","payback","rest","icepunch","firepunch","sleeptalk","memento"],
		randomDoubleBattleMoves: ["gunkshot","poisonjab","shadowsneak","payback","protect","icepunch","firepunch"],
		eventPokemon: [
			{"generation":3,"level":23,"moves":["helpinghand","sludgebomb","shadowpunch","minimize"]}
		],
		tier: "LC"
	},
	muk: {
		randomBattleMoves: ["curse","gunkshot","shadowsneak","icepunch","firepunch","memento"],
		randomDoubleBattleMoves: ["gunkshot","poisonjab","shadowsneak","payback","protect","icepunch","firepunch","brickbreak"],
		tier: "NU"
	},
	shellder: {
		randomBattleMoves: ["shellsmash","hydropump","razorshell","rockblast","iciclespear","rapidspin"],
		randomDoubleBattleMoves: ["shellsmash","hydropump","razorshell","rockblast","iciclespear","protect"],
		eventPokemon: [
			{"generation":3,"level":24,"abilities":["shellarmor"],"moves":["withdraw","iciclespear","supersonic","aurorabeam"]},
			{"generation":3,"level":10,"gender":"M","abilities":["shellarmor"],"moves":["tackle","withdraw","iciclespear"]},
			{"generation":3,"level":29,"abilities":["shellarmor"],"moves":["refresh","takedown","surf","aurorabeam"]}
		],
		tier: "LC"
	},
	cloyster: {
		randomBattleMoves: ["shellsmash","hydropump","razorshell","rockblast","iciclespear","iceshard","rapidspin","spikes","toxicspikes"],
		randomDoubleBattleMoves: ["shellsmash","hydropump","razorshell","rockblast","iciclespear","protect"],
		eventPokemon: [
			{"generation":5,"level":30,"gender":"M","nature":"Naughty","isHidden":false,"abilities":["skilllink"],"moves":["iciclespear","rockblast","hiddenpower","razorshell"]}
		],
		tier: "UU"
	},
	gastly: {
		randomBattleMoves: ["shadowball","sludgebomb","hiddenpowerfighting","thunderbolt","substitute","disable","painsplit","hypnosis","gigadrain","trick","dazzlinggleam"],
		randomDoubleBattleMoves: ["shadowball","sludgebomb","hiddenpowerfighting","thunderbolt","substitute","disable","taunt","hypnosis","gigadrain","trick","dazzlinggleam","protect"],
		tier: "LC"
	},
	haunter: {
		randomBattleMoves: ["shadowball","sludgebomb","hiddenpowerfighting","thunderbolt","substitute","disable","painsplit","hypnosis","gigadrain","trick"],
		randomDoubleBattleMoves: ["shadowball","sludgebomb","hiddenpowerfighting","thunderbolt","substitute","disable","taunt","hypnosis","gigadrain","trick","dazzlinggleam","protect"],
		eventPokemon: [
			{"generation":3,"level":23,"moves":["spite","curse","nightshade","confuseray"]},
			{"generation":5,"level":30,"moves":["confuseray","suckerpunch","shadowpunch","payback"],"pokeball":"cherishball"}
		],
		tier: "NFE"
	},
	gengar: {
		randomBattleMoves: ["shadowball","sludgebomb","focusblast","thunderbolt","substitute","disable","painsplit"],
		randomDoubleBattleMoves: ["shadowball","sludgebomb","focusblast","thunderbolt","substitute","disable","taunt","hypnosis","gigadrain","trick","dazzlinggleam","protect"],
		eventPokemon: [
			{"generation":6,"level":25,"nature":"Timid","moves":["psychic","confuseray","suckerpunch","shadowpunch"],"pokeball":"cherishball"},
			{"generation":6,"level":25,"moves":["nightshade","confuseray","suckerpunch","shadowpunch"],"pokeball":"cherishball"},
			{"generation":6,"level":50,"moves":["shadowball","sludgebomb","willowisp","destinybond"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	gengarmega: {
		randomBattleMoves: ["shadowball","sludgebomb","focusblast","thunderbolt","substitute","disable","painsplit","hypnosis","gigadrain"],
		randomDoubleBattleMoves: ["shadowball","sludgebomb","focusblast","thunderbolt","substitute","disable","taunt","hypnosis","gigadrain","trick","dazzlinggleam","protect"],
		requiredItem: "Gengarite",
		tier: "Uber"
	},
	onix: {
		randomBattleMoves: ["stealthrock","earthquake","stoneedge","dragontail","curse"],
		randomDoubleBattleMoves: ["stealthrock","earthquake","stoneedge","rockslide","protect","explosion"],
		tier: "LC"
	},
	steelix: {
		randomBattleMoves: ["stealthrock","earthquake","ironhead","roar","toxic","rockslide"],
		randomDoubleBattleMoves: ["stealthrock","earthquake","ironhead","rockslide","protect","explosion","icefang","firefang"],
		tier: "NU"
	},
	drowzee: {
		randomBattleMoves: ["psychic","seismictoss","thunderwave","wish","protect","toxic","shadowball","trickroom","calmmind","dazzlinggleam"],
		randomDoubleBattleMoves: ["psychic","seismictoss","thunderwave","wish","protect","hypnosis","shadowball","trickroom","calmmind","dazzlinggleam","toxic"],
		eventPokemon: [
			{"generation":3,"level":5,"abilities":["insomnia"],"moves":["bellydrum","wish"]}
		],
		tier: "LC"
	},
	hypno: {
		randomBattleMoves: ["psychic","seismictoss","thunderwave","wish","protect","batonpass","toxic"],
		randomDoubleBattleMoves: ["psychic","seismictoss","thunderwave","wish","protect","hypnosis","shadowball","trickroom","calmmind","dazzlinggleam","zenheadbutt","firepunch"],
		eventPokemon: [
			{"generation":3,"level":34,"abilities":["insomnia"],"moves":["batonpass","psychic","meditate","shadowball"]}
		],
		tier: "NU"
	},
	krabby: {
		randomBattleMoves: ["crabhammer","return","swordsdance","agility","rockslide","substitute","xscissor","superpower","knockoff"],
		randomDoubleBattleMoves: ["crabhammer","return","swordsdance","agility","rockslide","substitute","xscissor","superpower","knockoff","protect"],
		tier: "LC"
	},
	kingler: {
		randomBattleMoves: ["crabhammer","return","swordsdance","agility","superpower","knockoff"],
		randomDoubleBattleMoves: ["crabhammer","return","swordsdance","agility","rockslide","substitute","xscissor","superpower","knockoff","protect","wideguard"],
		tier: "NU"
	},
	voltorb: {
		randomBattleMoves: ["voltswitch","thunderbolt","taunt","foulplay","hiddenpowerice"],
		randomDoubleBattleMoves: ["voltswitch","thunderbolt","taunt","foulplay","hiddenpowerice","protect","thunderwave"],
		eventPokemon: [
			{"generation":3,"level":19,"moves":["refresh","mirrorcoat","spark","swift"]}
		],
		tier: "LC"
	},
	electrode: {
		randomBattleMoves: ["voltswitch","thunderbolt","taunt","foulplay","hiddenpowerice"],
		randomDoubleBattleMoves: ["voltswitch","thunderbolt","taunt","foulplay","hiddenpowerice","protect","thunderwave"],
		tier: "NU"
	},
	exeggcute: {
		randomBattleMoves: ["substitute","leechseed","gigadrain","psychic","sleeppowder","stunspore","hiddenpowerfire","synthesis"],
		randomDoubleBattleMoves: ["substitute","leechseed","gigadrain","psychic","sleeppowder","stunspore","hiddenpowerfire","protect","trickroom"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["sweetscent","wish"]}
		],
		tier: "LC"
	},
	exeggutor: {
		randomBattleMoves: ["substitute","leechseed","gigadrain","leafstorm","psychic","sleeppowder","hiddenpowerfire","trickroom","psyshock"],
		randomDoubleBattleMoves: ["substitute","leechseed","gigadrain","leafstorm","psychic","sleeppowder","stunspore","hiddenpowerfire","protect","sludgebomb","trickroom","psyshock"],
		eventPokemon: [
			{"generation":3,"level":46,"moves":["refresh","psychic","hypnosis","ancientpower"]}
		],
		tier: "NU"
	},
	cubone: {
		randomBattleMoves: ["substitute","bonemerang","doubleedge","rockslide","firepunch","earthquake"],
		randomDoubleBattleMoves: ["substitute","bonemerang","doubleedge","rockslide","firepunch","earthquake","protect"],
		tier: "LC"
	},
	marowak: {
		randomBattleMoves: ["stealthrock","doubleedge","stoneedge","swordsdance","bonemerang","earthquake"],
		randomDoubleBattleMoves: ["substitute","bonemerang","doubleedge","rockslide","firepunch","earthquake","protect","swordsdance"],
		eventPokemon: [
			{"generation":3,"level":44,"moves":["sing","earthquake","swordsdance","rockslide"]}
		],
		tier: "NU"
	},
	tyrogue: {
		randomBattleMoves: ["highjumpkick","rapidspin","fakeout","bulletpunch","machpunch","toxic","counter"],
		randomDoubleBattleMoves: ["highjumpkick","feint","fakeout","bulletpunch","machpunch","helpinghand","protect"],
		tier: "LC"
	},
	hitmonlee: {
		randomBattleMoves: ["highjumpkick","suckerpunch","stoneedge","machpunch","rapidspin","knockoff"],
		randomDoubleBattleMoves: ["helpinghand","suckerpunch","stoneedge","machpunch","substitute","fakeout","closecombat","earthquake","blazekick","feint","wideguard","protect"],
		eventPokemon: [
			{"generation":3,"level":38,"abilities":["limber"],"moves":["refresh","highjumpkick","mindreader","megakick"]}
		],
		tier: "RU"
	},
	hitmonchan: {
		randomBattleMoves: ["bulkup","drainpunch","icepunch","machpunch","substitute","rapidspin"],
		randomDoubleBattleMoves: ["fakeout","drainpunch","icepunch","machpunch","substitute","earthquake","stoneedge","feint","detect","helpinghand","quickguard"],
		eventPokemon: [
			{"generation":3,"level":38,"abilities":["keeneye"],"moves":["helpinghand","skyuppercut","mindreader","megapunch"]}
		],
		tier: "RU"
	},
	hitmontop: {
		randomBattleMoves: ["suckerpunch","machpunch","rapidspin","closecombat","toxic"],
		randomDoubleBattleMoves: ["fakeout","feint","suckerpunch","closecombat","helpinghand","machpunch","wideguard","quickguard"],
		eventPokemon: [
			{"generation":5,"level":55,"gender":"M","nature":"Adamant","isHidden":false,"abilities":["intimidate"],"moves":["fakeout","closecombat","suckerpunch","helpinghand"]}
		],
		tier: "RU"
	},
	lickitung: {
		randomBattleMoves: ["wish","protect","dragontail","curse","bodyslam","return","powerwhip","swordsdance","earthquake","toxic","healbell"],
		randomDoubleBattleMoves: ["wish","protect","dragontail","knockoff","bodyslam","return","powerwhip","swordsdance","earthquake","toxic","healbell"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["healbell","wish"]},
			{"generation":3,"level":38,"moves":["helpinghand","doubleedge","defensecurl","rollout"]}
		],
		tier: "LC"
	},
	lickilicky: {
		randomBattleMoves: ["wish","protect","dragontail","bodyslam","return","powerwhip","swordsdance","earthquake","toxic","healbell","explosion","knockoff"],
		randomDoubleBattleMoves: ["wish","protect","dragontail","knockoff","bodyslam","return","powerwhip","swordsdance","earthquake","toxic","healbell","explosion"],
		tier: "NU"
	},
	koffing: {
		randomBattleMoves: ["painsplit","sludgebomb","willowisp","fireblast","toxic","clearsmog","rest","sleeptalk","thunderbolt"],
		randomDoubleBattleMoves: ["protect","sludgebomb","willowisp","fireblast","toxic","rest","sleeptalk","thunderbolt"],
		tier: "LC"
	},
	weezing: {
		randomBattleMoves: ["painsplit","sludgebomb","willowisp","fireblast","toxic","clearsmog"],
		randomDoubleBattleMoves: ["protect","sludgebomb","willowisp","fireblast","toxic","rest","sleeptalk","thunderbolt","explosion"],
		tier: "NU"
	},
	rhyhorn: {
		randomBattleMoves: ["stoneedge","earthquake","aquatail","megahorn","stealthrock","rockblast","rockpolish"],
		randomDoubleBattleMoves: ["stoneedge","earthquake","aquatail","megahorn","stealthrock","rockslide","protect"],
		tier: "LC"
	},
	rhydon: {
		randomBattleMoves: ["stoneedge","earthquake","aquatail","megahorn","stealthrock","rockblast","rockpolish"],
		randomDoubleBattleMoves: ["stoneedge","earthquake","aquatail","megahorn","stealthrock","rockslide","protect"],
		eventPokemon: [
			{"generation":3,"level":46,"moves":["helpinghand","megahorn","scaryface","earthquake"]}
		],
		tier: "NFE"
	},
	rhyperior: {
		randomBattleMoves: ["stoneedge","earthquake","aquatail","megahorn","stealthrock","rockblast","rockpolish","dragontail","protect"],
		randomDoubleBattleMoves: ["stoneedge","earthquake","aquatail","megahorn","stealthrock","rockslide","protect"],
		tier: "RU"
	},
	happiny: {
		randomBattleMoves: ["aromatherapy","toxic","thunderwave","counter","endeavor","lightscreen","fireblast"],
		randomDoubleBattleMoves: ["aromatherapy","toxic","thunderwave","helpinghand","swagger","lightscreen","fireblast","protect"],
		tier: "LC"
	},
	chansey: {
		randomBattleMoves: ["wish","softboiled","protect","toxic","aromatherapy","seismictoss","counter","thunderwave","stealthrock","fireblast","icebeam"],
		randomDoubleBattleMoves: ["aromatherapy","toxic","thunderwave","helpinghand","softboiled","lightscreen","seismictoss","protect","wish"],
		eventPokemon: [
			{"generation":3,"level":5,"gender":"F","moves":["sweetscent","wish"]},
			{"generation":3,"level":10,"gender":"F","moves":["pound","growl","tailwhip","refresh"]},
			{"generation":3,"level":39,"gender":"F","moves":["sweetkiss","thunderbolt","softboiled","skillswap"]}
		],
		tier: "OU"
	},
	blissey: {
		randomBattleMoves: ["wish","softboiled","protect","toxic","healbell","seismictoss","counter","thunderwave","stealthrock","flamethrower","icebeam"],
		randomDoubleBattleMoves: ["wish","softboiled","protect","toxic","aromatherapy","seismictoss","helpinghand","thunderwave","flamethrower","icebeam"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"F","isHidden":true,"moves":["pound","growl","tailwhip","refresh"]}
		],
		tier: "UU"
	},
	tangela: {
		randomBattleMoves: ["gigadrain","sleeppowder","hiddenpowerrock","hiddenpowerice","leechseed","knockoff","leafstorm","stunspore","synthesis"],
		randomDoubleBattleMoves: ["gigadrain","sleeppowder","hiddenpowerrock","hiddenpowerice","leechseed","knockoff","leafstorm","stunspore","protect","hiddenpowerfire"],
		eventPokemon: [
			{"generation":3,"level":30,"abilities":["chlorophyll"],"moves":["morningsun","solarbeam","sunnyday","ingrain"]}
		],
		tier: "LC Uber"
	},
	tangrowth: {
		randomBattleMoves: ["gigadrain","sleeppowder","hiddenpowerice","leechseed","knockoff","leafstorm","focusblast","synthesis","powerwhip","earthquake"],
		randomDoubleBattleMoves: ["gigadrain","sleeppowder","hiddenpowerice","leechseed","knockoff","leafstorm","stunspore","focusblast","protect","powerwhip","earthquake"],
		tier: "RU"
	},
	kangaskhan: {
		randomBattleMoves: ["return","suckerpunch","earthquake","poweruppunch","crunch"],
		randomDoubleBattleMoves: ["fakeout","return","suckerpunch","earthquake","facade","poweruppunch","crunch"],
		eventPokemon: [
			{"generation":3,"level":5,"gender":"F","abilities":["earlybird"],"moves":["yawn","wish"]},
			{"generation":3,"level":10,"gender":"F","abilities":["earlybird"],"moves":["cometpunch","leer","bite"]},
			{"generation":3,"level":36,"gender":"F","abilities":["earlybird"],"moves":["sing","earthquake","tailwhip","dizzypunch"]},
			{"generation":6,"level":50,"gender":"F","isHidden":false,"abilities":["scrappy"],"moves":["fakeout","return","earthquake","suckerpunch"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	kangaskhanmega: {
		randomBattleMoves: ["fakeout","return","suckerpunch","earthquake","wish","poweruppunch","crunch"],
		randomDoubleBattleMoves: ["fakeout","return","suckerpunch","earthquake","facade","poweruppunch","crunch"],
		requiredItem: "Kangaskhanite",
		tier: "Uber"
	},
	horsea: {
		randomBattleMoves: ["hydropump","icebeam","substitute","hiddenpowergrass","raindance"],
		randomDoubleBattleMoves: ["hydropump","icebeam","substitute","hiddenpowergrass","raindance","muddywater","protect"],
		eventPokemon: [
			{"generation":5,"level":1,"shiny":true,"isHidden":false,"moves":["bubble"]}
		],
		tier: "LC"
	},
	seadra: {
		randomBattleMoves: ["hydropump","icebeam","agility","substitute","hiddenpowergrass"],
		randomDoubleBattleMoves: ["hydropump","icebeam","substitute","hiddenpowergrass","agility","muddywater","protect"],
		eventPokemon: [
			{"generation":3,"level":45,"abilities":["poisonpoint"],"moves":["leer","watergun","twister","agility"]}
		],
		tier: "NFE"
	},
	kingdra: {
		randomBattleMoves: ["hydropump","dragondance","substitute","outrage","dracometeor","waterfall","dragonpulse","surf"],
		randomDoubleBattleMoves: ["hydropump","icebeam","dragondance","substitute","outrage","dracometeor","waterfall","dragonpulse","muddywater","protect"],
		eventPokemon: [
			{"generation":3,"level":50,"abilities":["swiftswim"],"moves":["leer","watergun","twister","agility"]},
			{"generation":5,"level":50,"gender":"M","nature":"Timid","isHidden":false,"abilities":["swiftswim"],"moves":["dracometeor","muddywater","dragonpulse","protect"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	goldeen: {
		randomBattleMoves: ["raindance","waterfall","megahorn","return","drillrun","icebeam"],
		randomDoubleBattleMoves: ["raindance","waterfall","megahorn","return","drillrun","icebeam","protect"],
		tier: "LC"
	},
	seaking: {
		randomBattleMoves: ["raindance","waterfall","megahorn","return","drillrun","icebeam"],
		randomDoubleBattleMoves: ["raindance","waterfall","megahorn","return","drillrun","icebeam","protect"],
		tier: "NU"
	},
	staryu: {
		randomBattleMoves: ["scald","thunderbolt","icebeam","rapidspin","recover","dazzlinggleam","hydropump"],
		randomDoubleBattleMoves: ["scald","thunderbolt","icebeam","protect","recover","dazzlinggleam","hydropump"],
		eventPokemon: [
			{"generation":3,"level":50,"moves":["minimize","lightscreen","cosmicpower","hydropump"]},
			{"generation":3,"level":18,"abilities":["illuminate"],"moves":["tackle","watergun","rapidspin","recover"]}
		],
		tier: "LC"
	},
	starmie: {
		randomBattleMoves: ["surf","thunderbolt","icebeam","rapidspin","recover","psyshock","scald","hydropump"],
		randomDoubleBattleMoves: ["surf","thunderbolt","icebeam","protect","recover","psychic","psyshock","scald","hydropump"],
		eventPokemon: [
			{"generation":3,"level":41,"moves":["refresh","waterfall","icebeam","recover"]}
		],
		tier: "UU"
	},
	mimejr: {
		randomBattleMoves: ["substitute","batonpass","psychic","thunderwave","hiddenpowerfighting","healingwish","nastyplot","thunderbolt","encore"],
		randomDoubleBattleMoves: ["substitute","fakeout","psychic","thunderwave","hiddenpowerfighting","healingwish","nastyplot","thunderbolt","encore","icywind","protect"],
		tier: "LC"
	},
	mrmime: {
		randomBattleMoves: ["substitute","batonpass","psychic","hiddenpowerfighting","healingwish","nastyplot","thunderbolt","encore","dazzlinggleam"],
		randomDoubleBattleMoves: ["substitute","fakeout","psychic","thunderwave","hiddenpowerfighting","healingwish","nastyplot","thunderbolt","encore","icywind","protect","dazzlinggleam"],
		eventPokemon: [
			{"generation":3,"level":42,"abilities":["soundproof"],"moves":["followme","psychic","encore","thunderpunch"]}
		],
		tier: "NU"
	},
	scyther: {
		randomBattleMoves: ["swordsdance","roost","bugbite","quickattack","brickbreak","aerialace","batonpass","uturn","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","protect","bugbite","quickattack","brickbreak","aerialace","feint","uturn","knockoff"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["swarm"],"moves":["quickattack","leer","focusenergy"]},
			{"generation":3,"level":40,"abilities":["swarm"],"moves":["morningsun","razorwind","silverwind","slash"]},
			{"generation":5,"level":30,"isHidden":false,"moves":["agility","wingattack","furycutter","slash"],"pokeball":"cherishball"}
		],
		tier: "LC Uber"
	},
	scizor: {
		randomBattleMoves: ["swordsdance","roost","bulletpunch","bugbite","superpower","uturn","pursuit","defog","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","roost","bulletpunch","bugbite","superpower","uturn","protect","feint","knockoff"],
		eventPokemon: [
			{"generation":3,"level":50,"gender":"M","abilities":["swarm"],"moves":["furycutter","metalclaw","swordsdance","slash"]},
			{"generation":4,"level":50,"gender":"M","nature":"Adamant","abilities":["swarm"],"moves":["xscissor","swordsdance","irondefense","agility"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"gender":"M","isHidden":false,"abilities":["technician"],"moves":["bulletpunch","bugbite","roost","swordsdance"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["leer","focusenergy","pursuit","steelwing"]},
			{"generation":6,"level":50,"gender":"M","isHidden":false,"moves":["xscissor","nightslash","doublehit","ironhead"],"pokeball":"cherishball"},
			{"generation":6,"level":25,"nature":"Adamant","isHidden":false,"abilities":["technician"],"moves":["aerialace","falseswipe","agility","furycutter"],"pokeball":"cherishball"},
			{"generation":6,"level":25,"isHidden":false,"moves":["metalclaw","falseswipe","agility","furycutter"],"pokeball":"cherishball"},
			{"generation":6,"level":50,"isHidden":false,"abilities":["technician"],"moves":["bulletpunch","swordsdance","roost","uturn"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	scizormega: {
		randomBattleMoves: ["swordsdance","roost","bulletpunch","bugbite","superpower","uturn","batonpass","pursuit","defog","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","roost","bulletpunch","bugbite","superpower","uturn","protect","feint","knockoff"],
		requiredItem: "Scizorite"
	},
	smoochum: {
		randomBattleMoves: ["icebeam","psychic","hiddenpowerfighting","trick","shadowball","grassknot"],
		randomDoubleBattleMoves: ["icebeam","psychic","hiddenpowerfighting","trick","shadowball","grassknot","fakeout","protect"],
		tier: "LC"
	},
	jynx: {
		randomBattleMoves: ["icebeam","psychic","focusblast","trick","nastyplot","lovelykiss","substitute","psyshock"],
		randomDoubleBattleMoves: ["icebeam","psychic","hiddenpowerfighting","trick","shadowball","grassknot","fakeout","protect","lovelykiss","substitute","psyshock"],
		tier: "NU"
	},
	elekid: {
		randomBattleMoves: ["thunderbolt","crosschop","voltswitch","substitute","icepunch","psychic","hiddenpowergrass"],
		randomDoubleBattleMoves: ["thunderbolt","crosschop","voltswitch","substitute","icepunch","psychic","hiddenpowergrass","feint","protect"],
		eventPokemon: [
			{"generation":3,"level":20,"moves":["icepunch","firepunch","thunderpunch","crosschop"]}
		],
		tier: "LC"
	},
	electabuzz: {
		randomBattleMoves: ["thunderbolt","voltswitch","substitute","hiddenpowerice","hiddenpowergrass","focusblast","psychic"],
		randomDoubleBattleMoves: ["thunderbolt","crosschop","voltswitch","substitute","icepunch","psychic","hiddenpowergrass","feint","protect","focusblast","discharge"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["quickattack","leer","thunderpunch"]},
			{"generation":3,"level":43,"moves":["followme","crosschop","thunderwave","thunderbolt"]},
			{"generation":4,"level":30,"gender":"M","nature":"Naughty","moves":["lowkick","shockwave","lightscreen","thunderpunch"]},
			{"generation":5,"level":30,"isHidden":false,"moves":["lowkick","swift","shockwave","lightscreen"],"pokeball":"cherishball"},
			{"generation":6,"level":30,"gender":"M","isHidden":true,"moves":["lowkick","shockwave","lightscreen","thunderpunch"],"pokeball":"cherishball"}
		],
		tier: "NFE"
	},
	electivire: {
		randomBattleMoves: ["wildcharge","crosschop","icepunch","flamethrower","earthquake"],
		randomDoubleBattleMoves: ["wildcharge","crosschop","icepunch","substitute","flamethrower","earthquake","feint","protect","discharge"],
		eventPokemon: [
			{"generation":4,"level":50,"gender":"M","nature":"Adamant","moves":["thunderpunch","icepunch","crosschop","earthquake"]},
			{"generation":4,"level":50,"gender":"M","nature":"Serious","moves":["lightscreen","thunderpunch","discharge","thunderbolt"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	magby: {
		randomBattleMoves: ["flareblitz","substitute","fireblast","hiddenpowergrass","hiddenpowerice","crosschop","thunderpunch","overheat"],
		tier: "LC"
	},
	magmar: {
		randomBattleMoves: ["flareblitz","substitute","fireblast","hiddenpowergrass","hiddenpowerice","crosschop","thunderpunch","focusblast"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["leer","smog","firepunch","leer"]},
			{"generation":3,"level":36,"moves":["followme","fireblast","crosschop","thunderpunch"]},
			{"generation":4,"level":30,"gender":"M","nature":"Quiet","moves":["smokescreen","firespin","confuseray","firepunch"]},
			{"generation":5,"level":30,"isHidden":false,"moves":["smokescreen","feintattack","firespin","confuseray"],"pokeball":"cherishball"},
			{"generation":6,"level":30,"gender":"M","isHidden":true,"moves":["smokescreen","firespin","confuseray","firepunch"],"pokeball":"cherishball"}
		],
		tier: "NFE"
	},
	magmortar: {
		randomBattleMoves: ["fireblast","focusblast","hiddenpowergrass","hiddenpowerice","thunderbolt","earthquake","willowisp"],
		randomDoubleBattleMoves: ["fireblast","substitute","focusblast","hiddenpowergrass","hiddenpowerice","thunderbolt","lavaplume","willowisp","protect"],
		eventPokemon: [
			{"generation":4,"level":50,"gender":"F","nature":"Modest","moves":["flamethrower","psychic","hyperbeam","solarbeam"]},
			{"generation":4,"level":50,"gender":"M","nature":"Hardy","moves":["confuseray","firepunch","lavaplume","flamethrower"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	pinsir: {
		randomBattleMoves: ["swordsdance","earthquake","xscissor","quickattack","return"],
		randomDoubleBattleMoves: ["feint","protect","swordsdance","xscissor","earthquake","closecombat","stealthrock","substitute","stoneedge","quickattack","return"],
		eventPokemon: [
			{"generation":3,"level":35,"abilities":["hypercutter"],"moves":["helpinghand","guillotine","falseswipe","submission"]}
		],
		tier: "OU"
	},
	pinsirmega: {
		randomBattleMoves: ["swordsdance","xscissor","earthquake","closecombat","stealthrock","substitute","stoneedge","quickattack","return"],
		randomDoubleBattleMoves: ["feint","protect","swordsdance","xscissor","earthquake","closecombat","stealthrock","substitute","stoneedge","quickattack","return"],
		requiredItem: "Pinsirite"
	},
	tauros: {
		randomBattleMoves: ["rockclimb","earthquake","zenheadbutt","rockslide","pursuit","doubleedge"],
		randomDoubleBattleMoves: ["rockclimb","earthquake","zenheadbutt","rockslide","protect","doubleedge"],
		eventPokemon: [
			{"generation":3,"level":25,"gender":"M","abilities":["intimidate"],"moves":["rage","hornattack","scaryface","pursuit"]},
			{"generation":3,"level":10,"gender":"M","abilities":["intimidate"],"moves":["tackle","tailwhip","rage","hornattack"]},
			{"generation":3,"level":46,"gender":"M","abilities":["intimidate"],"moves":["refresh","earthquake","tailwhip","bodyslam"]}
		],
		tier: "NU"
	},
	magikarp: {
		randomBattleMoves: ["bounce","flail","tackle","hydropump"],
		eventPokemon: [
			{"generation":4,"level":5,"gender":"M","nature":"Relaxed","moves":["splash"]},
			{"generation":4,"level":6,"gender":"F","nature":"Rash","moves":["splash"]},
			{"generation":4,"level":7,"gender":"F","nature":"Hardy","moves":["splash"]},
			{"generation":4,"level":5,"gender":"F","nature":"Lonely","moves":["splash"]},
			{"generation":4,"level":4,"gender":"M","nature":"Modest","moves":["splash"]},
			{"generation":5,"level":99,"shiny":true,"gender":"M","isHidden":false,"moves":["flail","hydropump","bounce","splash"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	gyarados: {
		randomBattleMoves: ["dragondance","waterfall","earthquake","stoneedge","substitute","icefang","taunt"],
		randomDoubleBattleMoves: ["dragondance","waterfall","earthquake","bounce","taunt","protect","thunderwave","stoneedge","substitute","icefang"],
		eventPokemon: [
			{"generation":6,"level":50,"isHidden":false,"moves":["waterfall","earthquake","icefang","dragondance"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	gyaradosmega: {
		randomBattleMoves: ["dragondance","waterfall","earthquake","bounce","rest","sleeptalk","dragontail","stoneedge","substitute","icefang"],
		randomDoubleBattleMoves: ["dragondance","waterfall","earthquake","bounce","taunt","protect","thunderwave","stoneedge","substitute","icefang"],
		requiredItem: "Gyaradosite"
	},
	lapras: {
		randomBattleMoves: ["icebeam","thunderbolt","healbell","toxic","surf","rest","sleeptalk"],
		randomDoubleBattleMoves: ["icebeam","thunderbolt","healbell","toxic","surf","dragondance","substitute","waterfall","return","avalanche","protect","iceshard"],
		eventPokemon: [
			{"generation":3,"level":44,"moves":["hydropump","raindance","blizzard","healbell"]}
		],
		tier: "NU"
	},
	ditto: {
		randomBattleMoves: ["transform"],
		tier: "NU"
	},
	eevee: {
		randomBattleMoves: ["quickattack","return","bite","batonpass","irontail","yawn","protect","wish"],
		randomDoubleBattleMoves: ["quickattack","return","bite","helpinghand","irontail","yawn","protect","wish"],
		eventPokemon: [
			{"generation":4,"level":10,"gender":"F","nature":"Lonely","abilities":["adaptability"],"moves":["covet","bite","helpinghand","attract"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"shiny":true,"gender":"M","nature":"Hardy","abilities":["adaptability"],"moves":["irontail","trumpcard","flail","quickattack"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"gender":"F","nature":"Hardy","isHidden":false,"abilities":["adaptability"],"moves":["sing","return","echoedvoice","attract"],"pokeball":"cherishball"},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","sandattack","babydolleyes","swift"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	vaporeon: {
		randomBattleMoves: ["wish","protect","scald","roar","icebeam","toxic"],
		randomDoubleBattleMoves: ["helpinghand","wish","protect","scald","muddywater","icebeam","toxic","hydropump"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","watergun"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	jolteon: {
		randomBattleMoves: ["thunderbolt","voltswitch","hiddenpowerice","batonpass","substitute","signalbeam"],
		randomDoubleBattleMoves: ["thunderbolt","voltswitch","hiddenpowergrass","hiddenpowerice","helpinghand","protect","substitute","signalbeam"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","thundershock"],"pokeball":"cherishball"}
		],
		tier: "RU"
	},
	flareon: {
		randomBattleMoves: ["flamecharge","facade","flareblitz","superpower","wish","protect","toxic"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","ember"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	espeon: {
		randomBattleMoves: ["psychic","psyshock","substitute","wish","shadowball","calmmind","morningsun","batonpass","dazzlinggleam"],
		randomDoubleBattleMoves: ["psychic","psyshock","substitute","wish","shadowball","hiddenpowerfighting","helpinghand","protect","dazzlinggleam"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["psybeam","psychup","psychic","morningsun"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","confusion"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	umbreon: {
		randomBattleMoves: ["wish","protect","healbell","toxic","batonpass","foulplay"],
		randomDoubleBattleMoves: ["curse","moonlight","wish","protect","healbell","toxic","batonpass","foulplay","helpinghand"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["feintattack","meanlook","screech","moonlight"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","pursuit"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	leafeon: {
		randomBattleMoves: ["swordsdance","leafblade","substitute","return","xscissor","synthesis","roar","healbell","batonpass","knockoff"],
		randomDoubleBattleMoves: ["swordsdance","leafblade","substitute","return","xscissor","protect","helpinghand","knockoff"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","razorleaf"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	glaceon: {
		randomBattleMoves: ["icebeam","hiddenpowerground","shadowball","wish","protect","healbell","batonpass"],
		randomDoubleBattleMoves: ["icebeam","hiddenpowerground","shadowball","wish","protect","healbell","helpinghand"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tailwhip","tackle","helpinghand","sandattack"]},
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","tailwhip","sandattack","icywind"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	porygon: {
		randomBattleMoves: ["triattack","icebeam","recover","toxic","thunderwave","discharge","trick"],
		eventPokemon: [
			{"generation":5,"level":10,"isHidden":true,"moves":["tackle","conversion","sharpen","psybeam"]}
		],
		tier: "LC"
	},
	porygon2: {
		randomBattleMoves: ["triattack","icebeam","recover","toxic","thunderwave","discharge","trick","shadowball","trickroom"],
		tier: "UU"
	},
	porygonz: {
		randomBattleMoves: ["triattack","darkpulse","icebeam","thunderbolt","agility","trick","nastyplot"],
		randomDoubleBattleMoves: ["protect","triattack","darkpulse","hiddenpowerfighting","agility","trick","nastyplot"],
		tier: "UU"
	},
	omanyte: {
		randomBattleMoves: ["shellsmash","surf","icebeam","earthpower","hiddenpowerelectric","spikes","toxicspikes","stealthrock","hydropump"],
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"abilities":["swiftswim"],"moves":["bubblebeam","supersonic","withdraw","bite"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	omastar: {
		randomBattleMoves: ["shellsmash","surf","icebeam","earthpower","spikes","toxicspikes","stealthrock","hydropump"],
		randomDoubleBattleMoves: ["shellsmash","muddywater","icebeam","earthpower","hiddenpowerelectric","protect","toxicspikes","stealthrock","hydropump"],
		tier: "NU"
	},
	kabuto: {
		randomBattleMoves: ["aquajet","rockslide","rapidspin","stealthrock","honeclaws","waterfall","toxic"],
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"abilities":["battlearmor"],"moves":["confuseray","dig","scratch","harden"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	kabutops: {
		randomBattleMoves: ["aquajet","stoneedge","rapidspin","swordsdance","waterfall","knockoff"],
		randomDoubleBattleMoves: ["aquajet","stoneedge","protect","rockslide","swordsdance","waterfall","superpower","feint"],
		tier: "RU"
	},
	aerodactyl: {
		randomBattleMoves: ["stealthrock","taunt","stoneedge","earthquake","aquatail","roost","aerialace","defog"],
		randomDoubleBattleMoves: ["wideguard","taunt","stoneedge","rockslide","earthquake","aquatail","firefang","protect","icefang","skydrop","tailwind"],
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"abilities":["pressure"],"moves":["steelwing","icefang","firefang","thunderfang"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	aerodactylmega: {
		randomBattleMoves: ["stealthrock","taunt","stoneedge","rockslide","earthquake","aquatail","roost","firefang","defog","icefang"],
		randomDoubleBattleMoves: ["wideguard","taunt","stoneedge","rockslide","earthquake","aquatail","firefang","protect","icefang","skydrop","tailwind"],
		requiredItem: "Aerodactylite"
	},
	munchlax: {
		randomBattleMoves: ["rest","curse","sleeptalk","bodyslam","earthquake","return","firepunch","icepunch","whirlwind","toxic"],
		tier: "LC"
	},
	snorlax: {
		randomBattleMoves: ["rest","curse","sleeptalk","bodyslam","earthquake","return","firepunch","crunch","pursuit","whirlwind"],
		randomDoubleBattleMoves: ["curse","protect","bodyslam","earthquake","return","firepunch","icepunch","crunch","selfdestruct"],
		eventPokemon: [
			{"generation":3,"level":43,"moves":["refresh","fissure","curse","bodyslam"]}
		],
		tier: "UU"
	},
	articuno: {
		randomBattleMoves: ["icebeam","roost","freezedry","toxic","substitute","hurricane"],
		randomDoubleBattleMoves: ["icebeam","roost","protect","blizzard","skydrop","substitute","hurricane","tailwind"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["agility","mindreader","icebeam","reflect"]},
			{"generation":3,"level":50,"moves":["icebeam","healbell","extrasensory","haze"]}
		],
		unreleasedHidden: true,
		tier: "NU"
	},
	zapdos: {
		randomBattleMoves: ["thunderbolt","heatwave","hiddenpowergrass","hiddenpowerice","roost","toxic","substitute","defog"],
		randomDoubleBattleMoves: ["thunderbolt","heatwave","hiddenpowergrass","hiddenpowerice","tailwind","protect","skydrop"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["agility","detect","drillpeck","charge"]},
			{"generation":3,"level":50,"moves":["thunderbolt","extrasensory","batonpass","metalsound"]}
		],
		unreleasedHidden: true,
		tier: "OU"
	},
	moltres: {
		randomBattleMoves: ["fireblast","hiddenpowergrass","roost","substitute","toxic","uturn","willowisp","hurricane"],
		randomDoubleBattleMoves: ["fireblast","hiddenpowergrass","airslash","roost","substitute","protect","uturn","willowisp","hurricane","heatwave","skydrop","tailwind"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["agility","endure","flamethrower","safeguard"]},
			{"generation":3,"level":50,"moves":["extrasensory","morningsun","willowisp","flamethrower"]}
		],
		unreleasedHidden: true,
		tier: "RU"
	},
	dratini: {
		randomBattleMoves: ["dragondance","outrage","waterfall","fireblast","extremespeed","dracometeor","substitute","aquatail"],
		tier: "LC"
	},
	dragonair: {
		randomBattleMoves: ["dragondance","outrage","waterfall","fireblast","extremespeed","dracometeor","substitute","aquatail"],
		tier: "NFE"
	},
	dragonite: {
		randomBattleMoves: ["dragondance","outrage","firepunch","extremespeed","dragonclaw","earthquake","roost","substitute"],
		randomDoubleBattleMoves: ["firepunch","extremespeed","dragonclaw","earthquake","roost","waterfall","substitute","thunderwave","hurricane","superpower","dracometeor","protect","skydrop"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["agility","safeguard","wingattack","outrage"]},
			{"generation":3,"level":55,"moves":["healbell","hyperbeam","dragondance","earthquake"]},
			{"generation":4,"level":50,"gender":"M","nature":"Mild","moves":["dracometeor","thunderbolt","outrage","dragondance"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"gender":"M","isHidden":true,"moves":["extremespeed","firepunch","dragondance","outrage"],"pokeball":"cherishball"},
			{"generation":5,"level":55,"gender":"M","isHidden":true,"moves":["dragonrush","safeguard","wingattack","thunderpunch"]},
			{"generation":5,"level":55,"gender":"M","isHidden":true,"moves":["dragonrush","safeguard","wingattack","extremespeed"]},
			{"generation":5,"level":50,"gender":"M","nature":"Brave","isHidden":false,"abilities":["innerfocus"],"moves":["fireblast","safeguard","outrage","hyperbeam"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	mewtwo: {
		randomBattleMoves: ["psystrike","aurasphere","fireblast","icebeam","calmmind","substitute","recover","thunderbolt","willowisp"],
		randomDoubleBattleMoves: ["psystrike","aurasphere","fireblast","icebeam","calmmind","substitute","recover","thunderbolt","willowisp","taunt","protect"],
		eventPokemon: [
			{"generation":5,"level":70,"isHidden":false,"moves":["psystrike","shadowball","aurasphere","electroball"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"nature":"Timid","isHidden":true,"moves":["psystrike","icebeam","healpulse","hurricane"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	mewtwomegax: {
		randomBattleMoves: ["bulkup","drainpunch","earthquake","firepunch","icepunch","irontail","recover","stoneedge","substitute","thunderpunch","zenheadbutt"],
		requiredItem: "Mewtwonite X"
	},
	mewtwomegay: {
		randomBattleMoves: ["psystrike","aurasphere","fireblast","icebeam","calmmind","substitute","recover","thunderbolt","willowisp"],
		requiredItem: "Mewtwonite Y"
	},
	mew: {
		randomBattleMoves: ["taunt","willowisp","roost","psychic","nastyplot","aurasphere","fireblast","swordsdance","drainpunch","zenheadbutt","batonpass","substitute","toxic","icebeam","thunderbolt","knockoff","stealthrock","suckerpunch","defog"],
		randomDoubleBattleMoves: ["taunt","willowisp","transform","roost","psyshock","nastyplot","aurasphere","fireblast","swordsdance","drainpunch","zenheadbutt","icebeam","thunderbolt","earthquake","suckerpunch","protect","fakeout","helpinghand","tailwind"],
		eventPokemon: [
			{"generation":3,"level":30,"moves":["pound","transform","megapunch","metronome"]},
			{"generation":3,"level":10,"moves":["pound","transform"]},
			{"generation":4,"level":50,"moves":["ancientpower","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["barrier","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["megapunch","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["amnesia","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["transform","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["psychic","metronome","teleport","aurasphere"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["synthesis","return","hypnosis","teleport"],"pokeball":"cherishball"},
			{"generation":4,"level":5,"moves":["pound"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	chikorita: {
		randomBattleMoves: ["reflect","lightscreen","aromatherapy","grasswhistle","leechseed","toxic","gigadrain","synthesis"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","growl","razorleaf"]}
		],
		unreleasedHidden: true,
		tier: "LC"
	},
	bayleef: {
		randomBattleMoves: ["reflect","lightscreen","aromatherapy","grasswhistle","leechseed","toxic","gigadrain","synthesis"],
		unreleasedHidden: true,
		tier: "NFE"
	},
	meganium: {
		randomBattleMoves: ["reflect","lightscreen","aromatherapy","leechseed","toxic","gigadrain","synthesis","dragontail"],
		randomDoubleBattleMoves: ["reflect","lightscreen","aromatherapy","leechseed","hiddenpowerfire","gigadrain","synthesis","dragontail", "healpulse", "grassyterrain", "protect"],
		unreleasedHidden: true,
		tier: "NU"
	},
	cyndaquil: {
		randomBattleMoves: ["eruption","fireblast","flamethrower","hiddenpowergrass","hiddenpowerice"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","leer","smokescreen"]}
		],
		unreleasedHidden: true,
		tier: "LC"
	},
	quilava: {
		randomBattleMoves: ["eruption","fireblast","flamethrower","hiddenpowergrass","hiddenpowerice"],
		unreleasedHidden: true,
		tier: "NFE"
	},
	typhlosion: {
		randomBattleMoves: ["eruption","fireblast","hiddenpowergrass","hiddenpowerice","focusblast"],
		randomDoubleBattleMoves: ["eruption","fireblast","hiddenpowergrass","hiddenpowerice","focusblast","heatwave","protect"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["quickattack","flamewheel","swift","flamethrower"]}
		],
		unreleasedHidden: true,
		tier: "NU"
	},
	totodile: {
		randomBattleMoves: ["aquajet","waterfall","crunch","icepunch","superpower","dragondance","swordsdance"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["scratch","leer","rage"]}
		],
		unreleasedHidden: true,
		tier: "LC"
	},
	croconaw: {
		randomBattleMoves: ["aquajet","waterfall","crunch","icepunch","superpower","dragondance","swordsdance"],
		unreleasedHidden: true,
		tier: "NFE"
	},
	feraligatr: {
		randomBattleMoves: ["aquajet","waterfall","crunch","icepunch","dragondance","swordsdance","earthquake"],
		randomDoubleBattleMoves: ["aquajet","waterfall","crunch","icepunch","dragondance","swordsdance","earthquake","protect"],
		unreleasedHidden: true,
		tier: "NU"
	},
	sentret: {
		randomBattleMoves: ["superfang","trick","toxic","uturn","knockoff"],
		tier: "LC"
	},
	furret: {
		randomBattleMoves: ["uturn","suckerpunch","trick","icepunch","firepunch","knockoff","doubleedge"],
		randomDoubleBattleMoves: ["uturn","suckerpunch","trick","icepunch","firepunch","knockoff","doubleedge","followme","helpinghand","protect"],
		tier: "NU"
	},
	hoothoot: {
		randomBattleMoves: ["reflect","toxic","roost","whirlwind","nightshade","magiccoat"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","growl","foresight"]}
		],
		tier: "LC"
	},
	noctowl: {
		randomBattleMoves: ["roost","whirlwind","airslash","nightshade","toxic","magiccoat"],
		randomDoubleBattleMoves: ["roost","tailwind","airslash","nightshade","hypervoice","heatwave","protect","hypnosis"],
		tier: "NU"
	},
	ledyba: {
		randomBattleMoves: ["roost","agility","lightscreen","encore","reflect","knockoff","swordsdance","batonpass","toxic"],
		eventPokemon: [
			{"generation":3,"level":10,"moves":["refresh","psybeam","aerialace","supersonic"]}
		],
		tier: "LC"
	},
	ledian: {
		randomBattleMoves: ["roost","lightscreen","encore","reflect","knockoff","toxic","uturn"],
		randomDoubleBattleMoves: ["protect","lightscreen","encore","reflect","knockoff","bugbite","uturn","tailwind","stringshot","strugglebug"],
		tier: "NU"
	},
	spinarak: {
		randomBattleMoves: ["agility","toxic","xscissor","toxicspikes","poisonjab","batonpass","stickyweb"],
		eventPokemon: [
			{"generation":3,"level":14,"moves":["refresh","dig","signalbeam","nightshade"]}
		],
		tier: "LC"
	},
	ariados: {
		randomBattleMoves: ["toxic","megahorn","toxicspikes","poisonjab","batonpass","stickyweb"],
		randomDoubleBattleMoves: ["protect","megahorn","stringshot","poisonjab","electroweb","stickyweb","ragepowder","strugglebug"],
		tier: "NU"
	},
	chinchou: {
		randomBattleMoves: ["voltswitch","thunderbolt","hiddenpowergrass","hydropump","icebeam","surf","thunderwave","scald","discharge","healbell"],
		tier: "LC"
	},
	lanturn: {
		randomBattleMoves: ["voltswitch","hiddenpowergrass","hydropump","icebeam","thunderwave","scald","discharge","healbell"],
		randomDoubleBattleMoves: ["thunderbolt","hiddenpowergrass","hydropump","icebeam","thunderwave","scald","discharge","protect","surf"],
		tier: "NU"
	},
	togepi: {
		randomBattleMoves: ["protect","fireblast","toxic","thunderwave","softboiled","dazzlinggleam"],
		eventPokemon: [
			{"generation":3,"level":20,"gender":"F","abilities":["serenegrace"],"moves":["metronome","charm","sweetkiss","yawn"]},
			{"generation":3,"level":25,"moves":["triattack","followme","ancientpower","helpinghand"]}
		],
		tier: "LC"
	},
	togetic: {
		randomBattleMoves: ["nastyplot","dazzlinggleam","fireblast","batonpass","roost","encore","healbell","thunderwave"],
		tier: "NFE"
	},
	togekiss: {
		randomBattleMoves: ["roost","thunderwave","nastyplot","airslash","aurasphere","batonpass","dazzlinggleam","fireblast"],
		randomDoubleBattleMoves: ["roost","thunderwave","nastyplot","airslash","aurasphere","followme","dazzlinggleam","heatwave","tailwind","protect"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["extremespeed","aurasphere","airslash","present"]}
		],
		tier: "OU"
	},
	natu: {
		randomBattleMoves: ["thunderwave","roost","toxic","reflect","lightscreen","uturn","wish","psychic","nightshade"],
		eventPokemon: [
			{"generation":3,"level":22,"moves":["batonpass","futuresight","nightshade","aerialace"]}
		],
		tier: "LC"
	},
	xatu: {
		randomBattleMoves: ["thunderwave","toxic","roost","psychic","uturn","reflect","lightscreen","grassknot","heatwave"],
		randomDoubleBattleMoves: ["thunderwave","tailwind","roost","psychic","uturn","reflect","lightscreen","grassknot","heatwave","protect"],
		tier: "NU"
	},
	mareep: {
		randomBattleMoves: ["reflect","lightscreen","thunderbolt","discharge","thunderwave","toxic","hiddenpowerice","cottonguard","powergem"],
		eventPokemon: [
			{"generation":3,"level":37,"gender":"F","moves":["thunder","thundershock","thunderwave","cottonspore"]},
			{"generation":3,"level":10,"gender":"M","moves":["tackle","growl","thundershock"]},
			{"generation":3,"level":17,"moves":["healbell","thundershock","thunderwave","bodyslam"]}
		],
		tier: "LC"
	},
	flaaffy: {
		randomBattleMoves: ["reflect","lightscreen","thunderbolt","discharge","thunderwave","toxic","hiddenpowerice","cottonguard","powergem"],
		tier: "NFE"
	},
	ampharos: {
		randomBattleMoves: ["voltswitch","focusblast","hiddenpowerice","hiddenpowergrass","thunderbolt","healbell","dragonpulse"],
		randomDoubleBattleMoves: ["electricterrain","focusblast","hiddenpowerice","hiddenpowergrass","thunderbolt","discharge","dragonpulse","protect"],
		tier: "UU"
	},
	ampharosmega: {
		randomBattleMoves: ["voltswitch","focusblast","hiddenpowerice","hiddenpowergrass","thunderbolt","healbell","dragonpulse"],
		randomDoubleBattleMoves: ["electricterrain","focusblast","hiddenpowerice","hiddenpowergrass","thunderbolt","discharge","dragonpulse","protect"],
		requiredItem: "Ampharosite"
	},
	azurill: {
		randomBattleMoves: ["scald","return","bodyslam","encore","toxic","protect","knockoff"],
		tier: "LC"
	},
	marill: {
		randomBattleMoves: ["waterfall","knockoff","encore","toxic","aquajet","superpower","icepunch","protect","playrough","poweruppunch"],
		tier: "NFE"
	},
	azumarill: {
		randomBattleMoves: ["waterfall","aquajet","playrough","superpower","bellydrum","knockoff"],
		randomDoubleBattleMoves: ["waterfall","aquajet","playrough","superpower","bellydrum","knockoff","protect"],
		tier: "OU"
	},
	bonsly: {
		randomBattleMoves: ["rockslide","brickbreak","doubleedge","toxic","stealthrock","suckerpunch","explosion"],
		tier: "LC"
	},
	sudowoodo: {
		randomBattleMoves: ["stoneedge","earthquake","suckerpunch","woodhammer","explosion","stealthrock"],
		randomDoubleBattleMoves: ["stoneedge","earthquake","suckerpunch","woodhammer","explosion","stealthrock","rockslide","helpinghand","protect","taunt"],
		tier: "NU"
	},
	hoppip: {
		randomBattleMoves: ["encore","sleeppowder","uturn","toxic","leechseed","substitute","protect"],
		tier: "LC"
	},
	skiploom: {
		randomBattleMoves: ["encore","sleeppowder","uturn","toxic","leechseed","substitute","protect"],
		tier: "NFE"
	},
	jumpluff: {
		randomBattleMoves: ["encore","sleeppowder","uturn","toxic","leechseed","gigadrain","synthesis"],
		randomDoubleBattleMoves: ["encore","sleeppowder","uturn","helpinghand","leechseed","gigadrain","ragepowder","protect"],
		eventPokemon: [
			{"generation":5,"level":27,"gender":"M","isHidden":true,"moves":["falseswipe","sleeppowder","bulletseed","leechseed"]}
		],
		tier: "NU"
	},
	aipom: {
		randomBattleMoves: ["fakeout","return","brickbreak","seedbomb","knockoff","uturn","icepunch","irontail"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["scratch","tailwhip","sandattack"]}
		],
		tier: "LC"
	},
	ambipom: {
		randomBattleMoves: ["fakeout","return","knockoff","uturn","switcheroo","seedbomb","icepunch","lowkick"],
		randomDoubleBattleMoves: ["Doublesfakeout","return","knockoff","uturn","switcheroo","seedbomb","icepunch","lowkick","protect"],
		tier: "RU"
	},
	sunkern: {
		randomBattleMoves: ["sunnyday","gigadrain","solarbeam","hiddenpowerfire","toxic","earthpower","leechseed"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["chlorophyll"],"moves":["absorb","growth"]}
		],
		tier: "LC"
	},
	sunflora: {
		randomBattleMoves: ["sunnyday","gigadrain","solarbeam","hiddenpowerfire","earthpower"],
		randomDoubleBattleMoves: ["sunnyday","gigadrain","solarbeam","hiddenpowerfire","earthpower","protect"],
		tier: "NU"
	},
	yanma: {
		randomBattleMoves: ["bugbuzz","airslash","hiddenpowerground","uturn","protect","gigadrain","ancientpower"],
		tier: "LC Uber"
	},
	yanmega: {
		randomBattleMoves: ["bugbuzz","airslash","hiddenpowerground","uturn","protect","gigadrain"],
		tier: "RU"
	},
	wooper: {
		randomBattleMoves: ["recover","earthquake","scald","toxic","stockpile","yawn","protect"],
		tier: "LC"
	},
	quagsire: {
		randomBattleMoves: ["recover","earthquake","waterfall","scald","toxic","curse","yawn","icepunch"],
		randomDoubleBattleMoves: ["bulldoze","earthquake","waterfall","scald","rockslide","curse","yawn","icepunch","protect"],
		tier: "OU"
	},
	murkrow: {
		randomBattleMoves: ["substitute","suckerpunch","bravebird","heatwave","hiddenpowergrass","roost","darkpulse","thunderwave"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["insomnia"],"moves":["peck","astonish"]}
		],
		tier: "LC Uber"
	},
	honchkrow: {
		randomBattleMoves: ["substitute","superpower","suckerpunch","bravebird","roost","heatwave","pursuit"],
		randomDoubleBattleMoves: ["substitute","superpower","suckerpunch","bravebird","roost","heatwave","protect"],
		tier: "UU"
	},
	misdreavus: {
		randomBattleMoves: ["nastyplot","substitute","calmmind","willowisp","shadowball","thunderbolt","hiddenpowerfighting"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["growl","psywave","spite"]}
		],
		tier: "LC Uber"
	},
	mismagius: {
		randomBattleMoves: ["nastyplot","substitute","willowisp","shadowball","thunderbolt","dazzlinggleam","healbell","painsplit"],
		randomDoubleBattleMoves: ["nastyplot","substitute","willowisp","shadowball","thunderbolt","dazzlinggleam","taunt","protect"],
		tier: "NU"
	},
	unown: {
		randomBattleMoves: ["hiddenpowerpsychic"],
		tier: "NU"
	},
	wynaut: {
		randomBattleMoves: ["destinybond","counter","mirrorcoat","encore"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["splash","charm","encore","tickle"]}
		],
		tier: "LC"
	},
	wobbuffet: {
		randomBattleMoves: ["destinybond","counter","mirrorcoat","encore"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["counter","mirrorcoat","safeguard","destinybond"]},
			{"generation":3,"level":10,"gender":"M","moves":["counter","mirrorcoat","safeguard","destinybond"]},
			{"generation":6,"level":10,"gender":"M","isHidden":false,"moves":["counter"],"pokeball":"cherishball"},
			{"generation":6,"level":15,"gender":"M","isHidden":false,"moves":["counter","mirrorcoat"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	girafarig: {
		randomBattleMoves: ["psychic","thunderbolt","calmmind","batonpass","agility","hypervoice"],
		randomDoubleBattleMoves: ["psychic","thunderbolt","calmmind","protect","agility","hypervoice"],
		tier: "NU"
	},
	pineco: {
		randomBattleMoves: ["rapidspin","toxicspikes","spikes","bugbite","stealthrock"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","protect","selfdestruct"]},
			{"generation":3,"level":22,"moves":["refresh","pinmissile","spikes","counter"]}
		],
		tier: "LC"
	},
	forretress: {
		randomBattleMoves: ["rapidspin","toxicspikes","spikes","voltswitch","stealthrock","gyroball"],
		randomDoubleBattleMoves: ["rockslide","drillrun","stringshot","voltswitch","stealthrock","gyroball","protect"],
		tier: "UU"
	},
	dunsparce: {
		randomBattleMoves: ["coil","rockslide","bite","headbutt","glare","bodyslam","roost"],
		randomDoubleBattleMoves: ["coil","rockslide","bite","headbutt","glare","bodyslam","protect"],
		tier: "NU"
	},
	gligar: {
		randomBattleMoves: ["stealthrock","toxic","roost","taunt","swordsdance","earthquake","uturn","stoneedge","knockoff"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["poisonsting","sandattack"]}
		],
		tier: "RU"
	},
	gliscor: {
		randomBattleMoves: ["uturn","roost","substitute","taunt","earthquake","protect","toxic","stealthrock","knockoff"],
		randomDoubleBattleMoves: ["uturn","tailwind","substitute","taunt","earthquake","protect","stoneedge","stealthrock","knockoff"],
		tier: "OU"
	},
	snubbull: {
		randomBattleMoves: ["thunderwave","firepunch","crunch","closecombat","icepunch","earthquake","playrough"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","scaryface","tailwhip","charm"]}
		],
		tier: "LC"
	},
	granbull: {
		randomBattleMoves: ["thunderwave","playrough","crunch","earthquake","healbell"],
		randomDoubleBattleMoves: ["thunderwave","playrough","crunch","earthquake","snarl","rockslide","protect"],
		tier: "NU"
	},
	qwilfish: {
		randomBattleMoves: ["toxicspikes","waterfall","spikes","painsplit","thunderwave","taunt","destinybond"],
		randomDoubleBattleMoves: ["poisonjab","waterfall","swordsdance","protect","thunderwave","taunt","destinybond"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","poisonsting","harden","minimize"]}
		],
		tier: "NU"
	},
	shuckle: {
		randomBattleMoves: ["toxic","encore","stealthrock","knockoff","stickyweb","infestation"],
		randomDoubleBattleMoves: ["bugbite","encore","stealthrock","knockoff","stickyweb","guardsplit","helpinghand","stringshot"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["sturdy"],"moves":["constrict","withdraw","wrap"]},
			{"generation":3,"level":20,"abilities":["sturdy"],"moves":["substitute","toxic","sludgebomb","encore"]}
		],
		tier: "BL2"
	},
	heracross: {
		randomBattleMoves: ["closecombat","megahorn","stoneedge","swordsdance","knockoff","earthquake"],
		randomDoubleBattleMoves: ["closecombat","megahorn","stoneedge","swordsdance","knockoff","earthquake","protect"],
		tier: "UU"
	},
	heracrossmega: {
		randomBattleMoves: ["closecombat","pinmissile","rockblast","swordsdance","bulletseed","knockoff","earthquake"],
		randomDoubleBattleMoves: ["closecombat","pinmissile","rockblast","swordsdance","bulletseed","knockoff","earthquake","protect"],
		requiredItem: "Heracronite",
		tier: "BL"
	},
	sneasel: {
		randomBattleMoves: ["iceshard","icepunch","lowkick","pursuit","swordsdance","knockoff"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["scratch","leer","taunt","quickattack"]}
		],
		tier: "LC Uber"
	},
	weavile: {
		randomBattleMoves: ["iceshard","icepunch","knockoff","pursuit","swordsdance","lowkick"],
		randomDoubleBattleMoves: ["iceshard","icepunch","knockoff","fakeout","swordsdance","lowkick","taunt","protect","feint"],
		eventPokemon: [
			{"generation":4,"level":30,"gender":"M","nature":"Jolly","moves":["fakeout","iceshard","nightslash","brickbreak"],"pokeball":"cherishball"}
		],
		tier: "BL"
	},
	teddiursa: {
		randomBattleMoves: ["swordsdance","protect","facade","closecombat","firepunch","crunch","playrough","gunkshot"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["pickup"],"moves":["scratch","leer","lick"]},
			{"generation":3,"level":11,"abilities":["pickup"],"moves":["refresh","metalclaw","leer","return"]}
		],
		tier: "LC"
	},
	ursaring: {
		randomBattleMoves: ["swordsdance","facade","closecombat","earthquake","crunch"],
		randomDoubleBattleMoves: ["swordsdance","facade","closecombat","earthquake","crunch","protect"],
		tier: "NU"
	},
	slugma: {
		randomBattleMoves: ["stockpile","recover","lavaplume","willowisp","toxic","hiddenpowergrass","earthpower","memento"],
		tier: "LC"
	},
	magcargo: {
		randomBattleMoves: ["recover","lavaplume","willowisp","toxic","hiddenpowergrass","hiddenpowerrock","stealthrock","fireblast","earthpower"],
		randomDoubleBattleMoves: ["protect","heatwave","willowisp","shellsmash","hiddenpowergrass","hiddenpowerrock","stealthrock","fireblast","earthpower"],
		eventPokemon: [
			{"generation":3,"level":38,"moves":["refresh","heatwave","earthquake","flamethrower"]}
		],
		tier: "NU"
	},
	swinub: {
		randomBattleMoves: ["earthquake","iciclecrash","iceshard","superpower","endeavor","stealthrock"],
		eventPokemon: [
			{"generation":3,"level":22,"abilities":["oblivious"],"moves":["charm","ancientpower","mist","mudshot"]}
		],
		tier: "LC"
	},
	piloswine: {
		randomBattleMoves: ["earthquake","iciclecrash","iceshard","superpower","endeavor","stealthrock"],
		tier: "NFE"
	},
	mamoswine: {
		randomBattleMoves: ["iceshard","earthquake","endeavor","iciclecrash","stealthrock","superpower","knockoff"],
		randomDoubleBattleMoves: ["iceshard","earthquake","rockslide","iciclecrash","protect","superpower","knockoff"],
		eventPokemon: [
			{"generation":5,"level":34,"gender":"M","isHidden":true,"moves":["hail","icefang","takedown","doublehit"]},
			{"generation":6,"level":50,"shiny":true,"gender":"M","nature":"Adamant","isHidden":true,"moves":["iciclespear","earthquake","iciclecrash","rockslide"]}
		],
		tier: "OU"
	},
	corsola: {
		randomBattleMoves: ["recover","toxic","powergem","scald","stealthrock","earthpower"],
		randomDoubleBattleMoves: ["protect","icywind","powergem","scald","stealthrock","earthpower"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["tackle","mudsport"]}
		],
		tier: "NU"
	},
	remoraid: {
		randomBattleMoves: ["waterspout","hydropump","fireblast","hiddenpowerground","icebeam","seedbomb","rockblast"],
		tier: "LC"
	},
	octillery: {
		randomBattleMoves: ["hydropump","fireblast","icebeam","energyball","rockblast","waterspout"],
		randomDoubleBattleMoves: ["hydropump","fireblast","icebeam","energyball","rockblast","waterspout","protect"],
		eventPokemon: [
			{"generation":4,"level":50,"gender":"F","nature":"Serious","abilities":["suctioncups"],"moves":["octazooka","icebeam","signalbeam","hyperbeam"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	delibird: {
		randomBattleMoves: ["rapidspin","iceshard","icepunch","aerialace","spikes","destinybond"],
		randomDoubleBattleMoves: ["fakeout","iceshard","icepunch","aerialace","brickbreak","protect"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["present"]}
		],
		tier: "NU"
	},
	mantyke: {
		randomBattleMoves: ["raindance","hydropump","scald","airslash","icebeam","rest","sleeptalk","toxic"],
		tier: "LC"
	},
	mantine: {
		randomBattleMoves: ["raindance","hydropump","scald","airslash","icebeam","rest","sleeptalk","toxic"],
		randomDoubleBattleMoves: ["raindance","hydropump","scald","airslash","icebeam","tailwind","wideguard","helpinghand","protect","surf"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","bubble","supersonic"]}
		],
		tier: "NU"
	},
	skarmory: {
		randomBattleMoves: ["whirlwind","bravebird","roost","spikes","stealthrock","defog"],
		randomDoubleBattleMoves: ["skydrop","bravebird","tailwind","taunt","feint","protect","ironhead"],
		tier: "OU"
	},
	houndour: {
		randomBattleMoves: ["pursuit","suckerpunch","fireblast","darkpulse","hiddenpowerfighting","nastyplot"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["leer","ember","howl"]},
			{"generation":3,"level":17,"moves":["charm","feintattack","ember","roar"]}
		],
		tier: "LC"
	},
	houndoom: {
		randomBattleMoves: ["nastyplot","darkpulse","suckerpunch","fireblast","hiddenpowerfighting"],
		randomDoubleBattleMoves: ["nastyplot","darkpulse","suckerpunch","heatwave","hiddenpowerfighting","protect"],
		tier: "UU"
	},
	houndoommega: {
		randomBattleMoves: ["nastyplot","darkpulse","suckerpunch","fireblast","hiddenpowerfighting"],
		randomDoubleBattleMoves: ["nastyplot","darkpulse","suckerpunch","heatwave","hiddenpowerfighting","protect"],
		requiredItem: "Houndoominite"
	},
	phanpy: {
		randomBattleMoves: ["stealthrock","earthquake","iceshard","headsmash","knockoff","seedbomb","superpower","playrough"],
		tier: "LC"
	},
	donphan: {
		randomBattleMoves: ["stealthrock","rapidspin","iceshard","earthquake","headsmash","playrough"],
		randomDoubleBattleMoves: ["stealthrock","seedbomb","iceshard","earthquake","rockslide","playrough","protect"],
		tier: "UU"
	},
	stantler: {
		randomBattleMoves: ["return","megahorn","jumpkick","earthquake","suckerpunch"],
		randomDoubleBattleMoves: ["return","megahorn","jumpkick","earthquake","suckerpunch","protect"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["intimidate"],"moves":["tackle","leer"]}
		],
		tier: "NU"
	},
	smeargle: {
		randomBattleMoves: ["spore","spikes","stealthrock","destinybond","whirlwind","stickyweb"],
		randomDoubleBattleMoves: ["spore","fakeout","wideguard","helpinghand","followme","tailwind","kingsshield"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["owntempo"],"moves":["sketch"]},
			{"generation":5,"level":50,"gender":"F","nature":"Jolly","abilities":["technician"],"moves":["falseswipe","spore","odorsleuth","meanlook"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	miltank: {
		randomBattleMoves: ["milkdrink","stealthrock","bodyslam","healbell","curse","earthquake","thunderwave"],
		randomDoubleBattleMoves: ["protect","helpinghand","bodyslam","healbell","curse","earthquake","thunderwave"],
		tier: "NU"
	},
	raikou: {
		randomBattleMoves: ["thunderbolt","hiddenpowerice","aurasphere","calmmind","substitute","voltswitch"],
		randomDoubleBattleMoves: ["thunderbolt","hiddenpowerice","aurasphere","calmmind","substitute","snarl","protect"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["quickattack","spark","reflect","crunch"]},
			{"generation":4,"level":30,"shiny":true,"nature":"Rash","moves":["zapcannon","aurasphere","extremespeed","weatherball"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "UU"
	},
	entei: {
		randomBattleMoves: ["extremespeed","flareblitz","ironhead","stoneedge","sacredfire"],
		randomDoubleBattleMoves: ["extremespeed","flareblitz","ironhead","stoneedge","sacredfire","protect"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["firespin","stomp","flamethrower","swagger"]},
			{"generation":4,"level":30,"shiny":true,"nature":"Adamant","moves":["flareblitz","howl","extremespeed","crushclaw"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "UU"
	},
	suicune: {
		randomBattleMoves: ["hydropump","icebeam","scald","hiddenpowergrass","hiddenpowerelectric","rest","sleeptalk","roar","calmmind"],
		randomDoubleBattleMoves: ["hydropump","icebeam","scald","hiddenpowergrass","hiddenpowerelectric","snarl","tailwind","protect","calmmind"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["gust","aurorabeam","mist","mirrorcoat"]},
			{"generation":4,"level":30,"shiny":true,"nature":"Relaxed","moves":["sheercold","airslash","extremespeed","aquaring"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "UU"
	},
	larvitar: {
		randomBattleMoves: ["earthquake","stoneedge","facade","dragondance","superpower","crunch"],
		eventPokemon: [
			{"generation":3,"level":20,"moves":["sandstorm","dragondance","bite","outrage"]},
			{"generation":5,"level":5,"shiny":true,"gender":"M","isHidden":false,"moves":["bite","leer","sandstorm","superpower"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	pupitar: {
		randomBattleMoves: ["earthquake","stoneedge","crunch","dragondance","superpower","stealthrock"],
		tier: "NFE"
	},
	tyranitar: {
		randomBattleMoves: ["crunch","stoneedge","pursuit","superpower","fireblast","icebeam","stealthrock"],
		randomDoubleBattleMoves: ["crunch","stoneedge","rockslide","lowkick","fireblast","icebeam","stealthrock","protect"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["thrash","scaryface","crunch","earthquake"]},
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["fireblast","icebeam","stoneedge","crunch"],"pokeball":"cherishball"},
			{"generation":5,"level":55,"gender":"M","isHidden":true,"moves":["payback","crunch","earthquake","seismictoss"]},
			{"generation":6,"level":50,"isHidden":false,"moves":["stoneedge","crunch","earthquake","icepunch"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	tyranitarmega: {
		randomBattleMoves: ["crunch","stoneedge","earthquake","icepunch","dragondance"],
		randomDoubleBattleMoves: ["crunch","stoneedge","earthquake","icepunch","dragondance","rockslide","protect"],
		requiredItem: "Tyranitarite"
	},
	lugia: {
		randomBattleMoves: ["toxic","roost","substitute","whirlwind","icebeam","psychic","calmmind"],
		randomDoubleBattleMoves: ["toxic","roost","substitute","tailwind","icebeam","psychic","calmmind","skydrop","protect"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["swift","raindance","hydropump","recover"]},
			{"generation":3,"level":70,"moves":["recover","hydropump","raindance","swift"]},
			{"generation":3,"level":50,"moves":["psychoboost","recover","hydropump","featherdance"]}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Uber"
	},
	hooh: {
		randomBattleMoves: ["substitute","sacredfire","bravebird","earthquake","roost","willowisp","flamecharge","tailwind"],
		randomDoubleBattleMoves: ["substitute","sacredfire","bravebird","earthquake","roost","willowisp","flamecharge","tailwind","skydrop","protect"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["swift","sunnyday","fireblast","recover"]},
			{"generation":3,"level":70,"moves":["recover","fireblast","sunnyday","swift"]}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Uber"
	},
	celebi: {
		randomBattleMoves: ["nastyplot","psychic","gigadrain","recover","healbell","batonpass","stealthrock","earthpower","hiddenpowerfire","hiddenpowerice","calmmind","leafstorm","uturn","thunderwave"],
		randomDoubleBattleMoves: ["protect","psychic","gigadrain","recover","earthpower","hiddenpowerfire","hiddenpowerice","helpinghand","leafstorm","uturn","thunderwave"],
		eventPokemon: [
			{"generation":3,"level":10,"moves":["confusion","recover","healbell","safeguard"]},
			{"generation":3,"level":70,"moves":["ancientpower","futuresight","batonpass","perishsong"]},
			{"generation":3,"level":10,"moves":["leechseed","recover","healbell","safeguard"]},
			{"generation":3,"level":30,"moves":["healbell","safeguard","ancientpower","futuresight"]},
			{"generation":4,"level":50,"moves":["leafstorm","recover","nastyplot","healingwish"],"pokeball":"cherishball"},
			{"generation":6,"level":10,"moves":["recover","healbell","safeguard","holdback"],"pokeball":"luxuryball"}
		],
		tier: "UU"
	},
	treecko: {
		randomBattleMoves: ["substitute","leechseed","leafstorm","hiddenpowerice","hiddenpowerrock","endeavor"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["pound","leer","absorb"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["pound","leer","absorb"]}
		],
		tier: "LC"
	},
	grovyle: {
		randomBattleMoves: ["substitute","leechseed","gigadrain","leafstorm","hiddenpowerice","hiddenpowerrock","endeavor"],
		tier: "NFE"
	},
	sceptile: {
		randomBattleMoves: ["substitute","gigadrain","leafstorm","hiddenpowerice","focusblast","hiddenpowerrock"],
		randomDoubleBattleMoves: ["substitute","gigadrain","leafstorm","hiddenpowerice","focusblast","hiddenpowerrock","grassyterrain","protect"],
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":false,"moves":["leafstorm","dragonpulse","focusblast","rockslide"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	torchic: {
		randomBattleMoves: ["protect","batonpass","substitute","hiddenpowergrass","swordsdance","firepledge"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["scratch","growl","focusenergy","ember"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["scratch","growl","focusenergy","ember"]},
			{"generation":6,"level":10,"gender":"M","isHidden":true,"moves":["scratch","growl","focusenergy","ember"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	combusken: {
		randomBattleMoves: ["flareblitz","skyuppercut","protect","swordsdance","substitute","batonpass","shadowclaw"],
		tier: "BL3"
	},
	blaziken: {
		randomBattleMoves: ["flareblitz","highjumpkick","protect","swordsdance","substitute","batonpass","stoneedge","knockoff"],
		eventPokemon: [
			{"generation":3,"level":70,"moves":["blazekick","slash","mirrormove","skyuppercut"]},
			{"generation":5,"level":50,"isHidden":false,"moves":["flareblitz","highjumpkick","thunderpunch","stoneedge"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	blazikenmega: {
		randomBattleMoves: ["flareblitz","highjumpkick","protect","swordsdance","substitute","batonpass","stoneedge","knockoff"],
		requiredItem: "Blazikenite"
	},
	mudkip: {
		randomBattleMoves: ["hydropump","earthpower","hiddenpowerelectric","icebeam","sludgewave"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["tackle","growl","mudslap","watergun"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tackle","growl","mudslap","watergun"]}
		],
		tier: "LC"
	},
	marshtomp: {
		randomBattleMoves: ["waterfall","earthquake","superpower","icepunch","rockslide","stealthrock"],
		tier: "NFE"
	},
	swampert: {
		randomBattleMoves: ["waterfall","earthquake","icebeam","stealthrock","roar","scald"],
		randomDoubleBattleMoves: ["waterfall","earthquake","icebeam","stealthrock","wideguard","scald","rockslide","muddywater","protect","icywind"],
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":false,"moves":["earthquake","icebeam","hydropump","hammerarm"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	poochyena: {
		randomBattleMoves: ["superfang","foulplay","suckerpunch","toxic","crunch","firefang","icefang","poisonfang"],
		eventPokemon: [
			{"generation":3,"level":10,"abilities":["runaway"],"moves":["healbell","dig","poisonfang","growl"]}
		],
		tier: "LC"
	},
	mightyena: {
		randomBattleMoves: ["suckerpunch","crunch","playrough","firefang","taunt"],
		randomDoubleBattleMoves: ["suckerpunch","crunch","playrough","firefang","taunt","protect"],
		tier: "NU"
	},
	zigzagoon: {
		randomBattleMoves: ["trick","thunderwave","icebeam","thunderbolt","gunkshot","lastresort"],
		eventPokemon: [
			{"generation":3,"level":5,"shiny":true,"abilities":["pickup"],"moves":["tackle","growl","tailwhip"]},
			{"generation":3,"level":5,"abilities":["pickup"],"moves":["tackle","growl","extremespeed"]}
		],
		tier: "LC"
	},
	linoone: {
		randomBattleMoves: ["bellydrum","extremespeed","seedbomb","substitute","shadowclaw"],
		randomDoubleBattleMoves: ["bellydrum","extremespeed","seedbomb","protect","shadowclaw"],
		tier: "NU"
	},
	wurmple: {
		randomBattleMoves: ["bugbite","poisonsting","tackle","electroweb"],
		tier: "LC"
	},
	silcoon: {
		randomBattleMoves: ["bugbite","poisonsting","tackle","electroweb"],
		tier: "NFE"
	},
	beautifly: {
		randomBattleMoves: ["quiverdance","bugbuzz","gigadrain","hiddenpowerground","psychic","substitute"],
		randomDoubleBattleMoves: ["quiverdance","bugbuzz","gigadrain","hiddenpowerground","psychic","substitute","tailwind","stringshot","protect"],
		tier: "NU"
	},
	cascoon: {
		randomBattleMoves: ["bugbite","poisonsting","tackle","electroweb"],
		tier: "NFE"
	},
	dustox: {
		randomBattleMoves: ["toxic","roost","whirlwind","bugbuzz","protect","sludgebomb","quiverdance","shadowball"],
		randomDoubleBattleMoves: ["tailwind","stringshot","strugglebug","bugbuzz","protect","sludgebomb","quiverdance","shadowball"],
		tier: "NU"
	},
	lotad: {
		randomBattleMoves: ["gigadrain","icebeam","scald","naturepower","raindance"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["astonish","growl","absorb"]}
		],
		tier: "LC"
	},
	lombre: {
		randomBattleMoves: ["fakeout","swordsdance","waterfall","seedbomb","icepunch","firepunch","thunderpunch","poweruppunch","gigadrain","icebeam"],
		tier: "NFE"
	},
	ludicolo: {
		randomBattleMoves: ["raindance","hydropump","scald","gigadrain","icebeam","focusblast"],
		randomDoubleBattleMoves: ["raindance","hydropump","surf","gigadrain","icebeam","fakeout","protect"],
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":false,"abilities":["swiftswim"],"moves":["fakeout","hydropump","icebeam","gigadrain"],"pokeball":"cherishball"},
			{"generation":5,"level":30,"gender":"M","nature":"Calm","isHidden":false,"abilities":["swiftswim"],"moves":["scald","gigadrain","icebeam","sunnyday"]}
		],
		tier: "NU"
	},
	seedot: {
		randomBattleMoves: ["defog","naturepower","seedbomb","explosion","foulplay"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["bide","harden","growth"]},
			{"generation":3,"level":17,"moves":["refresh","gigadrain","bulletseed","secretpower"]}
		],
		tier: "LC"
	},
	nuzleaf: {
		randomBattleMoves: ["suckerpunch","naturepower","seedbomb","explosion","swordsdance","rockslide","lowsweep"],
		tier: "NFE"
	},
	shiftry: {
		randomBattleMoves: ["leafstorm","swordsdance","seedbomb","suckerpunch","defog","lowkick"],
		randomDoubleBattleMoves: ["leafstorm","swordsdance","seedbomb","suckerpunch","knockoff","lowkick","fakeout","protect"],
		tier: "RU"
	},
	taillow: {
		randomBattleMoves: ["bravebird","facade","quickattack","uturn","protect"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["peck","growl","focusenergy","featherdance"]}
		],
		tier: "LC"
	},
	swellow: {
		randomBattleMoves: ["bravebird","facade","quickattack","uturn","endeavor"],
		randomDoubleBattleMoves: ["bravebird","facade","quickattack","uturn","protect"],
		eventPokemon: [
			{"generation":3,"level":43,"moves":["batonpass","skyattack","agility","facade"]}
		],
		tier: "NU"
	},
	wingull: {
		randomBattleMoves: ["scald","icebeam","tailwind","uturn","airslash","knockoff","defog"],
		tier: "LC"
	},
	pelipper: {
		randomBattleMoves: ["scald","uturn","hurricane","toxic","roost","defog","knockoff"],
		randomDoubleBattleMoves: ["scald","surf","hurricane","wideguard","protect","tailwind","knockoff"],
		tier: "NU"
	},
	ralts: {
		randomBattleMoves: ["trickroom","destinybond","psychic","willowisp","hypnosis","dazzlinggleam","substitute","trick"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["growl","wish"]},
			{"generation":3,"level":5,"moves":["growl","charm"]},
			{"generation":3,"level":20,"moves":["sing","shockwave","reflect","confusion"]}
		],
		tier: "LC"
	},
	kirlia: {
		randomBattleMoves: ["trick","dazzlinggleam","psychic","willowisp","signalbeam","thunderbolt","destinybond","substitute"],
		tier: "NFE"
	},
	gardevoir: {
		randomBattleMoves: ["psyshock","focusblast","shadowball","moonblast","calmmind","willowisp","thunderbolt","healingwish"],
		randomDoubleBattleMoves: ["psyshock","focusblast","shadowball","moonblast","taunt","willowisp","thunderbolt","trickroom","helpinghand","protect","dazzlinggleam"],
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":false,"abilities":["trace"],"moves":["hypnosis","thunderbolt","focusblast","psychic"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	gardevoirmega: {
		randomBattleMoves: ["psyshock","focusblast","shadowball","calmmind","thunderbolt","hypervoice","healingwish"],
		randomDoubleBattleMoves: ["psyshock","focusblast","shadowball","calmmind","thunderbolt","hypervoice","protect"],
		requiredItem: "Gardevoirite"
	},
	gallade: {
		randomBattleMoves: ["closecombat","trick","stoneedge","shadowsneak","drainpunch","icepunch","zenheadbutt","swordsdance","knockoff"],
		randomDoubleBattleMoves: ["closecombat","trick","stoneedge","shadowsneak","drainpunch","icepunch","zenheadbutt","feint","knockoff","trickroom","protect","helpinghand","healpulse"],
		tier: "RU"
	},
	surskit: {
		randomBattleMoves: ["hydropump","signalbeam","hiddenpowerfire","stickyweb","gigadrain","powersplit"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["bubble","mudsport"]},
			{"generation":3,"level":10,"gender":"M","moves":["bubble","quickattack"]}
		],
		tier: "LC"
	},
	masquerain: {
		randomBattleMoves: ["hydropump","bugbuzz","airslash","quiverdance","substitute","batonpass","stickyweb","roost"],
		randomDoubleBattleMoves: ["hydropump","bugbuzz","airslash","quiverdance","substitute","tailwind","stickyweb","roost","strugglebug","protect"],
		tier: "NU"
	},
	shroomish: {
		randomBattleMoves: ["spore","substitute","leechseed","gigadrain","protect","toxic","stunspore"],
		eventPokemon: [
			{"generation":3,"level":15,"abilities":["effectspore"],"moves":["refresh","falseswipe","megadrain","stunspore"]}
		],
		tier: "LC"
	},
	breloom: {
		randomBattleMoves: ["spore","substitute","focuspunch","machpunch","bulletseed","rocktomb","swordsdance","drainpunch"],
		randomDoubleBattleMoves: ["spore","helpinghand","machpunch","bulletseed","rocktomb","protect","drainpunch"],
		tier: "OU"
	},
	slakoth: {
		randomBattleMoves: ["doubleedge","hammerarm","firepunch","counter","retaliate","toxic"],
		tier: "LC"
	},
	vigoroth: {
		randomBattleMoves: ["bulkup","return","earthquake","firepunch","suckerpunch","slackoff","icepunch","lowkick"],
		tier: "NFE"
	},
	slaking: {
		randomBattleMoves: ["earthquake","pursuit","nightslash","doubleedge","retaliate"],
		randomDoubleBattleMoves: ["earthquake","protect","nightslash","doubleedge","retaliate","hammerarm"],
		eventPokemon: [
			{"generation":4,"level":50,"gender":"M","nature":"Adamant","moves":["gigaimpact","return","shadowclaw","aerialace"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	nincada: {
		randomBattleMoves: ["xscissor","dig","aerialace","nightslash"],
		tier: "LC"
	},
	ninjask: {
		randomBattleMoves: ["batonpass","swordsdance","substitute","protect","xscissor"],
		randomDoubleBattleMoves: ["batonpass","swordsdance","substitute","protect","xscissor","aerialace"],
		tier: "NU"
	},
	shedinja: {
		randomBattleMoves: ["swordsdance","willowisp","xscissor","shadowsneak","protect"],
		eventPokemon: [
			{"generation":3,"level":50,"moves":["spite","confuseray","shadowball","grudge"]},
			{"generation":3,"level":20,"moves":["doubleteam","furycutter","screech"]},
			{"generation":3,"level":25,"moves":["swordsdance"]},
			{"generation":3,"level":31,"moves":["slash"]},
			{"generation":3,"level":38,"moves":["agility"]},
			{"generation":3,"level":45,"moves":["batonpass"]},
			{"generation":4,"level":52,"moves":["xscissor"]}
		],
		tier: "NU"
	},
	whismur: {
		randomBattleMoves: ["hypervoice","fireblast","shadowball","icebeam","extrasensory"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["pound","uproar","teeterdance"]}
		],
		tier: "LC"
	},
	loudred: {
		randomBattleMoves: ["hypervoice","fireblast","shadowball","icebeam","circlethrow","bodyslam"],
		tier: "NFE"
	},
	exploud: {
		randomBattleMoves: ["boomburst","fireblast","icebeam","surf","focusblast"],
		randomDoubleBattleMoves: ["boomburst","fireblast","icebeam","surf","focusblast","protect","hypervoice"],
		eventPokemon: [
			{"generation":3,"level":100,"moves":["roar","rest","sleeptalk","hypervoice"]},
			{"generation":3,"level":50,"moves":["stomp","screech","hyperbeam","roar"]}
		],
		tier: "RU"
	},
	makuhita: {
		randomBattleMoves: ["crosschop","bulletpunch","closecombat","icepunch","bulkup","fakeout","earthquake"],
		eventPokemon: [
			{"generation":3,"level":18,"moves":["refresh","brickbreak","armthrust","rocktomb"]}
		],
		tier: "LC"
	},
	hariyama: {
		randomBattleMoves: ["bulletpunch","closecombat","icepunch","stoneedge","bulkup","earthquake"],
		randomDoubleBattleMoves: ["bulletpunch","closecombat","icepunch","stoneedge","fakeout","feint","helpinghand","wideguard","protect"],
		tier: "NU"
	},
	nosepass: {
		randomBattleMoves: ["powergem","thunderwave","stealthrock","painsplit","explosion","voltswitch"],
		eventPokemon: [
			{"generation":3,"level":26,"moves":["helpinghand","thunderbolt","thunderwave","rockslide"]}
		],
		tier: "LC"
	},
	probopass: {
		randomBattleMoves: ["stealthrock","thunderwave","toxic","earthpower","powergem","voltswitch","painsplit"],
		randomDoubleBattleMoves: ["stealthrock","thunderwave","helpinghand","earthpower","powergem","wideguard","protect","voltswitch"],
		tier: "NU"
	},
	skitty: {
		randomBattleMoves: ["doubleedge","zenheadbutt","thunderwave","fakeout","playrough","healbell"],
		eventPokemon: [
			{"generation":3,"level":5,"abilities":["cutecharm"],"moves":["tackle","growl","tailwhip","payday"]},
			{"generation":3,"level":5,"abilities":["cutecharm"],"moves":["growl","tackle","tailwhip","rollout"]},
			{"generation":3,"level":10,"gender":"M","abilities":["cutecharm"],"moves":["growl","tackle","tailwhip","attract"]}
		],
		tier: "LC"
	},
	delcatty: {
		randomBattleMoves: ["doubleedge","suckerpunch","playrough","wildcharge","fakeout","thunderwave","wish","healbell"],
		randomDoubleBattleMoves: ["doubleedge","suckerpunch","playrough","wildcharge","fakeout","thunderwave","protect","helpinghand"],
		eventPokemon: [
			{"generation":3,"level":18,"abilities":["cutecharm"],"moves":["sweetkiss","secretpower","attract","shockwave"]}
		],
		tier: "NU"
	},
	sableye: {
		randomBattleMoves: ["recover","willowisp","taunt","toxic","knockoff","foulplay"],
		randomDoubleBattleMoves: ["recover","willowisp","taunt","fakeout","knockoff","foulplay","feint","helpinghand","snarl","protect"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","abilities":["keeneye"],"moves":["leer","scratch","foresight","nightshade"]},
			{"generation":3,"level":33,"abilities":["keeneye"],"moves":["helpinghand","shadowball","feintattack","recover"]},
			{"generation":5,"level":50,"gender":"M","isHidden":true,"moves":["foulplay","octazooka","tickle","trick"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	mawile: {
		randomBattleMoves: ["swordsdance","ironhead","firefang","substitute","playrough","suckerpunch","knockoff","focuspunch"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["astonish","faketears"]},
			{"generation":3,"level":22,"moves":["sing","falseswipe","vicegrip","irondefense"]},
			{"generation":6,"level":50,"isHidden":false,"abilities":["intimidate"],"moves":["ironhead","playrough","firefang","suckerpunch"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	mawilemega: {
		randomBattleMoves: ["swordsdance","ironhead","firefang","substitute","playrough","suckerpunch","knockoff","focuspunch"],
		requiredItem: "Mawilite"
	},
	aron: {
		randomBattleMoves: ["headsmash","ironhead","earthquake","superpower","stealthrock","endeavor"],
		tier: "LC"
	},
	lairon: {
		randomBattleMoves: ["headsmash","ironhead","earthquake","superpower","stealthrock"],
		tier: "NFE"
	},
	aggron: {
		randomBattleMoves: ["autotomize","headsmash","earthquake","lowkick","heavyslam","aquatail","stealthrock"],
		eventPokemon: [
			{"generation":3,"level":100,"moves":["irontail","protect","metalsound","doubleedge"]},
			{"generation":3,"level":50,"moves":["takedown","irontail","protect","metalsound"]}
		],
		tier: "UU"
	},
	aggronmega: {
		randomBattleMoves: ["earthquake","heavyslam","icepunch","stealthrock","thunderwave","roar"],
		requiredItem: "Aggronite"
	},
	meditite: {
		randomBattleMoves: ["highjumpkick","psychocut","icepunch","thunderpunch","trick","fakeout","bulletpunch","drainpunch","zenheadbutt"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["bide","meditate","confusion"]},
			{"generation":3,"level":20,"moves":["dynamicpunch","confusion","shadowball","detect"]}
		],
		tier: "LC Uber"
	},
	medicham: {
		randomBattleMoves: ["highjumpkick","drainpunch","zenheadbutt","icepunch","bulletpunch"],
		tier: "OU"
	},
	medichammega: {
		randomBattleMoves: ["highjumpkick","drainpunch","icepunch","bulletpunch","zenheadbutt","firepunch"],
		requiredItem: "Medichamite",
		tier: "BL"
	},
	electrike: {
		randomBattleMoves: ["voltswitch","thunderbolt","hiddenpowerice","switcheroo","flamethrower","hiddenpowergrass"],
		tier: "LC"
	},
	manectric: {
		randomBattleMoves: ["voltswitch","thunderbolt","hiddenpowerice","hiddenpowergrass","overheat","flamethrower"],
		eventPokemon: [
			{"generation":3,"level":44,"moves":["refresh","thunder","raindance","bite"]}
		],
		tier: "OU"
	},
	manectricmega: {
		randomBattleMoves: ["voltswitch","thunderbolt","hiddenpowerice","hiddenpowergrass","overheat","flamethrower"],
		requiredItem: "Manectite"
	},
	plusle: {
		randomBattleMoves: ["nastyplot","thunderbolt","substitute","batonpass","hiddenpowerice","encore"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["growl","thunderwave","mudsport"]},
			{"generation":3,"level":10,"gender":"M","moves":["growl","thunderwave","quickattack"]}
		],
		tier: "NU"
	},
	minun: {
		randomBattleMoves: ["nastyplot","thunderbolt","substitute","batonpass","hiddenpowerice","encore"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["growl","thunderwave","watersport"]},
			{"generation":3,"level":10,"gender":"M","moves":["growl","thunderwave","quickattack"]}
		],
		tier: "NU"
	},
	volbeat: {
		randomBattleMoves: ["tailglow","batonpass","substitute","bugbuzz","thunderwave","encore","tailwind"],
		tier: "NU"
	},
	illumise: {
		randomBattleMoves: ["substitute","batonpass","wish","bugbuzz","encore","thunderbolt","tailwind","uturn"],
		tier: "NU"
	},
	budew: {
		randomBattleMoves: ["spikes","sludgebomb","sleeppowder","gigadrain","stunspore","rest"],
		tier: "LC"
	},
	roselia: {
		randomBattleMoves: ["spikes","toxicspikes","sleeppowder","gigadrain","stunspore","rest","sludgebomb","synthesis"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["absorb","growth","poisonsting"]},
			{"generation":3,"level":22,"moves":["sweetkiss","magicalleaf","leechseed","grasswhistle"]}
		],
		tier: "NFE"
	},
	roserade: {
		randomBattleMoves: ["sludgebomb","gigadrain","sleeppowder","leafstorm","spikes","toxicspikes","rest","synthesis","hiddenpowerfire"],
		tier: "UU"
	},
	gulpin: {
		randomBattleMoves: ["stockpile","sludgebomb","sludgewave","icebeam","toxic","painsplit","yawn","encore"],
		eventPokemon: [
			{"generation":3,"level":17,"moves":["sing","shockwave","sludge","toxic"]}
		],
		tier: "LC"
	},
	swalot: {
		randomBattleMoves: ["sludgebomb","icebeam","toxic","yawn","encore","painsplit","earthquake"],
		tier: "NU"
	},
	carvanha: {
		randomBattleMoves: ["protect","hydropump","surf","icebeam","waterfall","crunch","aquajet","destinybond"],
		eventPokemon: [
			{"generation":3,"level":15,"moves":["refresh","waterpulse","bite","scaryface"]}
		],
		tier: "NFE"
	},
	sharpedo: {
		randomBattleMoves: ["protect","hydropump","surf","icebeam","crunch","earthquake","waterfall","darkpulse","aquajet","destinybond"],
		tier: "RU"
	},
	wailmer: {
		randomBattleMoves: ["waterspout","surf","hydropump","icebeam","hiddenpowergrass","hiddenpowerelectric"],
		tier: "LC"
	},
	wailord: {
		randomBattleMoves: ["waterspout","hydropump","icebeam","hiddenpowergrass","hiddenpowerfire"],
		eventPokemon: [
			{"generation":3,"level":100,"moves":["rest","waterspout","amnesia","hydropump"]},
			{"generation":3,"level":50,"moves":["waterpulse","mist","rest","waterspout"]}
		],
		tier: "NU"
	},
	numel: {
		randomBattleMoves: ["curse","earthquake","rockslide","fireblast","flamecharge","rest","sleeptalk","stockpile","hiddenpowerelectric","earthpower","lavaplume"],
		eventPokemon: [
			{"generation":3,"level":14,"abilities":["oblivious"],"moves":["charm","takedown","dig","ember"]}
		],
		tier: "LC"
	},
	camerupt: {
		randomBattleMoves: ["rockpolish","fireblast","earthpower","lavaplume","stealthrock","eruption","hiddenpowergrass","roar"],
		tier: "NU"
	},
	torkoal: {
		randomBattleMoves: ["rapidspin","stealthrock","yawn","lavaplume","earthpower","toxic","willowisp","shellsmash","fireblast"],
		tier: "NU"
	},
	spoink: {
		randomBattleMoves: ["psychic","reflect","lightscreen","thunderwave","trick","healbell","calmmind","hiddenpowerfighting","shadowball"],
		eventPokemon: [
			{"generation":3,"level":5,"abilities":["owntempo"],"moves":["splash","uproar"]}
		],
		tier: "LC"
	},
	grumpig: {
		randomBattleMoves: ["psychic","psyshock","thunderwave","healbell","whirlwind","toxic","focusblast","reflect","lightscreen"],
		tier: "NU"
	},
	spinda: {
		randomBattleMoves: ["doubleedge","return","superpower","suckerpunch","trickroom"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["tackle","uproar","sing"]}
		],
		tier: "NU"
	},
	trapinch: {
		randomBattleMoves: ["earthquake","rockslide","crunch","quickattack","superpower"],
		eventPokemon: [
			{"generation":5,"level":1,"shiny":true,"isHidden":false,"moves":["bite"]}
		],
		tier: "LC"
	},
	vibrava: {
		randomBattleMoves: ["substitute","earthquake","outrage","roost","uturn","superpower","defog"],
		tier: "NFE"
	},
	flygon: {
		randomBattleMoves: ["earthquake","outrage","dragonclaw","uturn","roost","stoneedge","firepunch","fireblast","defog"],
		eventPokemon: [
			{"generation":3,"level":45,"moves":["sandtomb","crunch","dragonbreath","screech"]},
			{"generation":4,"level":50,"gender":"M","nature":"Naive","moves":["dracometeor","uturn","earthquake","dragonclaw"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	cacnea: {
		randomBattleMoves: ["swordsdance","spikes","suckerpunch","seedbomb","drainpunch"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["poisonsting","leer","absorb","encore"]}
		],
		tier: "LC"
	},
	cacturne: {
		randomBattleMoves: ["swordsdance","spikes","suckerpunch","seedbomb","drainpunch","substitute","focuspunch","destinybond"],
		eventPokemon: [
			{"generation":3,"level":45,"moves":["ingrain","feintattack","spikes","needlearm"]}
		],
		tier: "NU"
	},
	swablu: {
		randomBattleMoves: ["roost","toxic","cottonguard","pluck","hypervoice","return"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["peck","growl","falseswipe"]},
			{"generation":5,"level":1,"shiny":true,"isHidden":false,"moves":["peck","growl"]}
		],
		tier: "LC"
	},
	altaria: {
		randomBattleMoves: ["dragondance","dracometeor","outrage","dragonclaw","earthquake","roost","fireblast","healbell"],
		eventPokemon: [
			{"generation":3,"level":45,"moves":["takedown","dragonbreath","dragondance","refresh"]},
			{"generation":3,"level":36,"moves":["healbell","dragonbreath","solarbeam","aerialace"]},
			{"generation":5,"level":35,"gender":"M","isHidden":true,"moves":["takedown","naturalgift","dragonbreath","falseswipe"]}
		],
		tier: "NU"
	},
	zangoose: {
		randomBattleMoves: ["swordsdance","closecombat","knockoff","quickattack","facade"],
		eventPokemon: [
			{"generation":3,"level":18,"moves":["leer","quickattack","swordsdance","furycutter"]},
			{"generation":3,"level":10,"gender":"M","moves":["scratch","leer","quickattack","swordsdance"]},
			{"generation":3,"level":28,"moves":["refresh","brickbreak","counter","crushclaw"]}
		],
		tier: "NU"
	},
	seviper: {
		randomBattleMoves: ["flamethrower","gigadrain","earthquake","suckerpunch","aquatail","coil","glare","poisonjab","sludgebomb"],
		eventPokemon: [
			{"generation":3,"level":18,"moves":["wrap","lick","bite","poisontail"]},
			{"generation":3,"level":30,"moves":["poisontail","screech","glare","crunch"]},
			{"generation":3,"level":10,"gender":"M","moves":["wrap","lick","bite"]}
		],
		tier: "NU"
	},
	lunatone: {
		randomBattleMoves: ["psychic","earthpower","stealthrock","rockpolish","batonpass","calmmind","icebeam","hiddenpowerrock","moonlight","trickroom","explosion"],
		eventPokemon: [
			{"generation":3,"level":10,"moves":["tackle","harden","confusion"]},
			{"generation":3,"level":25,"moves":["batonpass","psychic","raindance","rocktomb"]}
		],
		tier: "NU"
	},
	solrock: {
		randomBattleMoves: ["stealthrock","explosion","stoneedge","zenheadbutt","willowisp","morningsun","trickroom"],
		eventPokemon: [
			{"generation":3,"level":10,"moves":["tackle","harden","confusion"]},
			{"generation":3,"level":41,"moves":["batonpass","psychic","sunnyday","cosmicpower"]}
		],
		tier: "NU"
	},
	barboach: {
		randomBattleMoves: ["dragondance","waterfall","earthquake","return","bounce"],
		tier: "LC"
	},
	whiscash: {
		randomBattleMoves: ["dragondance","waterfall","earthquake","stoneedge","zenheadbutt"],
		eventPokemon: [
			{"generation":4,"level":51,"gender":"F","nature":"Gentle","abilities":["oblivious"],"moves":["earthquake","aquatail","zenheadbutt","gigaimpact"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	corphish: {
		randomBattleMoves: ["dragondance","waterfall","crunch","superpower","swordsdance","knockoff","aquajet"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["bubble","watersport"]}
		],
		tier: "LC"
	},
	crawdaunt: {
		randomBattleMoves: ["dragondance","crabhammer","crunch","superpower","swordsdance","knockoff","aquajet"],
		eventPokemon: [
			{"generation":3,"level":100,"moves":["taunt","crabhammer","swordsdance","guillotine"]},
			{"generation":3,"level":50,"moves":["knockoff","taunt","crabhammer","swordsdance"]}
		],
		tier: "BL"
	},
	baltoy: {
		randomBattleMoves: ["stealthrock","earthquake","toxic","psychic","reflect","lightscreen","icebeam","rapidspin"],
		eventPokemon: [
			{"generation":3,"level":17,"moves":["refresh","rocktomb","mudslap","psybeam"]}
		],
		tier: "LC"
	},
	claydol: {
		randomBattleMoves: ["stealthrock","toxic","psychic","icebeam","earthquake","rapidspin"],
		tier: "RU"
	},
	lileep: {
		randomBattleMoves: ["stealthrock","recover","ancientpower","hiddenpowerfire","gigadrain","stockpile"],
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"moves":["recover","rockslide","constrict","acid"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	cradily: {
		randomBattleMoves: ["stealthrock","recover","seedbomb","rockslide","earthquake","curse","swordsdance"],
		tier: "NU"
	},
	anorith: {
		randomBattleMoves: ["stealthrock","brickbreak","toxic","xscissor","rockslide","swordsdance","rockpolish"],
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"moves":["harden","mudsport","watergun","crosspoison"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	armaldo: {
		randomBattleMoves: ["stealthrock","stoneedge","toxic","xscissor","swordsdance","knockoff","rapidspin"],
		tier: "NU"
	},
	feebas: {
		randomBattleMoves: ["protect","confuseray","hypnosis","scald","toxic"],
		tier: "LC"
	},
	milotic: {
		randomBattleMoves: ["recover","scald","toxic","icebeam","dragontail","rest","sleeptalk","hiddenpowergrass"],
		eventPokemon: [
			{"generation":3,"level":35,"moves":["waterpulse","twister","recover","raindance"]},
			{"generation":4,"level":50,"gender":"F","nature":"Bold","moves":["recover","raindance","icebeam","hydropump"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"shiny":true,"gender":"M","nature":"Timid","moves":["raindance","recover","hydropump","icywind"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["recover","hydropump","icebeam","mirrorcoat"],"pokeball":"cherishball"},
			{"generation":5,"level":58,"gender":"M","nature":"Lax","isHidden":false,"moves":["recover","surf","icebeam","toxic"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	castform: {
		randomBattleMoves: ["sunnyday","raindance","fireblast","hydropump","thunder","icebeam","solarbeam","weatherball"],
		tier: "NU"
	},
	kecleon: {
		randomBattleMoves: ["foulplay","toxic","stealthrock","recover","return","thunderwave","suckerpunch","shadowsneak"],
		tier: "NU"
	},
	shuppet: {
		randomBattleMoves: ["trickroom","destinybond","taunt","shadowsneak","suckerpunch","willowisp"],
		eventPokemon: [
			{"generation":3,"level":45,"abilities":["insomnia"],"moves":["spite","willowisp","feintattack","shadowball"]}
		],
		tier: "LC"
	},
	banette: {
		randomBattleMoves: ["destinybond","taunt","shadowclaw","suckerpunch","willowisp","shadowsneak","knockoff"],
		eventPokemon: [
			{"generation":3,"level":37,"abilities":["insomnia"],"moves":["helpinghand","feintattack","shadowball","curse"]},
			{"generation":5,"level":37,"gender":"F","isHidden":true,"moves":["feintattack","hex","shadowball","cottonguard"]}
		],
		tier: "RU"
	},
	banettemega: {
		randomBattleMoves: ["destinybond","taunt","shadowclaw","suckerpunch","willowisp","shadowsneak","knockoff"],
		requiredItem: "Banettite"
	},
	duskull: {
		randomBattleMoves: ["willowisp","shadowsneak","icebeam","painsplit","substitute","nightshade"],
		eventPokemon: [
			{"generation":3,"level":45,"moves":["pursuit","curse","willowisp","meanlook"]},
			{"generation":3,"level":19,"moves":["helpinghand","shadowball","astonish","confuseray"]}
		],
		tier: "LC"
	},
	dusclops: {
		randomBattleMoves: ["willowisp","shadowsneak","icebeam","painsplit","substitute","seismictoss","toxic","trickroom"],
		tier: "NFE"
	},
	dusknoir: {
		randomBattleMoves: ["willowisp","shadowsneak","icepunch","painsplit","substitute","earthquake","focuspunch","trickroom"],
		tier: "NU"
	},
	tropius: {
		randomBattleMoves: ["leechseed","substitute","airslash","gigadrain","earthquake","hiddenpowerfire","roost","defog"],
		eventPokemon: [
			{"generation":4,"level":53,"gender":"F","nature":"Jolly","abilities":["chlorophyll"],"moves":["airslash","synthesis","sunnyday","solarbeam"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	chingling: {
		randomBattleMoves: ["hypnosis","reflect","lightscreen","toxic","recover","psychic","signalbeam","healbell"],
		tier: "LC"
	},
	chimecho: {
		randomBattleMoves: ["toxic","psychic","thunderwave","recover","calmmind","shadowball","dazzlinggleam","healingwish","healbell","taunt"],
		eventPokemon: [
			{"generation":3,"level":10,"gender":"M","moves":["wrap","growl","astonish"]}
		],
		tier: "NU"
	},
	absol: {
		randomBattleMoves: ["swordsdance","suckerpunch","knockoff","fireblast","superpower","pursuit","playrough"],
		eventPokemon: [
			{"generation":3,"level":5,"abilities":["pressure"],"moves":["scratch","leer","wish"]},
			{"generation":3,"level":5,"abilities":["pressure"],"moves":["scratch","leer","spite"]},
			{"generation":3,"level":35,"abilities":["pressure"],"moves":["razorwind","bite","swordsdance","spite"]},
			{"generation":3,"level":70,"abilities":["pressure"],"moves":["doubleteam","slash","futuresight","perishsong"]}
		],
		tier: "UU"
	},
	absolmega: {
		randomBattleMoves: ["swordsdance","suckerpunch","knockoff","fireblast","superpower","pursuit","playrough"],
		requiredItem: "Absolite"
	},
	snorunt: {
		randomBattleMoves: ["spikes","icebeam","hiddenpowerground","iceshard","crunch","switcheroo"],
		eventPokemon: [
			{"generation":3,"level":22,"abilities":["innerfocus"],"moves":["sing","waterpulse","bite","icywind"]}
		],
		tier: "LC"
	},
	glalie: {
		randomBattleMoves: ["spikes","icebeam","iceshard","taunt","earthquake","explosion"],
		tier: "NU"
	},
	froslass: {
		randomBattleMoves: ["icebeam","spikes","destinybond","shadowball","taunt","thunderwave"],
		tier: "BL2"
	},
	spheal: {
		randomBattleMoves: ["substitute","protect","toxic","surf","icebeam","yawn","superfang"],
		eventPokemon: [
			{"generation":3,"level":17,"abilities":["thickfat"],"moves":["charm","aurorabeam","watergun","mudslap"]}
		],
		tier: "LC"
	},
	sealeo: {
		randomBattleMoves: ["substitute","protect","toxic","surf","icebeam","yawn","superfang"],
		tier: "NFE"
	},
	walrein: {
		randomBattleMoves: ["substitute","protect","toxic","surf","icebeam","roar"],
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":false,"abilities":["thickfat"],"moves":["icebeam","surf","hail","sheercold"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	clamperl: {
		randomBattleMoves: ["shellsmash","icebeam","surf","hiddenpowergrass","hiddenpowerelectric","substitute"],
		tier: "LC"
	},
	huntail: {
		randomBattleMoves: ["shellsmash","return","hydropump","batonpass","suckerpunch"],
		tier: "NU"
	},
	gorebyss: {
		randomBattleMoves: ["shellsmash","batonpass","hydropump","icebeam","hiddenpowergrass","substitute"],
		tier: "NU"
	},
	relicanth: {
		randomBattleMoves: ["headsmash","waterfall","earthquake","doubleedge","stealthrock","toxic"],
		tier: "NU"
	},
	luvdisc: {
		randomBattleMoves: ["surf","icebeam","toxic","sweetkiss","protect"],
		tier: "NU"
	},
	bagon: {
		randomBattleMoves: ["outrage","dragondance","firefang","rockslide","dragonclaw"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["rage","bite","wish"]},
			{"generation":3,"level":5,"moves":["rage","bite","irondefense"]},
			{"generation":5,"level":1,"shiny":true,"isHidden":false,"moves":["rage"]}
		],
		tier: "LC"
	},
	shelgon: {
		randomBattleMoves: ["outrage","brickbreak","dragonclaw","dragondance","crunch","zenheadbutt"],
		tier: "NFE"
	},
	salamence: {
		randomBattleMoves: ["outrage","fireblast","earthquake","dracometeor","roost","dragondance","dragonclaw","hydropump","stoneedge"],
		eventPokemon: [
			{"generation":3,"level":50,"moves":["protect","dragonbreath","scaryface","fly"]},
			{"generation":3,"level":50,"moves":["refresh","dragonclaw","dragondance","aerialace"]},
			{"generation":4,"level":50,"gender":"M","nature":"Naughty","moves":["hydropump","stoneedge","fireblast","dragonclaw"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["dragondance","dragonclaw","outrage","aerialace"],"pokeball":"cherishball"}
		],
		tier: "BL"
	},
	beldum: {
		randomBattleMoves: ["ironhead","zenheadbutt","headbutt","irondefense"],
		tier: "LC"
	},
	metang: {
		randomBattleMoves: ["stealthrock","meteormash","toxic","earthquake","bulletpunch","zenheadbutt"],
		eventPokemon: [
			{"generation":3,"level":30,"moves":["takedown","confusion","metalclaw","refresh"]}
		],
		tier: "NFE"
	},
	metagross: {
		randomBattleMoves: ["meteormash","earthquake","agility","stealthrock","zenheadbutt","bulletpunch","thunderpunch","explosion","icepunch"],
		eventPokemon: [
			{"generation":4,"level":62,"nature":"Brave","moves":["bulletpunch","meteormash","hammerarm","zenheadbutt"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["meteormash","earthquake","bulletpunch","hammerarm"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"isHidden":false,"moves":["bulletpunch","zenheadbutt","hammerarm","icepunch"],"pokeball":"cherishball"},
			{"generation":5,"level":45,"isHidden":false,"moves":["earthquake","zenheadbutt","protect","meteormash"]},
			{"generation":5,"level":45,"isHidden":true,"moves":["irondefense","agility","hammerarm","doubleedge"]},
			{"generation":5,"level":45,"isHidden":true,"moves":["psychic","meteormash","hammerarm","doubleedge"]},
			{"generation":5,"level":58,"nature":"Serious","isHidden":false,"moves":["earthquake","hyperbeam","psychic","meteormash"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	regirock: {
		randomBattleMoves: ["stealthrock","thunderwave","stoneedge","drainpunch","curse","rest","sleeptalk","rockslide","toxic"],
		eventPokemon: [
			{"generation":3,"level":40,"moves":["curse","superpower","ancientpower","hyperbeam"]}
		],
		unreleasedHidden: true,
		tier: "NU"
	},
	regice: {
		randomBattleMoves: ["thunderwave","icebeam","thunderbolt","rest","sleeptalk","focusblast","rockpolish"],
		eventPokemon: [
			{"generation":3,"level":40,"moves":["curse","superpower","ancientpower","hyperbeam"]}
		],
		unreleasedHidden: true,
		tier: "NU"
	},
	registeel: {
		randomBattleMoves: ["stealthrock","ironhead","curse","rest","thunderwave","toxic","seismictoss"],
		eventPokemon: [
			{"generation":3,"level":40,"moves":["curse","superpower","ancientpower","hyperbeam"]}
		],
		unreleasedHidden: true,
		tier: "RU"
	},
	latias: {
		randomBattleMoves: ["dragonpulse","surf","thunderbolt","roost","calmmind","healingwish","defog"],
		eventPokemon: [
			{"generation":3,"level":50,"gender":"F","moves":["charm","recover","psychic","mistball"]},
			{"generation":3,"level":70,"gender":"F","moves":["mistball","psychic","recover","charm"]},
			{"generation":4,"level":40,"gender":"F","moves":["watersport","refresh","mistball","zenheadbutt"]}
		],
		tier: "OU"
	},
	latiasmega: {
		randomBattleMoves: ["dragonpulse","surf","thunderbolt","roost","calmmind","healingwish","defog"],
		requiredItem: "Latiasite",
		tier: "Unreleased"
	},
	latios: {
		randomBattleMoves: ["dracometeor","dragonpulse","surf","thunderbolt","psyshock","roost","trick","calmmind","defog"],
		eventPokemon: [
			{"generation":3,"level":50,"gender":"M","moves":["dragondance","recover","psychic","lusterpurge"]},
			{"generation":3,"level":70,"gender":"M","moves":["lusterpurge","psychic","recover","dragondance"]},
			{"generation":4,"level":40,"gender":"M","moves":["protect","refresh","lusterpurge","zenheadbutt"]}
		],
		tier: "OU"
	},
	latiosmega: {
		randomBattleMoves: ["dracometeor","dragonpulse","surf","thunderbolt","psyshock","roost","calmmind","defog"],
		requiredItem: "Latiosite",
		tier: "Unreleased"
	},
	kyogre: {
		randomBattleMoves: ["waterspout","surf","thunder","icebeam","calmmind","rest","sleeptalk","roar"],
		eventPokemon: [
			{"generation":5,"level":80,"moves":["icebeam","ancientpower","waterspout","thunder"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"moves":["waterspout","thunder","icebeam","sheercold"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	groudon: {
		randomBattleMoves: ["earthquake","roar","stealthrock","stoneedge","swordsdance","rockpolish","thunderwave","dragonclaw","firepunch"],
		eventPokemon: [
			{"generation":5,"level":80,"moves":["earthquake","ancientpower","eruption","solarbeam"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"moves":["eruption","hammerarm","earthpower","solarbeam"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	rayquaza: {
		randomBattleMoves: ["outrage","vcreate","extremespeed","dragondance","earthquake","dracometeor","dragonclaw"],
		eventPokemon: [
			{"generation":5,"level":70,"shiny":true,"moves":["dragonpulse","ancientpower","outrage","dragondance"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"moves":["extremespeed","hyperbeam","dragonpulse","vcreate"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	jirachi: {
		randomBattleMoves: ["bodyslam","ironhead","firepunch","thunderwave","stealthrock","wish","uturn","calmmind","psychic","thunderbolt","icepunch","trick"],
		eventPokemon: [
			{"generation":3,"level":5,"moves":["wish","confusion","rest"]},
			{"generation":3,"level":30,"moves":["helpinghand","psychic","refresh","rest"]},
			{"generation":4,"level":5,"moves":["wish","confusion","rest"],"pokeball":"cherishball"},
			{"generation":4,"level":5,"moves":["wish","confusion","rest","dracometeor"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["healingwish","psychic","swift","meteormash"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["dracometeor","meteormash","wish","followme"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["wish","healingwish","cosmicpower","meteormash"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["wish","healingwish","swift","return"],"pokeball":"cherishball"},
			{"generation":6,"level":10,"shiny":true,"moves":["wish","swift","healingwish","moonblast"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	deoxys: {
		randomBattleMoves: ["psychoboost","lowkick","extremespeed","icebeam","thunderbolt","firepunch","spikes","stealthrock","knockoff"],
		eventPokemon: [
			{"generation":3,"level":30,"moves":["snatch","psychic","spikes","knockoff"]},
			{"generation":3,"level":30,"moves":["superpower","psychic","pursuit","taunt"]},
			{"generation":3,"level":30,"moves":["swift","psychic","pursuit","knockoff"]},
			{"generation":3,"level":70,"moves":["cosmicpower","recover","psychoboost","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","zapcannon","irondefense","extremespeed"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["psychoboost","swift","doubleteam","extremespeed"]},
			{"generation":4,"level":50,"moves":["psychoboost","detect","counter","mirrorcoat"]},
			{"generation":4,"level":50,"moves":["psychoboost","meteormash","superpower","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","leer","wrap","nightshade"]},
			{"generation":5,"level":100,"moves":["nastyplot","darkpulse","recover","psychoboost"],"pokeball":"duskball"}
		],
		tier: "Uber"
	},
	deoxysattack: {
		randomBattleMoves: ["psychoboost","superpower","extremespeed","icebeam","thunderbolt","firepunch","spikes","stealthrock","knockoff"],
		eventPokemon: [
			{"generation":3,"level":30,"moves":["snatch","psychic","spikes","knockoff"]},
			{"generation":3,"level":30,"moves":["superpower","psychic","pursuit","taunt"]},
			{"generation":3,"level":30,"moves":["swift","psychic","pursuit","knockoff"]},
			{"generation":3,"level":70,"moves":["cosmicpower","recover","psychoboost","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","zapcannon","irondefense","extremespeed"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["psychoboost","swift","doubleteam","extremespeed"]},
			{"generation":4,"level":50,"moves":["psychoboost","detect","counter","mirrorcoat"]},
			{"generation":4,"level":50,"moves":["psychoboost","meteormash","superpower","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","leer","wrap","nightshade"]},
			{"generation":5,"level":100,"moves":["nastyplot","darkpulse","recover","psychoboost"],"pokeball":"duskball"}
		],
		tier: "Uber"
	},
	deoxysdefense: {
		randomBattleMoves: ["spikes","stealthrock","recover","taunt","toxic","seismictoss","magiccoat"],
		eventPokemon: [
			{"generation":3,"level":30,"moves":["snatch","psychic","spikes","knockoff"]},
			{"generation":3,"level":30,"moves":["superpower","psychic","pursuit","taunt"]},
			{"generation":3,"level":30,"moves":["swift","psychic","pursuit","knockoff"]},
			{"generation":3,"level":70,"moves":["cosmicpower","recover","psychoboost","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","zapcannon","irondefense","extremespeed"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["psychoboost","swift","doubleteam","extremespeed"]},
			{"generation":4,"level":50,"moves":["psychoboost","detect","counter","mirrorcoat"]},
			{"generation":4,"level":50,"moves":["psychoboost","meteormash","superpower","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","leer","wrap","nightshade"]},
			{"generation":5,"level":100,"moves":["nastyplot","darkpulse","recover","psychoboost"],"pokeball":"duskball"}
		],
		tier: "Uber"
	},
	deoxysspeed: {
		randomBattleMoves: ["spikes","stealthrock","superpower","icebeam","psychoboost","taunt","lightscreen","reflect","magiccoat","knockoff"],
		eventPokemon: [
			{"generation":3,"level":30,"moves":["snatch","psychic","spikes","knockoff"]},
			{"generation":3,"level":30,"moves":["superpower","psychic","pursuit","taunt"]},
			{"generation":3,"level":30,"moves":["swift","psychic","pursuit","knockoff"]},
			{"generation":3,"level":70,"moves":["cosmicpower","recover","psychoboost","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","zapcannon","irondefense","extremespeed"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["psychoboost","swift","doubleteam","extremespeed"]},
			{"generation":4,"level":50,"moves":["psychoboost","detect","counter","mirrorcoat"]},
			{"generation":4,"level":50,"moves":["psychoboost","meteormash","superpower","hyperbeam"]},
			{"generation":4,"level":50,"moves":["psychoboost","leer","wrap","nightshade"]},
			{"generation":5,"level":100,"moves":["nastyplot","darkpulse","recover","psychoboost"],"pokeball":"duskball"}
		],
		tier: "Uber"
	},
	turtwig: {
		randomBattleMoves: ["reflect","lightscreen","stealthrock","seedbomb","substitute","leechseed","toxic"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tackle","withdraw","absorb"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["tackle","withdraw","absorb","stockpile"]}
		],
		tier: "LC"
	},
	grotle: {
		randomBattleMoves: ["reflect","lightscreen","stealthrock","seedbomb","substitute","leechseed","toxic"],
		tier: "NFE"
	},
	torterra: {
		randomBattleMoves: ["stealthrock","earthquake","woodhammer","stoneedge","synthesis","leechseed","rockpolish"],
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["woodhammer","earthquake","outrage","stoneedge"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	chimchar: {
		randomBattleMoves: ["stealthrock","overheat","hiddenpowergrass","fakeout","uturn","gunkshot"],
		eventPokemon: [
			{"generation":4,"level":40,"gender":"M","nature":"Mild","moves":["flamethrower","thunderpunch","grassknot","helpinghand"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["scratch","leer","ember","taunt"]},
			{"generation":4,"level":40,"gender":"M","nature":"Hardy","moves":["flamethrower","thunderpunch","grassknot","helpinghand"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["leer","ember","taunt","fakeout"]}
		],
		tier: "LC"
	},
	monferno: {
		randomBattleMoves: ["stealthrock","overheat","hiddenpowergrass","fakeout","vacuumwave","uturn","gunkshot"],
		tier: "NFE"
	},
	infernape: {
		randomBattleMoves: ["stealthrock","fireblast","closecombat","uturn","grassknot","stoneedge","machpunch","swordsdance","nastyplot","flareblitz","hiddenpowerice","thunderpunch"],
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["fireblast","closecombat","uturn","grassknot"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	piplup: {
		randomBattleMoves: ["stealthrock","hydropump","scald","icebeam","hiddenpowerelectric","hiddenpowerfire","yawn","defog"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["pound","growl","bubble"]},
			{"generation":5,"level":15,"isHidden":false,"moves":["hydropump","featherdance","watersport","peck"],"pokeball":"cherishball"},
			{"generation":5,"level":15,"gender":"M","isHidden":false,"moves":["sing","round","featherdance","peck"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["pound","growl","bubble","featherdance"]}
		],
		tier: "LC"
	},
	prinplup: {
		randomBattleMoves: ["stealthrock","hydropump","scald","icebeam","hiddenpowerelectric","hiddenpowerfire","yawn","defog"],
		tier: "NFE"
	},
	empoleon: {
		randomBattleMoves: ["stealthrock","hydropump","scald","icebeam","hiddenpowerelectric","roar","grassknot","flashcannon","defog","agility"],
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["hydropump","icebeam","aquajet","grassknot"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	starly: {
		randomBattleMoves: ["bravebird","return","uturn","pursuit"],
		eventPokemon: [
			{"generation":4,"level":1,"gender":"M","nature":"Mild","moves":["tackle","growl"]}
		],
		tier: "LC"
	},
	staravia: {
		randomBattleMoves: ["bravebird","return","uturn","pursuit","defog"],
		tier: "NFE"
	},
	staraptor: {
		randomBattleMoves: ["bravebird","closecombat","uturn","quickattack","roost","doubleedge"],
		tier: "BL"
	},
	bidoof: {
		randomBattleMoves: ["return","aquatail","curse","quickattack","stealthrock","superfang"],
		eventPokemon: [
			{"generation":4,"level":1,"gender":"M","nature":"Lonely","abilities":["simple"],"moves":["tackle"]}
		],
		tier: "LC"
	},
	bibarel: {
		randomBattleMoves: ["return","waterfall","curse","quickattack","stealthrock","rest"],
		tier: "NU"
	},
	kricketot: {
		randomBattleMoves: ["endeavor","mudslap","bugbite","strugglebug"],
		tier: "LC"
	},
	kricketune: {
		randomBattleMoves: ["xscissor","endeavor","taunt","toxic","stickyweb","knockoff"],
		tier: "NU"
	},
	shinx: {
		randomBattleMoves: ["wildcharge","icefang","firefang","crunch"],
		tier: "LC"
	},
	luxio: {
		randomBattleMoves: ["wildcharge","icefang","firefang","crunch"],
		tier: "NFE"
	},
	luxray: {
		randomBattleMoves: ["wildcharge","icefang","voltswitch","crunch","superpower","facade"],
		tier: "NU"
	},
	cranidos: {
		randomBattleMoves: ["headsmash","rockslide","earthquake","zenheadbutt","firepunch","rockpolish","crunch"],
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"moves":["pursuit","takedown","crunch","headbutt"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	rampardos: {
		randomBattleMoves: ["headsmash","earthquake","zenheadbutt","rockpolish","crunch","stoneedge"],
		tier: "NU"
	},
	shieldon: {
		randomBattleMoves: ["stealthrock","metalburst","fireblast","icebeam","protect","toxic","roar"],
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"moves":["metalsound","takedown","bodyslam","protect"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	bastiodon: {
		randomBattleMoves: ["stealthrock","rockblast","magiccoat","protect","toxic","roar"],
		tier: "NU"
	},
	burmy: {
		randomBattleMoves: ["bugbite","hiddenpowerice","electroweb","protect"],
		tier: "LC"
	},
	wormadam: {
		randomBattleMoves: ["leafstorm","gigadrain","signalbeam","hiddenpowerice","hiddenpowerrock","toxic"],
		tier: "NU"
	},
	wormadamsandy: {
		randomBattleMoves: ["earthquake","toxic","rockblast","protect","stealthrock"],
		tier: "NU"
	},
	wormadamtrash: {
		randomBattleMoves: ["stealthrock","toxic","gyroball","protect"],
		tier: "NU"
	},
	mothim: {
		randomBattleMoves: ["quiverdance","bugbuzz","airslash","gigadrain","roost"],
		tier: "NU"
	},
	combee: {
		randomBattleMoves: ["bugbuzz","aircutter","endeavor","ominouswind","tailwind"],
		tier: "LC"
	},
	vespiquen: {
		randomBattleMoves: ["substitute","roost","toxic","attackorder","defendorder"],
		tier: "NU"
	},
	pachirisu: {
		randomBattleMoves: ["nuzzle","thunderbolt","superfang","toxic","uturn"],
		tier: "NU"
	},
	buizel: {
		randomBattleMoves: ["waterfall","aquajet","switcheroo","brickbreak","bulkup","batonpass","icepunch"],
		tier: "LC"
	},
	floatzel: {
		randomBattleMoves: ["waterfall","aquajet","switcheroo","bulkup","batonpass","icepunch","crunch","taunt"],
		tier: "NU"
	},
	cherubi: {
		randomBattleMoves: ["sunnyday","solarbeam","weatherball","hiddenpowerice","aromatherapy","dazzlinggleam"],
		tier: "LC"
	},
	cherrim: {
		randomBattleMoves: ["sunnyday","solarbeam","weatherball","hiddenpowerice"],
		tier: "NU"
	},
	shellos: {
		randomBattleMoves: ["scald","clearsmog","recover","toxic","icebeam","stockpile"],
		tier: "LC"
	},
	gastrodon: {
		randomBattleMoves: ["earthquake","icebeam","scald","toxic","recover"],
		tier: "RU"
	},
	drifloon: {
		randomBattleMoves: ["shadowball","substitute","calmmind","hypnosis","hiddenpowerfighting","thunderbolt","destinybond","willowisp","stockpile","batonpass","disable"],
		tier: "LC"
	},
	drifblim: {
		randomBattleMoves: ["shadowball","substitute","calmmind","hiddenpowerfighting","thunderbolt","destinybond","willowisp","batonpass"],
		tier: "NU"
	},
	buneary: {
		randomBattleMoves: ["fakeout","return","switcheroo","thunderpunch","jumpkick","firepunch","icepunch","healingwish"],
		tier: "LC"
	},
	lopunny: {
		randomBattleMoves: ["return","switcheroo","jumpkick","firepunch","icepunch","healingwish"],
		tier: "NU"
	},
	glameow: {
		randomBattleMoves: ["fakeout","uturn","suckerpunch","hypnosis","quickattack","return","foulplay"],
		tier: "LC"
	},
	purugly: {
		randomBattleMoves: ["fakeout","uturn","suckerpunch","quickattack","return","knockoff"],
		tier: "NU"
	},
	stunky: {
		randomBattleMoves: ["pursuit","suckerpunch","crunch","fireblast","explosion","taunt","poisonjab","playrough","defog"],
		tier: "LC"
	},
	skuntank: {
		randomBattleMoves: ["pursuit","suckerpunch","crunch","fireblast","taunt","poisonjab","playrough","defog"],
		tier: "RU"
	},
	bronzor: {
		randomBattleMoves: ["stealthrock","psychic","toxic","hypnosis","reflect","lightscreen","trickroom","trick"],
		tier: "LC"
	},
	bronzong: {
		randomBattleMoves: ["stealthrock","earthquake","toxic","reflect","lightscreen","trickroom","explosion","gyroball"],
		tier: "RU"
	},
	chatot: {
		randomBattleMoves: ["nastyplot","boomburst","heatwave","encore","substitute","chatter","uturn"],
		eventPokemon: [
			{"generation":4,"level":25,"gender":"M","nature":"Jolly","abilities":["keeneye"],"moves":["mirrormove","furyattack","chatter","taunt"]}
		],
		tier: "NU"
	},
	spiritomb: {
		randomBattleMoves: ["shadowsneak","suckerpunch","pursuit","willowisp","calmmind","darkpulse","rest","sleeptalk","foulplay","painsplit"],
		eventPokemon: [
			{"generation":5,"level":61,"gender":"F","nature":"Quiet","isHidden":false,"moves":["darkpulse","psychic","silverwind","embargo"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	gible: {
		randomBattleMoves: ["outrage","dragonclaw","earthquake","fireblast","stoneedge","stealthrock"],
		tier: "LC"
	},
	gabite: {
		randomBattleMoves: ["outrage","dragonclaw","earthquake","fireblast","stoneedge","stealthrock"],
		tier: "NFE"
	},
	garchomp: {
		randomBattleMoves: ["outrage","dragonclaw","earthquake","stoneedge","fireblast","swordsdance","stealthrock"],
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["outrage","earthquake","swordsdance","stoneedge"],"pokeball":"cherishball"},
			{"generation":5,"level":48,"gender":"M","isHidden":true,"moves":["dragonclaw","dig","crunch","outrage"]},
			{"generation":6,"level":48,"gender":"M","isHidden":false,"moves":["dracometeor","dragonclaw","dig","crunch"],"pokeball":"cherishball"},
			{"generation":6,"level":50,"gender":"M","isHidden":false,"moves":["slash","dragonclaw","dig","crunch"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	garchompmega: {
		randomBattleMoves: ["outrage","dragonclaw","earthquake","stoneedge","fireblast","swordsdance","stealthrock"],
		requiredItem: "Garchompite"
	},
	riolu: {
		randomBattleMoves: ["crunch","rockslide","copycat","drainpunch","highjumpkick","icepunch","swordsdance"],
		eventPokemon: [
			{"generation":4,"level":30,"gender":"M","nature":"Serious","abilities":["steadfast"],"moves":["aurasphere","shadowclaw","bulletpunch","drainpunch"]}
		],
		tier: "LC"
	},
	lucario: {
		randomBattleMoves: ["swordsdance","closecombat","crunch","extremespeed","icepunch","bulletpunch","nastyplot","aurasphere","darkpulse","vacuumwave","flashcannon"],
		eventPokemon: [
			{"generation":4,"level":50,"gender":"M","nature":"Modest","abilities":["steadfast"],"moves":["aurasphere","darkpulse","dragonpulse","waterpulse"],"pokeball":"cherishball"},
			{"generation":4,"level":30,"gender":"M","nature":"Adamant","abilities":["innerfocus"],"moves":["forcepalm","bonerush","sunnyday","blazekick"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["detect","metalclaw","counter","bulletpunch"]},
			{"generation":5,"level":50,"gender":"M","nature":"Naughty","isHidden":true,"moves":["bulletpunch","closecombat","stoneedge","shadowclaw"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	lucariomega: {
		randomBattleMoves: ["swordsdance","closecombat","crunch","extremespeed","icepunch","bulletpunch","nastyplot","aurasphere","darkpulse","vacuumwave","flashcannon"],
		requiredItem: "Lucarionite",
		tier: "Uber"
	},
	hippopotas: {
		randomBattleMoves: ["earthquake","slackoff","whirlwind","stealthrock","protect","toxic","stockpile"],
		tier: "LC"
	},
	hippowdon: {
		randomBattleMoves: ["earthquake","slackoff","whirlwind","stealthrock","toxic","stoneedge"],
		tier: "UU"
	},
	skorupi: {
		randomBattleMoves: ["toxicspikes","xscissor","poisonjab","knockoff","pinmissile","whirlwind"],
		tier: "LC"
	},
	drapion: {
		randomBattleMoves: ["whirlwind","toxicspikes","pursuit","earthquake","aquatail","swordsdance","poisonjab","knockoff"],
		tier: "RU"
	},
	croagunk: {
		randomBattleMoves: ["fakeout","vacuumwave","suckerpunch","drainpunch","darkpulse","knockoff","gunkshot","toxic"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["astonish","mudslap","poisonsting","taunt"]},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["mudslap","poisonsting","taunt","poisonjab"]}
		],
		tier: "LC"
	},
	toxicroak: {
		randomBattleMoves: ["suckerpunch","drainpunch","substitute","swordsdance","knockoff","icepunch","gunkshot"],
		tier: "UU"
	},
	carnivine: {
		randomBattleMoves: ["swordsdance","powerwhip","return","sleeppowder","substitute","leechseed","knockoff"],
		tier: "NU"
	},
	finneon: {
		randomBattleMoves: ["surf","uturn","icebeam","hiddenpowerelectric","hiddenpowergrass","raindance"],
		tier: "LC"
	},
	lumineon: {
		randomBattleMoves: ["surf","uturn","icebeam","hiddenpowerelectric","hiddenpowergrass","raindance","defog"],
		tier: "NU"
	},
	snover: {
		randomBattleMoves: ["blizzard","iceshard","gigadrain","leechseed","substitute","woodhammer"],
		tier: "LC"
	},
	abomasnow: {
		randomBattleMoves: ["blizzard","iceshard","gigadrain","leechseed","substitute","focusblast","woodhammer","earthquake"],
		tier: "RU"
	},
	abomasnowmega: {
		randomBattleMoves: ["blizzard","iceshard","gigadrain","leechseed","substitute","focusblast","woodhammer","earthquake"],
		requiredItem: "Abomasite"
	},
	rotom: {
		randomBattleMoves: ["thunderbolt","voltswitch","shadowball","substitute","painsplit","hiddenpowerice","trick","willowisp"],
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	rotomheat: {
		randomBattleMoves: ["overheat","thunderbolt","voltswitch","substitute","painsplit","hiddenpowerice","willowisp","trick"],
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	rotomwash: {
		randomBattleMoves: ["hydropump","thunderbolt","voltswitch","substitute","painsplit","hiddenpowerice","willowisp","trick"],
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	rotomfrost: {
		randomBattleMoves: ["blizzard","thunderbolt","voltswitch","substitute","painsplit","willowisp","trick"],
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	rotomfan: {
		randomBattleMoves: ["airslash","thunderbolt","voltswitch","substitute","painsplit","hiddenpowerice","willowisp","trick"],
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	rotommow: {
		randomBattleMoves: ["leafstorm","thunderbolt","voltswitch","substitute","painsplit","hiddenpowerfire","willowisp","trick"],
		eventPokemon: [
			{"generation":5,"level":10,"nature":"Naughty","moves":["uproar","astonish","trick","thundershock"],"pokeball":"cherishball"}
		],
		tier: "RU"
	},
	uxie: {
		randomBattleMoves: ["uturn","psyshock","yawn","healbell","stealthrock","toxic","thunderbolt","substitute","calmmind"],
		tier: "NU"
	},
	mesprit: {
		randomBattleMoves: ["calmmind","psyshock","thunderbolt","icebeam","substitute","uturn","trick","stealthrock","knockoff","zenheadbutt"],
		tier: "NU"
	},
	azelf: {
		randomBattleMoves: ["nastyplot","psychic","fireblast","grassknot","thunderbolt","icepunch","knockoff","zenheadbutt","uturn","trick","taunt","stealthrock","explosion"],
		tier: "UU"
	},
	dialga: {
		randomBattleMoves: ["stealthrock","dracometeor","dragonpulse","roar","thunderbolt","flashcannon","outrage","fireblast","aurasphere"],
		eventPokemon: [
			{"generation":5,"level":100,"shiny":true,"isHidden":false,"moves":["dragonpulse","dracometeor","aurasphere","roaroftime"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Uber"
	},
	palkia: {
		randomBattleMoves: ["spacialrend","dracometeor","surf","hydropump","thunderbolt","outrage","fireblast"],
		eventPokemon: [
			{"generation":5,"level":100,"shiny":true,"isHidden":false,"moves":["hydropump","dracometeor","spacialrend","aurasphere"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Uber"
	},
	heatran: {
		randomBattleMoves: ["substitute","fireblast","lavaplume","willowisp","stealthrock","earthpower","hiddenpowerice","protect","toxic","roar"],
		randomDoubleBattleMoves: ["heatwave","substitute","earthpower","protect","eruption","willowisp"],
		eventPokemon: [
			{"generation":4,"level":50,"nature":"Quiet","moves":["eruption","magmastorm","earthpower","ancientpower"]}
		],
		unreleasedHidden: true,
		tier: "OU"
	},
	regigigas: {
		randomBattleMoves: ["thunderwave","substitute","return","drainpunch","earthquake","confuseray"],
		eventPokemon: [
			{"generation":4,"level":100,"moves":["ironhead","rockslide","icywind","crushgrip"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	giratina: {
		randomBattleMoves: ["rest","sleeptalk","dragontail","roar","willowisp","calmmind","dragonpulse","shadowball"],
		eventPokemon: [
			{"generation":5,"level":100,"shiny":true,"isHidden":false,"moves":["dragonpulse","dragonclaw","aurasphere","shadowforce"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "Uber"
	},
	giratinaorigin: {
		randomBattleMoves: ["dracometeor","shadowsneak","dragontail","hiddenpowerfire","willowisp","calmmind","substitute","dragonpulse","shadowball","aurasphere","outrage","earthquake"],
		requiredItem: "Griseous Orb",
		tier: "Uber"
	},
	cresselia: {
		randomBattleMoves: ["moonlight","psychic","icebeam","thunderwave","toxic","lunardance","rest","sleeptalk","calmmind"],
		randomDoubleBattleMoves: ["psyshock","icywind","thunderwave","trickroom","moonblast","moonlight","skillswap","reflect","lightscreen","icebeam","protect","helpinghand"],
		eventPokemon: [
			{"generation":5,"level":68,"gender":"F","nature":"Modest","moves":["icebeam","psyshock","energyball","hiddenpower"]}
		],
		tier: "RU"
	},
	phione: {
		randomBattleMoves: ["raindance","scald","uturn","rest","icebeam"],
		eventPokemon: [
			{"generation":4,"level":50,"abilities":["hydration"],"moves":["grassknot","raindance","rest","surf"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	manaphy: {
		randomBattleMoves: ["tailglow","surf","icebeam","energyball","psychic"],
		eventPokemon: [
			{"generation":4,"level":5,"moves":["tailglow","bubble","watersport"]},
			{"generation":4,"level":1,"moves":["tailglow","bubble","watersport"]},
			{"generation":4,"level":50,"moves":["acidarmor","whirlpool","waterpulse","heartswap"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["heartswap","waterpulse","whirlpool","acidarmor"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["heartswap","whirlpool","waterpulse","acidarmor"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"nature":"Impish","moves":["aquaring","waterpulse","watersport","heartswap"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	darkrai: {
		randomBattleMoves: ["darkvoid","darkpulse","focusblast","nastyplot","substitute","trick","sludgebomb"],
		randomDoubleBattleMoves: ["darkpulse","focusblast","nastyplot","substitute","snarl","protect"],
		eventPokemon: [
			{"generation":4,"level":50,"moves":["roaroftime","spacialrend","nightmare","hypnosis"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["darkvoid","darkpulse","shadowball","doubleteam"]},
			{"generation":4,"level":50,"moves":["nightmare","hypnosis","roaroftime","spacialrend"],"pokeball":"cherishball"},
			{"generation":4,"level":50,"moves":["doubleteam","nightmare","feintattack","hypnosis"]},
			{"generation":5,"level":50,"moves":["darkvoid","ominouswind","feintattack","nightmare"],"pokeball":"cherishball"},
			{"generation":6,"level":50,"moves":["darkvoid","darkpulse","phantomforce","dreameater"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	shaymin: {
		randomBattleMoves: ["seedflare","earthpower","airslash","hiddenpowerfire","rest","substitute","leechseed"],
		eventPokemon: [
			{"generation":4,"level":50,"moves":["seedflare","aromatherapy","substitute","energyball"],"pokeball":"cherishball"},
			{"generation":4,"level":30,"moves":["synthesis","leechseed","magicalleaf","growth"]},
			{"generation":4,"level":30,"moves":["growth","magicalleaf","leechseed","synthesis"]},
			{"generation":5,"level":50,"moves":["seedflare","leechseed","synthesis","sweetscent"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	shayminsky: {
		randomBattleMoves: ["seedflare","earthpower","airslash","hiddenpowerice","hiddenpowerfire","substitute","leechseed"],
		eventPokemon: [
			{"generation":4,"level":50,"moves":["seedflare","aromatherapy","substitute","energyball"],"pokeball":"cherishball"},
			{"generation":4,"level":30,"moves":["synthesis","leechseed","magicalleaf","growth"]},
			{"generation":4,"level":30,"moves":["growth","magicalleaf","leechseed","synthesis"]},
			{"generation":5,"level":50,"moves":["seedflare","leechseed","synthesis","sweetscent"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	arceus: {
		randomBattleMoves: ["swordsdance","extremespeed","shadowclaw","earthquake","recover"],
		eventPokemon: [
			{"generation":4,"level":100,"moves":["judgment","roaroftime","spacialrend","shadowforce"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"moves":["recover","hyperbeam","perishsong","judgment"]}
		],
		tier: "Uber"
	},
	arceusbug: {
		randomBattleMoves: ["swordsdance","xscissor","stoneedge","recover","earthquake","ironhead"],
		requiredItem: "Insect Plate"
	},
	arceusdark: {
		randomBattleMoves: ["calmmind","judgment","recover","refresh"],
		requiredItem: "Dread Plate"
	},
	arceusdragon: {
		randomBattleMoves: ["swordsdance","outrage","extremespeed","earthquake","recover"],
		requiredItem: "Draco Plate"
	},
	arceuselectric: {
		randomBattleMoves: ["calmmind","judgment","recover","icebeam"],
		requiredItem: "Zap Plate"
	},
	arceusfairy: {
		randomBattleMoves: ["calmmind","judgment","recover","willowisp","defog","earthpower","thunderbolt"],
		requiredItem: "Pixie Plate",
		gen: 6
	},
	arceusfighting: {
		randomBattleMoves: ["calmmind","judgment","icebeam","shadowball","recover","toxic","defog"],
		requiredItem: "Fist Plate"
	},
	arceusfire: {
		randomBattleMoves: ["calmmind","judgment","thunderbolt","recover"],
		requiredItem: "Flame Plate"
	},
	arceusflying: {
		randomBattleMoves: ["calmmind","judgment","refresh","recover","substitute"],
		requiredItem: "Sky Plate"
	},
	arceusghost: {
		randomBattleMoves: ["calmmind","judgment","focusblast","recover","swordsdance","shadowforce","brickbreak","willowisp","roar","defog"],
		requiredItem: "Spooky Plate"
	},
	arceusgrass: {
		randomBattleMoves: ["calmmind","icebeam","judgment","earthpower","recover","stealthrock","thunderwave","defog"],
		requiredItem: "Meadow Plate"
	},
	arceusground: {
		randomBattleMoves: ["swordsdance","earthquake","stoneedge","recover","calmmind","judgment","icebeam","stealthrock"],
		requiredItem: "Earth Plate"
	},
	arceusice: {
		randomBattleMoves: ["calmmind","judgment","thunderbolt","focusblast","recover"],
		requiredItem: "Icicle Plate"
	},
	arceuspoison: {
		randomBattleMoves: ["calmmind","judgment","sludgebomb","fireblast","recover","willowisp","defog","stealthrock"],
		requiredItem: "Toxic Plate"
	},
	arceuspsychic: {
		randomBattleMoves: ["calmmind","psyshock","focusblast","recover","willowisp","judgment"],
		requiredItem: "Mind Plate"
	},
	arceusrock: {
		randomBattleMoves: ["calmmind","judgment","recover","willowisp","defog","refresh"],
		requiredItem: "Stone Plate"
	},
	arceussteel: {
		randomBattleMoves: ["calmmind","judgment","recover","roar","willowisp","defog"],
		requiredItem: "Iron Plate"
	},
	arceuswater: {
		randomBattleMoves: ["recover","calmmind","judgment","icebeam","fireblast","defog","willowisp"],
		requiredItem: "Splash Plate"
	},
	victini: {
		randomBattleMoves: ["vcreate","boltstrike","uturn","psychic","focusblast","blueflare"],
		eventPokemon: [
			{"generation":5,"level":15,"moves":["incinerate","quickattack","endure","confusion"]},
			{"generation":5,"level":50,"moves":["vcreate","fusionflare","fusionbolt","searingshot"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"moves":["vcreate","blueflare","boltstrike","glaciate"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	snivy: {
		randomBattleMoves: ["leafstorm","hiddenpowerfire","substitute","leechseed","hiddenpowerice","gigadrain"],
		eventPokemon: [
			{"generation":5,"level":5,"gender":"M","nature":"Hardy","isHidden":false,"moves":["growth","synthesis","energyball","aromatherapy"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "LC"
	},
	servine: {
		randomBattleMoves: ["leafstorm","hiddenpowerfire","substitute","leechseed","hiddenpowerice","gigadrain"],
		unreleasedHidden: true,
		tier: "NFE"
	},
	serperior: {
		randomBattleMoves: ["leafstorm","hiddenpowerfire","substitute","leechseed","dragonpulse","gigadrain"],
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["leafstorm","substitute","gigadrain","leechseed"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "NU"
	},
	tepig: {
		randomBattleMoves: ["flamecharge","flareblitz","wildcharge","superpower","headsmash"],
		unreleasedHidden: true,
		tier: "LC"
	},
	pignite: {
		randomBattleMoves: ["flamecharge","flareblitz","wildcharge","superpower","headsmash"],
		unreleasedHidden: true,
		tier: "NFE"
	},
	emboar: {
		randomBattleMoves: ["flareblitz","superpower","flamecharge","wildcharge","headsmash","earthquake","fireblast"],
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["flareblitz","hammerarm","wildcharge","headsmash"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "RU"
	},
	oshawott: {
		randomBattleMoves: ["swordsdance","waterfall","aquajet","xscissor"],
		unreleasedHidden: true,
		tier: "LC"
	},
	dewott: {
		randomBattleMoves: ["swordsdance","waterfall","aquajet","xscissor"],
		unreleasedHidden: true,
		tier: "NFE"
	},
	samurott: {
		randomBattleMoves: ["swordsdance","aquajet","waterfall","megahorn","superpower"],
		eventPokemon: [
			{"generation":5,"level":100,"gender":"M","isHidden":false,"moves":["hydropump","icebeam","megahorn","superpower"],"pokeball":"cherishball"}
		],
		unreleasedHidden: true,
		tier: "NU"
	},
	patrat: {
		randomBattleMoves: ["swordsdance","batonpass","substitute","hypnosis","return","superfang"],
		tier: "LC"
	},
	watchog: {
		randomBattleMoves: ["swordsdance","batonpass","substitute","hypnosis","return","superfang"],
		tier: "NU"
	},
	lillipup: {
		randomBattleMoves: ["return","wildcharge","firefang","crunch","icefang"],
		tier: "LC"
	},
	herdier: {
		randomBattleMoves: ["return","wildcharge","firefang","crunch","icefang"],
		tier: "NFE"
	},
	stoutland: {
		randomBattleMoves: ["return","wildcharge","superpower","crunch","icefang"],
		tier: "NU"
	},
	purrloin: {
		randomBattleMoves: ["encore","suckerpunch","playrough","uturn","knockoff"],
		tier: "LC"
	},
	liepard: {
		randomBattleMoves: ["encore","thunderwave","substitute","knockoff","playrough","uturn","suckerpunch"],
		eventPokemon: [
			{"generation":5,"level":20,"gender":"F","nature":"Jolly","isHidden":true,"moves":["fakeout","foulplay","encore","swagger"]}
		],
		tier: "NU"
	},
	pansage: {
		randomBattleMoves: ["leafstorm","hiddenpowerfire","hiddenpowerice","gigadrain","nastyplot","substitute","leechseed"],
		eventPokemon: [
			{"generation":5,"level":1,"gender":"M","nature":"Brave","isHidden":false,"moves":["bulletseed","bite","solarbeam","dig"],"pokeball":"cherishball"},
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["leer","lick","vinewhip","leafstorm"]},
			{"generation":5,"level":30,"gender":"M","nature":"Serious","isHidden":false,"moves":["seedbomb","solarbeam","rocktomb","dig"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	simisage: {
		randomBattleMoves: ["nastyplot","leafstorm","hiddenpowerfire","hiddenpowerice","gigadrain","focusblast","substitute","leechseed","synthesis"],
		tier: "NU"
	},
	pansear: {
		randomBattleMoves: ["nastyplot","fireblast","hiddenpowerelectric","hiddenpowerground","sunnyday","solarbeam","overheat"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["leer","lick","incinerate","heatwave"]}
		],
		tier: "LC"
	},
	simisear: {
		randomBattleMoves: ["nastyplot","fireblast","focusblast","grassknot","hiddenpowerground","substitute","flamethrower","overheat"],
		tier: "NU"
	},
	panpour: {
		randomBattleMoves: ["nastyplot","hydropump","hiddenpowergrass","substitute","surf","icebeam"],
		eventPokemon: [
			{"generation":5,"level":10,"gender":"M","isHidden":true,"moves":["leer","lick","watergun","hydropump"]}
		],
		tier: "LC"
	},
	simipour: {
		randomBattleMoves: ["nastyplot","hydropump","icebeam","substitute","grassknot","surf"],
		tier: "NU"
	},
	munna: {
		randomBattleMoves: ["psychic","hiddenpowerfighting","hypnosis","calmmind","moonlight","thunderwave","batonpass","psyshock","healbell","signalbeam"],
		tier: "LC"
	},
	musharna: {
		randomBattleMoves: ["calmmind","thunderwave","moonlight","psychic","hiddenpowerfighting","batonpass","psyshock","healbell","signalbeam"],
		eventPokemon: [
			{"generation":5,"level":50,"isHidden":true,"moves":["defensecurl","luckychant","psybeam","hypnosis"]}
		],
		tier: "NU"
	},
	pidove: {
		randomBattleMoves: ["pluck","uturn","return","detect","roost","wish"],
		eventPokemon: [
			{"generation":5,"level":1,"gender":"F","nature":"Hardy","isHidden":false,"abilities":["superluck"],"moves":["gust","quickattack","aircutter"]}
		],
		tier: "LC"
	},
	tranquill: {
		randomBattleMoves: ["pluck","uturn","return","detect","roost","wish"],
		tier: "NFE"
	},
	unfezant: {
		randomBattleMoves: ["pluck","uturn","return","detect","roost","wish"],
		tier: "NU"
	},
	blitzle: {
		randomBattleMoves: ["voltswitch","hiddenpowergrass","wildcharge","mefirst"],
		tier: "LC"
	},
	zebstrika: {
		randomBattleMoves: ["voltswitch","hiddenpowergrass","overheat","wildcharge"],
		tier: "NU"
	},
	roggenrola: {
		randomBattleMoves: ["autotomize","stoneedge","stealthrock","rockblast","earthquake","explosion"],
		tier: "LC"
	},
	boldore: {
		randomBattleMoves: ["autotomize","stoneedge","stealthrock","rockblast","earthquake","explosion"],
		tier: "NFE"
	},
	gigalith: {
		randomBattleMoves: ["stealthrock","rockblast","earthquake","explosion","stoneedge","autotomize","superpower"],
		tier: "NU"
	},
	woobat: {
		randomBattleMoves: ["calmmind","psychic","airslash","gigadrain","roost","heatwave","storedpower"],
		tier: "LC"
	},
	swoobat: {
		randomBattleMoves: ["calmmind","psychic","airslash","gigadrain","roost","heatwave","storedpower"],
		tier: "NU"
	},
	drilbur: {
		randomBattleMoves: ["swordsdance","rapidspin","earthquake","rockslide","shadowclaw","return","xscissor"],
		tier: "LC"
	},
	excadrill: {
		randomBattleMoves: ["swordsdance","rapidspin","earthquake","rockslide","ironhead"],
		tier: "OU"
	},
	audino: {
		randomBattleMoves: ["wish","protect","healbell","toxic","thunderwave","reflect","lightscreen","return"],
		eventPokemon: [
			{"generation":5,"level":30,"gender":"F","nature":"Calm","isHidden":false,"abilities":["healer"],"moves":["healpulse","helpinghand","refresh","doubleslap"],"pokeball":"cherishball"},
			{"generation":5,"level":30,"gender":"F","nature":"Serious","isHidden":false,"abilities":["healer"],"moves":["healpulse","helpinghand","refresh","present"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	timburr: {
		randomBattleMoves: ["machpunch","bulkup","drainpunch","icepunch","knockoff"],
		tier: "LC"
	},
	gurdurr: {
		randomBattleMoves: ["bulkup","machpunch","drainpunch","icepunch","knockoff"],
		tier: "NFE"
	},
	conkeldurr: {
		randomBattleMoves: ["bulkup","machpunch","drainpunch","icepunch","knockoff"],
		tier: "OU"
	},
	tympole: {
		randomBattleMoves: ["hydropump","surf","sludgewave","earthpower","hiddenpowerelectric"],
		tier: "LC"
	},
	palpitoad: {
		randomBattleMoves: ["hydropump","surf","sludgewave","earthpower","hiddenpowerelectric","stealthrock"],
		tier: "NFE"
	},
	seismitoad: {
		randomBattleMoves: ["hydropump","surf","sludgewave","earthpower","hiddenpowerelectric","stealthrock"],
		tier: "NU"
	},
	throh: {
		randomBattleMoves: ["bulkup","circlethrow","icepunch","stormthrow","rest","sleeptalk"],
		tier: "NU"
	},
	sawk: {
		randomBattleMoves: ["closecombat","earthquake","icepunch","stoneedge","bulkup"],
		tier: "NU"
	},
	sewaddle: {
		randomBattleMoves: ["calmmind","gigadrain","bugbuzz","hiddenpowerfire","hiddenpowerice","airslash"],
		tier: "LC"
	},
	swadloon: {
		randomBattleMoves: ["calmmind","gigadrain","bugbuzz","hiddenpowerfire","hiddenpowerice","airslash","stickyweb"],
		tier: "NFE"
	},
	leavanny: {
		randomBattleMoves: ["swordsdance","leafblade","xscissor","batonpass","stickyweb","poisonjab"],
		tier: "NU"
	},
	venipede: {
		randomBattleMoves: ["toxicspikes","steamroller","spikes","poisonjab"],
		tier: "LC"
	},
	whirlipede: {
		randomBattleMoves: ["toxicspikes","steamroller","spikes","poisonjab"],
		tier: "NFE"
	},
	scolipede: {
		randomBattleMoves: ["spikes","toxicspikes","megahorn","rockslide","earthquake","swordsdance","batonpass","aquatail","superpower"],
		tier: "OU"
	},
	cottonee: {
		randomBattleMoves: ["encore","taunt","substitute","leechseed","toxic","stunspore"],
		tier: "LC"
	},
	whimsicott: {
		randomBattleMoves: ["encore","taunt","substitute","leechseed","uturn","toxic","stunspore","memento","tailwind"],
		eventPokemon: [
			{"generation":5,"level":50,"gender":"F","nature":"Timid","isHidden":false,"abilities":["prankster"],"moves":["swagger","gigadrain","beatup","helpinghand"],"pokeball":"cherishball"}
		],
		tier: "RU"
	},
	petilil: {
		randomBattleMoves: ["sunnyday","sleeppowder","solarbeam","hiddenpowerfire","hiddenpowerice","healingwish"],
		tier: "LC"
	},
	lilligant: {
		randomBattleMoves: ["quiverdance","gigadrain","sleeppowder","hiddenpowerice","hiddenpowerfire","hiddenpowerrock","petaldance"],
		tier: "NU"
	},
	basculin: {
		randomBattleMoves: ["waterfall","aquajet","superpower","crunch","doubleedge"],
		tier: "NU"
	},
	basculinbluestriped: {
		randomBattleMoves: ["waterfall","aquajet","superpower","crunch","doubleedge"],
		tier: "NU"
	},
	sandile: {
		randomBattleMoves: ["earthquake","stoneedge","pursuit","crunch"],
		tier: "LC"
	},
	krokorok: {
		randomBattleMoves: ["earthquake","stoneedge","pursuit","crunch"],
		tier: "NFE"
	},
	krookodile: {
		randomBattleMoves: ["earthquake","stoneedge","pursuit","crunch","bulkup","superpower"],
		tier: "UU"
	},
	darumaka: {
		randomBattleMoves: ["uturn","flareblitz","firepunch","rockslide","superpower"],
		tier: "LC"
	},
	darmanitan: {
		randomBattleMoves: ["uturn","flareblitz","firepunch","rockslide","earthquake","superpower"],
		eventPokemon: [
			{"generation":5,"level":35,"isHidden":true,"moves":["thrash","bellydrum","flareblitz","hammerarm"]}
		],
		tier: "UU"
	},
	maractus: {
		randomBattleMoves: ["spikes","gigadrain","leechseed","hiddenpowerfire","toxic","suckerpunch"],
		tier: "NU"
	},
	dwebble: {
		randomBattleMoves: ["stealthrock","spikes","shellsmash","earthquake","rockblast","xscissor","stoneedge"],
		tier: "LC"
	},
	crustle: {
		randomBattleMoves: ["stealthrock","spikes","shellsmash","earthquake","rockblast","xscissor","stoneedge"],
		tier: "NU"
	},
	scraggy: {
		randomBattleMoves: ["dragondance","icepunch","highjumpkick","drainpunch","rest","bulkup","crunch","knockoff"],
		eventPokemon: [
			{"generation":5,"level":1,"gender":"M","nature":"Adamant","isHidden":false,"abilities":["moxie"],"moves":["headbutt","leer","highjumpkick","lowkick"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	scrafty: {
		randomBattleMoves: ["dragondance","icepunch","highjumpkick","drainpunch","rest","bulkup","crunch","knockoff"],
		randomDoubleBattleMoves: ["fakeout","drainpunch","knockoff","icepunch","stoneedge", "detect"],
		eventPokemon: [
			{"generation":5,"level":50,"gender":"M","nature":"Brave","isHidden":false,"abilities":["moxie"],"moves":["firepunch","payback","drainpunch","substitute"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	sigilyph: {
		randomBattleMoves: ["cosmicpower","roost","storedpower","psychoshift"],
		tier: "BL3"
	},
	yamask: {
		randomBattleMoves: ["nastyplot","trickroom","shadowball","hiddenpowerfighting","willowisp","haze","rest","sleeptalk","painsplit"],
		tier: "LC"
	},
	cofagrigus: {
		randomBattleMoves: ["nastyplot","trickroom","shadowball","hiddenpowerfighting","willowisp","haze","rest","sleeptalk","painsplit"],
		tier: "RU"
	},
	tirtouga: {
		randomBattleMoves: ["shellsmash","aquajet","waterfall","stoneedge","earthquake","stealthrock"],
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","isHidden":false,"abilities":["sturdy"],"moves":["bite","protect","aquajet","bodyslam"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	carracosta: {
		randomBattleMoves: ["shellsmash","aquajet","waterfall","stoneedge","earthquake","stealthrock"],
		tier: "NU"
	},
	archen: {
		randomBattleMoves: ["stoneedge","rockslide","earthquake","uturn","pluck","headsmash"],
		eventPokemon: [
			{"generation":5,"level":15,"gender":"M","moves":["headsmash","wingattack","doubleteam","scaryface"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	archeops: {
		randomBattleMoves: ["stoneedge","rockslide","earthquake","uturn","pluck","headsmash"],
		tier: "NU"
	},
	trubbish: {
		randomBattleMoves: ["clearsmog","toxicspikes","spikes","gunkshot","painsplit","toxic"],
		tier: "LC"
	},
	garbodor: {
		randomBattleMoves: ["spikes","toxicspikes","gunkshot","haze","painsplit","toxic","rockblast"],
		tier: "NU"
	},
	zorua: {
		randomBattleMoves: ["suckerpunch","extrasensory","darkpulse","hiddenpowerfighting","uturn","knockoff"],
		tier: "LC"
	},
	zoroark: {
		randomBattleMoves: ["suckerpunch","darkpulse","focusblast","flamethrower","uturn","nastyplot","knockoff"],
		eventPokemon: [
			{"generation":5,"level":50,"gender":"M","nature":"Quirky","moves":["agility","embargo","punishment","snarl"],"pokeball":"cherishball"}
		],
		tier: "RU"
	},
	minccino: {
		randomBattleMoves: ["return","tailslap","wakeupslap","uturn","aquatail"],
		tier: "LC"
	},
	cinccino: {
		randomBattleMoves: ["return","tailslap","wakeupslap","uturn","aquatail","bulletseed","rockblast"],
		tier: "RU"
	},
	gothita: {
		randomBattleMoves: ["psychic","thunderbolt","hiddenpowerfighting","shadowball","substitute","calmmind","reflect","lightscreen","trick","grassknot","signalbeam"],
		tier: "LC"
	},
	gothorita: {
		randomBattleMoves: ["psychic","thunderbolt","hiddenpowerfighting","shadowball","substitute","calmmind","reflect","lightscreen","trick","grassknot","signalbeam"],
		eventPokemon: [
			{"generation":5,"level":32,"gender":"M","isHidden":true,"moves":["psyshock","flatter","futuresight","mirrorcoat"]},
			{"generation":5,"level":32,"gender":"M","isHidden":true,"moves":["psyshock","flatter","futuresight","imprison"]}
		],
		tier: "NFE"
	},
	gothitelle: {
		randomBattleMoves: ["psychic","thunderbolt","hiddenpowerfighting","shadowball","substitute","calmmind","reflect","lightscreen","trick","psyshock","grassknot","signalbeam"],
		tier: "UU"
	},
	solosis: {
		randomBattleMoves: ["calmmind","recover","psychic","hiddenpowerfighting","shadowball","trickroom","psyshock"],
		tier: "LC"
	},
	duosion: {
		randomBattleMoves: ["calmmind","recover","psychic","hiddenpowerfighting","shadowball","trickroom","psyshock"],
		tier: "NFE"
	},
	reuniclus: {
		randomBattleMoves: ["calmmind","recover","psychic","focusblast","shadowball","trickroom","psyshock","hiddenpowerfire"],
		tier: "RU"
	},
	ducklett: {
		randomBattleMoves: ["scald","airslash","roost","hurricane","icebeam","hiddenpowergrass","bravebird","defog"],
		tier: "LC"
	},
	swanna: {
		randomBattleMoves: ["airslash","roost","hurricane","surf","icebeam","raindance","defog"],
		tier: "NU"
	},
	vanillite: {
		randomBattleMoves: ["icebeam","explosion","hiddenpowerelectric","hiddenpowerfighting","autotomize"],
		tier: "LC"
	},
	vanillish: {
		randomBattleMoves: ["icebeam","explosion","hiddenpowerelectric","hiddenpowerfighting","autotomize"],
		tier: "NFE"
	},
	vanilluxe: {
		randomBattleMoves: ["icebeam","explosion","hiddenpowerelectric","hiddenpowerfighting","autotomize"],
		tier: "NU"
	},
	deerling: {
		randomBattleMoves: ["agility","batonpass","seedbomb","jumpkick","synthesis","return","thunderwave"],
		eventPokemon: [
			{"generation":5,"level":30,"gender":"F","isHidden":true,"moves":["feintattack","takedown","jumpkick","aromatherapy"]}
		],
		tier: "LC"
	},
	sawsbuck: {
		randomBattleMoves: ["swordsdance","hornleech","jumpkick","return","substitute","synthesis","batonpass"],
		tier: "NU"
	},
	emolga: {
		randomBattleMoves: ["agility","chargebeam","batonpass","substitute","thunderbolt","airslash","roost"],
		tier: "NU"
	},
	karrablast: {
		randomBattleMoves: ["swordsdance","megahorn","return","substitute"],
		eventPokemon: [
			{"generation":5,"level":30,"isHidden":false,"moves":["furyattack","headbutt","falseswipe","bugbuzz"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["megahorn","takedown","xscissor","flail"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	escavalier: {
		randomBattleMoves: ["megahorn","pursuit","ironhead","knockoff","swordsdance","drillrun"],
		tier: "RU"
	},
	foongus: {
		randomBattleMoves: ["spore","stunspore","gigadrain","clearsmog","hiddenpowerfire","synthesis","sludgebomb"],
		tier: "LC"
	},
	amoonguss: {
		randomBattleMoves: ["spore","stunspore","gigadrain","clearsmog","hiddenpowerfire","synthesis","sludgebomb"],
		tier: "RU"
	},
	frillish: {
		randomBattleMoves: ["scald","willowisp","recover","toxic","shadowball","taunt"],
		tier: "LC"
	},
	jellicent: {
		randomBattleMoves: ["scald","willowisp","recover","toxic","shadowball","icebeam","gigadrain","taunt"],
		eventPokemon: [
			{"generation":5,"level":40,"isHidden":true,"moves":["waterpulse","ominouswind","brine","raindance"]}
		],
		tier: "RU"
	},
	alomomola: {
		randomBattleMoves: ["wish","protect","waterfall","toxic","scald"],
		tier: "RU"
	},
	joltik: {
		randomBattleMoves: ["thunderbolt","bugbuzz","hiddenpowerice","gigadrain","voltswitch","stickyweb"],
		tier: "LC"
	},
	galvantula: {
		randomBattleMoves: ["thunder","hiddenpowerice","gigadrain","bugbuzz","voltswitch","stickyweb"],
		tier: "UU"
	},
	ferroseed: {
		randomBattleMoves: ["spikes","stealthrock","leechseed","seedbomb","protect","thunderwave","gyroball"],
		tier: "LC"
	},
	ferrothorn: {
		randomBattleMoves: ["spikes","stealthrock","leechseed","powerwhip","thunderwave","protect"],
		tier: "OU"
	},
	klink: {
		randomBattleMoves: ["shiftgear","return","geargrind","wildcharge","substitute"],
		tier: "LC"
	},
	klang: {
		randomBattleMoves: ["shiftgear","return","geargrind","wildcharge","substitute"],
		tier: "NFE"
	},
	klinklang: {
		randomBattleMoves: ["shiftgear","return","geargrind","wildcharge"],
		tier: "NU"
	},
	tynamo: {
		randomBattleMoves: ["spark","chargebeam","thunderwave","tackle"],
		tier: "LC"
	},
	eelektrik: {
		randomBattleMoves: ["uturn","voltswitch","acidspray","wildcharge","thunderbolt","gigadrain","aquatail","coil"],
		tier: "NFE"
	},
	eelektross: {
		randomBattleMoves: ["thunderbolt","flamethrower","uturn","voltswitch","acidspray","wildcharge","drainpunch","superpower","gigadrain","aquatail","coil"],
		tier: "RU"
	},
	elgyem: {
		randomBattleMoves: ["nastyplot","psychic","thunderbolt","hiddenpowerfighting","substitute","calmmind","recover","trick", "trickroom", "signalbeam"],
		tier: "LC"
	},
	beheeyem: {
		randomBattleMoves: ["nastyplot","psychic","thunderbolt","hiddenpowerfighting","substitute","calmmind","recover","trick","trickroom", "signalbeam"],
		tier: "NU"
	},
	litwick: {
		randomBattleMoves: ["calmmind","shadowball","energyball","fireblast","overheat","hiddenpowerfighting","hiddenpowerground","hiddenpowerrock","trick","substitute", "painsplit"],
		tier: "LC"
	},
	lampent: {
		randomBattleMoves: ["calmmind","shadowball","energyball","fireblast","overheat","hiddenpowerfighting","hiddenpowerground","hiddenpowerrock","trick","substitute", "painsplit"],
		tier: "NFE"
	},
	chandelure: {
		randomBattleMoves: ["shadowball","energyball","fireblast","overheat","hiddenpowerfighting","hiddenpowerground","trick","substitute","painsplit"],
		eventPokemon: [
			{"generation":5,"level":50,"gender":"F","nature":"Modest","isHidden":false,"abilities":["flashfire"],"moves":["heatwave","shadowball","energyball","psychic"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	axew: {
		randomBattleMoves: ["dragondance","outrage","dragonclaw","swordsdance","aquatail","superpower","poisonjab","taunt", "substitute"],
		eventPokemon: [
			{"generation":5,"level":1,"gender":"M","nature":"Naive","isHidden":false,"abilities":["moldbreaker"],"moves":["scratch","dragonrage"]},
			{"generation":5,"level":10,"gender":"F","isHidden":false,"abilities":["moldbreaker"],"moves":["dragonrage","return","endure","dragonclaw"],"pokeball":"cherishball"},
			{"generation":5,"level":30,"gender":"M","nature":"Naive","isHidden":false,"abilities":["rivalry"],"moves":["dragonrage","scratch","outrage","gigaimpact"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	fraxure: {
		randomBattleMoves: ["dragondance","swordsdance","outrage","dragonclaw","aquatail","superpower","poisonjab","taunt", "substitute"],
		tier: "NFE"
	},
	haxorus: {
		randomBattleMoves: ["dragondance","swordsdance","outrage","dragonclaw","earthquake","lowkick","poisonjab","taunt", "substitute"],
		eventPokemon: [
			{"generation":5,"level":59,"gender":"F","nature":"Naive","isHidden":false,"abilities":["moldbreaker"],"moves":["earthquake","dualchop","xscissor","dragondance"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	cubchoo: {
		randomBattleMoves: ["icebeam","surf","hiddenpowergrass","superpower"],
		eventPokemon: [
			{"generation":5,"level":15,"isHidden":false,"moves":["powdersnow","growl","bide","icywind"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	beartic: {
		randomBattleMoves: ["iciclecrash","superpower","nightslash","stoneedge","swordsdance","aquajet"],
		tier: "NU"
	},
	cryogonal: {
		randomBattleMoves: ["icebeam","recover","toxic","rapidspin","reflect","freezedry","hiddenpowerfire"],
		tier: "NU"
	},
	shelmet: {
		randomBattleMoves: ["spikes","yawn","substitute","acidarmor","batonpass","recover","toxic","bugbuzz","infestation"],
		eventPokemon: [
			{"generation":5,"level":30,"isHidden":false,"moves":["strugglebug","megadrain","yawn","protect"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"isHidden":false,"moves":["encore","gigadrain","bodyslam","bugbuzz"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	accelgor: {
		randomBattleMoves: ["spikes","yawn","bugbuzz","focusblast","gigadrain","hiddenpowerrock","encore","sludgebomb"],
		tier: "NU"
	},
	stunfisk: {
		randomBattleMoves: ["discharge","thunderbolt","earthpower","scald","toxic","rest","sleeptalk","stealthrock"],
		tier: "NU"
	},
	mienfoo: {
		randomBattleMoves: ["uturn","drainpunch","stoneedge","swordsdance","batonpass","highjumpkick","fakeout","knockoff"],
		tier: "LC"
	},
	mienshao: {
		randomBattleMoves: ["uturn","fakeout","highjumpkick","stoneedge","drainpunch","swordsdance","batonpass","knockoff"],
		tier: "UU"
	},
	druddigon: {
		randomBattleMoves: ["outrage","superpower","earthquake","suckerpunch","dragonclaw","dragontail","substitute","glare","stealthrock","firepunch","thunderpunch"],
		eventPokemon: [
			{"generation":5,"level":1,"shiny":true,"isHidden":false,"moves":["leer","scratch"]}
		],
		tier: "RU"
	},
	golett: {
		randomBattleMoves: ["earthquake","shadowpunch","dynamicpunch","icepunch","stealthrock","rockpolish"],
		tier: "LC"
	},
	golurk: {
		randomBattleMoves: ["earthquake","shadowpunch","dynamicpunch","icepunch","stoneedge","stealthrock","rockpolish"],
		eventPokemon: [
			{"generation":5,"level":70,"shiny":true,"isHidden":false,"abilities":["ironfist"],"moves":["shadowpunch","hyperbeam","gyroball","hammerarm"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	pawniard: {
		randomBattleMoves: ["swordsdance","substitute","suckerpunch","ironhead","brickbreak","knockoff"],
		tier: "LC"
	},
	bisharp: {
		randomBattleMoves: ["swordsdance","substitute","suckerpunch","ironhead","brickbreak","knockoff"],
		tier: "OU"
	},
	bouffalant: {
		randomBattleMoves: ["headcharge","earthquake","stoneedge","megahorn","swordsdance","superpower"],
		tier: "NU"
	},
	rufflet: {
		randomBattleMoves: ["bravebird","rockslide","return","uturn","substitute","bulkup","roost"],
		tier: "LC"
	},
	braviary: {
		randomBattleMoves: ["bravebird","superpower","return","uturn","substitute","rockslide","bulkup","roost"],
		eventPokemon: [
			{"generation":5,"level":25,"gender":"M","isHidden":true,"moves":["wingattack","honeclaws","scaryface","aerialace"]}
		],
		tier: "RU"
	},
	vullaby: {
		randomBattleMoves: ["knockoff","roost","taunt","whirlwind","toxic","defog","uturn","bravebird"],
		tier: "LC"
	},
	mandibuzz: {
		randomBattleMoves: ["knockoff","roost","taunt","whirlwind","toxic","uturn","bravebird","defog"],
		eventPokemon: [
			{"generation":5,"level":25,"gender":"F","isHidden":true,"moves":["pluck","nastyplot","flatter","feintattack"]}
		],
		tier: "OU"
	},
	heatmor: {
		randomBattleMoves: ["fireblast","suckerpunch","focusblast","gigadrain"],
		tier: "NU"
	},
	durant: {
		randomBattleMoves: ["honeclaws","ironhead","xscissor","stoneedge","batonpass","superpower"],
		tier: "RU"
	},
	deino: {
		randomBattleMoves: ["outrage","crunch","firefang","dragontail","thunderwave","superpower"],
		eventPokemon: [
			{"generation":5,"level":1,"shiny":true,"moves":["tackle","dragonrage"]}
		],
		tier: "LC"
	},
	zweilous: {
		randomBattleMoves: ["outrage","crunch","firefang","dragontail","thunderwave","superpower"],
		tier: "NFE"
	},
	hydreigon: {
		randomBattleMoves: ["uturn","dracometeor","dragonpulse","earthpower","fireblast","darkpulse","roost","flashcannon","superpower"],
		eventPokemon: [
			{"generation":5,"level":70,"shiny":true,"gender":"M","moves":["hypervoice","dragonbreath","flamethrower","focusblast"],"pokeball":"cherishball"}
		],
		tier: "UU"
	},
	larvesta: {
		randomBattleMoves: ["flareblitz","uturn","wildcharge","zenheadbutt","morningsun","willowisp"],
		tier: "LC"
	},
	volcarona: {
		randomBattleMoves: ["quiverdance","fierydance","fireblast","bugbuzz","roost","gigadrain","hiddenpowerice"],
		eventPokemon: [
			{"generation":5,"level":35,"isHidden":false,"moves":["stringshot","leechlife","gust","firespin"]},
			{"generation":5,"level":77,"gender":"M","nature":"Calm","isHidden":false,"moves":["bugbuzz","overheat","hyperbeam","quiverdance"],"pokeball":"cherishball"}
		],
		tier: "BL"
	},
	cobalion: {
		randomBattleMoves: ["closecombat","ironhead","swordsdance","substitute","stoneedge","voltswitch","hiddenpowerice","thunderwave","stealthrock"],
		tier: "RU"
	},
	terrakion: {
		randomBattleMoves: ["stoneedge","closecombat","swordsdance","rockpolish","substitute","stealthrock","earthquake"],
		tier: "OU"
	},
	virizion: {
		randomBattleMoves: ["swordsdance","calmmind","closecombat","focusblast","hiddenpowerice","stoneedge","leafblade","gigadrain","substitute","synthesis"],
		tier: "RU"
	},
	tornadus: {
		randomBattleMoves: ["hurricane","airslash","uturn","superpower","focusblast","taunt","substitute","heatwave","tailwind"],
		eventPokemon: [
			{"generation":5,"level":70,"gender":"M","isHidden":false,"moves":["hurricane","hammerarm","airslash","hiddenpower"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "BL2"
	},
	tornadustherian: {
		randomBattleMoves: ["hurricane","airslash","focusblast","uturn","heatwave"],
		eventPokemon: [
			{"generation":5,"level":70,"gender":"M","isHidden":false,"moves":["hurricane","hammerarm","airslash","hiddenpower"],"pokeball":"cherishball"}
		],
		tier: "BL"
	},
	thundurus: {
		randomBattleMoves: ["thunderwave","nastyplot","thunderbolt","hiddenpowerice","focusblast","grassknot","substitute"],
		eventPokemon: [
			{"generation":5,"level":70,"gender":"M","isHidden":false,"moves":["thunder","hammerarm","focusblast","wildcharge"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'dreamball',
		tier: "OU"
	},
	thundurustherian: {
		randomBattleMoves: ["nastyplot","agility","thunderbolt","hiddenpowerice","focusblast","grassknot","superpower"],
		eventPokemon: [
			{"generation":5,"level":70,"gender":"M","isHidden":false,"moves":["thunder","hammerarm","focusblast","wildcharge"],"pokeball":"cherishball"}
		],
		tier: "BL"
	},
	reshiram: {
		randomBattleMoves: ["blueflare","dracometeor","dragonpulse","flamethrower","flamecharge","roost"],
		eventPokemon: [
			{"generation":5,"level":100,"moves":["blueflare","fusionflare","mist","dracometeor"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	zekrom: {
		randomBattleMoves: ["voltswitch","outrage","dragonclaw","boltstrike","honeclaws","substitute","dracometeor","fusionbolt","roost"],
		eventPokemon: [
			{"generation":5,"level":100,"moves":["boltstrike","fusionbolt","haze","outrage"],"pokeball":"cherishball"}
		],
		tier: "Uber"
	},
	landorus: {
		randomBattleMoves: ["earthpower","focusblast","rockpolish","hiddenpowerice","psychic","sludgewave"],
		dreamWorldPokeball: 'dreamball',
		tier: "OU"
	},
	landorustherian: {
		randomBattleMoves: ["rockpolish","earthquake","stoneedge","uturn","superpower","stealthrock","swordsdance"],
		tier: "OU"
	},
	kyurem: {
		randomBattleMoves: ["substitute","icebeam","dracometeor","dragonpulse","focusblast","outrage","earthpower","roost"],
		tier: "BL2"
	},
	kyuremblack: {
		randomBattleMoves: ["outrage","fusionbolt","icebeam","roost","substitute","honeclaws","earthpower","dragonclaw"],
		tier: "OU"
	},
	kyuremwhite: {
		randomBattleMoves: ["dracometeor","dragonpulse","icebeam","fusionflare","earthpower","focusblast","roost"],
		tier: "Uber"
	},
	keldeo: {
		randomBattleMoves: ["hydropump","secretsword","calmmind","hiddenpowerghost","hiddenpowerelectric","substitute","surf","icywind"],
		eventPokemon: [
			{"generation":5,"level":15,"moves":["aquajet","leer","doublekick","bubblebeam"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["sacredsword","hydropump","aquajet","swordsdance"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'cherishball',
		tier: "OU"
	},
	keldeoresolute: {},
	meloetta: {
		randomBattleMoves: ["relicsong","closecombat","calmmind","psychic","thunderbolt","hypervoice","uturn"],
		eventPokemon: [
			{"generation":5,"level":15,"moves":["quickattack","confusion","round"],"pokeball":"cherishball"},
			{"generation":5,"level":50,"moves":["round","teeterdance","psychic","closecombat"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'cherishball',
		tier: "RU"
	},
	genesect: {
		randomBattleMoves: ["uturn","bugbuzz","icebeam","flamethrower","thunderbolt","ironhead","shiftgear","extremespeed","blazekick"],
		eventPokemon: [
			{"generation":5,"level":50,"moves":["technoblast","magnetbomb","solarbeam","signalbeam"],"pokeball":"cherishball"},
			{"generation":5,"level":15,"moves":["technoblast","magnetbomb","solarbeam","signalbeam"],"pokeball":"cherishball"},
			{"generation":5,"level":100,"shiny":true,"nature":"Hasty","moves":["extremespeed","technoblast","blazekick","shiftgear"],"pokeball":"cherishball"}
		],
		dreamWorldPokeball: 'cherishball',
		tier: "Uber"
	},
	genesectburn: {
		randomBattleMoves: ["uturn","bugbuzz","icebeam","technoblast","thunderbolt","ironhead","shiftgear","extremespeed","blazekick"],
		dreamWorldPokeball: 'cherishball',
		requiredItem: "Burn Drive"
	},
	genesectchill: {
		randomBattleMoves: ["uturn","bugbuzz","technoblast","flamethrower","thunderbolt","ironhead","shiftgear","extremespeed","blazekick"],
		dreamWorldPokeball: 'cherishball',
		requiredItem: "Chill Drive"
	},
	genesectdouse: {
		randomBattleMoves: ["uturn","bugbuzz","icebeam","flamethrower","thunderbolt","technoblast","ironhead","shiftgear","extremespeed","blazekick"],
		dreamWorldPokeball: 'cherishball',
		requiredItem: "Douse Drive"
	},
	genesectshock: {
		randomBattleMoves: ["uturn","bugbuzz","icebeam","flamethrower","technoblast","ironhead","shiftgear","extremespeed","blazekick"],
		dreamWorldPokeball: 'cherishball',
		requiredItem: "Shock Drive"
	},
	chespin: {
		randomBattleMoves: ["curse","gyroball","seedbomb","stoneedge","spikes","synthesis"],
		tier: "LC"
	},
	quilladin: {
		randomBattleMoves: ["curse","gyroball","seedbomb","stoneedge","spikes","synthesis"],
		tier: "NFE"
	},
	chesnaught: {
		randomBattleMoves: ["leechseed","synthesis","roar","hammerarm","spikyshield","stoneedge","woodhammer"],
		tier: "UU"
	},
	fennekin: {
		randomBattleMoves: ["fireblast","psychic","psyshock","grassknot","willowisp","hypnosis","hiddenpowerrock","flamecharge"],
		tier: "LC"
	},
	braixen: {
		randomBattleMoves: ["fireblast","flamethrower","psychic","psyshock","grassknot","willowisp","hiddenpowerrock"],
		tier: "NFE"
	},
	delphox: {
		randomBattleMoves: ["calmmind","fireblast","flamethrower","psychic","psyshock", "grassknot", "switcheroo","shadowball"],
		tier: "RU"
	},
	froakie: {
		randomBattleMoves: ["quickattack","hydropump","icebeam","waterfall","toxicspikes","poweruppunch","uturn"],
		tier: "LC"
	},
	frogadier: {
		viablemoves: {"hydropump":1,"surf":1,"icebeam":1,"uturn":1,"taunt":1,"toxicspikes":1},
		tier: "NFE"
	},
	greninja: {
		randomBattleMoves: ["hydropump","uturn","surf","icebeam","spikes","taunt","darkpulse","toxicspikes","hiddenpowerfire"],
		tier: "OU"
	},
	bunnelby: {
		randomBattleMoves: ["agility","earthquake","return","quickattack","uturn","stoneedge","spikes","bounce"],
		tier: "LC"
	},
	diggersby: {
		randomBattleMoves: ["earthquake","uturn","return","wildcharge","swordsdance","quickattack","agility"],
		tier: "BL"
	},
	fletchling: {
		randomBattleMoves: ["roost","swordsdance","uturn","return","overheat","flamecharge","tailwind"],
		tier: "LC"
	},
	fletchinder: {
		randomBattleMoves: ["roost","swordsdance","uturn","return","overheat","flamecharge","tailwind"],
		tier: "RU"
	},
	talonflame: {
		randomBattleMoves: ["bravebird","flareblitz","roost","swordsdance","uturn","willowisp","tailwind"],
		tier: "OU"
	},
	scatterbug: {
		randomBattleMoves: ["tackle","stringshot","stunspore","bugbite","poisonpowder"],
		tier: "LC"
	},
	spewpa: {
		randomBattleMoves: ["tackle","stringshot","stunspore","bugbite","poisonpowder"],
		tier: "NFE"
	},
	vivillon: {
		randomBattleMoves: ["sleeppowder","quiverdance","hurricane","bugbuzz","roost"],
		eventPokemon: [
			// Poké Ball pattern
			{"generation":6,"level":12,"gender":"M","isHidden":false,"moves":["stunspore","gust","lightscreen","strugglebug"],"pokeball":"cherishball"},
			// Fancy pattern
			{"generation":6,"level":12,"isHidden":false,"moves":["gust","lightscreen","strugglebug","holdhands"],"pokeball":"cherishball"}
		],
		tier: "NU"
	},
	litleo: {
		randomBattleMoves: ["hypervoice","fireblast","willowisp","bulldoze","yawn"],
		tier: "LC"
	},
	pyroar: {
		randomBattleMoves: ["hypervoice","fireblast","willowisp","bulldoze","sunnyday","solarbeam"],
		tier: "NU"
	},
	flabebe: {
		randomBattleMoves: ["moonblast","toxic","wish","psychic","aromatherapy","protect","calmmind"],
		tier: "LC"
	},
	floette: {
		randomBattleMoves: ["moonblast","toxic","wish","psychic","aromatherapy","protect","calmmind"],
		tier: "NFE"
	},
	floetteeternalflower: {
		isUnreleased: true,
		tier: "Unreleased"
	},
	florges: {
		randomBattleMoves: ["moonblast","toxic","wish","psychic","aromatherapy","protect","calmmind"],
		tier: "UU"
	},
	skiddo: {
		randomBattleMoves: ["hornleech","earthquake","brickbreak","bulkup","leechseed","milkdrink","rockslide"],
		tier: "LC"
	},
	gogoat: {
		randomBattleMoves: ["hornleech","earthquake","brickbreak","bulkup","leechseed","milkdrink","rockslide"],
		tier: "NU"
	},
	pancham: {
		randomBattleMoves: ["partingshot","skyuppercut","crunch","stoneedge","bulldoze","shadowclaw","bulkup"],
		tier: "LC"
	},
	pangoro: {
		randomBattleMoves: ["partingshot","hammerarm","crunch","circlethrow","stoneedge","earthquake","poisonjab"],
		tier: "NU"
	},
	furfrou: {
		randomBattleMoves: ["return","cottonguard","uturn","thunderwave","suckerpunch","roar","wildcharge","rest","sleeptalk"],
		tier: "NU"
	},
	espurr: {
		randomBattleMoves: ["fakeout","yawn","thunderwave","psyshock","trick","darkpulse"],
		tier: "LC"
	},
	meowstic: {
		randomBattleMoves: ["fakeout","toxic","yawn","thunderwave","psyshock","trick","psychic","reflect","lightscreen"],
		randomDoubleBattleMoves: ["fakeout","thunderwave","psyshock","trick","psychic","reflect","lightscreen","safeguard","swagger","protect"],
		tier: "NU"
	},
	meowsticf: {
		randomBattleMoves: ["psyshock","darkpulse","calmmind","energyball","signalbeam","thunderbolt"],
		tier: "NU"
	},
	honedge: {
		randomBattleMoves: ["swordsdance","shadowclaw","shadowsneak","ironhead","rockslide","aerialace","destinybond"],
		tier: "LC"
	},
	doublade: {
		randomBattleMoves: ["swordsdance","shadowclaw","shadowsneak","ironhead","rockslide","aerialace","destinybond"],
		tier: "RU"
	},
	aegislash: {
		randomBattleMoves: ["kingsshield","swordsdance","shadowclaw","sacredsword","ironhead","shadowsneak","autotomize","hiddenpowerice","shadowball"],
		tier: "Uber"
	},
	spritzee: {
		randomBattleMoves: ["calmmind","drainingkiss","moonblast","psychic","aromatherapy","wish","trickroom","thunderbolt"],
		tier: "LC"
	},
	aromatisse: {
		randomBattleMoves: ["calmmind","drainingkiss","moonblast","psychic","aromatherapy","wish","trickroom","thunderbolt"],
		randomDoubleBattleMoves: ["moonblast","aromatherapy","wish","trickroom","thunderbolt","protect"],
		tier: "RU"
	},
	swirlix: {
		randomBattleMoves: ["calmmind","drainingkiss","dazzlinggleam","surf","psychic","flamethrower","bellydrum","thunderbolt","return","thief","cottonguard"],
		tier: "LC Uber"
	},
	slurpuff: {
		randomBattleMoves: ["calmmind","dazzlinggleam","surf","psychic","flamethrower","thunderbolt"],
		tier: "NU"
	},
	inkay: {
		randomBattleMoves: ["topsyturvy","switcheroo","superpower","psychocut","flamethrower","rockslide","trickroom"],
		eventPokemon: [
			{"generation":6,"level":10,"isHidden":false,"moves":["happyhour","foulplay","hypnosis","topsyturvy"],"pokeball":"cherishball"}
		],
		tier: "LC"
	},
	malamar: {
		randomBattleMoves: ["switcheroo","superpower","psychocut","rockslide","trickroom","nightslash"],
		tier: "NU"
	},
	binacle: {
		randomBattleMoves: ["shellsmash","razorshell","stoneedge","earthquake","crosschop","poisonjab","xscissor","rockslide"],
		tier: "LC"
	},
	barbaracle: {
		randomBattleMoves: ["shellsmash","razorshell","stoneedge","earthquake","crosschop","poisonjab","xscissor","rockslide"],
		tier: "NU"
	},
	skrelp: {
		randomBattleMoves: ["scald","sludgebomb","thunderbolt","shadowball","toxicspikes","hydropump"],
		unreleasedHidden: true,
		tier: "LC"
	},
	dragalge: {
		randomBattleMoves: ["scald","sludgebomb","thunderbolt","toxicspikes","hydropump","focusblast","dracometeor","dragontail","substitute"],
		unreleasedHidden: true,
		tier: "NU"
	},
	clauncher: {
		randomBattleMoves: ["waterpulse","flashcannon","uturn","darkpulse","crabhammer","aquajet","sludgebomb"],
		tier: "LC"
	},
	clawitzer: {
		randomBattleMoves: ["waterpulse","icebeam","uturn","darkpulse","dragonpulse","aurasphere"],
		tier: "RU"
	},
	helioptile: {
		randomBattleMoves: ["surf","voltswitch","hiddenpowerice","raindance","thunder","darkpulse","thunderbolt"],
		tier: "LC"
	},
	heliolisk: {
		randomBattleMoves: ["surf","voltswitch","hiddenpowerice","raindance","thunder","darkpulse","thunderbolt"],
		tier: "RU"
	},
	tyrunt: {
		randomBattleMoves: ["stealthrock","dragondance","stoneedge","dragonclaw","earthquake","icefang","firefang"],
		unreleasedHidden: true,
		tier: "LC"
	},
	tyrantrum: {
		randomBattleMoves: ["stealthrock","dragondance","stoneedge","dragonclaw","earthquake","icefang","firefang"],
		unreleasedHidden: true,
		tier: "RU"
	},
	amaura: {
		randomBattleMoves: ["naturepower","ancientpower","thunderbolt","darkpulse","thunderwave","dragontail","flashcannon"],
		unreleasedHidden: true,
		tier: "LC"
	},
	aurorus: {
		randomBattleMoves: ["naturepower","ancientpower","thunderbolt","encore","thunderwave","flashcannon","freezedry"],
		unreleasedHidden: true,
		tier: "NU"
	},
	sylveon: {
		randomBattleMoves: ["hypervoice","calmmind","wish","protect","psyshock","batonpass","shadowball","hiddenpowerground"],
		eventPokemon: [
			{"generation":6,"level":10,"isHidden":false,"moves":["celebrate","helpinghand","sandattack","fairywind"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	hawlucha: {
		randomBattleMoves: ["swordsdance","highjumpkick","uturn","stoneedge","roost","batonpass"],
		tier: "BL"
	},
	dedenne: {
		randomBattleMoves: ["voltswitch","thunderbolt","nuzzle","grassknot","hiddenpowerice","uturn","toxic"],
		tier: "NU"
	},
	carbink: {
		randomBattleMoves: ["stealthrock","lightscreen","reflect","explosion","powergem","moonblast"],
		tier: "NU"
	},
	goomy: {
		randomBattleMoves: ["sludgebomb","thunderbolt","toxic","protect","infestation"],
		tier: "LC"
	},
	sliggoo: {
		randomBattleMoves: ["sludgebomb","thunderbolt","toxic","protect","infestation","icebeam"],
		tier: "NFE"
	},
	goodra: {
		randomBattleMoves: ["thunderbolt","toxic","icebeam","dragonpulse","fireblast","dragontail","dracometeor","focusblast"],
		tier: "UU"
	},
	klefki: {
		randomBattleMoves: ["reflect","lightscreen","spikes","torment","substitute","thunderwave","drainingkiss","flashcannon","dazzlinggleam"],
		tier: "BL"
	},
	phantump: {
		randomBattleMoves: ["hornleech","leechseed","phantomforce","substitute","willowisp","curse","bulldoze","rockslide","poisonjab"],
		tier: "LC"
	},
	trevenant: {
		randomBattleMoves: ["hornleech","woodhammer","leechseed","shadowclaw","substitute","willowisp","curse","earthquake","rockslide"],
		tier: "UU"
	},
	pumpkaboo: {
		randomBattleMoves: ["willowisp","shadowsneak","fireblast","painsplit","seedbomb"],
		tier: "LC"
	},
	pumpkaboosmall: {
		randomBattleMoves: ["willowisp","shadowsneak","fireblast","painsplit","seedbomb"],
		unreleasedHidden: true,
		tier: "LC"
	},
	pumpkaboolarge: {
		randomBattleMoves: ["willowisp","shadowsneak","fireblast","painsplit","seedbomb"],
		unreleasedHidden: true,
		tier: "LC"
	},
	pumpkaboosuper: {
		randomBattleMoves: ["willowisp","shadowsneak","fireblast","painsplit","seedbomb"],
		unreleasedHidden: true,
		tier: "LC"
	},
	gourgeist: {
		randomBattleMoves: ["willowisp","shadowsneak","painsplit","seedbomb","leechseed","phantomforce","explosion"],
		tier: "NU"
	},
	gourgeistsmall: {
		randomBattleMoves: ["willowisp","shadowsneak","painsplit","seedbomb","leechseed","phantomforce","explosion"],
		unreleasedHidden: true,
		tier: "NU"
	},
	gourgeistlarge: {
		randomBattleMoves: ["willowisp","shadowsneak","painsplit","seedbomb","leechseed","phantomforce","explosion"],
		unreleasedHidden: true,
		tier: "NU"
	},
	gourgeistsuper: {
		randomBattleMoves: ["willowisp","shadowsneak","painsplit","seedbomb","leechseed","phantomforce","explosion"],
		unreleasedHidden: true,
		tier: "NU"
	},
	bergmite: {
		randomBattleMoves: ["avalanche","recover","stoneedge","curse","gyroball","rapidspin"],
		tier: "LC"
	},
	avalugg: {
		randomBattleMoves: ["avalanche","recover","stoneedge","curse","gyroball","rapidspin","roar","earthquake"],
		tier: "NU"
	},
	noibat: {
		randomBattleMoves: ["airslash","hurricane","dracometeor","uturn","roost","switcheroo"],
		tier: "LC"
	},
	noivern: {
		randomBattleMoves: ["airslash","hurricane","dragonpulse","dracometeor","focusblast","flamethrower","uturn","roost","boomburst","switcheroo"],
		tier: "UU"
	},
	xerneas: {
		randomBattleMoves: ["geomancy","moonblast","thunder","focusblast"],
		tier: "Uber"
	},
	yveltal: {
		randomBattleMoves: ["darkpulse","oblivionwing","taunt","focusblast","hurricane","roost","suckerpunch"],
		tier: "Uber"
	},
	zygarde: {
		randomBattleMoves: ["dragondance","earthquake","extremespeed","outrage","coil","stoneedge"],
		tier: "BL"
	},
	diancie: {
		randomBattleMoves: ["diamondstorm","moonblast","reflect","lightscreen","substitute","calmmind","psychic","stealthrock"],
		randomDoubleBattleMoves: ["diamondstorm","moonblast","reflect","lightscreen","safeguard","substitute","calmmind","psychic","dazzlinggleam","protect"],
		eventPokemon: [
			{"generation":6,"level":50,"moves":["diamondstorm","moonblast","reflect","return"],"pokeball":"cherishball"}
		],
		tier: "OU"
	},
	hoopa: {
		isUnreleased: true,
		tier: "Unreleased"
	},
	volcanion: {
		isUnreleased: true,
		tier: "Unreleased"
	},
	missingno: {
		randomBattleMoves: ["watergun","skyattack","doubleedge","metronome"],
		isNonstandard: true,
		tier: ""
	},
	tomohawk: {
		randomBattleMoves: ["aurasphere","roost","stealthrock","rapidspin","hurricane","airslash","taunt","substitute","toxic","naturepower","earthpower"],
		isNonstandard: true,
		tier: "CAP"
	},
	necturna: {
		randomBattleMoves: ["powerwhip","hornleech","willowisp","shadowsneak","stoneedge","sacredfire","boltstrike","vcreate","extremespeed","closecombat","shellsmash","spore","milkdrink","batonpass","stickyweb"],
		isNonstandard: true,
		tier: "CAP"
	},
	mollux: {
		randomBattleMoves: ["fireblast","thunderbolt","sludgebomb","thunderwave","willowisp","recover","rapidspin","trick","stealthrock","toxicspikes","lavaplume"],
		isNonstandard: true,
		tier: "CAP"
	},
	aurumoth: {
		randomBattleMoves: ["dragondance","quiverdance","closecombat","bugbuzz","hydropump","megahorn","psychic","blizzard","thunder","focusblast","zenheadbutt"],
		isNonstandard: true,
		tier: "CAP"
	},
	malaconda: {
		randomBattleMoves: ["powerwhip","glare","crunch","toxic","suckerpunch","rest","substitute","uturn","synthesis","rapidspin","knockoff"],
		isNonstandard: true,
		tier: "CAP"
	},
	cawmodore: {
		randomBattleMoves: ["bellydrum","bulletpunch","drainpunch","acrobatics","drillpeck","substitute","ironhead","quickattack"],
		isNonstandard: true,
		tier: "CAP"
	},
	volkraken: {
		randomBattleMoves: ["scald","powergem","hydropump","memento","hiddenpower","flamethrower","fireblast","overheat","willowisp","uturn","substitute","flashcannon","surf"],
		isNonstandard: true,
		tier: "CAP"
	},
	syclant: {
		randomBattleMoves: ["bugbuzz","icebeam","blizzard","earthpower","spikes","superpower","tailglow","uturn","focusblast"],
		isNonstandard: true,
		tier: "CAP"
	},
	revenankh: {
		randomBattleMoves: ["bulkup","shadowsneak","drainpunch","rest","moonlight","icepunch","glare"],
		isNonstandard: true,
		tier: "CAP"
	},
	pyroak: {
		randomBattleMoves: ["leechseed","lavaplume","substitute","protect","gigadrain"],
		isNonstandard: true,
		tier: "CAP"
	},
	fidgit: {
		randomBattleMoves: ["spikes","stealthrock","toxicspikes","wish","rapidspin","encore","uturn","sludgebomb","earthpower"],
		isNonstandard: true,
		tier: "CAP"
	},
	stratagem: {
		randomBattleMoves: ["paleowave","earthpower","fireblast","gigadrain","calmmind","substitute"],
		isNonstandard: true,
		tier: "CAP"
	},
	arghonaut: {
		randomBattleMoves: ["recover","bulkup","waterfall","drainpunch","crosschop","stoneedge","thunderpunch","aquajet","machpunch"],
		isNonstandard: true,
		tier: "CAP"
	},
	kitsunoh: {
		randomBattleMoves: ["shadowstrike","earthquake","superpower","meteormash","uturn","icepunch","trick","willowisp"],
		isNonstandard: true,
		tier: "CAP"
	},
	cyclohm: {
		randomBattleMoves: ["slackoff","dracometeor","dragonpulse","fireblast","thunderbolt","hydropump","discharge","healbell"],
		isNonstandard: true,
		tier: "CAP"
	},
	colossoil: {
		randomBattleMoves: ["earthquake","crunch","suckerpunch","uturn","rapidspin","encore","pursuit","knockoff"],
		isNonstandard: true,
		tier: "CAP"
	},
	krilowatt: {
		randomBattleMoves: ["surf","thunderbolt","icebeam","earthpower"],
		isNonstandard: true,
		tier: "CAP"
	},
	voodoom: {
		randomBattleMoves: ["aurasphere","darkpulse","taunt","painsplit","substitute","hiddenpowerice","vacuumwave"],
		isNonstandard: true,
		tier: "CAP"
	}
};
