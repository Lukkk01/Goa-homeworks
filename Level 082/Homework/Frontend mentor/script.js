const searchBtn = document.getElementById('search-btn');
const usernameInput = document.getElementById('username');

searchBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        fetchUser(username);
    }
});

async function fetchUser(username) {
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('User not found');
        const data = await response.json();
        updateProfile(data);
    } catch (error) {
        alert(error.message);
    }
}

function updateProfile(data) {
    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').textContent = data.name || data.login;
    document.getElementById('login').textContent = '@' + data.login;
    document.getElementById('join-date').textContent = `Joined ${new Date(data.created_at).toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'})}`;
    document.getElementById('bio').textContent = data.bio || 'This profile has no bio';
    document.getElementById('repos').textContent = data.public_repos;
    document.getElementById('followers').textContent = data.followers;
    document.getElementById('following').textContent = data.following;
    document.getElementById('location').textContent = data.location || 'Not Available';
    document.getElementById('twitter').textContent = data.twitter_username || 'Not Available';
    document.getElementById('blog').textContent = data.blog || 'Not Available';
    document.getElementById('company').textContent = data.company || 'Not Available';
}