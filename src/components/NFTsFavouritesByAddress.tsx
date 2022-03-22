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

interface NFTsFavouritesByAddressProps {
  className?: string
  address: string
  limit?: number
}

const NFTsFavouritesByAddress = styled(({ className = '', addresses, limit }: NFTsFavouritesByAddressProps) => {
  const nfts = getAllNFTs()
  
  function getAllNFTs(){
    let tempArray = []
    addresses.forEach(address => {
      let nftList = useNftsByAddress(address.address as string).nfts
      nftList?.forEach(item => {
        tempArray.push(item)
      })
    });

    return tempArray;
  }
  
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  window.addEventListener('favourites', () => {
    setFavourites(JSON.parse(localStorage.getItem("favourites")))
    console.log("NFT Favourites Called")
    // setFavourites(JSON.parse(localStorage.getItem("favourites")))
  }, { once: true })


  // if (isLoading) {
  //   return <Loading />
  // }
  if (!nfts) {
    return (null)
  }
  
  const pickedNfts = limit ? nfts?.slice(0, limit) : nfts
  const filteredNfts = pickedNfts.filter( nft => favourites.includes(nft.id) )

  if(favourites.length == 0){
    return (
      <a>🥺 No favourite NFTs at the moment</a>
    )
  }

  return filteredNfts?.map((nft: any) => {
    return (
      <div key={nft.id} className={className}>
        <div className='favourite-card'>
          <FavouriteNFT id={nft.id}/>
          <NftCard nft={nft} />
        </div>
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

  .favourite-card {
    animation-duration: 0.8s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      opacity: 0%
    }
  
    to {
      opacity: 100%;
    }
  }

`

export default NFTsFavouritesByAddress
