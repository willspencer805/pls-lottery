// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "./LotteryToken.sol";

/**
 * @author Will
 * @notice This contract is for creating a decentralized raffle.
 */
contract Raffle is VRFConsumerBaseV2 {
    /* State Variables */
    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    bytes32 private immutable i_gasLane;
    uint64 private immutable i_subscriptionId;
    uint32 private immutable i_callbackGasLimit;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;

    LotteryToken lotteryInstance =
        LotteryToken(0x71893F19cd598653d042d4601c38e01Cc968a4DB);

    event WinnerPicked(address indexed winner);

    /* Lottery Variables */
    uint256[] public s_randomWords;
    uint256 public s_requestId;

    constructor(
        address vrfCoordinatorV2, // contract address
        uint64 subscriptionId,
        bytes32 gasLane, // keyHash
        uint32 callbackGasLimit
    ) VRFConsumerBaseV2(vrfCoordinatorV2) {
        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        i_gasLane = gasLane;
        i_subscriptionId = subscriptionId;
        i_callbackGasLimit = callbackGasLimit;
    }

    function requestRandomWords() external {
        // Will revert if subscription is not set and funded.
        s_requestId = i_vrfCoordinator.requestRandomWords(
            i_gasLane,
            i_subscriptionId,
            REQUEST_CONFIRMATIONS,
            i_callbackGasLimit,
            NUM_WORDS
        );
    }

    function fulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory randomWords
    ) internal override {
        uint256 numEntrants = lotteryInstance.totalSupply();
        uint256 winningId = randomWords[0] % numEntrants;
        address winner = lotteryInstance.ownerOf(winningId);
        emit WinnerPicked(winner);
    }
}
