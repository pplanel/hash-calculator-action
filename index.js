const core = require('@actions/core');
const generator = require('./generator')


// most @actions toolkit packages have async methods
async function run() {
    try {
        const input = core.getInput('input');
        const method = core.getInput('method');
        const output_length = core.getInput('output_length');

        let output_string = await generator(method, input, output_length)
        core.setOutput('digest', output_string.toString());
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
