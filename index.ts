// import {d } from 'dotenv';
import axios from 'axios'
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
  const options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    params: {
      'to[0]': 'uk',
      'api-version': '3.0',
      profanityAction: 'NoAction',
      textType: 'plain'
    },
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'e07b4510bbmsh1ba7fed02213d11p17cae5jsnfe881257ef5e',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    data: [
      {
        Text: 'I would really like to drive your car around the block a few times.'
      }
    ]
  };
  
  try {
    const response = await axios.request(options);
    
    // Extract the translated text
    const translatedText = response.data[0].translations[0].text;
    
    console.log('Original Text: ' + options.data[0].Text);
    console.log('Translated Text: ' + translatedText);
  } catch (error) {
    console.error(error);
  }
}

translateRequest();

