'use strict';

const config = require('./config.json')
const tg = require('node-telegram-bot-api')
const key = require('specialkey-emulator')

const bot = new tg(config.token, { polling: true })

const map_commands_to_actions = (message) => {
  if(!message) return

  const chat_id = message.from.id

  const actions = {
    '🔅': () => {
      key('NX_KEYTYPE_BRIGHTNESS_DOWN')
    },
    '🔆': () => {
      key('NX_KEYTYPE_BRIGHTNESS_UP')
    },
    '🔉': () => {
      key('NX_KEYTYPE_SOUND_DOWN')
    },
    '🔇': () => {
      key('NX_KEYTYPE_MUTE')
    },
    '🔊': () => {
      key('NX_KEYTYPE_SOUND_UP')
    },
    '⬅️': () => {
      key('NX_KEYTYPE_PREVIOUS')
    },
    '🔘': () => {
      key('NX_KEYTYPE_PLAY')
    },
    '➡️': () => {
      key('NX_KEYTYPE_NEXT')
    }
  }

  const callee = actions[message.text] || function() {
    bot.sendMessage(chat_id, `Not implemented, yet`)
  }

  callee()

  bot.sendMessage(chat_id, '👍', {
    reply_markup: {
      keyboard: get_menu_markup()
    }
  })

  return true
}

const get_menu_markup = () => {
  return [
    [{ text: '🔅' }, { text: '🔆' }],
    [{ text: '🔉' }, { text: '🔇' }, { text: '🔊' }],
    [{ text: '⬅️' }, { text: '🔘' }, { text: '➡️' }],
    [{ text: '🐭' }]
  ]
}

bot.on('message', map_commands_to_actions)
