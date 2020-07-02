async function listRepos(username) {
    var repos = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
        .then(res => res.json())
        .catch(error => console.error(error))

    var markup = repos.map(
        repo => {
            return `
            <li>
                <a href="${repo.html_url}">${repo.name}</a>
                (${repo.stargazers_count})
            <li>
        `
        }
    )
        .join('');

    var content = document.getElementById('content');

    content.innerHTML = `<ul>${markup}</ul>`;
};

listRepos("jlengstorf");