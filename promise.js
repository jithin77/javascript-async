$(document).ready(function () {
    console.log("start")
    const posturl = "https://jsonplaceholder.typicode.com/posts";
    const userurl = "https://jsonplaceholder.typicode.com/users";
    getItems(posturl)
        .then(posts => printPost(posts))
        .then(() => getItems(userurl))
        .then(users => printUsers(users))
        .then(()=> console.log("End"))
})

function getItems(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            async: true,
            url: url,
            method: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose"
            },
            success: function (data) {
                resolve(data)
            },
            error: function (error) {
                reject(error)
            }
        })
    })
}

function printPost(posts) {
    return new Promise((resolve, reject) => {
        let postul = '<ul>'
        posts.map((post) => {
            postul += `<li>${post.title}</li>`
        })
        postul = postul + '</ul>'
        resolve($('.post-container').append(postul));
    })
}

function printUsers(users) {
    return new Promise((resolve, reject) => {
        let userul = '<ol>'
        users.map((user) => {
            userul += `<li>${user.name}</li>`
        })
        userul = userul + '</ol>'
       resolve($('.user-container').append(userul));
    })
}