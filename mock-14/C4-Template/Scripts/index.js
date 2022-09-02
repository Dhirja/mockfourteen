

document.getElementById("myform").addEventListener("submit",formsubmit);
var bookArr=JSON.parse(localStorage.getItem("book-list")) || [];

     function formsubmit(event){
         
       event.preventDefault()
     

    bookObj={
        Name:document.querySelector("#name").value,
        Author:document.querySelector("#author").value,
        Disc:document.querySelector("#desc").value,
        Dates:document.querySelector("#added").value,
        Cat:document.querySelector("#category").value,
        Price:document.querySelector("#price").value,
        }
         console.log(bookObj);
      bookArr.push(bookObj);

      localStorage.setItem("book-list",JSON.stringify(bookArr))

}
