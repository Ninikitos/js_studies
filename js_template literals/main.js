const name = 'Nick';
const age = 29;
const job = 'Developer';
const city = 'Miami';

// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job ${job}</li>
        <li>City: ${2 + 2}</li>
        <li>City: ${city}</li>
        <li>City: ${city}</li>
        <li>City: ${city}</li>
    </ul>
`;

document.body.innerHTML = html;