
var calc_countries; // will be set further down the page        

function thisMovie(movieName) {
    return document[movieName];

    // if (navigator.appName.indexOf("Microsoft") != -1) {               
    //    return window[movieName];
    // } else {                
    //    return document[movieName];
    // }
}

function getFlashCountryText(flashtext, normaltext) {            
    if (flashtext != 'null' && flashtext != '') return flashtext;            
    return normaltext;
}

function setCountry(country, countryDesc) {
    var newflag = '';
    var newcountry = '';

    setOpen(false);

    switch (country) {
        case 1: newflag = 'uk.gif'; newcountry = 'UK'; break;
        case 2: newflag = 'china.gif'; newcountry = 'China'; break;
        case 3: newflag = 'japan.gif'; newcountry = 'Japan'; break;
        case 4: newflag = 'spain.gif'; newcountry = 'Spain'; break;
        case 5: newflag = 'sweden.gif'; newcountry = 'Sweden'; break;
        case 6: newflag = 'turkey.gif'; newcountry = 'Turkey'; break;                
        case 7: newflag = 'usa.gif'; newcountry = getFlashCountryText('US (Asian)', 'US (Asian)'); break;
        case 8: newflag = 'usa.gif'; newcountry = getFlashCountryText('', 'US (Black)'); break;
        case 9: newflag = 'usa.gif'; newcountry = getFlashCountryText('', 'US (Caucasian)'); break;
        case 10: newflag = 'usa.gif'; newcountry = getFlashCountryText('', 'US (Hispanic)'); break;                
        case 11: newflag = 'italy.gif'; newcountry = 'Italy'; break;
        case 12: newflag = 'france.gif'; newcountry = 'France'; break;
        case 13: newflag = 'russia.gif'; newcountry = 'Russia'; break;
        case 14: newflag = 'germany.gif'; newcountry = 'Germany'; break;
        case 15: newflag = 'swiss.gif'; newcountry = 'Switzerland'; break;
        case 16: newflag = 'austria.gif'; newcountry = 'Austria'; break;
        case 17: newflag = 'argentina.gif'; newcountry = 'Argentina'; break;
        case 18: newflag = 'belgium.gif'; newcountry = 'Belgium'; break;
        case 19: newflag = 'canada.gif'; newcountry = 'Canada'; break;
        case 20: newflag = 'hongkong.gif'; newcountry = 'Hong Kong'; break;
        case 21: newflag = 'lebanon.gif'; newcountry = 'Lebanon'; break;
        case 22: newflag = 'finland.gif'; newcountry = 'Finland'; break;
        case 23: newflag = 'newzealand.gif'; newcountry = 'New Zealand'; break;
        case 24: newflag = 'mexico.gif'; newcountry = 'Mexico'; break;
        case 25: newflag = 'southkorea.gif'; newcountry = 'South Korea'; break;
        case 26: newflag = 'taiwan.gif'; newcountry = 'Taiwan'; break;
        case 27: newflag = 'hungary.gif'; newcountry = 'Hungary'; break;
        case 28: newflag = 'columbia.gif'; newcountry = 'Colombia'; break;
        case 29: newflag = 'denmark.gif'; newcountry = 'Denmark'; break;
        case 30: newflag = 'netherlands.gif'; newcountry = 'Netherlands'; break;
        case 31: newflag = 'australia.gif'; newcountry = 'Australia'; break;
        case 32: newflag = 'jordan.gif'; newcountry = 'Jordan'; break;
        case 33: newflag = 'philippines.gif'; newcountry = 'Philippines'; break;
        case 34: newflag = 'malta.gif'; newcountry = 'Malta'; break;
        case 35: newflag = 'singapore.gif'; newcountry = 'Singapore (Chinese)'; break;
        case 36: newflag = 'singapore.gif'; newcountry = 'Singapore (Malay)'; break;
        case 37: newflag = 'singapore.gif'; newcountry = 'Singapore (Indian)'; break;
        case 38: newflag = 'tunisia.gif'; newcountry = 'Tunisia'; break;
        case 39: newflag = 'czech.gif'; newcountry = 'Czech Republic'; break;
        case 40: newflag = 'poland.gif'; newcountry = 'Poland'; break;
        case 41: newflag = 'romania.gif'; newcountry = 'Romania'; break;
        case 42: newflag = 'norway.gif'; newcountry = 'Norway'; break;
        case 43: newflag = 'ecuador.gif'; newcountry = 'Ecuador'; break;
        case 44: newflag = 'slovakia.gif'; newcountry = 'Slovakia'; break;
        case 45: newflag = 'srilanka.gif'; newcountry = 'Sri Lanka'; break;
        case 46: newflag = 'indonesia.gif'; newcountry = 'Indonesia'; break;
        case 47: newflag = 'lithuania.gif'; newcountry = 'Lithuania'; break;
        case 48: newflag = 'ireland.gif'; newcountry = 'Ireland'; break;
        case 49: newflag = 'greece.gif'; newcountry = 'Greece'; break;
        case 50: newflag = 'chile.gif'; newcountry = 'Chile'; break;
        case 51: newflag = 'india.gif'; newcountry = 'India'; break;
        case 52: newflag = 'palestine.gif'; newcountry = 'Palestine'; break;
        case 53: newflag = 'portugal.gif'; newcountry = 'Portugal'; break;
        case 54: newflag = 'morocco.gif'; newcountry = 'Morocco'; break;
        case 55: newflag = 'brazil.gif'; newcountry = 'Brazil'; break;
        case 56: newflag = 'iceland.gif'; newcountry = 'Iceland'; break;
        case 57: newflag = 'thailand.gif'; newcountry = 'Thailand'; break;
        case 58: newflag = 'armenia.gif'; newcountry = 'Armenia'; break;
        case 59: newflag = 'venezuela.gif'; newcountry = 'Venezuela'; break;
        case 60: newflag = 'croatia.gif'; newcountry = 'Croatia'; break;
        case 61: newflag = 'israel.gif'; newcountry = 'Israel'; break;
        case 62: newflag = 'estonia.gif'; newcountry = 'Estonia'; break;
        case 63: newflag = 'kuwait.gif'; newcountry = 'Kuwait'; break;
        case 64: newflag = "moldova.gif"; newcountry = 'Moldova'; break;
        case 65: newflag = "belarus.gif"; newcountry = 'Belarus'; break;
        case 66: newflag = "ukraine.gif"; newcountry = 'Ukraine'; break;
        case 67: newflag = "abudhabi.gif"; newcountry = 'Abu Dhabi'; break;
        case 68: newflag = "iran.gif"; newcountry = 'Iran'; break;
        case 69: newflag = "georgia.gif"; newcountry = 'Georgia'; break;
        case 70: newflag = "serbia.gif"; newcountry = 'Serbia'; break;
        case 71: newflag = "syria.gif"; newcountry = 'Syria'; break;
        case 72: newflag = "kazakhstan.gif"; newcountry = 'Kazakhstan'; break;
        case 73: newflag = "bulgaria.gif"; newcountry = 'Bulgaria'; break;
        case 74: newflag = "kyrgyzstan.gif"; newcountry = 'Kyrgyzstan'; break;
        case 75: newflag = "pakistan.gif"; newcountry = 'Pakistan'; break;
        case 76: newflag = "southafrica.gif"; newcountry = 'South Africa (White)'; break;
        case 77: newflag = "southafrica.gif"; newcountry = 'South Africa (Indian)'; break;
        case 78: newflag = "southafrica.gif"; newcountry = 'South Africa (Coloured)'; break;
        case 79: newflag = "southafrica.gif"; newcountry = 'South Africa (African)'; break;
        case 80: newflag = "uzbekistan.gif"; newcountry = 'Uzbekistan'; break;
        case 81: newflag = "zimbabwe.gif"; newcountry = 'Zimbabwe'; break;
        case 82: newflag = "botswana.gif"; newcountry = 'Botswana'; break;
        case 83: newflag = "ethiopia.gif"; newcountry = 'Ethiopia'; break;
        case 84: newflag = "saudi_arabia.gif"; newcountry = 'Saudi Arabia'; break;
        case 85: newflag = "qatar.gif"; newcountry = 'Qatar'; break;
        case 86: newflag = "nepal.gif"; newcountry = 'Nepal'; break;
        case 87: newflag = "malaysia.gif"; newcountry = 'Malaysia - Chinese'; break;
        case 88: newflag = "malaysia.gif"; newcountry = 'Malaysia - Bumiputera'; break;
        case 89: newflag = "malaysia.gif"; newcountry = 'Malaysia - Indian'; break;
        case 90: newflag = "peru.gif"; newcountry = 'Peru'; break;
        case 91: newflag = "myanmar.gif"; newcountry = 'Myanmar'; break;
        case 92: newflag = "bangladesh.gif"; newcountry = 'Bangladesh'; break;
        case 93: newflag = "brunei.gif"; newcountry = 'Brunei'; break;
        case 94: newflag = "egypt.gif"; newcountry = 'Egypt'; break;
        case 96: newflag = "costarica.gif"; newcountry = 'Costa Rica'; break;
    }            

    if (newflag != '') { // Country is valid
        // Hide the menu                
        calc_countries.style.top = -1000; // IE6
        calc_countries.style.zIndex = -1; // Chrome, Firefox
        window.setTimeout('calc_countries.style.top=\'\';', 100);
        window.setTimeout('calc_countries.style.zIndex=\'500\';', 100);
      
        setCookie('country', country, 365 * 24 * 60 * 60, '/FRAX'); // Remember last country in a cookie

        //Set the Country in the Tool
        id("CountryText").innerHTML = newcountry;
        id("country").value = country;
        id("countryDesc").value = countryDesc;

        showCountryMessage(country); // Show any country specific messages
        showNOSLogo(country); // Show NOS Logo - if UK only
        showSIMGLogo(country); // Show SIMG Logo - if Italy only
        showSMOSLogo(country); // Show SMOS Logo - if Czech only

        // Update the flag
        document.getElementById('flag').src = 'images/flags/' + newflag;
        
        // Get hit counter values for country
        printCountryHitCounter(country);
        
        return false; // return false to stop http redirect
    }
    return true; // return true if country change failed, will do http redirect
}

