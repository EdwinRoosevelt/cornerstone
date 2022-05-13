require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
      account: [
        0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80,
      ],
    },
    // mumbai_polygon: {
    //   url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    //   accounts: [`${process.env.META_ACC_KEY}`],
    // },
  },
};
