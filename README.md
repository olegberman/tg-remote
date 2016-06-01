# tg-remote

Control your Mac remotely.

![tg-remote](http://i.imgur.com/eL7QWq9.gif)

### Instructions

You have to be running on **Mac OS X** in order to use this software.

1. Create a bot by contacting **@BotFather**
2. Copy-paste the access token into `config.json`

Then open up your terminal and do this:

```
# 3. Clone the repo
git clone git@github.com:olegberman/tg-remote.git

# 4. Go into the project folder
cd tg-remote

# 5. Install dependencies
npm install

# 6. Run the app
node index.js
```

### TODO
- Add some kind of authentication
- Ship the app as an executable with Electron
- Don't force users create their own bots

### For curious
If you run
```
node mouse.js
```
you would be able to control the mouse of your computer and also take & upload screenshots into the conversation.

### Development

The project right now is more of a POC, but I would like to see your interest in it. Thanks
