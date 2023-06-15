import { ethers } from 'hardhat'
import { namehash } from 'ethers/lib/utils'

import { NameWrapper, PublicResolver, ReverseRegistrar } from "../typechain"

async function main() {
    const nameWrapper = (await ethers.getContract("NameWrapper")) as NameWrapper
    const resolver = (await ethers.getContract("PublicResolver")) as PublicResolver
    const reverse = (await ethers.getContract("ReverseRegistrar")) as ReverseRegistrar

    const user = new ethers.Wallet(process.env.USER_KEY!, ethers.provider)
    const owner = user.address

    const label = 'hello'
    const name = label + '.io'
    const node = namehash(name)

    let tx = await nameWrapper.connect(user).setResolver(node, resolver.address)
    await tx.wait()

    tx = await resolver.connect(user)['setAddr(bytes32,address)'](node, owner)
    await tx.wait()

    tx = await reverse.connect(user).setNameForAddr(owner, owner, resolver.address, name)
    await tx.wait()

    console.log(`Successful set resolver to ${name}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
