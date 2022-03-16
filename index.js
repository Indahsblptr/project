const express = require('express');

const app = express();
const PORT = 5000;

app.set('view engine', 'hbs');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.render('index');
});

app.get('/contact-me', function (request, response) {
    response.render('contact-me');
});

app.get('/blog', function (request, response) {
    response.render('blog');
});

app.get('/blog-detail', function (request, response) {
    response.render('blog-detail');
});

app.listen(PORT, function(){
    console.log('server strating on PORT: ${PORT}');
});

// Boolean => true/false
// const isLogin = true;//

// let projects = [];

// app.set('view engine', 'hbs');

// app.use('/public', express.static(__dirname + '/public'));

// app.use(express.urlencoded({ extended: false }));

// app.get('/', function (req, res) {
//   let dataProject = projects.map(function(data){
//     return{
      
//       time: getDuration(data.time),
//       isLogin,
//       ...data,
//     };
//   });
  
  
//   res.render('index', {isLogin, projects: dataProject});
// });

// //app.get('/my-project', function (req, res) {
//   //res.render('my-project', { isLogin });
// //});
// app.get('/my-project', function (req, res) {
//   res.render('my-project');
// });

// app.get('/project-detail/:index', function (req, res) {
//   let index = req.params.index;

//   let project = projects[index]
//   res.render('project-detail', { project });
// });

// app.get('/update-project/:index', function (req, res) {

//   res.render('update-project');
// });

// app.post('/update-project/:index', function (req, res) {
//   let index = req.params.index;

//   let data = req.body;
//   startDateProject = req.body.startdate;
//   endDateProject = req.body.enddate;

//   data.time = getDuration(startDateProject, endDateProject);
//   projects.splice(index, 1, data);
//   res.redirect('/');
// });

// app.post('/my-project', function (req, res) {
//   let data = req.body;

//   startDateProject = req.body.startdate;
//   endDateProject = req.body.enddate;

//   data.time = getDuration(startDateProject, endDateProject);

//   projects.push(data);

//   res.redirect('/');
// });

// app.get('/project-delete/:index', function (req, res) {
//   let index = req.params.index;

//   projects.splice(index, 1);

//   res.redirect('/');
// });

// app.get('/contact', function (req, res) {
//   res.render('contact');
// });

// app.listen(PORT, function () {
//   console.log(`Server starting on PORT: ${PORT}`);
// });

// // Duration
// function getDuration(startDateProject, endDateProject) {

//   // Declare day, month, year
//   let time = new Date(endDateProject) - new Date(startDateProject)
//   let days = time / (24 * 3600 * 1000)
//   let month = 30
//   let years = month * 12

//   // Math of endDate and startDate
//   let dayDistance = Math.floor((days % years) % month) % 7
//   let weekDistance = Math.floor(((days % years) % month) / 7)
//   let monthDistance = Math.floor((days % years) / month)
//   let yearDistance = Math.floor(days / years)

//   // Display to innerHTML
//    let duration ="";
//    if (yearDistance > 0) {
//      duration += yearDistance + " tahun ";
//       } if (monthDistance > 0) {
//         duration += monthDistance + " bulan ";
//       } if (weekDistance > 0) {
//         duration += weekDistance + " minggu ";
//       } if (dayDistance > 0) {
//         duration += dayDistance + " hari ";
//       }
//    return duration;
// }