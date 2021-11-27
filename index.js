/* Required Modules */
import Discord, { Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES
    ]

})
/* Required Modules */

/* Event Handlers */
client.on('ready', () => {
    console.log(`Hello World, I am ${client.user.tag}`);

    const Mikebot = process.env.Mikebot;
    const guild = client.guilds.cache.get(Mikebot);
    let commands;

    if (guild) {
        commands = guild.commands;
    } else {
        commands = client.application?.commands
    }

    commands?.clear;
    commands?.create(
        {
        name: "test",
        description: "test"
        }
    )
})

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        interaction.reply({ content: 'not a command bruh', ephemeral: true, })
        return
    }

    const { commandName, options } = interaction

    switch (commandName) {
        case "ping":
            interaction.reply({ content: 'pong', ephemeral: true, })
            break;
        case "test":
            interaction.reply({ content: "test", ephemeral: false })
            break;
    }
})
/* Event Handlers */

client.login(process.env.TOKEN);
