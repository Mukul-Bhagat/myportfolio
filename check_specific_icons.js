
import * as si from 'react-icons/si';
import fs from 'fs';

const icons = ['SiAmazonaws', 'SiAmazon', 'SiAws', 'SiMicrosoftazure', 'SiAzure'];
const results = {};

icons.forEach(name => {
    results[name] = !!si[name];
});

fs.writeFileSync('icon_check_result.json', JSON.stringify(results, null, 2), 'utf8');
