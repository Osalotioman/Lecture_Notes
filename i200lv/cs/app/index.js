var snippets = ``
var snippets_json = [
  {
    "snippet" : "Home",
    "url" : "../../index.html",
    "info" : ""
  },
  {
    "snippet" : "Fortran",
    "url" : "fortran/index.html",
    "info" : "<br>Contribute by uploading your code to the github repo. See link below."
  },
  {
    "snippet" : "Pascal",
    "url" : "pascal/index.html",
    "info" : "<br>Contribute by uploading your code to the github repo. See link below."
  }
]

for(snippets_data of snippets_json){
  snippets += `
        <div class="max-w-md bg-white p-4 rounded-lg shadow-md">
            <ol id="notes_on_mth210(201)">
                <li class="mb-4">
                    <a href="${snippets_data["url"]}"
                        class="block text-blue-600 hover:underline">
                        <span class="font-bold mb-4 text-4xl">${snippets_data["snippet"]}</span>
                    </a>
                    ${snippets_data["info"]}
                </li>
                <!-- Add more 200lv lecture notes here. -->
            </ol>
        </div>
        <br>
        <br>
  `
}

$("#pages").html(snippets);