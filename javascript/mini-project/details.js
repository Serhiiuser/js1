
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// // 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

//
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then ( users => {
        let wrapper = document.createElement('wrap');
        wrapper.classList.add('wrap');
        for (const user of users) {
            let details = document.createElement('div');
            details.classList.add('card2')
            details.innerHTML =
                `<h2>Username:${user.username}</h2>
                      <h3>Email: ${user.email}</h3>)
                     <h4>Address:${user.address.street}</h4>
                     <h5>Phone: ${user.phone}</h5>
                     <h6>Website:${user.website}</h6>
                   `;


            let btn1 = document.createElement('button');
            btn1.classList.add('btnCard')
            btn1.innerText = 'Get Post'
            btn1.onclick =  (id) => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(response => response.json())
                    .then(posts => {
                        for (const post of posts) {
                            let postList = document.createElement('div');
                            postList.classList.add('postCard');
                            postList.innerHTML =
                                `<h2>Title:${post.title}</h2>`;


                            btn1.disabled = true;
                            btn1.appendChild(postList);

                            console.log(btn1)
                        }

                //         let btn2 = document.createElement('button');
                //         btn2.classList.add('btnCard2')
                //         btn2.innerText = 'Get Posts'
                //         btn2.onclick = (id) => {
                        fetch('https://jsonplaceholder.typicode.com/posts')
                            .then(response => response.json())
                            .then(posts => {
                                for (const post of posts) {
                                    let postList = document.createElement('div');
                                    postList.classList.add('postCard');
                                    postList.innerHTML =
                                        `<h2>Title:${post.title}</h2>
                               `;
                                    let detailsList2 = document.createElement('a');
                                    detailsList2.href = 'posts.html?id='+user.id
                                    detailsList2.innerText = 'details posts'
                                    detailsList2.classList.add('post');


                                    postList.appendChild(detailsList2)
                                }

                            })
                //
                // }
                    })
            }


                        details.appendChild(btn1)
                        wrapper.appendChild(details);
                        document.body.appendChild(wrapper);
            }});

// object.onclick = function(){myScript};
