# Token Ping

Many apps and scripts need the ability to ping the blockchain for some data. The setup for even the smallest amount of data can be frustratingly time consuming — providers, ABIs, contract objects, etc.

Token Ping takes care of all of this so you can get a contract instance ready to be queried in one line of code.

## Quick Start

1. Install the package with `npm install token-ping`.
2. Require the function you need into the file with, for example, `const { ERC20 } = require('token-ping');`
3. Plug in the address to get a contract instance, with `const contract = ERC20("0x...")`
4. Call any view function on the contract, for example `const nftOwner = await contract.ownerOf(0)`

## Options

- Constructors are available for ERC20, ERC721, and ERC1155 tokens. Additional standards will be added as requested.

## Function Paramters

The imported functions take 1 required argument and 2 optional arguments:

- address (required): The address of the contract you'd like to connect to.
- providerOrSigner (optional): If you don't want to use the ethersjs default provider, you can create your own and add it here. If you use a signer, the contract instances you create will be able to perform write functions as well as view functions.
- chainId (optional): The ID of the chain the contract lives on. Defaults to 1 for mainnet

## Available Functions

