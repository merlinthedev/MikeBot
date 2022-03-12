const { Client, Intents, Message } = require('discord.js');
const { token } = require('../config.json');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS,);

const client = new Client({ intents: myIntents });

const mikeId = '155390057950216192'
const watchMike = 'YOU MIKE! >:)'
const testing = 'testing!'

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`${client.user.tag} has logged in!`);
	client.user.setActivity(testing, { type: 'WATCHING' });
	client.user.setStatus('dnd');

	const guild = client.guilds.cache.get('794646528261226546');

	// Fetch and get the list named 'members'
	guild.members.fetch().then(members =>
	{
		// Loop through every members
		members.forEach(member =>
		{
			console.log(member.id)
			if(member.id == mikeId)
			{
				member.setNickname('Mike');
			}
		});
	});
		
});

client.on('interactionCreate', async interaction => {
	if(!interaction.isCommand()) return;

	const {commandName } = interaction;

	if(commandName === 'mike') {
		const message = await interaction.reply( {content: 'Hey mike', fetchReply: true})
		message.react('😂')
	}
})


// Login to Discord with your client's token
client.login(token);