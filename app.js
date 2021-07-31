function Percent(x){
    let bll = document.getElementById('TBllamnt');
    let Prsn = document.getElementById('PeNr');
    let amt = x*100/bll.value;
    let amt1 = amt/Prsn.value;
    let amt2 = parseInt(bll.value)+parseInt(amt);
    document.getElementById('TpAt').value=amt1;
    document.getElementById('BlAt').value=amt2;
}
function Reset(){
    const Inputs = document.querySelectorAll(".Inpts");
    Inputs.forEach((x)=>{x.value=""})
}
