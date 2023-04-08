/**
 * @file Sample ping command
 * @author Naman Vrati
 * @since 1.0.0
 * @version 3.2.2
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */
module.exports = {
	name: "tene",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ content: "https://media.discordapp.net/attachments/1069742560794390598/1078751679907909723/image.png" });
	},
};
