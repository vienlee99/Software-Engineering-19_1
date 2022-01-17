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

const MonthNow = $("#MonthNow");
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: MonthIndex.slice(MonthNow - 1, MonthNow - 7),
    datasets: [
      {
        tension: 0.3,
        label: "This year",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["#5F2EEA"],
        borderColor: ["#5F2EEA"],
        borderWidth: 1,
      },
      {
        tension: 0.3,
        label: "Last year",
        data: [10, 9, 5, 7, 2, 1],
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
