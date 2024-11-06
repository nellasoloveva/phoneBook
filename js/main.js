let ta1 = document.getElementById('textarea1');
let ta2 = document.getElementById('textarea2');
let ta3 = document.getElementById('textarea3');
let ta4 = document.getElementById('textarea4');
let crBut = document.getElementById('crBut');
let obMass = [];
const modal = document.querySelector('#modal');
const btn = document.querySelector('#openModal');
const close = document.querySelector('.close');
let infoPeop = document.getElementById('infoPeop');
let idNum = 0;


crBut.onclick = function() {
  var phoneno = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if(ta3.value.match(phoneno)) {
      idNum += 1;
      
      class Person {
        constructor(name, surname, phoneNumber, adress, id) {
          this.name = ta1.value;
          this.surname = ta2.value;
          this.phoneNumber = ta3.value;
          this.adress = ta4.value;
          this.id = 'aye' + idNum;
        }
      }
  
      const bob = new Person(ta1.value, ta2.value, ta3.value, ta4.value, 'aye' + idNum);
      obMass.push(bob);
  
      ta1.value = '';
      ta2.value = '';
      ta3.value = '';
      ta4.value = '';

      
  
      let outputDiv = document.createElement('div');
      outputDiv.classList.add('div123');
      outputDiv.id = 'aye' + idNum;
      outputDiv.innerHTML = `<div class="left">${bob.name + bob.surname}</div><div class="right"><a href="tel:${bob.phoneNumber}">${bob.phoneNumber}</a></div>`;
      list.appendChild(outputDiv);
      console.log(obMass);

      window.addEventListener('click', function(event) {
        if (event.target.id.startsWith('aye')) {
          modal.style.display = 'block';
          const nameToFind = event.target.id;
          console.log(nameToFind);
          const person = obMass.find(person => person.id === nameToFind);
      
          console.log(person);

          infoPeop.innerHTML = ' ';

          let divInf = document.createElement('div');
            divInf.textContent = person.name + ' ' + person.surname + ' ' + person.adress + ' ' + person.phoneNumber; 
            infoPeop.appendChild(divInf);
        }
      });

  }  
  else {  
    alert("incorrect number");
    console.log("Введенный номер:", ta3.value);
    ta3.value = '';
  }
  

  close.onclick = function () {
  modal.style.display = 'none';
  };

  modal.onclick = function(){
    modal.style.display = 'none';
  }
  
  
 
}





