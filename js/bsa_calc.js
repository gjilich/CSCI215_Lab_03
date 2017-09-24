function calculate() {

    var female = document.getElementsByName("sex")[1].checked;
    var male = document.getElementsByName("sex")[0].checked;

    var weight = document.getElementsByName("weight")[0].value;
    var height = document.getElementsByName("height")[0].value;

    console.log( 'Male = ' + male );
    console.log( 'Weight = ' + weight );
    console.log( 'Height = ' + height );

    // -------------------------------
    // Conversions
    // -------------------------------
    // lbs to kg: 1 lb = 0.454 kg
    // inch to meter: 1 in = 0.0254 m
    // inch to cm: 1 in = 2.54 cm

    // ==========================================
    // Todo: Perform conversion calculations here
      var weightkg = (weight * .454);
      var heightcm = (height * 2.54);

    // -------------------------------
    // Body Surface Area (BSA)
    // -------------------------------

    var BSA = 0;

    // ==========================================
    // Todo: Perform BSA calculation here
    var bsastep1 = (heightcm * weightkg);
    var bsastep2 = (bsastep1 / 3600);
        BSA =  Math.sqrt(bsastep2);

    // -------------------------------
    // Ideal Body Weight (IBW)
    // -------------------------------

    var IBW = 0;

    if ( female ) {
          var ibwstep1 = (height - 60);
          var ibwstep2 = (ibwstep1 * 2.3);
          IBW = (ibwstep2 + 45.5);

        // ==========================================
        // Todo: Perform female IBW calculation here


    } else if ( male ) {

        // ==========================================
        // Todo: Perform male IBW calculation here
            var ibwstep1 = (height - 60);
            var ibwstep2 = (ibwstep1 * 2.3);
            IBW = (ibwstep2 + 50);


    }

    // -------------------------------
    // Body Mass Index (BMI)
    // -------------------------------

    var BMI = 0;

    // ==========================================
    // Todo: Perform BMI calculation here
        BMI = weightkg / (heightcm/100*heightcm/100);


    // Do not modify this function call
    display( BSA, IBW, BMI );

}

// ------------------------------------
// Do not modify this function
function display( BSA, IBW, BMI ) {

    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nIdeal Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';

    document.getElementById("output").innerHTML=message;

}