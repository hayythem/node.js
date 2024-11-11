const generatePwd = require("generate-password");

const pwd = generatePwd.generate({
    length: 10,
    numbers: true,
    lowercase: true
});
console.log(pwd);