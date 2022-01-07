name1 = document.getElementsByName("name1")[0];
name2 = document.getElementsByName("name2")[0];

calculateLove = function() {
    n1 = name1.value.toLowerCase();
    n2 = name2.value.toLowerCase();
    randomno = Math.floor(Math.random() * 19)
    if (n1 === '' | n2 === ''){document.querySelector('#result').innerHTML = `Enter all Entries to proceed.`}
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
            tens+=6
        }
        else if(tens<5){
            tens += 4
        }
        document.querySelector('#result').innerHTML = `${String(tens) + String(ones)}%`
        
        fetch('https://g.tenor.com/v1/search?q=loveyou&key=LFKOLDCGEUVU').then(response => response.json()).then(data => {document.querySelector('#gif').innerHTML = `<img src="${data.results[randomno].media[0].gif.url}" alt="">`})
    }
}