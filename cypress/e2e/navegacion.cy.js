describe('Navegacion',()=>{
    it('ir a platzi',()=>{
        cy.visit('https://platzi.com/')
    })
    it('recargar',()=>{
        cy.reload()
    })
    it('forzar la recarga',()=>{
        cy.visit('https://platzi.com/')
        cy.reload(true)
    })
    it('regresar a la pagina anterior',()=>{
        cy.visit('https://google.com/')
        cy.visit('https://www.google.com/search?q=platzi&sca_esv=597300995&sxsrf=ACQVn09CvdWfAAzP1Hlwt6HiYUnqOBuxiA%3A1704917462503&source=hp&ei=1vmeZeabF6zIkPIPzs-wmAI&iflsig=ANes7DEAAAAAZZ8H5k-25PvJYcKmUATVFtqe9WsYOj8U&ved=0ahUKEwjm3t290NODAxUsJEQIHc4nDCMQ4dUDCAo&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyChAjGIAEGIoFGCcyERAuGIAEGLEDGIMBGMcBGNEDMgoQABiABBgUGIcCMgUQABiABDIFEAAYgAQyChAAGIAEGBQYhwIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESMIJUABY6wZwAHgAkAEAmAGnAaABhAeqAQMwLja4AQPIAQD4AQHCAgsQABiABBixAxiDAcICCxAuGIAEGMcBGNEDwgIEECMYJ8ICCBAAGIAEGLEDwgIWEC4YgAQYFBiHAhixAxiDARjHARivAcICChAuGIAEGIoFGCfCAgwQIxiABBiKBRgTGCfCAhEQLhiDARivARjHARixAxiABMICCBAuGIAEGLED&sclient=gws-wiz')
        cy.go('back')
    })
})