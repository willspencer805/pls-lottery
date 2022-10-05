// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PLS is ERC20, Ownable {
    event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);
    event SellTokens(
        address seller,
        uint256 amountOfETH,
        uint256 amountOfTokens
    );

    uint256 public constant tokensPerEth = 100;

    constructor(string memory tokenName, string memory tokenSymbol)
        ERC20(tokenName, tokenSymbol)
    {}

    /**
     * @notice Buys PLS tokens. Payable function
     */
    function buyTokens() public payable {
        uint256 amountOfETH = msg.value;
        uint256 amountOfTokens = amountOfETH * tokensPerEth;
        _mint(msg.sender, amountOfTokens);
        emit BuyTokens(msg.sender, amountOfETH, amountOfTokens);
    }

    /**
     * @notice Withdraws all ETH from the contract. Can only be called by the contract owner
     */
    function withdraw() public onlyOwner {
        uint256 balanceToTransfer = address(this).balance;
        (bool sent, ) = msg.sender.call{value: balanceToTransfer}("");
        require(sent, "Failed to send user balance back to the user");
    }
}
