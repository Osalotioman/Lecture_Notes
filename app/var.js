var pages = ["#uni", "#levels", "#dpts", "#notes", "#form-section"];
var pe = false;
var tail = "";
var uni_temp = `
        <h2 class="text-2xl font-semibold mb-4 text-4xl">Universities</h2>
        <br>
`;
var levels = `
        <h2 onclick="change_page('#uni', 'levels', false)" class="text-2xl font-semibold mb-4 text-4xl text-green-600">Back to Universities 🔙</h2>
        <br>
        <h2 class="text-2xl font-semibold mb-4 text-4xl">Levels</h2>
        <br>
`;
var dpts_temp = `
        <h2 onclick="change_page('#levels', 'dpts', false)" class="text-2xl font-semibold mb-4 text-4xl text-green-600">Back to Levels🔙</h2>
        <br>
        <h2 class="text-2xl font-semibold mb-4 text-4xl">Departments</h2>
        <br>
`;
var uni_json = [
  {
    "name" : "Create Json",
    "acronym" : "cj",
    "info" : "For those of us who don't like the stress of typing when there's an alternative.",
    "des" : "#form-section"
  },
  {
    "name" : "University of Benin",
    "acronym" : "uniben",
    "info" : ""
  },
  {
    "name" : "Benson Idahosa University",
    "acronym" : "biu",
    "info" : ""
  }
];
var levels_json = [
  {
    "level" : "100 Level",
    "page" : "100lv",
    "info" : ""//"<br>Currently no writers(People to write scan and upload their notes). If interested message me on WhatsApp (+2348106052538)."
  },
  {
    "level" : "200 Level",
    "page" : "200lv",
    "info" : ""//"<br>Need more writers(People to write scan and upload their notes). If interested message me on WhatsApp (+2348106052538)."
  },
  {
    "level" : "300 Level",
    "page" : "300lv",
    "info" : ""
  },
  {
    "level" : "400 Level",
    "page" : "400lv",
    "info" : ""
  },
  {
    "level" : "500 Level",
    "page" : "500lv",
    "info" : ""
  }
];
var dpts_json = [
  {
    "name" : "Mathematics",
    "code" : "MTH",
    "info" : ""
  },
  {
    "name" : "Chemistry",
    "code" : "CHM",
    "info" : ""
  },
  {
    "name" : "Computer Science",
    "code" : "CSC",
    "info" : ""
  },
  {
    "name" : "Geology",
    "code" : "GLY",
    "info" : ""
  },
  {
    "name" : "Statistics",
    "code" : "STA",
    "info" : ""
  },
  {
    "name" : "Mechanical Engineering",
    "code" : "ENG",
    "info" : ""
  }
]
var former_notes_json = [ 
  {
    "Course" : "CSC211 - Structured Programming in Pascal",
    "PDF" : "notes/200lv/FirstSemester/LectureNotes_CSC211_05-15-2024.pdf",
    "Info" : "",
    "Lecturer" : "<br>Lecture delivered by Lecturer : Oliomogbe Silva",
    "Writer" : "<br>Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "15th May 2024",
    "uni" : "uniben",
    "level" : "200lv",
    "dpt" : "MTH"
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
];