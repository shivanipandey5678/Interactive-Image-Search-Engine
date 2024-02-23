
document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    const accessKey = "nNSgpK9_WXy2i5F2og0CHpgdlr8_QG6EthUJS4SFyKs";
    const searchform = document.getElementById("search-form");
    const searchBox = document.getElementById("search-box");
    const searchResult = document.getElementById("search-result");
    const searchMoreBtn = document.getElementById("show-more");

    let Keyword = "";
    let page = 1;

    async function searchImage() {
        try{
           
            Keyword = searchBox.value;
            
            const url = `https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${accessKey}&per_page=12`
            const response = await fetch(url);
            const data = await response.json();
            
            const results=data.results;
            results.map((result)=>{
               const image= document.createElement('img');
               image.src=result.urls.small;
               const imagelink=document.createElement("a");
               imagelink.href=result.links.html;
               imagelink.target="_blank";
               imagelink.appendChild(image);
               imagelink.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent default action (opening link in the same tab)
                window.open(imagelink.href, "_blank"); // Open link in new tab
            });
        
               searchResult.appendChild(imagelink);
              
              
            })

            searchMoreBtn.style.display="block";
           
            
            
        }
        catch(err){
            console.log(err)
        }
    }
    
       

    searchform.addEventListener("submit", async (e) => {
        e.preventDefault();
        page = 1;
         searchImage();
       
    });
    searchMoreBtn.addEventListener("click",()=>{
        page++;
        searchImage();
    })
    
});


