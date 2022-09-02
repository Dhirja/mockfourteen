
var bookArrlist=JSON.parse(localStorage.getItem("book-list"))||[];
 var admited=JSON.parse(localStorage.getItem("admitted")) || [];
 var rejectted=JSON.parse(localStorage.getItem("rejected")) || [];
 console.log(bookArrlist);
   var bookcount=document.getElementById("book-count");
   bookcount.innerHTML=bookArrlist.length;

   display(bookArrlist);
   function display(bookArrlist){

    bookArrlist.map(function(el,index){
       
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

   
    var col6=document.createElement("td")
    var btn1=document.createElement("button");
    btn1.setAttribute("id","btn1");
    btn1.innerText="Buy";
    

    
    col6.addEventListener("click",function(){MarkAccepted(el)});
    col6.append(btn1);
    

    var col7=document.createElement("td")
    var btn2=document.createElement("button");
    btn2.setAttribute("id","btn2");
    
    btn2.innerText="Add";
    col7.addEventListener("click",function(){MarkRejected(el)});
    col7.append(btn2);

    var col8=document.createElement("td");
    col8.innerText=el.Price;

    row.append(col1,col2,col3,col4,col5,col6,col7,col8);



    document.querySelector("#body").append(row);
    })
  };
     function MarkAccepted(el){
         console.log(el);
         admited.push(el);
         localStorage.setItem("admitted",JSON.stringify(admited));
     }

     function MarkRejected(el){
        console.log(el);
        rejectted.push(el);
        localStorage.setItem("rejected",JSON.stringify(rejectted));
    }

    // function SortItems(){
    //     var sorting=document.querySelector("#filter").value
    //     console.log(sorting)
        
    //     if(sorting=="Fiction"){
    //         bookArrlist.sort(function(a,b){
    //         return b.-a.IMDB_Rating
    //       })
    //        display(moviesData)
    //     }
    //     else if(sorting=="l2h"){
    //       moviesData.sort(function(a,b){
    //         return a.IMDB_Rating-b.IMDB_Rating;
    //       })
    //        display(moviesData)
    //     }
    // }