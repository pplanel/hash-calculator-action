const core = require('@actions/core');
const hash_generator = require('./hash_generator')


// most @actions toolkit packages have async methods
async function run() {
    try {
        const input_str = core.getInput('input_str');
        const input_hash_method = core.getInput('hash_method');
        const hash_output_length = core.getInput('hash_output_length');

        let output_string = await hash_generator(input_str, input_hash_method, hash_output_length)

        core.setOutput('output_str', output_string.toString());
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
