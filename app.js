function Percent(x){
    let bll = document.getElementById('TBllamnt');
    let Prsn = document.getElementById('PeNr');
    let amt = x*100/bll.value;
    let amt1 = amt/Prsn.value;
    let amt2 = (parseInt(bll.value)+parseInt(amt))/Prsn.value;
    document.getElementById('TpAt').value=amt1;
    document.getElementById('BlAt').value=amt2;
    if(Prsn.value==""||Prsn.value==null){
        Prsn.style.border="1px solid red";
        document.getElementById('TpAt').value="";
        document.getElementById('BlAt').value="";
        document.getElementById('ErrMsg').style.display='block';
    }else{
        Prsn.style.border="none";
        document.getElementById('ErrMsg').style.display='none';
    }
}
function Reset(){
    const Inputs = document.querySelectorAll(".Inpts");
    Inputs.forEach((x)=>{x.value=""})
}