exports.Login = class Login{

constructor(page){
this.page = page;
this.username = "//input[@placeholder='Username']";
this.password = "//input[@placeholder='Password']";
this.loginButton = "//button[@type='submit']";

}

async GotoLoginPage(){

    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
}

async LoginData(username, password){

    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginButton).click();
}

}