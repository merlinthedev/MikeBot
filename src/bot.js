const { Client, Intents } = require('discord.js');
const { token } = require('../config.json');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS);

const client = new Client({ intents: myIntents });


const mikeId = '155390057950216192'

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`${client.user.tag} has logged in!`);
	client.user.setActivity('YOU MIKE! >:)', { type: 'WATCHING' });
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



// Login to Discord with your client's token
client.login(token);