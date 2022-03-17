const RECENT_SEARCH_KEY = 'recent_searches'

async function customFetch (url) {
  const response = await fetch(url)
  const data = await response.json()

  return data
}

function addRecentSearchHTML (username) {
  const resultsDiv = document.querySelector('div.results')

  resultsDiv.innerHTML += `<div class="me-3">
  <img class="rounded-circle" width="40px" height="40px" src="https://github.com/${username}.png" />

  <a href="#" onclick="searchUser('${username}')">${username}</a>
</div>`
}

function getAllRecentSearch () {
  const recentSearches = localStorage.getItem(RECENT_SEARCH_KEY)

  if (recentSearches) {
    const recentSearchesArray = JSON.parse(recentSearches)

    recentSearchesArray.forEach(recentSearch => {
      addRecentSearchHTML(recentSearch)
    })
  }
}

function saveSearchHistory (username) {
  const recentSearches = localStorage.getItem(RECENT_SEARCH_KEY)

  if (!recentSearches) {
    addRecentSearchHTML(username)

    return localStorage.setItem(RECENT_SEARCH_KEY, JSON.stringify([username]))
  }

  const recentSearchesArray = JSON.parse(recentSearches)

  if (!recentSearchesArray.includes(username)) {
    localStorage.setItem(RECENT_SEARCH_KEY, JSON.stringify([...recentSearchesArray, username]))
    addRecentSearchHTML(username)
  }
}

function setGithubData (user, repos) {
  const githubFullname = document.getElementById('github_fullname')
  const githubUsername = document.getElementById('github_username')
  const githubBio = document.getElementById('github_bio')
  const githubPhoto = document.getElementById('github_photo')
  const githubRepos = document.getElementById('github_repos')

  githubFullname.textContent = user.name
  githubUsername.textContent = user.login
  githubBio.textContent = user.bio
  githubPhoto.src = user.avatar_url

  let reposLi = ''

  repos.forEach((repo) => {
    reposLi += `<li><a target="_blank" href="${repo.html_url}">${repo.name}</a> - ${repo.description}</li>`
  })

  githubRepos.innerHTML = reposLi
}

// eslint-disable-next-line no-unused-vars
async function searchUser (username) {
  if (!username) {
    const input = document.getElementById('input_username')
    username = input.value.trim()
  }

  if (!username) {
    return alert('You need to insert the username from Github')
  }

  const user = await customFetch(`https://api.github.com/users/${username}`)
  const repos = await customFetch(`https://api.github.com/users/${username}/repos?per_page=100`)

  setGithubData(user, repos)
  saveSearchHistory(username)
}

getAllRecentSearch()
