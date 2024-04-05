
document.addEventListener('DOMContentLoaded', () => {
//to increament
let number = 0;
const counter = document.getElementById('counter');
        
let increament = setInterval(() => {
    counter.innerText = number
    number++;
    }, 1000);

//manually increament using the plus button
    const plus =document.getElementById("plus");
    plus.addEventListener('click', () => {
        counter.innerText = number;
        number++;
    })

//manually decrement using minus button

    const minus = document.getElementById('minus');
    minus.addEventListener('click', () => {
        counter.innerHTML = number;
        number--;
    })
//adding the liker fuctionality
    const liker = document.getElementById('heart');
    liker.addEventListener('click', () => {
        const list = document.querySelector('.likes')
        const li = document.createElement('li')
    
        li.innerHTML= `${number} Creatures likes this!`
        list.appendChild(li);

    })
//pause button
    const pause = document.getElementById('pause')
    let allButtons = document.querySelectorAll('button:not(#pause)');
    let pausedButton = false;
    console.log(allButtons);
    console.log(pause)
    pause.addEventListener('click', () => {
        if(!pausedButton){
            clearInterval(increament);
            allButtons.forEach((button) => {
                button.disabled = true;
            })
            pause.innerHTML = 'resume'
            pausedButton= true;

        } else {
            increament = setInterval(() => {
                counter.innerHTML = number;
                number++;
            }, 1000)
            allButtons.forEach((button) => {
                button.disabled = false;
            })
            pause.innerHTML = 'pause'
            pausedButton = false;
        }


    })

//Adding comments
document.getElementById('comment-form').addEventListener('submit', (e) => {
    e.preventDefault();

    let commentInput = document.getElementById('comment-input')
    const p = document.createElement('p');
    const comments = document.getElementById('list')
    console.log(comments);
    p.innerText = commentInput.value
    comments.appendChild(p)

})

});