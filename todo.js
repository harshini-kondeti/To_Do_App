const input=document.querySelector("#input");
const addbutton=document.querySelector("#addBtn");
const output=document.querySelector("#output");
addbutton.addEventListener('click',()=>{
    if(input.value==''){
      window.alert("PLEASE ENTER THE TASK");
    }
    
    const outtask= document.createElement('div');
    outtask.classList.add('div-style');
    output.appendChild(outtask);

    const text=document.createElement('text');
    text.id='task';
    text.innerHTML=input.value;
    outtask.appendChild(text);   
   


    const done=document.createElement('button');
    done.id='done';
    done.innerHTML="done";
    outtask.appendChild(done);
    done.addEventListener('click',()=>{
       text.innerHTML="<p class='strikethrough'>"+text.innerHTML+"</p>";
    });

    const deletebtn=document.createElement('button');
    deletebtn.id='delete';
    deletebtn.innerHTML="delete";
    outtask.appendChild(deletebtn);
    
    deletebtn.addEventListener('click',()=>{
        const parent=deletebtn.parentElement;
        parent.parentElement.removeChild(parent);

    });

    input.value="";
});