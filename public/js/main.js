$(document).ready(function()
{
  $(".box").css({
                  // "background-image" : "url('https://wallpapercave.com/uwp/uwp401814.jpeg')",
                  "background-color" : "var(--box_bg)",
                  // "background-repeat" : "no-repeat",
                  // "background-size" : "cover"
               });

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function()
                            {
                              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                                $(".navbar-burger").toggleClass("is-active");
                                $(".navbar-menu").toggleClass("is-active");
                            }
                          );



let realdata = " ";
const getRandomQuotes = () =>{

                                let rnum = Math.floor(Math.random() * 1642);
                                console.log(rnum);
                                $(".quotes").html(`<i class="ri-double-quotes-l"></i> ${realdata[rnum].text} <i class="ri-double-quotes-r"></i>`);
                                $(".author").html(`– ${realdata[rnum].author}`);
                              }

const nextQuotes = async () =>{
                                try
                                {
                                  const api = 'https://type.fit/api/quotes';
                                  let data = await fetch(api);
                                //  console.log(data);  //we get here response.
                                  // console.log(data.json());
                                   realdata = await data.json();
                                   //console.log(realdata.length);  //1643,so we multiple by 10 or 1642
                                  getRandomQuotes();

                                } catch (e)
                                {
                                  console.log(e);
                                }
                              }

$("#submit_btn").click(getRandomQuotes);
 nextQuotes();

 var y = new Date().getFullYear();
 $(".hero-foot small").html(y);

});
