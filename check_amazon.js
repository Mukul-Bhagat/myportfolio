
import * as si from 'react-icons/si';

const iconName = 'SiAmazonaws';
if (si[iconName]) {
    console.log(`✅ ${iconName} exists`);
} else {
    console.log(`❌ ${iconName} does NOT exist`);
    // Find alternatives
    const all = Object.keys(si);
    const matches = all.filter(k => k.toLowerCase().includes('amazon') || k.toLowerCase().includes('aws'));
    console.log('Available Amazon/AWS icons:', matches);
}
