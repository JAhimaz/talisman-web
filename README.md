# 🧿 Talisman Web (NFT Favourites)

### Temporary Feature (DO NOT MERGE)

Features:

1. Favourite NFTs will appear on a new section at the very top
2. Allows access of NFTs from multiple accounts

![Final](https://i.gyazo.com/680884187902a8d74eb2389f083c172e.mp4)

Limitations/Errors:

1. Adding/removing account connected will cause the page to crash, needs to be looked into. Perhaps due to no case handling the wallet being disconnected from favourites.
2. Too many even listener calls (Due to each NFTFavourite.tsx having a listener)
   - Possible workaround? Listens only for that specific NFTid?

![Too Many Listeners](https://i.gyazo.com/974795203b5cd9189e85759960dab46c.png)

3. On connection of a new account, should possibly look into reloading the nftlist. (Could help resolve issue number 1)

### Process

1. Sketched out on Photoshop what the UI might look like / what I am trying to achieve
2. Read through the codebase, understanding the components.
3. Quick reading on localstorage
4. Planned on paper, the outline of what the components to be built (Props, functions, logic)  

![Paper Planning](https://i.gyazo.com/cda8be13cc9f415f3b7971377c9fb90c.jpg)  

5. Implemented the proposed components.  
6. Realised that this was only compatible per account. Adding 2 accounts would create 2 favourite lists. Checked back at the code to redo.
7. Rewrote the implementation to allow for multiple accounts.
8. Few bugs (Check Limitations/Errors)
9. Talk with the crew about my process
10. Edit this README.md for you to see!