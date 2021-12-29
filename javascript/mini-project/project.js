// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let wrap = document.createElement('wrapper');
        wrap.classList.add('wrapper');
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('card')
            userDiv.innerHTML =
                `<h1>ID: ${user.id}</h1>
                 <h2>Name: ${user.name}</h2>`;
            let detailsList = document.createElement('a');
            detailsList.href = 'details.html?id='+user.id
            detailsList.innerText = 'details info'
            detailsList.classList.add('details');




            userDiv.appendChild(detailsList)
            wrap.appendChild(userDiv);
            document.body.appendChild(wrap);

        }
    });
