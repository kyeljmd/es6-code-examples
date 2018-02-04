//Destructunring objects
const person = {
    first: 'Wes',
    last: 'Bos',
    country: 'Canada',
    twitter: '@wesbos'
};

const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
        social: {
            twitter: 'https://twitter.com/wesbos',
            facebook: 'https://facebook.com/webos.developer'
        },
        web: {
            blog: 'https://wesbos.com'
        }
    }   
}

const {first, last } = person;

console.log(first);
console.log(last)

//Destructuring it with a different name
const {twitter:twitterAccount, facebook:fbAccount} = wes.links.social;

console.log(twitterAccount);
console.log(fbAccount);

var settings = {width: 300, color:'black'};
//Add Default value
const {width = 100, height = 100, color = 'blue', fontSize = 23} = settings;