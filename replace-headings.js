const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'components', 'slides');
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // We want to target the motion.div that comes right after {/* Header */}
  // The structure is usually:
  // {/* Header */}
  // <motion.div
  //   initial={{ opacity: 0, y: -20 }}
  //   animate={isActive ? { opacity: 1, y: 0 } : {}}
  //   transition={{ duration: 0.6 }}
  
  // Actually, we can just replace:
  // initial={{ opacity: 0, y: -20 }}
  // animate={isActive ? { opacity: 1, y: 0 } : {}}
  // transition={{ duration: ... }}
  // when it's under {/* Header */}

  content = content.replace(/\{\/\* Header \*\/\}\s*<motion\.div\s+initial=\{\{[^}]+\}\}\s+animate=\{isActive[^}]+\}\}\s+transition=\{\{[^}]+\}\}/g, 
    \{/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}\);
          
  fs.writeFileSync(filePath, content);
}
console.log("Done");
