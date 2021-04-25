const HashAlgorithmFactory = require('./lib/hash_algorithm_factory')

<<<<<<< HEAD:generator.js
let generator = function (hash_type, input_str, hash_output_length) {
=======
let hash_generator = function (hash_type, input_str, hash_output_length) {
>>>>>>> 7737b71... Added README.MD:hash_generator.js
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

<<<<<<< HEAD:generator.js
module.exports = generator;
=======
module.exports = hash_generator;
>>>>>>> 7737b71... Added README.MD:hash_generator.js
