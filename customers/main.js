// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element


function newPerson(numUsers){
  fetch(`https://randomuser.me/api?results=`+numUsers)
  .then( function(response){
    return response.json()
  })
  .then(function(json){
    console.log("data", json)

    for(i = 0; i < numUsers; i ++){
      var call = json.results[i];
      var pic = call.picture.large;
      var firstName = call.name.first.toUpperCase();
      var lastName = call.name.last.toUpperCase();
      var email = call.email.toUpperCase();
      var addressStreet = call.location.street;
      var addressCity = call.location.city;
      var addressState = call.location.state;
      var addressZip = call.location.postcode;
      var tel = call.cell;
      var idNum = call.id.value;

    var html = `
      <div class="profile-wrapper">
        <div class ="picture">
          <img src ="${pic}">
        </div>
        <div class = "name">
          <span>${firstName} ${lastName}</span>
        </div>
        <div class="email">
          <span>${email}</span>
        </div>
        <div class="address">
          <p>${addressStreet}</p>
          <p>${addressCity}, ${addressState} ${addressZip}</p>
          <p>${tel}</p>
        </div>
        <div class="idNum">
          <span>${idNum}</span>
        </div>
      </div>
    `

    document.querySelector('.customers').insertAdjacentHTML('afterbegin', html);
    }
  })


}

// for(i = 1; i <=2; i++){
  newPerson(12);
// }
