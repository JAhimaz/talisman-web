# 🧿 Talisman Web (NFT Favourites)

### About

Features:

1. Favourite NFTs will appear on a new section at the very top
2. Allows access of NFTs from multiple accounts

Limitations/Errors:

1. Adding/removing account connected will cause the page to crash, needs to be looked into. Perhaps due to no case handling the wallet being disconnected from favourites.
2. Too many even listener calls (Due to each NFTFavourite.tsx having a listener)
   - Possible workaround? Listens only for that specific NFTid?
3. On connection of a new account, should possibly look into reloading the nftlist. (Could help resolve issue #1)