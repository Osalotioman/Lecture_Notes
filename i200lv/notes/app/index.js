//window.onload = function(){
  //For i200lv_notes.html
  var notes = ``;
  //let predefined_notes_num = 66;
  let predefined_notes_num = 0;
  let predefined_notes_count = 0;
  //alert(notes_json.length)
  for(notes_data of notes_json){
    if(predefined_notes_num==notes_json.length-predefined_notes_count){
      break;
    }
    if(notes_data["PDF"]!="i200lv_notes.html"){
    notes += `<tr><td>
          <div class="max-w-md bg-white p-4 rounded-lg shadow-md">
              <ol id="notes_on_mth210(201)">
                  <li class="mb-4">
                      <a href="${notes_data["PDF"]}"
                          class="block text-blue-600 hover:underline break-words whitespace-normal">
                          <h3 class="text-lg font-medium mb-2 text-3xl">${notes_data["Course"]}</h3>
                          <span class="font-bold">${notes_data["Date"]}</span>
                          ${notes_data["Info"]}
                          ${notes_data["Lecturer"]}
                          ${notes_data["Writer"]}
                          <b style="color:green;">${notes_data["Uploader"]}</b>
                      </a>
                  </li>
                  <!-- Add more 200lv lecture notes here. -->
              </ol>
          </div>
    </td></tr>`
    ++predefined_notes_count;}
  }
  notes += predefined_notes;
  //alert(predefined_notes_count)
  $("#i200lv_notes").html(notes);
  //console.log(notes)
//}