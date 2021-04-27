const HashAlgorithmFactory = require('./lib/hash_algorithm_factory')

let generator = function (hash_type, input_str, hash_output_length) {
    return new Promise((resolve) => {

        const hash_algo = HashAlgorithmFactory
            .getHashAlgorithm(hash_type)

        if (['SHA3', 'SHA-3'].includes(hash_type)) {
	    const hashed_string = hash_algo(input_str, hash_output_length).toString()

            resolve(hashed_string)
        } else if(hash_output_length > 0){

	    throw new Error("output_len can only be set in SHA3 mode.");
	}

        const hashed_string = hash_algo(input_str)
            .toString()

        resolve(hashed_string)
    });
};

module.exports = generator;
