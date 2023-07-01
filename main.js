function generateList(array) {
   let ul = document.createElement('ul');
   
   for (let i = 0; i < array.length; i++) {
    let li = document.createElement('li');
    
        if (Array.isArray(array[i])) {
            li.appendChild(generateList(array[i]));
        } else {
          li.innerHTML = array[i];
        }
        ul.appendChild(li);
    }
    return ul;
}

const array = [1,2,[1.1,1.2,1.3],3];
const list = generateList(array);
document.body.appendChild(list);