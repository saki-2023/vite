import { defineConfig } from "vite";

export default defineConfig({
    server: {
        host: true,
    },
    base: './',
    root: 'src/sample/lp/',
    build: {
        outDir: '../../../dist/sample/lp/',
        rollupOptions: {
            output: {
                chunkFileNames: 'js/[name].js',
                entryFileNames: 'js/main.js',
            assetFileNames: ({name}) => {
                if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                    return 'images/[name][extname]';
                }
                
                if (/\.css$/.test(name ?? '')) {
                    return 'css/style[extname]';   
                }
                // default value
                // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                return '[name][extname]';
                },
            },
        }
    },
});
