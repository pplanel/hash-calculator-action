const generator = require('./generator');

const input_str = 'it has a cow on the line'

test('User can choose MD5 hash algorithm', async () => {
    let hash_type__value = 'MD5'
    let hash_MD5_dgst = '5ab2d8f5b28e663b9f368f80807e5ee5'
    let output = await generator(hash_type__value, input_str)
    expect(output.toString()).toBe(hash_MD5_dgst)
})

test('User can choose SHA1 hash algorithm', async () => {
    let hash_type__value = 'SHA1'
    let hash_SHA1_dgst = 'a78b82c47d8dc347e83abfcf41c5f4e12ede9e9a'
    let output = await generator(hash_type__value, input_str)
    expect(output.toString()).toBe(hash_SHA1_dgst)
})

test('User can choose SHA256 hash algorithm', async () => {
    let hash_type__value = 'SHA256'
    let hash_sha256_dgst = 'f073fb96de4e223337bdfd8d80b94e290bd35dee0bea6b2f3913d5af86c92d0a'
    let output = await generator(hash_type__value, input_str)
    expect(output.toString()).toBe(hash_sha256_dgst)
})

test('User can choose SHA512 hash algorithm', async () => {
    let hash_type__value = 'SHA512'
    let hash_SHA512_dgst = '18639036c52378c3c8d9a77df4be05617e608445bc6e6e7f09d9e62e1bf973669c59d0d58fff4707ac83fafd0c187c7144baa02f83e60292a6b32fdb0d5f8be2'
    let output = await generator(hash_type__value, input_str)
    expect(output.toString()).toBe(hash_SHA512_dgst)
})

test('User can choose SHA3 (Keccak) hash algorithm with 224 bits length', async () => {
    let hash_type__value = 'SHA3'
    let hash_output__length = 224
    let hash_SHA3_dgst = '3846550643de789638059933740be5abbf18b96815aa36b7148d46dd'
    let output = await generator(hash_type__value, input_str, hash_output__length)
    expect(output.toString()).toBe(hash_SHA3_dgst)
})

test('User can choose SHA3 (Keccak) hash algorithm with 256 bits length', async () => {
    let hash_type__value = 'SHA3'
    let hash_output__length = 256
    let hash_SHA3_dgst = '9cf4d18537dc278f07e4830e164cc60221703daab04a7c14f99d340bbe5363cc'
    let output = await generator(hash_type__value, input_str, hash_output__length)
    expect(output.toString()).toBe(hash_SHA3_dgst)
})

test('User can choose SHA3 (Keccak) hash algorithm with 384 bits length', async () => {
    let hash_type__value = 'SHA3'
    let hash_output__length = 384
    let hash_SHA3_dgst = '5f8ef3088dd7f9de28ba9f6d8a147a22f980f31588e333b36678b41ebf638185454adfd12aacef34272bee73ab01e94c'
    let output = await generator(hash_type__value, input_str, hash_output__length)
    expect(output.toString()).toBe(hash_SHA3_dgst)
})

test('User can choose SHA3 (Keccak) hash algorithm with default 512 bits length', async () => {
    let hash_type__value = 'SHA3'
    let hash_SHA3_dgst = '168f83fe3afcea1bddcc0979a730202ea1f49e60d61ba887de0fea1bf63211132da2479e58a34c6a97426eddb7dee509f19a6acae3f0b2d4f97cf0733920bd98'
    let output = await generator(hash_type__value, input_str)
    expect(output.toString()).toBe(hash_SHA3_dgst)
})

test('User can choose RIPEMD160 hash algorithm', async () => {
    let hash_type__value = 'RIPEMD160'
    let hash_RIPEMD160_dgst = '7c7e587a03c7362cb674f67f2a1a20cdaf035232'
    let output = await generator(hash_type__value, input_str)
    expect(output.toString()).toBe(hash_RIPEMD160_dgst)
})

test('User get an error if try to use the output_len in method other than SHA3', async () => {
    let hash_type__value = 'RIPEMD160'
    let hash_output_len__value = 512
    let hash_RIPEMD160_dgst = '7c7e587a03c7362cb674f67f2a1a20cdaf035232'
    await expect(generator(hash_type__value, input_str, hash_output_len__value)).rejects.toThrow()
})


