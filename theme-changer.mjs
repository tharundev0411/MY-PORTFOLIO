import fs from 'fs';
import path from 'path';

const basePath = 'c:/Users/User/OneDrive/Desktop/tharun_porfolio/src';

const filesToUpdate = [
  'App.css',
  'components/Navbar/Navbar.css',
  'components/Hero/Hero.css',
  'components/About/About.css',
  'components/SocialLinks/SocialLinks.css',
  'components/Skills/Skills.css',
  'components/Achievements/Achievements.css',
  'components/Projects/Projects.css',
  'components/Certificates/Certificates.css',
  'components/Contact/Contact.css',
];

filesToUpdate.forEach(file => {
  const fullPath = path.join(basePath, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace light text/translucency with black text/translucency for light theme
    // Replace 255, 255, 255 with 0, 0, 0 where it represents translucent borders/backgrounds
    content = content.replace(/rgba\(255,\s*255,\s*255,\s*(0\.\d+)\)/g, 'rgba(0, 0, 0, $1)');
    
    // Footer in App.css
    if (file === 'App.css') {
      content = content.replace(/rgba\(17,\s*24,\s*39,\s*0\.9\)/g, 'rgba(240, 234, 214, 0.9)');
    }
    
    // Navbar
    if (file.includes('Navbar.css')) {
      content = content.replace(/rgba\(3,\s*7,\s*18,\s*0\.8\)/g, 'rgba(248, 245, 240, 0.8)');
    }

    // Modal overlay
    if (file.includes('Certificates.css')) {
      content = content.replace(/rgba\(0,\s*0,\s*0,\s*0\.85\)/g, 'rgba(248, 245, 240, 0.85)');
    }
    
    // Specific solid colors
    content = content.replace(/box-shadow: 0 4px 15px rgba\(139, 92, 246, 0.3\);/g, 'box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);');
    content = content.replace(/box-shadow: 0 6px 20px rgba\(139, 92, 246, 0.4\);/g, 'box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);');
    content = content.replace(/box-shadow: 0 10px 20px rgba\(139, 92, 246, 0.4\);/g, 'box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);');
    content = content.replace(/box-shadow: 0 15px 30px rgba\(6, 182, 212, 0.2\);/g, 'box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);');
    content = content.replace(/rgba\(6, 182, 212, 0\.4\)/g, 'rgba(0, 0, 0, 0.2)');
    content = content.replace(/rgba\(6, 182, 212, 0\.1\)/g, 'rgba(0, 0, 0, 0.05)');
    
    content = content.replace(/rgba\(59,\s*130,\s*246,([^\)]+)\)/g, 'rgba(0, 0, 0,$1)'); // Blue
    content = content.replace(/rgba\(139,\s*92,\s*246,([^\)]+)\)/g, 'rgba(0, 0, 0,$1)'); // Purple

    fs.writeFileSync(fullPath, content, 'utf8');
  }
});
