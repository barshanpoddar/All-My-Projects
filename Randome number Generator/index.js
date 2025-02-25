const body = document.body
let generateBtn = body.getElementsByClassName('.generate-btn')
let miniNum = 1000;
let maxNum = 9999;

document.querySelector('.generate-btn').addEventListener('click', () => {
    let value = Math.ceil((Math.random(maxNum - miniNum) * 9000) + miniNum);
    document.querySelector('.placeholder-num').innerHTML = `${value}`
})