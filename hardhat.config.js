/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY, FUJI_API_URL } = process.env;
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "fuji",
  networks: {
    hardhat: {},
		fuji: {
			chainId: 43113,
			url: FUJI_API_URL,
			accounts: [`0x${PRIVATE_KEY}`],
			gasPrice: 25000000000
		}
 	},
};
