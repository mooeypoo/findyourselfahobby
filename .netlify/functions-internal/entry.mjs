import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, g as deserializeManifest } from './chunks/astro.43588f80.mjs';
import { _ as _page0, a as _page1, b as _page2 } from './chunks/pages/all.e40849f8.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                                 *//* empty css                                    *//* empty css                                   *//* empty css                                   */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/variants.astro", _page1],["src/pages/credits.astro", _page2],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/credits.cc2df777.css","_astro/index.26438bdc.css"],"scripts":[{"type":"inline","value":"const t=async e=>{if(navigator.clipboard)try{await navigator.clipboard.writeText(e)}catch(n){console.error(\"Failed to copy: \",n)}};document.getElementById(\"sharing-this-input\").addEventListener(\"click\",function(){this.select(),t(this.value)});document.getElementById(\"sharing-random-input\").addEventListener(\"click\",function(){this.select(),t(this.value)});\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/credits.cc2df777.css","_astro/variants.0fbdb148.css"],"scripts":[],"routeData":{"route":"/variants","type":"page","pattern":"^\\/variants\\/?$","segments":[[{"content":"variants","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/variants.astro","pathname":"/variants","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/credits.cc2df777.css","_astro/credits.91da1e67.css"],"scripts":[],"routeData":{"route":"/credits","type":"page","pattern":"^\\/credits\\/?$","segments":[[{"content":"credits","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/credits.astro","pathname":"/credits","_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true,"contentDir":"file:///home/moriel/code/projects/findyourselfahobby/src/content/"},"pageMap":null,"propagation":[["/home/moriel/code/projects/findyourselfahobby/src/layouts/Layout.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Accordion.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/AccordionItem.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Breadcrumbs.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/BreadcrumbsItem.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Card.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/DarkMode.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Media.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Modal.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Notification.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Pagination.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/SkipLinks.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/src/pages/index.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/src/pages/variants.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/src/pages/credits.astro","in-tree"],["/home/moriel/code/projects/findyourselfahobby/src/pages/credits.astro?astro&type=style&index=0&lang.css","in-tree"],["/home/moriel/code/projects/findyourselfahobby/src/pages/index.astro?astro&type=style&index=0&lang.css","in-tree"],["/home/moriel/code/projects/findyourselfahobby/src/pages/variants.astro?astro&type=style&index=0&lang.css","in-tree"]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.1e93b300.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/credits.cc2df777.css","/_astro/credits.91da1e67.css","/_astro/index.26438bdc.css","/_astro/variants.0fbdb148.css","/favicon.ico","/favicon.svg","/minibridgebuilding-350x350.jpg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
