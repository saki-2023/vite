import { defineConfig } from "vite";
import legacy from '@vitejs/plugin-legacy'; 
export default defineConfig({
    server: {
        host: true,
    },
    base: './',
    root: 'src/sample/lp/',
    build: {
        outDir: '../../../sample/lp/',
        rollupOptions: {
            output: {
                chunkFileNames: 'js/[name].js',
                entryFileNames: 'assets/js/main.js',
            assetFileNames: ({name}) => {
                if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                    return 'assets/images/[name][extname]';
                }
                
                if (/\.css$/.test(name ?? '')) {
                    return 'assets/css/style[extname]';   
                }
                // default value
                // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                return '[name][extname]';
                },
            },
        },
        plugins: [
            legacy({
                targets: ['ie >= 11'],
                additionalLegacyPolyfills: ['regenerator-runtime/runtime']
            })
        ],
    },
});
