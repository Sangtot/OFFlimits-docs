# Results

This page demonstrates how to use [OFFlimits bot](https://discord.com/oauth2/authorize?client_id=728332591790293044&scope=bot+applications.commands&permissions=268445752&client_id=728332591790293044) to calculate results.

## About

Results is a slash command that is used to calculate games results
and sort teams according to a specific points system that can be
customized [setpoints](/guide/points-system).

Later after using the command, the outcome can be used to generate
beautiful results images [board](/guide/board).

Results command can be used in any channel or thread that has the word `results` in its name, and can be used in multiple channels to calculate different results.

## Requirements

Before using the command you have to setup OFFlimits bot in your
server, and to do that you need to use the command [setup](/guide/setup), which will create 2 channels:

> `#operations`
>
> `#results-bot`

If you already have these channels you can skip [setup](/guide/setup).

## Usage

Lets say we have the results of 2 games for `Team One`.
**Input**

```txt:no-line-numbers
10th place                     1st place
Player A      3 kills          Player A      5 kills
Player B      1 kills          Player B      2 kills
Player C      0 kills          Player C      4 kills
Player D      1 kills          Player D      1 kills
```

For entering results data we use the channel `#results-bot`.

::: tip
If the team name has numbers in it or the team name is a number, write it within `[ ]` brackets, Ex: `[Team 99]`
:::

- In our example case the name is Team One

Now we array points after name in the following order:

`Team Name [rank 1] [kills 1] [rank 2] [kills 2] and so on to infinity.`

> `Team-One 10 5 1 12`
>
> `Team-Two 10 5 1 12`

## Sending the command

After writing down all teams we send the command `/results calculate` in the channel.

## Outcome

After a few seconds the bot will send a leaderboard table in `#operations` channel.

```txt:no-line-numbers
           RESULTS LEADERBOARD
  #      name     total   wins   KP   PP

  1.   Team-One      33      1   17   16
  2.   Team-Two      33      1   17   16
```
