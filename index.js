const core = require('@actions/core');
const hasher = require('./hasher')


// most @actions toolkit packages have async methods
async function run() {
    try {
        const input_str = core.getInput('input_str');
        const input_hash_algo = core.getInput('hash_algo');
        const hash_output_length = core.getInput('hash_output_length');

        let output_string = await hasher(input_str, input_hash_algo, hash_output_length)

        core.setOutput('output_str', output_string.toString());
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
