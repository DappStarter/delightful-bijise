require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad give ensure olympic transfer'; 
let testAccounts = [
"0x5981b31dedcc8dde8fa6d1a42d764c002ea7506a3719acb064cc0b89528376fb",
"0x7d5d1bbac2f75153bfdb317a12a676ac196fa2a9cc5601b86c5d57ce16ae8539",
"0xef3ea4537453faf87a810d93aa89d463e075036061b360fc9bca2aa243322895",
"0x4f40b46a6edbab872311ba2f79ae978c45e0f490404960d8f0356bf0b8f5a019",
"0x90efb1e65ec050d3c4997378ffdb1b08923ea933dbcc7e27848d3283636784d2",
"0xd63897d8142f1d700bd478f27af376819ebcfe1a26cad86cfc92205f37679e30",
"0x39d9c75270b847d6a8bc983e940ac53db132df88ef5881de5fdd26679f5fcfc4",
"0x6bbc3e25e48064a32949a87995a9126fa8808deafd0b320a1d1ebd86124353cd",
"0x927b591ca4fbea59e61c09fc251f14b08b99c30bf790d9a5eb011ca616d486fd",
"0x88c0b4f08ab25cf937677077bdb624a42e82c5b3da1a54e6f9f70fb231998d30"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