function showCountryMessage(country) {
    if (country >= 7 && country < 11) {
        document.getElementById("usa_message").style.display = "block";
    } else {
        document.getElementById("usa_message").style.display = "none";
    }
}

function showNOSLogo(country) {
    if (country == 1) {
        document.getElementById("nos_logo").style.display = "block";
    } else {
        document.getElementById("nos_logo").style.display = "none";
    }
}

function showSIMGLogo(country) {
    if (country == 11) {
        document.getElementById("simg_logo").style.display = "block";
    } else {
        document.getElementById("simg_logo").style.display = "none";
    }
}

function showSMOSLogo(country) {
    if (country == 39) {
        document.getElementById("smos_logo").style.display = "block";
    } else {
        document.getElementById("smos_logo").style.display = "none";
    }
}

function convertWeight() {
    var poundsstr = document.getElementById('weight').value;
    if (poundsstr == '') { alert('Please enter a valid weight'); return; }
    var pounds = parseFloat(poundsstr);
    if (isNaN(pounds)) pounds = 0;
    var kgs = pounds * 0.45359237;
    kgs = Math.round(kgs * 100) / 100;
    //alert(pounds + ' pounds = '+kgs+' kgs.');
    //thisMovie("calculation_tool").setWeight(kgs);            
    kgs = Math.round(kgs * 10) / 10; //one decimal place
    id("ctl00_ContentPlaceHolder1_toolweight").value = kgs;
}
function convertHeight() {
    var inchesstr = document.getElementById('height').value;
    if (inchesstr == '') { alert('Please enter a valid height'); return; }
    var inches = parseFloat(inchesstr);
    if (isNaN(inches)) inches = 0;
    var cms = inches * 2.54;
    cms = Math.round(cms * 10) / 10; //one decimal place

    //alert(inches + ' inches = '+cms+' cms.');
    //thisMovie("calculation_tool").setHeight(cms);
    id("ctl00_ContentPlaceHolder1_ht").value = cms;
}
function jumpToRiskFactors() {
    var currentHref = window.location.href;
    window.location.href = currentHref.substr(0, currentHref.lastIndexOf("#")) + "#notes";
}

