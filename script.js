name1 = document.getElementsByName("name1")[0];
name2 = document.getElementsByName("name2")[0];

calculateLove = function() {
    n1 = name1.value.toLowerCase();
    n2 = name2.value.toLowerCase();
    randomno = Math.floor(Math.random() * 49)
    if (n1 === '' | n2 === ''){document.querySelector('.love-percentage').innerHTML = `Enter all Entries to proceed.`}
    else{
        tens = 0
        ones = 0
        romantic = 0
        emotional = 0
        trust = 0
        loyal = 0
        innosent = 0
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
            romantic = 90 - ones + 6
            emotional = 80 - ones + 9
            trust = 90 - ones + 2
            loyal = 90 - ones + 7
            innosent = 80 - ones + 7
        }
        else if(tens<3){
            tens = 8
            romantic = 80 - ones + 9
            emotional = 90 - ones + 6
            trust = 80 - ones + 8
            loyal = 90 - ones + 4
            innosent = 90 - ones + 1
        }
        else if(tens<5){
            tens = 4
            romantic = 80 - ones + 5
            emotional = 80 - ones + 9
            trust = 80 - ones + 3
            loyal = 90 - ones + 2
            innosent = 90 - ones + 4
        }
        else if(tens>=10){
            tens -= 1

        }
        document.querySelector('.my-chart').innerHTML = '<canvas id="loveper"></canvas>'
        document.querySelector('.love-cata').innerHTML = `<div><p>Romantic</p><canvas id="romantic-love"></canvas></div>
        <div><p>Emotional</p><canvas id="emotional-love"></canvas></div>
        <div><p>Trust</p><canvas id="trust-love"></canvas></div>
        <div><p>Loyal</p><canvas id="loyal-love"></canvas></div>
        <div><p>Innocent</p><canvas id="innocent-love"></canvas></div>`
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
        const romanticLove = new Chart(document.getElementById('romantic-love').getContext('2d'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'Romantic',
                    data: [romantic, 100-romantic],
                    backgroundColor: [
                        'rgb(255, 99, 132)','rgb(255, 255, 255)',
                      ],
                      hoverOffset: 10
                  }]
                },
            options: {
                responsive: true,
                // maintainAspectRatio: false
                },
            })
        const emotionalLove = new Chart(document.getElementById('emotional-love').getContext('2d'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'Emotional',
                    data: [emotional, 100-emotional],
                    backgroundColor: [
                        'rgb(255, 99, 132)','rgb(255, 255, 255)',
                      ],
                      hoverOffset: 10
                  }]
                },
            options: {
                responsive: true,
                // maintainAspectRatio: false
                },
            })
        const trustLove = new Chart(document.getElementById('trust-love').getContext('2d'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'Trust',
                    data: [trust, 100-trust],
                    backgroundColor: [
                        'rgb(255, 99, 132)','rgb(255, 255, 255)',
                      ],
                      hoverOffset: 10
                  }]
                },
            options: {
                responsive: true,
                // maintainAspectRatio: false
                },
            })
        const loyalLove = new Chart(document.getElementById('loyal-love').getContext('2d'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'Loyal',
                    data: [loyal, 100-loyal],
                    backgroundColor: [
                        'rgb(255, 99, 132)','rgb(255, 255, 255)',
                      ],
                      hoverOffset: 10
                  }]
                },
            options: {
                responsive: true,
                // maintainAspectRatio: false
                },
            })
        const innocentLove = new Chart(document.getElementById('innocent-love').getContext('2d'), {
            type: 'doughnut',
            data: {
                datasets: [{
                    label: 'Innocent',
                    data: [innosent, 100-innosent],
                    backgroundColor: [
                        'rgb(255, 99, 132)','rgb(255, 255, 255)',
                      ],
                      hoverOffset: 10
                  }]
                },
            options: {
                responsive: true,
                // maintainAspectRatio: false
                },
            })
        document.querySelector('.love-percentage').innerHTML = `Love Percentage = ${String(tens) + String(ones)}%`     
        fetch('https://g.tenor.com/v1/search?q=loveyou&key=LFKOLDCGEUVU&limit=50').then(response => response.json()).then(data => {document.querySelector('#gif').innerHTML = `<img src="${data.results[randomno].media[0].gif.url}" alt="">`})

    }

}