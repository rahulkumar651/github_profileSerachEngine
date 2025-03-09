
let user = document.getElementById('usrId')

async function fetchUser(userName) {
    let response = await fetch(`https://api.github.com/users/${userName}`)
    let result = await response.json();
    displayUser(result)

}


function displayUser({avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url
}){

    if(!avatar_url){
        document.getElementById('userProfile').innerHTML = `<h1>user not found</h1>`
        return 
    }
    if (!bio){
        bio=''
    }
    

    document.getElementById('userProfile').innerHTML = `
    <div class="userInfo">
    
    <img src=${avatar_url} class="userImg" alt="">
    <div class="userDetails">
        <p class="userName">${name}</p>
        <p class="userBio">${bio}</p>
    </div>
    
</div>
<div class="userFollow">
    <div class="Follower">
        <div  class="Repo">
            <p>Follower</p>
            <p>${followers}</p>
        </div>
        <div class="Repo">
            <p>Follwing</p>
            <p>${following}</p>
        </div>
        <div class="Repo">
            <p>Repo</p>
            <p>${public_repos}</p>
        </div>
    </div>
    <a href=${html_url} target='_black' class="visitprofile">
    <div class="visitprofile">
        view profile
    </div>
    </a>

</div>

`

}

document.getElementById('btn'), addEventListener('click', () => {
    let userID = user.value;
    document.getElementById('userProfile').classList.remove('secondHidden')
    document.getElementById('userProfile').classList.add('second_div')
    fetchUser(userID)
})

