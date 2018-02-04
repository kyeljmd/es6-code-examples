console.log('Fetching blog entry');

const postsPromise = fetch('https://wesbos.com/wp-jsan/wp/v2/posts');

postsPromise
.then((data) => data.json())
.then(data =>{ console.log(data) })
.catch((error) => {
    console.log("Tangina sira")
    console.error(error);
})