function jsAlert(msg) {
    alert(msg);
}

function printCountryHitCounter(country) {
    PageMethods.GetCountryHits(country, onFetchHitsSucess, onFetchHitsError);                                 
}

function onFetchHitsSucess(result) {
    countryHitsTotal = parseInt(result);
    if (countryHitsTotal > 0) {
        var numZeropad = countryHitsTotal + ''; //Pad total hits with 0
        while (numZeropad.length < 8) { numZeropad = "0" + numZeropad; }

        document.getElementById("hit_counter").innerHTML = numZeropad;
        document.getElementById("hitcounter_wrapper").style.display = "block";
    } else {
        document.getElementById("hitcounter_wrapper").style.display = "none";
    }
}

function onFetchHitsError(result) { document.getElementById("hitcounter_wrapper").style.display = "none"; }

//----------------------------------------------- Tool ---------------------------------------------------------//

function id(element) {
    return document.getElementById(element);
}

// $(document).ready(function () {
//     $("#" + id("ctl00_ContentPlaceHolder1_nameid").id).focus();
//     defaultTool();
//     timer();å

// });

//Refresh Page Before Session Timedout
function timer() {
    var control = id("ctl00_ContentPlaceHolder1_btnRefresh").id;
    $(function () {
        var iniCount = "120" * 60 - 200;
        var count = iniCount;
        
        countdown = setInterval(function () {
            //$("#timer").html(count + " seconds remaining!");
            if (count == 0) {

                $("#" + control).click();
                count = iniCount;
            }
            count--;
        }, 1000);
    });
}


