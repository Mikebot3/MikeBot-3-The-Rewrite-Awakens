
const download = require('download-git-repo');
download('Mikebot3/Mikebot-3-The-Rewrite-Awakens', ".../", function (err) {
    console.log(err ? 'Error' : 'Success')
  });
const bot = require('.../bot.js');
bot();