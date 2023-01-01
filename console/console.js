/**
 * This pen allows you to use all your favourite console functions right in
 * CodePen: `console.log`, `console.info`, `console.warn`, `console.error`,
 * and `console.clear` are supported.
 *
 * To scroll the console to the bottom as messages are printed use the
 * `console.follow` function.
 *
 * Made with love by @nullobject (http://joshbassett.info), 2014.
 */

var console = (function () {
    var following = false,
        pre = document.createElement('pre'),
        code = document.createElement('code');

    pre.appendChild(code);
    document.body.appendChild(pre);

    return {
        clear: clear,
        follow: follow,
        log: print.bind(this, 'debug'),
        info: print.bind(this, 'info'),
        warn: print.bind(this, 'warn'),
        error: print.bind(this, 'error')
    };

    function clear() {
        while (code.hasChildNodes()) {
            code.removeChild(code.lastChild);
        }
    }

    function follow() {
        following = true;
    }

    function print(className, object) {
        var s = (typeof object === 'string') ? object : JSON.stringify(object),
            span = document.createElement('span'),
            text = document.createTextNode(s + '\n');

        span.setAttribute('class', className);
        span.appendChild(text);
        code.appendChild(span);

        if (following) {
            scrollToBottom();
        }
    }

    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }
}());