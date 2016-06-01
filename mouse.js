const tg = require('node-telegram-bot-api')
const config = require('./config.json')
const child_process = require('child_process')
const robot = require('robotjs')

var bot = new tg(config.token, { polling: true })

var mouse_step = 3

bot.on('message', (msg) => {
  const pos = robot.getMousePos()
  switch(msg.text) {
    case 'start':
      bot.sendMessage(msg.chat.id, 'Mouse Move', {
        reply_markup: {
          keyboard: [
            [{ text: '↖️' }, { text: '⬆️' }, { text: '↗️' }],
            [{ text: '⬅️' }, { text: '🔴'}, { text: '➡️' }],
            [{ text: '↙️' }, { text: '⬇️' }, { text: '↘️' }],
            [{ text: 'Smaller steps' }, { text: 'Bigger steps' }],
            [{ text: '📸' }]
          ]
        }
      })
    break;
    case '↖️':
      robot.moveMouse(pos.x - mouse_step, pos.y - mouse_step)
    break;
    case '⬆️':
      robot.moveMouse(pos.x, pos.y - mouse_step)
    break;
    case '↗️':
      robot.moveMouse(pos.x + mouse_step, pos.y - mouse_step)
    break;
    case '⬅️':
      robot.moveMouse(pos.x - mouse_step, pos.y)
    break;
    case '🔴':
      robot.mouseClick()
    break;
    case '➡️':
      robot.moveMouse(pos.x + mouse_step, pos.y)
    break;
    case '↙️':
      robot.moveMouse(pos.x - mouse_step, pos.y + mouse_step)
    break;
    case '⬇️':
      robot.moveMouse(pos.x, pos.y + mouse_step)
    break;
    case '↘️':
      robot.moveMouse(pos.x + mouse_step, pos.y + mouse_step)
    break;
    case 'Bigger steps':
      mouse_step = mouse_step + 3
    break;
    case 'Smaller steps':
      mouse_step = mouse_step - 3
    break;
    case '📸':
      child_process.exec('screencapture -C -t jpg -r ./monitor.jpg', () => {
        bot.sendPhoto(msg.chat.id, 'monitor.jpg', { caption: '🖥' })
      })
    break;
  }
})
