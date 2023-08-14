

document.getElementById('btn').addEventListener('click',function(){
    const inputField= document.getElementById('inputField');
    const inputFieldString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldString);
    const claculation = 70/100;
    inputField.value='';
    const discField = document.getElementById('disc30');
    const discCode = discField.value;
    const textArea = document.getElementById('text');
    // const setOutput = textArea.innerText;
    

    if(discCode == '101090'){
        const afterDiscount = inputFieldAmount*claculation;
        
        const setOutput= textArea.innerText= afterDiscount;
        
    }else{
        const setOutput1=textArea.innerText= inputFieldAmount;
        
    }
   
   

   
    // const setOutput = textArea.innerText=afterDiscount;
    

    
})