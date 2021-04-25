const core = require('@actions/core');
const generator = require('./generator')


// most @actions toolkit packages have async methods
async function run() {
    try {
        const input_str = core.getInput('input');
        const input_hash_algo = core.getInput('method');
        const hash_output_length = core.getInput('ouput_lenth');

        let output_string = await generator(input, method, output_length)

        core.setOutput('output_str', output_string.toString());
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
