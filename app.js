const tmi = require('tmi.js');
const testController = require("../../controllers/test-controller");
const { twitch_bot_name, twitch_oauth_token, twitch_channel_name } = require('./config.json');

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: twitch_bot_name,
		password: twitch_oauth_token
	},
	channels: [ twitch_channel_name ]
});
client.connect().catch(console.error);
client.on('message', async (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!hello') {
		client.say(channel, `@${userstate.username}, heya!`);
	}else if (message.toLowerCase() === '!info'){
        let getInfo = testController.getInfo();
        client.say(channel, `@${userstate.username}, heya! Here is some info: ${getInfo.rows[0].info}`);
    }
});

