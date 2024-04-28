export interface networkConfigItem {
  name: string;
  ethUsdPriceFeed?: string;
  blockConfirmations?: number;
  isLocalDev: boolean;
  vrfCoordinator?: string;
}

export interface networkConfigInfo {
  [key: number]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  1: {
    name: "ethereum",
    ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    blockConfirmations: 6,
    isLocalDev: false,
  },
  11155111: {
    name: "sepolia",
    ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    blockConfirmations: 6,
    isLocalDev: false,
    vrfCoordinator: "0x8103b0a8a00be2ddc778e6e7eaa21791cd364625",
  },
  137: {
    name: "polygon",
    ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
    blockConfirmations: 6,
    isLocalDev: false,
  },
  31337: {
    name: "hardhat",
    ethUsdPriceFeed: "",
    blockConfirmations: 0,
    isLocalDev: true,
  },
};

export const DECIMALS = 8;
export const INITIAL_ANSWER = 200000000000;
