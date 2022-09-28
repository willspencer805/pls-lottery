const { assert, expect } = require("chai");
const { ethers, deployments, network, getNamedAccounts } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../helper-hardhat-config");

describe("PLS Unit Tests", function () {
  beforeEach(async function () {
    deployer = (await getNamedAccounts()).deployer;
    account1 = (await getNamedAccounts()).account1;
    account2 = (await getNamedAccounts()).account2;
    await deployments.fixture(["all"]);
    pls = await ethers.getContract("PLS", deployer);
    tokensPerEth = await pls.tokensPerEth();
  });

  describe("constructor", function () {});

  describe("token purchase", function () {
    it("mints the right amount of tokens", async function () {
      const balanceBefore = await pls.balanceOf(deployer);
      assert.equal(balanceBefore.toString(), "0");
      const amount = 1;
      await pls.buyTokens({ value: amount });
      const amountToReceive = tokensPerEth * amount;
      const balanceAfter = await pls.balanceOf(deployer);
      assert.equal(balanceAfter.toString(), amountToReceive.toString());
    });
  });
});
