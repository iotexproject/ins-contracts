import * as dotenv from "dotenv"
import type { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-deploy"

dotenv.config()

let real_accounts = undefined
if (process.env.DEPLOYER_KEY) {
    real_accounts = [process.env.DEPLOYER_KEY, process.env.OWNER_KEY || process.env.DEPLOYER_KEY]
}

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.17",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1300,
                    },
                },
            },
        ],
    },
    paths: {
        sources: "./src", // Use ./src rather than ./contracts as Hardhat expects
        cache: "./cache_hardhat", // Use a different cache for Hardhat than Foundry
    },
    networks: {
        hardhat: {
            saveDeployments: false,
            tags: ['test', 'use_root'],
        },
        mainnet: {
            url: "https://babel-api.mainnet.iotex.io",
            tags: ['use_root'],
            chainId: 4689,
            accounts: real_accounts,
        },
        testnet: {
            url: "https://babel-api.testnet.iotex.io",
            tags: ['use_root'],
            chainId: 4690,
            accounts: real_accounts,
        },
        dev: {
            url: "http://127.0.0.1:8545",
            tags: ['use_root'],
            chainId: 8888,
            accounts: real_accounts,
        }
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        owner: {
            default: 0,
        },
    },
    mocha: {
        timeout: 200000, // 200 seconds max for running tests
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v5",
    },
}

export default config
