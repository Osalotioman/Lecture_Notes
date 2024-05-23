for(uni_data of uni_json){
  uni_data.des = uni_data.des === undefined ? "#levels" : uni_data.des;
  uni_temp += `
        <div class="max-w-md bg-white p-4 rounded-lg shadow-md">
            <ol id="notes_on_mth210(201)">
                <li class="mb-4">
                    <a onclick="change_page('${uni_data["des"]}', '${uni_data["acronym"]}', true)"
                        class="block text-blue-600 hover:underline">
                        <span class="font-bold mb-4 text-4xl">${uni_data["name"]}</span>
                    </a>
                    ${uni_data["info"]}
                </li>
            </ol>
        </div>
        <br>
        <br>
      `
}
$("#uni").html(uni_temp);
for(dpt_data of dpts_json){
  dpts_temp += `
        <div class="max-w-md bg-white p-4 rounded-lg shadow-md">
            <ol id="notes_on_mth210(201)">
                <li class="mb-4">
                    <a onclick="change_page('#notes', '${dpt_data["code"]}', true)"
                        class="block text-blue-600 hover:underline">
                        <span class="font-bold mb-4 text-4xl">${dpt_data["name"]}</span>
                    </a>
                    ${dpt_data["info"]}
                </li>
            </ol>
        </div>
        <br>
        <br>
      `
}
$("#dpts").html(dpts_temp);
for(levels_data of levels_json){
  levels += `
        <div class="max-w-md bg-white p-4 rounded-lg shadow-md">
            <ol id="notes_on_mth210(201)">
                <li class="mb-4">
                    <a onclick="change_page('#dpts', '${levels_data["page"]}', true)"
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
function load_notes(){
    let tail_data = tail.split(",");
    let notes = `
        <h2 onclick="change_page('#dpts', 'notes', false)" class="text-2xl font-semibold mb-4 text-4xl text-green-600">Back to Departments  🔙</h2>
        <br>
        <h2 class="text-2xl font-semibold mb-4 text-4xl"> ${tail_data[1]} Lecture Notes </h2>
        <br>
    `;
    for(notes_data of notes_json){
      if(tail_data[0] == notes_data.uni && tail_data[1] == notes_data.level && tail_data[2] == notes_data.dpt){
        notes += `
          <h3 class="text-lg font-medium mb-2 text-3xl">${notes_data["Course"]}</h3>
              <div class="max-w-md bg-white p-4 rounded-lg shadow-md">
                  <ol id="notes_on_mth210(201)">
                      <li class="mb-4">
                          <a href="${notes_data["PDF"]}"
                              class="block text-blue-600 hover:underline">
                              <span class="font-bold">${notes_data["Date"]}</span>
                              ${notes_data["Info"]}
                              ${notes_data["Lecturer"]}
                              ${notes_data["Writer"]}
                          </a>
                      </li>
                      <!-- Add more 200lv lecture notes here. -->
                  </ol>
              </div>
              <br><br>
        `;
      }
  }
  $("#notes").html(notes);
}
function del_lt(str) {
    let li = str.lastIndexOf(',');
    let sli = str.lastIndexOf(',', li - 1);
    if (sli === -1) {
        return "";
    }
    let ns = str.slice(0, sli+1) + str.slice(li + 1);
    return ns;
}
function change_page(page, prev, f){
  if(prev != 0){
    if(f){
     tail += prev + ",";
    }else{
     tail = del_lt(tail);
    }
    localStorage.tail = tail;
  }
  if(page == "#notes"){
    load_notes();
  }
  localStorage.page = page;
  $(page).show();
  for(p of pages){
    if(p != page){
      $(p).hide();
    }
  }
}
tail = localStorage.tail;
for(p of pages){
  if(localStorage.page == p){
    change_page(p, 0, null);
    pe = true;
    break;
  }
}
if(!pe){
  change_page("#uni", 0, null);
}
history.pushState(null, null, document.URL);
$(window).on('popstate', function(event) {
    if(localStorage.page != "#uni"){
      if(localStorage.page == "#form-section"){
        change_page(pages[0], localStorage.page, false);
      }else{
        for(let i=0; i<pages.length; ++i){ 
          if(pages[i] == localStorage.page){
            change_page(pages[i-1], localStorage.page, false);
            break;
          }
        }
      }
   }
   history.pushState(null, null, document.URL);
});