var Def = document.getElementById("default");
Def.style.display = "block";

function ShowHideDiv() {

    var chkB = document.getElementById("chkB");

    var BCars = document.getElementById("BCars");
    // var PCars = document.getElementById("PCars");
    // var BrCars = document.getElementById("BrCars");
    console.log("Budget Cars clicked");

    BCars.style.display = chkB.checked ? "block" : "none";
     PCars.style.display =  "none";
     BrCars.style.display = "none";
     //Def
     Def.style.display = "none";

}

function ShowHideDiv1() {

    var chkP = document.getElementById("chkP");

    // var BCars = document.getElementById("BCars");
    var PCars = document.getElementById("PCars");
    // var BrCars = document.getElementById("BrCars");
    console.log("Performance Cars clicked");

    BCars.style.display = "none";
    PCars.style.display = chkP.checked ? "block" : "none";
    BrCars.style.display = "none";
    //Def
    Def.style.display = "none";

}

function ShowHideDiv2() {

    var chkBr = document.getElementById("chkBr");

    // var BCars = document.getElementById("BCars");
    // var PCars = document.getElementById("PCars");
    var BrCars = document.getElementById("BrCars");
    console.log("Brand Cars clicked");

     BCars.style.display =  "none";
     PCars.style.display = "none";
    BrCars.style.display = chkBr.checked ? "block" : "none";
    //Def
    Def.style.display = "none";

}
