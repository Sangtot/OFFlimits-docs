# Setup

This page demonstrates how to setup [OFFlimits bot](https://discord.com/oauth2/authorize?client_id=728332591790293044&scope=bot+applications.commands&permissions=268445752&client_id=728332591790293044) on your server.

# About
OFFlimits setup is required to be able to use [OFFlimits bot](https://discord.com/oauth2/authorize?client_id=728332591790293044&scope=bot+applications.commands&permissions=268445752&client_id=728332591790293044) in your server.

Setup can be done using prefixed command `+setup` or slash command `/setup`.

# Requirements

To execute this command the bot needs Administrator permissions

# Output

Sending the command, the bot is going to create 2 channels :

> `#results-bot`
>
> `#operations`

### results-bot:

This channel is only used for results calculation. The channel must contain only the data that needs to be calculated.

> If you have previous data you want to save you can use [delete-results](/guide/delete-results) to create a backup file. More on delete-results you can read in [delete-results](/guide/delete-results).

::: tip NOTE
A server can have more than 1 `#results-bot` channel for multiple calculations at the same time. Setup will only create one. You can manually create more channels or threads, with any name that includes the word `results` in it.
:::

::: tip Note
When having multiple results channels, send the command [/results](/guide/results) and [/board](/guide/board) in the one you wish to calculate or get the board in.
:::

### operations:
In this channel the bot will preform and log some commands outcome. Like a logs channel.