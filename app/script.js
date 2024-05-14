var levels = ``
var levels_json = [
  {
    "level" : "100 Level",
    "url" : "i100lv.html",
    "info" : "<br>Currently no writers(People to write scan and upload their notes). If interested message me on WhatsApp (08106052538)."
  },
  {
    "level" : "200 Level",
    "url" : "i200lv.html",
    "info" : "<br>Need more writers(People to write scan and upload their notes). If interested message me on WhatsApp (08106052538)."
  }
]

for(levels_data of levels_json){
  levels += `
        <div class="max-w-md bg-white p-4 rounded-lg shadow-md">
            <ol id="notes_on_mth210(201)">
                <li class="mb-4">
                    <a href="${levels_data["url"]}"
                        class="block text-blue-600 hover:underline">
                        <span class="font-bold mb-4 text-4xl">${levels_data["level"]}</span>
                    </a>
                    ${levels_data["info"]}
                </li>
                <!-- Add more 200lv lecture notes here. -->
            </ol>
        </div>
        <br>
        <br>
  `
}

$("#levels").html(levels);