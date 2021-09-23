const { chromium } = require('playwright');
const LoginPage = require("../pages/login.page")
const {ClassicRunner, Eyes, Target, RectangleSize} = require("@applitools/eyes-playwright")
const dataSet = require("../data/login.json")


describe('Ecomerce Login Process test', () => {
    let browser = null;
    let context = null;
    let page = null;
    let loginPage  = null;
    const eyes = new Eyes(new ClassicRunner())
    var picture1 = false
    var picture2 = false
    var i = 0


    before( async ()=>{
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        await eyes.open(page, "Playwright Ecomerce", "Playwright login", new RectangleSize(1530,730))
    });

    beforeEach( async () =>{
        await loginPage.navigate()
    })

    after( async ()=>{
        // closing browser
        await eyes.close()
        await context.close();
        await browser.close();
    });
    

    dataSet.forEach(data =>{
    it('Should be able to login with valid credentials', async() => {
        var chance = Math.random()
        await loginPage.setEmail(data.email)
        await loginPage.setPassword(data.password)
        if((chance <= 0.33 && !picture1) || (!picture1 && i == dataSet.length -1)){
        
            await eyes.check("Before login valid credentials",Target.window().fully())
                picture1 = true
            }
        await loginPage.clickLoginBtn()

        if((chance <= 0.33 && !picture2) || (!picture2 && i == dataSet.length -1)){
            await eyes.check("after login valid credentials",Target.window().fully())
            picture2 = true
        }
        i++
        await page.click(".ico-logout")
    })
    })


    it("Should not be able to login with invalid Email", async () =>{
        await loginPage.setEmail("wrongEmail@gmail.com")
        await loginPage.setPassword(dataSet[0].password)
        await loginPage.clickLoginBtn()
        await eyes.check("invalid email",Target.window().fully())

    })

    it("Should not be able to login with invalid Password", async () =>{
        await loginPage.setEmail(dataSet[0].email)
        await loginPage.setPassword('worngPassword')
        await loginPage.clickLoginBtn()
        await eyes.check("invalid password",Target.window().fully())

    })


    it("Should be able to recover password valid credentials", async () =>{
        await loginPage.clickForgotPasswordBtn()
        await loginPage.setEmail(dataSet[0].email)
        await loginPage.clickRecoverBtn()
        await eyes.check("recover valid credentials",Target.window().fully())

    })

    it("Should not be able to recover password invalid credentials", async () =>{
        await loginPage.clickForgotPasswordBtn()
        await loginPage.setEmail("wrongEmail@gmail.com")
        await loginPage.clickRecoverBtn()
        await eyes.check("recover invalid credentials",Target.window().fully())

    })


})