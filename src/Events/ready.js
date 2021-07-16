const Event = require('../Structures/Event');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	run() {
		console.log([
			`Logged in as ${this.client.user.tag}`,
			`Loaded ${this.client.commands.size} commands!`,
			`Loaded ${this.client.events.size} events!`
		].join('\n'));

		const activities = [
			`${this.client.guilds.cache.size} SERVERS!`,
			`${this.client.channels.cache.size} CHANNELS!`,
			`${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} USERS!`,
			`HACKER ARMY DISCORD SERVER`
		];


		let i = 0;
		setInterval(() => this.client.user.setActivity(`${activities[i++ % activities.length]}`, { type: '' }), 10000);
	}

};
