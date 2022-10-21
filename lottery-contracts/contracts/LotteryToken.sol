// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./PLS.sol";

contract LotteryToken is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    PLS public immutable plsToken;
    uint256 public constant TICKET_COST = 10 ether;
    uint256 public maxTokens = 200;
    bool public entryActive = false;
    string public baseUri;
    string private _contractUri;

    constructor(
        string memory tokenName,
        string memory tokenSymbol,
        address _plsToken,
        string memory uri,
        string memory contractUri
    ) ERC721(tokenName, tokenSymbol) {
        plsToken = PLS(_plsToken);
        baseUri = uri;
        _contractUri = contractUri;
    }

    function contractURI() public view returns (string memory) {
        return _contractUri;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseUri;
    }

    function setBaseURI(string memory newURI) public onlyOwner {
        baseUri = newURI;
    }

    function changeEntryStatus() public onlyOwner {
        entryActive = !entryActive;
    }

    function buyTickets(uint256 numberToBuy) public {
        require(entryActive, "Can't enter yet!");
        require(
            totalSupply() + numberToBuy <= maxTokens,
            "Purchase exceeds max supply"
        );
        uint256 totalTransfer = numberToBuy * TICKET_COST;
        bool success = plsToken.transferFrom(
            msg.sender,
            address(this),
            totalTransfer
        );

        if (success) {
            for (uint64 i = 0; i < numberToBuy; i++) {
                uint256 tokenId = _tokenIdCounter.current();
                _tokenIdCounter.increment();
                _safeMint(msg.sender, tokenId);
            }
        }
    }
}
