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
         `<ul> 
            <li class="article">
            <a href="${url}" id="article-link" alt="url" target="_blank">
                <img src =${image}>
            </a>
            <p class="summary">${abs}</p>
            </li>
        </ul>`
       );
      
      const mobile = window.matchMedia('(max-width: 599px)');
      const tablet = window.matchMedia('(min-width: 600px) and (max-width: 1239px)')
      const desktop = window.matchMedia('(min-width: 1240px)');

      if (mobile.matches) {
        $('.main-header').css({
          'height': '300px',
          'margin-bottom': '1rem'
        });   
        $('.main-header img').css({
          'height': '150px',
          'padding-top': '3rem'        
        });    
      }

      if(tablet.matches) {
        $('.main-header').css({
          'height': '300px',
          'margin-bottom': '1rem'
        });   
        $('.main-header img').css({
          'height': '150px',
          'padding-top': '3rem'        
        });    
      }
      
      if(desktop.matches) {

      }
     



     }
   });
 });

