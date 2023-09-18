// import {d } from 'dotenv';
// import { Telegraf } from 'telegraf';
// import { message } from 'telegraf/filters';

// const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.launch()

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))

const translateRequest = async () => {
    try {
        const options = {
            method: 'GET',
            params: {
              text: 'Привіт',
              to: 'en',
              from: 'ua'
            },
            headers: {
              'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
              'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
            }
          };
          
          try {
              const response = await fetch('https://nlp-translation.p.rapidapi.com/v1/translate', options);
              console.log(response.json());
          } catch (error) {
              console.error(error);
          }
    } catch (error) {
    
        console.log(error);
    }
}