function defaultTool() {

    id("ctl00_ContentPlaceHolder1_nameid").value = "";
    id("ctl00_ContentPlaceHolder1_toolage").value = "";
    id("ctl00_ContentPlaceHolder1_year").value = "";
    id("ctl00_ContentPlaceHolder1_month").value = "";
    id("ctl00_ContentPlaceHolder1_day").value = "";
    id("ctl00_ContentPlaceHolder1_toolweight").value = "";
    id("ctl00_ContentPlaceHolder1_ht").value = "";

    $("#ctl00_ContentPlaceHolder1_sex1").removeAttr('checked');
    $("#ctl00_ContentPlaceHolder1_sex2").removeAttr('checked');

    $("#ctl00_ContentPlaceHolder1_previousfracture1").attr('checked', true);
    //$("#ctl00_ContentPlaceHolder1_previousfracture2").attr('checked', false);

    $("#ctl00_ContentPlaceHolder1_pfracturehip1").attr('checked', true);
    //$("#ctl00_ContentPlaceHolder1_pfracturehip2").attr('checked', false);

    $("#ctl00_ContentPlaceHolder1_currentsmoker1").attr('checked', true);
    //$("#ctl00_ContentPlaceHolder1_currentsmoker2").attr('checked', false);

    $("#ctl00_ContentPlaceHolder1_glucocorticoids1").attr('checked', true);
    //$("#ctl00_ContentPlaceHolder1_glucocorticoids2").attr('checked', false);

    $("#ctl00_ContentPlaceHolder1_arthritis1").attr('checked', true);
    //$("#ctl00_ContentPlaceHolder1_arthritis2").attr('checked', false);

    $("#ctl00_ContentPlaceHolder1_osteoporosis1").attr('checked', true);
    //$("#ctl00_ContentPlaceHolder1_osteoporosis2").attr('checked', false);

    $("#ctl00_ContentPlaceHolder1_alcohol1").attr('checked', true);
    //$("#ctl00_ContentPlaceHolder1_alcohol2").attr('checked', false);

    id("dxa").selectedIndex = 0;
    id("ctl00_ContentPlaceHolder1_bmd_input").value = "";
    id("score").innerHTML = "";

    if ($(id("ctl00_ContentPlaceHolder1_panelResult")).length > 0) id("ctl00_ContentPlaceHolder1_panelResult").style.visibility = 'hidden';
    
}

//Accept numeric value only
function numericValidate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[-+0-9]|\./;  // /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

//Prompt
function showMessage(msg) {
    alert(msg);
}

function myreplace(str, strfind, strreplace) {
    return str.split(strfind).join(strreplace);
}

