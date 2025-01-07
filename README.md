# Lecture Notes

A repository to share lecture notes and other useful materials with those taking the same courses at the University of Benin.

## How to Upload notes

You can upload notes by forking [the notes repository](https://github.com/Osalotioman/notes), uploading your notes, and making a pull request. Please ensure the file name has a good description so it can be easily added to the site.

## How to add Announcements

You can add announcements by forking [this repository](https://github.com/Osalotioman/Lecture_Notes), using the template below to write your announcement and put it in the announcement section in `ann/index.html`, then make a pull request.

## Project Structure

The project is organized as follows:

- `ann/`: Contains announcement-related files.
- `app/`: Contains JavaScript files for the application.
- `assets/`: Contains CSS, JavaScript, and other assets.
- `docs/`: Contains detailed documentation files.
- `i100lv/`: Contains files related to 100 level courses.
- `i200lv/`: Contains files related to 200 level courses.
- `index.html`: The main entry point of the project.

## Usage Instructions

To use this project, follow these steps:

1. Clone the repository: `git clone https://github.com/Osalotioman/Lecture_Notes.git`
2. Navigate to the project directory: `cd Lecture_Notes`
3. Open `index.html` in your web browser to view the lecture notes and other materials.

## JSON Templates for Assignments
```javascript
{
    "name" : "Course name",
    "url" : "link_to_assignmentpdf",
    "info" : ` 
      Information about the assignment goes here
      Authors:
      <ul>
        <li>
          <b style="color:blue;">Author 1</b>
        </li>
      </ul>
    `,
    "date_updated" : "DD-MM-YY",
    "date_to_submit" : "DD-MM-YY",
    "code" : "CourseCode",
    "dpt" : "Department",
    "semester" : 1,
    "faculty" : "Faculty"
}
```
## HTML Output format
```html
<div class="max-w-md bg-white p-3 rounded-lg shadow-md">
    <ol>
        <li class="mb-4">
          <b style="color:blue;">Date assignment posted</b>
          <br>
          <span class="font-bold mb-4 text-2xl">
            The title of your assignment will go here.
          </span>
        </li>
        <li>
          Details of assignment goes here.
          <br>
          <br>
          <b style="color:blue;">Written by ....</b>
        </li>
    </ol>
</div>
<br>
<br>
