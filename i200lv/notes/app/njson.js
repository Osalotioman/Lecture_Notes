var nip = "https://osalotioman.github.io/notes/"
var sections_json = []
var ass_json = []
var notes_json = [
  {
    "Course" : "MTH218 - Mathematical Methods.",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH218_22-08-24.pdf",
    "Info" : "<br>Third Lecturer Notes Part 2.",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "22-08-2024",
    "Uploader": "<br>Uploaded by Osalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH218 - Mathematical Methods.",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH218_21-08-24.pdf",
    "Info" : "<br>Third Lecturer Notes Part 1.",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "21-08-2024",
    "Uploader": "<br>Uploaded by Osalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH218 - Mathematical Methods.",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH218_Note_From_Mrs_Jacob.pdf",
    "Info" : "<br>Notes from Mrs Jacobs.",
    "Lecturer" : "<br>Lecturer: Mrs. Jacobs",
    "Writer" : "<br> Written by Mrs. Jacobs",
    "Date" : "10th June 2024, Wednesday",
    "Uploader": "<br>Uploaded by Osalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH213- Vector Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH213_by_Osalotioman_08-28-2024.pdf",
    "Info" : "<br>This class covers Chapter3 and Chapter4 of the Vector Analysis Textbook. There's also an assignment included to be submitted 30-08-2024.",
    "Lecturer" : "<br>Lecturer: Dr. Mrs. Akhigbe",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "28th August 2024, Wednesday",
    "Uploader": "<br>Uploaded by Osalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH201(210) - Elementary Algebra and Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH201(210)_Osalotioman_06-14-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "14th June 2024, Friday",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH212 - Real Analysis.",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH 212_OSAZUWA_ELVIS_JUNE-11-2024.pdf",
    "Info" : "<br>New Lecturer first intro class.",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "11th June 2024, Tuesday",
    "Uploader": "<br>Uploaded by Arasomwan Elvis",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "CSC212 - Structural Programming In Fortran.",
    "PDF" : nip+"uniben/200lv/FirstSemester/CSC/CSC212_11th_June_2024_By_Osalotiomwan.pdf",
    "Info" : "<br>There is assignment to be submitted next week from the current date of upload.",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "11th June 2024, Tuesday",
    "Uploader": "<br>Uploaded by Ighalo Genesis",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "CSC"
  },
  {
    "Course" : "CSC212 - Structural Programming In Fortran.",
    "PDF" : nip+"uniben/200lv/FirstSemester/CSC/CSC212_Osalotioman_Favour_06-11-2024.pdf",
    "Info" : "<br>There is assignment to be submitted next week from the current date of upload.",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "11th June 2024, Tuesday",
    "Uploader": "<br>Uploaded by Favour Wilfred",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "CSC"
  },
  {
    "Course" : "MTH201(210) - Elementary Algebra and Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH201(210)_Osalotioman_06-11-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "11th June 2024, Tuesday",
    "Uploader": "<br>Uploaded by Akai Promise",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "CSC212 - Structural Programming In Fortran.",
    "PDF" : nip+"uniben/200lv/FirstSemester/CSC/CSC212_Osalotioman_06-03-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "3rd June 2024, Tuesday",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "CSC"
  },
  {
    "Course" : "MTH201(210) - Elementary Algebra and Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH201(210)_Written_by_Osalotioman_05-31-2024.pdf",
    "Info" : "<br> Continuation from the last class (05-28-2024) proof of prop 1.17. part(e)",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "31st May 2024, Friday",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH212 - Real Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LecturersNotes_MTH212_05-31-2024.pdf",
    "Info" : "<br> Continuation of examples on Convergence of Series Part 2.",
    "Lecturer" : "",
    "Writer" : "<br> Lecturers Notes",
    "Date" : "31st May 2024, Friday",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH212 - Real Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH212_Written_by_Osalotioman_05-31-2024.pdf",
    "Info" : "<br> Continuation of examples on Convergence of Series Part 1.",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "31st May 2024, Friday",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH218 - Mathematical Methods",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH218_Notes_FromLecturer_05-29-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> From Lecturer",
    "Date" : "30th May 2024, Thursday. Uploaded on the 29th.",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH214 - Introduction to Operations Research",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH214_Notes_FromLecturer_05-29-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> From Lecturer",
    "Date" : "29th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH201(210) - Elementary Algebra and Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_Written_by_Osalotioman_05-30-2024.pdf",
    "Info" : "<br> Continuation from the last class (05-24-2024) proof of prop 1.17.",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "28th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "STA211(MTH219) - Introduction to Statistics",
    "PDF" : nip+"uniben/200lv/FirstSemester/STA/LectureNotes_STA211(MTH219)_by_Osalotioman_05-28-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "27th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "STA"
  },
  {
    "Course" : "CSC212 - Symbolic Programming in Fortran",
    "PDF" : nip+"uniben/200lv/FirstSemester/CSC/LectureNotes_CSC212_by_IgieweCalebOsasere_05-28-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> Written by IgieweCalebOsasere",
    "Date" : "27th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "CSC"
  },
  {
    "Course" : "MTH212 - Real Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH212_by_Osalotioman_05-28-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "27th May 2024",
    "Uploader": "<br>Uploaded by IghaloGenesisOsasenaga",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "CSC211 - Structured Programming in Pascal",
    "PDF" : nip+"uniben/200lv/FirstSemester/CSC/LectureNotes_CSC211_Written_By_Osalotioman_05-27-2024.pdf",
    "Info" : "<br><b style='color:red;'>Download pascal app and run this code, this will be ypur ticket for the next class.</b>",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "27th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "CSC"
  },
  {
    "Course" : "MTH201(210) - Elementary Algebra and Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_Written_by_Osalotioman_05-24-2024.pdf",
    "Info" : "<br> Proof of the next proposition will be continued in the next class.",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman",
    "Date" : "24th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {//Leave on top
    "Course" : "MTH212 - Real Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH212_by_Osalotioman_and_Favour_05-24-2024.pdf",
    "Info" : "<br><b style='color:red;'> This note includes the part the lecturer was not able to finish in class, please download </b>.",
    "Lecturer" : "",
    "Writer" : "<br> Written by Osalotioman and Favour",
    "Date" : "24th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {//Leave on top.
    "Course" : "MTH230 - Linear Algebra",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH230_Assignment_05-24-2024.pdf",
    "Info" : "<br> <b style='color:red;'>Exercise 1-7 on page 66 of the Linear Algebra textbook.</b>",
    "Lecturer" : "",
    "Writer" : "",
    "Date" : "24th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH230 - Linear Algebra",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH230_by_OsazuwaEmmanuel_05-23-2024.pdf",
    "Info" : "<br> <b style='color:red;'>Study Page 41 - 50 of the Linear Algebra textbook. <br> Do question 1 - 7 on page 66 in your note.</b>",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "23rd May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH219/STA211 - Introduction to Statistics",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH219-STA211_by_OsazuwaEmmanuel_05-22-2024.pdf",
    "Info" : "<br> <b style='color:red;'>Last MTH219/STA211 Class along with the assignments are to be submitted next week Monday 27th May 2024. See announcement page using the link at the top of this page for more details.</b>",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "22rd May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH218 - Mathematical Methods",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH218_LectureNotes_by_FavourAdewole_05-23-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> Written by FavourAdewole",
    "Date" : "23rd May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "CSC212 - Symbolic Programming in Fortran",
    "PDF" : nip+"uniben/200lv/FirstSemester/CSC/CSC212_ESE-OSE_05-22-2024.pdf",
    "Info" : "Complete CSC212 notes, except the last class.",
    "Lecturer" : "",
    "Writer" : "<br> Written by EseOse",
    "Date" : "22nd May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "CSC"
  },
  {
    "Course" : "MTH213",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/MTH213_Notes_05-19-2024_19.06.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuel",
    "Date" : "19th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {//Leave on top
    "Course" : "MTH212 - Real Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH212_05-17-2024.pdf",
    "Info" : "<br> <b style='color:red;'>Notes from Lecturer please Download</b>",
    "Lecturer" : "",
    "Writer" : "",
    "Date" : "17th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "CSC211 - Structured Programming in Pascal",
    "PDF" : nip+"uniben/200lv/FirstSemester/CSC/LectureNotes_CSC211_05-15-2024.pdf",
    "Info" : "",
    "Lecturer" : "<br>Lecture delivered by Lecturer : Oliomogbe Silva",
    "Writer" : "<br>Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "15th May 2024",
    "uni" : "uniben",
    "level" : "200lv",
    "dpt" : "CSC"
  },
  {
    "Course" : "MTH214 - Introduction to Operations Research",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH214_05-15-2024.pdf",
    "Info" : "<br> <b>The assignment given her3 has been submitted.</b>",
    "Lecturer" : "",
    "Writer" : "<br>Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "15th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "CSC212 - Symbolic Programming in Fortran",
    "PDF" : nip+"uniben/200lv/FirstSemester/CSC/LectureNotes_CSC212_05-15-2024.pdf",
    "Info" : " ",
    "Lecturer" : "",
    "Writer" : "<br>Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "15th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "CSC"
  },
  {
    "Course" : "MTH219/STA211 - Statistics",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH219_05-15-2024.pdf",
    "Info" : "<br> These are the note for MTH219 from the start of the class up until 14th May 2024",
    "Lecturer" : "",
    "Writer" : "<br> Written by Jeffrey -CSC",
    "Date" : "15th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH230 - Linear Algebra - Exercises",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/Exercises_MTH230_05-14-2024.pdf",
    "Info" : "<br><b style='color:red;'>This is the exercises we are to focus on as part of our area of concentration for our test.</b>",
    "Lecturer" : "",
    "Writer" : "",
    "Date" : "14th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH230 - Linear Algebra",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH230_05-14-2024.pdf",
    "Info" : "",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "14th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH212 - Real Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH212_05-14-2024.pdf",
    "Info" : "<br><b style='color:red;'> There are Assignments/Classwork - A lot of assignments/classworks. The solution to the assignments/class work are to be written in a book or fuscap paper until it is requested for submission.</b>",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "14th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH210(201) - Elementary Algebra and Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH210(201)_05-14-2024.pdf",
    "Info" : "",
    "Lecturer" : "<br> Lecture Given by DR.I.C. Alufohai",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "14th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH210(201) - Elementary Algebra and Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH210(201)_05-14-2024.pdf",
    "Info" : "",
    "Lecturer" : "<br> Lecture Given by DR.I.C. Alufohai",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "14th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {//Leave on top
    "Course" : "MTH218 - Mathematical Methods",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH218_05-13-2024.pdf",
    "Info" : "<br> <b style='color:red;'>Lecturer Notes please Download</b>",
    "Lecturer" : "",
    "Writer" : "",
    "Date" : "13th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "MTH230 - Linear Algebra",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH230_05-13-2024.pdf",
    "Info" : "<br> Set Theory <br> If you have a better (or more detailed) version of this notes and want to contribute, scroll to the bottom of the page",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "13th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "CSC212 Symbolic Programming in Fortran",
    "PDF" : nip+"uniben/200lv/FirstSemester/CSC/LectureNotes_CSC212_05-13-2024.pdf",
    "Info" : "<br> <b>This note contains assignment, that has been submitted.</b>",
    "Lecturer" : "<br> Lecture Given by Mr. Edward Obasohan",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "13th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "CSC"
  },
  {
    "Course" : "MTH212 - Real Analysis",
    "PDF" : nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH212_05-13-2024.pdf",
    "Info" : "<br> Limit of a Function",
    "Lecturer" : "",
    "Writer" : "<br> Written by OsazuwaEmmanuelOsalotioman",
    "Date" : "13th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  },
  {
    "Course" : "CHM213 - Practical Chemistry",
    "PDF" : nip+"uniben/200lv/FirstSemester/CHM/LectureNotes_CHM213_05-13-2024.pdf",
    "Info" : "<br> Collision Theory of Reaction Rate",
    "Lecturer" : "<br> Lecture Given by Mrs. Emeribe Oluchi",
    "Writer" : "",
    "Date": "13th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "CHM"
  },
  {
    "Course": "MTH 210(201) - Elementary Algebra and Analysis",
    "PDF": nip+"uniben/200lv/FirstSemester/MTH/LectureNotes_MTH210(201)_10-05-2024_WrittenBy_Osalotioman.pdf",
    "Info": "<br> Introduction to Set Theory",
    "Lecturer": "<br>Lecture delivered by Lecturer : DR.I.C. Alufohai",
    "Writer": "<br>Written by OsazuwaEmmanuelOsalotioman",
    "Date": "10th May 2024",
    "Uploader": "<br>Uploaded by OsazuwaEmmanuelOsalotioman",
    "uni": "uniben",
    "level": "200lv",
    "dpt": "MTH"
  }
];
