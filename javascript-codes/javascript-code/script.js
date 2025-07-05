for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log('It is 3');
        continue;
    }

    if (i === 5) {
        console.log('5 Stop the loop');
        break;
    }

    console.log('Number' + i);
}

const user = {
    name: 'Han',
    province: '경기도',
    city: '성남시'
};

for (let x in user) { 
    console.log(x, user[x]);
    console.log(`${x} : ${user[x]}`);
}

let i = 0;
while (i < 10) {
    console.log('Number ' + i);
    i++;
}

let j = 100;

do {
    console.log('Number ' + j);
    j++;
}
while (j < 10);

const loction = ['서울', '부산', '경기도', '대구'];
for (let i = 0; i < loction.length; i++) {
    console.log(loction[i]);
}
loction.forEach(function(item, index) {
    console.log(item, index);
});
location.map(function(location){
    console.log(location);
})

