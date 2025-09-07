# GitHub Pages Deployment Checklist

## Pre-Deployment Verification

### 1. File Structure Check

Ensure these files exist in your repository:

```
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── CNAME
├── src/
├── CNAME
├── package.json
├── vite.config.ts
└── index.html
```

### 2. Package.json Scripts

Verify these scripts exist:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. Vite Configuration

Confirm `vite.config.ts` has:

```typescript
export default defineConfig({
  base: "/elitefinder/",
  // ... other config
});
```

## Deployment Methods

### Method 1: Automatic (GitHub Actions)

1. Push to main branch
2. Check Actions tab for workflow status
3. Wait for green checkmark

### Method 2: Manual (gh-pages)

```bash
npm run deploy
```

## Troubleshooting Common Issues

### Issue 1: 404 Errors on Refresh

**Solution**: Using HashRouter instead of BrowserRouter (already implemented above)

### Issue 2: Assets Not Loading

**Symptoms**: CSS/JS files return 404
**Solution**: Verify `base: '/elitefinder/'` in vite.config.ts

### Issue 3: Custom Domain Not Working

**Check DNS Records**:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: americanpharohz.github.io
```

### Issue 4: GitHub Actions Failing

**Check**:

1. Repository Settings → Actions → General → Workflow permissions
2. Set to "Read and write permissions"
3. Enable "Allow GitHub Actions to create and approve pull requests"

## Post-Deployment Verification

### 1. Test URLs

- [ ] https://americanpharohz.github.io/elitefinder/
- [ ] https://elitefinder.vip
- [ ] https://www.elitefinder.vip

### 2. Test Navigation

- [ ] All menu items work
- [ ] Page refresh doesn't break
- [ ] Direct URL access works

### 3. Test Assets

- [ ] Images load correctly
- [ ] CSS styles applied
- [ ] Fonts loading properly

## Expected Timeline

- GitHub Actions deployment: 2-5 minutes
- DNS propagation: 5-60 minutes
- SSL certificate: 5-15 minutes

## Success Indicators

✅ Green checkmark in Actions tab
✅ Site accessible at both URLs
✅ No console errors
✅ All pages load correctly
✅ SSL certificate active (https://)
