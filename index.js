const { ethers } = require('ethers');
const fs = require('fs');

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

const abis = require('./abis');
const cachedabis = require('./cachedabis');

function ERC20(address, providerOrSigner = null, chainId = 1) {
    if (!providerOrSigner) providerOrSigner = ethers.getDefaultProvider(chainId);
    return new ethers.Contract(address, abis.ERC20, providerOrSigner);
}

function ERC721(address, providerOrSigner = null, chainId = 1) {
    if (!providerOrSigner) providerOrSigner = ethers.getDefaultProvider(chainId);
    return new ethers.Contract(address, abis.ERC721, providerOrSigner);
}

function ERC1155(address, providerOrSigner = null, chainId = 1) {
    if (!providerOrSigner) providerOrSigner = ethers.getDefaultProvider(chainId);
    return new ethers.Contract(address, abis.ERC1155, providerOrSigner);
}

function TPContract(address, providerOrSigner = null, chainId = 1) {
    if (![1, 3, 4].includes(chainId)) throw new Error('Unsupported chainId (mainnet, rinkeby, and ropsten only)');
    let chainPrefix = '';
    switch (chainId) {
        case 4: chainPrefix = '-rinkeby'; break;
        case 3: chainPrefix = '-ropsten'; break;
    }
    if (!providerOrSigner) providerOrSigner = ethers.getDefaultProvider(chainId);
    return new Promise((resolve, reject) => {
        if (cachedabis[address.toLowerCase()]) {
            resolve(new ethers.Contract(address, cachedabis[address.toLowerCase()], providerOrSigner));
        } else {
            $.getJSON(`https://api${chainPrefix}.etherscan.io/api?module=contract&action=getabi&address=${address}`, (data) => {
                cachedabis[address.toLowerCase()] = JSON.parse(data.result);
                fs.writeFile('node_modules/token-ping/cachedabis.json', JSON.stringify(cachedabis), 'utf8', (err) => {
                    if (err) throw new Error('Failed to cache downloaded ABI');
                })
                resolve(new ethers.Contract(address, JSON.parse(data.result), providerOrSigner));
            });
        } 
    });
}

module.exports = { ERC20, ERC721, ERC1155, TPContract }