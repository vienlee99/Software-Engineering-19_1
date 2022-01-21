function reloadTable(choose, items) {
  console.log(items)
  if (!choose) {
    $("#tableTeacher").html("");

    console.log(items);
    for (const element of items) {
      $("#tableTeacher").append(`
      <tr>
          <td>
              <img class="icon-tea"
                  style="background-image: url(/assets/images/${element.userId.imagePath});background-size: 67px">
              ${element.name}
          </td>
          <td class="text-center">${element.rating}</td>
          <td class="text-center">${element.degree}</td>
          <td class="text-center"><img class="icon-status" src="/assets/images/${element.userId.status}"></td>
          <td>
              <div>
                  <img src="/assets/images/icon-action-info.png ">
                  <img src="/assets/images/icon-action-block.png ">
                  <img src="/assets/images/icon-action-delete_forever.png ">
              </div>
          </td>
      </tr>
      `);
    }
  } else {
    $("#tableCourse").html("");

    console.log(items);
    for (const element of items) {
      $("#tableCourse").append(`
        <tr>
            <td>
                <img class="icon-sub" style="background-image: url(/assets/images/${element.imagePath}.jpg)">
                ${element.name}
            </td>
            <td>
                <img class="icon-tea"
                    style="background-image: url(/assets/images/${element.teacherId.userId.imagePath}.jpg);background-size: 67px">
                ${element.teacherId.name}
            </td>
            <td><img class="icon-status" src="/assets/images/${element.status}"></td>
            <td>${element.dateStart}</td>
            <td>
                <div>
                    <img src="/assets/images/icon-action-info.png ">
                    <img src="/assets/images/icon-action-block.png ">
                    <img src="/assets/images/icon-action-delete_forever.png ">
                </div>
            </td>
        </tr>
      `);
    }
  }
}
