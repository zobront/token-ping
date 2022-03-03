# Token Ping

Many apps and scripts need the ability to ping the blockchain for some data. The setup for even the smallest amount of data can be frustratingly time consuming — providers, ABIs, contract objects, etc.

Token Ping takes care of this for a few common token standards (ERC20, ERC721, and ERC1155) so you can get a contract instance ready to be queried in one line of code.

## Quick Start

1. Install the package with `npm install token-ping`.
2. Require the function you need into the file with, for example, `const { ERC20 } = require('token-ping');`
3. Plug in the address to get a contract instance, with `const contract = ERC20("0x...")`
4. Call any view function on the contract, for example `const nftOwner = await contract.ownerOf(0)`

## Function Parameters

There are three functions available for import: `ERC20()`, `ERC721()`, and `ERC1155()`.

Each of the functions take 1 required argument and 2 optional arguments:

- `address` (required): The address of the contract you'd like to connect to.
- `providerOrSigner` (optional): If you don't want to use the ethersjs default provider, you can create your own and add it here. If you use a signer, the contract instances you create will be able to perform transactions as well as view functions.
- `chainId` (optional): The ID of the chain the contract lives on. Defaults to 1 for mainnet

## ERC20 Methods

All external view methods on the ERC20 standard will be available on your contract instance.

- function name() public view returns (string memory);
- function symbol() public view returns (string memory);
- function decimals() public view returns (uint8);
- function totalSupply() public view returns (uint256);
- function balanceOf(address account) public view returns (uint256);
- function allowance(address owner, address spender) public view returns (uint256);

Note: If you add a signer as an argument when constructing the contract instance, you'll be able to access all external methods. See the [OpenZeppelin ERC20 implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol) for the full list of methods available.

## ERC721 Methods

All external view methods on the ERC721 standard will be available on your contract instance.

- function supportsInterface(bytes4 interfaceId) public view returns (bool);
- function balanceOf(address owner) public view returns (uint256);
- function ownerOf(uint256 tokenId) public view returns (address);
- function name() public view returns (string memory);
- function symbol() public view returns (string memory);
- function tokenURI(uint256 tokenId) public view returns (string memory);
- function getApproved(uint256 tokenId) public view returns (address);

Note: If you add a signer as an argument when constructing the contract instance, you'll be able to access all external methods. See the [OpenZeppelin ERC721 implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol) for the full list of methods available.


## ERC1155 Methods

All external view methods on the ERC1155 standard will be available on your contract instance.

- function supportsInterface(bytes4 interfaceId) public view returns (bool);
- function uri(uint256) public view returns (string memory);
- function balanceOf(address account, uint256 id) public view returns (uint256);
- function balanceOfBatch(address[] memory accounts, uint256[] memory ids) public view returns (uint256[] memory);
- function isApprovedForAll(address account, address operator) public view returns (bool);
 
 Note: If you add a signer as an argument when constructing the contract instance, you'll be able to access all external methods. See the [OpenZeppelin ERC1155 implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol) for the full list of methods available.
