/**
 * Deterrent Script to Discourage Browser Developer Tools Usage
 * * NOTE: This is a front-end deterrent, not a bulletproof security measure.
 * It disables right-clicks, common shortcuts, and uses a debugger loop 
 * to disrupt the page if DevTools are opened.
 */
(function () {
    'use strict';

    // 1. Prevent Right-Click Context Menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // 2. Prevent Common DevTools Keyboard Shortcuts
    document.addEventListener('keydown', function (e) {
        // Disable F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Disable Ctrl+Shift+I / Cmd+Alt+I (Open DevTools)
        // Disable Ctrl+Shift+J / Cmd+Alt+J (Open Console)
        // Disable Ctrl+Shift+C / Cmd+Alt+C (Inspect Element)
        // Disable Ctrl+U / Cmd+Alt+U (View Source)
        if (
            (e.ctrlKey || e.metaKey) && 
            (e.shiftKey || e.altKey) && 
            ['i', 'j', 'c', 'u'].includes(e.key.toLowerCase())
        ) {
            e.preventDefault();
            return false;
        }
    });

    // 3. The "Debugger Loop" Anti-Debugging Trick
    // If DevTools opens, this debugger statement hits, causing a massive 
    // performance lag/freeze loop for the user trying to inspect the site.
    function cheatCheck() {
        function check(i) {
            if (('' + i / i).length !== 1 || i % 20 === 0) {
                (function () {}).constructor('debugger')();
            } else {
                (function () {}).constructor('debugger')();
            }
            check(++i);
        }
        try {
            check(0);
        } catch (err) {
            // Restart the check smoothly after a brief delay
            setTimeout(cheatCheck, 1000);
        }
    }

    // Start the anti-debugging loop
    cheatCheck();
})();
