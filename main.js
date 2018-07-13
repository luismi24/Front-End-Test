//python -m http.server 1337


//search repositories
//https://api.github.com/search/repositories?q=user:username

var api = 'https://api.github.com/search/repositories?q=user:';
var username = document.getElementById('username');
const div = document.getElementById('personalInfo');
const ul = document.getElementById('list')
function createNode(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.appendChild(element);
}

function userInput() {
    var url = api + username.value;
    fetch(api + username.value)
    .then((resp) => resp.json())
    .then(function(data){
        console.log(data.items);
        let users = data.items[0];
            let img = createNode('img'),
            span = createNode('span');
            let personal = users.owner;
            img.src=personal.avatar_url;
            span.innerHTML=personal.login;
            
            append(div, img);
            append(div, span);
            
    })
    repositoriesInput();
}


function repositoriesInput() {
    var url = api + username.value;
    fetch(api + username.value)
    .then((resp) => resp.json())
    .then(function(data){
        console.log(data.items);
        let users = data.items;
        return users.map(function(user){
            
            let img = createNode('img'),
            span = createNode('span');
            console.log(user);
            
            span.innerHTML='Repo: '+ user.name;
            
            append(ul, span);
            
        })
    })
};


