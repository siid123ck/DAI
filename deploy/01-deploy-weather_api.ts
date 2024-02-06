import { network } from "hardhat";
import { DeployFunction, DeployResult } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployWeatherApi: DeployFunction =async (hre:HardhatRuntimeEnvironment) => {
    const {deploy} = hre.deployments;
    const {deployer} = await hre.getNamedAccounts();
    const chainId = network.config.chainId;
    
    const weatherApi:DeployResult = await deploy("WeatherApiOracle", {
        from:deployer,
        log:true,
        args:[],
        waitConfirmations:chainId == 31337 ? 1 : 5
    })
}

export default deployWeatherApi;
deployWeatherApi.tags = ["all", "weather_api"]