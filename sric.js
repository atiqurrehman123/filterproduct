(function(){
    const btn=document.querySelectorAll('.btn')
    const filteritems=document.querySelectorAll('.filterDiv')

    btn.forEach((button)=>{

        button.addEventListener('click',(e)=>{
            e.preventDefault()
            const filter=e.target.dataset.filter;

            filteritems.forEach((items)=>{
                if(filter==='all'){
                    items.style.display='block'
                }else{
                    if(items.classList.contains(filter)){
                        items.style.display='block'
                    }
                    else{
                        items.style.display='none'
                    }
                }

            })
        })
    })
})()