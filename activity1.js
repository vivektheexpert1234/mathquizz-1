score=0;
function update(){
    score=score+1
    document.getElementById("score").innerHTML="score: "+score
}
function save()
{
    localStorage.setItem("score",score)
}
function next()
{
    window.location="activity_2.html"
}