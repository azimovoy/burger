let lvl = document.querySelector('.level'),
i = 0;

function lvl_inc (i) {
    
    if(i == 100) {
        lvl.innerHTML = `${i} lvl`
        lvl.style = `margin: 50px; transform: scale(2); transition: all 300ms; color: rgb(${ramdom()},${ramdom()},${ramdom()}); `
        
    }else {
        lvl.style = ` color: rgb(${ramdom()},${ramdom()},${ramdom()}); `
        i++
        lvl.innerHTML = i
    }
    setTimeout(() => lvl_inc (i), 10);
}

lvl_inc (i);

function ramdom() {
    return Math.floor(Math.random() * 255);
}


