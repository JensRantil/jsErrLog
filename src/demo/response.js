jsErrLog.removeScript(jsErrLog.err_i); // jsErrRpt

function changeClass(element, newClass) {
  // borrowed from http://www.webdeveloper.com/forum/showthread.php?t=134282
	element.setAttribute("class", newClass); //For Most Browsers
	element.setAttribute("className", newClass); //For IE; harmless to other browsers.
}

var element = document.getElementById('testbox');
var element2 = document.getElementById('testbox2');
if (typeof(errors_reported) == "undefined") {
  errors_reported = 1;
} else {
  errors_reported++;
}

if (errors_reported > 2) {
  errors = true;
  message = "More errors were reported than expected.";
} else {
  errors = false;
  message = "";
}

if (errors_reported == 1) {
  status_box = element;
} else if (errors_reported == 2) {
  status_box = element2;
}

if (!errors && !jsErrLog._had_errors) {
  changeClass(status_box, 'testbox alert-message block-message success');
  status_box.innerHTML = '<strong>Things worked out great!</strong> The test passed joyously unless you got an alert box. If your browser is not in the <a href="../../README.markdown">README</a> file, please consider filing an <a href="">issue on Github</a> to notify the developers that jsErrLog works for your browser!';
} else {
  changeClass(element, 'testbox alert-message block-message error');
  element.innerHTML = '<strong>Something went wrong :(.</strong> An error occurred when the script was being executed. If your browser is not in the <a href="../../README.markdown">README</a> file, please consider filing an <a href="">issue on Github</a> to notify the developers that jsErrLog does not work in your browser! Details: ' + message;
}

