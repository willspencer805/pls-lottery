# Practical Learning Series Lottery
**What:** a decentralized “lottery” where participants “buy” an entry ticket using PLS tokens

- This will be a multi-week session that walks through the end-to-end process
    - week 1: buying tokens with test ether
        - demonstrates the approval process
        - hands on experience with faucet
        - adding tokens to their wallet
    - week 2: exchanging their tokens for entry tickets and entering the lottery
        - demonstrates the approval process
        - demonstrates minting an NFT
    - week 3: the drawing
        - opportunity to explain oracles + the importance of them in blockchain applications

**How:** 

1. ERC20 contract
    1. participants can exchange test ether for tokens
2. ERC721 contract
    1. participants can exchange PLS tokens for entry tickets
        1. unlimited entries per wallet
    2. entry tickets are unique based on token id; token ids used to pick winning token
3. Lottery contract
    1. uses Chainlink VRF to pick random number and choose a winning ticket
    2. winner gets transferred the PLS tokens held by the contract
4. Front end
    1. enables users to purchase tokens
    2. enables users to swap tokens for entry tickets
    3. displays the winning token and user
