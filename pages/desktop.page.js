const BasePage = require("./base.page")

class DesktopPage extends BasePage{
    constructor(page){
        super(page)
        
        this.buildComputerLink = "a[href='/build-your-own-computer']"
    }

    async clickBuildComputerLink(){
        await this.page.click(this.buildComputerLink)
    }


    async navigate(){
        await super.navigate("/desktops")
    }

    }
module.exports = DesktopPage;