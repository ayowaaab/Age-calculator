const input= document.querySelectorAll(".all-inputs input");
const input_required= document.querySelectorAll(".required");
const arrow_btn= document.querySelector(".arrow img");
const result_span= document.querySelectorAll(".result span");
const date = new Date();


arrow_btn.addEventListener("click",(e)=>{
 var test=0;
    input.forEach((element,index) => {
        if(element.value==""){
            test=1;
             input_required[index].style.display="block";
             element.style.borderColor="hsl(0, 100%, 67%)";
        }
        else{
            input_required[index].style.display="none";
            element.style.borderColor="hsl(0, 0%, 86%)";
        }
    });

    if((input[0].value >31)||(input[0].value <1)){
        test=1;
        input_required[0].style.display="block";
        input[0].style.borderColor="hsl(0, 100%, 67%)";
        }
    else{
        input_required[0].style.display="none";
        input[0].style.borderColor="hsl(0, 0%, 86%)";
    }

    if((input[1].value >12)||(input[1].value <1)) { 
        test=1;
        input_required[1].style.display="block";
        input[1].style.borderColor="hsl(0, 100%, 67%)";
    }
    else{
    input_required[1].style.display="none";
    input[1].style.borderColor="hsl(0, 0%, 86%)";
    }

    
    if((input[2].value >date.getFullYear())||(input[2].value <1)){   
        test=1;
        input_required[2].style.display="block";
        input[2].style.borderColor="hsl(0, 100%, 67%)";
        }
    else{
        input_required[2].style.display="none";
        input[2].style.borderColor="hsl(0, 0%, 86%)";
    }
    if (test)return;

result_span[0].textContent=date.getFullYear() - input[2].value +" ";
result_span[1].textContent=date.getMonth()+1-input[1].value+" ";
result_span[2].textContent=date.getDate()-input[0].value +" ";

    if(result_span[2].textContent<0){
        result_span[1].textContent--;
        result_span[2].textContent=31+Number(result_span[2].textContent);
    }

    if(result_span[1].textContent<0){
        result_span[0].textContent--;
        result_span[1].textContent=12+Number(result_span[1].textContent);
    }

})

