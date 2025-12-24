
import * as fa from 'react-icons/fa';
import * as vsc from 'react-icons/vsc';
import fs from 'fs';

const checks = {
    FaJava: !!fa.FaJava,
    FaAws: !!fa.FaAws,
    VscAzure: !!vsc.VscAzure
};

fs.writeFileSync('fallback_icons_check.json', JSON.stringify(checks, null, 2), 'utf8');
