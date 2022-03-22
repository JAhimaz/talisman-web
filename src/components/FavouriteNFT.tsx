import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface FavouriteNFTProps {
    className?: string
    id: any
}

const FavouriteNFT = styled(({ className = '', id }: FavouriteNFTProps) => {

    const [favourited, setFavourited] = useState(
        checkNFTFavourited()
    )

    function checkNFTFavourited() {
        if(JSON.parse(localStorage.getItem('favourites'))?.includes(id)){
            return true;
        }else{
            return false;
        }
    }

    window.addEventListener('favourites', () => {
        setFavourited(checkNFTFavourited())
        console.log("Favourited")
    }, { once : true })


    function handleFavouriteLogic() {
        
        let tempArr : string[] = JSON.parse(localStorage.getItem('favourites'))
        
        if(!favourited){
            setFavourited(true)
            tempArr.push(id)
            localStorage.setItem("favourites", JSON.stringify(tempArr));
        } else {
            setFavourited(false)
            let removedArr = tempArr.filter(nftID => nftID !== id)
            localStorage.setItem("favourites", JSON.stringify(removedArr))
        }

        window.dispatchEvent(new Event('favourites'))
        // setFavourited(checkNFTFavourited())
    }

    return (
        <div className={className}>
            <a className="favourite-btn" onClick={handleFavouriteLogic}>
                {favourited ? ( 
                    "❤️"
                ) : (
                    "🖤"
                )}
            </a>
        </div>
    )

})`
    .favourite-btn {
        font-size: var(--font-size-xlarge);
    }

    .favourite-btn:hover {
        cursor: pointer;
        opacity: 30%;
    }
`

export default FavouriteNFT