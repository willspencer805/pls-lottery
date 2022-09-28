// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./PLS.sol";

contract LotteryToken is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    PLS public immutable plsToken;
    uint256 public constant TICKET_COST = 10;
    bool public entryActive = false;

    constructor(
        string memory tokenName,
        string memory tokenSymbol,
        address _plsToken
    ) ERC721(tokenName, tokenSymbol) {
        plsToken = PLS(_plsToken);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "testURI";
    }

    // function setBaseURI(string memory newURI) public onlyOwner {}

    function changeEntryStatus() public onlyOwner {
        entryActive = !entryActive;
    }

    function buyTickets(uint256 numberToBuy) public {
        require(entryActive, "Can't enter yet!");
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