function validations() {
    var age = id("ctl00_ContentPlaceHolder1_toolage").value;
    var weight = id("ctl00_ContentPlaceHolder1_toolweight").value
    var ht = id("ctl00_ContentPlaceHolder1_ht").value;
    var bmd_input = id("ctl00_ContentPlaceHolder1_bmd_input").value;
    // replace all commas with decimal points
    age = myreplace(age, ",", ".");
    weight = myreplace(weight, ",", ".");
    ht = myreplace(ht, ",", ".");
    bmd_input = myreplace(bmd_input, ",", ".");

    var year = id("ctl00_ContentPlaceHolder1_year");
    var month = id("ctl00_ContentPlaceHolder1_month");
    var day = id("ctl00_ContentPlaceHolder1_day");
    var sex1 = id("ctl00_ContentPlaceHolder1_sex1");
    var sex2 = id("ctl00_ContentPlaceHolder1_sex2");

    //Check Age
    if ((age == "" || age == " ") && (year.value == "" || year.value == " ")) {
        showMessage('Please fill either Age or Date of birth');
        return false;
//            //Check Age Range
//            } else if ((age != "" || age != " ") && (age < 40 || age > 90)) {
//                showMessage("Age should be between 40 - 90");
//                return false;
    //Check Year
    } else if (year.value != "" && year.value.length < 4) {
        showMessage('Please fill year as YYYY format');
        return false;
    //Check Year Range
    } else if (year.value != "" && Number(year.value) < 1900 || Number(year.value) > 2100) {
        showMessage('Year should be between 1900-2100');
        return false;
    //Check Month Range
    } else if (month.value != "" && Number(month.value) < 1 || Number(month.value) > 12) {
        showMessage('Month should be between 1-12');
        return false;
    //Check Day Range
    } else if (day.value != "" && Number(day.value) < 1 || Number(day.value) > 31) {
        showMessage('Day should be between 01-31');
        return false;
    //Check Sex
    } else if (sex1.checked == false && sex2.checked == false) {
        showMessage('Please select your sex');
        return false;
    //Check Weight
    } else if (weight == "" || weight == " ") {
        showMessage('Please fill the Weight field');
        return false;
    //Check Weight Range
    } else if ((weight != "" || weight != " ") && (Number(weight) < 25 || Number(weight) > 125)) {
        showMessage('Weight should be between 25-125');
        return false;
    //Check Hight
    } else if (ht == "" || ht == " ") {
        showMessage('Please fill the Height field');
        return false;
    //Check Height Range
    } else if ((ht != "" || ht != " ") && (Number(ht) < 100 || Number(ht) > 220)) {
        showMessage('Height should be between 100-220');
        return false;
    //Check BMD Field
    } else if ((bmd_input == "" || bmd_input == " ") && id("dxa").value != "N/A") {
        showMessage('Please fill the BMD field');
        return false;
    //Check GE-Lunar Range
    } else if (id("dxa").value == "GE-Lunar" && (Number(bmd_input) < 0.2 || Number(bmd_input) > 1.87)) {
        showMessage('BMD should be between (0.2) - (1.87)');
        return false;
    //Check Hologic Range
    } else if (id("dxa").value == "Hologic" && (Number(bmd_input) < 0.14 || Number(bmd_input) > 1.58)) {
        showMessage('BMD should be between (0.14) - (1.58)');
        return false;
    //Check Norland Range
    } else if (id("dxa").value == "Norland" && (Number(bmd_input) < 0.17 || Number(bmd_input) > 1.76)) {
        showMessage('BMD should be between (0.17) - (1.76)');
        return false;
    } else {
        return true;
    }
}

//Calculate age from year input
var lastKeyPress = 0;
var submitDelay = 200;

function ageCalKeyPress() {
    lastKeyPress = new Date().getTime();
    setTimeout(
        function () {
            if (new Date().getTime() - lastKeyPress >= submitDelay) calAge();
        }, submitDelay);
}

//        function yearCalKeyPress() {
//            lastKeyPress = new Date().getTime();
//            setTimeout(
//                function () {
//                    if (new Date().getTime() - lastKeyPress >= submitDelay) calYear();
//                }, submitDelay);
//        }

//Calculate Year
function calYear() {
    var year = id("ctl00_ContentPlaceHolder1_year").value;
    var ageinput = Math.round(id("ctl00_ContentPlaceHolder1_toolage").value);

    var today_date = new Date();
    var today_year = today_date.getFullYear();

    //Start Year Calculation
    if (ageinput != "") {
        var year = today_year - Number(ageinput);
        //result
        id("ctl00_ContentPlaceHolder1_year").value = year;
    }
}

//Calculate age
function calAge() {
    var year = id("ctl00_ContentPlaceHolder1_year").value;
    var month = id("ctl00_ContentPlaceHolder1_month").value;
    var day = id("ctl00_ContentPlaceHolder1_day").value;
    var ageinput = id("ctl00_ContentPlaceHolder1_toolage").value;

    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();

    //Start Age Calculation
    //Check year input
    if (year.length >= 4 && year != "") {
        var age = today_year - Number(year);
        //check month input
        if (month != "") {
            if (today_month < (Number(month) - 1)) {
                age--;
            }
            //check day input
            if (day != "") {
                if (((Number(month) - 1) == today_month) && (today_day < Number(day))) {
                    age--;
                }
            }
        }
        //result
        id("ctl00_ContentPlaceHolder1_toolage").value = age;
    }
}

