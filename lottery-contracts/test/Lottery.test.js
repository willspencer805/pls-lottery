const { assert, expect } = require("chai");
const { ethers, deployments, network, getNamedAccounts } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../helper-hardhat-config");

describe("LotteryToken Unit Tests", function () {
  beforeEach(async function () {
    deployer = (await getNamedAccounts()).deployer;
    account1 = (await getNamedAccounts()).account1;
    account2 = (await getNamedAccounts()).account2;
    await deployments.fixture(["all"]);
    pls = await ethers.getContract("PLS", deployer);
    lottery = await ethers.getContract("LotteryToken", deployer);
    tokensPerEth = await pls.tokensPerEth();
  });

  describe("token purchase", function () {
    it("transfer the right amount of tokens", async function () {
      const amount = ethers.utils.parseEther("1000000000");
      await pls.buyTokens({ value: 1 });
      await pls.approve(lottery.address, amount);
      await lottery.buyTickets(10);
      balanceAfter = await lottery.balanceOf(deployer);
      assert.equal(balanceAfter.toString(), "10");
    });
  });
});
