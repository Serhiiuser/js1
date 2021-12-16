// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrapper');
        for (let user of users) {
            let divCard = document.createElement('div');
            divCard.classList.add('card');
            divCard.innerHTML = `<h2>Name:${user.name}</h2>
                                <h3>Email:${user.email}</h3>
                                <h4>Address:${user.address}</h4>`;
            let button = document.createElement('button');
            button.innerText = 'Post';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (let post of posts) {
                            let divPost = document.createElement('div');
                            divPost.classList.add('divPosts');
                            divPost.innerHTML = `
                                                <h3>Id:${post.id}</h3>
                                                <h4>Title:${post.title}</h4>
                                                <h5>Body:${post.body}</h5>`;
                            divCard.appendChild(divPost);


                        button.disabled = true;
                    }
                    })
            }
                divCard.appendChild(button);
                wrap.appendChild(divCard);
                document.body.appendChild(wrap);

        }
    });