function calAge_old() {
    var year = id("ctl00_ContentPlaceHolder1_year").value;
    var month = id("ctl00_ContentPlaceHolder1_month").value;
    var day = id("ctl00_ContentPlaceHolder1_day").value;
    var age = id("ctl00_ContentPlaceHolder1_toolage").value;

    if (year.length >= 4 && year != "" && month != "" && day != "") {
        if (checkDate()) {
            d = new Date();
            id("ctl00_ContentPlaceHolder1_toolage").value = d.getFullYear() - Number(year);
            if ((d.getMonth() + 1) < Number(month)) {
                id("ctl00_ContentPlaceHolder1_toolage").value = Number(age) - 1;
            }
        }
    } else if (year.length >= 4) {
        d = new Date();
        id("ctl00_ContentPlaceHolder1_toolage").value = d.getFullYear() - Number(year);
    }
}

//Check year range
function checkDate() {
    var year = id("ctl00_ContentPlaceHolder1_year");
    var month = id("ctl00_ContentPlaceHolder1_month");
    var day = id("ctl00_ContentPlaceHolder1_day");

    if (year.value != "" && Number(year.value) < 1900 || Number(year.value) > 2100) {
        showMessage('Year should be between 1900-2100');
        return false;
    } else if (month.value != "" && Number(month.value) < 1 || Number(month.value) > 12) {
        showMessage('Month should be between 1-12');
        return false;
    } else if (day.value != "" && Number(day.value) < 1 || Number(day.value) > 31) {
        showMessage('Day should be between 01-31');
        return false;
    }
    return true;
}

//Display message if T-Score selected
function dxa_onchange(value) {
    if (value == "T") {
        showMessage('The site and reference technology is DXA at the femoral neck. T-scores are based on the NHANES reference values for women aged 20-29 years. The same absolute values are used in men.');
    }
}

//Calculate T-Score
function calculateTScore() {
    var holFFNYNA = 0.85799999999999998;
    var holFFNSD = 0.12;
    var obsBMD;

    var bmd_input = id("ctl00_ContentPlaceHolder1_bmd_input");

    obsBMD = Number(bmd_input.value);
    dxa = id("dxa").value;

    var holConvBMD;
    if (dxa == "Hologic")
        holConvBMD = obsBMD;
    else
        if (dxa == "DMS")
            holConvBMD = obsBMD / 1.1177;
        else
            if (dxa == "GE-Lunar")
                holConvBMD = 0.86380000000000001 * obsBMD - 0.038600000000000002;
            else
                if (dxa == "Norland")
                    holConvBMD = 0.90620000000000001 * obsBMD - 0.012;
                else
                    if (dxa == "Mindways-QCT")
                        holConvBMD = (obsBMD + 0.004) / 0.888;

    var FTS = (holConvBMD - holFFNYNA) / holFFNSD;

    id("score").innerHTML = "T-score: " + formatoneDP(FTS);
    return formatoneDP(FTS);
}

// formats to one decimal place
function formatoneDP(n) {
    var x = Math.round(n * 10) / 10;
    if (x == parseInt(x)) x = x + '.0';
    return x;
}

//Perform Calculation
function calculate() {
    var result = validations();
    console.log(result);
    if (result == false) return false;

    checkRangeInputs();

    var currentCountryID = id("country").value;
    var countryDesc = id("countryDesc").value;            
    ga('send', 'event', 'calculation', 'country', currentCountryID + ': ' + countryDesc);

    return true;       
}

