#!/usr/bin/env node
/**
 * Image Optimization Script
 * Converts PNG images to WebP and resizes them for optimal web performance
 * 
 * Usage: node scripts/optimize-images.js
 * Requires: npm install sharp
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '../public/assets');
const OUTPUT_DIR = join(__dirname, '../public/assets-optimized');

// Configuration for different image types
const CONFIG = {
    equipo: {
        maxWidth: 200,
        maxHeight: 265,
        quality: 85
    },
    empresas: {
        maxWidth: 400,
        maxHeight: 250,
        quality: 85
    },
    logo: {
        maxWidth: 400,
        maxHeight: 200,
        quality: 90
    },
    hero: {
        maxWidth: 1200,
        maxHeight: 800,
        quality: 85
    }
};

async function ensureDir(dir) {
    try {
        await mkdir(dir, { recursive: true });
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
}

async function optimizeImage(inputPath, outputPath, config) {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        console.log(`Processing: ${basename(inputPath)} (${metadata.width}x${metadata.height})`);
        
        await image
            .resize(config.maxWidth, config.maxHeight, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .webp({ quality: config.quality })
            .toFile(outputPath);
        
        const inputStats = await stat(inputPath);
        const outputStats = await stat(outputPath);
        const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
        
        console.log(`  ✓ Saved as WebP: ${(outputStats.size / 1024).toFixed(1)}KB (${savings}% smaller)`);
        
        return { input: inputPath, output: outputPath, savings };
    } catch (err) {
        console.error(`  ✗ Error: ${err.message}`);
        return null;
    }
}

async function processDirectory(subdir) {
    const inputDir = join(ASSETS_DIR, subdir);
    const outputDir = join(OUTPUT_DIR, subdir);
    const config = CONFIG[subdir] || CONFIG.empresas;
    
    await ensureDir(outputDir);
    
    try {
        const files = await readdir(inputDir);
        const imageFiles = files.filter(f => 
            ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
        );
        
        console.log(`\n📁 ${subdir}/ (${imageFiles.length} images)`);
        console.log('─'.repeat(50));
        
        const results = [];
        for (const file of imageFiles) {
            const inputPath = join(inputDir, file);
            const outputName = basename(file, extname(file)) + '.webp';
            const outputPath = join(outputDir, outputName);
            
            const result = await optimizeImage(inputPath, outputPath, config);
            if (result) results.push(result);
        }
        
        return results;
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(`  Directory not found: ${subdir}`);
            return [];
        }
        throw err;
    }
}

async function main() {
    console.log('🖼️  Image Optimization Script');
    console.log('═'.repeat(50));
    
    await ensureDir(OUTPUT_DIR);
    
    const subdirs = ['equipo', 'empresas', 'logo', 'hero'];
    let totalSaved = 0;
    let totalProcessed = 0;
    
    for (const subdir of subdirs) {
        const results = await processDirectory(subdir);
        totalProcessed += results.length;
    }
    
    console.log('\n' + '═'.repeat(50));
    console.log(`✅ Processed ${totalProcessed} images`);
    console.log('\n📋 Next steps:');
    console.log('   1. Review optimized images in public/assets-optimized/');
    console.log('   2. Update component paths from .png to .webp');
    console.log('   3. Replace public/assets/ with optimized versions');
}

main().catch(console.error);
