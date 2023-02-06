
const posts = [

    {
        title: 'this is title 1',
        body: 'this is body1'
    },

    {
        title: 'this is title 2',
        body: 'this is body1'
    },


    {
        title: 'this is title 3',
        body: 'this is body1'
    },


    {
        title: 'this is title 4',
        body: 'this is body1'
    },
    {
        title: 'this is title 4',
        body: 'this is body1'
    },


]

// //
// <div class="post">
// <h4 class="post-title">post title</h4>
// <div class="post-body">post description</div>
// </div>

const fetchdata = async (confing) => {
    try {
        const res = await fetch(confing);
        return res.formData;
    } catch (err) {
        throw Error(err)
    }
}


const postsEle = document.querySelector('.posts')

const loadAllDAta = async () => {
    // const posts = await fetchdata('')
    posts.map(post => {
        const { title, body } = post;
        const postele = document.createElement('div');
        postele.classList.add('post');
        postele.innerHTML = `       
      <h4 class="post-title">${title}</h4>
      <div class="post-body">${body}</div>
        `;
        postsEle.appendChild(postele)
    })
}
loadAllDAta()
