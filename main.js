let imgSerchButton = document.querySelector('#menu');
let imgSection = document.querySelector('#img')

let pageNumber = 1;
let input;
let color;

imgSerchButton.onsubmit = async event => {
   event.preventDefault();

   imgSection.innerHTML = '';

   let imgCount = 0;

   input = imgSerchButton.input.value;
   color = imgSerchButton.colors.value;
   let url = 'https://pixabay.com/api/?key=33474684-1ead600a61d07e2bdfb2e093e&q=' + input + '&colors=' + color + '&per_page=10'

   let response = await fetch(url);
   let json = await response.json();

   console.log(json);

   if (pageNumber = 1) {
      document.getElementById('previousPageButton').style.visibility = 'hidden';
      document.getElementById('nextPageButton').style.visibility = 'visible';
   }

   for (let imgrespons of json.hits) {
      var imgelement = document.createElement('img');
      var divelemnt = document.createElement('div');
      var p = document.createElement('p');
      var pTags = document.createElement('p');

      divelemnt.classList.add('imgcontainer');
      imgelement.classList.add('styleimg')

      imgelement.src = imgrespons.webformatURL;
      p.innerText = imgrespons.user;
      pTags.innerText = imgrespons.tags

      divelemnt.appendChild(imgelement);
      divelemnt.appendChild(p);
      divelemnt.appendChild(pTags);
      imgSection.appendChild(divelemnt);

      imgCount++;

      if (imgCount == 10) {
         break;
      }
   }
}

function previousPageSelector() {
   pageNumber--
   if (pageNumber != 1) {
      document.getElementById('previousPageButton').style.visibility = 'visible';
      document.getElementById('nextPageButton').style.visibility = 'visible';
   }
   else {
      document.getElementById('previousPageButton').style.visibility = 'hidden';
      document.getElementById('nextPageButton').style.visibility = 'visible';
   }
   pageSelector()
}

function nextPageSelector() {
   pageNumber++
   if (pageNumber != 1) {
      document.getElementById('previousPageButton').style.visibility = 'visible';
   }
   pageSelector()
}

async function pageSelector() {
   event.preventDefault();
   removeElement();

   imgCount = 0;

   let url = 'https://pixabay.com/api/?key=33474684-1ead600a61d07e2bdfb2e093e&q=' + input + '&colors=' + color + '&page=' + pageNumber + '&per_page=10'

   let response = await fetch(url);
   let json = await response.json();

   console.log(json);

   for (let imgrespons of json.hits) {
      var imgelement = document.createElement('img');
      var divelemnt = document.createElement('div');
      var p = document.createElement('p');
      var pTags = document.createElement('p');

      divelemnt.classList.add('imgcontainer');
      imgelement.classList.add('styleimg')

      imgelement.src = imgrespons.webformatURL;
      p.innerText = imgrespons.user;
      pTags.innerText = imgrespons.tags;

      divelemnt.appendChild(imgelement);
      divelemnt.appendChild(p);
      divelemnt.appendChild(pTags);
      imgSection.appendChild(divelemnt);

      imgCount++;

      if (imgCount == 10) {
         break;
      }
   }
   if (imgCount < 10) {
      document.getElementById('nextPageButton').style.visibility = 'hidden';
   }
}

function removeElement() {

   let divelementToRemove = document.querySelectorAll('.imgcontainer')

   divelementToRemove.forEach(divElement => {

      divElement.remove();
   });

}