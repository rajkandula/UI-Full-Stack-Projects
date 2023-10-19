const uname = document.getElementById("username");
const upassword = document.getElementById("password");
const formid = document.getElementById("loginForm");
const err = document.getElementById("error");

formid.addEventListener("submit", (e) => {
  let message = [];
  if (uname.value === "" || uname.value == null)
    message.push("Username is Required");
});

function previewImage() {
  const input = document.getElementById("imageInput");
  const preview = document.getElementById("imagePreview");
  const downloadButton = document.getElementById("downloadButton");

  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = document.createElement("img");
      img.setAttribute("src", event.target.result);
      img.setAttribute("width", "300");
      img.setAttribute("height", "auto");
      preview.innerHTML = "";
      preview.appendChild(img);
      downloadButton.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = "No image selected";
    downloadButton.style.display = "none";
  }
}
