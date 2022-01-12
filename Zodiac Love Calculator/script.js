name1 = document.getElementsByName("name1")[0];
name2 = document.getElementsByName("name2")[0];
loveCata = ["Romantic", "Innocent", "Loyal", "Possessive", "Unconditional", "Mutual Respect", "Selfless", "Pure", "Trust", "Emotional"]

calculateLove = function() {
    document.querySelector('.love-cata').innerHTML = ``
    n1 = name1.value.toLowerCase();
    n2 = name2.value.toLowerCase();
    randomno = Math.floor(Math.random() * 49)
    if (n1 === '' | n2 === ''){document.querySelector('.love-percentage').innerHTML = `Enter all Entries to proceed.`}
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
        document.querySelector('.my-chart').innerHTML = '<canvas id="loveper"></canvas>'
        const lovechart = document.getElementById('loveper').getContext('2d');
        const myChart = new Chart(lovechart, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Love Meter',
                data: [tens*10+ones, 100-(tens*10+ones)],
                backgroundColor: [
                    'rgb(255, 99, 132)','rgb(255, 255, 255)',
                  ],
                  hoverOffset: 10
              }]
            },
        options: {
            responsive: true,
            maintainAspectRatio: false
            },
        })
        document.querySelector('.love-percentage').innerHTML = `Love Percentage = ${loveper}%` 
        lovecata_index.forEach((i)=> document.querySelector('.love-cata').innerHTML += `<li>${loveCata[i]}</li>`)
        fetch('https://g.tenor.com/v1/search?q=loveyou&key=LFKOLDCGEUVU&limit=50').then(response => response.json()).then(data => {document.querySelector('#gif').innerHTML = `<img src="${data.results[randomno].media[0].gif.url}" alt="">`})

    }

}