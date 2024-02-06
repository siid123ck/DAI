import { ethers, network } from "hardhat";
import { DeployFunction, DeployResult } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployPolicy: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const {deploy} = hre.deployments;
    const {deployer} = await hre.getNamedAccounts();
    const chainId = network.config.chainId;

    const weatherApi = await ethers.getContractAt("WeatherApiOracle", "0x5FbDB2315678afecb367f032d93F642f64180aa3");
    
    console.log(weatherApi.target)
    const policyApi:DeployResult = await deploy("PolicyContract", {
        from:deployer,
        log:true,
        args:[weatherApi.target],
        waitConfirmations:chainId == 31337 ? 1 : 5
    })


}

export default deployPolicy;
deployPolicy.tags = ["all", "weather_api"]