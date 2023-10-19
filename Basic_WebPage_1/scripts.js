// $(document).ready(function () {
//   $("#loginForm").submit(function (event) {
//     var username = $("#username").val();
//     var password = $("#password").val();
//     var error = "";

//     if (!/^[A-Z][a-zA-Z0-9]+$/.test(username)) {
//       error +=
//         "Username should start with a capital letter and contain only letters and numbers.\n";
//     }

//     if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(password)) {
//       error +=
//         "Password should contain at least 1 capital letter, 1 number, and 1 special character.\n";
//     }

//     if (error !== "") {
//       $("#error").text(error);
//       event.preventDefault();
//     }
//   });
// });

$(document).ready(function () {
  // Handle video upload
  $("#videoUploadForm").submit(function (event) {
    event.preventDefault();

    var videoFile = $("#videoFile")[0].files[0];
    if (videoFile) {
      var videoPlayer = $("#videoPlayer")[0];
      videoPlayer.src = URL.createObjectURL(videoFile);
      videoPlayer.load();
    }
  });

  // Update download link
  $("#videoFile").change(function () {
    var videoFile = $("#videoFile")[0].files[0];
    if (videoFile) {
      var downloadLink = $("#downloadLink");
      downloadLink.attr("href", URL.createObjectURL(videoFile));
      downloadLink.attr("download", videoFile.name);
    }
  });
});

$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    var username = $("#username").val();
    var password = $("#password").val();
    var err = $("#error").val();

    if (!/^[A-Z][a-zA-Z0-9]+$/.test(username)) {
      err +=
        "Username must start with a Capital Letter and contails only letters and numbers";
    } else if (username === "") {
      err += "Username mustbe required";
    }

    if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(password)) {
      err +=
        " \n Password must contain 1 Capital, 1 Small, 1 Numeric and 1 Symbol";
    } else if (password === "" || password.length() >= 6) {
      err += "\n Password must be grater than 6";
    }

    if (err !== "") {
      $("#error").text(err);
      event.preventDefault();
    }
  });
});
