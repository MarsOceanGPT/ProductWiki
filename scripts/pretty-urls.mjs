/**
 * Convert X.html → X/index.html for pretty URLs
 * Skips index.html and 404.html files
 */
import { readdirSync, statSync, renameSync, mkdirSync } from "fs"
import { join, basename, dirname } from "path"

const publicDir = "public"

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      walk(full)
    } else if (
      entry.endsWith(".html") &&
      entry !== "index.html" &&
      entry !== "404.html"
    ) {
      const name = entry.replace(".html", "")
      const newDir = join(dir, name)
      mkdirSync(newDir, { recursive: true })
      renameSync(full, join(newDir, "index.html"))
    }
  }
}

walk(publicDir)
console.log("Pretty URLs: converted .html files to directory structure")
