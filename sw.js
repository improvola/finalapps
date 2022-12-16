const CACHE_NAME = 'cache-v1';
self.addEventListener('install', function(evento){
    // Guardo en el cache la app
    const cacheRespuesta = caches.open(CACHE_NAME).then( cache => {
        return cache.addAll([
            'index.html',
            'app.js',
            'icons/icon-96x96.png',
            'icons/icon-72x72.png',
            'icons/icon-512x512.png',
            'icons/icon-384x384.png',
            'icons/icon-192x192.png',
            'icons/icon-152x152.png',
            'icons/icon-144x144.png',
            'icons/icon-128x128.png',
            'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
            'https://fonts.googleapis.com/icon?family=Material+Icons',
            'https://fonts.gstatic.com/s/materialicons/v139/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
            'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
            'https://fonts.gstatic.com/s/materialicons/v139/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'
        ])
    })

    evento.waitUntil(cacheRespuesta)

})

self.addEventListener('fetch', function(evento){

    const respuestaCache = caches.match( evento.request).then( res => {
        if (res ) {
            return res;
        } else {
            // si no hacemos un fetch
            return fetch(evento.request).then( respuesta => {
                return respuesta;
            })
        }

    })


    evento.respondWith(respuestaCache)
})
