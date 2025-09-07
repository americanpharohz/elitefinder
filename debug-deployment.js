// Debug script to check deployment configuration
// Run with: node debug-deployment.js

const fs = require("fs");
const path = require("path");

console.log("🔍 GitHub Pages Deployment Debug Check\n");

// Check required files
const requiredFiles = [
  ".github/workflows/deploy.yml",
  "public/CNAME",
  "CNAME",
  "vite.config.ts",
  "package.json",
];

console.log("📁 Checking required files:");
requiredFiles.forEach((file) => {
  const exists = fs.existsSync(file);
  console.log(`${exists ? "✅" : "❌"} ${file}`);
});

console.log("\n📦 Checking package.json configuration:");
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

  // Check scripts
  const hasPreDeploy = packageJson.scripts?.predeploy;
  const hasDeploy = packageJson.scripts?.deploy;
  const hasGhPages = packageJson.devDependencies?.["gh-pages"];

  console.log(`${hasPreDeploy ? "✅" : "❌"} predeploy script`);
  console.log(`${hasDeploy ? "✅" : "❌"} deploy script`);
  console.log(`${hasGhPages ? "✅" : "❌"} gh-pages dependency`);
} catch (error) {
  console.log("❌ Error reading package.json");
}

console.log("\n⚙️  Checking vite.config.ts:");
try {
  const viteConfig = fs.readFileSync("vite.config.ts", "utf8");
  const hasBasePath = viteConfig.includes("base: '/elitefinder/'");
  console.log(`${hasBasePath ? "✅" : "❌"} Base path configured`);
} catch (error) {
  console.log("❌ Error reading vite.config.ts");
}

console.log("\n🌐 Checking CNAME files:");
try {
  const rootCNAME = fs.readFileSync("CNAME", "utf8").trim();
  const publicCNAME = fs.readFileSync("public/CNAME", "utf8").trim();

  console.log(
    `${rootCNAME === "elitefinder.vip" ? "✅" : "❌"} Root CNAME: ${rootCNAME}`
  );
  console.log(
    `${
      publicCNAME === "elitefinder.vip" ? "✅" : "❌"
    } Public CNAME: ${publicCNAME}`
  );
} catch (error) {
  console.log("❌ Error reading CNAME files");
}

console.log("\n🚀 Next Steps:");
console.log("1. Run: npm install");
console.log("2. Run: npm run build (test local build)");
console.log("3. Commit and push to GitHub");
console.log("4. Check GitHub Actions tab for deployment status");
console.log(
  "5. Configure repository Settings → Pages → Source: GitHub Actions"
);
