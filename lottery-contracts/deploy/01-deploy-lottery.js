const { ethers } = require('hardhat')
const { developmentChains, networkConfig } = require('../helper-hardhat-config')

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId
  log('Local network detected. Deploying contracts...')
  const tokenName = ''
  const tokenSymbol = ''
  const deployedAddress = await ethers.getContract('PLS')

  await deploy('LotteryToken', {
    from: deployer,
    log: true,
    args: [tokenName, tokenSymbol, deployedAddress.address],
  })
  log('Lottery token contract deployed!')
  log('---------------------------------------------------------')
}

module.exports.tags = ['all', 'lottery']
