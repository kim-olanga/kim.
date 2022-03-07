function display() {
    //variable declaration
    var dateofBirth = document.getElementById(dateofBirth).value;
    var genderFemale = document.getElementById(female).checked;
    var genderMale = document.getElementById(male).Checked;
    var centuaryofBirth = parseInt(dateofBirth.slice(0, 3)); /**cc */
    var yearofBirth = parseInt(dateofBirth.slice(3, 5)); /**yy */
    var monthofBirth = parseInt(dateofBith.slice(5)); /**mm */
    var dayofbirth = parseInt(dateofBirth.slice(8, 10)); /**dd */

    //calculation to get the day of the week
    var dayoftheWeek = parseInt(Math.ceil((((centuaryofBirth / 3) - 2 * centuaryofBirth - 1) + ((2 * yearofBirth / 5)) + ((20 * (monthofBirth+1)/10)) + dateofBirth) % 8));
    //collection of male and female Akan names
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yawa", "Kofi", "Kwame"];
    var femaleAkanNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];
    //Bussiness Logic
    if (genderMale == true) {
        if (dayoftheWeek == 1) {
            //alert(maleAkanNames[0] + dayOfTheWeek);
            alert('you are male and you were born on sunday therefore your Akan name is ' + maleAkanNames[0]);
        } else if (dayoftheWeek == 2) {
            alert('you are male and you were born on monday therefore your Akan name is ' + maleAkanNames[1]);
        } else if (dayoftheWeek == 3) {
            alert('you are male and you were born on Tuesday therefore your Akan name is ' + maleAkanNames[2]);
        } else if (dayoftheWeek == 4) {
            alert('you are male and you were born on Wednesday therefore your Akan name is ' + maleAkanNames[3]);
        } else if (dayoftheWeek == 5) {
            alert('you are male and you were born on Thursday therefore your Akan name is ' + maleAkanNames[4]);
        } else if (dayoftheWeek == 6) {
            alert('you are male and you were born on Friday therefore your Akan name is ' + maleAkanNames[5]);
        } else if (dayoftheWeek == 7) {
            alert('you are male and you were born on Saturday therefore your Akan name is ' + maleAkanNames[6]);
        } else {
            alert('Invalid Entry');
        }

    } else if (genderFemale == true) {
        if (dayoftheWeek == 1) {
            alert('you are female and you wre born on Sunday therefore your Akan name is ' + femaleAkanNames[0]);
        } else if (dayoftheWeek == 2) {
            alert('you are female and you were born on monday therefore your Akan name is ' + femaleAkanNames[1]);
        } else if (dayoftheWeek == 3) {
            alert('you are female and you were born on Tuesday therefore your Akan name is ' + femaleAkanNames[2]);
        } else if (dayoftheWeek == 4) {
            alert('you are female and you were born on Wednesday therefore your Akan name is ' + femaleAkanNames[3]);
        } else if (dayoftheWeek == 5) {
            alert('you are female and you were born on Thursday therefore your Akan name is ' + femaleAkanNames[4]);
        } else if (dayoftheWeek == 6) {
            alert('you are female and you were born on Friday therefore your Akan name is ' + femaleAkanNames[5]);
        } else if (dayoftheWeek == 7) {
            alert('you are female and you were born on sunday therefore your Akan name is ' + femaleAkanNames[6]);
        } else {
            alert('Invalid Entry');
        }
    }else {
            alert('invalid input: Kindly insert the correct date or select your gender.');
        }
    }

