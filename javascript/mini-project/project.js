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
            let button = document.createElement('button');
            button.innerText = 'Details';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(users => {
                        for (const item of users) {
                            let details = document.createElement('div');
                            details.classList.add('card2')
                            details.innerHTML =
                                `<h2>Email: ${item.email}</h2>
                                 <h3>Body: ${item.body}</h3>
                                 <h3>Adress: ${item.address.street.city.zipcode.geo}</h3>
                                 <h3>Phone: ${item.phone}</h3>
                                 <h4>Website:${item.website}</h4>
                                 <h5>Company:${item.company.name.bs.catchPhrase}</h5>`;

                      userDiv.appendChild(details);
                        }
                    });
            }

            button.disabled = true;

            userDiv.appendChild(button);
            wrap.appendChild(userDiv);
            document.body.appendChild(wrap);

        }
    });
