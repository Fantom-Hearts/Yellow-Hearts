//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract YellowHearts is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private _counter;

    string private _defaultBaseURI = "https://gateway.pinata.cloud/ipfs/QmSgwcBcWPMUQxjYu9UGQj1cZ9J6pN7ZTfmPSGJ6J6XYEJ/";

    address payable public payableAddress = payable(0x3e269293485c3a4A8443Dc5d89a913062db3982A);

    uint256 public maxMintCount = 1000;

    uint256 public mintPrice = 3 ether;

    uint256 public whitelistedMintPrice = 2 ether;

    uint256 private _maxMintCountWhitelist = 2;

    address[50] _whitelistedAddresses;

    mapping(address => uint256) private _whitelistRemaining;

    uint256 private _whitelistedCount = 0;

    uint256 private _whitelistSaleStart = 1644030000;

    uint256 private _whitelistSaleEnd = 1644462000;

    uint256 private _publicSaleStart = 1644894000;

    constructor() ERC721("YellowHeartsTest4", "HEART4") {
        _counter.increment();
    }
    
    function claim(uint256 quantity) public payable {
        uint256 totalPrice;
        
        if (isWhitelisted(msg.sender) && _publicSaleStart > block.timestamp) {
            require(_whitelistSaleStart <= block.timestamp, "Whitelist sale not started!");
            require(_whitelistSaleEnd >= block.timestamp, "Whitelist sale ended!");
            
            totalPrice = whitelistedMintPrice * quantity;
        } else {
            totalPrice = mintPrice * quantity;
        }

        uint256 tokenId = _counter.current();

        // Conferir preço
        require(msg.value >= totalPrice, "Invalid amount!");
        
        // Conferir quantidade de token disponível
        require((tokenId + quantity - 1) < maxMintCount, "Cannot claim this much. Set a lower quantity.");
        
        payableAddress.transfer(totalPrice);

        for (uint256 i = 0; i < quantity; i++) {
            mintNFT(msg.sender, tokenId + i);
        }
    }

    function mintNFT(address recipient, uint256 tokenId) private {
        _safeMint(recipient, tokenId);
        _counter.increment();
    }

    function reserveNFT(address recipient, uint256 tokenId) public onlyOwner {
        mintNFT(recipient, tokenId);
    }

    function whitelistAddress(address recipient) public onlyOwner {
        require(recipient != address(0), "YellowHearts: cannot whitelist zero address.");
        require(!isWhitelisted(recipient), "YellowHewarts: address already whitelisted.");
        _whitelistedAddresses[_whitelistedCount++] = recipient;
        _whitelistRemaining[recipient] = 2;
    }

    function whitelistAddresses(address[] calldata recipients, uint256 count) external onlyOwner {
        for (uint256 i; i < count; i++) {
            whitelistAddress(recipients[i]);
        }
    }

    function whitelistedAddresses() public view returns (address[] memory) {
        address[] memory addresses = new address[](_whitelistedCount);
        for (uint256 i; i < _whitelistedCount; i++) {
            addresses[i] = _whitelistedAddresses[i];
        }
        return addresses;
    }

    function isWhitelisted(address recipient) public view returns (bool) {
        return _whitelistRemaining[recipient] != 0;
    }

    function changeBaseURI(string memory newURI) public onlyOwner {
        _defaultBaseURI = newURI;
    }

    function tokenURI(uint256 tokenId) public view override (ERC721, ERC721URIStorage) returns (string memory) {
        require(_exists(tokenId), "YellowHearts: token doesn't exist.");
        return string(abi.encodePacked(_baseURI(), tokenId.toString(), ".json"));
    }

    function _baseURI() internal view override returns (string memory) {
        return _defaultBaseURI;
    }

    function _burn(uint256 tokenId) internal override (ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override (ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override (ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}