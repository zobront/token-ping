const abis = require('./abis');
const { ethers } = require('ethers');

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

module.exports = { ERC20, ERC721, ERC1155 }