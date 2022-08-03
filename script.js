
fetch('https://zenquotes.io/api/random').then(response => { console.log(response); }).then(data => { console.log(data); }).catch(error => { console.log(error) })