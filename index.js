const {Builder, By, Key, until} = require ("selenium-webdriver");
const {Browser} = require ("selenium-webdriver");
var Assert = require ("assert");

async function lab(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://opensource-demo.orangehrmlive.com/");
    await driver.findElement(By.id("txtUsername")).sendKeys("Admin");
    await driver.findElement(By.id("txtPassword")).sendKeys("admin123");
    await driver.sleep(2000);
    await driver.findElement(By.id("btnLogin")).click();
    await driver.findElement(By.id("menu_admin_viewAdminModule")).click();
    await driver.findElement(By.id("menu_admin_UserManagement")).click();
    await driver.findElement(By.id("menu_admin_viewSystemUsers")).click();

    await driver.findElement(By.id("btnAdd")).click();
    await driver.findElement(By.name("systemUser[userType]")).click();
    await driver.findElement(By.xpath("//*[@id='systemUser_userType']/option[2]"));
    await driver.findElement(By.id("systemUser_employeeName_empName")).sendKeys(" ");
    await driver.sleep(500);
    await driver.findElement(By.id("systemUser_employeeName_empName")).sendKeys(Key.ENTER);
    await driver.findElement(By.id("systemUser_userName")).sendKeys("rkhhhhhd");
    await driver.findElement(By.id("systemUser_password")).sendKeys("123456780");
    await driver.findElement(By.id("systemUser_confirmPassword")).sendKeys("123456780");
    await driver.sleep(2000);
    await driver.findElement(By.id("btnSave")).click();  

    let n = await driver.findElements(By.xpath("//td[@class='left']/a[text()='rkhhhhhd']"));
    Assert.notEqual(0, n.length);
    await driver.findElement(By.id("searchSystemUser_userName")).sendKeys("rkhhhhhd");
    await driver.findElement(By.id("searchBtn")).click();
    
    await driver.sleep(1000);
    await driver.findElement(By.id("resetBtn")).click();

    const e = await driver.findElement(By.xpath("//td[@class='left']/a[text()='rkhhhhhd']"));
    const r = await e.findElement(By.xpath("./../.."));
    await r.findElement(By.xpath('td[1]/input')).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("btnDelete")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("dialogDeleteBtn")).click();
    let m = await driver.findElements(By.xpath("//td[@class='left']/a[text()='rkhhhhhd']"));
    Assert.equal(0, m.length);
    await driver.close(); 
}

lab();