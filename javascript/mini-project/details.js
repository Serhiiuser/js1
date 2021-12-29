fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let wrapper = document.createElement('wrap');
        wrapper.classList.add('wrap');
        for (const item of users) {
            let details = document.createElement('div');
            details.classList.add('card2')
            details.innerHTML =

                `    <h2>Username: ${item.username}</h2>
                     <h3>Email: ${item.email}</h3>
                     <h4>Adress: ${item.address.street}</h4>
                     <h5>Phone: ${item.phone}</h5>
                     <h6>Website:${item.website}</h6>
                `;
            console.log(item)

            wrapper.appendChild(details);
            document.body.appendChild(wrapper);

        }
    });

