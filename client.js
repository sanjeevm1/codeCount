let element=document.getElementsByClassName("codeCount");

const leetcode=(id)=>{

     let ajax=new XMLHttpRequest();

     ajax.onload=()=>{
         let data=new DOMParser().parseFromString(ajax.responseText,"text/html");
         element[id].childNodes[0].textContent=data.getElementsByClassName("text-[24px]")[0].textContent;
         element[id].childNodes[1].textContent=(data.getElementsByClassName("space-y-2")[0].textContent).split("/")[0].substring(4);
         element[id].childNodes[2].textContent=(data.getElementsByClassName("space-y-2")[1].textContent).split("/")[0].substring(6);
         element[id].childNodes[3].textContent=(data.getElementsByClassName("space-y-2")[2].textContent).split("/")[0].substring(4);

     }

     ajax.open("GET","https://sanjeevapi.onrender.com/leetcode?name="+element[id].getAttribute("name"));
     ajax.send();
}


const codechef=(id)=>{
      
    let ajax=new XMLHttpRequest();

     ajax.onload=()=>{
         let data=new DOMParser().parseFromString(ajax.responseText,"text/html");
         element[id].childNodes[0].textContent=data.getElementsByClassName("rating-number")[0].textContent;
         element[id].childNodes[1].textContent=(data.getElementsByClassName("rating-star")[0].childNodes.length)
         let str=(data.getElementsByClassName("rating-star")[0].nextElementSibling.nextElementSibling.textContent.slice(16));
         element[id].childNodes[2].textContent=str.substring(0,str.length-1);
         

     }

     ajax.open("GET","https://sanjeevapi.onrender.com/codechef?name="+element[id].getAttribute("name"));
     ajax.send();

}


try{ 


  
    
   for(let i=0;i<element.length;i++){

         if(element[i].getAttribute("host")==1){
             leetcode(i);
         }

         else if(element[i].getAttribute("host")==2){
            codechef(i);
        }
   }

    

}

catch(err){
    console.log(err);
}