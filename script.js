name1 = document.getElementsByName("name1")[0];
name2 = document.getElementsByName("name2")[0];
loveCata = ["Romantic", "Innocent", "Loyal", "Possessive", "Unconditional", "Mutual Respect", "Selfless", "Pure", "Trust", "Emotional"]

calculateLove = function() {
    document.querySelector('.love-cata').innerHTML = ``
    n1 = name1.value.toLowerCase();
    n2 = name2.value.toLowerCase();
    randomno = Math.floor(Math.random() * 49)
    if (n1 === '' | n2 === ''){document.querySelector('.love-percentage').innerHTML = ``}
    else{
        tens = 0
        ones = 0
        lst1 = ['t', 'r', 'u', 'e']
        lst1.forEach((i)=>{
            if (n1.includes(i)) {
            tens+=n1.match(i).length;
            }
            if (n2.includes(i)) {
                tens+=n2.match(i).length;
            }
        })
        lst2 = ['l', 'o', 'v', 'e']
        lst2.forEach((i)=>{
            if (n1.includes(i)) {
            ones+=n1.match(i).length;
            }
            if (n2.includes(i)) {
                ones+=n2.match(i).length;
            }
        })
        if(tens<2){
            tens+=8
        }
        else if(tens<3){
            tens = 8
        }
        else if(tens<5){
            tens = 4
        }
        else if(tens>=10){
            tens -= 1

        }
        loveper = tens*10+ones
        lovecata_index = ones>=4 ? [ones, ones-1, ones-2, ones-3, ones-4] : [ones, ones+1, ones+2, ones+3, ones+4]
        if(loveper<100 && loveper>=91){lover_info = `You have the best love equation with ${name2.value} and you seems to have a perfect partner. `}
        else if(loveper<91 && loveper>=81){lover_info = `You have a good love equation with ${name2.value} and you seems to have a good partner. `}
        else if(loveper<81 && loveper>=71){lover_info = `You have a good love equation with ${name2.value} and you seems to have a good partner. `}
        else{
            lover_info = `The calculation of the love calculator shows that your love meter of love is not so bad so Love Calculator advise you to not to fall in the feeling of love with ${name2.value}.`
        }
        document.querySelector('.my-chart').innerHTML = '<canvas id="loveper"></canvas>'
        const lovechart = document.getElementById('loveper').getContext('2d');
        const myChart = new Chart(lovechart, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Love Meter',
                data: [tens*10+ones, 100-(tens*10+ones)],
                backgroundColor: [
                    'rgb(255,44,100)','rgb(255, 255, 255)',
                  ],
                  hoverOffset: 10
              }]
            },
        options: {
            responsive: true,
            maintainAspectRatio: false
            },
        });
        document.querySelector('.background').style.opacity = '0'
        document.querySelector('.tag-line').style.display = `none`
        document.querySelector('.user-info').style.display = `none`
        document.querySelector('.user-info').innerHTML = ``
        document.querySelector('#recheckper').style.display = 'flex'
        document.querySelector('.love-percentage').innerHTML = `Love Percentage = ${loveper}%` 
        document.querySelector('.love-cata').innerHTML += `<p>Characteristics that define your relationship : </p>`
        document.querySelector('.love-cata').style.display = 'flex'

        lovecata_index.forEach((i, j)=> document.querySelector('.love-cata').innerHTML += `<li>${j+1} -> ${loveCata[i]}</li>`)
        fetch('https://g.tenor.com/v1/search?q=loveyou&key=LFKOLDCGEUVU&limit=50').then(response => response.json()).then(data => {document.querySelector('#gif').innerHTML = `<img src="${data.results[randomno].media[0].gif.url}" alt="">`})
        document.querySelector('.loveInfotext').innerHTML += `${lover_info}`
        document.querySelector('.loveInfotext').style.display = 'block'
        document.querySelector('.share').innerHTML = `<a href="https://wa.me/?text=Hi ${name2.value} your love calculator results with ${name1.value} is ${loveper}%. \n You can check it on https://vishaljoshi789.github.io/LoveCalculator/" target='_blank'>Share : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='rgb(62,189,78)' d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/></svg></a>`

    }

}


recalculate = ()=>{
    document.querySelector('.user-info').innerHTML = `<form action="#" method="get"  onsubmit="return false" >
    <div>
    <label for="name1">Name 1:</label>
    <input type="text" name="name1" id="name1"></div>
    <div>
    <label for="name2">Name 2:</label>
    <input type="text" name="name2" id="name2"></div>
    <button type="submit" onclick="calculateLove()">Calculate</button>
</form>`
document.querySelector('.tag-line').innerHTML = `Place to check your Love Percentage and share with your Partner.`
document.querySelector('.background').style.opacity = '0.7'
document.querySelector('.love-cata').innerHTML = ``
document.querySelector('.love-cata').style.display = 'none'
document.querySelector('.love-percentage').innerHTML = ``
document.querySelector('.my-chart').innerHTML = ``
document.querySelector('#gif').innerHTML = ``
document.querySelector('.share').innerHTML = ``
document.querySelector('#recheckper').style.display = 'none'
document.querySelector('.loveInfotext').innerHTML = ``
document.querySelector('.loveInfotext').style.display = `none`
document.querySelector('.tag-line').style.display = `block`
document.querySelector('.user-info').style.display = `block`
}