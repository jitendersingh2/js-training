function getApi() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (post) {
                if (post.id < 19) {
                    output += `  
                <div data-id=${post.id} onclick="getDetails(${post.id})"><a href="#"><img src=${post.thumbnailUrl}></a>        
                <p>${post.title}</p></div>`
                }
            });
            document.getElementById("data").innerHTML = output;
        })
};

function getDetails(id) {
    alert(id);
    
    fetch('https://jsonplaceholder.typicode.com/photos/')
        .then((res) => {
            console.log("wleknbh");
            console.log(res.json());
            return res.json();
        })
        
        .then((data) => {
            let output = '';
            data.forEach(function (post) {
                if (post.id === id) {
                    alert("HI");
                    output += `  
            <img src=${post.thumbnailUrl}>      
            <p>${post.title}</p>`
                }   
            });

});

}