import { ethers } from 'hardhat'
import { namehash } from 'ethers/lib/utils'
import { keccak256 } from 'js-sha3'

import { IOTXRegistrarController, PublicResolver } from "../typechain"

const DAY = 24 * 60 * 60
const REGISTRATION_TIME = 365 * DAY

async function main() {
    const controller = (await ethers.getContract("IOTXRegistrarController")) as IOTXRegistrarController
    const resolver = (await ethers.getContract("PublicResolver")) as PublicResolver

    const user = new ethers.Wallet(process.env.USER_KEY!, ethers.provider)
    const owner = user.address

    const label = 'hello'
    const name = label + '.io'
    const node = namehash(name)
    const secret = '0x' + keccak256('secret')

    const commitment = await controller.makeCommitment(
        label,
        owner,
        REGISTRATION_TIME,
        secret,
        resolver.address,
        [
            resolver.interface.encodeFunctionData('setAddr(bytes32,address)', [
                node,
                owner,
            ]),
        ],
        true,
        0,
    )

    const price = await controller.rentPrice(label, REGISTRATION_TIME)

    console.log(`commit commitment: ${commitment} ...`)
    await controller.connect(user).commit(commitment)

    console.log(`sleep for activation commitment ...`)
    await new Promise(f => setTimeout(f, 60000))
    console.log(`register name: ${node} ...`)
    const tx = await controller.connect(user).register(
        label,
        owner,
        REGISTRATION_TIME,
        secret,
        resolver.address,
        [
            resolver.interface.encodeFunctionData('setAddr(bytes32,address)', [
                node,
                owner,
            ]),
        ],
        true,
        0, {
            value: price.base.add(price.premium)
        }
    )
    console.log(`completed name register with tx: ${tx.hash}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
