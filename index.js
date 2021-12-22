/* Required Modules */
const fs = require('fs');
import Discord, { Collection, Intents } from 'discord.js';
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

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command)
}

/* Event Handlers */
client.on('ready', () => {
    console.log(`Hello World, I am ${client.user.tag}`);
    /*
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
    */
})

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName)

    if (!command) return;

    try {
        command.execute(interaction);
    } catch (error) {
        console.error(`WTF LOL:\n${error}`);
        interaction.reply({ content: 'oi bruv somefing went rong innit', ephemeral: true, })
    }
});
/* Event Handlers */

client.login(process.env.TOKEN);
