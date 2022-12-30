let element=document.getElementsByClassName("codeCount");

let codeforceMax=document.getElementById("codeforce-max-rating");
let codeforceCurr=document.getElementById("codeforce-curr-rating");

let leetSolved=document.getElementById("leet-solved");
let leetEasy=document.getElementById("leet-easy");
let leetMedium=document.getElementById("leet-medium");
let leetHard=document.getElementById("leet-hard");

let codechefCurr=document.getElementById("codechef-curr-rating");
let codechefMax=document.getElementById("codechef-max-rating");
let codechefStar=document.getElementById("codechef-star");


const leetcode=(id)=>{

     let ajax=new XMLHttpRequest();

     ajax.onload=()=>{
         let data=new DOMParser().parseFromString(ajax.responseText,"text/html");
        (leetSolved!=null) && (leetSolved.textContent=data.getElementsByClassName("text-[24px]")[0].textContent);
        (leetEasy!=null) && (leetEasy.textContent=(data.getElementsByClassName("space-y-2")[0].textContent).split("/")[0].substring(4));
        (leetMedium!=null) && (leetMedium.textContent=(data.getElementsByClassName("space-y-2")[1].textContent).split("/")[0].substring(6));
        (leetHard!=null) && (leetHard.textContent=(data.getElementsByClassName("space-y-2")[2].textContent).split("/")[0].substring(4));

     }

     ajax.open("GET","https://sanjeevapi.onrender.com/leetcode?name="+element[id].getAttribute("name"));
     ajax.send();
}


const codechef=(id)=>{
      
    let ajax=new XMLHttpRequest();

     ajax.onload=()=>{
         let data=new DOMParser().parseFromString(ajax.responseText,"text/html");
         (codechefCurr!=null) && (codechefCurr.textContent=data.getElementsByClassName("rating-number")[0].textContent);
        (codechefStar!=null) && (codechefStar.textContent=(data.getElementsByClassName("rating-star")[0].childNodes.length));
         let str=(data.getElementsByClassName("rating-star")[0].nextElementSibling.nextElementSibling.textContent.slice(16));
        (codechefMax!=null) && (codechefMax.textContent=str.substring(0,str.length-1));

     }

     ajax.open("GET","https://sanjeevapi.onrender.com/codechef?name="+element[id].getAttribute("name"));
     ajax.send();

}

const codeforce=(id)=>{
    
    let ajax=new XMLHttpRequest();

    ajax.onload=()=>{
        let data=new DOMParser().parseFromString(ajax.responseText,"text/html");
        (codeforceCurr!=null) && (codeforceCurr.textContent=data.getElementsByClassName("user-green")[6].textContent);
        (codeforceMax!=null) && (codeforceMax.textContent=data.getElementsByClassName("smaller")[0].childNodes[3].textContent);
       
    }

    ajax.open("GET","https://sanjeevapi.onrender.com/codeforce?name="+element[id].getAttribute("name"));
    ajax.send();
}


try{ 


  
    
   for(let i=0;i<element.length;i++){

         if(element[i].getAttribute("host")=="leetcode")
         leetcode(i);
         
         else if(element[i].getAttribute("host")=="codechef")
         codechef(i);

         else if(element[i].getAttribute("host")=="codeforce")
         codeforce(i);

   }

    

}

catch(err){
    console.log(err);
}