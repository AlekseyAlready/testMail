import { expect } from 'chai';

import loginPage from 'pages/loginPage.page';
import managementPage from 'pages/test/management.page';


const login = 'testeruserovichformysite@gmail.com';
const password = 'MMM239239';


describe('Check that user can login on system with valid credentials', () => {
    before('Open login page with valid credentials', () => {
        loginPage.openBetaUrl();
        loginPage.setCasparId(login);
        loginPage.clickNextLogin();
        loginPage.setPassword(password);
        loginPage.clickNextPassword();
    });
  
    it('Check that page opens for certain user correct', () => {
        managementPage.clickUserInfoButton();

        expect(managementPage.getnameOfUser()).to.be.equal(login)
      });
});
