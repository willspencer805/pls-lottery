const { ethers } = require("hardhat")

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId
  log("Local network detected. Deploying contracts...")

  const vrfCoordinatorV2 = "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D"
  const subscriptionId = 7702
  const gasLane =
    "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15"
  const callbackGasLimit = "1000000"

  await deploy("Raffle", {
    from: deployer,
    log: true,
    args: [vrfCoordinatorV2, subscriptionId, gasLane, callbackGasLimit],
  })
  log("VRF contract deployed!")
  log("---------------------------------------------------------")
}

module.exports.tags = ["raffle", "chainlink"]
