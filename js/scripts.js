
var dt = new Date();
document.getElementById("datetime").innerHTML = (dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);