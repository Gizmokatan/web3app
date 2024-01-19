// Web3Connector.js
import { ethers } from "ethers";
import SimpleStorageABI from "./SimpleStorage.json";

const connectWeb3 = async () => {
  if (window.ethereum) {
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contractAddress = "0xYourContractAddress"; // Deploy your contract on BSC testnet and get the address
    const simpleStorageContract = new ethers.Contract(
      contractAddress,
      SimpleStorageABI,
      signer
    );

    return { signer, simpleStorageContract };
  } else {
    console.error("Web3 not available");
    return null;
  }
};

export default connectWeb3;
