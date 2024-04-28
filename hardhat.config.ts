import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL || "https://eth-sepolia-sample";
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY || "0xkey";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key";
const REPORT_GAS = process.env.REPORT_GAS || false;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
      allowUnlimitedContractSize: true,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
  },

  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },

  gasReporter: {
    enabled: false,
    outputFile: "./artifacts/build-info/gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "ETH",
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
};

export default config;
