import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, MessageEmbed } from "discord.js";

export const eddiecon = {
  data: new SlashCommandBuilder()
    .setName("eddiecon")
    .setDescription("A demo command for EddieCon!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to say happy birthday to.")
        .setRequired(true)
    ),
  run: async (interaction: CommandInteraction) => {
    await interaction.deferReply();

    const user = interaction.options.getUser('user');

    const embed = new MessageEmbed();
    embed.setTitle(`Happy Birthday ${user?.username}`);
    embed.setImage(
      "https://c.tenor.com/55OoXC5RnVkAAAAC/hatsune-miku-vocaloid.gif"
    );

    await interaction.editReply({ embeds: [embed] });
  },
};
