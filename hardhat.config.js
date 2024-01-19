// hardhat.config.js
require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: { mnemonic: "toy churn tomorrow capable glue find wave little chase elevator fetch trash" },
    },
    bscMainnet: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: { mnemonic: "toy churn tomorrow capable glue find wave little chase elevator fetch trash" },
    },
  },
  solidity: "0.8.0",
};
