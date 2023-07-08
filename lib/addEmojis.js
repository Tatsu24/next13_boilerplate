const fs = require('fs');
const path = require('path');

const messageFilePath = path.join(process.cwd(), '.git/COMMIT_EDITMSG');

if (messageFilePath) {
  let message = fs.readFileSync(messageFilePath, 'utf-8');

  // FYI: https://gist.github.com/parmentf/035de27d6ed1dce0b36a
  const emojis = {
    feat: '✨',
    fix: '🐛',
    docs: '📚',
    style: '🎨',
    refactor: '♻️',
    perf: '🐎',
    test: '✅',
    build: '🏗',
    ci: '👷',
    chore: '🔧',
    revert: '⏪'
  };

  const keyword = Object.keys(emojis).find((key) => message.startsWith(key));
  if (keyword) {
    message = emojis[keyword] + ' ' + message;
    fs.writeFileSync(messageFilePath, message);
    // eslint-disable-next-line no-console
    console.log('Successfully added the emoji');
  }
}
