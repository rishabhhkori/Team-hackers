async function checkNews(){

let news=document.getElementById("news").value;

let apiKey="";

let url=`https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${news}&key=${apiKey}`;

let response=await fetch(url);

let data=await response.json();

if(data.claims){

let rating=data.claims[0].claimReview[0].textualRating;
let source=data.claims[0].claimReview[0].publisher.name;

document.getElementById("result").innerText=
"Result: "+rating+" | Source: "+source;

}
else{

document.getElementById("result").innerText=
"No fact check found";

}

}
