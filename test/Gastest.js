const { expect } = require("chai");

describe("Gastest", function () {
    let Gastest;
    
    before(async () => {
        const GastestFactory = await ethers.getContractFactory("Gastest");
        Gastest = await GastestFactory.deploy();
        await Gastest.deployed();
    });

    describe("f", async () => {
        it("Runs", async function () {
            await Gastest.f();
        });
    });

    describe("g", async () => {
        it("Runs", async function () {
            await Gastest.g();
        });
    });
});
