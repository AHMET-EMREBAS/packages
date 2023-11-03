#!usr/env/bin node

const { exec } = require('child_process');
const { readdirSync } = require('fs');
const { join } = require('path');

const models = readdirSync(join(__dirname, 'models'));

for (const model of models) {
  const name = model.split('.').shift();

  exec(`npx nx g @techbir/gen:res ${name} pos`, (err) => {
    if (err) {
      console.err(`Could not generate ${model}`);
    }
  });
}
