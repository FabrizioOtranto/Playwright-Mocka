const { chromium } = require('playwright');
const BuildComputerPage = require("../pages/buildComputer.page")
const {ClassicRunner, Eyes, Target, RectangleSize} = require("@applitools/eyes-playwright")
const dataSet = require("../data/buildComputer.json");
const HomePage = require('../pages/home.page');
const chai = require ('chai')
const expect = chai.expect


describe('Commerce demo page', () => {
    let browser = null;
    let context = null;
    let page = null;
    let buildComputerPage  = null;
    let homePage  = null;
    const eyes = new Eyes(new ClassicRunner())
    var picture1 = false
    var picture2 = false
    var i = 0


    before( async ()=>{
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        buildComputerPage = new BuildComputerPage(page);
        homePage = new HomePage(page);
        await eyes.open(page, "Playwright Ecomerce", "Playwright BuildComputers", new RectangleSize(1530,730))
        
    });

    beforeEach( async () =>{
        await buildComputerPage.navigate()
    })

    after( async ()=>{
        // closing browser
        await eyes.close()
         await context.close();
         await browser.close();
    });
    
    it("Should be able to add to car a computer with first data", async () =>{
        
       await buildComputerPage.selectProcessor(dataSet[0].processor)
       await buildComputerPage.selectRam(dataSet[0].ram)
       await buildComputerPage.selectDisk(dataSet[0].disk)
       await buildComputerPage.selectOS(dataSet[0].OS)
    if(dataSet[0].options == true ){
       await buildComputerPage.selectMicrosft()
       await buildComputerPage.selectAcrobat()
       await buildComputerPage.selectTotalCommander()
    }
       await buildComputerPage.selectQuantity(dataSet[0].quantity)
       await page.waitForTimeout(6000)
       const text = await page.textContent("#price-value-1")
       expect(await text).to.be.equals('$1,365.00');
       await eyes.check(Target.window().fully())
       await buildComputerPage.clickAddTocar()
       await homePage.clickShopingCartLink()
      await eyes.check(Target.window().fully())
    })

    it("Should be able to add to car a computer with second data", async () =>{
        
        await buildComputerPage.selectProcessor(dataSet[1].processor)
        await buildComputerPage.selectRam(dataSet[1].ram)
        await buildComputerPage.selectDisk(dataSet[1].disk)
        await buildComputerPage.selectOS(dataSet[1].OS)
     if(dataSet[1].options == false ){
        await buildComputerPage.selectTotalCommander()
     }
        await buildComputerPage.selectQuantity(dataSet[1].quantity)

        await eyes.check(Target.window().fully())
        await buildComputerPage.clickAddTocar()
        await homePage.clickShopingCartLink()
        await eyes.check(Target.window().fully())
     })
})
    
