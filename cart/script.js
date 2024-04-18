//show real product
var products=[
    {name:"white chair", headline:"soft alike cloud", price:"12000", image:"https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"brown chair", headline:"pure wood", price:"14000", image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"yellow-chair", headline:"for Work", price:"13000", image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fHww"}
]
var popularproducts=[
    {name:"white chair", headline:"soft alike cloud", price:"12000", image:"https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"brown chair", headline:"pure wood", price:"14000", image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww"},
    {name:"yellow-chair", headline:"for Work", price:"13000", image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fHww"}

];
//for each abko jahan argument me object deta hai index bhi deta hai or ap use use kr skhte hain
//data-index is an html thing where data- is the keyword and index is the variable name and it can be assigned any value of any datatype
function addproduct(){
var clutter="";
products.forEach(function(obj,index){
    clutter += `
    <div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    <img class="w-full h-full object-cover" src="${obj.image}">
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${obj.headline}.</h3>
                <h4 class="font-semibold mt-2">Rs.${obj.price}</h4>
            </div>
            <button data-indexx="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
            <i data-indexx="${index}" class="add ri-add-line"></i></button>
        </div>
    </div>
    </div>
    `;
})
document.querySelector("#add").innerHTML=clutter;

var clutter2="";
popularproducts.forEach(function(obj){
    clutter2 += `
    <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${obj.image}">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${obj.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${obj.price}</h4>
                    </div>
                </div>
                
    `
})
document.querySelector(".populars").innerHTML=clutter2;
}


var cart=[];
function addtocart(){
    document.querySelector(".products")
    .addEventListener("click",function(details){//details is variable name which can be anything that recieves a lot of data about the action "click"
        if(details.target.classList.contains('add')){
            // console.log(details.target.dataset.indexx);// dataset calls keyword data of html and .index returns the variable indexx not that value index of the foreach function
            //now adding that index object to cart
            cart.push(products[details.target.dataset.indexx]);
            console.log(cart); //whole object is added to cart
            showcart();

        }
    })
}

function showcart(){

    document.querySelector(".carticon").addEventListener("click",function(){
        document.querySelector(".cartexpnd").style.display="block";
    
        var clutter="";
        cart.forEach(function(obj,index){
        clutter += `
        <div class="flex gap-2 bg-white p-2 rounded-lg overflow-hidden">
        <div class="w-10 h-10 flex-shrink-0 rounded-lg "><img class="w-full h-full object-cover"src="${obj.image}"/></div>
        <div>
            <h3 class="font-semibold">${obj.name}</h3>
            <h5 class="text-sm font-semibold opacity-80">${obj.price}</h5>
        </div>
        </div>         
        `
        
    })
    

    document.querySelector(".cartexpnd").innerHTML=clutter; 
    })
        
}


addproduct();
addtocart();

//show real popular products
//on click of product add button add it to the cart

//you can add more functionality to it like close when clicked again
//and display bar when item is added