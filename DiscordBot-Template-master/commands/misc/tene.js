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
	name: "rigo",
	// Refer to typings.d.ts for available properties.

	execute(message, args) {
		message.channel.send({ content: "https://media.discordapp.net/attachments/1069743988975878184/1079077170711896196/image.png" });
	},
};
