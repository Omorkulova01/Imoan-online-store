window.addEventListener('click', function(event) {
    let btnCount

    if(event.target.className === 'btn-plus' || event.target.className === 'btn-minus'){
        const counterWrapper = event.target.closest('.counter-wrapper')
        btnCount = counterWrapper.querySelector('.btn-count')
    }

    if(event.target.className === 'btn-plus'){

        btnCount.innerText = ++btnCount.innerText
    }

    if(event.target.className === 'btn-minus'){
        if(parseInt(btnCount.innerText) > 1){
            btnCount.innerText = --btnCount.innerText
        }
    }   
})