// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PLS is ERC20, Ownable {
    event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);
    event SellTokens(address seller, uint256 amountOfETH, uint256 amountOfTokens);

    uint256 public constant tokensPerEth = 100;

    constructor(string memory tokenName, string memory tokenSymbol) ERC20(tokenName, tokenSymbol) {
        _mint(msg.sender, 1000*10**18);
    }

    function buyTokens() public payable {
        uint256 amountOfETH = msg.value;
        uint256 amountOfTokens = amountOfETH * tokensPerEth;
        _mint(msg.sender, amountOfTokens);
        emit BuyTokens(msg.sender, amountOfETH, amountOfTokens);
    }

  // ToDo: create a withdraw() function that lets the owner withdraw ETH
  function withdraw() public onlyOwner {
    uint256 balanceToTransfer = address(this).balance;
    (bool sent,) = msg.sender.call{value: balanceToTransfer}("");
    require(sent, "Failed to send user balance back to the user");
  }

  // ToDo: create a sellTokens(uint256 _amount) function:
  function sellTokens(uint256 _amount) public  {
    approveTokens(_amount);

    if(transferFrom(msg.sender, address(this), _amount)) {
      uint256 balanceToTransfer = _amount / tokensPerEth; 
      (bool sent,) = msg.sender.call{value: balanceToTransfer}("");
      require(sent, "Failed to send user balance back to the user");
      emit SellTokens(msg.sender, balanceToTransfer, _amount);
    }
  }

  function approveTokens(uint256 _amount) public {
    // approve tokens to be spent by vendor contract
    bool success = approve(address(this), _amount);
    require(success, "Failed to approve transfer");
  }
}