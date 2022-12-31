const fs = require('fs')
function CreateIndex(html){
  var elem = document.getElementById("textinput")
  var div = document.getElementsByClassName('consolebody'),
  p = document.createElement("p");
  p.innerHTML = html;  
  div[0].insertBefore(p, elem);
  document.getElementById("textinput").value = "";
  elem.scrollIntoView(true)
}
function RemoveAndCreateIndex(html){
  var elem = document.getElementById("textinput")
  var div = document.getElementsByClassName('consolebody')
  p = document.createElement("p");
  p.innerHTML = html;  
  div[0].innerHTML = `
  ${html} \n
  <input type="text" id = "textinput" style="margin-left: 20px;" onkeydown = "checkInput()"></input>`
  elem.scrollIntoView(true)
}
function type1(str) {
  console.log(__dirname)
  if(!fs.readFileSync(`${__dirname}/LocalTemp.txt`).toString()) {
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, '1\n')
  var elem = document.getElementById("textinput")
  var html = `<a style="color: #de0000;text-decoration: none;">`+ `> Вы выбрали опцию под номером 1 - Вечная Печать</a>`
  RemoveAndCreateIndex(html)
  var html = `<a style="color: #b200de;text-decoration: none;">`+ `> Введите токен:</a>`
  CreateIndex(html)
  return
} else {
  var data = fs.readFileSync(`${__dirname}/LocalTemp.txt`).toString().split('\n')
  if(!data[1]) {
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, `${str} \n`)
    var html = `<a style="color: #b200de;text-decoration: none;">`+ `> Введите канал</a>`
    CreateIndex(html)
  }
  else if(!data[2] && data[1]) {
    console.log(2)
    var htmll = `<a style="color: #de0000;text-decoration: none;">`+ `> Запускаем вечную печать. . . Напишите 0 для выхода!</a>`
    CreateIndex(htmll)
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, `${str} \n`)
    console.log(1)
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, 'StartTyping')
  }
}}

function type2(str) {
  if(!fs.readFileSync(`${__dirname}/LocalTemp.txt`).toString()) {
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, '2\n')
  var elem = document.getElementById("textinput")
  var html = `<a style="color: #de0000;text-decoration: none;">`+ `> Вы выбрали опцию под номером 2 - Отправка сообщений в канал</a>`
  RemoveAndCreateIndex(html)
  var html = `<a style="color: #b200de;text-decoration: none;">`+ `> Введите токен:</a>`
  CreateIndex(html)
  return
} else {
  var data = fs.readFileSync(`${__dirname}/LocalTemp.txt`).toString().split('\n')
  if(!data[1]) {
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, `${str} \n`)
    var html = `<a style="color: #b200de;text-decoration: none;">`+ `> Введите ID канала:</a>`
    CreateIndex(html)
  }
  else if(!data[2]) {
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, `${str} \n`)
    var html = `<a style="color: #b200de;text-decoration: none;">`+ `> Введите задержку:</a>`
    CreateIndex(html)
  }
  else if(!data[3] && data[0]) {
    var htmll = `<a style="color: #de0000;text-decoration: none;">`+ `> Запускаем спам. . . Напишите 0 для выхода!</a>`
    CreateIndex(htmll)
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, `${str} \n`)
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, 'StartCSpam')
  }
}}

function type3(str) {
  if(!fs.readFileSync(`${__dirname}/LocalTemp.txt`).toString()) {
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, '3\n')
  var elem = document.getElementById("textinput")
  var html = `<a style="color: #de0000;text-decoration: none;">`+ `> Вы выбрали опцию под номером 3 - Отправка сообщений в ЛС</a>`
  RemoveAndCreateIndex(html)
  var html = `<a style="color: #b200de;text-decoration: none;">`+ `> Введите токен:</a>`
  CreateIndex(html)
  return
} else {
  var data = fs.readFileSync(`${__dirname}/LocalTemp.txt`).toString().split('\n')
  if(!data[1]) {
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, `${str} \n`)
    var html = `<a style="color: #b200de;text-decoration: none;">`+ `> Введите ID пользователя:</a>`
    CreateIndex(html)
  }
  else if(!data[2]) {
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, `${str} \n`)
    var html = `<a style="color: #b200de;text-decoration: none;">`+ `> Введите задержку:</a>`
    CreateIndex(html)
  }
  else if(!data[3] && data[0]) {
    var htmll = `<a style="color: #de0000;text-decoration: none;">`+ `> Запускаем спам. . . Напишите 0 для выхода!</a>`
    CreateIndex(htmll)
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, `${str} \n`)
    fs.appendFileSync(`${__dirname}/LocalTemp.txt`, 'StartDMSpam')
  }
}}

function checkInput() {
  var event = window.event || event.which;
  if (event.keyCode == 13) {
    var str = document.getElementById("textinput").value;
    var html = `<a style="color: ;text-decoration: none;">`+ `> ` + str +`</a>`
    CreateIndex(html.toString())
    var data = fs.readFileSync(`${__dirname}/LocalTemp.txt`).toString().split('\n')
    console.log(str)
    if(data[4] == 'StartCSpam' && str == '0') {
       fs.truncateSync(`${__dirname}/LocalTemp.txt`)
       fs.writeFileSync(`${__dirname}/LocalTemp.txt`, '')
       window.location.reload();
      }
      if(data[4] == 'StartDMSpam' && str == '0') {
        fs.truncateSync(`${__dirname}/LocalTemp.txt`)
        fs.writeFileSync(`${__dirname}/LocalTemp.txt`, '')
        window.location.reload();
       }
    if(data[3] == 'StartTyping' && str == '0') {
        fs.truncateSync(`${__dirname}/LocalTemp.txt`)
        fs.writeFileSync(`${__dirname}/LocalTemp.txt`, '')
        window.location.reload();
      }
    else if(str == 1 || data[0] == 1){type1(str)}
    else if(str == 2 || data[0] == 2){type2(str)}
    else if(str == 3 || data[0] == 3){type3(str)}
    else if(str != 1 && str != 2 && str != 3 && str != 4 && str != 5 && str != 6 && str != 7 && str != 8 && str != 9){
      var html = `<a style="color: #de0000;text-decoration: none;">`+ `> ` + `"`+ str + `" `+ "не является внутренней или внешней командой." + `</a>`
      CreateIndex(html)
    }
}}
checkInput()
    
