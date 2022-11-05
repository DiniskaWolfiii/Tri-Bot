const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {

    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Frage den heiligen 8ball und erhalte heilige Antworten!')
        .addStringOption(option =>
            option.setName('frage')
                .setDescription('Deine Frage die du dem 8ball stellen willst')
                .setRequired(true)),

    /**
     * @param {import('discord.js').Interaction} interaction
     */
    async execute(interaction) {
        await interaction.deferReply();
        const {EmbedBuilder, Embed} = require('discord.js');
        const frage = interaction.options.getString('frage');
        let antworten = [
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Ja',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Nein',
            'Vielleicht',
            'Vielleicht',
            'Vielleicht',
            'Vielleicht',
            'Vielleicht',
            'Vielleicht',
            'Vielleicht',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Könnte man durchaus in Betrach ziehen',
            'Durchaus möglich...',
            'Durchaus möglich...',
            'Durchaus möglich...',
            'Durchaus möglich...',
            'Durchaus möglich...',
            'Durchaus möglich...',
            'Meine Quellen sagen Nein, sie sagen aber auch dass Trump ist ein guter Präsident ist',
            'Meine Quellen sagen Nein, sie sagen aber auch dass Trump ist ein guter Präsident ist',
            'Meine Quellen sagen Nein, sie sagen aber auch dass Trump ist ein guter Präsident ist',
            'Meine Quellen sagen Nein, sie sagen aber auch dass Trump ist ein guter Präsident ist',
            'Meine Quellen sagen Nein, sie sagen aber auch dass Trump ist ein guter Präsident ist',
            'Meine Quellen sagen Nein, sie sagen aber auch dass Trump ist ein guter Präsident ist',
            'Meine Quellen sagen Nein, sie sagen aber auch dass Trump ist ein guter Präsident ist',
            'Meine Quellen sagen Nein, sie sagen aber auch dass Trump ist ein guter Präsident ist',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Definitiv.',
            'Konzentriere dich und frage nochmal',
            'Konzentriere dich und frage nochmal',
            'Konzentriere dich und frage nochmal',
            'Konzentriere dich und frage nochmal',
            'Konzentriere dich und frage nochmal',
            'Konzentriere dich und frage nochmal',
            'Konzentriere dich und frage nochmal',
            'Konzentriere dich und frage nochmal',
            'Konzentriere dich und frage nochmal',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'Ohne einen Zweifel.',
            'OH GOTT NEIN',
            'OH GOTT NEIN',
            'OH GOTT NEIN',
            'OH GOTT NEIN',
            'OH GOTT NEIN',
            'OH GOTT NEIN',
            'Oh god please have mercy with me',
            'Oh god please have mercy with me',
            'Oh god please have mercy with me',
            'Oh god please have mercy with me',
            'Oh god please have mercy with me',
            'Oh god please have mercy with me',
            'Das sag ich dir lieber nicht...',
            'Das sag ich dir lieber nicht...',
            'Das sag ich dir lieber nicht...',
            'Das sag ich dir lieber nicht...',
            'Das sag ich dir lieber nicht...',
            'Das sag ich dir lieber nicht...',
            'Das unterliegt einer Schweigepflicht',
            'Das unterliegt einer Schweigepflicht',
            'Das unterliegt einer Schweigepflicht',
            'Das unterliegt einer Schweigepflicht',
            'Das unterliegt einer Schweigepflicht',
            'Das unterliegt einer Schweigepflicht',
            'Als Strafe für diese Frage musst du alle 900 Krogs sammeln und darfst dann erst wieder atmen',
            'Versuchs morgen wieder',
            'Möglicherweise',
            'Ja, aber mache es hardcore betrunken :beers:',
            'Tu was Jesus gemacht hat, sterb mit einem Alter von 33',
            'Zweifelhaft',
            'Auf jeden Fall',
            'HELL YESSS, GIRLLLL. GO FOR IT',
            'Wenn du den morgigen Tag noch erleben möchtest, TU ES NICHT',
            'Ohne Zweifel',
            'Keine Ahnung',
            'Du musst schon hart verzweifelt sein wenn du einer KUGEL solch eine Frage stellt, hm?',
            'Frag später nicht nochmal nach',
            'Frag doch einfach nochmaaaaal',
            'Halts Maul, du Nutte',
            'Es ist Montag, lass mich inruhe',
            ':zzz:',
            'Kommst du nicht selber drauf??',
            'Wie kommst du auf die Idee das ein Stück Plastik die Antwort weiß??',
            'Hau ab.',
            'Geh weg. Bitte.',
            'Ich schlafe mit deiner Frau',
            'Bitte. Geh sterben.',
            'Och nee, die haben jetzt nicht noch Trump mit reingezogen... oder??',
            'BITTTCCHH, natürlich ist die Antwort nein',
            'Bitte verlasse diesen Server.',
            'Frag doch einfach deine Mülltonne. Die weiß wie man dein Müll kompensiert',
            'Hier. Hast. Du. Scheiße. :poop:',
            ':poop:',
            'Ich liebe dich auch... nicht.',
            '/ban',
            'Nachdem du gestern mit meiner Freundin fremdgegangen bist, ist meine Antwort das hier: :knife:',
            'Was? Ich verstehe kein Idiotisch',
            'Du wirst niemals Glücklich werden nach dieser Frage...',
            'Hat deine Mutter dich als Kind auf dem Kopf fallen lassen?',
            'Nein aber Lutz ist doof.',
            'War deine Schaukel als Kind gegen die Wand gerichtet?',
            'Ich sehe deine Zukunft... Und sehe Schwarz',
            'Well, duh',
            'Wie oft hat deine Mutter dich als Kind runterfallen lassen? Frage aus interesse...',
            'Zu einer Wahrscheinlichkeit von 99,999%',
            'Die Antwort liegt in deinem Magen... Vergammelt, zerkaut und ohne Sinn.',
            'Ich wusste nicht dass ich als KUGEL solche Aggressionen verspüren kann...',
            'Bitte... Hör einfach auf...',
            'Darf ich dir Geld geben und du hörst auf mich jemals wieder anzusprechen?'
        ]


        for (let i = antworten.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = antworten[i];
            antworten[i] = antworten[j];
            antworten[j] = temp;
        }

        let randomNumber = Math.floor(Math.random() * antworten.length);

        let krassesEmbed = new EmbedBuilder()
            .setColor('#636363')
            .setTitle(':8ball: 8Ball')
            .setThumbnail('https://cdn.pixabay.com/photo/2015/09/05/07/17/pool-ball-923833_960_720.png')
            .addFields(
                { name: 'Frage', value: frage},
                {name: 'Antwort', vlaue: antworten[randomNumber]}
            )
            .setFooter({text: 'Question by ' + interaction.user.username, iconURL: interaction.user.displayAvatarURL})

        await interaction.editReply({ embeds: [krassesEmbed] });
    },
};