const p = new Promise((resolve, reject) => {
    
    resolve('Kyel is  Cool');
});
 
p
.then(data => { console.log((data)); })
.catch(error => {
    console.log('error')
})