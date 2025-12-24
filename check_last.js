
import * as si from 'react-icons/si';
import fs from 'fs';

const checks = {
    SiGithubactions: !!si.SiGithubactions, // Case might be SiGithubActions?
    SiGithubActions: !!si.SiGithubActions,
    SiMicrosoft: !!si.SiMicrosoft
};

fs.writeFileSync('last_check.json', JSON.stringify(checks, null, 2), 'utf8');
