const { assert, expect } = require('chai')
const { ethers, deployments, network, getNamedAccounts } = require('hardhat')
const { developmentChains, networkConfig } = require('../helper-hardhat-config')

describe('LotteryToken Unit Tests', function () {
  beforeEach(async function () {
    deployer = (await getNamedAccounts()).deployer
    account1 = (await getNamedAccounts()).account1
    account2 = (await getNamedAccounts()).account2
    await deployments.fixture(['all'])
    pls = await ethers.getContract('PLS', deployer)
    lottery = await ethers.getContract('LotteryToken', deployer)
    tokensPerEth = await pls.tokensPerEth()
  })

  describe('token purchase', function () {
    it('transfer the right amount of tokens', async function () {
      const amount = ethers.utils.parseEther('100')
      await lottery.changeEntryStatus()
      await pls.buyTokens({ value: 10 })
      await pls.approve(lottery.address, amount)
      balanceOf = await pls.balanceOf(deployer)
      assert.equal(balanceOf.toString(), '1000')
      await lottery.buyTickets(10)
      balanceAfter = await lottery.balanceOf(deployer)
      assert.equal(balanceAfter.toString(), '10')
      balanceOf = await pls.balanceOf(deployer)
    })
  })

  describe('contract activity', function () {
    it("doesn't allow mint outside claim period", async function () {
      await expect(lottery.buyTickets(10)).to.be.reverted
    })

    it('flips state', async function () {
      assert(!(await lottery.entryActive()))
      await lottery.changeEntryStatus()
      assert(await lottery.entryActive())
    })
  })
})
