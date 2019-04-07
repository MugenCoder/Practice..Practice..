// CREATING A RESTful API

const express = require('express');
const app = express();

// EXPRESS METHODS TO HANDLE REQ
// implement endpoints that res to a get req
// takes two arguments: arg1 is the path/urlto represent he root of the website... 2. callback function  (route handler)for http get request
// app.get()
// app.post()
// app.put()
// app.delete()
const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}    
];

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => { //gets all courses
    // Make a '1,2,3' array of the courses dir to invoke/call
    // res.send([1, 2, 3]);
    // We change from the '1,2,3' array to a var containing [const courses] the array 'courses'
    // then invoke/call 'courses'
    res.send(courses);
});

// ROUTE PARAMETERS
// create a route to get a single course from the courses list
// ENDPOINT: / api/course/1 -- assuming 1 is the course
// we'll use :id as our parameter
// and add our route handle function => (req, res)
app.get('/api/courses/:id', (req, res) => { //gets all course ID
// to read parameters => 'req.params.id' .. to send them to client 'req.send()'
    // res.send(req.params.id);
     // how to write QUERY PARAMETERS '.query' --
    // res.send(req.query);
    // LOGIC to find a course when given an id
    // NEEDS an argument [function] and to return a BOOLEAN [determines correct course]
    //USE CONST or LET instead of VAR; we want to keep it constant instead of resetting a variable
    const course = courses.find(c => c.id === parseInt(req.params.id)); // => = 'goes to'
    if (!course) res.status(404).send('The course with the given ID was not found');
    res.send(course);
});

// ALSO it is possible to have a ROUTE w/ MULTIPLE PARAMETERS --
// make a route to '/posts' w/ Year & Month parameters
// app.get('/api/courses/:id', (req, res) => {
// // app.get('/api/posts/:year/:month', (req, res) => {
//     // res.send(req.params);
//     // Query Params
//     res.send(req.query);
// });

// PORT TALK
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
