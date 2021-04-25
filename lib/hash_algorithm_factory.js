const CryptoJS = require('crypto-js')

/*
The HashAlgorithmFactory is a factory class that exposes
the current supported hashing algorithms in CryptoJS
 */
class HashAlgorithmFactory {
    static getHashAlgorithm(hash_type) {
        switch (hash_type) {
            case "MD5":
                this.hashAlgorithm = CryptoJS.MD5
                break;
            case "SHA-1":
            case "SHA1":
                this.hashAlgorithm = CryptoJS.SHA1
                break;
            case "SHA-256":
            case "SHA256":
                this.hashAlgorithm = CryptoJS.SHA256
                break
            case "SHA-512":
            case "SHA512":
                this.hashAlgorithm = CryptoJS.SHA512
                break;
            case "SHA-3":
            case "SHA3":
                const SHA3 = (value, outputLength = 512) => {
                    return CryptoJS.SHA3(value, {outputLength: outputLength})
                }
                this.hashAlgorithm = SHA3
                break;
            case "RIPEMD-160":
            case "RIPEMD160":
                this.hashAlgorithm = CryptoJS.RIPEMD160
                break;
            default:
                this.hashAlgorithm = CryptoJS.SHA512
                break;

        }
        return this.hashAlgorithm
    }
}

module.exports = HashAlgorithmFactory