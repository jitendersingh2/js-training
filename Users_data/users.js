function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach(function (post) {
                output += `
                <div class="well">
                <h3 class="text-primary">${post.name}</h3>
                <h5>${post.email}</h5>
                <p class="text-info">${post.website}</p></div>`;
            });
            document.getElementById("data").innerHTML = output;
        })
}