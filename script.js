
// iframes
$("#this_topic").click(function (e){
    e.preventDefault();
    genBox("this_topic.html",e);
  });

  $("#universe").click(function (e){
    e.preventDefault();
  genBox("universe.html",e);
  });
  $("#nav").click(function (e){
    e.preventDefault();
    genBox("nav.html",e);
    });

  $("#moby_dick").click(function (e){
    e.preventDefault();
    genBox("moby_dick.html",e);
    });

  $("#firstimg").click(function (e){
    e.preventDefault();
    genBox("connection_img.html",e);
    });
  
  $("#common_mammel").click(function (e){
    e.preventDefault();
    genBox("common_mammel.html",e);
    });

      $("#pre-ramble").click(function (e){
        e.preventDefault();
      genBox("pre-ramble.html",e);
      });
      $("#badjoke1").click(function (e){
        e.preventDefault();
      genBox("badjoke1.html",e);
      });

   $("#thinker1").click(function (e){
    e.preventDefault();
    genBox("thinker1.html",e);
     });

  $("#thinker2").click(function (e){
  e.preventDefault();
  genBox("thinker2.html",e);
   });

  $("#htemple").click(function (e){
   e.preventDefault();
  genBox("htemple.html",e);
     });

  $("#feelit").click(function (e){
  e.preventDefault();
  genBox("feelit.html",e);
    });

  $("#success").click(function (e){
   e.preventDefault();
   genBox("success.html",e);
   });

   $("#tv").click(function (e){
    e.preventDefault();
    genBox("tv.html",e);
    });

    $("#recipe").click(function (e){
      e.preventDefault();
      genBox("recipe.html",e);
      });

    $("#vauge").click(function (e){
      e.preventDefault();
      genBox("vauge.html",e);
     });
     $("#history").click(function (e){
      e.preventDefault();
      genBox("history.html",e);
     });

     $("#connectr").click(function (e){
      e.preventDefault();
      genBox("connect_reinstated.html",e);
      });

      $("#isolated").click(function (e){
        e.preventDefault();
        genBox("isolated.html",e);
        });

        $("#space").click(function (e){
          e.preventDefault();
          genBox("space.html",e);
          });

          $("#about").click(function (e){
            e.preventDefault();
            genBox("about.html",e);
            });
  

function getposX(e)
{
  const el = document.getElementById(e);
  return el.offsetLeft;
}
function getposY(e)
{
  const el = document.getElementById(e);
  return el.offsetTop;
}
function genBox(fileaddress,elem)
{
    const tempdiv = document.createElement("div");
    const closebtn = document.createElement("button");
    const box = document.createElement("iframe");
    console.log(elem);
    tempdiv.className = "window";
    const divX = getposX(elem.target.id);
    const divY = getposY(elem.target.id);
    tempdiv.setAttribute("style",`top:${divY+20}px; left:${divX+20}px;`);
    closebtn.className = "close";
    closebtn.innerText = "X";
    box.setAttribute("src" , fileaddress);
    tempdiv.appendChild(closebtn);
    tempdiv.appendChild(box);
    // document.body.append(tempdiv);

   document.body.append(tempdiv);
  //  console.log($(id));
    // box.className = "drag"
    // $( ".window" ).resizable();
    $(".window").draggable();
   
    $(".close").click(function (){
        $((this).parentNode).remove();
        
        console.log("this is working");
    });
}

$(document).ready(function() {
  $('.hover-text').hover(function() {
    $(this).text('Interconnectivity'); /* Change the text on hover */
  }, function() {
    $(this).text('Connecivity'); /* Change the text back when the mouse leaves */
  });
});
//function to remove the object

// $(document).ready(function() {
//   $('.hover-text').hover(function() {
//     $(this).text('interconnectivity'); /* Change the text on hover */
//   }, function() {
//     $(this).text('Connectivity'); /* Change the text back when the mouse leaves */
//   },function(){
//   $(this).text('Connection'); /* doesn't work */
//   });
// });
// //function to remove the object
