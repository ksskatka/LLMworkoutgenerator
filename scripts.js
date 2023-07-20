let enterbtn = document.querySelector("#enter-button");
let submitbtn = document.querySelector("#submit-button");

enterbtn.addEventListener("click", function() {
    document.getElementById('front').classList.add('fadeoutanim'); 
    document.getElementById('inputmenu').classList.add('fadeinanim');
})
 
submitbtn.addEventListener("click", function() {
    /*
    WILL TIDY UP AND SHORTEN THE CODE BELOW, JUST FOR QUICK AND VISIBLE TWEAKING.
    */ 
    let information = {
        a : document.getElementsByName("input1")[0].value,
        b : document.getElementsByName("input2")[0].value,
        c : document.getElementsByName("input3")[0].value,
        d : document.getElementsByName("input4")[0].value,
        e : document.getElementsByName("input5")[0].value,
    };
    
    let validcheck = true;
    if (information.a == "" || information.a == null) {
        document.getElementById('error1').style.visibility="visible";
        document.getElementById('error1').style.animation = 'none';
        document.getElementById('error1').offsetHeight; /* trigger reflow */
        document.getElementById('error1').style.animation = null;
        if (document.getElementById('error1').classList.contains('errorfadeinanim')) {
            document.getElementById('error1').classList.add('popoutanim');
        }
        else {
            document.getElementById('error1').classList.add('errorfadeinanim');
        }
        validcheck = false;
    }
    else if (information.a != "" && information.a != null) {
        document.getElementById('error1').style.visibility="hidden";
        document.getElementById('error1').classList.remove('errorfadeinanim');
        document.getElementById('error1').classList.remove('popoutanim');
    }
    
    if (information.b == "" || information.b == null) {
        document.getElementById('error2').style.visibility="visible";
        document.getElementById('error2').style.visibility="visible";
        document.getElementById('error2').style.animation = 'none';
        document.getElementById('error2').offsetHeight; /* trigger reflow */
        document.getElementById('error2').style.animation = null;
        if (document.getElementById('error2').classList.contains('errorfadeinanim')) {
            document.getElementById('error2').classList.add('popoutanim');
        }
        else {
            document.getElementById('error2').classList.add('errorfadeinanim');
        }
        validcheck = false;
    }
    else if (information.b != "" && information.b != null) {
        document.getElementById('error2').style.visibility="hidden";
        document.getElementById('error2').classList.remove('errorfadeinanim');
        document.getElementById('error2').classList.remove('popoutanim');
    }
    
    if (information.c == "" || information.c == null) {
        document.getElementById('error3').style.visibility="visible";
        document.getElementById('error3').style.visibility="visible";
        document.getElementById('error3').style.animation = 'none';
        document.getElementById('error3').offsetHeight; /* trigger reflow */
        document.getElementById('error3').style.animation = null;
        if (document.getElementById('error3').classList.contains('errorfadeinanim')) {
            document.getElementById('error3').classList.add('popoutanim');
        }
        else {
            document.getElementById('error3').classList.add('errorfadeinanim');
        }
        validcheck = false;
    }
    else if (information.c != "" && information.c != null) {
        document.getElementById('error3').style.visibility="hidden";
        document.getElementById('error3').classList.remove('errorfadeinanim');
        document.getElementById('error3').classList.remove('popoutanim');
    }
    
    if (information.d == "" || information.d == null) {
        document.getElementById('error4').style.visibility="visible";
        document.getElementById('error4').style.visibility="visible";
        document.getElementById('error4').style.animation = 'none';
        document.getElementById('error4').offsetHeight; /* trigger reflow */
        document.getElementById('error4').style.animation = null;
        if (document.getElementById('error4').classList.contains('errorfadeinanim')) {
            document.getElementById('error4').classList.add('popoutanim');
        }
        else {
            document.getElementById('error4').classList.add('errorfadeinanim');
        }
        validcheck = false;
    }
    else if (information.d != "" && information.d != null) {
        document.getElementById('error4').style.visibility="hidden";
        document.getElementById('error4').classList.remove('errorfadeinanim');
        document.getElementById('error4').classList.remove('popoutanim');
    }
    
    if (information.e == "" || information.e == null) {
        document.getElementById('error5').style.visibility="visible";
        document.getElementById('error5').style.visibility="visible";
        document.getElementById('error5').style.animation = 'none';
        document.getElementById('error5').offsetHeight; /* trigger reflow */
        document.getElementById('error5').style.animation = null;
        if (document.getElementById('error5').classList.contains('errorfadeinanim')) {
            document.getElementById('error5').classList.add('popoutanim');
        }
        else {
            document.getElementById('error5').classList.add('errorfadeinanim');
        }
        validcheck = false;
    }
    else if (information.e != "" || information.e != null) {
        document.getElementById('error5').style.visibility="hidden";
        document.getElementById('error5').classList.remove('errorfadeinanim');
        document.getElementById('error5').classList.remove('popoutanim');
    }
    
    if (validcheck == true) {
        console.log(information.a);
        console.log(information.b);
        console.log(information.c);
        console.log(information.d);
        console.log(information.e);

        document.getElementById('inputmenu').classList.remove('fadeinanim'); 
        document.getElementById('inputmenu').style.visibility="visible"; 
        document.getElementById('inputmenu').classList.add('fadeoutanim'); 
        document.getElementById('resulttable').classList.add('fadeinanimtable');
    }
})