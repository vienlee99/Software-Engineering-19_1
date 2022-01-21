const MonthIndex = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function circular(arr, first, n) {
  let temp = [];
  while (n > 0) {
    temp.push(arr[((first % 12) + 12) % 12]);
    first++;
    n--;
  }
  return temp;
}
const monthNow = moment().month();

let dataNewCourses = $("#dataNewCourses").text().split(",");
let dataNewStudents = $("#dataNewStudents").text().split(",");
let dataNewTeachers = $("#dataNewTeachers").text().split(",");
let subjectChart = JSON.parse($("#subjectChartData").text());
let teacherChart = JSON.parse($("#teacherChartData").text());
dataNewCourses = circular(dataNewCourses, monthNow - 11, 12);
dataNewStudents = circular(dataNewStudents, monthNow - 11, 12);
dataNewTeachers = circular(dataNewTeachers, monthNow - 11, 12);
let title = circular(MonthIndex, monthNow - 11, 12);

$('#numSub').text(subjectChart.title.length)
$('#numUni').text(teacherChart.title.length)
$("#newCoursesThisMonth").text(dataNewCourses[11]);
$("#newTeachersThisMonth").text(dataNewTeachers[11]);
$(".newStudentsThisMonth").text(dataNewStudents[11]);

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",

  data: {
    labels: title,
    datasets: [
      {
        tension: 0.3,
        label: "dfsd",
        data: dataNewCourses,
        backgroundColor: [
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#855CF8",
        ],
        borderColor: ["#DCDEDF"],
        borderWidth: 1,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const ctx2 = document.getElementById("myChart2").getContext("2d");
const ctx4 = document.getElementById("myChart4").getContext("2d");
const config2 = {
  type: "bar",
  data: {
    labels: title,
    datasets: [
      {
        tension: 0.1,
        label: "This year",
        data: dataNewStudents,
        backgroundColor: [
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#855CF8",
        ],
        borderColor: ["#DCDEDF"],
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};
const myChart2 = new Chart(ctx2, config2);
const myChart4 = new Chart(ctx4, config2);

const ctx3 = document.getElementById("myChart3").getContext("2d");
const myChart3 = new Chart(ctx3, {
  type: "bar",

  data: {
    labels: title,
    datasets: [
      {
        tension: 0.3,
        label: "dfsd",
        data: dataNewTeachers,
        backgroundColor: [
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#DCDEDF",
          "#855CF8",
        ],
        borderColor: ["#DCDEDF"],
        borderWidth: 1,
      },
    ],
  },

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});


const ctxSubject = document.getElementById("subjectChart").getContext("2d");
const myChartSubject = new Chart(ctxSubject, {
  type: "pie",
  data: {
    labels: subjectChart.title,
    datasets: [
      {
        label: subjectChart.title,
        data: subjectChart.data,
        backgroundColor: palette(['cb-PRGn', 'qualitative'], subjectChart.data.length).map(function(hex) {
          return '#' + hex;
        })
      },
    ],
  },
});

const ctxTeacher = document.getElementById("teacherChart").getContext("2d");
const myChartTeacher = new Chart(ctxTeacher, {
  type: "pie",
  data: {
    labels: teacherChart.title,
    datasets: [
      {
        label: teacherChart.title,
        data: teacherChart.data,
        backgroundColor: palette(['cb-PRGn', 'qualitative'], subjectChart.data.length).map(function(hex) {
          return '#' + hex;
        })
      },
    ],
  },
});


$("input[type=radio][name=statisticType]").change(function () {
  if (this.value == "Course") {
    $(".main-content[role=course]").css("display", "contents");
    $(".main-content[role=teacher]").css("display", "none");
  } else if (this.value == "Teacher") {
    $(".main-content[role=course]").css("display", "none");
    $(".main-content[role=teacher]").css("display", "contents");
  }
});
