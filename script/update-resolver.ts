import { ethers } from 'hardhat'

import { ReverseRegistrar, PublicResolver } from "../typechain"
import { namehash } from 'ethers/lib/utils'

async function main() {
    const recipient = new ethers.Wallet(process.env.RECIPIENT_KEY!, ethers.provider)

    const resolver = (await ethers.getContract("PublicResolver")) as PublicResolver
    const reverseRegistrar = (await ethers.getContract("ReverseRegistrar")) as ReverseRegistrar

    const label = 'hello'
    const name = label + '.io'
    const node = namehash(name)
    let tx = await resolver.connect(recipient)['setAddr(bytes32,address)'](node, recipient.address)
    await tx.wait()

    tx = await reverseRegistrar.connect(recipient)
        .setNameForAddr(recipient.address, recipient.address, resolver.address, name)
    await tx.wait()
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
