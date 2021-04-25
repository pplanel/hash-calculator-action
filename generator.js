const HashAlgorithmFactory = require('./lib/hash_algorithm_factory')

<<<<<<< HEAD:hash_generator.js
let hash_generator = function (hash_type, input_str, hash_output_length) {
=======
let generator = function (hash_type, input_str, hash_output_length) {
>>>>>>> c9cc720... Refactor in generator index and test:generator.js
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

<<<<<<< HEAD:hash_generator.js
module.exports = hash_generator;
=======
module.exports = generator;
>>>>>>> c9cc720... Refactor in generator index and test:generator.js
