const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const MetaNFT = await hre.ethers.getContractFactory("MyNFT");
    const MyNFT = await MetaNFT.deploy();

    await MyNFT.deployed();
    console.log("nfts deployed to:", MyNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
