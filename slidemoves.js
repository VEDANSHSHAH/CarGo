var first=document.getElementById("firstpair")
var second=document.getElementById("secondpair")

second.style.display="none"
first.style.display="block"


function changeclicked()
{
  console.log("change pairs clicked");
    second.style.display="block";
    first.style.display="none";
}

function backclicked()
{
    console.log("back clicked");
    second.style.display="none";
    first.style.display="block";
}
