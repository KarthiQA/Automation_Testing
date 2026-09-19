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

//Employee details

var empId = 45
var empName = 'Karthi'
var empSalary = 52000

console.log(typeof empId,empId)
console.log(typeof empName,empName)
console.log(typeof empSalary,empSalary)

//Student Info 

let studentName = 'RAJ'
//let studentName = 'RAM'
let studentDept = 'BCA'
let studentMark = 78
studentMark = 86
console.log(studentName)
console.log(studentDept)
console.log(studentMark)

//Company details 

const companyName = 'Apple'
//const companyName = 'Apple'
const companyLocation = 'USA'
const companycode = 8822

console.log(companyName)
console.log(companyLocation)
console.log(companycode)

//User Profile 

const userName = 'Karthikeyan'
let age = 26
let city = 'Coimbatore'

age = 28
city = 'GOA'

console.log(userName)
console.log(age)
console.log(city)

//Boolean 

let isActive = true
let isLoggedIn = false
let isStudent = true

console.log(typeof isActive, isActive)
console.log(typeof isLoggedIn,isLoggedIn)
console.log(typeof isStudent, isStudent) 

//Array

let Student = ['Rajesh','KIM','ROSE']

console.log(Student)

//object

let o = {empId:123, empName:"Julie", empSalary: 52000}
console.log(o)
