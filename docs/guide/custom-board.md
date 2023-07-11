# Custom Board

This page demonstrates how to use [OFFlimits bot](https://discord.com/oauth2/authorize?client_id=728332591790293044&scope=bot+applications.commands&permissions=268445752&client_id=728332591790293044) to customize amazing results layouts.

## About

`Setboard` is a slash command that allows you to edit and create beautiful results leaderboards.

## Requirements

Before using the command you have to setup OFFlimits bot in your
server, and to do that you need to use the command [setup](/guide/setup), which will create 2 channels:

<DiscordMessage :bot="true" profile="bot">
			<template #interactions>
				<DiscordInteraction profile="test" :command="true">setup</DiscordInteraction>
			</template>
✅ | Created <DiscordMention type="channel">results-bot</DiscordMention>
</DiscordMessage>
<DiscordMessage :bot="true" profile="bot">
✅ | Created <DiscordMention type="channel">operations</DiscordMention>
</DiscordMessage>

If you already have these channels you can skip [setup](/guide/setup).

## Templates

::: warning Note
setboard can not be used to customize OFFlimits board templates. To customize the templates use the [dashboard](https://offlimitsbot.com/dashboard).
:::

## Usage

### Customize text

Send the command `/setboard customize text`.

<DiscordMessage :bot="true" profile="bot">
			<template #interactions>
				<DiscordInteraction profile="test" :command="true">setboard</DiscordInteraction>
			</template>
↪️ How many teams your design contain? 3-25
</DiscordMessage>

- Depending on your design, enter the number of teams, minimum is 3 and the maximum is 25.

<DiscordMessage profile="test">3</DiscordMessage>
<DiscordMessage :bot="true" profile="bot">
↪️Reply with the image you want to set as results board!
</DiscordMessage>

- You have 1 minute to reply with PNG / JPG format image of your custom design.

<DiscordMessage profile="test">
🖼️
</DiscordMessage>

<DiscordMessage :bot="true" profile="bot">
<DiscordDropdown placeholder="Select which points to show">
<DiscordDropdownOption title="KP total" info="Show total kills in the design" emoji="💀"></DiscordDropdownOption>
<DiscordDropdownOption title="PP points" info="Show rank points in the design" emoji="🏁"></DiscordDropdownOption>
<DiscordDropdownOption title="Total" info="Show total points in the design" emoji="🏆"></DiscordDropdownOption>
<DiscordDropdownOption title="wins" info="Show wins count in the design" emoji="🐓"></DiscordDropdownOption>
</DiscordDropdown>
</DiscordMessage>

- From the dropdown select the points that your board contain
- After you select the points, you will start styling the text that will be printed in the leaderboard

<DiscordMessage :bot="true" profile="bot">
<DiscordMarkdown>
↪️choose a font for Team-One : Reply font's number
{{'\n'}}
<img style="max-width:100%;width:500px;" alt="OFFlimits fonts" src="https://cdn.discordapp.com/attachments/950748965484257310/951872243892355172/fontsPNG.png"/>
</DiscordMarkdown>
</DiscordMessage>
<DiscordMessage profile="test">121</DiscordMessage>

- Reply with the number of the font that you wish to set for your leaderboard
- The font you choose will be applied to all the text

<DiscordMessage :bot="true" profile="bot">
↪️What font color for Team-One ? name or hex, Ex : #12345 or black
</DiscordMessage>
<DiscordMessage profile="test">#001219</DiscordMessage>

- Reply with the color name or the hex to set for the current text you are customizing

<DiscordMessage :bot="true" profile="bot">
<DiscordMarkdown>
<img style="max-width:100%;width:500px;" alt="OFFlimits fonts" src="https://media.discordapp.net/attachments/797403983185575986/868862350915145788/OFFlimits-events.png"/>
</DiscordMarkdown>
</DiscordMessage>
			<DiscordButtons>
				<DiscordButton type="primary">⬛</DiscordButton>
				<DiscordButton type="primary">⬜</DiscordButton>
				<DiscordButton type="primary">➕</DiscordButton>
				<DiscordButton type="primary">➖</DiscordButton>
				<DiscordButton type="secondary">size</DiscordButton>
			</DiscordButtons>
            <DiscordButtons>
				<DiscordButton type="primary">⏮️</DiscordButton>
				<DiscordButton type="primary">⏮️</DiscordButton>
				<DiscordButton type="primary">▶️</DiscordButton>
				<DiscordButton type="primary">⏸️</DiscordButton>
				<DiscordButton type="secondary">move</DiscordButton>
			</DiscordButtons>
            <DiscordButtons>
				<DiscordButton type="primary">⏭️</DiscordButton>
				<DiscordButton type="primary">⏩</DiscordButton>
				<DiscordButton type="primary">◀️</DiscordButton>
				<DiscordButton type="primary">⬅️</DiscordButton>
				<DiscordButton type="secondary">⏸️</DiscordButton>
			</DiscordButtons>
            <DiscordButtons>
				<DiscordButton type="primary">⏫</DiscordButton>
				<DiscordButton type="primary">🔼</DiscordButton>
				<DiscordButton type="primary">⬆️</DiscordButton>
				<DiscordButton type="primary">🔺</DiscordButton>
				<DiscordButton type="danger">❌</DiscordButton>
			</DiscordButtons>
            <DiscordButtons>
				<DiscordButton type="primary">⏬</DiscordButton>
				<DiscordButton type="primary">🔽</DiscordButton>
				<DiscordButton type="primary">⬇️</DiscordButton>
				<DiscordButton type="primary">🔻</DiscordButton>
				<DiscordButton type="success">✅</DiscordButton>
			</DiscordButtons>

::: tip
Use the discord buttons to position and resize the text
:::

- Resize text. The two buttons on the left cause small resize, while the two cubes on the left will cause major resize.
  <DiscordButtons>
  <DiscordButton type="primary">⬛</DiscordButton>
  <DiscordButton type="primary">⬜</DiscordButton>
  <DiscordButton type="primary">➕</DiscordButton>
  <DiscordButton type="primary">➖</DiscordButton>
  </DiscordButtons>

- Move text to the left. The movement ( spacing ) increases from right to left buttons.
  <DiscordButtons>
  <DiscordButton type="primary">⏮️</DiscordButton>
  <DiscordButton type="primary">⏮️</DiscordButton>
  <DiscordButton type="primary">▶️</DiscordButton>
  <DiscordButton type="primary">⏸️</DiscordButton>
  </DiscordButtons>

- Move text to the right. The movement ( spacing ) increases from right to left buttons.
  <DiscordButtons>
  <DiscordButton type="primary">⏭️</DiscordButton>
  <DiscordButton type="primary">⏩</DiscordButton>
  <DiscordButton type="primary">◀️</DiscordButton>
  <DiscordButton type="primary">⬅️</DiscordButton>
  </DiscordButtons>

- Move text up. The movement ( spacing ) increases from right to left buttons.
  <DiscordButtons>
  <DiscordButton type="primary">⏫</DiscordButton>
  <DiscordButton type="primary">🔼</DiscordButton>
  <DiscordButton type="primary">⬆️</DiscordButton>
  <DiscordButton type="primary">🔺</DiscordButton>
  </DiscordButtons>

- Move text down. The movement ( spacing ) increases from right to left buttons.
  <DiscordButtons>
  <DiscordButton type="primary">⏬</DiscordButton>
  <DiscordButton type="primary">🔽</DiscordButton>
  <DiscordButton type="primary">⬇️</DiscordButton>
  <DiscordButton type="primary">🔻</DiscordButton>
  </DiscordButtons>

- Save / next
  <DiscordButtons>
  <DiscordButton type="success">✅</DiscordButton>
  </DiscordButtons>
- Cancel current text positioning
  <DiscordButtons>
  <DiscordButton type="danger">❌</DiscordButton>
  </DiscordButtons>
- Pause setup at the current text, for the ability to continue it later.
  <DiscordButtons>
  <DiscordButton type="secondary">⏸️</DiscordButton>
  </DiscordButtons>

Everything you save and move to setup the next text, the new text will appear on top of the previous text.

#### Speading

After setting the first team with all its points you can use the same font settings for the next team to speed up the process

<DiscordMessage :bot="true" profile="bot">
↪️Use the same font settings for Team-Two ? Yes/No
</DiscordMessage>
<DiscordMessage profile="test">Yes</DiscordMessage>

::: danger Note
If replied with no, you will have to setup every text for the current team separately . Comes in handy if your design contains different styling for teams.
:::