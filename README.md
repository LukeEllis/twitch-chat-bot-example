# twitch-chat-bot-example
Barebones example bot that can be used to quickly scaffold Twitch chat bots for testing.

## Setup

### Twitch Developer Access

#### Create Twitch Application
- Go to the [Twitch Developer Portal](https://dev.twitch.tv/console) and register your application.
- *Note: for testing you can set the OAuth Redirect URL to http://localhost*

#### Get your bot OAuth token
- Fill out the following link with information from your bot application page, then go to the link in your browser.
```
https://id.twitch.tv/oauth2/authorize
    ?client_id=<bot-client-id>
    &redirect_uri=http://localhost
    &response_type=token
    &scope=<bot scopes>
```
- *Note: recommended [bot scope](https://dev.twitch.tv/docs/authentication/#scopes) to start is `chat:edit+chat:read`*

After submitting in the browser you should see in the response URL with an access token such as `access_token=<your-access-token>`

#### Create config.json

We now have the credentials needed to use a bot in our channel, but we do _not_ want to share those credentials on GitHub, so in our .gitignore we have config.json included. 

Create a config.json as follows:

```
{
	"twitch_bot_name": "<twitch-bot-name>",
	"twitch_oauth_token": "oauth:<oauth-access-token>",
	"twitch_channel_name": "<twitch-channel-name>",
	"db_user": "<postgres-database-user>",
	"db_host": "<postgres-database-host>",
	"db_database": "<postgres-database-database>",
	"db_password": "<postgres-database-password>",
	"db_port": "<postgres-database-port>"
}
```

_Note: most like your bot name will be the same as your channel name, unless you have a bot account._

#### Go forth and do bot things

From here you can:
- Write new code in `app.js` to support new commands
- Write new controller code to speak to your database in `controllers/test-controller.js`
- Make awesome new bots for your twitch channel!
