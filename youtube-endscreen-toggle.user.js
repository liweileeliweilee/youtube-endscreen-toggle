// ==UserScript==
// @name         YouTube End Screen Toggle
// @namespace    https://github.com/你的帳號/youtube-endscreen-toggle
// @version      1.0.0
// @description  按 E 鍵即時切換 YouTube 結尾推薦小縮圖 顯示/隱藏
// @author       LiWei
// @match        https://www.youtube.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    // 按 E 鍵切換結尾縮圖
    document.addEventListener('keydown', function (e) {
        if (e.key === 'e' || e.key === 'E') {
            toggleEndScreen();
        }
    });

    function toggleEndScreen() {
        const elements = document.querySelectorAll('.ytp-ce-element');
        if (elements.length === 0) {
            console.log('未找到結尾推薦小縮圖元素');
            return;
        }
        elements.forEach(el => {
            if (el.style.display === 'none') {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
        console.log('✅ 結尾推薦小縮圖顯示狀態已切換');
    }
})();
