import { ethers } from 'hardhat'
import { keccak256 } from 'js-sha3'

import { IBaseRegistrar, NameWrapper, PublicResolver } from "../typechain"

async function main() {
    const nameWrapper = (await ethers.getContract("NameWrapper")) as NameWrapper
    const registrar = (await ethers.getContract("BaseRegistrarImplementation")) as IBaseRegistrar
    const resolver = (await ethers.getContract("PublicResolver")) as PublicResolver

    const user = new ethers.Wallet(process.env.USER_KEY!, ethers.provider)
    const recipient = new ethers.Wallet(process.env.RECIPIENT_KEY!, ethers.provider)

    const label = 'hello'
    const labelHash = '0x' + keccak256(label)
    const name = label + '.io'

    console.log(`owner: ${(await registrar.ownerOf(labelHash))}`)
    if (nameWrapper.address === (await registrar.ownerOf(labelHash))) {
        console.log(`Unwrap ${name} and transfer to ${recipient.address}`)
        const tx = await nameWrapper.connect(user).unwrapETH2LD(labelHash, recipient.address, recipient.address)
        await tx.wait()
    } else {
        console.log(`Transfer ${name} to ${recipient.address}`)
        const tx = await registrar.connect(user).transferFrom(user.address, recipient.address, labelHash)
        await tx.wait()
    }

    // wrap
    let tx = await registrar.connect(recipient).approve(nameWrapper.address, labelHash)
    await tx.wait()
    await nameWrapper.connect(recipient).wrapETH2LD(label, recipient.address, 0, resolver.address)

    console.log(`Successful transfer ${name} to ${recipient.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
