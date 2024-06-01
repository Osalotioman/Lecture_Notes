# Lecture Notes

A repository to share lecture notes and other useful materials with those taking the same courses at the University of Benin.

## How to Upload notes

You can upload notes by forking [the notes repository](https://github.com/Osalotioman/notes), uploading your notes, and making a pull request. Please ensure the file name has a good description so it can be easily added to the site.

## How to add Announcements

You van addd announcements by forking [this repository](https://github.com/Osalotioman/Lecture_Notea), using the template below write your announcement and put it in the announcement section im ann.html, then make a pull request.

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
## HTML Ouput format
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