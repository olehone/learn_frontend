setInterval(reload, 2000);

function reload() {
  console.log("reload");
  setTimeout(function() {
    location.reload();
  }, 3000);
}
