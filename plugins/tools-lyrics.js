import {
    lyrics
} from "@bochilteam/scraper"
import fetch from "node-fetch"
import Genius from "genius-lyrics"
import axios from "axios"
import cheerio from "cheerio"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Enter a music title!\n*Example:* .lyrics hello"

    let key = "h6fTn1BYNjYi5VTszhyAFTcM3WWtk2E4hqrXCcutfObE4jVFnJ3LVyewHKIYTli7"
    let Client = new Genius.Client(key)
    let song = await Client.songs.search(text)
    let nothing = "Not known!"

    try {
        let bocil = await lyrics(text)
        let bocap = `╭╼╼╼╼『 𝗤𝗨𝗘𝗘𝗡-𝗦𝗔𝗞𝗨𝗥𝗔_𝗠𝗗 』╼╼╼❏
*🔖Title*
${bocil.title ? bocil.title : nothing}

*📝lyrics*
${bocil.lyrics ? bocil.lyrics : nothing}

*🧑‍🎤Singer*
${bocil.author ? bocil.author : nothing}

*🔗Url*
${bocil.link ? bocil.link : nothing}

®『 🧚‍♂️Qᴜᴇᴇɴ-ꜱᴀᴋᴜʀᴀ_ᴍᴅ_ᴠ2 』
`
        await m.reply(bocap)
    } catch (e) {
        try {
            let jenius = (await song[0])
            let albert = `╭╼╼╼╼『 𝗤𝗨𝗘𝗘𝗡-𝗦𝗔𝗞𝗨𝗥𝗔_𝗠𝗗 』╼╼╼❏
*🔖Title*
${jenius.title ? jenius.title : nothing}

*📝Lyrics*
${await getLyrics(jenius.url)}

*🧑‍🎤Singer*
${await(jenius.artist).name ? await(jenius.artist).name : nothing}

*🔗Url*
${jenius.url ? jenius.url : nothing}

® 『 🧚‍♂️𝐐𝐔𝐄𝐄𝐍-𝐒𝐀𝐊𝐔𝐑𝐀_𝐌𝐃_𝐕2 』
`
            await m.reply(albert)
        } catch (e) {
            try {
                const {
                    data
                } = await axios.get(
                    "https://www.lyricsfreak.com/search.php?a=search&q=" + text
                );
                let $ = cheerio.load(data);
                let h1 = $(".song");
                const hh = h1.attr("href");
                const huu = await axios.get("https://www.lyricsfreak.com" + hh);
                let s = cheerio.load(huu.data);
                let h2 = s(".lyrictxt").text();
                let frank = `*乂 Lyrics 乂*\n${h2}\n\n_By lyricsfreak_`
                await m.reply(frank);
            } catch (e) {
                throw eror
            }
        }
    }

}

handler.help = ['lyrics'].map(v => v + ' <music text>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i

export default handler

async function getLyrics(url) {
    const response = await fetch("https://files.xianqiao.wang/" + url)
    const html = await response.text()
    const $ = cheerio.load(html);
    let lyrics = '';
    $('div[class^="Lyrics__Container"]').each((i, elem) => {
        if ($(elem).text().length !== 0) {
            const snippet = $(elem)
                .html()
                .replace(/<br>/g, '\n')
                .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');

            lyrics += $('<textarea/>').html(snippet).text().trim() + '\n\n';
        }
    });
    return lyrics;
}
