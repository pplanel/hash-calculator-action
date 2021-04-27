const HashAlgorithmFactory = require('./lib/hash_algorithm_factory')

let generator = function (hash_type, input_str, hash_output_length=undefined) {
    return new Promise((resolve) => {

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

module.exports = generator;
