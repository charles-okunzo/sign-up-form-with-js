const body= document.body;

document.title="Project One";

const heading=document.getElementById("heading");

heading.innerHTML="<u>SIGN UP</u>"


const submit= document.getElementById("submit");

submit.addEventListener("submit", ()=>{
    event.preventDefault()
});

submit.onclick =()=>{
    const enterged= document.getElementById("enterged");
    const gender= document.form.gender.value;
    if(gender==""){
        alert("Err:: Select gender.");
    } else{
        const email= document.getElementById("email").value;
        const username= document.getElementById("name").value;
        const form= document.getElementById("form");
        const show= document.getElementById("show");
        show.textContent= "Welcome " + username + ` Continue as ${email}`;
        form.style.display="none";
         
        
        localStorage.setItem("email", email);
        const myItem= localStorage.getItem("email");
        body.append("email");
    
    }
    
  
};

