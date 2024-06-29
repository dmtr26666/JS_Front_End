function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog';
    let loadPostBtnEl = document.getElementById('btnLoadPosts');
    let postCollectionEl = document.getElementById('posts');
    let viewPostBtnEl = document.getElementById('btnViewPost');
    let postTitleEl = document.getElementById('post-title');
    let postBodyEl = document.getElementById('post-body');
    let postCommentsEl = document.getElementById('post-comments');

    loadPostBtnEl.addEventListener('click', () => {
        fetch(`${postsUrl}/posts`)
        .then(response => response.json())
        .then(data => {
            for (const post in data) {
                let postEl = document.createElement('option');
                postEl.value = post;
                postEl.title = data[post].body;
                postEl.textContent = data[post].title;
                postCollectionEl.appendChild(postEl);
            }
        })
        .catch(error => console.log('error'));
    });

    viewPostBtnEl.addEventListener('click', () => {
        postCommentsEl.innerHTML = '';
        let searchedPost = postCollectionEl.options[postCollectionEl.selectedIndex];
        console.log(searchedPost);
        fetch(`${postsUrl}/comments`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            postTitleEl.textContent = searchedPost.textContent;
            postBodyEl.textContent = searchedPost.title;


            for (const post in data) {
                let newItem = document.createElement('li');
                if (data[post].postId === searchedPost.value) {
                    newItem.textContent = data[post].text;
                    postCommentsEl.appendChild(newItem);
                }
            }
        })
        .catch(error => console.log('error'));
    });
}

attachEvents();