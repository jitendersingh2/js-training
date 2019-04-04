function fetchApi(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((imag)=>{
      let result="";
      imag.forEach(elemen => {
          result+=`
          <div class="well">
          <ol>
         <ul><strong>${elemen.name}</strong>
         <ul>${elemen.email}</ul>
         <ul>${elemen.website}</ul></ol></div>`;      
      })
      document.getElementById("demo").innerHTML=result;

  });
}