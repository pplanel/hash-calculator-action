const hasher = require('./hasher');
const process = require('process');
const cp = require('child_process');
const path = require('path');

test('can md5 hash a string', async () => {
  let hash__value = await hasher("sample string");
  expect(hash__value.toString()).toBe("bcc7bec")
})