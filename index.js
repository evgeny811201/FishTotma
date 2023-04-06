//user info
let preferSex = [];
let personalLife = [];
let user = {
  personal:personalLife,
  ['like sex']:preferSex,
}

// Отправка данных в телеграм
let btn = document.getElementById("btn");
btn.addEventListener('click',function(){
  
  let fullUserInfo = `<b>У ее  ${user.personal}\n ей нравиться ${user['like sex']}</b>`;
  const TOKEN = "5322692197:AAE3JKp6YMhWfWUnEln2MzeKrBwdKAn6EDQ";
  const ID = '1795631212';
  const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
  
  axios.post(URL_API, {
    chat_id: ID,
    parse_mode: "html",
    text: fullUserInfo,
  });
  setTimeout(function(){
    window.location.href = 'result.html';
  }, 1000);
  // document.getElementById('btn').onclick = function() {
  //   window.location.href = 'result.html';
  // };
})


let goMan = document.getElementById("goMan");
goMan.addEventListener("change", () => {
  if (goMan.checked){
    personalLife.push("хочет уйти к другу");
    console.log(user.personal);
  } else{
    let value = personalLife.indexOf("хочет уйти к другу");
    personalLife.splice(value, 1);
    console.log(user.personal);
  }
});

// Есть друг мужчина?
let isMan = document.getElementById("isMan");
isMan.addEventListener("change", () => {
  if (isMan.checked){
    personalLife.push("любит друга");
    console.log(user.personal);
  } else{
    let value = personalLife.indexOf("любит друга");
    personalLife.splice(value, 1);
    console.log(user.personal)
  }
});

// любит мужа?
let isLove = document.getElementById("isLove");
isLove.addEventListener("change", () => {
  if (isLove.checked){
    personalLife.push("любит мужа");
    console.log(user.personal)
  } else{
    let value = personalLife.indexOf("любит мужа");
    personalLife.splice(value, 1);
    console.log(user.personal)
  }
});

// Есть муж
let isHusband = document.getElementById("isHusband");
isHusband.addEventListener("change", () => {
  if (isHusband.checked){
    personalLife.push("муж");
    console.log(user.personal)
  } else{
    let value = personalLife.indexOf("муж");
    personalLife.splice(value, 1);
    console.log(user.personal)
  }
});


//Обычный секс
let usually = document.getElementById("usually");
usually.addEventListener("change", () => {
  if (usually.checked){
    preferSex.push("обычный");
    console.log(user["like sex"])
  } else{
    let value = preferSex.indexOf("обычный");
    preferSex.splice(value, 1);
    console.log(user["like sex"]);
  }
});

// Оральный секс
let oral = document.getElementById("oral");
oral.addEventListener("change", () => {
  if (oral.checked){
    preferSex.push("орал");
    console.log(user["like sex"])
  } else{
    let value = preferSex.indexOf("орал");
    preferSex.splice(value, 1);
    console.log(user["like sex"]);
  }
});

// Анальный секс
let anal = document.getElementById("anal");
anal.addEventListener("change", () => {
  if (anal.checked) {
    preferSex.push('анал');
    console.log(user['like sex']);
  } else {
    let value = preferSex.indexOf('анал');
    preferSex.splice(value,1);
    console.log(user['like sex']);
  }
});

let hard = document.getElementById("hard");
hard.addEventListener("change", () => {
  if (hard.checked) {
    preferSex.push('грубый секс');
    console.log(user['like sex']);
  } else {
    let value = preferSex.indexOf('грубый секс');
    preferSex.splice(value,1);
    console.log(user['like sex']);
  }
});

// Кунилингус
let kuny = document.getElementById("kuny");
kuny.addEventListener("change", function(){
  if (kuny.checked){
    preferSex.push("кунилингус");
    console.log(user['like sex']);
  }else{
    let value = preferSex.indexOf("кунилингус");
    preferSex.splice(value, 1);
    console.log(user['like sex']);
  }
});
// Минет
let minet = document.getElementById("minet");
minet.addEventListener("change", function(){
  if (minet.checked){
    preferSex.push("минет");
    console.log(user['like sex']);
  }else{
    let value = preferSex.indexOf("минет");
    preferSex.splice(value, 1);
    console.log(user['like sex']);
  }
});
//другой секс
let other = document.getElementById("other");
other.addEventListener("change", function(){
  if (other.checked){
    preferSex.push("другой секс");
    console.log(user['like sex']);
  }else{
    let value = preferSex.indexOf("другой секс");
    preferSex.splice(value, 1);
    console.log(user['like sex']);
  }
});