const { ethers } = require("hardhat");

const developmentChains = ["hardhat", "localhost"];

const networkConfig = {
  5: {
    name: "goerli",
    tokenName: "Practical Learning Series Coin",
    tokenSymbol: "PLSC",
    initialAmount: ethers.utils.parseEther("100"),
  },
  31337: {
    name: "local",
    tokenName: "Practical Learning Series Coin",
    tokenSymbol: "PLSC",
    initialAmount: ethers.utils.parseEther("100"),
  },
};

module.exports = { developmentChains, networkConfig };
