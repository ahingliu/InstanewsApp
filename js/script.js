function loader() {
  $(".spinner").show();
  console.log("visible");
}

function loaderDone() {
  setTimeout(function() {
    $(".spinner").hide();
  }, 3000);
}

$(".spinner").hide();

$("#sections").on("change", function() {
  loader();

  const section = $("#sections option:selected").val();
  $(".content").empty();
  $.ajax({
    method: "GET",
    url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=3ihvPWNhGBkw0DWmfc2rpg2te3TVeDov`
  }).done(function(data) {
    loaderDone();
    $(".main-header, .logo, .section").addClass("loaded");

    let count = 0;

    for (let i = 0; i < 12; i++) {
      if (data.results[i].multimedia.length >= 5 && count < 12) {
        count += 1;

        let url = data.results[i].url;
        let image = data.results[i].multimedia[4].url;
        let abs = data.results[i].abstract;

        $(".content").append(
          `<ul class="articles"> 
        <li class="article">
        <a href="${url}" id="article-link" alt="url" target="_blank">
        <img src =${image}>
        </a>
        <p class="summary">${abs}</p>
        </li>
        </ul>`
        );
      }
    }
  });
});
