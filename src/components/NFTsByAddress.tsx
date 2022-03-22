import { NftCard, useNftsByAddress } from '@talisman-components/nft'
import { device } from '@util/breakpoints'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import FavouriteNFT from './FavouriteNFT'


import MaterialLoader from './MaterialLoader'

const Loading = styled(MaterialLoader)`
  font-size: 6.4rem;
  margin: 4rem auto;
  color: var(--color-primary);
  user-select: none;
`

interface NFTsByAddressProps {
  className?: string
  address: string
  limit?: number
}

const NFTsByAddress = styled(({ className = '', address, limit }: NFTsByAddressProps) => {
  const { nfts, isLoading } = useNftsByAddress(address as string)



  if (isLoading) {
    return <Loading />
  }
  if (!nfts) {
    return null
  }
  const pickedNfts = limit ? nfts?.slice(0, limit) : nfts
  return pickedNfts?.map((nft: any) => {
    return (
      <div key={nft.id} className={className}>
        <FavouriteNFT id={nft.id}/>
        <NftCard nft={nft} />
      </div>
    )
  })
})`
  svg {
    width: 4.8rem;
    height: 4rem;
  }

  @media ${device.lg} {
    svg {
      width: 4.5rem;
      height: 4rem;
    }
  }
`

export default NFTsByAddress
