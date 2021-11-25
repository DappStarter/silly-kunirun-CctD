require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stove rival rifle comic install immense army genius'; 
let testAccounts = [
"0x5592c30bebb14afc9b62269cdb901613d3cbaa7cc80a76da98de2c57ea524ba7",
"0xd0c6932d1f6bfe09258072c96a7cc86db4a938684987d16096322d1022468fcb",
"0x37635564fd9baf02eb9f724c3144e4228734166d3c1afd5a65eb19ceefa6dce9",
"0xa2cb3d2cd3510e699a3969ad735320ee8724d411e46218a98c07a7f9e9117e8b",
"0xd2d07861efd9bbd7a94f9ca8bd086658a9078aad82f62debb9f92e1805bd2618",
"0xfcfcad144ecbd4dba7a668bf5733cb9f9b68d8b2a7d4abcb443d8d26dd5322fc",
"0xbe2995ecc2ef676a2ac89a2d96c655dcdcfbedfabac6d2d02b7f7d2278c9e638",
"0xd54e08aa145de3ae43806a0fedacf3eb86e650f970107bbb8b11bce274319839",
"0xd4443d5d0d4b90c36b28c264c14740a807c662fe279fb96acd64d91e8331ed46",
"0x5c558d780790d269a8c88300634afdb375cb092cf6857db8d7382d85dbb7b44f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