function checkRangeInputs() {
    flag = false;
    msg = "";

    var toolage = id("ctl00_ContentPlaceHolder1_toolage");
    var toolagehidden = id("ctl00_ContentPlaceHolder1_toolagehidden");
    var toolweight = id("ctl00_ContentPlaceHolder1_toolweight");
    var toolweighthidden = id("ctl00_ContentPlaceHolder1_toolweighthidden");
    var ht = id("ctl00_ContentPlaceHolder1_ht");
    var toolheighthidden = id("ctl00_ContentPlaceHolder1_toolheighthidden");
    var age = 0;
    var weight = 0;
    var height = 0;

    if (toolage.value != "" && Number(toolage.value) < 40) {
        flag = true;
        age = 40;
        msg = msg + '\nAge out of range - Probability given for age 40';
    } else if (toolage.value != "" && Number(toolage.value) > 90) {
        flag = true;
        age = 90;
        msg = msg + '\nAge out of range - Probability given for age 90';
    } else {
        age = toolage.value;
    }
    //
    if (toolweight.value != "" && Number(toolweight.value) < 25) {
        flag = true;
        weight = 25;
        msg = msg + '\nWeight out of range - Probability given for weight 25';
    } else if (toolweight.value != "" && Number(toolweight.value) > 125) {
        flag = true;
        weight = 125;
        msg = msg + '\nWeight out of range - Probability given for weight 125';
    } else {
        weight = toolweight.value;
    }
    //
    if (ht.value != "" && Number(ht.value) < 100) {
        flag = true;
        height = 100;
        msg = msg + '\nHeight out of range - Probability given for height 100';
    } else if (ht.value != "" && Number(ht.value) > 220) {
        flag = true;
        height = 220;
        msg = msg + '\nHeight out of range - Probability given for height 220';
    } else {
        height = ht.value;
    }
    //
    if (flag) {
        showMessage(msg);
    }
    //
    var ethnicity = id("country").value;
    var nameid = id("ctl00_ContentPlaceHolder1_nameid").value;
    var year = id("ctl00_ContentPlaceHolder1_year");
    var month = id("ctl00_ContentPlaceHolder1_month");
    var day = id("ctl00_ContentPlaceHolder1_day");
    var sex1 = id("ctl00_ContentPlaceHolder1_sex1");
    var sex2 = id("ctl00_ContentPlaceHolder1_sex2");

    var previousfracture1 = id("ctl00_ContentPlaceHolder1_previousfracture1");
    var previousfracture2 = id("ctl00_ContentPlaceHolder1_previousfracture2");
    var pfracturehip1 = id("ctl00_ContentPlaceHolder1_pfracturehip1");
    var pfracturehip2 = id("ctl00_ContentPlaceHolder1_pfracturehip2");
    var currentsmoker1 = id("ctl00_ContentPlaceHolder1_currentsmoker1");
    var currentsmoker2 = id("ctl00_ContentPlaceHolder1_currentsmoker2");
    var glucocorticoids1 = id("ctl00_ContentPlaceHolder1_glucocorticoids1");
    var glucocorticoids2 = id("ctl00_ContentPlaceHolder1_glucocorticoids2");
    var arthritis1 = id("ctl00_ContentPlaceHolder1_arthritis1");
    var arthritis2 = id("ctl00_ContentPlaceHolder1_arthritis2");
    var osteoporosis1 = id("ctl00_ContentPlaceHolder1_osteoporosis1");
    var osteoporosis2 = id("ctl00_ContentPlaceHolder1_osteoporosis2");
    var alcohol1 = id("ctl00_ContentPlaceHolder1_alcohol1");
    var alcohol2 = id("ctl00_ContentPlaceHolder1_alcohol2");

    if (age.value == "" || age.value == " ") {
        age = 0;
    }
    if (year.value == "" || year.value == " ") {
        year = 0;
    }
    if (month.value == "" || month.value == " ") {
        month = -1;
    } else {
        month = Number(month.value) - 1;
    }
    if (day.value == "" || day.value == " ") {
        day = 0;
    }
    //
    if (sex1.checked == true) {
        var sex = 0;
        $("#ctl00_ContentPlaceHolder1_sex2").removeAttr('checked');
        $("#ctl00_ContentPlaceHolder1_sex1").attr('checked', true);
        
    } else if (sex2.checked == true) {
        var sex = 1;
        $("#ctl00_ContentPlaceHolder1_sex2").attr('checked', true);
    } else {
        var sex = "";
    }
    //
    if (previousfracture1.checked == true) {
        var previousfracture = 0;
        $("#ctl00_ContentPlaceHolder1_previousfracture2").removeAttr('checked');
        $("#ctl00_ContentPlaceHolder1_previousfracture1").attr('checked', true);
    } else if (previousfracture2.checked == true) {
        var previousfracture = 1;
        $("#ctl00_ContentPlaceHolder1_previousfracture2").attr('checked', true);
    } else {
        var previousfracture = 0;
    }
    //
    if (pfracturehip1.checked == true) {
        var pfracturehip = 0;
        $("#ctl00_ContentPlaceHolder1_pfracturehip2").removeAttr('checked');
        $("#ctl00_ContentPlaceHolder1_pfracturehip1").attr('checked', true);
        
    } else if (pfracturehip2.checked == true) {
        var pfracturehip = 1;
        $("#ctl00_ContentPlaceHolder1_pfracturehip2").attr('checked', true);
    } else {
        var pfracturehip = 0;
    }
    //
    if (currentsmoker1.checked == true) {
        var currentsmoker = 0;
        $("#ctl00_ContentPlaceHolder1_currentsmoker2").removeAttr('checked');
        $("#ctl00_ContentPlaceHolder1_currentsmoker1").attr('checked', true);
    } else if (currentsmoker2.checked == true) {
        var currentsmoker = 1;
        $("#ctl00_ContentPlaceHolder1_currentsmoker2").attr('checked', true);
    } else {
        var currentsmoker = 0;
    }
    //
    if (glucocorticoids1.checked == true) {
        var glucocorticoids = 0;
        $("#ctl00_ContentPlaceHolder1_glucocorticoids2").removeAttr('checked');
        $("#ctl00_ContentPlaceHolder1_glucocorticoids1").attr('checked', true);
    } else if (glucocorticoids2.checked == true) {
        var glucocorticoids = 1;
        $("#ctl00_ContentPlaceHolder1_glucocorticoids2").attr('checked', true);
    } else {
        var glucocorticoids = 0;
    }
    //
    if (arthritis1.checked == true) {
        var arthritis = 0;
        $("#ctl00_ContentPlaceHolder1_arthritis2").removeAttr('checked');
        $("#ctl00_ContentPlaceHolder1_arthritis1").attr('checked', true);
    } else if (arthritis2.checked == true) {
        var arthritis = 1;
        $("#ctl00_ContentPlaceHolder1_arthritis2").attr('checked', true);
    } else {
        var arthritis = 0;
    }
    //
    if (osteoporosis1.checked == true) {
        var osteoporosis = 0;
        $("#ctl00_ContentPlaceHolder1_osteoporosis2").removeAttr('checked');
        $("#ctl00_ContentPlaceHolder1_osteoporosis1").attr('checked', true);
    } else if (osteoporosis2.checked == true) {
        var osteoporosis = 1;
        $("#ctl00_ContentPlaceHolder1_osteoporosis2").attr('checked', true);
    } else {
        var osteoporosis = 0;
    }
    
    if (alcohol1.checked == true) {
        var alcohol = 0;
        $("#ctl00_ContentPlaceHolder1_alcohol2").removeAttr('checked');
        $("#ctl00_ContentPlaceHolder1_alcohol1").attr('checked', true);
    } else if (alcohol2.checked == true) {
        var alcohol = 1;
        $("#ctl00_ContentPlaceHolder1_alcohol2").attr('checked', true);
    } else {
        var alcohol = 0;
    }

    var bmd;
    var thescore;
    
    if (id("dxa").value == "T") {
        bmd = "T";
        thescore = id("ctl00_ContentPlaceHolder1_bmd_input").value;
        id("score").innerHTML = "";
    } else if (id("dxa").value == "N/A") {
        bmd = "N/A";
        id("score").innerHTML = "";
    } else {
        bmd = "T";
        thescore = calculateTScore();
    }            

    //Insert Value to Hidden Controls
    id("ctl00_ContentPlaceHolder1_hdnethnicity").value = ethnicity;
    id("ctl00_ContentPlaceHolder1_hdnpreviousfracture").value = previousfracture;
    id("ctl00_ContentPlaceHolder1_hdnpfracturehip").value = pfracturehip;
    id("ctl00_ContentPlaceHolder1_hdncurrentsmoker").value = currentsmoker;
    id("ctl00_ContentPlaceHolder1_hdnglucocorticoids").value = glucocorticoids;
    id("ctl00_ContentPlaceHolder1_hdnarthritis").value = arthritis;
    id("ctl00_ContentPlaceHolder1_hdnosteoporosis").value = osteoporosis;
    id("ctl00_ContentPlaceHolder1_hdnalcohol").value = alcohol;
    id("ctl00_ContentPlaceHolder1_hdnbmd").value = bmd;
    id("ctl00_ContentPlaceHolder1_hdnthescore").value = thescore;
    id("ctl00_ContentPlaceHolder1_hdnsex").value = sex;
    toolagehidden.value = age; //set hidden age value if age range is less than 40 or greater than 90
    toolweighthidden.value = weight;
    toolheighthidden.value = height;            
}

function findNote() {
    $('html, body').animate({ scrollTop: $("#notes").offset().top }, 1800);
}

function printResults() {
    $("#noPrint").addClass("noPrint");
    window.print();
    $("#noPrint").removeClass("noPrint");
}


