import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const AGGREGATOR = {
  "4689": "0x0F7AbD6b99d5D6876C812dAc22A2c8A8A6297D90",
  "4690": "0xf55dA02f8266eC89A58C6De361cf92ce9cee21fe",
  "31337": "0x0000000000000000000000000000000000000000"
}

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments, network } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const chainId = network.config.chainId!
  // @ts-ignore
  const oracleAddress: string = AGGREGATOR[String(chainId)]
  
  const aggregator = await deploy('AggregatorProxy', {
    from: deployer,
    args: [oracleAddress],
    log: true,
  })

  await deploy('StablePriceOracle', {
    from: deployer,
    args: [
      aggregator.address,
      [0, 0, '20294266869609', '5073566717402', '158548959919'],
    ],
    log: true,
  })
}

func.id = 'price-oracle'
func.tags = ['iotxregistrar', 'StablePriceOracle']
func.dependencies = ['registry']

export default func
