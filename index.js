function dl_files() {
  require('child_process').exec('git clone -v https://github.com/Mikebot3/MikeBot-3-The-Rewrite-Awakens ./downloads');
}

async function runbot() {
  try {
    require('child_process').exec('node downloads/bot.js');
  } catch (err) {
    console.error(err);
  };
};

function runbot2() {
  require('child_process').exec('node downloads/bot.js');
}

//dl_files();
runbot2();
