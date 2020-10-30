function contactSubmitHandler(event){
    event.preventDefault();
  
    let name = document.getElementById("name").value; 
    let email = document.getElementById("email").value; 
    let phone = document.getElementById("phone").value; 
    let city = document.getElementById("city").value; 
    let designation = document.getElementById("designation").value;
    let company = document.getElementById("company").value; 
    
  
  
    let myData = `name=${name}&phone=${phone}&email=${email}&city=${city}&designation=${designation}&company=${company}`;
  
    console.log(myData);
   // AJAX logic begins 
    var ajaxReq = new XMLHttpRequest();
    ajaxReq.onreadystatechange = function(){
      if(this.readyState == 4 && this.response ){
        console.log(JSON.parse(this.response));
        let resp = JSON.parse(this.response);
    }
  }
  
    ajaxReq.open("POST", "https://jsonplaceholder.typicode.com/users", true);
    ajaxReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxReq.send(myData);
    alert("Hii "+ name +" ! Will try to connect you soon");
  }