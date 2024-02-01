
import cmgHomePage from "../pageobjects/homePage.ts";
import doctorpage from "../pageobjects/doctorDetailsPage.ts";
import inputdata from "../data/input.json" assert {type:"json"}

describe('End to End test execution', () => {
    it('Selecting Doctor Peter Test', async () => {
        await browser.url(inputdata.url);
        await browser.maximizeWindow();
        await cmgHomePage.clickAcceptCookies();

        await cmgHomePage.setSearch();
        await cmgHomePage.selectDoctor(inputdata.selectdropdown);
        browser.pause(6000);
    });

   it('Validating doctor details', async () => {
        await doctorpage.validateDoctorName();
        await doctorpage.validateDoctorAddress();
        await doctorpage.currentDayOpeningHours();
        await doctorpage.currentDayBold();

        
    });

});