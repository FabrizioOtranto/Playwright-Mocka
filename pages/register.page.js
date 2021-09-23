const BasePage = require("./base.page")

class RegisterPage extends BasePage{
    constructor(page){
        super(page)
       this.gender = "input[name='Gender']"
       this.firstanme = "#FirstName"
       this.lastname = "#LastName"
       this.birthDay = "select[name='DateOfBirthDay']"
       this.birthMonth = "select[name='DateOfBirthMonth']"
       this.birthYear = "select[name='DateOfBirthYear']"
       this.email = "#Email"
       this.password = "#Password"
       this.confirmPassword ="#ConfirmPassword"
       this.registerBtn = "#register-button"
    }

    async selectGender(gender){
        const genders = await this.page.$$(this.gender)
        await genders[gender].check()
    }

    async setFirstname(firstname){
        await this.page.fill(this.firstanme, firstname)
    }

    async setLastname(lastname){
        await this.page.fill(this.lastname, lastname)
    }

    async selecteBirthDay(day){
        const birthdays = await this.page.$(this.birthDay)
        await birthdays.selectOption({label: day})
    }

    async selecteBirthMonth(month){
        const birthmonths = await this.page.$(this.birthMonth)
        await birthmonths.selectOption({label: month})
    }

    async selecteBirthYear(year){
        const birthdays = await this.page.$(this.birthYear)
        await birthdays.selectOption({label: year})
    }

    async setEmail(email){
        await this.page.fill(this.email, email)
    }

    async setPassword(password){
        await this.page.fill(this.password, password)
    }

    
    async setConfirmPassword(password){
        await this.page.fill(this.confirmPassword, password)
    }

    async clickRegisterBtn(){
        await this.page.click(this.registerBtn)
    }


    async navigate(){
        await super.navigate("/register")
    }

    }
module.exports = RegisterPage;