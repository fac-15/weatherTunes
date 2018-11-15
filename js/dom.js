// all DOM manipulation to go here





// validation on the location input field - with input event
function validator(e) {
    // error message
    const errorP = document.querySelector('#get-weather p');
    const errorMsg = 'Please enter a valid location. You can enter letters a-z, upper and lower case';

    console.log(errorP);
    
    
    // add and remove error classes

    // - not valid
    if (!e.target.validity.valid) {
        e.target.classList.add('error');
        errorP.classList.add('error-msg');
        errorP.classList.remove('hidden');
        errorP.innerHTML = errorMsg;
        console.log('not valid');
    }
    // valid
    else {
        console.log('valid a to z');
        e.target.classList.remove('error');
        errorP.classList.remove('error-msg');
        errorP.classList.add('hidden');
        errorP.innerHTML = '';
    }



    



    // target different input fields, if they are invalid:
    // if (!e.target.validity.valid) {
    //     // - name
    //     if (e.target.id == 'name') {
    //         errorP.innerHTML = nameMsg;
    //     }
    //     // - company name
    //     else if (e.target.id == 'companyName') {
    //         errorP.innerHTML = companyMsg;
    //     }
    //     // - email
    //     else if (e.target.type == 'email') {
    //         errorP.innerHTML = emailMsg;
    //     }
    //     // - phone
    //     else if (e.target.type == 'number' || e.target.id == 'number') {
    //         if (e.target.value.length>12) {
    //             errorP.innerHTML = phoneMsg;
    //         }
    //     }
    // }


   
}


// get text input
const inputLocation = document.getElementById('your-location');
inputLocation.addEventListener('input', validator);

const form = document.getElementById('get-weather');
form.addEventListener('submit', somethingElse);