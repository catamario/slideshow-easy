const pics = document.querySelectorAll(".slide");
var i=0;

  function slide_right()
{
    if(pics[i+1])
    {
        pics[i].classList.remove("current");
        pics[i+1].classList.add("current");
        i++;
    }
    else
    {
        pics[i].classList.remove("current");
        i=0;
        pics[i].classList.add("current");
    }

}  

function slide_left()
{
    if(pics[i-1])
    {
        pics[i].classList.remove("current");
        pics[i-1].classList.add("current");
        i--;
    }
    else
    {
        pics[i].classList.remove("current");
        i=2;
        pics[i].classList.add("current");
    }
}  