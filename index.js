const fs = require('fs');

const query = process.argv[2].toLowerCase()

if(query.length !== 5) {
    console.error("query must be 5 letters")
}
else {
    const data = fs.readFileSync('words.txt').toString();
    const words = data.split('\n')

    const regexStr = query.split('')
        .map(alphabet => alphabet === '*'? '[a-z]': alphabet)
        .join('')
    const regex = new RegExp(regexStr);
    const result = words.filter(word => regex.test(word))
    console.log(result.join('\n'))
}
