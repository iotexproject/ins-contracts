import { ethers } from 'hardhat'
import { namehash } from 'ethers/lib/utils'

import { INSRegistry, PublicResolver, NameWrapper } from "../typechain"

async function main() {
    const registry = (await ethers.getContract("INSRegistry")) as INSRegistry
    const nameWrapper = (await ethers.getContract("NameWrapper")) as NameWrapper

    const label = 'hello'
    const name = label + '.io'
    const node = namehash(name)

    const nameOwner = await nameWrapper.ownerOf(node)
    console.log(`${name} owner is ${nameOwner}`)

    let resolverAddr = await registry.resolver(node)
    let resolverFactory = await ethers.getContractFactory("PublicResolver")
    let resolver = resolverFactory.attach(resolverAddr) as PublicResolver

    const owner = await resolver['addr(bytes32)'](node)
    console.log(`${name} resolved address is ${owner}`)

    const reverseNode = namehash(owner.toLowerCase().substring(2) + ".addr.reverse")
    resolverAddr = await registry.resolver(reverseNode)
    resolverFactory = await ethers.getContractFactory("PublicResolver")
    resolver = resolverFactory.attach(resolverAddr) as PublicResolver
    
    const reverseName = await resolver.name(reverseNode)
    console.log(`${owner} reverse name is ${reverseName}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
