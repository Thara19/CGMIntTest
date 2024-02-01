import inputdata from "../data/input.json" assert {type:"json"}


class CmgHomePage {

    get acceptAllCookies(){
        return $('//*[text()=" Alle akzeptieren "]');    }

    get searchInputField(){
        return $('//*[contains(@class,"input__element--first")]');   }
   

    public async clickAcceptCookies(){
        (await this.acceptAllCookies).click();
    }

   public async setSearch () {
      (await this.searchInputField).setValue(inputdata.searchdoctor);
    }

    async selectDoctor(SelectName:String){
        const doctor=$(`//span[contains(text(),'${SelectName}')]`)
        doctor.click();
  


    }

   

}

export default new CmgHomePage();