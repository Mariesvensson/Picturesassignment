let imgSerchButton = document.querySelector('#menu');
let imgSection = document.querySelector('#img')

let pageNumber = 1;
let input;
let color;
let totalHits;
let imgrespons;
let roundNumberOfPages;

imgSerchButton.onsubmit = async event => {
   event.preventDefault();
   removeElement()

   input = imgSerchButton.input.value;
   color = imgSerchButton.colors.value;
   let url = 'https://pixabay.com/api/?key=33474684-1ead600a61d07e2bdfb2e093e&q=' + input + '&colors=' + color + '&per_page=10'
   let response = await fetch(url);
   let json = await response.json();
   totalHits = json.totalHits;
   document.getElementById("nextPageButton").checked = true;
   document.getElementById("previousPageButton").style.display = "grid";
   document.getElementById("nextPageButton").style.display = "grid";
    let getNumberOfPages = totalHits/10;
    roundNumberOfPages = Math.ceil(getNumberOfPages)
   GetImages(url);
   ButtonVisibililty();
}

function ButtonVisibililty(){
   if(pageNumber == 1){
      document.getElementById('previousPageButton').style.visibility = 'hidden';
      document.getElementById('nextPageButton').style.visibility = 'visible';
   }
   else if(pageNumber != 1 && pageNumber !=  roundNumberOfPages){
      document.getElementById('previousPageButton').style.visibility = 'visible';
      document.getElementById('nextPageButton').style.visibility = 'visible';
   }
   else if( roundNumberOfPages == pageNumber){
      document.getElementById('previousPageButton').style.visibility = 'visible';
      document.getElementById('nextPageButton').style.visibility = 'hidden';
   }
}

function previousPageSelector(){
   pageNumber--
   pageSelector()
   ButtonVisibililty();
   // document.getElementById('nextPageButton').style.visibility = 'visible';
}

function nextPageSelector() {
   pageNumber++
   pageSelector()
   ButtonVisibililty();
}

async function GetImages(url){
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
    
   }
}

async function pageSelector() {
   event.preventDefault();
   removeElement();

   let url = 'https://pixabay.com/api/?key=33474684-1ead600a61d07e2bdfb2e093e&q=' + input + '&colors=' + color + '&page=' + pageNumber + '&per_page=10'

   GetImages(url);
}

function removeElement() {

   let divelementToRemove = document.querySelectorAll('.imgcontainer')

   divelementToRemove.forEach(divElement => {

      divElement.remove();
   });

}