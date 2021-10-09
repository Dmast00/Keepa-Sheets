

const input = document.getElementById('input-text');


input.addEventListener('click',(e)=>{
    if(input.className == 'text-box'){
        input.className = 'text-box-large'

    }
    else if(input.className == 'text-box-large'){
                setTimeout(() => {
            input.className = 'text-box'
        }, 1501);
        input.className = 'text-box-short';
    }
    

});

document.getElementById('input-text').onkeydown = function(e){
    if(e.key === 'Enter'){
        console.log('clicked enter')
        setTimeout(() => {
        input.className = 'text-box'
        }, 1501);
        input.className = 'text-box-short';
        content = document.getElementById('input-text').value;
        input.value = ''; 

        const parent = document.getElementById('containercards'); 
        div = document.createElement('div');
        div.className = `note`;
        div.id = generateId();
        
        
        p = document.createElement('p');
        p.className = `p-text`;

        b = document.createElement('b');
        b.textContent = content;
        b.className = `b-text`;

        p.append(b);
        div.append(p);
        parent.append(div);
        readdid()
        
        
    }
}
function readdid(){
    document.getElementById(`${this.div.id}`).scrollIntoView();
}

function generateId(){
    return Math.floor(Math.random()*1000000);
}

// var largest = 0;

// function fit(){
//     notes = document.querySelector('#containercards');
//     const divs = notes.childNodes;
// }