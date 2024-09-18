//window.onload = function(){
  //For i200lv.html
  var sections = ``;
  for(sections_data of sections_json){
    sections += `
      <div class="max-w-md bg-white p-3 rounded-lg shadow-md">
          <ol>
              <li class="mb-4">
                  <a href="${sections_data.url}"
                      class="block text-red-600 hover:underline">
                      <span class="font-bold mb-4 text-3xl">${sections_data.name}</span>
                  </a>
                  ${sections_data.info}
              </li>
          </ol>
      </div>
      <br>
      <br>
    `;
  }
  $("#pages").html(sections);
//}