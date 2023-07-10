# Results Api

You can link your bot to [OFFlimits server](https://discord.com/oauth2/authorize?client_id=728332591790293044&scope=bot+applications.commands&permissions=268445752&client_id=728332591790293044) and get results on your own bot using the following api feature

This code can be added to a built in slash command in your bot.

## Requirements

::: tip
First you need to fetch the messages from the results channel where you use the command, that should return an array of messages objects, which you convert to an array of strings, each string is a message content
:::

## Usage

Use any library to make a post request to the url : `https://cdn.offlimitsbot.com/api/results` with the authorization header `Bearer d8eb181e-509d-4bc0-93ca-96765be40262`

> Within the request data or body list the server id, channel id and an array containing the content of each message

## Code Snippets

:::: code-group
::: code-group-item JavaScript
```js
const { default: axios } = require("axios");

const response = await axios('https://cdn.offlimitsbot.com/api/results', {
    method: 'post',
    headers: { Authorization: 'Bearer d8eb181e-509d-4bc0-93ca-96765be40262' }
    data: {
           serverId: serverId, // server id
           channelId: channelId, // The results channel id
           messages: messages, // array of message.content
        },
});
const data = await response.data; // object
const table = data.table // String results table
```
:::
::: code-group-item Python
```py
import aiohttp

async with aiohttp.ClientSession() as session:
            headers = {'Authorization': 'Bearer d8eb181e-509d-4bc0-93ca-96765be40262'},
            json_data = {
                'serverId': server_id, # server id
                'channelId': channel_id, # The results channel id
                'messages': messages # array of message.content
            }
            async with session.post('https://cdn.offlimitsbot.com/api/results', headers=headers, json=json_data) as resp:
                data = await resp.json() # object
                table = data.get('table') # String results table
```
:::
::::

## request's result

Await the request to receive an object that contains :
- error : if error exist means theres something wrong within the sent request
- errors : an array containing calculation errors
- table : a string of the results table
