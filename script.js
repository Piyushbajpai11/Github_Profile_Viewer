let user = document.getElementById("userID");

const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
    history.go(0);
}

refreshBtn.addEventListener("click", handleClick);





async function fetchUser(username) {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let result = await response.json();

    displayUser(result);



}
document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("userProfile").innerHTML = `<span class="loader"></span>`;
    let userId = user.value;
    fetchUser(userId);
})


// https://api.github.com/users/



function displayUser({
    name,
    bio,
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    login,
    location,
    created_at,
    updated_at,
    company
}) {
    // const {
    //     name,
    //     bio,
    //     avatar_url,
    //     followers,
    //     following,
    //     public_repos
    // } = result;

    if (!avatar_url) {
        document.getElementById("userProfile").innerHTML = `<h1>User Not Found</h1>`;
        return;
    }
    if (!bio) {
        bio = '';
    }
    document.getElementById(
        "userProfile"
    ).innerHTML = `
                 <div class="secondDiv" id="userProfile">

            <div class="userInfo">
                <img src="${avatar_url}" alt="" class="userImg">
                <div class="Details">
                    <p><i class="fa-solid fa-location-dot"></i> ${location}</p>
                    <p class="userBio">FullStack Developer</p>
                    <p class="cmp">Company Name: ${company}</p>
                    <p><i class="fa-regular fa-clock"></i> Last Updated at: ${updated_at}</p>
                </div>
            </div>

            <div class="userDetails">
                <p class="userName">${name}</p>
                <p class="login">@${login}</p>
                <p class="join"></i> Joined at: ${created_at}</p>
            </div>

        </div>

        <div class="thirdDiv">
            <div class="userFollow">
                <div class="Follower">
                    <div class="repo">
                        <img src="images/icons8-users-50.png" alt="">
                        <p>Follower</p>
                        <p>${followers}</p>
                    </div>
                    <div class="repo">
                        <img src="images/icons8-following-50.png" alt="">
                        <p>Following</p>
                        <p>${following}</p>
                    </div>
                    <div class="repo">
                        <img src="images/icons8-repository-50.png" alt="">
                        <p>Repo</p>
                        <p>${public_repos}</p>
                    </div>
                </div>
                <button class="VisitProfile">
                    <a href="${html_url}" target="_blank">Visit Profile</a>
                </button>
            </div>
        </div>
    `
}