/**
 * =============================================
 *  ADS.JS — Script Iklan Eksternal
 * =============================================
 *  File ini khusus memuat jenis iklan script:
 *  1. Popunder Ads (script eksternal)
 *  2. Social Bar Ads (script eksternal)
 *
 *  Catatan: Iklan Banner ditempatkan langsung
 *  di index.html agar Adsterra script bekerja normal
 *  dan tidak bentrok satu sama lain.
 * =============================================
 */

(function () {
    'use strict';

    // ==========================================
    //  DAFTAR SCRIPT POPUNDER
    // ==========================================
    const POPUNDER_SCRIPTS = [
        'https://pl28946623.profitablecpmratenetwork.com/50/c4/f1/50c4f1775f9ac0ae1664baa320c06e1a.js'
    ];

    // ==========================================
    //  DAFTAR SCRIPT SOCIAL BAR
    // ==========================================
    const SOCIALBAR_SCRIPTS = [
        'https://pl28946636.profitablecpmratenetwork.com/b8/af/4a/b8af4a11f137996019ec8b279b643580.js'
        // Tambahkan social bar baru di sini:
        // 'https://example.com/socialbar2.js',
    ];

    // ==========================================
    //  FUNGSI: Muat Script Eksternal (async)
    // ==========================================
    function loadScripts(scriptUrls) {
        scriptUrls.forEach(function (url) {
            if (!url || url.trim() === '') return;
            var s = document.createElement('script');
            s.src = url;
            s.async = true;
            s.setAttribute('data-cfasync', 'false');
            document.body.appendChild(s);
        });
    }

    // ==========================================
    //  INIT — Muat popunder & social bar
    // ==========================================
    function initAds() {
        loadScripts(POPUNDER_SCRIPTS);
        loadScripts(SOCIALBAR_SCRIPTS);
    }

    if (document.readyState === 'complete') {
        initAds();
    } else {
        window.addEventListener('load', initAds);
    }
})();
