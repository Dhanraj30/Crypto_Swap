require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc-mumbai.maticvigil.com"//"https://rpc.ankr.com/polygon_mumbai/53137a1c3749b5c56dae35b3100f8e0d3fc7cee12c5b45410de72436b3ad45f7"//"https://rpc.ankr.com/polygon_mumbai";
const NEXT_PUBLIC_PRIVATE_KEY = "c7cb73b8721dca345910b6c65f09db72aac755114afa54f02bca03fedfc0ac66";
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
