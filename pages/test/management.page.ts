class managementPage {
    private userInfoButton = () => $('//a[@class="gb_x gb_Ea gb_f"]');
    private nameOfUser = () => $('//div[@class="gb_gb"]');

    // ----- Steps -----

    clickUserInfoButton() {
        this.userInfoButton().waitForDisplayed();
        return this.userInfoButton().click();
    }

    getnameOfUser() {
        this.nameOfUser().waitForDisplayed();
        return this.nameOfUser().getText();
    }

  }
  
  export default new managementPage();