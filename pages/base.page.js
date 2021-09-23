class BasePage{
    constructor(page){
        this.page = page
    }

    async navigate(path){
        await this.page.goto(`https://demo.nopcommerce.com${path}`)
    }
}

module.exports = BasePage;