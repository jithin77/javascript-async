$(document).ready(function () {
    console.log("start")
    const posturl = "https://jsonplaceholder.typicode.com/posts";
    const userurl ="https://jsonplaceholder.typicode.com/users";
    const data = getItems(posturl,(posts)=>{
        console.log("returned posts", posts);
        printPost(posts);
        getItems(userurl,(users)=>{
            console.log("returned users",users);
            printUsers(users);
        })
    }); 
})

function getItems(url,callback) {   

    $.ajax({
        async: true,
        url: url, 
        method: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        },
        success: function (data) {
            callback(data)
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    })
}

function printPost(posts){
let postul = '<ul>'
    posts.map((post)=>{
        postul += `<li>${post.title}</li>`
    })
    postul = postul + '</ul>'
    console.log(postul);
    $('.post-container').append(postul);

}

function printUsers(users){
let userul = '<ol>'
    users.map((user)=>{
        userul += `<li>${user.name}</li>`
    })
    userul = userul + '</ol>'
    console.log(userul);
    $('.user-container').append(userul);

}