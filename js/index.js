document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
           e.preventDefault()
        console.log(e.target.search.value)
        getUser(e.target.search.value)
    })

function getUser(name) {
    console.log(name)
    fetch(`https://api.github.com/search/users?q=${name}`)
    .then((response) => response.json())
    .then((json) => postUser(json.items[0]))
        
}

function postUser(user) {
    console.log(user)
   let list = document.getElementById('user-list')
   let div = document.createElement('div')
  let h1 = document.createElement('h1')
  let image = document.createElement('img')
  let a = document.createElement('a')
  a.href = user.htmlurl
  a.innerHTML = `${user.login} githubpage`
  div.appendChild(a)
   image.src = user.avatar_url
  div.appendChild(image)
  h1.innerHTML = user.login
  h1.addEventListener('click', (e) => { 
    fetch(`https://api.github.com/users/${user.login}/repos`)
    .then((response) => response.json())
    .then((json) => {console.log(json)
    
    })

})
  div.appendChild(h1)
   list.appendChild(div)
   }


//let a = document.createElement('a')


})




// fetch('https://api.github.com/search/users?q=octocat')
// .then((response) => response.json())

// let form = document.getElementById('github-form')
// let form.search.value

//.addEventListener('submit', (e) => {
//        e.preventDefault()
//         console.log(e)
// })