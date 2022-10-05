const {
  developmentChains,
  networkConfig,
} = require("../helper-hardhat-config");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  log("Deploying contracts...");
  const tokenName = networkConfig[chainId]["tokenName"];
  const tokenSymbol = networkConfig[chainId]["tokenSymbol"];

  await deploy("PLS", {
    from: deployer,
    log: true,
    args: [tokenName, tokenSymbol],
  });
  log("PLS contract deployed!");
  log("---------------------------------------------------------");
};

module.exports.tags = ["all", "pls"];
