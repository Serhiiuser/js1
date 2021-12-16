// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    .then(posts => {

        let wrap = document.createElement('div');
        wrap.classList.add('wrapper');
        for (let post of posts) {
            let divCard = document.createElement('div');
            divCard.classList.add('card');
            divCard.innerHTML = `<h2>Id:${post.id}</h2>
                                <h3>Title:${post.title}</h3>
                                <h4>Body:${post.body}</h4>`;
            let button = document.createElement('button');
            button.innerText= 'Comments';
            button.onclick=(id)=>{
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                  .then(response => response.json())
                  .then(comments =>{
                      for (let comment of comments) {
                          if (post.id === comment.postId){
                              let divComments = document.createElement('div');
                              divComments.classList.add('divComments');
                              divComments.innerHTML = `
                                                <h3>Id:${comment.id}</h3>
                                                <h4>Name:${comment.name}</h4>
                                                <h5>Email:${comment.email}</h5>`;

                              divCard.appendChild(divComments);
                          }
                          button.disabled= true;
                      }
                  })

            }
            divCard.appendChild(button);
            wrap.appendChild(divCard);
            document.body.appendChild(wrap);
        }

    });



