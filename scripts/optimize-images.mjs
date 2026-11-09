// Shrinks oversized portfolio screenshots. Originals are backed up to image-originals/.
import { copyFileSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'

const dir = 'public/portfolio'
const backupDir = join('image-originals', dir)
const LIMIT_KB = 150
const MAX_WIDTH = 1200

mkdirSync(backupDir, { recursive: true })

for (const file of readdirSync(dir)) {
  if (!file.toLowerCase().endsWith('.webp')) continue

  const path = join(dir, file)
  const before = readFileSync(path)
  const beforeKb = Math.round(before.length / 1024)

  if (statSync(path).size / 1024 <= LIMIT_KB) {
    console.log(`skip   ${file} (${beforeKb} KB)`)
    continue
  }

  copyFileSync(path, join(backupDir, file))
  const after = await sharp(before)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toBuffer()

  if (after.length < before.length) {
    writeFileSync(path, after)
    console.log(`shrunk ${file}: ${beforeKb} KB -> ${Math.round(after.length / 1024)} KB`)
  } else {
    console.log(`kept   ${file}: already smaller than the result`)
  }
}
