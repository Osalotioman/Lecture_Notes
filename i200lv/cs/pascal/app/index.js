window.onload = function(){
  //For i200lv_notes.html
  var code = ``;
  let predefined_code_num = 0;
  let predefined_code_count = 0;
  //alert(notes_json.length)
  for(code_data of code_json){
    if(predefined_code_num==code_json.length-predefined_code_count){
      break;
    }
    code += `<tr><td>
          <div class="max-w-md bg-white p-4 rounded-lg shadow-md">
              <ol id="notes_on_mth210(201)">
                  <li class="mb-4">
                      <a href="javascript:void(0);" onclick="view_code('${code_data["link"]}')"
                          class="block text-blue-600 hover:underline break-words whitespace-normal">
                          <div class="text-lg font-medium mb-2 text-3xl">${code_data["title"]}</div>
                          <div class="font-bold">${code_data["date"]}</div>
                          <div>${code_data["info"]}</div>
                          <div><b style="color:green;">${code_data["source"]}</b></div>
                      </a>
                  </li>
                  <!-- Add more 200lv lecture notes here. -->
              </ol>
          </div>
    </td></tr>`
    ++predefined_code_count;
  }
  code += predefined_code;
  //alert(predefined_notes_count)
  $("#code_snippets").html(code);
  //console.log(notes)
}
function view_code(url){
    let code = document.getElementById("code");
    let code_container = document.getElementById("code_container");
    code.src = url;
    code_container.style.display = "block";
}
function closeContainer() {
    document.getElementById("code_container").style.display = "none";
}