// Mian Vars
let theInbutt = document.querySelector(".rpos_contaner .git_repos input"),
  gitButton = document.querySelector(".rpos_contaner .git_repos button"),
  reposData = document.querySelector(".rpos_contaner .show_data");

gitButton.onclick = function () {
  gitRepo();
};
// Git Repo Function
function gitRepo() {
  if (theInbutt.value == "") {
    // if Value is Empty
    reposData.innerHTML =
      "<span class'noVal'>Please Write The Repo User Name</span>";
  } else {
    var myRecust = new XMLHttpRequest();
    myRecust.open(
      "GET",
      `https://api.github.com/users/${theInbutt.value}/repos`
    );
    myRecust.onload = function name() {
      var myData = JSON.parse(myRecust.responseText);
      reposData.innerHTML =
        `<span class="repo_Count"> Ther is <b>${myData.length}</b> Repositories</span>` +
        myData
          .map(function (repo) {
            return `
        <div class="RepoEnFo">
          <span class="repoName">${repo.name}</span>
          <span class="time">
            id : <b>${repo.id}</b><br>
            Created at : <b>${repo.created_at}</b><br>
            by : <b>${repo.owner.login}</b><br>
            Praunch : <b>${repo.default_branch}</b> <br>
            clone url : <b><a href="${repo.clone_url}">${repo.clone_url}</a></b>
          </span>
          <p class="roDiscrepition">${repo.description}</p>
          <div class="down">
            <span> <b>Stars</b></br> ${repo.stargazers_count}</span>
            <span> <b>Forks</b></br> ${repo.forks}</span>
            <span> <b>Open Issues</b></br> ${repo.open_issues}</span>
            <span> <b>Watchers</b></br> ${repo.watchers}</span>
            <div class="clearFix"></div>
          </div>
          <div class="botLinks">
            <a href="${
              repo.html_url
            }" target="_blank" class="vi_repo">Visit Git Hup Repo</a>
            ${
              // Show the Visit button if there is a webpage.
              (repo.homepage === "") & (repo.homepage === null)
                ? `<span class="on_HomPage">This Repo has Not Home Page </span>`
                : `<a href="${repo.homepage}" target="_blank" class="vi_site">Visit The Site</a>`
            }
            <div class="clearFix"></div>
          </div>
        </div> `;
          })
          .join("");
    };
    myRecust.send();
  }
}
