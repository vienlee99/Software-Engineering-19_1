function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}
function clearImage() {
    document.getElementById('formFile').value = null;
    // document.getElementById('formfile1').value = null;
    frame.src = "";
    frame1.src = "";
}


function preview1() {
    frame1.src = URL.createObjectURL(event.target.files[0]);
}

function clearImage() {
    document.getElementById('formFile1').value = null;
    // document.getElementById('formfile1').value = null;
    frame1.src = "";
}