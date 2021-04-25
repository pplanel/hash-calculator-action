const HashAlgorithmFactory = require('./lib/hash_algorithm_factory')

let hash_generator = function (hash_type, input_str, hash_output_length) {
    return new Promise((resolve) => {
        if (typeof input_str !== 'string') {
            throw new Error('milliseconds not a number')
        }
        const hash_algo = HashAlgorithmFactory
            .getHashAlgorithm(hash_type)

        if (hash_type === 'SHA3' || hash_type === 'SHA-3') {
            const hashed_string = hash_algo(input_str, hash_output_length)
                .toString()

            resolve(hashed_string)
        }

        const hashed_string = hash_algo(input_str)
            .toString()

        resolve(hashed_string)
    });
};

module.exports = hash_generator;
