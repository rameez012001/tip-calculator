function Percent(x){
    let bll = document.getElementById('TBllamnt');
    let Prsn = document.getElementById('PeNr');
    let amt = (x/100)*bll.value;
    let amt1 = amt/Prsn.value;
    let amt2 = (parseInt(bll.value)+parseFloat(amt))/Prsn.value;
    document.getElementById('TpAt').innerHTML="$"+amt1.toFixed(2);
    document.getElementById('BlAt').innerHTML="$"+amt2.toFixed(2);
    if(Prsn.value==""||Prsn.value==null){
        Prsn.style.border="1px solid red";
        document.getElementById('TpAt').innerHTML="$0.00";
        document.getElementById('BlAt').innerHTML="$0.00";
        document.getElementById('ErrMsg').style.display='inline';
    }else{
        Prsn.style.border="none";
        document.getElementById('ErrMsg').style.display='none';
    }
}
function Reset(){
    const Inputs = document.querySelectorAll(".Inpts");
    Inputs.forEach((x)=>{x.value=""});
    const Amnts = document.querySelectorAll(".Amnts1");
    Amnts.forEach((y)=>{y.innerHTML="$0.00"});    
    document.getElementById('PeNr').style.border="none";
    document.getElementById('ErrMsg').style.display='none';
}