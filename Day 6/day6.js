function background(){
  let b_color = ["red", "yellow", "white", "orange", "blue", "green", "black"];

  console.log(Math.floor(Math.random() * b_color.length));

  let setColor = () => {
      let index = Math.floor(Math.random() * b_color.length);

      document.body.style.backgroundColor = b_color[index];
  }

  setInterval(setColor, 5000); 
}
function table(){
  let num = parseInt(prompt("Plaese enter a number"));

  for(let i = 1; i <= 10; i++)
  {
      document.write(`${num} x  ${i} = ${num * i}<br>`);
  }
}
function toggle(){
let name = prompt("Plaese Enter Your Name", "Anonymuos");

let h1_id = document.getElementById("name");

h1_id.innerHTML = "Welcome " + name;

let h2_id = document.getElementById("dtime");

// function clock()
// {
//     let date = new Date();

//     let now = new moment();
// console.log(now.format("HH:mm:ss"));
//     //  h2_id.innerHTML = time;

//     document.getElementById("dtime").innerText = date.toLocaleTimeString();

//      t = setTimeout(() => {
//          clock()
//      }, 1000);
//  }
// clock();
// setInterval(clock, 1000);

// let date = new Date();

// document.getElementById("dtime").innerText = date.toLocaleTimeString();

function checkTime(i) 
{
    if (i < 10) 
    {
      i = "0" + i;
    }
    return i;
}
  
function startTime() 
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('dtime').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
}
startTime();

document.body.classList.toggle("dark_mode");
}