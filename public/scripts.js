let enterbtn = document.querySelector("#enter-button");
let submitbtn = document.querySelector("#submit-button");
 
enterbtn.addEventListener("click", function() {
    document.getElementById('front').classList.add('fadeoutanim'); 
    document.getElementById('inputmenu').classList.add('fadeinanim');
})

const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";

async function askGPT(param1, param2, param3, param4, param5) {
    const promptText = `I want you to generate a strength training workout for me today. The number of exercises I want is ${param1}. I want to work on ${param2}. My height is ${param3}. My weight is ${param4}. I am a(n) ${param5} in the gym. I would like to train hard, but please make sure that the exercises are not way too overloaded with their sets and repetitions! Use this format: '{ "exercises": [ {"exercise": "bench press", "sets": 4, "repetitions": 8, "weight": 135}, {"exercise": "squats", "sets": 3, "repetitions": 8, "weight": 210}, {"exercise": "lat pulldowns", "sets": 3, "repetitions": 8, "weight": 85}, {"exercise": "tricep pulldown", "sets": 3, "repetitions": 8, "weight": 60} ] }'. Return ONLY JSON.`;

    //view raw input
    /*console.log(promptText);*/
    let parsedResponse = "";
    
    try {
        const response = await fetch('/getGPT3Response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: promptText })
        });

        const data = await response.json();
        parsedResponse = JSON.parse(data.message);
        //view raw response
        /*console.log(parsedResponse);*/

    } catch (error) {
        console.error('Error:', error);
    }
    
    document.getElementById('loader').style.visibility="hidden";
    document.getElementById('resulttable').classList.add('fadeinanimtable');
    let table = document.getElementById('resulttable');
    let exercisesArray = parsedResponse.exercises;

// Access each exercise 
    var counter = 1;
    exercisesArray.forEach(exercise => {
        var row = table.insertRow(counter);
        if (counter%2 == 1) {
            row.style.backgroundColor="#ffffff";
        }
        else {
            row.style.backgroundColor="#f3f3f3";
        }
        row.style.color="#000000";
        var cell1 = row.insertCell(0); cell1.innerHTML = exercise.exercise;
        var cell2 = row.insertCell(1); cell2.innerHTML = exercise.sets;
        var cell3 = row.insertCell(2); cell3.innerHTML = exercise.repetitions;
        var cell4 = row.insertCell(3); cell4.innerHTML = exercise.weight;
        counter++;
    });

}

//called upon clicking the "generate" button, parses info and formats it into a table
submitbtn.addEventListener("click", function() {
    let information = {
        a : document.getElementsByName("input1")[0].value,
        b : document.getElementsByName("input2")[0].value,
        c : document.getElementsByName("input3")[0].value,
        d : document.getElementsByName("input4")[0].value,
        e : document.getElementsByName("input5")[0].value,
    };
    
    //the below blocks of code check for valid input, if not the input needs to be modified
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
        document.getElementById('inputmenu').classList.remove('fadeinanim'); 
        document.getElementById('inputmenu').style.visibility="visible";
        document.getElementById('inputmenu').classList.add('fadeoutanim'); 
        document.getElementById('loader').style.visibility="visible";
        
        //end of valid checking, function is executed hereafter 
        askGPT(information.a, information.b, information.c, information.d, information.e);
    }

})