const BasePage = require("./base.page")

class HomePage extends BasePage{
    constructor(page){
        super(page)
        
        this.whishlistBtn = ".ico-wishlist"
        this.shoppingcarLink = ".ico-cart"
        this.computersLink = "a[href='/computers']"
        this.desktopsLink = "a[href='/desktops']"
        this.notebookLink = "a[href='/notebooks']"
        this.softwareLink = "a[href='/software']"
        this.electronicsLink = "a[href='/electronics']"
        this.camAndPhotoLink ="a[href='/camera-photo']"
        this.cellphonesLink ="a[href='/cell-phones']"
        this.othersLink ="a[href='/others']"
        this.apparelLink ="a[href='/apparel']"
        this.shoesLink ="a[href='/shoes']"
        this.clothingLink ="a[href='/clothing']"
        this.AccesoriesLink ="a[href='/accessories']"
        this.digitalDownloadsLink ="a[href='/digital-downloads']"
        this.booksLinkLink ="a[href='/books']"
        this.jewelryLink ="a[href='/jewelry']"
        this.giftCardsLink ="a[href='/gift-cards']"
    }

    async clickShopingCartLink(){
        await this.page.click(this.shoppingcarLink)
    }
    async clickComputersLink(){
        await this.page.click(this.computersLink)
    }

    async clickDesktopLink(){
        await this.page.hover(this.computersLink)
        await this.page.click(this.desktopsLink)
    }

    async clickNotebookLink(){
        await this.page.hover(this.computersLink)
        await this.page.click(this.notebookLink)
    }

    async clickSoftwareLink(){
        await this.page.hover(this.computersLink)
        await this.page.click(this.softwareLink)
    }

    async clickelectronicsLink(){
        await this.page.click(this.electronicsLink)
    }

    async clickCamAndPhotoLink(){
        await this.page.hover(this.electronicsLink)
        await this.page.click(this.camAndPhotoLink)
    }

    async clickCellPhonesLink(){
        await this.page.hover(this.electronicsLink)
        await this.page.click(this.cellphonesLink)
    }

    async clickOthersLink(){
        await this.page.hover(this.electronicsLink)
        await this.page.click(this.othersLink)
    }

    async clickApparelLink(){
        await this.page.click(this.apparelLink)
    }

    async clickShoesLink(){
        await this.page.hover(this.apparelLink)
        await this.page.click(this.shoesLink)
    }


    async clickClothingLink(){
        await this.page.hover(this.apparelLink)
        await this.page.click(this.clothingLink)
    }

    async clickAccesoriesLink(){
        await this.page.hover(this.apparelLink)
        await this.page.click(this.AccesoriesLink)
    }

    async clickBooksLink(){
        await this.page.click(this.booksLinkLink)
    }

    async clickDigitalDownloadsLink(){
        await this.page.click(this.digitalDownloadsLink)
    }

    async clickJewleryLink(){
        await this.page.click(this.jewelryLink)
    }

    async clickGiftCardsLink(){
        await this.page.click(this.giftCardsLink)
    }


    async navigate(){
        await super.navigate("/")
    }

    }
module.exports = HomePage;