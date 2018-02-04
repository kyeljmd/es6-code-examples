const posts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  ];

  const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  ];

function getPostsById(id){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const post  = posts.find(data => data.id === id);
            if(post){
                resolve(post)
            }else {
                reject(Error('No Post found for the given ID'))
            }
        },200)
    });
}

function hydrateAuthor(post){
    return new Promise((resolve, reject) => {
        const details = authors.find(person => person.name === post.author );

        if(details) {
            post.authorDetails = details;
            resolve(post);
        }else {
            reject(Error("Cant find the author"));
        }
    })
}

 getPostsById((3))
 .then(res => {
     console.log(res)
     return hydrateAuthor(res);
 })
 .then(post => {
     console.log(post)
 })
 .catch(err => {console.log(err)})
