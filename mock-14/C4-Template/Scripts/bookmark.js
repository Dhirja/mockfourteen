
var bookMarkArr=JSON.parse(localStorage.getItem("rejected")) || [];


console.log(bookMarkArr);
 
bookMarkArr.map(function(el,index)
 {
      
    var row=document.createElement("tr");

    var col1=document.createElement("td");
     col1.innerText = el.Name;
 
     var col2=document.createElement("td");
     col2.innerText=el.Author;
 
     var col3=document.createElement("td");
     col3.innerText= el.Disc;
 
     var col4=document.createElement("td");
     col4.innerText=el.Dates;
 
     var col5=document.createElement("td");
     col5.innerText=el.Cat;
 
     var col6=document.createElement("td");
     col6.innerText=el.Price;
 
    row.append(col1,col2,col3,col4,col5,col6);
 

   document.querySelector("#tblbody").append(row);
});