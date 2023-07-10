# Board Api

You can link your bot to [OFFlimits server](https://discord.com/oauth2/authorize?client_id=728332591790293044&scope=bot+applications.commands&permissions=268445752&client_id=728332591790293044) and get results in a beautiful background using your own bot through the following api feature.

This code can be added to a built in slash command in your bot.

## Requirements

- any http library

## Usage

Use any library to make a post request to the url : `https://cdn.offlimitsbot.com/api/board` with the authorization header `Bearer d8eb181e-509d-4bc0-93ca-96765be40262`

> Within the request data or body list the guild instance, results channel id and desired board number
>
> Available board numbers : 3, 4, 6, 7, 8 and 5 for custom board

::: danger NOTE
You can generate board 5 ( custom board ) only for premium servers
:::

Optional for board templates and required for custom board `share_link`, the shareable custom board link

## request's result

data object the contains property image

## Code Snippets

:::: code-group
::: code-group-item JavaScript
```js
const { default: axios } = require("axios");
const Discord = require("discord.js");

const response = await axios('https://cdn.offlimitsbot.com/api/board', {
    method: 'post',
    headers: { Authorization: 'Bearer d8eb181e-509d-4bc0-93ca-96765be40262' },
    data: {
           guild: discordGuild, // Object - discord Guild instance
           channel_id: channelId, // String - The results channel id
           board_number: number, // Number - The desired board number
           share_link: link // String - Share link for custom board when using board number  5
        },
});
const data = await response.data; // object
const image = data.image // String image url
// This image url is not permanent, you can use is to display your image but after some time is may brake
// To create a permanent discord image :
const attachment = new Discord.AttachmentBuilder(
  image, // received image link
  "OFFlimits-bot.png"
);
// this will create an image that you can send as a file 
```
:::
::: code-group-item Python
```py
import aiohttp

async with aiohttp.ClientSession() as session:
            headers = {'Authorization': 'Bearer d8eb181e-509d-4bc0-93ca-96765be40262'},
            json_data = {
                'guild': discordGuild, # Object - discord Guild instance
                'channel_id': channelId, # String - The results channel id
                'board_number': number, # Number - The desired board number
                'share_link': link # String - Share link for custom board when using board number  5
            }
            async with session.post('https://cdn.offlimitsbot.com/api/board', headers=headers, json=json_data) as resp:
                data = await resp.json() # object
                image = data.get('image') # String image url
```
:::
::::
