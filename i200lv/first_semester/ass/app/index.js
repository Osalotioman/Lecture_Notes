  //For Assignment page 
  var ass = `
  <h2 class="text-2xl font-semibold mb-4 text-4xl">200 Level 1<sup>st</sup> semester Assignments</h2>
          <br>
  `;
  for(ass_data of ass_json){
    ass += `
    <div class="max-w-md bg-white p-3 rounded-lg shadow-md">
        <ol>
            <li class="mb-4">
              <b style="color:blue;">${ass_data.date_updated}</b>
              <br>
              <span class="font-bold mb-4 text-2xl">
                ${ass_data.code} Assignment.
              </span>
            </li>
            <li>
              ${ass_data.info}
              <br>
              <a class="text-4xl" style="color:red" href="${ass_data.url}"><b>CLICK HERE TO DOWNLOAD THE ASSIGNMENT PDF</b></a>
            </li>
        </ol>
    </div>
    <br>
    <br>
    `
  }
  $("#i200lv_ass").html(ass);