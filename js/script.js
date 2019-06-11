 $("#sections").on("change", function () {
   const section = $("#sections option:selected").val();
   $('.content').empty()
   $.ajax({
     method: "GET",
     url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=3ihvPWNhGBkw0DWmfc2rpg2te3TVeDov`
   }).done(function (data) {  
     for (let i = 0; i < 12; i++) {
       
      let url = data.results[i].url;
      let image = data.results[i].multimedia[4].url
      let abs = data.results[i].abstract

       $('.content').append(
        `<section class="content">
         <ul> 
            <li class="article">
            <div class="news-img">  
            <a href id="article-link" alt="url" target="_blank"="${url}">
                <img src =${image}>
                <p class="summary">${abs}</p>
            </a>
            </div>
            </li>
        </ul>
        </section>`
       );
     }
   });
 });

/* <section class="content">
 <a href="#article-link"><img src="article image" alt="Top Stories"></a>
 <p>abstract</p>
  </section> */