"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function insert(html = '', { string = '', el = 'body', type = 'append' } = {}) {
    if (type === 'append') {
        return html.replace(new RegExp(`</${el}>`), `${string}$&`);
    }
    // any case other than append
    // a.k.a. prepend
    return html.replace(new RegExp(`<${el}[^>]*>`), `$&${string}`);
}
exports.default = insert;
//# sourceMappingURL=insert.js.map