const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PlotManager", function () {
  it("Should create a plot", async function () {
    const PlotManager = await ethers.getContractFactory("PlotManager");
    const plotManager = await PlotManager.deploy();
    await plotManager.deployed();

    await plotManager.createPlot({lat:1, lng:2}, 1, [9], [9]);
    const plot = await plotManager.getAllPlots();

    expect(plot[0].centroid).to.equal((1, 2));
  });
});
