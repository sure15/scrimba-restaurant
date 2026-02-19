import { defineConfig } from 'vite'

export default defineConfig({
	base: '/scrimba-restaurant/',   // ← 关键
	build: {
		outDir: 'docs'
	}
})