 function fetchApi(){
     fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then((imag)=>{
       let result="";
     imag.forEach(elemen => {
           result+=`
           <tr>
           <td>${elemen.id}</td>
           <td>${elemen.name}</td>
           <td>${elemen.username}</td>
           <td>${elemen.email}</td>
           <td>${elemen.phone}</td>
           <td>${elemen.website}</td></tr>`;      
       })
       document.getElementById("demo").innerHTML=result;

   });
 }