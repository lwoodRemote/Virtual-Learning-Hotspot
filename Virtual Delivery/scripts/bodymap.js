
  
  //SCRIPT FOR bodymap POPUP CONTENT
  
  
  /* get articles by tag name and loop through them to generate an array like object *
  Note: it is not an array so all methods for an array do not work. - really using it for indexing */ 

  const articles = document.getElementsByTagName('article');
    
  function article_display_none() {
  
  for (var i = 0; i < articles.length; i++) {
    
    articles[i].style.display = 'none';
    
  }
}

  var jsonfile = '';

    function content(jsonfile) {

      /* fetch resources across the network*/
   
     fetch(jsonfile)

     /*The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON. Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.*/
   
     .then (response => response.json())
    
     .then(data => {
   
     //console log is just for testing if you do not see anything appear on the actual web page
 
     console.log(data.head_01);
   
     console.log(data.text_01);

     // selecting individual articles by their id and parsing json data as text
      
     document.querySelector('#hd_01').textContent = data.head_01;
    
     document.querySelector('#txt_01').textContent = data.text_01;
   
       
     document.querySelector('#hd_02').textContent = data.head_02;
    
     document.querySelector('#txt_02').textContent = data.text_02;
   
     
     document.querySelector('#hd_03').textContent = data.head_03;
   
     document.querySelector('#txt_03').textContent = data.text_03;
   
     
     document.querySelector('#hd_04').textContent = data.head_04;
   
     document.querySelector('#txt_04').textContent = data.text_04;


     document.querySelector('#hd_05').textContent = data.head_05;
   
     document.querySelector('#txt_05').textContent = data.text_05;


     document.querySelector('#hd_06').textContent = data.head_06;
   
     document.querySelector('#txt_06').textContent = data.text_06;


     document.querySelector('#hd_07').textContent = data.head_07;
   
     document.querySelector('#txt_07').textContent = data.text_07;
 
  
     document.querySelector('#hd_08').textContent = data.head_08;
   
     document.querySelector('#txt_08').textContent = data.text_08;
 
 
   })
   
   }

   /* display article according to hotspot - this uses the articles index */

  function show_article01() {

    article_display_none();

    articles[0].style.display = 'block';

    // call the content function and enter in the jsonfile as the parameter
        
    content('../direct_bodymap/json/bodymap.json');
  
  }


  function show_article02() {

    article_display_none();

    articles[1].style.display = 'block';
        
    content('../json/bodymap.json');
  
  }


  function show_article03() {

    article_display_none();

    articles[2].style.display = 'block';
        
    content('../json/bodymap.json');
  
  }


  function show_article04() {

    article_display_none();

    articles[3].style.display = 'block';
        
    content('../json/bodymap.json');
  
  }


  function show_article05() {

    article_display_none();

    articles[4].style.display = 'block';
        
    content('../json/bodymap.json');
  
  }


  function show_article06() {

    article_display_none();

    articles[5].style.display = 'block';
        
    content('../json/bodymap.json');
  
  }

  function show_article07() {

    article_display_none();

    articles[6].style.display = 'block';
        
    content('../json/bodymap.json');
  
  }

  function show_article08() {

    article_display_none();

    articles[7].style.display = 'block';
        
    content('../json/bodymap.json');
  
  }




