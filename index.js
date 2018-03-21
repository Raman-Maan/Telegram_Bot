'use strict'

require('dotenv').config();

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram(process.env.TOKEN);

class PingController extends TelegramBaseController {
    helloHandler($) {
        $.sendMessage('Hello to you good sir!')
    }

    get routes() {
        return {
            'saying_hello': 'helloHandler'
        }
    }
}

tg.router.when(
    new TextCommand('Hello there', 'saying_hello'),
    new PingController()
);
