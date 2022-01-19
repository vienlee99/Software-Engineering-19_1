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
const monthNow = $("#monthNow").text();
let dataNow = $("#dataNow").text().split(",");
let dataLastYear = $("#dataLastYear").text().split(",");
dataNow = circular(dataNow, monthNow - 5, 6);
dataLastYear = circular(dataLastYear, monthNow - 5, 6);
let title = circular(MonthIndex, monthNow - 5, 6);
// alert(dataNow)
// alert(dataLastYear)
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: title,
    datasets: [
      {
        tension: 0.3,
        label: "This year",
        data: dataNow,
        backgroundColor: ["#5F2EEA"],
        borderColor: ["#5F2EEA"],
        borderWidth: 1,
      },
      {
        tension: 0.3,
        label: "Last year",
        data: dataLastYear,
        backgroundColor: ["#4BDE97"],
        borderColor: ["#4BDE97"],
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
        position: "bottom",
      },
    },
  },
});
