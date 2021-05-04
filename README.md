# Hash Calculator GitHub Action
![badge](https://github.com/pplanel/hash-string-action/actions/workflows/test.yml/badge.svg)

This action allows the user to calculate the cryptographic hash value of a string. Multiple hashing algorithms are supported including MD5, SHA1, SHA2 and [many more]().
This actions is a wrapper around the library [CryptoJS](https://cryptojs.gitbook.io/docs/)


## Example
```yaml
jobs:
  hash_string:
    - name: Hash PR name
      uses: pplanel/hash-calculator-action@v1.2
      id: hash_result
      with:
        input: 'The quick brown fox jumps over the lazy dog'
        method: SHA3
        output_len: 384 
  
  use_digest:
    - name: Print
      run: |
        echo ${{ steps.hash_string.outputs.digest }}

### output_str = 283990fa9d5fb731d786c5bbee94ea4db4910f18c62c03d173fc0a5e494422e8a0b3da7574dae7fa0baf005e504063b3
```

## Inputs
| Argument | Description | Default | Required |
|----------|-------------|---------|---------|
| input    | Input string |  | yes |
| method    | Hash method | SHA256 | yes | 
| output_len    | Hash digest |  | no | 


## Available Hashing Algorithms
| Algorithm | Description | Bits |
|----------|-------------|---------|
| MD5 | It's been used in a variety of security applications and is also commonly used to check the integrity of files. Though, MD5 is not collision resistant, and it isn't suitable for applications like SSL certificates or digital signatures that rely on this property. | 128 |
| SHA-1 | The SHA hash functions were designed by the National Security Agency (NSA). SHA-1 is the most established of the existing SHA hash functions, and it's used in a variety of security applications and protocols. Though, SHA-1's collision resistance has been weakening as new attacks are discovered or improved. | 160 |
| SHA-2 | SHA-256 is one of the four variants in the SHA-2 set. It isn't as widely used as SHA-1, though it appears to provide much better security. | 224, 256, 384, 512 |
| SHA-3 | SHA-3 is the winner of a five-year competition to select a new cryptographic hash algorithm where 64 competing designs were evaluated. **Note:** Each of the SHA-3 functions is based on an instance of the Keccak algorithm, which NIST selected as the winner of the SHA-3 competition, but those SHA-3 functions won't produce hashes identical to Keccak.| 224, 256, 384, 512 |
| RIPEMD-160 | RIPEMD is a family of cryptographic hash functions developed in 1992 and 1996. There are five functions in the family: RIPEMD, RIPEMD-128, RIPEMD-160, RIPEMD-256, and RIPEMD-320, of which RIPEMD-160 is the most common. | 160 |



## Contributing
We love contributions, feedback, and bug reports. If you run into issues while running this action, [open an issue](https://github.com/pplanle/hash-calculator-action/issues) in this repository.
