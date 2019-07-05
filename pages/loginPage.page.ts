class LoginPage {
  private emailGmail = () => $('//input[@id="identifierId"]');
  private password = () => $('//input[@name="password"]');
  private buttonNextLogin = () => $('//div[@id="identifierNext"]');
  private buttonNextPassword = () => $('//div[@id="passwordNext"]');


  // ----- Steps -----

  public openBetaUrl() {
      const conf = require('config/Configuration.json');
      const path = conf.betaUrl.url;
      browser.url(path);
      browser.maximizeWindow();
    }


  setCasparId(login:string) {
      this.emailGmail().waitForDisplayed();
      return this.emailGmail().setValue(login);
  }

  setPassword(password:string) {
      this.password().waitForDisplayed();
      return this.password().setValue(password);
  }

  clickNextLogin() {
      this.buttonNextLogin().waitForDisplayed();
      return this.buttonNextLogin().click();
    }

  clickNextPassword() {
      this.buttonNextPassword().waitForDisplayed();
      return this.buttonNextPassword().click();
    }
}

export default new LoginPage();