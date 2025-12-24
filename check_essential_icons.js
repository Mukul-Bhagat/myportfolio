
import * as si from 'react-icons/si';
import fs from 'fs';

const checks = [
    'SiReact', 'SiNodedotjs', 'SiMongodb', 'SiDocker', 'SiKubernetes', 'SiGithub',
    'SiLinux', 'SiJenkins', 'SiGit', 'SiFirebase', 'SiMysql', 'SiShopify',
    'SiJavascript', 'SiTypescript', 'SiHtml5', 'SiCss3', 'SiKotlin', 'SiPython', 'SiJava', 'SiCplusplus'
];

const results = {};
checks.forEach(name => {
    results[name] = !!si[name];
});

fs.writeFileSync('essential_icons_check.json', JSON.stringify(results, null, 2), 'utf8');
