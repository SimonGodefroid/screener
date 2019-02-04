### BASIC SETUP

0. Run  ```npm i```
1. Create a .env file at the root of your project
2. Define the following variables:
  - `NAME` which is your username
  - `PW` which is your password

3. Update the Feature Name, Login URL and Feature URL in `index.js`
4. Make sure your change the selectors of the login fields and login button in the code below:
  ```js
    await page.type('#auth-username', username);
    await page.type('#auth-password', pw);
    await page.click(
      'body > main > div > div > div > div:nth-child(1) > form > button'
    );
  ```
5. Once you're done with this, just run ```node index.js``` in the projet folder files will be created in `./screens`

**NB:** You can change the settings `headless: false` and `slowMo: 200` to either prevent the browser window to open or speed-up its execution.
