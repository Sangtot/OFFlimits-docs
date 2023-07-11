import { defineClientConfig } from "@vuepress/client";
import {
  DiscordButton,
  DiscordButtons,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordInteraction,
  DiscordMarkdown,
  DiscordMention,
  DiscordMessage,
  DiscordMessages,
  DiscordReaction,
  DiscordReactions,
  install as DiscordMessageComponents,
} from "./components/message/vue";
import { DiscordDropdown, DiscordDropdownOption } from "./components/discord";
import config from "../config";
import "./components/message/vue/dister/style.css";

export default defineClientConfig({
  enhance({ app }) {
    app.use(DiscordMessageComponents, {
      avatars: {
        OFFlimits: config.OFFlimits_logo,
      },
      profiles: {
        test: {
          author: "User",
          avatar: "green",
          roleColor: "#FF5353",
        },
        bot: {
          author: "OFFlimits",
          avatar: "OFFlimits",
          roleColor: "yellow",
          bot: true,
        },
      },
    });

    app.component("DiscordDropdownOption", DiscordDropdownOption);
    app.component("DiscordDropdown", DiscordDropdown);
    app.component("DiscordButton", DiscordButton);
    app.component("DiscordButtons", DiscordButtons);
    app.component("DiscordEmbed", DiscordEmbed);
    app.component("DiscordEmbedField", DiscordEmbedField);
    app.component("DiscordEmbedFields", DiscordEmbedFields);
    app.component("DiscordInteraction", DiscordInteraction);
    app.component("DiscordMarkdown", DiscordMarkdown);
    app.component("DiscordMention", DiscordMention);
    app.component("DiscordMessage", DiscordMessage);
    app.component("DiscordMessages", DiscordMessages);
    app.component("DiscordReaction", DiscordReaction);
    app.component("DiscordReactions", DiscordReactions);
  },
});
