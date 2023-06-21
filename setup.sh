#!/bin/bash
nvm install 16.15.1
nvm use 16.15.1
npm install yarn -g
npm install p2m -g
yarn install
yarn build
pm2 start "node --require dotenv/config --experimental-specifier-resolution=node ./build/bot.js" --name "D4-bot"
