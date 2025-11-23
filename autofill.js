// ENTER COMMA SEPARATED USER STRING HERE:
const inputString = ",,,,,paste,here,,,,,";

// IF EMAIL AND TELEPHONE POPUP DON'T APPEAR IN 2000ms, INCREASE THIS:
const timeout_for_button = 2000

// Split the string into an array based on the semicolon delimiter
const columns = inputString.split(",");

// Set values for the fields
document.getElementById('Member_FirstName').value = columns[5];
document.getElementById('Member_Initials').value = columns[4];
document.getElementById('Member_MiddleName').value = columns[6];
document.getElementById('Member_LastName').value = columns[7];
if (columns[10].capitalize() === "Man") {
   document.getElementById("ddGender").value = "0"
} else if (columns[10].capitalize() === "Vrouw") {
   document.getElementById("ddGender").value = "1"
} 
document.getElementById('Member_BirthDate').value = columns[11]; // Assuming the birthdate is in the 13th column
document.getElementById('js-address-zip').value = columns[22]; // Replace with the appropriate column index for the ZipCode
document.getElementById('js-address-house-number').value = columns[26]; // Replace with the appropriate column index for the HouseNumber
document.getElementById('js-address-extension').value = columns[27]; // Replace with the appropriate column index for the HouseNumberExtension
document.getElementById('js-address-street').value = ''; // Replace with the appropriate column index for the Streetname
document.getElementById('js-address-city').value = ''; // Replace with the appropriate column index for the City
$('#js-address-country').change(); 
document.getElementById('Member_IsPlayingMember').checked = true 
document.getElementById("Member_FederationPersonNumber").value = columns[38];
document.getElementById("Member_Ranking_StrengthSingleValue").value = columns[49];
document.getElementById("Member_Ranking_StrengthDoubleValue").value = columns[50];
if (columns[20] !== "NL") console.log("LET OP: SELECTEER ANDERE NATIONALITEIT: " + columns[20]);

const button = document.querySelector('a[href="/883/Persons/NewEmail?prefix=Member.EmailAddresses"]'); if (button) { button.click(); } else { console.error('Button not found'); }
const button2 = document.querySelector('a[href="/883/Persons/NewPhoneNumber?prefix=Member.PhoneNumbers"]'); if (button2) { button2.click(); } else { console.error('Button not found'); }

setTimeout(() => { const emailInput = document.querySelector('input.form-control.email-field[name*="Member.EmailAddresses"]'); 
emailInput.value = columns[15]; 
const phoneInput = document.querySelector('input.form-control.contact-field.phone-number-field');
phoneInput.value = 0 + columns[18];

}, timeout_for_button);
