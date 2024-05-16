var notes = `
        <h2 class="text-2xl font-semibold mb-4 text-4xl">200 Level Lecture Notes</h2>
        <br>
    `
var notes_json = [ 
  {
    "Course" : "CSC211 - Structured Programming in Pascal",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_CSC211_05-15-2024.pdf",
    "Info" : "",
    "Lecturer" : "<br>Lecture delivered by Lecturer : Oliomogbe Silva",
    "Writer" : "<br>Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "15th May 2024"
  },
  {
    "Course" : "MTH214 - Introduction to Operations Research",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_MTH214_05-15-2024.pdf",
    "Info" : "<br> <b style='color:red;'>The assignment given will be used for our Continuous Assessment</b>",
    "Lecturer" : "",
    "Writer" : "<br>Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "15th May 2024"
  },
  {
    "Course" : "CSC212 - Symbolic Programming in Fortran",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_CSC212_05-15-2024.pdf",
    "Info" : " ",
    "Lecturer" : "",
    "Writer" : "<br>Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "15th May 2024"
  },
  {
    "Course" : "MTH219 - Statistics",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_MTH219_05-15-2024.pdf",
    "Info" : "<br> These are the note for MTH219 from the start of the class up until 14th May 2024",
    "Lecturer" : "",
    "Writer" : "<br> Written by Jeffrey -CSC",
    "Date" : "15th May 2024"
  },
  {
    "Course" : "MTH230 - Linear Algebra - Exercises",
    "PDF" : "notes/200lv/FirstSemester/Exercises_MTH230_05-14-2024.pdf",
    "Info" : "<br><b style='color:red;'>This is the exercises we are to focus on as part of our area of concentration for our test.</b>",
    "Lecturer" : "",
    "Writer" : "",
    "Date" : "14th May 2024"
  },
  {
    "Course" : "MTH230 - Linear Algebra",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_MTH230_05-14-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "14th May 2024"
  },
  {
    "Course" : "MTH212 - Real Analysis",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_MTH212_05-14-2024.pdf",
    "Info" : "<br><b style='color:red;'> There are Assignments/Classwork - A lot of assignments/classworks. The solution to the assignments/class work are to be written in a book or fuscap paper until it is requested for submission.</b>",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "14th May 2024"
  },
  {
    "Course" : "MTH210(201) - Elementary Algebra and Analysis",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_MTH210(201)_05-14-2024.pdf",
    "Info" : "",
    "Lecturer" : "<br> Lecture Given by DR.I.C. Alufohai",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "14th May 2024"
  },
  {
    "Course" : "MTH218 - Mathematical Methods",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_MTH218_05-13-2024.pdf",
    "Info" : "<br> <b style='color:red;'>Notes for the next MTH 218 Class</b>",
    "Lecturer" : "",
    "Writer" : "",
    "Date" : "13th May 2024"
  },
  {
    "Course" : "MTH230 - Linear Algebra",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_MTH230_05-13-2024.pdf",
    "Info" : "<br> Set Theory <br> If you have a better (or more detailed) version of this notes and want to contribute, scroll to the bottom of the page",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "13th May 2024"
  },
  {
    "Course" : "CSC212 Symbolic Programming in Fortran",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_CSC212_05-13-2024.pdf",
    "Info" : "<br> <b style='color:red;'> Important!!!: There is assignment to be submitted next week Monday </b>",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "13th May 2024"
  },
  {
    "Course" : "MTH212 - Real Analysis",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_MTH212_05-13-2024.pdf",
    "Info" : "<br> Limit of a Function",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "13th May 2024"
  },
  {
    "Course" : "CHM213 - Practical Chemistry",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_CHM213_05-13-2024.pdf",
    "Info" : "<br> Collision Theory of Reaction Rate",
    "Lecturer" : "<br> Lecture Given by Mrs. Emeribe Oluchi",
    "Writer" : "",
    "Date" : "13th May 2024"
  },
  {
    "Course" : "MTH 210(201) - Elementary Algebra and Analysis",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_MTH210(201)_10-05-2024_WrittenBy_Osalotioman.pdf",
    "Info": "<br> Introduction to Set Theory",
    "Lecturer" : "<br> Lecture Given by DR.I.C. Alufohai",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "10th May 2024"
  }
]
for(notes_data of notes_json){
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
  `
}
$("#200lv").html(notes);