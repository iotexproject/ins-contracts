import { ethers } from 'hardhat'
import { namehash } from 'ethers/lib/utils'
import { keccak256 } from 'js-sha3'

import { IOTXRegistrarController, PublicResolver } from "../typechain"

const DAY = 24 * 60 * 60
const REGISTRATION_TIME = 365 * DAY

async function main() {
    const controller = (await ethers.getContract("IOTXRegistrarController")) as IOTXRegistrarController

    let price = await controller.rentPrice("123", REGISTRATION_TIME)
    console.log(`three characters price: ${price.base.toString()}`)
    price = await controller.rentPrice("1234", REGISTRATION_TIME)
    console.log(`four characters price: ${price.base.toString()}`)
    price = await controller.rentPrice("12345", REGISTRATION_TIME)
    console.log(`five characters price: ${price.base.toString()}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
