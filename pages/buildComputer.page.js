const BasePage = require("./base.page")

class BuildComputerPage extends BasePage{
    constructor(page){
        super(page)
        
        this.processor = "#product_attribute_1"
        this.ram = "#product_attribute_2"
        this.disk = "input[name='product_attribute_3']"
        this.OS = "input[name='product_attribute_4']"
        this.microsoftOfice = "#product_attribute_5_10"
        this.accrobatReader = "#product_attribute_5_11"
        this.totalCommander = "#product_attribute_5_12"
        this.quantity = "#product_enteredQuantity_1"
        this.addToCar = "#add-to-cart-button-1"
    }

    async selectProcessor(procesor){
        var proceessors = await this.page.$(this.processor)

        await proceessors.selectOption({label:procesor})
    }

    async selectRam(ram){
        var rams = await this.page.$(this.ram)
        await rams.selectOption({label:ram})
    }

    async selectDisk(index){
        var disks = await this.page.$$(this.disk)
        await disks[index].check()
    }

    async selectOS(index){
        var OS = await this.page.$$(this.OS)
        await OS[index].check()
    }

    async selectOS(index){
        var OS = await this.page.$$(this.OS)
        await OS[index].check()
    }

    async selectMicrosft(){
        var microsoft = await this.page.$(this.microsoftOfice)
        await microsoft.uncheck()

    }

    async selectAcrobat(){
        var acrobatReader = await this.page.$(this.accrobatReader)
        await acrobatReader.check()

    }

    async selectTotalCommander(){
        var totalCommander = await this.page.$(this.totalCommander)
        await totalCommander.check()

    }

    async selectQuantity(quantity){
       await this.page.fill(this.quantity,quantity)
    }

    async clickAddTocar(){
        await this.page.click(this.addToCar)
    }

    async navigate(){
        await super.navigate("/build-your-own-computer")
    }

    }
module.exports = BuildComputerPage;