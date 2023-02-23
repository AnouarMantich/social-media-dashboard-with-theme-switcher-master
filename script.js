const body=document.querySelector("body");
const checkbox=document.querySelector(".checkbox");
const items=document.querySelectorAll(".item");
const ovItems= document.querySelectorAll(".ov-item"); 
const mode=document.querySelector(".mode");
const toChanges=document.querySelectorAll(".change");

const style = getComputedStyle(document.body)
checkbox.checked=false;

checkbox.addEventListener('change',function(e){
    if(e.target.checked)
    {
    mode.textContent="Dark Mode" 
    body.style.backgroundColor=style.getPropertyValue('--White');
    items.forEach(item=>{
        {item.style.backgroundColor=style.getPropertyValue('--Light-Grayish-Blue');}
    })
    ovItems.forEach(ovItem=>{
        {ovItem.style.backgroundColor=style.getPropertyValue('--Light-Grayish-Blue');}

    })

    toChanges.forEach(toChange=>{
        toChange.style.color=style.getPropertyValue('--Very-Dark-Blue');

    })
}
    else{
    mode.textContent="Light Mode" 

    body.style.backgroundColor=style.getPropertyValue('--Very-Dark-Blue');
    items.forEach(item=>{
        item.style.backgroundColor=style.getPropertyValue('--Dark-Desaturated-Blue');
    })
    ovItems.forEach(ovItem=>{
        {ovItem.style.backgroundColor=style.getPropertyValue('--Dark-Desaturated-Blue');}

    })

    toChanges.forEach(toChange=>{
        toChange.style.color=style.getPropertyValue('--White');

    })
    }
})


