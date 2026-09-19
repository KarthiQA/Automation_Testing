const { test, expect } = require('@playwright/test')

test('Browser launch', async ({ page }) => {
    // broser launch
    await page.goto('https://www.demoblaze.com/index.html');
    /*// sign up click
    await page.locator("//a[text()='Sign up']").click();
    // enter username
    await page.locator('#sign-username').fill('KarthiT25')
    // enter password
    await page.locator("//input[@id='sign-password']").fill('Login2595')
    // register sign up
    await page.locator("//button[text()='Sign up']").click();*/
    // login check 
    await page.locator('#login2').click();
    // enter login username
    await page.locator("//input[@id='loginusername']").fill('KarthiT25')
    // enter login password
    await page.locator("//input[@id='loginpassword']").fill('Login2595')
    // click login
    await page.locator("//button[text()='Log in']").click();
    // wait time
    await page.waitForTimeout(3000);
    // close browser
    await page.close();
})

// Global scope
let b = "Karthi"
function name() {
    console.log(b); // - global scope
}
name()
console.log(b); // - global scope

//---------------
// Function scope

function emp() {
    let s = 10
    console.log(s);
}
emp()
// console.log(s); // - ReferenceError: s is not defined

// Block scope
if (true) {
    let num = 1234
    console.log(num);   
}
// console.log(num); // - ReferenceError: num is not defined

// Local scope
function email() {
    let emailid = "karthiknjithu@gmail.com"
    console.log(emailid);   
}
email()