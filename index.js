const core = require('@actions/core');
const wait = require('./hasher');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const input_str = core.getInput('string');

    let hashed_string = await hasher(input_str);

    core.setOutput('hashed_string', hashed_string);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
