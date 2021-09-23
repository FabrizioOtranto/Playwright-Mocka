const BasePage = require("./base.page")

class LoginPage extends BasePage{
    constructor(page){
        super(page)
       this.email = "#Email"
       this.password = "#Password"
       this.loginBtn = ".login-button"
       this.forgotPasswordBtn = ".forgot-password"
       this.recoverBtn = ".password-recovery-button"
    }


    async setEmail(email){
        await this.page.fill(this.email, email)
    }

    async setPassword(password){
        await this.page.fill(this.password, password)
    }

    async clickLoginBtn(){
        await this.page.click(this.loginBtn)
    }

    async clickForgotPasswordBtn(){
        await this.page.click(this.forgotPasswordBtn)
    }

    async clickRecoverBtn(){
        await this.page.click(this.recoverBtn)
    }

    async navigate(){
        await super.navigate("/login")
    }

    }
module.exports = LoginPage;