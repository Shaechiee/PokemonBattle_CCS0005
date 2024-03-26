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
	// Faint function will pull the next pokemon in the array into the battle
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
pokemon.push(new Pokemon('PIKACHU', 50, 117, [moves['tackle'], moves['thundershock']], 'pikachu.png', 'pikachuback.png'));
pokemon.push(new Pokemon('CHARIZARD', 50, 163, [moves['fire blast'], moves['mega punch']], 'charizard.png', 'charizardback.png'));
pokemon.push(new Pokemon('BLASTOISE', 50, 180, [moves['hydro pump'], moves['skull bash']], 'blastoise.png', '.blastoiseback.png'));
pokemon.push(new Pokemon('KADABRA', 50, 128, [moves['psychic'], moves['rest']], 'kadabra.png', 'kadabraback.png'));
pokemon.push(new Pokemon('VENUSAUR', 50, 171, [moves['solar beam'], moves['body slam']], 'venusaur.png', '.venusaurback.png'));
pokemon.push(new Pokemon('JOLTEON', 50, 152, [moves['quick attack'], moves['thunder']], 'jolteon.png', 'jolteonback.png'));
pokemon.push(new Pokemon('ARBOK', 50, 133, [moves['acid'], moves['belch']], 'arbok.png', 'arbokback.png'));
pokemon.push(new Pokemon('SCYTHER', 50, 155, [moves['slash'], moves['hyper beam']], 'scyther.png', 'scytherback.png'));
pokemon.push(new Pokemon('STARMIE', 50, 146, [moves['hydro pump'], moves['rest']], 'starmie.png', 'starmieback.png'));
pokemon.push(new Pokemon('HITMONLEE', 50, 138, [moves['hi jump kick'], moves['mega kick']], 'hitmonlee.png', 'hitmonleeback.png'));
pokemon.push(new Pokemon('HAUNTER', 50, 120, [moves['lick'], moves['psychic']], 'haunter.png', 'haunterback.png'));
pokemon.push(new Pokemon('MACHAMP', 50, 190, [moves['low sweep'], moves['dynamic punch']], 'machamp.png', 'machampback.png'));


let playerParty = [];
let enemyParty = [];