var count = 0;
function resizeButton() { //changes the sizes of yes and no buttons on click of no button and adds images based on count
  var yes_button = document.getElementById('biggerButton');
  var no_button = document.getElementById('smallerButton');
  var sad_monkey = document.getElementById('sad_monkey');
  var default_monkey = document.getElementById('monkey');
  var angry_monkey = document.getElementById('angry_monkey');
  if (count === 0) {
  no_button.style.width = '100px';
  no_button.style.height = '30px';
  yes_button.style.width = '150px';
  yes_button.style.height = '70px';
  yes_button.textContent = 'PLEASE YES';
  }
  else if (count === 1){ 
  no_button.style.width = '70px';
  no_button.style.height = '20px';
  no_button.style.fontSize = '10px';
  yes_button.style.width = '170px';
  yes_button.style.height = '85px';
  yes_button.style.fontSize = '25px'
  yes_button.textContent = 'SAY YES';
  sad_monkey.style.display = 'grid';
  default_monkey.style.display = 'none';
  }
  else if (count === 2) {
  no_button.style.width = '40px';
  no_button.style.height = '15px';
  no_button.style.fontSize = '7px';
  yes_button.style.width = '190px';
  yes_button.style.height = '110px';
  yes_button.style.fontSize = '40px'
  yes_button.textContent = 'PLEASE';
  }
  else if (count === 3) {
  no_button.style.width = '25px';
  no_button.style.height = '10px';
  no_button.style.fontSize = '4px';
  yes_button.style.width = '220px';
  yes_button.style.height = '130px';
  yes_button.style.fontSize = '55px'
  yes_button.textContent = "c'mon";
  angry_monkey.style.display = 'grid';
  sad_monkey.style.display = 'none';
    }
  else if (count === 4) {
  no_button.style.width = '15px';
  no_button.style.height = '5px';
  no_button.style.fontSize = '2px';
  yes_button.style.width = '240px';
  yes_button.style.height = '150px';
  yes_button.style.fontSize = '50px';
  yes_button.textContent = 'LAST CHANCE';
  }
  else if (count === 5) {
    no_button.style.display = 'none';
    yes_button.style.margin= 'auto';
    yes_button.style.fontSize = '50px';
    yes_button.textContent = 'PLEASE SAY YES';
    alert ('❤️Now there is only one button press it or your device crashes❤️');}
  count++;
  }

function monkey_to_goat(){
  var goat = document.getElementById('goat');
  var monkey = document.getElementById('monkey');
  var yes_button = document.getElementById('biggerButton');
  var buttons = document.getElementById('buttons')
  var no_button = document.getElementById('smallerButton');
  var angry_monkey = document.getElementById('angry_monkey');
  var img_container = document.getElementById('img_container');
  
  monkey.style.display = 'none';
  angry_monkey.style.display = 'none';
  goat.style.display = 'grid';
  img_container.style.display = 'grid';
  no_button.style.display = 'none';
  yes_button.style.width = '380px';
  yes_button.style.height = '150px';
  yes_button.style.fontSize = '50px';
  yes_button.textContent = '❤️YIPPEEEE❤️';
  buttons.style.margin = '0';
}