
import * as si from 'react-icons/si';
import * as bs from 'react-icons/bs';

const iconsToCheck = [
    'SiCplusplus', 'SiJava', 'SiPython', 'SiKotlin', 'SiJavascript',
    'SiAndroid', 'SiReact',
    'SiNodedotjs', 'SiExpress', 'SiMongodb',
    'SiLinux', 'SiDocker', 'SiKubernetes', 'SiJenkins', 'SiGit', 'SiGithub', 'SiGithubactions',
    'SiMicrosoftazure', 'SiAmazonaws',
    'SiFirebase', 'SiMysql',
    'SiShopify', 'SiMicrosoftpowerplatform'
];

console.log("Checking SI Icons:");
iconsToCheck.forEach(icon => {
    if (!si[icon]) {
        console.log(`❌ Missing: ${icon}`);
    } else {
        // console.log(`✅ Found: ${icon}`);
    }
});

console.log("\nChecking BS Icons:");
if (!bs['BsFileTypeXml']) {
    console.log(`❌ Missing: BsFileTypeXml`);
}

// Try to find approximate matches
const allSi = Object.keys(si);
const powerIcons = allSi.filter(k => k.toLowerCase().includes('power'));
console.log("\nPossible Matches for Power:");
console.log(powerIcons.join(', '));

const allBs = Object.keys(bs);
const xmlIcons = allBs.filter(k => k.toLowerCase().includes('xml'));
console.log("\nPossible Matches for Xml in BS:");
console.log(xmlIcons.join(', '));
