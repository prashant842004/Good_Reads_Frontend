
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { Component } from 'react'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve:{
    alias :{
      Components :"/src/Components",
      Pages :"/src/Pages",
      Redux : "/src/Redux",
      Layouts : "src/Layouts",
      Assets : "src/Assets",
      Helpers : "src/Helpers",
      Configs : "src/Configs",
      Routes : "src/Routes",

    }
  },
})