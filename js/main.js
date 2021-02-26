// Mian Vars
let theInbutt = document.querySelector(".rpos_contaner .git_repos input"),
  gitButton = document.querySelector(".rpos_contaner .git_repos button"),
  reposData = document.querySelector(".rpos_contaner .show_data");

gitButton.onclick = function() {
  gitRepo();
};
// Git Repo Function
function gitRepo() {
  if (theInbutt.value == "") {
    // if Value is Empty
    reposData.innerHTML =
      "<span class'noVal'>Please Write The Repo User Name</span>";
  } else {
    fetch("https://api.github.com/users/Ebn-Omier/repos")
      .then(response => response.json())

      .then(repos => {
        // Empty data Div
        reposData.innerHTML = "";

        // // looping on repos.
        repos.forEach(repo => {
          // cearte the main Div
          let minReposDiv = document.createElement("div");

          // Create repo Name
          let repoName = document.createTextNode(repo.name);

          // append the Text to the min div
          minReposDiv.appendChild(repoName);

          // create Repo URL
          let repo_URL = document.createElement("a");
          // creat URL Text
          let repoURLText = document.createTextNode("Visit");

          // Appens URL Text
          repo_URL.appendChild(repoURLText);

          // Add thr "href"
          repo_URL.href = `https://github.com/Ebn-Omier/${repo.name}`;

          // set Attribute Blunk.
          repo_URL.setAttribute("target", "_blank");

          // Append thr url to the minDiv
          minReposDiv.appendChild(repo_URL);

          // Append thr min Div to the contaner
          reposData.appendChild(minReposDiv);
        });
      });
  }
  // console.log("hhhhh");
}
