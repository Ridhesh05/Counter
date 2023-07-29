const countValue=document.querySelector('#counter');
const increase = () =>{
     let value=parseInt(countValue.innerText);
     value=value+1;
     countValue.innerText  = value; 
};
const decrease = () =>{
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText  = value; 
};

const reset= () =>
{
    let value=parseInt(countValue.innerText);
     value=0;
    countValue.innerText  = value; 
};