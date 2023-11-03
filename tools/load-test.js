#!/usr/bin/env node

// console.log('Load test');

// let count = 0;
// async function createCategory() {
//   return await fetch('http://localhost:3000/api/category', {
//     method: 'post',
//     body: JSON.stringify({ name: 'newone' }),
//   })
//     .then((r) => {
//       console.log(count++);
//     })
//     .catch((err) => {
//       console.log('Error: ' + count++);
//     });
// }

// for (let i = 0; i < 1000; i++) {
//   setTimeout(() => {
//     createCategory().then();
//   }, 10 * i);
// }

const customHeaders = {
  'Content-Type': 'application/json',
};

function rnd() {
  return `${Math.random()}`;
}

async function createCategory() {
  const name = 'name ' + rnd();
  return await fetch('http://localhost:3000/api/category', {
    method: 'POST',
    headers: customHeaders,
    body: JSON.stringify({ name }),
  }).then((res) => {
    return res.json();
  });
}

setInterval(async () => {
  try {
    const value = await createCategory();
    console.log(value);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}, 1000);
