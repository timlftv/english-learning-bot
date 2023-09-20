import { Telegraf } from 'telegraf'
// import { message } from 'telegraf/filters';
import { translate } from '../api/translate'
import { detect } from '../api/detect'
import { dictionaryLookup } from '../api/dictionaryLookup'
// import { Message } from 'telegraf/typings/core/types/typegram';

const bot = new Telegraf(process.env.BOT_API!)

bot.start(ctx =>
    ctx.reply(
        "Welcome. Bot supports only English text. Please, don't send me text in other languages.",
    ),
)

bot.help(ctx => ctx.reply('Send me a sticker'))

bot.on('message', async ctx => {
    const message = ctx.message
    if (message && 'text' in message) {
        const text = message.text
        const detectedLanguage = await detect(text)

        if (!detectedLanguage || detectedLanguage != 'en') {
            ctx.reply('дінаху, я приймаю тільки англійський текст')
            return
        }

        if (text.split(' ').length === 1) {
            // console.log(text)
            const dictionary = await dictionaryLookup(text)

            if (dictionary) {
                console.log(`${text} - ${dictionary}`)
                ctx.reply(`${text} - ${dictionary.toLocaleLowerCase()}`)
    
                return
            }
        }

        const translatedText = await translate(text)

        if (!translatedText) {
            ctx.reply('дінаху, не змішуй мови')
            return
        }

        console.log(`${text} - ${translatedText}`)
        ctx.reply(`${text} - ${translatedText.toLocaleLowerCase()}`)
    }
})

bot.hears('hi', ctx => ctx.reply('Hey there'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
