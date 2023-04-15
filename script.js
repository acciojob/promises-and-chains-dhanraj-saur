// //your JS code here. If required.

let formbutton = document.getElementById("btn");
function myFunction(name , age)
{
 return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(age > 18)
            {
                resolve(
                    alert(`Welcome, ${name}. You can vote.`)
                  
                )
            }
            else
            {
                 alert(`Oh sorry ${name}. You aren't old enough.`)
            }
        } , 4000)
 })
}
formbutton.addEventListener("click" , (event) => {
    event.preventDefault();
    let nameinput = document.getElementById("name").value;
    let ageinput = document.getElementById("age").value;
    if (nameinput == "" && ageinput == "") {
        alert("Please enter valid details")
    }
    else
    {
        myFunction(nameinput , ageinput);
    }
})