const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['avatar']
		});
	}

	async run(message, [target]) {
		const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
		const embed = new MessageEmbed()
			.setDescription(`**AVATR**`)
			.setColor('BLUE')
			.setImage(member.user.displayAvatarURL({ size: 4096, dynamic: true }))
			.setTimestamp();

		message.channel.send(embed);
	}

};
