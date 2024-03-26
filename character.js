class Pokemon {
	constructor(pokename, level, maxhealth, moves, imgfront, imgback) {
		this.pokename = pokename;
		this.level = level;
		this.health = maxhealth;
		this.maxhealth = maxhealth;
		this.moves = moves;
		this.imgfront = imgfront;
		this.imgback = imgback;
		this.alive = true;
	}

	decrementHealth(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			if (this.owner == 'player') {
				playerPokemon = this.faint(playerPokemon, playerParty);
			}
			if (this.owner == 'enemy') {
				enemyPokemon = this.faint(enemyPokemon, enemyParty);
			}
		}
		if (this.health > this.maxhealth) {
			this.health = this.maxhealth;
		}
	}
	attack(target, move) {
		if (move.target == 'self') {
			this.decrementHealth(Math.round(this.maxhealth * move.damage));
		} else {
		target.decrementHealth(move.damage);
		}
	}
	useItem(target, item) {
		if (item.target == 'self') {
			this.decrementHealth(this.maxhealth * item.damage);
		}
	}
	faint(currentPokemon, party) {
		var foundPokemon = false;
		if (this.health <= 0) {
			console.log('fainted!');
			this.alive = false;
			for (var i = 0; i < party.length; i++) {
				if (party[i].alive == true) {
					foundPokemon = true;
					currentPokemon = party[i];
					console.log(currentPokemon.pokename)
					break;
				}
			}
			if (foundPokemon == false) {
				endGame();
            }
			return currentPokemon;
		}
	}
};

pokemon = [];
pokemon.push(new Pokemon('PIKACHU', 50, 117, [moves['tackle'], moves['thundershock']], 'pikachu1.gif', 'pikachu2.gif'));
pokemon.push(new Pokemon('CHARIZARD', 50, 163, [moves['fire blast'], moves['mega punch']], 'charizard1.gif', 'charizard2.gif'));
pokemon.push(new Pokemon('BLASTOISE', 50, 180, [moves['hydro pump'], moves['skull bash']], 'blastoise1.gif', 'blastoise2.gif'));
pokemon.push(new Pokemon('KADABRA', 50, 128, [moves['psychic'], moves['rest']], 'kadabra1.gif', 'kadabra2.gif'));
pokemon.push(new Pokemon('VENUSAUR', 50, 171, [moves['solar beam'], moves['body slam']], 'venusaur1.gif', 'venusaur2.gif'));
pokemon.push(new Pokemon('JOLTEON', 50, 152, [moves['quick attack'], moves['thunder']], 'jolteon1.gif', 'jolteon2.gif'));
pokemon.push(new Pokemon('ARBOK', 50, 133, [moves['acid'], moves['belch']], 'arbok1.gif', 'arbok2.gif'));
pokemon.push(new Pokemon('SCYTHER', 50, 155, [moves['slash'], moves['hyper beam']], 'scyther1.gif', 'scyther2.gif'));
pokemon.push(new Pokemon('STARMIE', 50, 146, [moves['hydro pump'], moves['rest']], 'starmie1.gif', 'starmie2.gif'));
pokemon.push(new Pokemon('HITMONLEE', 50, 138, [moves['hi jump kick'], moves['mega kick']], 'hitmonlee1.gif', 'hitmonlee2.gif'));
pokemon.push(new Pokemon('HAUNTER', 50, 120, [moves['lick'], moves['psychic']], 'haunter1.gif', 'haunter2.gif'));
pokemon.push(new Pokemon('MACHAMP', 50, 190, [moves['low sweep'], moves['dynamic punch']], 'machamp1.gif', 'machamp2.gif'));


let playerParty = [];
let enemyParty = [];
