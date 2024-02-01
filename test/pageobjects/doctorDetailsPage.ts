
import {interFunction} from "../Interface/InterFunction.ts";


class doctordetails implements interFunction{
    get doctorName(){ return $('//a[contains(text()," Testpraxis - Neuwied ")]');    };

    get doctorAddress() { return $('//a[@data-web-test="address-link"]') };

    get currentDayMOrningST() { return $('//*[contains(@class,"current-date")]//div/div[1]/div[1]') };
    get currentDayMOrningET() { return $('//*[contains(@class,"current-date")]//div/div[1]/div[3]')};
    get currentDayAnoonST()   { return $('//*[contains(@class,"current-date")]//div[2]/div[1]')};
    get currentDayAnoonET()   { return $('//*[contains(@class,"current-date")]//div[2]/div[3]')};

    get currentdate() { return $('//*[contains(@class,"current-date")]')};

    public async validateDoctorName(){
       // browser.url('https://demo.clickdoc.de/cd-de/arzt/Neuwied/-/Dr-Peter-Test/0bd0d513-cc57-4c67-b082-d973a27a1ed4');
        (await this.doctorName).waitForClickable({timeout:12000});
        await expect(this.doctorName).toHaveAttribute('href', expect.stringContaining('Neuwied')); }
        
    public async validateDoctorAddress(){
        await expect(this.doctorAddress).toHaveAttribute('href', expect.stringContaining('Blücherstraße')); }

    
    public async currentDayOpeningHours(): Promise<void> {
        await expect(this.currentDayMOrningST).toHaveText('09:00 Uhr');
        await expect(this.currentDayMOrningET).toHaveText('12:00 Uhr');        
        await expect(this.currentDayAnoonST).toHaveText('14:00 Uhr');       
        await expect(this.currentDayAnoonET).toHaveText('18:00 Uhr');
    }
        
    public async currentDayBold(){
        
        const fontWeight= await this.currentdate.getCSSProperty('font-weight');
        console.log('Font weight of element is:', fontWeight);
        const bold=fontWeight.parsed.value;
        if(bold==700){
            console.log('Current date is bold');            
        }
        else
        { console.log("Current date is not bold but Black (Heavy)")};

    }     
       

        
        

}

export default new doctordetails();