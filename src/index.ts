import { Client } from "discord.js";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { eddiecon } from "./commands/eddiecon";

(async () => {
  const token = process.env.TOKEN as string;
  const demo = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

  demo.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
      if (interaction.commandName === "eddiecon") {
        await eddiecon.run(interaction);
      }
    }
  });

  demo.on("messageCreate", async (message) => {
    if (message.content === "!ping") {
      await message.channel.send("Pong!");
    }
  });

  await demo.login(token);

  const rest = new REST({ version: "9" }).setToken(token);

  await rest.put(
    // @ts-expect-error Type mismatch?
    Routes.applicationGuildCommands("779429638887702529", "878297634522152963"),
    { body: [eddiecon.data.toJSON()] }
  );
})();
