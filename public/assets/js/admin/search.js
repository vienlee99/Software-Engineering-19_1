const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",

  data: {
    labels: [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        tension: 0.3,
        label: "dfsd",
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 8, 15],
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
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        tension: 0.1,
        label: "This year",
        data: [12, 19, 3, 5, 2, 3, 12, 15, 3, 5, 8, 15],
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
});


const ctx3 = document.getElementById("myChart3").getContext("2d");
const myChart3 = new Chart(ctx3, {
  type: "bar",

  data: {
    labels: [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        tension: 0.3,
        label: "dfsd",
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 8, 15],
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

const ctx4 = document.getElementById("myChart4").getContext("2d");
const myChart4 = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        tension: 0.1,
        label: "This year",
        data: [12, 19, 3, 5, 2, 3, 12, 15, 3, 5, 8, 15],
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
});
