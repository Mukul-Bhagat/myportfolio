
import * as si from 'react-icons/si';
import fs from 'fs';

const all = Object.keys(si);
const azure = all.filter(k => k.toLowerCase().includes('azure'));
const microsoft = all.filter(k => k.toLowerCase().includes('microsoft'));

fs.writeFileSync('icon_search_results.json', JSON.stringify({ azure, microsoft }, null, 2), 'utf8');
