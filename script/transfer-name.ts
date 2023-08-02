import { ethers } from 'hardhat'
import { keccak256 } from 'js-sha3'

import { IBaseRegistrar, NameWrapper } from "../typechain"
import { namehash } from 'ethers/lib/utils'

async function main() {
    const nameWrapper = (await ethers.getContract("NameWrapper")) as NameWrapper
    const registrar = (await ethers.getContract("BaseRegistrarImplementation")) as IBaseRegistrar

    const user = new ethers.Wallet(process.env.USER_KEY!, ethers.provider)
    const recipient = process.env.RECIPIENT!

    const label = 'hello'
    const labelHash = '0x' + keccak256(label)
    const name = label + '.io'
    const node = namehash(name)

    console.log(`owner: ${(await registrar.ownerOf(labelHash))}`)
    if (nameWrapper.address !== (await registrar.ownerOf(labelHash))) {
        console.log(`${name} unwrap!!!`)
        return
    }
    console.log(`Transfer ${name} to ${recipient}...`)
    const tx = await nameWrapper.connect(user).safeTransferFrom(
        user.address,
        recipient,
        node,
        1,
        "0x"
    )
    await tx.wait()
    console.log(`Successful transfer ${name} to ${recipient}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
