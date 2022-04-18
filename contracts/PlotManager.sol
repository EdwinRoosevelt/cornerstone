//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PlotManager {
    address regulator;

    using Counters for Counters.Counter;
    Counters.Counter private _plotId;
    
    struct Coordinate {
        int256 lat;
        int256 lng;
    }

    struct Plot {
        uint id;
        uint createdTime;
        uint recentPurchaseTime;
        address owner;
        address[] previousOwners;
        Coordinate centroid;
        Coordinate[] corners;
    }

    Plot[] unconfirmedPlots;
    Plot[] allPlots;
    
    mapping(uint => Plot) idToPlot;
    mapping(address => Plot[]) addressToPlot;

    constructor() {
        regulator = msg.sender;
    }

    function createPlot(Coordinate memory _centroid, uint8 _cornerCount, int256[] memory _Lon, int256[] memory _Lng) public {
        _plotId.increment();
        Plot storage newPlot = idToPlot[_plotId.current()];
        newPlot.id = _plotId.current();
        newPlot.createdTime = block.timestamp;
        newPlot.recentPurchaseTime = block.timestamp;
        newPlot.owner = msg.sender;
        newPlot.centroid = _centroid;

        for (uint i = 0; i < _cornerCount; i++) {
            newPlot.corners.push(Coordinate(_Lon[i], _Lng[i]));
        }

        addressToPlot[msg.sender].push(newPlot);
        console.log("Plot Created");
    }

    function showPlotById(uint _id) public view returns(Plot memory) {
        return idToPlot[_id];
    }

    function showPlotByOwner(address owner) public view returns(Plot[] memory) {
        return addressToPlot[owner];
    }

    function getAllPlots() public view returns(Plot[] memory) {
        return allPlots;
    }











    


}