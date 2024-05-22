var cj = `
        <h2 onclick="change_page('#uni', 'create_json', false)" class="text-2xl font-semibold mb-4 text-4xl text-green-600">Back to Universities 🔙</h2>
        <br>
        <!-- Form Section -->
            <h2 class="text-2xl font-semibold mb-4">Contribute Lecture Note</h2>
            <form id="lectureForm" class="space-y-4">
                <div>
                    <label for="course" class="block text-sm font-medium text-gray-700">Course <span class="text-red-600">*</span></label>
                    <input type="text" id="fcourse" name="course" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>

                <div>
                    <label for="pdf" class="block text-sm font-medium text-gray-700">PDF Link <span class="text-red-600">*</span></label>
                    <input type="url" id="fpdf" name="pdf" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>

                <div>
                    <label for="info" class="block text-sm font-medium text-gray-700">Info</label>
                    <input type="text" id="finfo" name="info" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>

                <div>
                    <label for="lecturer" class="block text-sm font-medium text-gray-700">Lecturer</label>
                    <input type="text" id="flecturer" name="lecturer" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>

                <div>
                    <label for="writer" class="block text-sm font-medium text-gray-700">Writer</label>
                    <input type="text" id="fwriter" name="writer" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>

                <div>
                    <label for="uploader" class="block text-sm font-medium text-gray-700">Uploader</label>
                    <input type="text" id="fuploader" name="uploader" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>

                <div>
                    <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                    <input type="date" id="fdate" name="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value="">
                </div>

                <div>
                    <label for="uni" class="block text-sm font-medium text-gray-700">University <span class="text-red-600">*</span></label>
                    <select id="funi" name="uni" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                       <!--Universities will be added programmatically with js.-->
                    </select>
                </div>

                <div>
                    <label for="level" class="block text-sm font-medium text-gray-700">Level <span class="text-red-600">*</span></label>
                    <select id="flevel" name="level" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                        <!--Levels will be added programmatically with js.-->
                    </select>
                </div>

                <div>
                    <label for="dpt" class="block text-sm font-medium text-gray-700">Department <span class="text-red-600">*</span></label>
                    <select id="fdpt" name="dpt" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                        <!--Departments will be added programmatically with js.-->
                    </select>
                </div>

                <div>
                    <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700">Generate JSON</button>
                </div>
            </form>

            <div id="result" class="mt-8 p-4 bg-gray-100 rounded-md shadow-md hidden">
                <h3 class="text-lg font-medium mb-2">Generated JSON</h3>
                <pre id="jsonOutput" class="bg-white p-4 rounded-md shadow-inner overflow-auto"></pre>
                <button id="copyButton" class="mt-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-700">Copy to Clipboard</button>
            </div>
 `;
$("#form-section").html(cj);
$('#fdate').attr('value', `${new Date().toISOString().split('T')[0]}`);
var temp = `<option value="">Select University</option>`;
for(uni_data of uni_json){
  if(uni_data.des === undefined){
    temp += `<option value="${uni_data.acronym}">${uni_data.name}</option>`;
  }
}
$("#funi").html(temp);
temp = `<option value="">Select Level</option>`;
for(levels_data of levels_json){
  temp += `<option value="${levels_data.page}">${levels_data.level}</option>`;
}
$("#flevel").html(temp);
temp = `<option value="">Select Department</option>`;
for(dpt_data of dpts_json){
  temp += `<option value="${dpt_data.code}">${dpt_data.name}</option>`;
}
$("#fdpt").html(temp);
temp = null;
$('#lectureForm').on('submit', function (e) {
    e.preventDefault();

    let lecturer = $('#flecturer').val() ? `<br>Lecture delivered by Lecturer : ${$('#flecturer').val()}` : "";
    let writer = $('#fwriter').val() ? `<br>Written by ${$('#fwriter').val()}` : "";
    let uploader = $('#fuploader').val() ? `<br>Uploaded by ${$('#fuploader').val()}` : "";

    let jsonData = {
        "Course": $('#fcourse').val(),
        "PDF": $('#fpdf').val(),
        "Info": $('#finfo').val(),
        "Lecturer": lecturer,
        "Writer": writer,
        "Uploader": uploader,
        "Date": $('#fdate').val(), // Default to current date if no date is selected
        "uni": $('#funi').val(),
        "level": $('#flevel').val(),
        "dpt": $('#fdpt').val()
    };

    $('#jsonOutput').text(JSON.stringify(jsonData, null, 4));
    $('#result').removeClass('hidden');
});

$('#copyButton').on('click', function () {
    let jsonOutput = document.getElementById('jsonOutput');
    let range = document.createRange();
    range.selectNode(jsonOutput);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    alert('JSON copied to clipboard!');
});