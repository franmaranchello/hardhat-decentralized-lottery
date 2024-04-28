import { network } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { networkConfig } from "../helper-hardhat-config";
import "dotenv/config";
import { verify } from "../utils/verify";

module.exports = async (hre: HardhatRuntimeEnvironment) => {
  const { deploy, log } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();
  const chainId = network.config.chainId!;

  const raffleContract = await deploy("Raffle", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: 6,
  });
};
