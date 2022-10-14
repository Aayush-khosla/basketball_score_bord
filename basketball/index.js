let s1=document.getElementById("ls")
let s2=document.getElementById("rs")
let leftsc=0
let rightsc=0
function fun1l(){
    leftsc +=1
   // s1.innerHTML=leftsc
   console.log(s1)
   document.getElementById("ls").innerHTML=leftsc
    
}
function fun2l(){
    leftsc +=2
    console.log(leftsc)
    //s1.innerHTML=leftsc
    document.getElementById("ls").innerHTML=leftsc
    
}
function fun3l(){
    leftsc +=3
    console.log(s1)
    //s1.innerHTML=leftsc
    document.getElementById("ls").innerHTML=leftsc
    
}
function fun1r(){
   rightsc+=1
   console.log(s2)
  //s2.innerHTML=rightsc
  document.getElementById("rs").innerHTML= rightsc
}
function fun2r(){
    rightsc+=2
    console.log(s2)
    document.getElementById("rs").innerHTML= rightsc
   //s2.innerHTML=rightsc
 }
 function fun3r(){
    rightsc+=3
    console.log(s2)
    document.getElementById("rs").innerHTML= rightsc
   // s2.innerHTML=rightsc
 }