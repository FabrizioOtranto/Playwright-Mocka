const { chromium } = require('playwright');
const RegisterPage = require("../pages/register.page")
const {ClassicRunner, Eyes, Target, RectangleSize} = require("@applitools/eyes-playwright")
const dataSet = require("../data/register.json")


describe('Commerce demo page', () => {
    
    let browser = null;
    let context = null;
    let page = null;
    let registerPage  = null;
    const eyes = new Eyes(new ClassicRunner())
    var picture1 = false
    var picture2 = false
    var i = 0


    before( async ()=>{
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        registerPage = new RegisterPage(page);
        await eyes.open(page, "Playwright Ecomerce", "Playwright Register", new RectangleSize(1530,730))
    });

    beforeEach( async () =>{
        await registerPage.navigate()
        
    })

    afterEach( async () =>{
        await page.click(".ico-logout")
        
    })

    after( async ()=>{
        // closing browser
        await eyes.close()
        await context.close();
        await browser.close();
       
    });
    

    dataSet.forEach(data =>{
    it('Should be able to register', async() => {
        var randomNumber = Math.floor(Math.random()*10000)
        var email = data.email + randomNumber + "@gmail.com"
        var chance = Math.random()
        
        await registerPage.selectGender(data.gender)
        await registerPage.setFirstname(data.firstname)
        await registerPage.setLastname(data.lastname)
        await registerPage.selecteBirthDay(data.birthDay)
        await registerPage.selecteBirthMonth(data.birthMonth)
        await registerPage.selecteBirthYear(data.birthYear)
        await registerPage.setEmail(email)
        await registerPage.setPassword(data.password)
        await registerPage.setConfirmPassword(data.password)
       if((chance <= 0.33 && !picture1) || (!picture1 && i == dataSet.length -1)){
        
        await eyes.check(Target.window().fully())
            picture1 = true
        }
        await registerPage.clickRegisterBtn()

        if((chance <= 0.33 && !picture2) || (!picture2 && i == dataSet.length -1)){
            await eyes.check(Target.window().fully())
            picture2 = true
        }
        i++
        
    })
    })
})