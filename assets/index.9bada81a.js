(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function je(){}function ac(i,e){for(const t in e)i[t]=e[t];return i}function fl(i){return i()}function Ca(){return Object.create(null)}function Wn(i){i.forEach(fl)}function ri(i){return typeof i=="function"}function Ue(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let ms;function oc(i,e){return ms||(ms=document.createElement("a")),ms.href=e,i===ms.href}function lc(i){return Object.keys(i).length===0}function ra(i,...e){if(i==null)return je;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Bn(i){let e;return ra(i,t=>e=t)(),e}function xt(i,e,t){i.$$.on_destroy.push(ra(e,t))}function wt(i,e,t,n){if(i){const s=hl(i,e,t,n);return i[0](s)}}function hl(i,e,t,n){return i[1]&&n?ac(t.ctx.slice(),i[1](n(e))):t.ctx}function Mt(i,e,t,n){if(i[2]&&n){const s=i[2](n(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function St(i,e,t,n,s,r){if(s){const o=hl(e,t,n,r);i.p(o,s)}}function yt(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function cr(i,e,t){return i.set(t),e}function cc(i){return i&&ri(i.destroy)?i.destroy:je}function Lt(i,e){i.appendChild(e)}function ve(i,e,t){i.insertBefore(e,t||null)}function _e(i){i.parentNode.removeChild(i)}function Bt(i){return document.createElement(i)}function dl(i){return document.createTextNode(i)}function xe(){return dl(" ")}function uc(){return dl("")}function dn(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function Vt(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function fc(i){return Array.from(i.childNodes)}function ps(i,e,t,n){t===null?i.style.removeProperty(e):i.style.setProperty(e,t,n?"important":"")}function hc(i,e,{bubbles:t=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(i,t,n,e),s}let ns;function ts(i){ns=i}function as(){if(!ns)throw new Error("Function called outside component initialization");return ns}function dc(i){as().$$.on_mount.push(i)}function dt(i){as().$$.on_destroy.push(i)}function Zs(){const i=as();return(e,t,{cancelable:n=!1}={})=>{const s=i.$$.callbacks[e];if(s){const r=hc(e,t,{cancelable:n});return s.slice().forEach(o=>{o.call(i,r)}),!r.defaultPrevented}return!0}}function pn(i,e){return as().$$.context.set(i,e),e}function En(i){return as().$$.context.get(i)}function Ee(i,e){const t=i.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Ji=[],Ke=[],Gs=[],qr=[],ml=Promise.resolve();let Yr=!1;function pl(){Yr||(Yr=!0,ml.then(gl))}function is(){return pl(),ml}function Zr(i){Gs.push(i)}function Gt(i){qr.push(i)}const ur=new Set;let gs=0;function gl(){const i=ns;do{for(;gs<Ji.length;){const e=Ji[gs];gs++,ts(e),mc(e.$$)}for(ts(null),Ji.length=0,gs=0;Ke.length;)Ke.pop()();for(let e=0;e<Gs.length;e+=1){const t=Gs[e];ur.has(t)||(ur.add(t),t())}Gs.length=0}while(Ji.length);for(;qr.length;)qr.pop()();Yr=!1,ur.clear(),ts(i)}function mc(i){if(i.fragment!==null){i.update(),Wn(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Zr)}}const Hs=new Set;let ti;function aa(){ti={r:0,c:[],p:ti}}function oa(){ti.r||Wn(ti.c),ti=ti.p}function j(i,e){i&&i.i&&(Hs.delete(i),i.i(e))}function X(i,e,t,n){if(i&&i.o){if(Hs.has(i))return;Hs.add(i),ti.c.push(()=>{Hs.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function Ht(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function ee(i){i&&i.c()}function Q(i,e,t,n){const{fragment:s,after_update:r}=i.$$;s&&s.m(e,t),n||Zr(()=>{const o=i.$$.on_mount.map(fl).filter(ri);i.$$.on_destroy?i.$$.on_destroy.push(...o):Wn(o),i.$$.on_mount=[]}),r.forEach(Zr)}function $(i,e){const t=i.$$;t.fragment!==null&&(Wn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function pc(i,e){i.$$.dirty[0]===-1&&(Ji.push(i),pl(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function ke(i,e,t,n,s,r,o,a=[-1]){const l=ns;ts(i);const c=i.$$={fragment:null,ctx:[],props:r,update:je,not_equal:s,bound:Ca(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ca(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(f,h,...p)=>{const v=p.length?p[0]:h;return c.ctx&&s(c.ctx[f],c.ctx[f]=v)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](v),u&&pc(i,f)),h}):[],c.update(),u=!0,Wn(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=fc(e.target);c.fragment&&c.fragment.l(f),f.forEach(_e)}else c.fragment&&c.fragment.c();e.intro&&j(i.$$.fragment),Q(i,e.target,e.anchor,e.customElement),gl()}ts(l)}class Be{$destroy(){$(this,1),this.$destroy=je}$on(e,t){if(!ri(t))return je;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!lc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function gc(i){let e;return{c(){e=Bt("div"),Vt(e,"class","markdown svelte-35yoex")},m(t,n){ve(t,e,n),e.innerHTML=i[0]},p(t,[n]){n&1&&(e.innerHTML=t[0])},i:je,o:je,d(t){t&&_e(e)}}}function _c(i,e,t){let{src:n}=e;return i.$$set=s=>{"src"in s&&t(0,n=s.src)},[n]}class Ln extends Be{constructor(e){super(),ke(this,e,_c,gc,Ue,{src:0})}}const vc=`<h1>Mesopotamien</h1>
<h6>3000 v. Chr.</h6>
<ul>
<li>
<p>Form: Scheibe</p>
<ul>
<li>Babylon im Zentrum</li>
<li>umgeben von Meer</li>
<li>Unterwelt unter der Scheibe</li>
</ul>
</li>
<li>
<p>Himmel: rotierende Halbkugel \xFCber der Erde</p>
<ul>
<li>um den Himmel brennt ein Feuer</li>
<li>Sterne sind L\xF6cher im Himmel</li>
</ul>
</li>
<li>
<p>Venus und Marsumlauf nur um 0.2h und 1h Fehlerhaft</p>
</li>
</ul>
`,xc=`<h1>\xC4gypten</h1>
<h6>3000 v. Chr.</h6>
<ul>
<li>
<p>Form: Scheibe</p>
<ul>
<li>Nil im Zentrum</li>
<li>Unterwelt unter der Scheibe</li>
</ul>
</li>
<li>
<p>Jahr bereits mit <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mrow><mn>3</mn><mn>6</mn><mn>5</mn></mrow><mrow><mfrac><mrow><mrow><mrow><mn>1</mn></mrow></mrow></mrow><mrow><mrow><mrow><mn>4</mn></mrow></mrow></mrow></mfrac></mrow></mrow><annotation encoding="application/x-tex">{365}{\\frac{{{1}}}{{{4}}}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.845108em;"></span><span class="strut bottom" style="height:1.190108em;vertical-align:-0.345em;"></span><span class="base"><span class="mord"><span class="mord">3</span><span class="mord">6</span><span class="mord">5</span></span><span class="mord"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.845108em;"><span style="top:-2.6550000000000002em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">4</span></span></span></span></span></span><span style="top:-3.15em;"><span class="pstrut" style="height:3em;"></span><span class="stretchy" style="height:0.2em;"><svg width='400em' height='0.2em' viewBox='0 0 400000 200' preserveAspectRatio='xMinYMin slice'><path d='M0 80H400000 v40H0z M0 80H400000 v40H0z'/></svg></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span> Tagen</p>
<ul>
<li>Tag eingeteilt in <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mrow><mn>2</mn></mrow><mo>\u22C5</mo><mrow><mn>1</mn><mn>2</mn></mrow><mrow><mi>h</mi></mrow></mrow><annotation encoding="application/x-tex">{2}\\cdot{12}{h}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.69444em;"></span><span class="strut bottom" style="height:0.69444em;vertical-align:0em;"></span><span class="base"><span class="mord"><span class="mord">2</span></span><span class="mord rule" style="margin-right:0.2222222222222222em;"></span><span class="mbin">\u22C5</span><span class="mord rule" style="margin-right:0.2222222222222222em;"></span><span class="mord"><span class="mord">1</span><span class="mord">2</span></span><span class="mord"><span class="mord mathit">h</span></span></span></span></span></li>
</ul>
</li>
<li>
<p>orientierten sich an 12 Sternen</p>
<ul>
<li>haupts\xE4chlich f\xFCr die Nilschw\xE4mmung genutzt</li>
</ul>
</li>
</ul>
`,bc=`<h1>Griechenland</h1>
<h6>350 v. Chr.</h6>
<ul>
<li>
<p>Erde in Ruhe im Mittelpunkt</p>
</li>
<li>
<p>7 Wandelsterne</p>
<ul>
<li>Sonne, Mond, Merkur, Venus, Mars, Jupiter, Saturn</li>
<li>perfekte Kugelgestalt</li>
<li>Bewegung auf idealen Kreisbahnen</li>
<li>befestigt an Kristallschalen</li>
</ul>
</li>
<li>
<p>Mond: t\xE4gliche und monatliche Kreisbewegung um die Erde</p>
</li>
<li>
<p>normale Sterne: befestigt an \xE4u\xDFerster Kristallschale</p>
</li>
<li>
<p>Eratosthenes: stellte die Kugelform der Erde fest</p>
<ul>
<li>verglich die unterschiedlich langen Schatten an verschiedenen Orten der Erde</li>
</ul>
</li>
</ul>
<h3>Entfernungen</h3>
<table>
<thead>
<tr>
<th>Objekte</th>
<th>Entfernung</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mond &lt;=&gt; Erde</td>
<td>59 Erdradien</td>
</tr>
<tr>
<td>Erde &lt;=&gt; Fixsterne</td>
<td>20.000 Erdradien</td>
</tr>
</tbody>
</table>
`,wc=`<h1>China</h1>
<h6>um die Zeitenwende</h6>
<ul>
<li>
<p>Form: runde Scheibe</p>
<ul>
<li>von 2 unsichtbaren Linien in 4 Teile geteilt
<ul>
<li>NW-SO; NO-SW</li>
</ul>
</li>
<li>Kaiser im Mittelpunkt
<ul>
<li>symbolisch in der Kaiserstadt durch H\xFCgel dargestellt</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Kaiser kontrolliert zirkumpolaren Berreich</p>
<ul>
<li>mit zunemender Entfernung nimmt Kontrolle ab</li>
<li>=&gt; Barbaren am Rand
<ul>
<li>keine Kultur, St\xE4dte, Schrift</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Tierkreiszeichen beschreiben 12 Jahre des Jupiterumlaufes</p>
</li>
<li>
<p>beobachteten berreits Sonnenflecken</p>
</li>
</ul>
`,Mc=`<h1>Amerika (Maya)</h1>
<h6>600 n. Chr.</h6>
<ul>
<li>
<p>Form: Weltenbaum &quot;wacah chan&quot;</p>
<ul>
<li>3 Teile
<ul>
<li>Wurzeln: Totenreich</li>
<li>Mitte: Lebensort der Menschen</li>
<li>Krone: Himmel</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Erde: viereckig + flach</p>
</li>
<li>
<p>fortgeschrittene Astronomie</p>
</li>
</ul>
`,Sc=`<h1>Europ\xE4isches Mittelalter</h1>
<h6>14. Jahrhundert</h6>
<ul>
<li>
<p>basierend auf Antike</p>
</li>
<li>
<p>gr\xF6\xDFtenteils keine Entwicklung</p>
</li>
<li>
<p>Aufteilung in sublunare Welt und Himmelsph\xE4ren</p>
<ul>
<li>Sublunare Welt
<ul>
<li>aufgebaut aus 4 Elementsph\xE4ren
<ul>
<li>Erde im Zentrum</li>
<li>Wasser</li>
<li>Luft</li>
<li>Feuer: Sph\xE4re des Mondes</li>
</ul>
</li>
</ul>
</li>
<li>Himmelsph\xE4ren
<ul>
<li>bis auf Bewegung unver\xE4nderlich</li>
</ul>
</li>
</ul>
</li>
</ul>
`,yc=`<h1>Nikolaus Kopernikus</h1>
<h6>1473 - 1543</h6>
<ul>
<li>
<p>entdeckt Erkentnis von Aristarchos von Samos:</p>
<ul>
<li>=&gt; Die Erde umkreist die Sonne</li>
</ul>
</li>
<li>
<p>stellt 3 Thesen auf:</p>
<ul>
<li>die Erde dreht sich um die eigene Achse</li>
<li>die Sonne ist das Zentrum des Universums</li>
<li>die Planeten umkreisen die Sonne</li>
</ul>
</li>
<li>
<p>kann die Bahnen der Planeten noch nicht vollst\xE4ndig erkl\xE4ren</p>
</li>
<li>
<p>Planeten immernoch auf Kristallschalen</p>
</li>
</ul>
`,Tc=`<h1>Renaissance</h1>
<h6>16. / 17. Jahrhundert</h6>
<h3>Johannes Kepler</h3>
<ul>
<li>Planeten bewegen sich auf Ellipsen um die Sonne</li>
<li>Planeten beschleunigen bei n\xE4herung an die Sonne</li>
<li>Planeten werden durch Kraft von der Sonne bewegt</li>
</ul>
<h3>Galileo Galilei</h3>
<ul>
<li>Entdeckt 4 Kreisbahnen von Jupitermonden</li>
</ul>
<h3>Isaac Newton</h3>
<ul>
<li>Masse der K\xF6rper \xFCbt Anziehungskraft aus</li>
</ul>
<div><span class="katex-display"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>F</mi><mo>=</mo><mi>G</mi><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow><annotation encoding="application/x-tex">F = G \\frac{m_1 m_2}{r^2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:1.1075599999999999em;"></span><span class="strut bottom" style="height:1.7935599999999998em;vertical-align:-0.686em;"></span><span class="base"><span class="mord mathit" style="margin-right:0.13889em;">F</span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mord mathit">G</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.1075599999999999em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathit" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.740108em;"><span style="top:-2.9890000000000003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-3.15em;"><span class="pstrut" style="height:3em;"></span><span class="stretchy" style="height:0.2em;"><svg width='400em' height='0.2em' viewBox='0 0 400000 200' preserveAspectRatio='xMinYMin slice'><path d='M0 80H400000 v40H0z M0 80H400000 v40H0z'/></svg></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathit">m</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.30110799999999993em;"><span style="top:-2.5500000000000003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"></span></span></span></span></span><span class="mord"><span class="mord mathit">m</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.30110799999999993em;"><span style="top:-2.5500000000000003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></div>`,Ac=`<h1>Keplersche Gesezte</h1>
<ol>
<li>Planeten bewegen sich auf elliptischen Bahnen mit der Sonne in einem der Brennpunkte</li>
<li>Je n\xE4her sich ein Planet an der Sonne befindet, desto schneller bewegt er sich</li>
</ol>
<div><span class="katex-display"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mrow><msub><mi>A</mi><mn>1</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>A</mi><mn>2</mn></msub></mrow><mrow><msub><mi>t</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>A</mi></mrow><mrow><mi>t</mi></mrow></mfrac><mo>=</mo><mi>k</mi><mi>o</mi><mi>n</mi><mi>s</mi><mi>t</mi><mi>a</mi><mi>n</mi><mi>t</mi></mrow><annotation encoding="application/x-tex">\\frac{A_1}{t_1} = \\frac{A_2}{t_2} = \\frac{A}{t} = konstant</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:1.36033em;"></span><span class="strut bottom" style="height:2.19633em;vertical-align:-0.8360000000000001em;"></span><span class="base"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.36033em;"><span style="top:-2.3139999999999996em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathit">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.30110799999999993em;"><span style="top:-2.5500000000000003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"></span></span></span></span></span></span></span><span style="top:-3.15em;"><span class="pstrut" style="height:3em;"></span><span class="stretchy" style="height:0.2em;"><svg width='400em' height='0.2em' viewBox='0 0 400000 200' preserveAspectRatio='xMinYMin slice'><path d='M0 80H400000 v40H0z M0 80H400000 v40H0z'/></svg></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathit">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.30110799999999993em;"><span style="top:-2.5500000000000003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.8360000000000001em;"></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.36033em;"><span style="top:-2.3139999999999996em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathit">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.30110799999999993em;"><span style="top:-2.5500000000000003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"></span></span></span></span></span></span></span><span style="top:-3.15em;"><span class="pstrut" style="height:3em;"></span><span class="stretchy" style="height:0.2em;"><svg width='400em' height='0.2em' viewBox='0 0 400000 200' preserveAspectRatio='xMinYMin slice'><path d='M0 80H400000 v40H0z M0 80H400000 v40H0z'/></svg></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathit">A</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.30110799999999993em;"><span style="top:-2.5500000000000003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.8360000000000001em;"></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.36033em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathit">t</span></span></span><span style="top:-3.15em;"><span class="pstrut" style="height:3em;"></span><span class="stretchy" style="height:0.2em;"><svg width='400em' height='0.2em' viewBox='0 0 400000 200' preserveAspectRatio='xMinYMin slice'><path d='M0 80H400000 v40H0z M0 80H400000 v40H0z'/></svg></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathit">A</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mord mathit" style="margin-right:0.03148em;">k</span><span class="mord mathit">o</span><span class="mord mathit">n</span><span class="mord mathit">s</span><span class="mord mathit">t</span><span class="mord mathit">a</span><span class="mord mathit">n</span><span class="mord mathit">t</span></span></span></span></span></div><ol start="3">
<li>Die quadrate der Umlaufzeiten zweier Planeten verhalten sich zueinander wie die kuben der Hauptachsen der Bahnellipsen</li>
</ol>
<div><span class="katex-display"><span class="katex"><span class="katex-mathml"><math><semantics><mrow><mfrac><mrow><msubsup><mi>T</mi><mn>1</mn><mn>2</mn></msubsup></mrow><mrow><msubsup><mi>T</mi><mn>2</mn><mn>2</mn></msubsup></mrow></mfrac><mo>=</mo><mfrac><mrow><msubsup><mi>a</mi><mn>1</mn><mn>3</mn></msubsup></mrow><mrow><msubsup><mi>a</mi><mn>2</mn><mn>3</mn></msubsup></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{T_1^2}{T_2^2} = \\frac{a_1^3}{a_2^3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:1.4911079999999999em;"></span><span class="strut bottom" style="height:2.443416em;vertical-align:-0.9523079999999999em;"></span><span class="base"><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4911079999999999em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathit" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7959080000000001em;"><span style="top:-2.433692em;margin-left:-0.13889em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span><span style="top:-3.0448000000000004em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.26630799999999993em;"></span></span></span></span></span></span></span><span style="top:-3.15em;"><span class="pstrut" style="height:3em;"></span><span class="stretchy" style="height:0.2em;"><svg width='400em' height='0.2em' viewBox='0 0 400000 200' preserveAspectRatio='xMinYMin slice'><path d='M0 80H400000 v40H0z M0 80H400000 v40H0z'/></svg></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathit" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-2.4518920000000004em;margin-left:-0.13889em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.24810799999999997em;"></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.9523079999999999em;"></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mord rule" style="margin-right:0.2777777777777778em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4911079999999999em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathit">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7959080000000001em;"><span style="top:-2.433692em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span><span style="top:-3.0448000000000004em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.26630799999999993em;"></span></span></span></span></span></span></span><span style="top:-3.15em;"><span class="pstrut" style="height:3em;"></span><span class="stretchy" style="height:0.2em;"><svg width='400em' height='0.2em' viewBox='0 0 400000 200' preserveAspectRatio='xMinYMin slice'><path d='M0 80H400000 v40H0z M0 80H400000 v40H0z'/></svg></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathit">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-2.4518920000000004em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.24810799999999997em;"></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.9523079999999999em;"></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></div>`,Ec=""+new URL("Kepler_laws_diagram.e70f015b.svg",import.meta.url).href;function Cc(i){let e,t,n,s,r,o;return e=new Ln({props:{src:Ac}}),{c(){ee(e.$$.fragment),t=xe(),n=Bt("div"),s=Bt("img"),oc(s.src,r=Ec)||Vt(s,"src",r),ps(s,"width","10rem"),ps(s,"margin","auto"),Vt(s,"alt","kepler laws"),ps(n,"display","flex"),ps(n,"align-items","center")},m(a,l){Q(e,a,l),ve(a,t,l),ve(a,n,l),Lt(n,s),o=!0},p:je,i(a){o||(j(e.$$.fragment,a),o=!0)},o(a){X(e.$$.fragment,a),o=!1},d(a){$(e,a),a&&_e(t),a&&_e(n)}}}function Lc(i){let e,t;return e=new Ln({props:{src:Tc}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function Dc(i){let e,t;return e=new Ln({props:{src:yc}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function Pc(i){let e,t;return e=new Ln({props:{src:Sc}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function Rc(i){let e,t;return e=new Ln({props:{src:Mc}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function Ic(i){let e,t;return e=new Ln({props:{src:wc}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function Oc(i){let e,t;return e=new Ln({props:{src:bc}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function zc(i){let e,t;return e=new Ln({props:{src:xc}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function Fc(i){let e,t;return e=new Ln({props:{src:vc}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function Nc(i){let e,t,n,s,r,o,a,l,c,u,f,h,p,v;const m=[Fc,zc,Oc,Ic,Rc,Pc,Dc,Lc,Cc],d=[];function _(x,w){return x[3]==0?0:x[3]==1?1:x[3]==2?2:x[3]==3?3:x[3]==4?4:x[3]==5?5:x[3]==6?6:x[3]==7?7:x[3]==8?8:-1}return~(n=_(i))&&(s=d[n]=m[n](i)),{c(){e=Bt("div"),t=Bt("div"),s&&s.c(),r=xe(),o=Bt("div"),a=Bt("div"),a.textContent="<",l=xe(),c=Bt("div"),c.textContent="\u2022",u=xe(),f=Bt("div"),f.textContent=">",Vt(t,"class","panel-inner glass svelte-g0n47u"),Vt(a,"class","button glass svelte-g0n47u"),Vt(c,"class","button glass svelte-g0n47u"),Vt(f,"class","button glass svelte-g0n47u"),Vt(o,"class","nav-buttons svelte-g0n47u"),Vt(e,"class","information-panel svelte-g0n47u")},m(x,w){ve(x,e,w),Lt(e,t),~n&&d[n].m(t,null),Lt(e,r),Lt(e,o),Lt(o,a),Lt(o,l),Lt(o,c),Lt(o,u),Lt(o,f),h=!0,p||(v=[dn(a,"click",function(){ri(i[1])&&i[1].apply(this,arguments)}),dn(c,"click",function(){ri(i[2])&&i[2].apply(this,arguments)}),dn(f,"click",function(){ri(i[0])&&i[0].apply(this,arguments)})],p=!0)},p(x,[w]){i=x;let b=n;n=_(i),n===b?~n&&d[n].p(i,w):(s&&(aa(),X(d[b],1,1,()=>{d[b]=null}),oa()),~n?(s=d[n],s?s.p(i,w):(s=d[n]=m[n](i),s.c()),j(s,1),s.m(t,null)):s=null)},i(x){h||(j(s),h=!0)},o(x){X(s),h=!1},d(x){x&&_e(e),~n&&d[n].d(),p=!1,Wn(v)}}}function Uc(i,e,t){let{onNext:n}=e,{onPrev:s}=e,{onHome:r}=e,{fps:o=0}=e,{current:a}=e;return i.$$set=l=>{"onNext"in l&&t(0,n=l.onNext),"onPrev"in l&&t(1,s=l.onPrev),"onHome"in l&&t(2,r=l.onHome),"fps"in l&&t(4,o=l.fps),"current"in l&&t(3,a=l.current)},[n,s,r,a,o]}class kc extends Be{constructor(e){super(),ke(this,e,Uc,Nc,Ue,{onNext:0,onPrev:1,onHome:2,fps:4,current:3})}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="145",_i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bc=0,La=1,Vc=2,_l=1,vl=2,Qi=3,ci=0,en=1,Jt=2,Vn=0,Fi=1,Kr=2,Da=3,Pa=4,Gc=5,Oi=100,Hc=101,Wc=102,Ra=103,Ia=104,jc=200,Xc=201,qc=202,Yc=203,xl=204,bl=205,Zc=206,Kc=207,Jc=208,Qc=209,$c=210,eu=0,tu=1,nu=2,Jr=3,iu=4,su=5,ru=6,au=7,wl=0,ou=1,lu=2,vn=0,cu=1,uu=2,fu=3,ca=4,hu=5,Ml=300,Ui=301,ki=302,Qr=303,$r=304,Ks=306,qs=1e3,cn=1001,ea=1002,Dt=1003,Oa=1004,za=1005,Kt=1006,du=1007,Js=1008,ui=1009,mu=1010,pu=1011,Sl=1012,gu=1013,ni=1014,ii=1015,ss=1016,_u=1017,vu=1018,Ni=1020,xu=1021,bu=1022,_n=1023,wu=1024,Mu=1025,ai=1026,Bi=1027,Su=1028,yu=1029,Tu=1030,Au=1031,Eu=1033,fr=33776,hr=33777,dr=33778,mr=33779,Fa=35840,Na=35841,Ua=35842,ka=35843,Cu=36196,Ba=37492,Va=37496,Ga=37808,Ha=37809,Wa=37810,ja=37811,Xa=37812,qa=37813,Ya=37814,Za=37815,Ka=37816,Ja=37817,Qa=37818,$a=37819,eo=37820,to=37821,no=36492,Hn=3e3,et=3001,Lu=3200,Du=3201,yl=0,Pu=1,An="srgb",si="srgb-linear",pr=7680,Ru=519,io=35044,so="300 es",ta=1035;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,ro=180/Math.PI;function os(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Iu(i,e){return(i%e+e)%e}function gr(i,e,t){return(1-t)*i+t*e}function ao(i){return(i&i-1)===0&&i!==0}function na(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _s(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],v=n[8],m=s[0],d=s[3],_=s[6],x=s[1],w=s[4],b=s[7],S=s[2],y=s[5],M=s[8];return r[0]=o*m+a*x+l*S,r[3]=o*d+a*w+l*y,r[6]=o*_+a*b+l*M,r[1]=c*m+u*x+f*S,r[4]=c*d+u*w+f*y,r[7]=c*_+u*b+f*M,r[2]=h*m+p*x+v*S,r[5]=h*d+p*w+v*y,r[8]=h*_+p*b+v*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,v=t*f+n*h+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=f*m,e[1]=(s*c-u*n)*m,e[2]=(a*n-s*o)*m,e[3]=h*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+n*l,s[3]=t*o+n*c,s[6]=t*a+n*u,s[1]=-n*r+t*l,s[4]=-n*o+t*c,s[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Tl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const _r={[An]:{[si]:oi},[si]:{[An]:js}},sn={legacyMode:!0,get workingColorSpace(){return si},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(_r[e]&&_r[e][t]!==void 0){const n=_r[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},rn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function xs(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=si){return this.r=e,this.g=t,this.b=n,sn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=si){if(e=Iu(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vr(o,r,e+1/3),this.g=vr(o,r,e),this.b=vr(o,r,e-1/3)}return sn.toWorkingColorSpace(this,s),this}setStyle(e,t=An){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,sn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,sn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,sn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,sn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=An){const n=Al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return sn.fromWorkingColorSpace(xs(this,ht),e),Pt(ht.r*255,0,255)<<16^Pt(ht.g*255,0,255)<<8^Pt(ht.b*255,0,255)<<0}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=si){sn.fromWorkingColorSpace(xs(this,ht),t);const n=ht.r,s=ht.g,r=ht.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=si){return sn.fromWorkingColorSpace(xs(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=An){return sn.fromWorkingColorSpace(xs(this,ht),e),e!==An?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(vs);const n=gr(rn.h,vs.h,t),s=gr(rn.s,vs.s,t),r=gr(rn.l,vs.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ze.NAMES=Al;let xi;class El{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=rs("canvas")),xi.width=e.width,xi.height=e.height;const n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Cl{constructor(e=null){this.isSource=!0,this.uuid=os(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xr(s[o].image)):r.push(xr(s[o]))}else r=xr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?El.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ou=0;class nn extends hi{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=cn,s=cn,r=Kt,o=Js,a=_n,l=ui,c=1,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=os(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ml;class Ze{constructor(e=0,t=0,n=0,s=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(v+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(p+1)/2,S=(_+1)/2,y=(u+h)/4,M=(f+m)/4,g=(v+d)/4;return w>b&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=y/n,r=M/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=y/s,r=g/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=M/r,s=g/r),this.set(n,s,r,t),this}let x=Math.sqrt((d-v)*(d-v)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(d-v)/x,this.y=(f-m)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tn extends hi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ll extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zu extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],p=r[o+1],v=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=m;return}if(f!==m||l!==h||c!==p||u!==v){let d=1-a;const _=l*h+c*p+u*v+f*m,x=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const S=Math.sqrt(w),y=Math.atan2(S,_*x);d=Math.sin(d*y)/S,a=Math.sin(a*y)/S}const b=a*x;if(l=l*d+h*b,c=c*d+p*b,u=u*d+v*b,f=f*d+m*b,d===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-a*p,e[t+2]=c*v+u*p+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,f=l*s+r*n-o*t,h=-r*t-o*n-a*s;return this.x=c*l+h*-r+u*-a-f*-o,this.y=u*l+h*-o+f*-r-c*-a,this.z=f*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return br.copy(this).projectOnVector(e),this.sub(br)}reflect(e){return this.sub(br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new O,oo=new fi;class ls{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Zn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zn)}else n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox),wr.applyMatrix4(e.matrixWorld),this.union(wr);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),bs.subVectors(this.max,qi),bi.subVectors(e.a,qi),wi.subVectors(e.b,qi),Mi.subVectors(e.c,qi),Rn.subVectors(wi,bi),In.subVectors(Mi,wi),Kn.subVectors(bi,Mi);let t=[0,-Rn.z,Rn.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Rn.z,0,-Rn.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Rn.y,Rn.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!Mr(t,bi,wi,Mi,bs)||(t=[1,0,0,0,1,0,0,0,1],!Mr(t,bi,wi,Mi,bs))?!1:(ws.crossVectors(Rn,In),t=[ws.x,ws.y,ws.z],Mr(t,bi,wi,Mi,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Zn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new O,new O,new O,new O,new O,new O,new O,new O],Zn=new O,wr=new ls,bi=new O,wi=new O,Mi=new O,Rn=new O,In=new O,Kn=new O,qi=new O,bs=new O,ws=new O,Jn=new O;function Mr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Jn.fromArray(i,r);const a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=e.dot(Jn),c=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fu=new ls,lo=new O,Ms=new O,Sr=new O;class Qs{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.add(Sr.multiplyScalar(s/n)),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?Ms.set(0,0,1).multiplyScalar(e.radius):Ms.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(lo.copy(e.center).add(Ms)),this.expandByPoint(lo.copy(e.center).sub(Ms)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new O,yr=new O,Ss=new O,On=new O,Tr=new O,ys=new O,Ar=new O;class ua{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.direction).multiplyScalar(t).add(this.origin),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yr.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),On.copy(this.origin).sub(yr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ss),a=On.dot(this.direction),l=-On.dot(Ss),c=On.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-a,h=o*a-l,v=r*u,f>=0)if(h>=-v)if(h<=v){const m=1/u;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),s&&s.copy(Ss).multiplyScalar(h).add(yr),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||n!==n)&&(n=r),(o<s||s!==s)&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,s,r){Tr.subVectors(t,e),ys.subVectors(n,e),Ar.crossVectors(Tr,ys);let o=this.direction.dot(Ar),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);const l=a*this.direction.dot(ys.crossVectors(On,ys));if(l<0)return null;const c=a*this.direction.dot(Tr.cross(On));if(c<0||l+c>o)return null;const u=-a*On.dot(Ar);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,f,h,p,v,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=v,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Si.setFromMatrixColumn(e,0).length(),r=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,v=a*u,m=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,m=c*f;t[0]=h+m*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,m=c*f;t[0]=h-m*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=a*u,m=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,m=a*c;t[0]=l*u,t[4]=m-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,m=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nu,e,Uu)}lookAt(e,t,n){const s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),zn.crossVectors(n,Ut),zn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),zn.crossVectors(n,Ut)),zn.normalize(),Ts.crossVectors(Ut,zn),s[0]=zn.x,s[4]=Ts.x,s[8]=Ut.x,s[1]=zn.y,s[5]=Ts.y,s[9]=Ut.y,s[2]=zn.z,s[6]=Ts.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],v=n[2],m=n[6],d=n[10],_=n[14],x=n[3],w=n[7],b=n[11],S=n[15],y=s[0],M=s[4],g=s[8],A=s[12],P=s[1],N=s[5],B=s[9],z=s[13],U=s[2],C=s[6],Y=s[10],ie=s[14],q=s[3],k=s[7],H=s[11],I=s[15];return r[0]=o*y+a*P+l*U+c*q,r[4]=o*M+a*N+l*C+c*k,r[8]=o*g+a*B+l*Y+c*H,r[12]=o*A+a*z+l*ie+c*I,r[1]=u*y+f*P+h*U+p*q,r[5]=u*M+f*N+h*C+p*k,r[9]=u*g+f*B+h*Y+p*H,r[13]=u*A+f*z+h*ie+p*I,r[2]=v*y+m*P+d*U+_*q,r[6]=v*M+m*N+d*C+_*k,r[10]=v*g+m*B+d*Y+_*H,r[14]=v*A+m*z+d*ie+_*I,r[3]=x*y+w*P+b*U+S*q,r[7]=x*M+w*N+b*C+S*k,r[11]=x*g+w*B+b*Y+S*H,r[15]=x*A+w*z+b*ie+S*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],m=e[7],d=e[11],_=e[15];return v*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*p-n*l*p)+m*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+d*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*u-n*c*u)+_*(-s*a*u-t*l*f+t*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],m=e[13],d=e[14],_=e[15],x=f*d*c-m*h*c+m*l*p-a*d*p-f*l*_+a*h*_,w=v*h*c-u*d*c-v*l*p+o*d*p+u*l*_-o*h*_,b=u*m*c-v*f*c+v*a*p-o*m*p-u*a*_+o*f*_,S=v*f*l-u*m*l-v*a*h+o*m*h+u*a*d-o*f*d,y=t*x+n*w+s*b+r*S;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=x*M,e[1]=(m*h*r-f*d*r-m*s*p+n*d*p+f*s*_-n*h*_)*M,e[2]=(a*d*r-m*l*r+m*s*c-n*d*c-a*s*_+n*l*_)*M,e[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*p-n*l*p)*M,e[4]=w*M,e[5]=(u*d*r-v*h*r+v*s*p-t*d*p-u*s*_+t*h*_)*M,e[6]=(v*l*r-o*d*r-v*s*c+t*d*c+o*s*_-t*l*_)*M,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*M,e[8]=b*M,e[9]=(v*f*r-u*m*r-v*n*p+t*m*p+u*n*_-t*f*_)*M,e[10]=(o*m*r-v*a*r+v*n*c-t*m*c-o*n*_+t*a*_)*M,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*p-t*a*p)*M,e[12]=S*M,e[13]=(u*m*s-v*f*s+v*n*h-t*m*h-u*n*d+t*f*d)*M,e[14]=(v*a*s-o*m*s-v*n*l+t*m*l+o*n*d-t*a*d)*M,e[15]=(o*f*s-u*a*s+u*n*l-t*f*l-o*n*h+t*a*h)*M,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,v=r*f,m=o*u,d=o*f,_=a*f,x=l*c,w=l*u,b=l*f,S=n.x,y=n.y,M=n.z;return s[0]=(1-(m+_))*S,s[1]=(p+b)*S,s[2]=(v-w)*S,s[3]=0,s[4]=(p-b)*y,s[5]=(1-(h+_))*y,s[6]=(d+x)*y,s[7]=0,s[8]=(v+w)*M,s[9]=(d-x)*M,s[10]=(1-(h+m))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Si.set(s[0],s[1],s[2]).length();const o=Si.set(s[4],s[5],s[6]).length(),a=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const c=1/r,u=1/o,f=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),h=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),f=(t+e)*l,h=(n+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new O,an=new Je,Nu=new O(0,0,0),Uu=new O(1,1,1),zn=new O,Ts=new O,Ut=new O,co=new Je,uo=new fi;class cs{constructor(e=0,t=0,n=0,s=cs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uo.setFromEuler(this),this.setFromQuaternion(uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}cs.DefaultOrder="XYZ";cs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class fa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ku=0;const fo=new O,yi=new fi,Sn=new Je,As=new O,Yi=new O,Bu=new O,Vu=new fi,ho=new O(1,0,0),mo=new O(0,1,0),po=new O(0,0,1),Gu={type:"added"},go={type:"removed"};class mt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DefaultUp.clone();const e=new O,t=new cs,n=new fi,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Qt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DefaultMatrixWorldAutoUpdate,this.layers=new fa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(ho,e)}rotateY(e){return this.rotateOnAxis(mo,e)}rotateZ(e){return this.rotateOnAxis(po,e)}translateOnAxis(e,t){return fo.copy(e).applyQuaternion(this.quaternion),this.position.add(fo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ho,e)}translateY(e){return this.translateOnAxis(mo,e)}translateZ(e){return this.translateOnAxis(po,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Yi,As,this.up):Sn.lookAt(As,Yi,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(Sn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(go)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(go)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,Bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Vu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DefaultUp=new O(0,1,0);mt.DefaultMatrixAutoUpdate=!0;mt.DefaultMatrixWorldAutoUpdate=!0;const on=new O,yn=new O,Er=new O,Tn=new O,Ti=new O,Ai=new O,_o=new O,Cr=new O,Lr=new O,Dr=new O;class gn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),yn.subVectors(n,t),Er.subVectors(e,t);const o=on.dot(on),a=on.dot(yn),l=on.dot(Er),c=yn.dot(yn),u=yn.dot(Er),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,v=(o*u-a*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Tn),l.set(0,0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),yn.subVectors(e,t),on.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),on.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return gn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ti.subVectors(s,n),Ai.subVectors(r,n),Cr.subVectors(e,n);const l=Ti.dot(Cr),c=Ai.dot(Cr);if(l<=0&&c<=0)return t.copy(n);Lr.subVectors(e,s);const u=Ti.dot(Lr),f=Ai.dot(Lr);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ti,o);Dr.subVectors(e,r);const p=Ti.dot(Dr),v=Ai.dot(Dr);if(v>=0&&p<=v)return t.copy(r);const m=p*c-l*v;if(m<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Ai,a);const d=u*v-p*f;if(d<=0&&f-u>=0&&p-v>=0)return _o.subVectors(r,s),a=(f-u)/(f-u+(p-v)),t.copy(s).addScaledVector(_o,a);const _=1/(d+m+h);return o=m*_,a=h*_,t.copy(n).addScaledVector(Ti,o).addScaledVector(Ai,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hu=0;class Wi extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Fi,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xl,this.blendDst=bl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ha extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new O,Es=new Me;class xn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=io,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Dl extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pl extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wu=0;const Zt=new Je,Pr=new mt,Ei=new O,kt=new ls,Zi=new ls,vt=new O;class Ot extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tl(e)?Pl:Dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(kt.min,Zi.min),kt.expandByPoint(vt),vt.addVectors(kt.max,Zi.max),kt.expandByPoint(vt)):(kt.expandByPoint(Zi.min),kt.expandByPoint(Zi.max))}kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(e,c),vt.add(Ei)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new O,u[P]=new O;const f=new O,h=new O,p=new O,v=new Me,m=new Me,d=new Me,_=new O,x=new O;function w(P,N,B){f.fromArray(s,P*3),h.fromArray(s,N*3),p.fromArray(s,B*3),v.fromArray(o,P*2),m.fromArray(o,N*2),d.fromArray(o,B*2),h.sub(f),p.sub(f),m.sub(v),d.sub(v);const z=1/(m.x*d.y-d.x*m.y);!isFinite(z)||(_.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(z),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(z),c[P].add(_),c[N].add(_),c[B].add(_),u[P].add(x),u[N].add(x),u[B].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let P=0,N=b.length;P<N;++P){const B=b[P],z=B.start,U=B.count;for(let C=z,Y=z+U;C<Y;C+=3)w(n[C+0],n[C+1],n[C+2])}const S=new O,y=new O,M=new O,g=new O;function A(P){M.fromArray(r,P*3),g.copy(M);const N=c[P];S.copy(N),S.sub(M.multiplyScalar(M.dot(N))).normalize(),y.crossVectors(g,N);const z=y.dot(u[P])<0?-1:1;l[P*4]=S.x,l[P*4+1]=S.y,l[P*4+2]=S.z,l[P*4+3]=z}for(let P=0,N=b.length;P<N;++P){const B=b[P],z=B.start,U=B.count;for(let C=z,Y=z+U;C<Y;C+=3)A(n[C+0]),A(n[C+1]),A(n[C+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)h[v++]=c[p++]}return new xn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vo=new Je,Ci=new ua,Rr=new Qs,Fn=new O,Nn=new O,Un=new O,Ir=new O,Or=new O,zr=new O,Cs=new O,Ls=new O,Ds=new O,Ps=new Me,Rs=new Me,Is=new Me,Fr=new O,Os=new O;class un extends mt{constructor(e=new Ot,t=new ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),e.ray.intersectsSphere(Rr)===!1)||(vo.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(vo),n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,p=n.groups,v=n.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],x=s[_.materialIndex],w=Math.max(_.start,v.start),b=Math.min(a.count,Math.min(_.start+_.count,v.start+v.count));for(let S=w,y=b;S<y;S+=3){const M=a.getX(S),g=a.getX(S+1),A=a.getX(S+2);o=zs(this,x,e,Ci,l,c,u,f,h,M,g,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,v.start),d=Math.min(a.count,v.start+v.count);for(let _=m,x=d;_<x;_+=3){const w=a.getX(_),b=a.getX(_+1),S=a.getX(_+2);o=zs(this,s,e,Ci,l,c,u,f,h,w,b,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],x=s[_.materialIndex],w=Math.max(_.start,v.start),b=Math.min(l.count,Math.min(_.start+_.count,v.start+v.count));for(let S=w,y=b;S<y;S+=3){const M=S,g=S+1,A=S+2;o=zs(this,x,e,Ci,l,c,u,f,h,M,g,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,v.start),d=Math.min(l.count,v.start+v.count);for(let _=m,x=d;_<x;_+=3){const w=_,b=_+1,S=_+2;o=zs(this,s,e,Ci,l,c,u,f,h,w,b,S),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function ju(i,e,t,n,s,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side!==Jt,a),l===null)return null;Os.copy(a),Os.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Os);return c<t.near||c>t.far?null:{distance:c,point:Os.clone(),object:i}}function zs(i,e,t,n,s,r,o,a,l,c,u,f){Fn.fromBufferAttribute(s,c),Nn.fromBufferAttribute(s,u),Un.fromBufferAttribute(s,f);const h=i.morphTargetInfluences;if(r&&h){Cs.set(0,0,0),Ls.set(0,0,0),Ds.set(0,0,0);for(let v=0,m=r.length;v<m;v++){const d=h[v],_=r[v];d!==0&&(Ir.fromBufferAttribute(_,c),Or.fromBufferAttribute(_,u),zr.fromBufferAttribute(_,f),o?(Cs.addScaledVector(Ir,d),Ls.addScaledVector(Or,d),Ds.addScaledVector(zr,d)):(Cs.addScaledVector(Ir.sub(Fn),d),Ls.addScaledVector(Or.sub(Nn),d),Ds.addScaledVector(zr.sub(Un),d)))}Fn.add(Cs),Nn.add(Ls),Un.add(Ds)}i.isSkinnedMesh&&(i.boneTransform(c,Fn),i.boneTransform(u,Nn),i.boneTransform(f,Un));const p=ju(i,e,t,n,Fn,Nn,Un,Fr);if(p){a&&(Ps.fromBufferAttribute(a,c),Rs.fromBufferAttribute(a,u),Is.fromBufferAttribute(a,f),p.uv=gn.getUV(Fr,Fn,Nn,Un,Ps,Rs,Is,new Me)),l&&(Ps.fromBufferAttribute(l,c),Rs.fromBufferAttribute(l,u),Is.fromBufferAttribute(l,f),p.uv2=gn.getUV(Fr,Fn,Nn,Un,Ps,Rs,Is,new Me));const v={a:c,b:u,c:f,normal:new O,materialIndex:0};gn.getNormal(Fn,Nn,Un,v.normal),p.face=v}return p}class us extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function v(m,d,_,x,w,b,S,y,M,g,A){const P=b/M,N=S/g,B=b/2,z=S/2,U=y/2,C=M+1,Y=g+1;let ie=0,q=0;const k=new O;for(let H=0;H<Y;H++){const I=H*N-z;for(let ne=0;ne<C;ne++){const re=ne*P-B;k[m]=re*x,k[d]=I*w,k[_]=U,c.push(k.x,k.y,k.z),k[m]=0,k[d]=0,k[_]=y>0?1:-1,u.push(k.x,k.y,k.z),f.push(ne/M),f.push(1-H/g),ie+=1}}for(let H=0;H<g;H++)for(let I=0;I<M;I++){const ne=h+I+C*H,re=h+I+C*(H+1),he=h+(I+1)+C*(H+1),Se=h+(I+1)+C*H;l.push(ne,re,Se),l.push(re,he,Se),q+=6}a.addGroup(p,q,A),p+=q,h+=ie}}static fromJSON(e){return new us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=Vi(i[t]);for(const s in n)e[s]=n[s]}return e}function Xu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const Gi={clone:Vi,merge:At};var qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qu,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=Xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class da extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends da{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=90,Di=1;class Zu extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new Ct(Li,Di,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new O(1,0,0)),this.add(s);const r=new Ct(Li,Di,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new O(-1,0,0)),this.add(r);const o=new Ct(Li,Di,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new O(0,1,0)),this.add(o);const a=new Ct(Li,Di,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new O(0,-1,0)),this.add(a);const l=new Ct(Li,Di,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,1)),this.add(l);const c=new Ct(Li,Di,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Rl extends nn{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ku extends tn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new us(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Vn});r.uniforms.tEquirect.value=t;const o=new un(s,r),a=t.minFilter;return t.minFilter===Js&&(t.minFilter=Kt),new Zu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Nr=new O,Ju=new O,Qu=new Qt;class kn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Nr.subVectors(n,t).cross(Ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Nr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qu.getNormalMatrix(e),s=this.coplanarPoint(Nr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Qs,Fs=new O;class $s{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],v=n[10],m=n[11],d=n[12],_=n[13],x=n[14],w=n[15];return t[0].setComponents(a-s,f-l,m-h,w-d).normalize(),t[1].setComponents(a+s,f+l,m+h,w+d).normalize(),t[2].setComponents(a+r,f+c,m+p,w+_).normalize(),t[3].setComponents(a-r,f-c,m-p,w-_).normalize(),t[4].setComponents(a-o,f-u,m-v,w-x).normalize(),t[5].setComponents(a+o,f+u,m+v,w+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fs.x=s.normal.x>0?e.max.x:e.min.x,Fs.y=s.normal.y>0?e.max.y:e.min.y,Fs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Il(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $u(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(f instanceof Int16Array)v=5122;else if(f instanceof Uint32Array)v=5125;else if(f instanceof Int32Array)v=5124;else if(f instanceof Int8Array)v=5120;else if(f instanceof Uint8Array)v=5121;else if(f instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,p=u.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Cn extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],v=[],m=[],d=[];for(let _=0;_<u;_++){const x=_*h-o;for(let w=0;w<c;w++){const b=w*f-r;v.push(b,-x,0),m.push(0,0,1),d.push(w/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const w=x+c*_,b=x+c*(_+1),S=x+1+c*(_+1),y=x+1+c*_;p.push(w,b,y),p.push(b,S,y)}this.setIndex(p),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(m,3)),this.setAttribute("uv",new pt(d,2))}static fromJSON(e){return new Cn(e.width,e.height,e.widthSegments,e.heightSegments)}}var ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of="vec3 transformed = vec3( position );",lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,uf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Hf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Kf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,th=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ch=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ph=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,bh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Mh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Sh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Th=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ah=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ch=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ih=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Oh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,zh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Uh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,jh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,qh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Zh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Kh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ed=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,id=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ad=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,md=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Md=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ad=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ed=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ld=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:ef,alphamap_pars_fragment:tf,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:af,begin_vertex:of,beginnormal_vertex:lf,bsdfs:cf,iridescence_fragment:uf,bumpmap_pars_fragment:ff,clipping_planes_fragment:hf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:mf,clipping_planes_vertex:pf,color_fragment:gf,color_pars_fragment:_f,color_pars_vertex:vf,color_vertex:xf,common:bf,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Mf,displacementmap_pars_vertex:Sf,displacementmap_vertex:yf,emissivemap_fragment:Tf,emissivemap_pars_fragment:Af,encodings_fragment:Ef,encodings_pars_fragment:Cf,envmap_fragment:Lf,envmap_common_pars_fragment:Df,envmap_pars_fragment:Pf,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Wf,envmap_vertex:If,fog_vertex:Of,fog_pars_vertex:zf,fog_fragment:Ff,fog_pars_fragment:Nf,gradientmap_pars_fragment:Uf,lightmap_fragment:kf,lightmap_pars_fragment:Bf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Hf,lights_toon_fragment:jf,lights_toon_pars_fragment:Xf,lights_phong_fragment:qf,lights_phong_pars_fragment:Yf,lights_physical_fragment:Zf,lights_physical_pars_fragment:Kf,lights_fragment_begin:Jf,lights_fragment_maps:Qf,lights_fragment_end:$f,logdepthbuf_fragment:eh,logdepthbuf_pars_fragment:th,logdepthbuf_pars_vertex:nh,logdepthbuf_vertex:ih,map_fragment:sh,map_pars_fragment:rh,map_particle_fragment:ah,map_particle_pars_fragment:oh,metalnessmap_fragment:lh,metalnessmap_pars_fragment:ch,morphcolor_vertex:uh,morphnormal_vertex:fh,morphtarget_pars_vertex:hh,morphtarget_vertex:dh,normal_fragment_begin:mh,normal_fragment_maps:ph,normal_pars_fragment:gh,normal_pars_vertex:_h,normal_vertex:vh,normalmap_pars_fragment:xh,clearcoat_normal_fragment_begin:bh,clearcoat_normal_fragment_maps:wh,clearcoat_pars_fragment:Mh,iridescence_pars_fragment:Sh,output_fragment:yh,packing:Th,premultiplied_alpha_fragment:Ah,project_vertex:Eh,dithering_fragment:Ch,dithering_pars_fragment:Lh,roughnessmap_fragment:Dh,roughnessmap_pars_fragment:Ph,shadowmap_pars_fragment:Rh,shadowmap_pars_vertex:Ih,shadowmap_vertex:Oh,shadowmask_pars_fragment:zh,skinbase_vertex:Fh,skinning_pars_vertex:Nh,skinning_vertex:Uh,skinnormal_vertex:kh,specularmap_fragment:Bh,specularmap_pars_fragment:Vh,tonemapping_fragment:Gh,tonemapping_pars_fragment:Hh,transmission_fragment:Wh,transmission_pars_fragment:jh,uv_pars_fragment:Xh,uv_pars_vertex:qh,uv_vertex:Yh,uv2_pars_fragment:Zh,uv2_pars_vertex:Kh,uv2_vertex:Jh,worldpos_vertex:Qh,background_vert:$h,background_frag:ed,cube_vert:td,cube_frag:nd,depth_vert:id,depth_frag:sd,distanceRGBA_vert:rd,distanceRGBA_frag:ad,equirect_vert:od,equirect_frag:ld,linedashed_vert:cd,linedashed_frag:ud,meshbasic_vert:fd,meshbasic_frag:hd,meshlambert_vert:dd,meshlambert_frag:md,meshmatcap_vert:pd,meshmatcap_frag:gd,meshnormal_vert:_d,meshnormal_frag:vd,meshphong_vert:xd,meshphong_frag:bd,meshphysical_vert:wd,meshphysical_frag:Md,meshtoon_vert:Sd,meshtoon_frag:yd,points_vert:Td,points_frag:Ad,shadow_vert:Ed,shadow_frag:Cd,sprite_vert:Ld,sprite_frag:Dd},ae={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qt},uv2Transform:{value:new Qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}}},mn={basic:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:At([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:At([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:At([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:At([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:At([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:At([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:At([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:At([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},cube:{uniforms:At([ae.envmap,{opacity:{value:1}}]),vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:At([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:At([ae.lights,ae.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};mn.physical={uniforms:At([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function Pd(i,e,t,n,s,r){const o=new ze(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function p(m,d){let _=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=e.get(x));const w=i.xr,b=w.getSession&&w.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?v(o,a):x&&x.isColor&&(v(x,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ks)?(c===void 0&&(c=new un(new us(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:Vi(mn.cube.uniforms),vertexShader:mn.cube.vertexShader,fragmentShader:mn.cube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,y,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new un(new Cn(2,2),new It({name:"BackgroundMaterial",uniforms:Vi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),a=d,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,v(o,a)},render:p}}function Rd(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function f(U,C,Y,ie,q){let k=!1;if(o){const H=m(ie,Y,C);c!==H&&(c=H,p(c.object)),k=_(U,ie,Y,q),k&&x(U,ie,Y,q)}else{const H=C.wireframe===!0;(c.geometry!==ie.id||c.program!==Y.id||c.wireframe!==H)&&(c.geometry=ie.id,c.program=Y.id,c.wireframe=H,k=!0)}q!==null&&t.update(q,34963),(k||u)&&(u=!1,g(U,C,Y,ie),q!==null&&i.bindBuffer(34963,t.get(q).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function v(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function m(U,C,Y){const ie=Y.wireframe===!0;let q=a[U.id];q===void 0&&(q={},a[U.id]=q);let k=q[C.id];k===void 0&&(k={},q[C.id]=k);let H=k[ie];return H===void 0&&(H=d(h()),k[ie]=H),H}function d(U){const C=[],Y=[],ie=[];for(let q=0;q<s;q++)C[q]=0,Y[q]=0,ie[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Y,attributeDivisors:ie,object:U,attributes:{},index:null}}function _(U,C,Y,ie){const q=c.attributes,k=C.attributes;let H=0;const I=Y.getAttributes();for(const ne in I)if(I[ne].location>=0){const he=q[ne];let Se=k[ne];if(Se===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;H++}return c.attributesNum!==H||c.index!==ie}function x(U,C,Y,ie){const q={},k=C.attributes;let H=0;const I=Y.getAttributes();for(const ne in I)if(I[ne].location>=0){let he=k[ne];he===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(he=U.instanceColor));const Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),q[ne]=Se,H++}c.attributes=q,c.attributesNum=H,c.index=ie}function w(){const U=c.newAttributes;for(let C=0,Y=U.length;C<Y;C++)U[C]=0}function b(U){S(U,0)}function S(U,C){const Y=c.newAttributes,ie=c.enabledAttributes,q=c.attributeDivisors;Y[U]=1,ie[U]===0&&(i.enableVertexAttribArray(U),ie[U]=1),q[U]!==C&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,C),q[U]=C)}function y(){const U=c.newAttributes,C=c.enabledAttributes;for(let Y=0,ie=C.length;Y<ie;Y++)C[Y]!==U[Y]&&(i.disableVertexAttribArray(Y),C[Y]=0)}function M(U,C,Y,ie,q,k){n.isWebGL2===!0&&(Y===5124||Y===5125)?i.vertexAttribIPointer(U,C,Y,q,k):i.vertexAttribPointer(U,C,Y,ie,q,k)}function g(U,C,Y,ie){if(n.isWebGL2===!1&&(U.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const q=ie.attributes,k=Y.getAttributes(),H=C.defaultAttributeValues;for(const I in k){const ne=k[I];if(ne.location>=0){let re=q[I];if(re===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),re!==void 0){const he=re.normalized,Se=re.itemSize,D=t.get(re);if(D===void 0)continue;const pe=D.buffer,Te=D.type,De=D.bytesPerElement;if(re.isInterleavedBufferAttribute){const ge=re.data,Xe=ge.stride,Oe=re.offset;if(ge.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ne.locationSize;Ae++)S(ne.location+Ae,ge.meshPerAttribute);U.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ae=0;Ae<ne.locationSize;Ae++)b(ne.location+Ae);i.bindBuffer(34962,pe);for(let Ae=0;Ae<ne.locationSize;Ae++)M(ne.location+Ae,Se/ne.locationSize,Te,he,Xe*De,(Oe+Se/ne.locationSize*Ae)*De)}else{if(re.isInstancedBufferAttribute){for(let ge=0;ge<ne.locationSize;ge++)S(ne.location+ge,re.meshPerAttribute);U.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ge=0;ge<ne.locationSize;ge++)b(ne.location+ge);i.bindBuffer(34962,pe);for(let ge=0;ge<ne.locationSize;ge++)M(ne.location+ge,Se/ne.locationSize,Te,he,Se*De,Se/ne.locationSize*ge*De)}}else if(H!==void 0){const he=H[I];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(ne.location,he);break;case 3:i.vertexAttrib3fv(ne.location,he);break;case 4:i.vertexAttrib4fv(ne.location,he);break;default:i.vertexAttrib1fv(ne.location,he)}}}}y()}function A(){B();for(const U in a){const C=a[U];for(const Y in C){const ie=C[Y];for(const q in ie)v(ie[q].object),delete ie[q];delete C[Y]}delete a[U]}}function P(U){if(a[U.id]===void 0)return;const C=a[U.id];for(const Y in C){const ie=C[Y];for(const q in ie)v(ie[q].object),delete ie[q];delete C[Y]}delete a[U.id]}function N(U){for(const C in a){const Y=a[C];if(Y[U.id]===void 0)continue;const ie=Y[U.id];for(const q in ie)v(ie[q].object),delete ie[q];delete Y[U.id]}}function B(){z(),u=!0,c!==l&&(c=l,p(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:b,disableUnusedAttributes:y}}function Id(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,p;if(s)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Od(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(M){if(M==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),p=i.getParameter(3379),v=i.getParameter(34076),m=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),x=i.getParameter(36349),w=h>0,b=o||e.has("OES_texture_float"),S=w&&b,y=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:y}}function zd(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new kn,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const v=f.length!==0||h||n!==0||s;return s=h,t=u(f,p,0),n=f.length,v},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,h,p){const v=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,_=i.get(f);if(!s||v===null||v.length===0||r&&!d)r?u(null):c();else{const x=r?0:n,w=x*4;let b=_.clippingState||null;l.value=b,b=u(v,h,w,p);for(let S=0;S!==w;++S)b[S]=t[S];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,v){const m=f!==null?f.length:0;let d=null;if(m!==0){if(d=l.value,v!==!0||d===null){const _=p+m*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(d===null||d.length<_)&&(d=new Float32Array(_));for(let w=0,b=p;w!==m;++w,b+=4)o.copy(f[w]).applyMatrix4(x,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Fd(i){let e=new WeakMap;function t(o,a){return a===Qr?o.mapping=Ui:a===$r&&(o.mapping=ki),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Qr||a===$r)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ku(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ma extends da{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,xo=[.125,.215,.35,.446,.526,.582],ei=20,Ur=new ma,bo=new ze;let kr=null;const $n=(1+Math.sqrt(5))/2,Ri=1/$n,wo=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,$n,Ri),new O(0,$n,-Ri),new O(Ri,0,$n),new O(-Ri,0,$n),new O($n,Ri,0),new O(-$n,Ri,0)];class Mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){kr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=To(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kr),e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:ss,format:_n,encoding:Hn,depthBuffer:!1},s=So(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=So(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nd(r)),this._blurMaterial=Ud(r,e,t)}return s}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,n,s){const a=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(bo),u.toneMapping=vn,u.autoClear=!1;const p=new ha({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),v=new un(new us,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(bo),m=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):x===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;Ns(s,x*w,_>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ui||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=To()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wo[(s-1)%wo.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new un(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ei-1),m=r/v,d=isFinite(r)?1+Math.floor(u*m):ei;d>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ei}`);const _=[];let x=0;for(let M=0;M<ei;++M){const g=M/m,A=Math.exp(-g*g/2);_.push(A),M===0?x+=A:M<d&&(x+=2*A)}for(let M=0;M<_.length;M++)_[M]=_[M]/x;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=v,h.mipInt.value=w-n;const b=this._sizeLods[s],S=3*b*(s>w-zi?s-w+zi:0),y=4*(this._cubeSize-b);Ns(t,S,y,3*b,2*b),l.setRenderTarget(t),l.render(f,Ur)}}function Nd(i){const e=[],t=[],n=[];let s=i;const r=i-zi+1+xo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-zi?l=xo[o-i+zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,m=3,d=2,_=1,x=new Float32Array(m*v*p),w=new Float32Array(d*v*p),b=new Float32Array(_*v*p);for(let y=0;y<p;y++){const M=y%3*2/3-1,g=y>2?0:-1,A=[M,g,0,M+2/3,g,0,M+2/3,g+1,0,M,g,0,M+2/3,g+1,0,M,g+1,0];x.set(A,m*v*y),w.set(h,d*v*y);const P=[y,y,y,y,y,y];b.set(P,_*v*y)}const S=new Ot;S.setAttribute("position",new xn(x,m)),S.setAttribute("uv",new xn(w,d)),S.setAttribute("faceIndex",new xn(b,_)),e.push(S),s>zi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function So(i,e,t){const n=new tn(i,e,t);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ud(i,e,t){const n=new Float32Array(ei),s=new O(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function yo(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function To(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qr||l===$r,u=l===Ui||l===ki;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Mo(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new Mo(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Bd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vd(i,e,t,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],34962);const p=f.morphAttributes;for(const v in p){const m=p[v];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let w=0,b=x.length;w<b;w+=3){const S=x[w+0],y=x[w+1],M=x[w+2];h.push(S,y,y,M,M,S)}}else{const x=v.array;m=v.version;for(let w=0,b=x.length/3-1;w<b;w+=3){const S=w+0,y=w+1,M=w+2;h.push(S,y,y,M,M,S)}}const d=new(Tl(h)?Pl:Dl)(h,1);d.version=m;const _=r.get(f);_&&e.remove(_),r.set(f,d)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Gd(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){i.drawElements(r,p,a,h*l),t.update(p,r,1)}function f(h,p,v){if(v===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,h*l,v),t.update(p,r,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Hd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Wd(i,e){return i[0]-e[0]}function jd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Xd(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new Ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=v!==void 0?v.length:0;let d=r.get(u);if(d===void 0||d.count!==m){let C=function(){z.dispose(),r.delete(u),u.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();const w=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],g=u.morphAttributes.color||[];let A=0;w===!0&&(A=1),b===!0&&(A=2),S===!0&&(A=3);let P=u.attributes.position.count*A,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const B=new Float32Array(P*N*4*m),z=new Ll(B,P,N,m);z.type=ii,z.needsUpdate=!0;const U=A*4;for(let Y=0;Y<m;Y++){const ie=y[Y],q=M[Y],k=g[Y],H=P*N*4*Y;for(let I=0;I<ie.count;I++){const ne=I*U;w===!0&&(o.fromBufferAttribute(ie,I),B[H+ne+0]=o.x,B[H+ne+1]=o.y,B[H+ne+2]=o.z,B[H+ne+3]=0),b===!0&&(o.fromBufferAttribute(q,I),B[H+ne+4]=o.x,B[H+ne+5]=o.y,B[H+ne+6]=o.z,B[H+ne+7]=0),S===!0&&(o.fromBufferAttribute(k,I),B[H+ne+8]=o.x,B[H+ne+9]=o.y,B[H+ne+10]=o.z,B[H+ne+11]=k.itemSize===4?o.w:1)}}d={count:m,texture:z,size:new Me(P,N)},r.set(u,d),u.addEventListener("dispose",C)}let _=0;for(let w=0;w<p.length;w++)_+=p[w];const x=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const v=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==v){m=[];for(let b=0;b<v;b++)m[b]=[b,0];n[u.id]=m}for(let b=0;b<v;b++){const S=m[b];S[0]=b,S[1]=p[b]}m.sort(jd);for(let b=0;b<8;b++)b<v&&m[b][1]?(a[b][0]=m[b][0],a[b][1]=m[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Wd);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const S=a[b],y=S[0],M=S[1];y!==Number.MAX_SAFE_INTEGER&&M?(d&&u.getAttribute("morphTarget"+b)!==d[y]&&u.setAttribute("morphTarget"+b,d[y]),_&&u.getAttribute("morphNormal"+b)!==_[y]&&u.setAttribute("morphNormal"+b,_[y]),s[b]=M,x+=M):(d&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),_&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const w=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function qd(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ol=new nn,zl=new Ll,Fl=new zu,Nl=new Rl,Ao=[],Eo=[],Co=new Float32Array(16),Lo=new Float32Array(9),Do=new Float32Array(4);function ji(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ao[s];if(r===void 0&&(r=new Float32Array(s),Ao[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function er(i,e){let t=Eo[e];t===void 0&&(t=new Int32Array(e),Eo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function Qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Do.set(n),i.uniformMatrix2fv(this.addr,!1,Do),_t(t,n)}}function $d(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Lo.set(n),i.uniformMatrix3fv(this.addr,!1,Lo),_t(t,n)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Co.set(n),i.uniformMatrix4fv(this.addr,!1,Co),_t(t,n)}}function tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nm(i,e){const t=this.cache;gt(t,e)||(i.uniform2iv(this.addr,e),_t(t,e))}function im(i,e){const t=this.cache;gt(t,e)||(i.uniform3iv(this.addr,e),_t(t,e))}function sm(i,e){const t=this.cache;gt(t,e)||(i.uniform4iv(this.addr,e),_t(t,e))}function rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function am(i,e){const t=this.cache;gt(t,e)||(i.uniform2uiv(this.addr,e),_t(t,e))}function om(i,e){const t=this.cache;gt(t,e)||(i.uniform3uiv(this.addr,e),_t(t,e))}function lm(i,e){const t=this.cache;gt(t,e)||(i.uniform4uiv(this.addr,e),_t(t,e))}function cm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Ol,s)}function um(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fl,s)}function fm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nl,s)}function hm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zl,s)}function dm(i){switch(i){case 5126:return Yd;case 35664:return Zd;case 35665:return Kd;case 35666:return Jd;case 35674:return Qd;case 35675:return $d;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return hm}}function mm(i,e){i.uniform1fv(this.addr,e)}function pm(i,e){const t=ji(e,this.size,2);i.uniform2fv(this.addr,t)}function gm(i,e){const t=ji(e,this.size,3);i.uniform3fv(this.addr,t)}function _m(i,e){const t=ji(e,this.size,4);i.uniform4fv(this.addr,t)}function vm(i,e){const t=ji(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xm(i,e){const t=ji(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bm(i,e){const t=ji(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wm(i,e){i.uniform1iv(this.addr,e)}function Mm(i,e){i.uniform2iv(this.addr,e)}function Sm(i,e){i.uniform3iv(this.addr,e)}function ym(i,e){i.uniform4iv(this.addr,e)}function Tm(i,e){i.uniform1uiv(this.addr,e)}function Am(i,e){i.uniform2uiv(this.addr,e)}function Em(i,e){i.uniform3uiv(this.addr,e)}function Cm(i,e){i.uniform4uiv(this.addr,e)}function Lm(i,e,t){const n=this.cache,s=e.length,r=er(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ol,r[o])}function Dm(i,e,t){const n=this.cache,s=e.length,r=er(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fl,r[o])}function Pm(i,e,t){const n=this.cache,s=e.length,r=er(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Nl,r[o])}function Rm(i,e,t){const n=this.cache,s=e.length,r=er(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zl,r[o])}function Im(i){switch(i){case 5126:return mm;case 35664:return pm;case 35665:return gm;case 35666:return _m;case 35674:return vm;case 35675:return xm;case 35676:return bm;case 5124:case 35670:return wm;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return ym;case 5125:return Tm;case 36294:return Am;case 36295:return Em;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Rm}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dm(t.type)}}class zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Im(t.type)}}class Fm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function Po(i,e){i.seq.push(e),i.map[e.id]=e}function Nm(i,e,t){const n=i.name,s=n.length;for(Br.lastIndex=0;;){const r=Br.exec(n),o=Br.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Po(t,c===void 0?new Om(a,i,e):new zm(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Fm(a),Po(t,f)),t=f}}}class Xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Nm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Ro(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Um=0;function km(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Bm(i){switch(i){case Hn:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Io(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+km(i.getShaderSource(e),o)}else return s}function Vm(i,e){const t=Bm(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gm(i,e){let t;switch(e){case cu:t="Linear";break;case uu:t="Reinhard";break;case fu:t="OptimizedCineon";break;case ca:t="ACESFilmic";break;case hu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hm(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($i).join(`
`)}function Wm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jm(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $i(i){return i!==""}function Oo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(i){return i.replace(Xm,qm)}function qm(i,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ia(t)}const Ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fo(i){return i.replace(Ym,Zm)}function Zm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function No(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Km(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_l?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case ki:e="ENVMAP_TYPE_CUBE";break;case Ks:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function $m(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case ou:e="ENVMAP_BLENDING_MIX";break;case lu:e="ENVMAP_BLENDING_ADD";break}return e}function ep(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tp(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Km(t),c=Jm(t),u=Qm(t),f=$m(t),h=ep(t),p=t.isWebGL2?"":Hm(t),v=Wm(r),m=s.createProgram();let d,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[v].filter($i).join(`
`),d.length>0&&(d+=`
`),_=[p,v].filter($i).join(`
`),_.length>0&&(_+=`
`)):(d=[No(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),_=[p,No(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==vn?Gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,Vm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),o=ia(o),o=Oo(o,t),o=zo(o,t),a=ia(a),a=Oo(a,t),a=zo(a,t),o=Fo(o),a=Fo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===so?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===so?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=x+d+o,b=x+_+a,S=Ro(s,35633,w),y=Ro(s,35632,b);if(s.attachShader(m,S),s.attachShader(m,y),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const A=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(S).trim(),N=s.getShaderInfoLog(y).trim();let B=!0,z=!0;if(s.getProgramParameter(m,35714)===!1){B=!1;const U=Io(s,S,"vertex"),C=Io(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+U+`
`+C)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||N==="")&&(z=!1);z&&(this.diagnostics={runnable:B,programLog:A,vertexShader:{log:P,prefix:d},fragmentShader:{log:N,prefix:_}})}s.deleteShader(S),s.deleteShader(y);let M;this.getUniforms=function(){return M===void 0&&(M=new Xs(s,m)),M};let g;return this.getAttributes=function(){return g===void 0&&(g=jm(s,m)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Um++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=y,this}let np=0;class ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sp(e),t.set(e,n)),n}}class sp{constructor(e){this.id=np++,this.code=e,this.usedTimes=0}}function rp(i,e,t,n,s,r,o){const a=new fa,l=new ip,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g,A,P,N,B){const z=N.fog,U=B.geometry,C=g.isMeshStandardMaterial?N.environment:null,Y=(g.isMeshStandardMaterial?t:e).get(g.envMap||C),ie=!!Y&&Y.mapping===Ks?Y.image.height:null,q=v[g.type];g.precision!==null&&(p=s.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));const k=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,H=k!==void 0?k.length:0;let I=0;U.morphAttributes.position!==void 0&&(I=1),U.morphAttributes.normal!==void 0&&(I=2),U.morphAttributes.color!==void 0&&(I=3);let ne,re,he,Se;if(q){const Xe=mn[q];ne=Xe.vertexShader,re=Xe.fragmentShader}else ne=g.vertexShader,re=g.fragmentShader,l.update(g),he=l.getVertexShaderID(g),Se=l.getFragmentShaderID(g);const D=i.getRenderTarget(),pe=g.alphaTest>0,Te=g.clearcoat>0,De=g.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:g.type,vertexShader:ne,fragmentShader:re,defines:g.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:h,outputEncoding:D===null?i.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Hn,map:!!g.map,matcap:!!g.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:ie,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===Pu,tangentSpaceNormalMap:g.normalMapType===yl,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===et,clearcoat:Te,clearcoatMap:Te&&!!g.clearcoatMap,clearcoatRoughnessMap:Te&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!g.clearcoatNormalMap,iridescence:De,iridescenceMap:De&&!!g.iridescenceMap,iridescenceThicknessMap:De&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===Fi,alphaMap:!!g.alphaMap,alphaTest:pe,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!U.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||g.transmission>0||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||g.sheen>0||!!g.sheenColorMap||!!g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!z,useFog:g.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:I,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:g.toneMapped?i.toneMapping:vn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Jt,flipSided:g.side===en,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const A=[];if(g.shaderID?A.push(g.shaderID):(A.push(g.customVertexShaderID),A.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)A.push(P),A.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(_(A,g),x(A,g),A.push(i.outputEncoding)),A.push(g.customProgramCacheKey),A.join()}function _(g,A){g.push(A.precision),g.push(A.outputEncoding),g.push(A.envMapMode),g.push(A.envMapCubeUVHeight),g.push(A.combine),g.push(A.vertexUvs),g.push(A.fogExp2),g.push(A.sizeAttenuation),g.push(A.morphTargetsCount),g.push(A.morphAttributeCount),g.push(A.numDirLights),g.push(A.numPointLights),g.push(A.numSpotLights),g.push(A.numSpotLightMaps),g.push(A.numHemiLights),g.push(A.numRectAreaLights),g.push(A.numDirLightShadows),g.push(A.numPointLightShadows),g.push(A.numSpotLightShadows),g.push(A.numSpotLightShadowsWithMaps),g.push(A.shadowMapType),g.push(A.toneMapping),g.push(A.numClippingPlanes),g.push(A.numClipIntersection),g.push(A.depthPacking)}function x(g,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),g.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),g.push(a.mask)}function w(g){const A=v[g.type];let P;if(A){const N=mn[A];P=Gi.clone(N.uniforms)}else P=g.uniforms;return P}function b(g,A){let P;for(let N=0,B=c.length;N<B;N++){const z=c[N];if(z.cacheKey===A){P=z,++P.usedTimes;break}}return P===void 0&&(P=new tp(i,A,g,r),c.push(P)),P}function S(g){if(--g.usedTimes===0){const A=c.indexOf(g);c[A]=c[c.length-1],c.pop(),g.destroy()}}function y(g){l.remove(g)}function M(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:b,releaseProgram:S,releaseShaderCache:y,programs:c,dispose:M}}function ap(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function op(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Uo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ko(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,p,v,m,d){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},i[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=m,_.group=d),e++,_}function a(f,h,p,v,m,d){const _=o(f,h,p,v,m,d);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(f,h,p,v,m,d){const _=o(f,h,p,v,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||op),n.length>1&&n.sort(h||Uo),s.length>1&&s.sort(h||Uo)}function u(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function lp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new ko,i.set(n,[o])):s>=r.length?(o=new ko,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ze};break;case"SpotLight":t={position:new O,direction:new O,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function up(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fp=0;function hp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dp(i,e){const t=new cp,n=up(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new O);const r=new O,o=new Je,a=new Je;function l(u,f){let h=0,p=0,v=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let m=0,d=0,_=0,x=0,w=0,b=0,S=0,y=0,M=0,g=0;u.sort(hp);const A=f!==!0?Math.PI:1;for(let N=0,B=u.length;N<B;N++){const z=u[N],U=z.color,C=z.intensity,Y=z.distance,ie=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=U.r*C*A,p+=U.g*C*A,v+=U.b*C*A;else if(z.isLightProbe)for(let q=0;q<9;q++)s.probe[q].addScaledVector(z.sh.coefficients[q],C);else if(z.isDirectionalLight){const q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity*A),z.castShadow){const k=z.shadow,H=n.get(z);H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,s.directionalShadow[m]=H,s.directionalShadowMap[m]=ie,s.directionalShadowMatrix[m]=z.shadow.matrix,b++}s.directional[m]=q,m++}else if(z.isSpotLight){const q=t.get(z);q.position.setFromMatrixPosition(z.matrixWorld),q.color.copy(U).multiplyScalar(C*A),q.distance=Y,q.coneCos=Math.cos(z.angle),q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),q.decay=z.decay,s.spot[_]=q;const k=z.shadow;if(z.map&&(s.spotLightMap[M]=z.map,M++,k.updateMatrices(z),z.castShadow&&g++),s.spotLightMatrix[_]=k.matrix,z.castShadow){const H=n.get(z);H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,s.spotShadow[_]=H,s.spotShadowMap[_]=ie,y++}_++}else if(z.isRectAreaLight){const q=t.get(z);q.color.copy(U).multiplyScalar(C),q.halfWidth.set(z.width*.5,0,0),q.halfHeight.set(0,z.height*.5,0),s.rectArea[x]=q,x++}else if(z.isPointLight){const q=t.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity*A),q.distance=z.distance,q.decay=z.decay,z.castShadow){const k=z.shadow,H=n.get(z);H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,s.pointShadow[d]=H,s.pointShadowMap[d]=ie,s.pointShadowMatrix[d]=z.shadow.matrix,S++}s.point[d]=q,d++}else if(z.isHemisphereLight){const q=t.get(z);q.skyColor.copy(z.color).multiplyScalar(C*A),q.groundColor.copy(z.groundColor).multiplyScalar(C*A),s.hemi[w]=q,w++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=v;const P=s.hash;(P.directionalLength!==m||P.pointLength!==d||P.spotLength!==_||P.rectAreaLength!==x||P.hemiLength!==w||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==M)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=x,s.point.length=d,s.hemi.length=w,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=y,s.spotShadowMap.length=y,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=y+M-g,s.spotLightMap.length=M,s.numSpotLightShadowsWithMaps=g,P.directionalLength=m,P.pointLength=d,P.spotLength=_,P.rectAreaLength=x,P.hemiLength=w,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=M,s.version=fp++)}function c(u,f){let h=0,p=0,v=0,m=0,d=0;const _=f.matrixWorldInverse;for(let x=0,w=u.length;x<w;x++){const b=u[x];if(b.isDirectionalLight){const S=s.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),h++}else if(b.isSpotLight){const S=s.spot[v];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),v++}else if(b.isRectAreaLight){const S=s.rectArea[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const S=s.point[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){const S=s.hemi[d];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function Bo(i,e){const t=new dp(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mp(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Bo(i,e),t.set(r,[l])):o>=a.length?(l=new Bo(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class pp extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gp extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xp(i,e,t){let n=new $s;const s=new Me,r=new Me,o=new Ze,a=new pp({depthPacking:Du}),l=new gp,c={},u=t.maxTextureSize,f={0:en,1:ci,2:Jt},h=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:_p,fragmentShader:vp}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ot;v.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new un(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l,this.render=function(b,S,y){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const M=i.getRenderTarget(),g=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Vn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let N=0,B=b.length;N<B;N++){const z=b[N],U=z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const C=U.getFrameExtents();if(s.multiply(C),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/C.x),s.x=r.x*C.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/C.y),s.y=r.y*C.y,U.mapSize.y=r.y)),U.map===null){const ie=this.type!==Qi?{minFilter:Dt,magFilter:Dt}:{};U.map=new tn(s.x,s.y,ie),U.map.texture.name=z.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const Y=U.getViewportCount();for(let ie=0;ie<Y;ie++){const q=U.getViewport(ie);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),P.viewport(o),U.updateMatrices(z,ie),n=U.getFrustum(),w(S,y,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===Qi&&_(U,y),U.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(M,g,A)};function _(b,S){const y=e.update(m);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new tn(s.x,s.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,y,h,m,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,y,p,m,null)}function x(b,S,y,M,g,A){let P=null;const N=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0?P=N:P=y.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const B=P.uuid,z=S.uuid;let U=c[B];U===void 0&&(U={},c[B]=U);let C=U[z];C===void 0&&(C=P.clone(),U[z]=C),P=C}return P.visible=S.visible,P.wireframe=S.wireframe,A===Qi?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:f[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(y.matrixWorld),P.nearDistance=M,P.farDistance=g),P}function w(b,S,y,M,g){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&g===Qi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const N=e.update(b),B=b.material;if(Array.isArray(B)){const z=N.groups;for(let U=0,C=z.length;U<C;U++){const Y=z[U],ie=B[Y.materialIndex];if(ie&&ie.visible){const q=x(b,ie,M,y.near,y.far,g);i.renderBufferDirect(y,null,N,q,b,Y)}}}else if(B.visible){const z=x(b,B,M,y.near,y.far,g);i.renderBufferDirect(y,null,N,z,b,null)}}const P=b.children;for(let N=0,B=P.length;N<B;N++)w(P[N],S,y,M,g)}}function bp(i,e,t){const n=t.isWebGL2;function s(){let F=!1;const fe=new Ze;let le=null;const te=new Ze(0,0,0,0);return{setMask:function(ce){le!==ce&&!F&&(i.colorMask(ce,ce,ce,ce),le=ce)},setLocked:function(ce){F=ce},setClear:function(ce,Le,Qe,at,Dn){Dn===!0&&(ce*=at,Le*=at,Qe*=at),fe.set(ce,Le,Qe,at),te.equals(fe)===!1&&(i.clearColor(ce,Le,Qe,at),te.copy(fe))},reset:function(){F=!1,le=null,te.set(-1,0,0,0)}}}function r(){let F=!1,fe=null,le=null,te=null;return{setTest:function(ce){ce?pe(2929):Te(2929)},setMask:function(ce){fe!==ce&&!F&&(i.depthMask(ce),fe=ce)},setFunc:function(ce){if(le!==ce){switch(ce){case eu:i.depthFunc(512);break;case tu:i.depthFunc(519);break;case nu:i.depthFunc(513);break;case Jr:i.depthFunc(515);break;case iu:i.depthFunc(514);break;case su:i.depthFunc(518);break;case ru:i.depthFunc(516);break;case au:i.depthFunc(517);break;default:i.depthFunc(515)}le=ce}},setLocked:function(ce){F=ce},setClear:function(ce){te!==ce&&(i.clearDepth(ce),te=ce)},reset:function(){F=!1,fe=null,le=null,te=null}}}function o(){let F=!1,fe=null,le=null,te=null,ce=null,Le=null,Qe=null,at=null,Dn=null;return{setTest:function(tt){F||(tt?pe(2960):Te(2960))},setMask:function(tt){fe!==tt&&!F&&(i.stencilMask(tt),fe=tt)},setFunc:function(tt,bn,qt){(le!==tt||te!==bn||ce!==qt)&&(i.stencilFunc(tt,bn,qt),le=tt,te=bn,ce=qt)},setOp:function(tt,bn,qt){(Le!==tt||Qe!==bn||at!==qt)&&(i.stencilOp(tt,bn,qt),Le=tt,Qe=bn,at=qt)},setLocked:function(tt){F=tt},setClear:function(tt){Dn!==tt&&(i.clearStencil(tt),Dn=tt)},reset:function(){F=!1,fe=null,le=null,te=null,ce=null,Le=null,Qe=null,at=null,Dn=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,m=[],d=null,_=!1,x=null,w=null,b=null,S=null,y=null,M=null,g=null,A=!1,P=null,N=null,B=null,z=null,U=null;const C=i.getParameter(35661);let Y=!1,ie=0;const q=i.getParameter(7938);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=ie>=2);let k=null,H={};const I=i.getParameter(3088),ne=i.getParameter(2978),re=new Ze().fromArray(I),he=new Ze().fromArray(ne);function Se(F,fe,le){const te=new Uint8Array(4),ce=i.createTexture();i.bindTexture(F,ce),i.texParameteri(F,10241,9728),i.texParameteri(F,10240,9728);for(let Le=0;Le<le;Le++)i.texImage2D(fe+Le,0,6408,1,1,0,6408,5121,te);return ce}const D={};D[3553]=Se(3553,3553,1),D[34067]=Se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(2929),l.setFunc(Jr),ut(!1),zt(La),pe(2884),ot(Vn);function pe(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Te(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function De(F,fe){return p[F]!==fe?(i.bindFramebuffer(F,fe),p[F]=fe,n&&(F===36009&&(p[36160]=fe),F===36160&&(p[36009]=fe)),!0):!1}function ge(F,fe){let le=m,te=!1;if(F)if(le=v.get(fe),le===void 0&&(le=[],v.set(fe,le)),F.isWebGLMultipleRenderTargets){const ce=F.texture;if(le.length!==ce.length||le[0]!==36064){for(let Le=0,Qe=ce.length;Le<Qe;Le++)le[Le]=36064+Le;le.length=ce.length,te=!0}}else le[0]!==36064&&(le[0]=36064,te=!0);else le[0]!==1029&&(le[0]=1029,te=!0);te&&(t.isWebGL2?i.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Xe(F){return d!==F?(i.useProgram(F),d=F,!0):!1}const Oe={[Oi]:32774,[Hc]:32778,[Wc]:32779};if(n)Oe[Ra]=32775,Oe[Ia]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(Oe[Ra]=F.MIN_EXT,Oe[Ia]=F.MAX_EXT)}const Ae={[jc]:0,[Xc]:1,[qc]:768,[xl]:770,[$c]:776,[Jc]:774,[Zc]:772,[Yc]:769,[bl]:771,[Qc]:775,[Kc]:773};function ot(F,fe,le,te,ce,Le,Qe,at){if(F===Vn){_===!0&&(Te(3042),_=!1);return}if(_===!1&&(pe(3042),_=!0),F!==Gc){if(F!==x||at!==A){if((w!==Oi||y!==Oi)&&(i.blendEquation(32774),w=Oi,y=Oi),at)switch(F){case Fi:i.blendFuncSeparate(1,771,1,771);break;case Kr:i.blendFunc(1,1);break;case Da:i.blendFuncSeparate(0,769,0,1);break;case Pa:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Fi:i.blendFuncSeparate(770,771,1,771);break;case Kr:i.blendFunc(770,1);break;case Da:i.blendFuncSeparate(0,769,0,1);break;case Pa:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,S=null,M=null,g=null,x=F,A=at}return}ce=ce||fe,Le=Le||le,Qe=Qe||te,(fe!==w||ce!==y)&&(i.blendEquationSeparate(Oe[fe],Oe[ce]),w=fe,y=ce),(le!==b||te!==S||Le!==M||Qe!==g)&&(i.blendFuncSeparate(Ae[le],Ae[te],Ae[Le],Ae[Qe]),b=le,S=te,M=Le,g=Qe),x=F,A=null}function bt(F,fe){F.side===Jt?Te(2884):pe(2884);let le=F.side===en;fe&&(le=!le),ut(le),F.blending===Fi&&F.transparent===!1?ot(Vn):ot(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const te=F.stencilWrite;c.setTest(te),te&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),qe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?pe(32926):Te(32926)}function ut(F){P!==F&&(F?i.frontFace(2304):i.frontFace(2305),P=F)}function zt(F){F!==Bc?(pe(2884),F!==N&&(F===La?i.cullFace(1029):F===Vc?i.cullFace(1028):i.cullFace(1032))):Te(2884),N=F}function ft(F){F!==B&&(Y&&i.lineWidth(F),B=F)}function qe(F,fe,le){F?(pe(32823),(z!==fe||U!==le)&&(i.polygonOffset(fe,le),z=fe,U=le)):Te(32823)}function jt(F){F?pe(3089):Te(3089)}function Xt(F){F===void 0&&(F=33984+C-1),k!==F&&(i.activeTexture(F),k=F)}function L(F,fe,le){le===void 0&&(k===null?le=33984+C-1:le=k);let te=H[le];te===void 0&&(te={type:void 0,texture:void 0},H[le]=te),(te.type!==F||te.texture!==fe)&&(k!==le&&(i.activeTexture(le),k=le),i.bindTexture(F,fe||D[F]),te.type=F,te.texture=fe)}function T(){const F=H[k];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function R(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(F){re.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),re.copy(F))}function me(F){he.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),he.copy(F))}function we(F,fe){let le=f.get(fe);le===void 0&&(le=new WeakMap,f.set(fe,le));let te=le.get(F);te===void 0&&(te=i.getUniformBlockIndex(fe,F.name),le.set(F,te))}function Pe(F,fe){const te=f.get(fe).get(F);u.get(F)!==te&&(i.uniformBlockBinding(fe,te,F.__bindingPointIndex),u.set(F,te))}function He(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},k=null,H={},p={},v=new WeakMap,m=[],d=null,_=!1,x=null,w=null,b=null,S=null,y=null,M=null,g=null,A=!1,P=null,N=null,B=null,z=null,U=null,re.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:Te,bindFramebuffer:De,drawBuffers:ge,useProgram:Xe,setBlending:ot,setMaterial:bt,setFlipSided:ut,setCullFace:zt,setLineWidth:ft,setPolygonOffset:qe,setScissorTest:jt,activeTexture:Xt,bindTexture:L,unbindTexture:T,compressedTexImage2D:Z,texImage2D:G,texImage3D:de,updateUBOMapping:we,uniformBlockBinding:Pe,texStorage2D:Ce,texStorage3D:R,texSubImage2D:se,texSubImage3D:oe,compressedTexSubImage2D:ue,scissor:be,viewport:me,reset:He}}function wp(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,T){return _?new OffscreenCanvas(L,T):rs("canvas")}function w(L,T,Z,se){let oe=1;if((L.width>se||L.height>se)&&(oe=se/Math.max(L.width,L.height)),oe<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ue=T?na:Math.floor,Ce=ue(oe*L.width),R=ue(oe*L.height);m===void 0&&(m=x(Ce,R));const G=Z?x(Ce,R):m;return G.width=Ce,G.height=R,G.getContext("2d").drawImage(L,0,0,Ce,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ce+"x"+R+")."),G}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return ao(L.width)&&ao(L.height)}function S(L){return a?!1:L.wrapS!==cn||L.wrapT!==cn||L.minFilter!==Dt&&L.minFilter!==Kt}function y(L,T){return L.generateMipmaps&&T&&L.minFilter!==Dt&&L.minFilter!==Kt}function M(L){i.generateMipmap(L)}function g(L,T,Z,se,oe=!1){if(a===!1)return T;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ue=T;return T===6403&&(Z===5126&&(ue=33326),Z===5131&&(ue=33325),Z===5121&&(ue=33321)),T===33319&&(Z===5126&&(ue=33328),Z===5131&&(ue=33327),Z===5121&&(ue=33323)),T===6408&&(Z===5126&&(ue=34836),Z===5131&&(ue=34842),Z===5121&&(ue=se===et&&oe===!1?35907:32856),Z===32819&&(ue=32854),Z===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function A(L,T,Z){return y(L,Z)===!0||L.isFramebufferTexture&&L.minFilter!==Dt&&L.minFilter!==Kt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function P(L){return L===Dt||L===Oa||L===za?9728:9729}function N(L){const T=L.target;T.removeEventListener("dispose",N),z(T),T.isVideoTexture&&v.delete(T)}function B(L){const T=L.target;T.removeEventListener("dispose",B),C(T)}function z(L){const T=n.get(L);if(T.__webglInit===void 0)return;const Z=L.source,se=d.get(Z);if(se){const oe=se[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&U(L),Object.keys(se).length===0&&d.delete(Z)}n.remove(L)}function U(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const Z=L.source,se=d.get(Z);delete se[T.__cacheKey],o.memory.textures--}function C(L){const T=L.texture,Z=n.get(L),se=n.get(T);if(se.__webglTexture!==void 0&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)i.deleteFramebuffer(Z.__webglFramebuffer[oe]),Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer[oe]);else{if(i.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let oe=0;oe<Z.__webglColorRenderbuffer.length;oe++)Z.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(Z.__webglColorRenderbuffer[oe]);Z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let oe=0,ue=T.length;oe<ue;oe++){const Ce=n.get(T[oe]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),o.memory.textures--),n.remove(T[oe])}n.remove(T),n.remove(L)}let Y=0;function ie(){Y=0}function q(){const L=Y;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),Y+=1,L}function k(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.encoding),T.join()}function H(L,T){const Z=n.get(L);if(L.isVideoTexture&&jt(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Z,L,T);return}}t.bindTexture(3553,Z.__webglTexture,33984+T)}function I(L,T){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){Te(Z,L,T);return}t.bindTexture(35866,Z.__webglTexture,33984+T)}function ne(L,T){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){Te(Z,L,T);return}t.bindTexture(32879,Z.__webglTexture,33984+T)}function re(L,T){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){De(Z,L,T);return}t.bindTexture(34067,Z.__webglTexture,33984+T)}const he={[qs]:10497,[cn]:33071,[ea]:33648},Se={[Dt]:9728,[Oa]:9984,[za]:9986,[Kt]:9729,[du]:9985,[Js]:9987};function D(L,T,Z){if(Z?(i.texParameteri(L,10242,he[T.wrapS]),i.texParameteri(L,10243,he[T.wrapT]),(L===32879||L===35866)&&i.texParameteri(L,32882,he[T.wrapR]),i.texParameteri(L,10240,Se[T.magFilter]),i.texParameteri(L,10241,Se[T.minFilter])):(i.texParameteri(L,10242,33071),i.texParameteri(L,10243,33071),(L===32879||L===35866)&&i.texParameteri(L,32882,33071),(T.wrapS!==cn||T.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,10240,P(T.magFilter)),i.texParameteri(L,10241,P(T.minFilter)),T.minFilter!==Dt&&T.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(T.type===ii&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===ss&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(L,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function pe(L,T){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",N));const se=T.source;let oe=d.get(se);oe===void 0&&(oe={},d.set(se,oe));const ue=k(T);if(ue!==L.__cacheKey){oe[ue]===void 0&&(oe[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),oe[ue].usedTimes++;const Ce=oe[L.__cacheKey];Ce!==void 0&&(oe[L.__cacheKey].usedTimes--,Ce.usedTimes===0&&U(T)),L.__cacheKey=ue,L.__webglTexture=oe[ue].texture}return Z}function Te(L,T,Z){let se=3553;T.isDataArrayTexture&&(se=35866),T.isData3DTexture&&(se=32879);const oe=pe(L,T),ue=T.source;t.bindTexture(se,L.__webglTexture,33984+Z);const Ce=n.get(ue);if(ue.version!==Ce.__version||oe===!0){t.activeTexture(33984+Z),i.pixelStorei(37440,T.flipY),i.pixelStorei(37441,T.premultiplyAlpha),i.pixelStorei(3317,T.unpackAlignment),i.pixelStorei(37443,0);const R=S(T)&&b(T.image)===!1;let G=w(T.image,R,!1,u);G=Xt(T,G);const de=b(G)||a,be=r.convert(T.format,T.encoding);let me=r.convert(T.type),we=g(T.internalFormat,be,me,T.encoding,T.isVideoTexture);D(se,T,de);let Pe;const He=T.mipmaps,F=a&&T.isVideoTexture!==!0,fe=Ce.__version===void 0||oe===!0,le=A(T,G,de);if(T.isDepthTexture)we=6402,a?T.type===ii?we=36012:T.type===ni?we=33190:T.type===Ni?we=35056:we=33189:T.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ai&&we===6402&&T.type!==Sl&&T.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ni,me=r.convert(T.type)),T.format===Bi&&we===6402&&(we=34041,T.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ni,me=r.convert(T.type))),fe&&(F?t.texStorage2D(3553,1,we,G.width,G.height):t.texImage2D(3553,0,we,G.width,G.height,0,be,me,null));else if(T.isDataTexture)if(He.length>0&&de){F&&fe&&t.texStorage2D(3553,le,we,He[0].width,He[0].height);for(let te=0,ce=He.length;te<ce;te++)Pe=He[te],F?t.texSubImage2D(3553,te,0,0,Pe.width,Pe.height,be,me,Pe.data):t.texImage2D(3553,te,we,Pe.width,Pe.height,0,be,me,Pe.data);T.generateMipmaps=!1}else F?(fe&&t.texStorage2D(3553,le,we,G.width,G.height),t.texSubImage2D(3553,0,0,0,G.width,G.height,be,me,G.data)):t.texImage2D(3553,0,we,G.width,G.height,0,be,me,G.data);else if(T.isCompressedTexture){F&&fe&&t.texStorage2D(3553,le,we,He[0].width,He[0].height);for(let te=0,ce=He.length;te<ce;te++)Pe=He[te],T.format!==_n?be!==null?F?t.compressedTexSubImage2D(3553,te,0,0,Pe.width,Pe.height,be,Pe.data):t.compressedTexImage2D(3553,te,we,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage2D(3553,te,0,0,Pe.width,Pe.height,be,me,Pe.data):t.texImage2D(3553,te,we,Pe.width,Pe.height,0,be,me,Pe.data)}else if(T.isDataArrayTexture)F?(fe&&t.texStorage3D(35866,le,we,G.width,G.height,G.depth),t.texSubImage3D(35866,0,0,0,0,G.width,G.height,G.depth,be,me,G.data)):t.texImage3D(35866,0,we,G.width,G.height,G.depth,0,be,me,G.data);else if(T.isData3DTexture)F?(fe&&t.texStorage3D(32879,le,we,G.width,G.height,G.depth),t.texSubImage3D(32879,0,0,0,0,G.width,G.height,G.depth,be,me,G.data)):t.texImage3D(32879,0,we,G.width,G.height,G.depth,0,be,me,G.data);else if(T.isFramebufferTexture){if(fe)if(F)t.texStorage2D(3553,le,we,G.width,G.height);else{let te=G.width,ce=G.height;for(let Le=0;Le<le;Le++)t.texImage2D(3553,Le,we,te,ce,0,be,me,null),te>>=1,ce>>=1}}else if(He.length>0&&de){F&&fe&&t.texStorage2D(3553,le,we,He[0].width,He[0].height);for(let te=0,ce=He.length;te<ce;te++)Pe=He[te],F?t.texSubImage2D(3553,te,0,0,be,me,Pe):t.texImage2D(3553,te,we,be,me,Pe);T.generateMipmaps=!1}else F?(fe&&t.texStorage2D(3553,le,we,G.width,G.height),t.texSubImage2D(3553,0,0,0,be,me,G)):t.texImage2D(3553,0,we,be,me,G);y(T,de)&&M(se),Ce.__version=ue.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function De(L,T,Z){if(T.image.length!==6)return;const se=pe(L,T),oe=T.source;t.bindTexture(34067,L.__webglTexture,33984+Z);const ue=n.get(oe);if(oe.version!==ue.__version||se===!0){t.activeTexture(33984+Z),i.pixelStorei(37440,T.flipY),i.pixelStorei(37441,T.premultiplyAlpha),i.pixelStorei(3317,T.unpackAlignment),i.pixelStorei(37443,0);const Ce=T.isCompressedTexture||T.image[0].isCompressedTexture,R=T.image[0]&&T.image[0].isDataTexture,G=[];for(let te=0;te<6;te++)!Ce&&!R?G[te]=w(T.image[te],!1,!0,c):G[te]=R?T.image[te].image:T.image[te],G[te]=Xt(T,G[te]);const de=G[0],be=b(de)||a,me=r.convert(T.format,T.encoding),we=r.convert(T.type),Pe=g(T.internalFormat,me,we,T.encoding),He=a&&T.isVideoTexture!==!0,F=ue.__version===void 0||se===!0;let fe=A(T,de,be);D(34067,T,be);let le;if(Ce){He&&F&&t.texStorage2D(34067,fe,Pe,de.width,de.height);for(let te=0;te<6;te++){le=G[te].mipmaps;for(let ce=0;ce<le.length;ce++){const Le=le[ce];T.format!==_n?me!==null?He?t.compressedTexSubImage2D(34069+te,ce,0,0,Le.width,Le.height,me,Le.data):t.compressedTexImage2D(34069+te,ce,Pe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(34069+te,ce,0,0,Le.width,Le.height,me,we,Le.data):t.texImage2D(34069+te,ce,Pe,Le.width,Le.height,0,me,we,Le.data)}}}else{le=T.mipmaps,He&&F&&(le.length>0&&fe++,t.texStorage2D(34067,fe,Pe,G[0].width,G[0].height));for(let te=0;te<6;te++)if(R){He?t.texSubImage2D(34069+te,0,0,0,G[te].width,G[te].height,me,we,G[te].data):t.texImage2D(34069+te,0,Pe,G[te].width,G[te].height,0,me,we,G[te].data);for(let ce=0;ce<le.length;ce++){const Qe=le[ce].image[te].image;He?t.texSubImage2D(34069+te,ce+1,0,0,Qe.width,Qe.height,me,we,Qe.data):t.texImage2D(34069+te,ce+1,Pe,Qe.width,Qe.height,0,me,we,Qe.data)}}else{He?t.texSubImage2D(34069+te,0,0,0,me,we,G[te]):t.texImage2D(34069+te,0,Pe,me,we,G[te]);for(let ce=0;ce<le.length;ce++){const Le=le[ce];He?t.texSubImage2D(34069+te,ce+1,0,0,me,we,Le.image[te]):t.texImage2D(34069+te,ce+1,Pe,me,we,Le.image[te])}}}y(T,be)&&M(34067),ue.__version=oe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ge(L,T,Z,se,oe){const ue=r.convert(Z.format,Z.encoding),Ce=r.convert(Z.type),R=g(Z.internalFormat,ue,Ce,Z.encoding);n.get(T).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,R,T.width,T.height,T.depth,0,ue,Ce,null):t.texImage2D(oe,0,R,T.width,T.height,0,ue,Ce,null)),t.bindFramebuffer(36160,L),qe(T)?h.framebufferTexture2DMultisampleEXT(36160,se,oe,n.get(Z).__webglTexture,0,ft(T)):i.framebufferTexture2D(36160,se,oe,n.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Xe(L,T,Z){if(i.bindRenderbuffer(36161,L),T.depthBuffer&&!T.stencilBuffer){let se=33189;if(Z||qe(T)){const oe=T.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ii?se=36012:oe.type===ni&&(se=33190));const ue=ft(T);qe(T)?h.renderbufferStorageMultisampleEXT(36161,ue,se,T.width,T.height):i.renderbufferStorageMultisample(36161,ue,se,T.width,T.height)}else i.renderbufferStorage(36161,se,T.width,T.height);i.framebufferRenderbuffer(36160,36096,36161,L)}else if(T.depthBuffer&&T.stencilBuffer){const se=ft(T);Z&&qe(T)===!1?i.renderbufferStorageMultisample(36161,se,35056,T.width,T.height):qe(T)?h.renderbufferStorageMultisampleEXT(36161,se,35056,T.width,T.height):i.renderbufferStorage(36161,34041,T.width,T.height),i.framebufferRenderbuffer(36160,33306,36161,L)}else{const se=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let oe=0;oe<se.length;oe++){const ue=se[oe],Ce=r.convert(ue.format,ue.encoding),R=r.convert(ue.type),G=g(ue.internalFormat,Ce,R,ue.encoding),de=ft(T);Z&&qe(T)===!1?i.renderbufferStorageMultisample(36161,de,G,T.width,T.height):qe(T)?h.renderbufferStorageMultisampleEXT(36161,de,G,T.width,T.height):i.renderbufferStorage(36161,G,T.width,T.height)}}i.bindRenderbuffer(36161,null)}function Oe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const se=n.get(T.depthTexture).__webglTexture,oe=ft(T);if(T.depthTexture.format===ai)qe(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,oe):i.framebufferTexture2D(36160,36096,3553,se,0);else if(T.depthTexture.format===Bi)qe(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,oe):i.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function Ae(L){const T=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Oe(T.__webglFramebuffer,L)}else if(Z){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(36160,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]=i.createRenderbuffer(),Xe(T.__webglDepthbuffer[se],L,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),Xe(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function ot(L,T,Z){const se=n.get(L);T!==void 0&&ge(se.__webglFramebuffer,L,L.texture,36064,3553),Z!==void 0&&Ae(L)}function bt(L){const T=L.texture,Z=n.get(L),se=n.get(T);L.addEventListener("dispose",B),L.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=T.version,o.memory.textures++);const oe=L.isWebGLCubeRenderTarget===!0,ue=L.isWebGLMultipleRenderTargets===!0,Ce=b(L)||a;if(oe){Z.__webglFramebuffer=[];for(let R=0;R<6;R++)Z.__webglFramebuffer[R]=i.createFramebuffer()}else{if(Z.__webglFramebuffer=i.createFramebuffer(),ue)if(s.drawBuffers){const R=L.texture;for(let G=0,de=R.length;G<de;G++){const be=n.get(R[G]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&qe(L)===!1){const R=ue?T:[T];Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let G=0;G<R.length;G++){const de=R[G];Z.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[G]);const be=r.convert(de.format,de.encoding),me=r.convert(de.type),we=g(de.internalFormat,be,me,de.encoding,L.isXRRenderTarget===!0),Pe=ft(L);i.renderbufferStorageMultisample(36161,Pe,we,L.width,L.height),i.framebufferRenderbuffer(36160,36064+G,36161,Z.__webglColorRenderbuffer[G])}i.bindRenderbuffer(36161,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,se.__webglTexture),D(34067,T,Ce);for(let R=0;R<6;R++)ge(Z.__webglFramebuffer[R],L,T,36064,34069+R);y(T,Ce)&&M(34067),t.unbindTexture()}else if(ue){const R=L.texture;for(let G=0,de=R.length;G<de;G++){const be=R[G],me=n.get(be);t.bindTexture(3553,me.__webglTexture),D(3553,be,Ce),ge(Z.__webglFramebuffer,L,be,36064+G,3553),y(be,Ce)&&M(3553)}t.unbindTexture()}else{let R=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?R=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(R,se.__webglTexture),D(R,T,Ce),ge(Z.__webglFramebuffer,L,T,36064,R),y(T,Ce)&&M(R),t.unbindTexture()}L.depthBuffer&&Ae(L)}function ut(L){const T=b(L)||a,Z=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let se=0,oe=Z.length;se<oe;se++){const ue=Z[se];if(y(ue,T)){const Ce=L.isWebGLCubeRenderTarget?34067:3553,R=n.get(ue).__webglTexture;t.bindTexture(Ce,R),M(Ce),t.unbindTexture()}}}function zt(L){if(a&&L.samples>0&&qe(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Z=L.width,se=L.height;let oe=16384;const ue=[],Ce=L.stencilBuffer?33306:36096,R=n.get(L),G=L.isWebGLMultipleRenderTargets===!0;if(G)for(let de=0;de<T.length;de++)t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,R.__webglFramebuffer),i.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,R.__webglFramebuffer);for(let de=0;de<T.length;de++){ue.push(36064+de),L.depthBuffer&&ue.push(Ce);const be=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(be===!1&&(L.depthBuffer&&(oe|=256),L.stencilBuffer&&(oe|=1024)),G&&i.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[de]),be===!0&&(i.invalidateFramebuffer(36008,[Ce]),i.invalidateFramebuffer(36009,[Ce])),G){const me=n.get(T[de]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,me,0)}i.blitFramebuffer(0,0,Z,se,0,0,Z,se,oe,9728),p&&i.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),G)for(let de=0;de<T.length;de++){t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+de,36161,R.__webglColorRenderbuffer[de]);const be=n.get(T[de]).__webglTexture;t.bindFramebuffer(36160,R.__webglFramebuffer),i.framebufferTexture2D(36009,36064+de,3553,be,0)}t.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function ft(L){return Math.min(f,L.samples)}function qe(L){const T=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function jt(L){const T=o.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function Xt(L,T){const Z=L.encoding,se=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===ta||Z!==Hn&&(Z===et?a===!1?e.has("EXT_sRGB")===!0&&se===_n?(L.format=ta,L.minFilter=Kt,L.generateMipmaps=!1):T=El.sRGBToLinear(T):(se!==_n||oe!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),T}this.allocateTextureUnit=q,this.resetTextureUnits=ie,this.setTexture2D=H,this.setTexture2DArray=I,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=ot,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=qe}function Mp(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===ui)return 5121;if(r===_u)return 32819;if(r===vu)return 32820;if(r===mu)return 5120;if(r===pu)return 5122;if(r===Sl)return 5123;if(r===gu)return 5124;if(r===ni)return 5125;if(r===ii)return 5126;if(r===ss)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xu)return 6406;if(r===_n)return 6408;if(r===wu)return 6409;if(r===Mu)return 6410;if(r===ai)return 6402;if(r===Bi)return 34041;if(r===Su)return 6403;if(r===bu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ta)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===yu)return 36244;if(r===Tu)return 33319;if(r===Au)return 33320;if(r===Eu)return 36249;if(r===fr||r===hr||r===dr||r===mr)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===fr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===fr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fa||r===Na||r===Ua||r===ka)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Fa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Na)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ua)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ka)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ba||r===Va)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ba)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Va)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ga||r===Ha||r===Wa||r===ja||r===Xa||r===qa||r===Ya||r===Za||r===Ka||r===Ja||r===Qa||r===$a||r===eo||r===to)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ga)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ha)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wa)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ja)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xa)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qa)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ya)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Za)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ka)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ja)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qa)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$a)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eo)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===to)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===no)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===no)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ni?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Sp extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class es extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const x=new es;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class Tp extends nn{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:ai,u!==ai&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ai&&(n=ni),n===void 0&&u===Bi&&(n=Ni),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1}}class Ap extends hi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,p=null;const v=t.getContextAttributes();let m=null,d=null;const _=[],x=[],w=new Ct;w.layers.enable(1),w.viewport=new Ze;const b=new Ct;b.layers.enable(2),b.viewport=new Ze;const S=[w,b],y=new Sp;y.layers.enable(1),y.layers.enable(2);let M=null,g=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let H=_[k];return H===void 0&&(H=new Vr,_[k]=H),H.getTargetRaySpace()},this.getControllerGrip=function(k){let H=_[k];return H===void 0&&(H=new Vr,_[k]=H),H.getGripSpace()},this.getHand=function(k){let H=_[k];return H===void 0&&(H=new Vr,_[k]=H),H.getHandSpace()};function A(k){const H=x.indexOf(k.inputSource);if(H===-1)return;const I=_[H];I!==void 0&&I.dispatchEvent({type:k.type,data:k.inputSource})}function P(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",N);for(let k=0;k<_.length;k++){const H=x[k];H!==null&&(x[k]=null,_[k].disconnect(H))}M=null,g=null,e.setRenderTarget(m),h=null,f=null,u=null,s=null,d=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",P),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,H),s.updateRenderState({baseLayer:h}),d=new tn(h.framebufferWidth,h.framebufferHeight,{format:_n,type:ui,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let H=null,I=null,ne=null;v.depth&&(ne=v.stencil?35056:33190,H=v.stencil?Bi:ai,I=v.stencil?Ni:ni);const re={colorFormat:32856,depthFormat:ne,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(re),s.updateRenderState({layers:[f]}),d=new tn(f.textureWidth,f.textureHeight,{format:_n,type:ui,depthTexture:new Tp(f.textureWidth,f.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const he=e.properties.get(d);he.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),q.setContext(s),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(k){for(let H=0;H<k.removed.length;H++){const I=k.removed[H],ne=x.indexOf(I);ne>=0&&(x[ne]=null,_[ne].dispatchEvent({type:"disconnected",data:I}))}for(let H=0;H<k.added.length;H++){const I=k.added[H];let ne=x.indexOf(I);if(ne===-1){for(let he=0;he<_.length;he++)if(he>=x.length){x.push(I),ne=he;break}else if(x[he]===null){x[he]=I,ne=he;break}if(ne===-1)break}const re=_[ne];re&&re.dispatchEvent({type:"connected",data:I})}}const B=new O,z=new O;function U(k,H,I){B.setFromMatrixPosition(H.matrixWorld),z.setFromMatrixPosition(I.matrixWorld);const ne=B.distanceTo(z),re=H.projectionMatrix.elements,he=I.projectionMatrix.elements,Se=re[14]/(re[10]-1),D=re[14]/(re[10]+1),pe=(re[9]+1)/re[5],Te=(re[9]-1)/re[5],De=(re[8]-1)/re[0],ge=(he[8]+1)/he[0],Xe=Se*De,Oe=Se*ge,Ae=ne/(-De+ge),ot=Ae*-De;H.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ot),k.translateZ(Ae),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const bt=Se+Ae,ut=D+Ae,zt=Xe-ot,ft=Oe+(ne-ot),qe=pe*D/ut*bt,jt=Te*D/ut*bt;k.projectionMatrix.makePerspective(zt,ft,qe,jt,bt,ut)}function C(k,H){H===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(H.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;y.near=b.near=w.near=k.near,y.far=b.far=w.far=k.far,(M!==y.near||g!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,g=y.far);const H=k.parent,I=y.cameras;C(y,H);for(let re=0;re<I.length;re++)C(I[re],H);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),k.matrix.copy(y.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const ne=k.children;for(let re=0,he=ne.length;re<he;re++)ne[re].updateMatrixWorld(!0);I.length===2?U(y,w,b):y.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(k){f!==null&&(f.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)};let Y=null;function ie(k,H){if(c=H.getViewerPose(l||o),p=H,c!==null){const I=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ne=!1;I.length!==y.cameras.length&&(y.cameras.length=0,ne=!0);for(let re=0;re<I.length;re++){const he=I[re];let Se=null;if(h!==null)Se=h.getViewport(he);else{const pe=u.getViewSubImage(f,he);Se=pe.viewport,re===0&&(e.setRenderTargetTextures(d,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(d))}let D=S[re];D===void 0&&(D=new Ct,D.layers.enable(re),D.viewport=new Ze,S[re]=D),D.matrix.fromArray(he.transform.matrix),D.projectionMatrix.fromArray(he.projectionMatrix),D.viewport.set(Se.x,Se.y,Se.width,Se.height),re===0&&y.matrix.copy(D.matrix),ne===!0&&y.cameras.push(D)}}for(let I=0;I<_.length;I++){const ne=x[I],re=_[I];ne!==null&&re!==void 0&&re.update(ne,H,l||o)}Y&&Y(k,H),p=null}const q=new Il;q.setAnimationLoop(ie),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}}function Ep(i,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,x,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,w)):d.isMeshMatcapMaterial?(s(m,d),p(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let x;d.map?x=d.map:d.specularMap?x=d.specularMap:d.displacementMap?x=d.displacementMap:d.normalMap?x=d.normalMap:d.bumpMap?x=d.bumpMap:d.roughnessMap?x=d.roughnessMap:d.metalnessMap?x=d.metalnessMap:d.alphaMap?x=d.alphaMap:d.emissiveMap?x=d.emissiveMap:d.clearcoatMap?x=d.clearcoatMap:d.clearcoatNormalMap?x=d.clearcoatNormalMap:d.clearcoatRoughnessMap?x=d.clearcoatRoughnessMap:d.iridescenceMap?x=d.iridescenceMap:d.iridescenceThicknessMap?x=d.iridescenceThicknessMap:d.specularIntensityMap?x=d.specularIntensityMap:d.specularColorMap?x=d.specularColorMap:d.transmissionMap?x=d.transmissionMap:d.thicknessMap?x=d.thicknessMap:d.sheenColorMap?x=d.sheenColorMap:d.sheenRoughnessMap&&(x=d.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let w;d.aoMap?w=d.aoMap:d.lightMap&&(w=d.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let w;d.map?w=d.map:d.alphaMap&&(w=d.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===en&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Cp(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(x,w){const b=w.program;n.uniformBlockBinding(x,b)}function c(x,w){let b=s[x.id];b===void 0&&(v(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",d));const S=w.program;n.updateUBOMapping(x,S);const y=e.render.frame;r[x.id]!==y&&(h(x),r[x.id]=y)}function u(x){const w=f();x.__bindingPointIndex=w;const b=i.createBuffer(),S=x.__size,y=x.usage;return i.bindBuffer(35345,b),i.bufferData(35345,S,y),i.bindBuffer(35345,null),i.bindBufferBase(35345,w,b),b}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const w=s[x.id],b=x.uniforms,S=x.__cache;i.bindBuffer(35345,w);for(let y=0,M=b.length;y<M;y++){const g=b[y];if(p(g,y,S)===!0){const A=g.value,P=g.__offset;typeof A=="number"?(g.__data[0]=A,i.bufferSubData(35345,P,g.__data)):(g.value.isMatrix3?(g.__data[0]=g.value.elements[0],g.__data[1]=g.value.elements[1],g.__data[2]=g.value.elements[2],g.__data[3]=g.value.elements[0],g.__data[4]=g.value.elements[3],g.__data[5]=g.value.elements[4],g.__data[6]=g.value.elements[5],g.__data[7]=g.value.elements[0],g.__data[8]=g.value.elements[6],g.__data[9]=g.value.elements[7],g.__data[10]=g.value.elements[8],g.__data[11]=g.value.elements[0]):A.toArray(g.__data),i.bufferSubData(35345,P,g.__data))}}i.bindBuffer(35345,null)}function p(x,w,b){const S=x.value;if(b[w]===void 0)return typeof S=="number"?b[w]=S:b[w]=S.clone(),!0;if(typeof S=="number"){if(b[w]!==S)return b[w]=S,!0}else{const y=b[w];if(y.equals(S)===!1)return y.copy(S),!0}return!1}function v(x){const w=x.uniforms;let b=0;const S=16;let y=0;for(let M=0,g=w.length;M<g;M++){const A=w[M],P=m(A);if(A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,M>0){y=b%S;const N=S-y;y!==0&&N-P.boundary<0&&(b+=S-y,A.__offset=b)}b+=P.storage}return y=b%S,y>0&&(b+=S-y),x.__size=b,x.__cache={},this}function m(x){const w=x.value,b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function d(x){const w=x.target;w.removeEventListener("dispose",d);const b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function _(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function Lp(){const i=rs("canvas");return i.style.display="block",i}function Ul(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Lp(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hn,this.physicallyCorrectLights=!1,this.toneMapping=vn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,x=0,w=null,b=-1,S=null;const y=new Ze,M=new Ze;let g=null,A=e.width,P=e.height,N=1,B=null,z=null;const U=new Ze(0,0,A,P),C=new Ze(0,0,A,P);let Y=!1;const ie=new $s;let q=!1,k=!1,H=null;const I=new Je,ne=new Me,re=new O,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return w===null?N:1}let D=t;function pe(E,W){for(let K=0;K<E.length;K++){const V=E[K],J=e.getContext(V,W);if(J!==null)return J}return null}try{const E={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",He,!1),D===null){const W=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&W.shift(),D=pe(W,E),D===null)throw pe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Te,De,ge,Xe,Oe,Ae,ot,bt,ut,zt,ft,qe,jt,Xt,L,T,Z,se,oe,ue,Ce,R,G,de;function be(){Te=new Bd(D),De=new Od(D,Te,i),Te.init(De),R=new Mp(D,Te,De),ge=new bp(D,Te,De),Xe=new Hd,Oe=new ap,Ae=new wp(D,Te,ge,Oe,De,R,Xe),ot=new Fd(m),bt=new kd(m),ut=new $u(D,De),G=new Rd(D,Te,ut,De),zt=new Vd(D,ut,Xe,G),ft=new qd(D,zt,ut,Xe),oe=new Xd(D,De,Ae),T=new zd(Oe),qe=new rp(m,ot,bt,Te,De,G,T),jt=new Ep(m,Oe),Xt=new lp,L=new mp(Te,De),se=new Pd(m,ot,ge,ft,u,o),Z=new xp(m,ft,De),de=new Cp(D,Xe,De,ge),ue=new Id(D,Te,Xe,De),Ce=new Gd(D,Te,Xe,De),Xe.programs=qe.programs,m.capabilities=De,m.extensions=Te,m.properties=Oe,m.renderLists=Xt,m.shadowMap=Z,m.state=ge,m.info=Xe}be();const me=new Ap(m,D);this.xr=me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(A,P,!1))},this.getSize=function(E){return E.set(A,P)},this.setSize=function(E,W,K){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=E,P=W,e.width=Math.floor(E*N),e.height=Math.floor(W*N),K!==!1&&(e.style.width=E+"px",e.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(A*N,P*N).floor()},this.setDrawingBufferSize=function(E,W,K){A=E,P=W,N=K,e.width=Math.floor(E*K),e.height=Math.floor(W*K),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(U)},this.setViewport=function(E,W,K,V){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,W,K,V),ge.viewport(y.copy(U).multiplyScalar(N).floor())},this.getScissor=function(E){return E.copy(C)},this.setScissor=function(E,W,K,V){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,W,K,V),ge.scissor(M.copy(C).multiplyScalar(N).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){ge.setScissorTest(Y=E)},this.setOpaqueSort=function(E){B=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(E=!0,W=!0,K=!0){let V=0;E&&(V|=16384),W&&(V|=256),K&&(V|=1024),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",He,!1),Xt.dispose(),L.dispose(),Oe.dispose(),ot.dispose(),bt.dispose(),ft.dispose(),G.dispose(),de.dispose(),qe.dispose(),me.dispose(),me.removeEventListener("sessionstart",Le),me.removeEventListener("sessionend",Qe),H&&(H.dispose(),H=null),at.stop()};function we(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=Xe.autoReset,W=Z.enabled,K=Z.autoUpdate,V=Z.needsUpdate,J=Z.type;be(),Xe.autoReset=E,Z.enabled=W,Z.autoUpdate=K,Z.needsUpdate=V,Z.type=J}function He(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function F(E){const W=E.target;W.removeEventListener("dispose",F),fe(W)}function fe(E){le(E),Oe.remove(E)}function le(E){const W=Oe.get(E).programs;W!==void 0&&(W.forEach(function(K){qe.releaseProgram(K)}),E.isShaderMaterial&&qe.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,K,V,J,ye){W===null&&(W=he);const Re=J.isMesh&&J.matrixWorld.determinant()<0,Fe=nc(E,W,K,V,J);ge.setMaterial(V,Re);let Ie=K.index;const Ye=K.attributes.position;if(Ie===null){if(Ye===void 0||Ye.count===0)return}else if(Ie.count===0)return;let Ve=1;V.wireframe===!0&&(Ie=zt.getWireframeAttribute(K),Ve=2),G.setup(J,V,Fe,K,Ie);let Ge,nt=ue;Ie!==null&&(Ge=ut.get(Ie),nt=Ce,nt.setIndex(Ge));const qn=Ie!==null?Ie.count:Ye.count,mi=K.drawRange.start*Ve,pi=K.drawRange.count*Ve,hn=ye!==null?ye.start*Ve:0,We=ye!==null?ye.count*Ve:1/0,gi=Math.max(mi,hn),lt=Math.min(qn,mi+pi,hn+We)-1,Yt=Math.max(0,lt-gi+1);if(Yt!==0){if(J.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*Se()),nt.setMode(1)):nt.setMode(4);else if(J.isLine){let Pn=V.linewidth;Pn===void 0&&(Pn=1),ge.setLineWidth(Pn*Se()),J.isLineSegments?nt.setMode(1):J.isLineLoop?nt.setMode(2):nt.setMode(3)}else J.isPoints?nt.setMode(0):J.isSprite&&nt.setMode(4);if(J.isInstancedMesh)nt.renderInstances(gi,Yt,J.count);else if(K.isInstancedBufferGeometry){const Pn=Math.min(K.instanceCount,K._maxInstanceCount);nt.renderInstances(gi,Yt,Pn)}else nt.render(gi,Yt)}},this.compile=function(E,W){function K(V,J,ye){V.transparent===!0&&V.side===Jt?(V.side=en,V.needsUpdate=!0,ds(V,J,ye),V.side=ci,V.needsUpdate=!0,ds(V,J,ye),V.side=Jt):ds(V,J,ye)}h=L.get(E),h.init(),v.push(h),E.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights(m.physicallyCorrectLights),E.traverse(function(V){const J=V.material;if(J)if(Array.isArray(J))for(let ye=0;ye<J.length;ye++){const Re=J[ye];K(Re,E,V)}else K(J,E,V)}),v.pop(),h=null};let te=null;function ce(E){te&&te(E)}function Le(){at.stop()}function Qe(){at.start()}const at=new Il;at.setAnimationLoop(ce),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(E){te=E,me.setAnimationLoop(E),E===null?at.stop():at.start()},me.addEventListener("sessionstart",Le),me.addEventListener("sessionend",Qe),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(W),W=me.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,W,w),h=L.get(E,v.length),h.init(),v.push(h),I.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ie.setFromProjectionMatrix(I),k=this.localClippingEnabled,q=T.init(this.clippingPlanes,k,W),f=Xt.get(E,p.length),f.init(),p.push(f),Dn(E,W,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(B,z),q===!0&&T.beginShadows();const K=h.state.shadowsArray;if(Z.render(K,E,W),q===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(f,E),h.setupLights(m.physicallyCorrectLights),W.isArrayCamera){const V=W.cameras;for(let J=0,ye=V.length;J<ye;J++){const Re=V[J];tt(f,E,Re,Re.viewport)}}else tt(f,E,W);w!==null&&(Ae.updateMultisampleRenderTarget(w),Ae.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(m,E,W),G.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?h=v[v.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function Dn(E,W,K,V){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){V&&re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(I);const Re=ft.update(E),Fe=E.material;Fe.visible&&f.push(E,Re,Fe,K,re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Xe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Xe.render.frame),!E.frustumCulled||ie.intersectsObject(E))){V&&re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(I);const Re=ft.update(E),Fe=E.material;if(Array.isArray(Fe)){const Ie=Re.groups;for(let Ye=0,Ve=Ie.length;Ye<Ve;Ye++){const Ge=Ie[Ye],nt=Fe[Ge.materialIndex];nt&&nt.visible&&f.push(E,Re,nt,K,re.z,Ge)}}else Fe.visible&&f.push(E,Re,Fe,K,re.z,null)}}const ye=E.children;for(let Re=0,Fe=ye.length;Re<Fe;Re++)Dn(ye[Re],W,K,V)}function tt(E,W,K,V){const J=E.opaque,ye=E.transmissive,Re=E.transparent;h.setupLightsView(K),ye.length>0&&bn(J,W,K),V&&ge.viewport(y.copy(V)),J.length>0&&qt(J,W,K),ye.length>0&&qt(ye,W,K),Re.length>0&&qt(Re,W,K),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function bn(E,W,K){const V=De.isWebGL2;H===null&&(H=new tn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?ss:ui,minFilter:Js,samples:V&&r===!0?4:0})),m.getDrawingBufferSize(ne),V?H.setSize(ne.x,ne.y):H.setSize(na(ne.x),na(ne.y));const J=m.getRenderTarget();m.setRenderTarget(H),m.clear();const ye=m.toneMapping;m.toneMapping=vn,qt(E,W,K),m.toneMapping=ye,Ae.updateMultisampleRenderTarget(H),Ae.updateRenderTargetMipmap(H),m.setRenderTarget(J)}function qt(E,W,K){const V=W.isScene===!0?W.overrideMaterial:null;for(let J=0,ye=E.length;J<ye;J++){const Re=E[J],Fe=Re.object,Ie=Re.geometry,Ye=V===null?Re.material:V,Ve=Re.group;Fe.layers.test(K.layers)&&tc(Fe,W,K,Ie,Ye,Ve)}}function tc(E,W,K,V,J,ye){E.onBeforeRender(m,W,K,V,J,ye),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(m,W,K,V,E,ye),J.transparent===!0&&J.side===Jt?(J.side=en,J.needsUpdate=!0,m.renderBufferDirect(K,W,V,J,E,ye),J.side=ci,J.needsUpdate=!0,m.renderBufferDirect(K,W,V,J,E,ye),J.side=Jt):m.renderBufferDirect(K,W,V,J,E,ye),E.onAfterRender(m,W,K,V,J,ye)}function ds(E,W,K){W.isScene!==!0&&(W=he);const V=Oe.get(E),J=h.state.lights,ye=h.state.shadowsArray,Re=J.state.version,Fe=qe.getParameters(E,J.state,ye,W,K),Ie=qe.getProgramCacheKey(Fe);let Ye=V.programs;V.environment=E.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(E.isMeshStandardMaterial?bt:ot).get(E.envMap||V.environment),Ye===void 0&&(E.addEventListener("dispose",F),Ye=new Map,V.programs=Ye);let Ve=Ye.get(Ie);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===Re)return Aa(E,Fe),Ve}else Fe.uniforms=qe.getUniforms(E),E.onBuild(K,Fe,m),E.onBeforeCompile(Fe,m),Ve=qe.acquireProgram(Fe,Ie),Ye.set(Ie,Ve),V.uniforms=Fe.uniforms;const Ge=V.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=T.uniform),Aa(E,Fe),V.needsLights=sc(E),V.lightsStateVersion=Re,V.needsLights&&(Ge.ambientLightColor.value=J.state.ambient,Ge.lightProbe.value=J.state.probe,Ge.directionalLights.value=J.state.directional,Ge.directionalLightShadows.value=J.state.directionalShadow,Ge.spotLights.value=J.state.spot,Ge.spotLightShadows.value=J.state.spotShadow,Ge.rectAreaLights.value=J.state.rectArea,Ge.ltc_1.value=J.state.rectAreaLTC1,Ge.ltc_2.value=J.state.rectAreaLTC2,Ge.pointLights.value=J.state.point,Ge.pointLightShadows.value=J.state.pointShadow,Ge.hemisphereLights.value=J.state.hemi,Ge.directionalShadowMap.value=J.state.directionalShadowMap,Ge.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ge.spotShadowMap.value=J.state.spotShadowMap,Ge.spotLightMatrix.value=J.state.spotLightMatrix,Ge.spotLightMap.value=J.state.spotLightMap,Ge.pointShadowMap.value=J.state.pointShadowMap,Ge.pointShadowMatrix.value=J.state.pointShadowMatrix);const nt=Ve.getUniforms(),qn=Xs.seqWithValue(nt.seq,Ge);return V.currentProgram=Ve,V.uniformsList=qn,Ve}function Aa(E,W){const K=Oe.get(E);K.outputEncoding=W.outputEncoding,K.instancing=W.instancing,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function nc(E,W,K,V,J){W.isScene!==!0&&(W=he),Ae.resetTextureUnits();const ye=W.fog,Re=V.isMeshStandardMaterial?W.environment:null,Fe=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Hn,Ie=(V.isMeshStandardMaterial?bt:ot).get(V.envMap||Re),Ye=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!V.normalMap&&!!K.attributes.tangent,Ge=!!K.morphAttributes.position,nt=!!K.morphAttributes.normal,qn=!!K.morphAttributes.color,mi=V.toneMapped?m.toneMapping:vn,pi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,hn=pi!==void 0?pi.length:0,We=Oe.get(V),gi=h.state.lights;if(q===!0&&(k===!0||E!==S)){const Ft=E===S&&V.id===b;T.setState(V,E,Ft)}let lt=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==gi.state.version||We.outputEncoding!==Fe||J.isInstancedMesh&&We.instancing===!1||!J.isInstancedMesh&&We.instancing===!0||J.isSkinnedMesh&&We.skinning===!1||!J.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ie||V.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==T.numPlanes||We.numIntersection!==T.numIntersection)||We.vertexAlphas!==Ye||We.vertexTangents!==Ve||We.morphTargets!==Ge||We.morphNormals!==nt||We.morphColors!==qn||We.toneMapping!==mi||De.isWebGL2===!0&&We.morphTargetsCount!==hn)&&(lt=!0):(lt=!0,We.__version=V.version);let Yt=We.currentProgram;lt===!0&&(Yt=ds(V,W,J));let Pn=!1,Xi=!1,ar=!1;const Et=Yt.getUniforms(),Yn=We.uniforms;if(ge.useProgram(Yt.program)&&(Pn=!0,Xi=!0,ar=!0),V.id!==b&&(b=V.id,Xi=!0),Pn||S!==E){if(Et.setValue(D,"projectionMatrix",E.projectionMatrix),De.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,Xi=!0,ar=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Ft=Et.map.cameraPosition;Ft!==void 0&&Ft.setValue(D,re.setFromMatrixPosition(E.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Et.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||J.isSkinnedMesh)&&Et.setValue(D,"viewMatrix",E.matrixWorldInverse)}if(J.isSkinnedMesh){Et.setOptional(D,J,"bindMatrix"),Et.setOptional(D,J,"bindMatrixInverse");const Ft=J.skeleton;Ft&&(De.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),Et.setValue(D,"boneTexture",Ft.boneTexture,Ae),Et.setValue(D,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const or=K.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0&&De.isWebGL2===!0)&&oe.update(J,K,V,Yt),(Xi||We.receiveShadow!==J.receiveShadow)&&(We.receiveShadow=J.receiveShadow,Et.setValue(D,"receiveShadow",J.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Yn.envMap.value=Ie,Yn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Xi&&(Et.setValue(D,"toneMappingExposure",m.toneMappingExposure),We.needsLights&&ic(Yn,ar),ye&&V.fog===!0&&jt.refreshFogUniforms(Yn,ye),jt.refreshMaterialUniforms(Yn,V,N,P,H),Xs.upload(D,We.uniformsList,Yn,Ae)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xs.upload(D,We.uniformsList,Yn,Ae),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Et.setValue(D,"center",J.center),Et.setValue(D,"modelViewMatrix",J.modelViewMatrix),Et.setValue(D,"normalMatrix",J.normalMatrix),Et.setValue(D,"modelMatrix",J.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ft=V.uniformsGroups;for(let lr=0,rc=Ft.length;lr<rc;lr++)if(De.isWebGL2){const Ea=Ft[lr];de.update(Ea,Yt),de.bind(Ea,Yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yt}function ic(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function sc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,W,K){Oe.get(E.texture).__webglTexture=W,Oe.get(E.depthTexture).__webglTexture=K;const V=Oe.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=K===void 0,V.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,W){const K=Oe.get(E);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,K=0){w=E,_=W,x=K;let V=!0;if(E){const Ie=Oe.get(E);Ie.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),V=!1):Ie.__webglFramebuffer===void 0?Ae.setupRenderTarget(E):Ie.__hasExternalTextures&&Ae.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture)}let J=null,ye=!1,Re=!1;if(E){const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture)&&(Re=!0);const Ye=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(J=Ye[W],ye=!0):De.isWebGL2&&E.samples>0&&Ae.useMultisampledRTT(E)===!1?J=Oe.get(E).__webglMultisampledFramebuffer:J=Ye,y.copy(E.viewport),M.copy(E.scissor),g=E.scissorTest}else y.copy(U).multiplyScalar(N).floor(),M.copy(C).multiplyScalar(N).floor(),g=Y;if(ge.bindFramebuffer(36160,J)&&De.drawBuffers&&V&&ge.drawBuffers(E,J),ge.viewport(y),ge.scissor(M),ge.setScissorTest(g),ye){const Ie=Oe.get(E.texture);D.framebufferTexture2D(36160,36064,34069+W,Ie.__webglTexture,K)}else if(Re){const Ie=Oe.get(E.texture),Ye=W||0;D.framebufferTextureLayer(36160,36064,Ie.__webglTexture,K||0,Ye)}b=-1},this.readRenderTargetPixels=function(E,W,K,V,J,ye,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){ge.bindFramebuffer(36160,Fe);try{const Ie=E.texture,Ye=Ie.format,Ve=Ie.type;if(Ye!==_n&&R.convert(Ye)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===ss&&(Te.has("EXT_color_buffer_half_float")||De.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ve!==ui&&R.convert(Ve)!==D.getParameter(35738)&&!(Ve===ii&&(De.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-V&&K>=0&&K<=E.height-J&&D.readPixels(W,K,V,J,R.convert(Ye),R.convert(Ve),ye)}finally{const Ie=w!==null?Oe.get(w).__webglFramebuffer:null;ge.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(E,W,K=0){const V=Math.pow(2,-K),J=Math.floor(W.image.width*V),ye=Math.floor(W.image.height*V);Ae.setTexture2D(W,0),D.copyTexSubImage2D(3553,K,0,0,E.x,E.y,J,ye),ge.unbindTexture()},this.copyTextureToTexture=function(E,W,K,V=0){const J=W.image.width,ye=W.image.height,Re=R.convert(K.format),Fe=R.convert(K.type);Ae.setTexture2D(K,0),D.pixelStorei(37440,K.flipY),D.pixelStorei(37441,K.premultiplyAlpha),D.pixelStorei(3317,K.unpackAlignment),W.isDataTexture?D.texSubImage2D(3553,V,E.x,E.y,J,ye,Re,Fe,W.image.data):W.isCompressedTexture?D.compressedTexSubImage2D(3553,V,E.x,E.y,W.mipmaps[0].width,W.mipmaps[0].height,Re,W.mipmaps[0].data):D.texSubImage2D(3553,V,E.x,E.y,Re,Fe,W.image),V===0&&K.generateMipmaps&&D.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(E,W,K,V,J=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=E.max.x-E.min.x+1,Re=E.max.y-E.min.y+1,Fe=E.max.z-E.min.z+1,Ie=R.convert(V.format),Ye=R.convert(V.type);let Ve;if(V.isData3DTexture)Ae.setTexture3D(V,0),Ve=32879;else if(V.isDataArrayTexture)Ae.setTexture2DArray(V,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,V.flipY),D.pixelStorei(37441,V.premultiplyAlpha),D.pixelStorei(3317,V.unpackAlignment);const Ge=D.getParameter(3314),nt=D.getParameter(32878),qn=D.getParameter(3316),mi=D.getParameter(3315),pi=D.getParameter(32877),hn=K.isCompressedTexture?K.mipmaps[0]:K.image;D.pixelStorei(3314,hn.width),D.pixelStorei(32878,hn.height),D.pixelStorei(3316,E.min.x),D.pixelStorei(3315,E.min.y),D.pixelStorei(32877,E.min.z),K.isDataTexture||K.isData3DTexture?D.texSubImage3D(Ve,J,W.x,W.y,W.z,ye,Re,Fe,Ie,Ye,hn.data):K.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ve,J,W.x,W.y,W.z,ye,Re,Fe,Ie,hn.data)):D.texSubImage3D(Ve,J,W.x,W.y,W.z,ye,Re,Fe,Ie,Ye,hn),D.pixelStorei(3314,Ge),D.pixelStorei(32878,nt),D.pixelStorei(3316,qn),D.pixelStorei(3315,mi),D.pixelStorei(32877,pi),J===0&&V.generateMipmaps&&D.generateMipmap(Ve),ge.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ae.setTextureCube(E,0):E.isData3DTexture?Ae.setTexture3D(E,0):E.isDataArrayTexture?Ae.setTexture2DArray(E,0):Ae.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){_=0,x=0,w=null,ge.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Dp extends Ul{}Dp.prototype.isWebGL1Renderer=!0;class Pp extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class tr extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vo=new O,Go=new O,Ho=new Je,Gr=new ua,Us=new Qs;class Rp extends mt{constructor(e=new Ot,t=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vo.fromBufferAttribute(t,s-1),Go.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vo.distanceTo(Go);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Us.radius+=r,e.ray.intersectsSphere(Us)===!1)return;Ho.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(Ho);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,f=new O,h=new O,p=this.isLineSegments?2:1,v=n.index,d=n.attributes.position;if(v!==null){const _=Math.max(0,o.start),x=Math.min(v.count,o.start+o.count);for(let w=_,b=x-1;w<b;w+=p){const S=v.getX(w),y=v.getX(w+1);if(c.fromBufferAttribute(d,S),u.fromBufferAttribute(d,y),Gr.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const g=e.ray.origin.distanceTo(h);g<e.near||g>e.far||t.push({distance:g,point:f.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let w=_,b=x-1;w<b;w+=p){if(c.fromBufferAttribute(d,w),u.fromBufferAttribute(d,w+1),Gr.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(h);y<e.near||y>e.far||t.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class di extends Ot{constructor(e=1,t=8,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new O,u=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const p=n+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}static fromJSON(e){return new di(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const ks=new O,Bs=new O,Hr=new O,Vs=new gn;class nr extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ws*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},p=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:m,b:d,c:_}=Vs;if(m.fromBufferAttribute(a,c[0]),d.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Vs.getNormal(Hr),f[0]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[1]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,f[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const w=(x+1)%3,b=f[x],S=f[w],y=Vs[u[x]],M=Vs[u[w]],g=`${b}_${S}`,A=`${S}_${b}`;A in h&&h[A]?(Hr.dot(h[A].normal)<=r&&(p.push(y.x,y.y,y.z),p.push(M.x,M.y,M.z)),h[A]=null):g in h||(h[g]={index0:c[x],index1:c[w],normal:Hr.clone()})}}for(const v in h)if(h[v]){const{index0:m,index1:d}=h[v];ks.fromBufferAttribute(a,m),Bs.fromBufferAttribute(a,d),p.push(ks.x,ks.y,ks.z),p.push(Bs.x,Bs.y,Bs.z)}this.setAttribute("position",new pt(p,3))}}}class it extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new O,h=new O,p=[],v=[],m=[],d=[];for(let _=0;_<=n;_++){const x=[],w=_/n;let b=0;_==0&&o==0?b=.5/t:_==n&&l==Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){const y=S/t;f.x=-e*Math.cos(s+y*r)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(s+y*r)*Math.sin(o+w*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),d.push(y+b,1-w),x.push(c++)}u.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){const w=u[_][x+1],b=u[_][x],S=u[_+1][x],y=u[_+1][x+1];(_!==0||o>0)&&p.push(w,b,y),(_!==n-1||l<Math.PI)&&p.push(b,S,y)}this.setIndex(p),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(m,3)),this.setAttribute("uv",new pt(d,2))}static fromJSON(e){return new it(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $e extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Wo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ip{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Op=new Ip;class kl{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class zp extends kl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=rs("img");function l(){u(),Wo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class st extends kl{constructor(e){super(e)}load(e,t,n,s){const r=new nn,o=new zp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Bl extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wr=new Je,jo=new O,Xo=new O;class Fp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jo.setFromMatrixPosition(e.matrixWorld),t.position.copy(jo),Xo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xo),t.updateMatrixWorld(),Wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qo=new Je,Ki=new O,jr=new O;class Np extends Fp{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ki.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ki),jr.copy(n.position),jr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jr),n.updateMatrixWorld(),s.makeTranslation(-Ki.x,-Ki.y,-Ki.z),qo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo)}}class Up extends Bl{constructor(e,t,n=0,s=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kp extends Bl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Yo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Yo(){return(typeof performance>"u"?Date:performance).now()}class Bp{constructor(e,t,n=0,s=1/0){this.ray=new ua(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new fa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return sa(e,this,n,t),n.sort(Zo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)sa(e[s],this,n,t);return n.sort(Zo),n}}function Zo(i,e){return i.distance-e.distance}function sa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)sa(s[r],e,t,!0)}}class Ko{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);const Ii=[];function Gl(i,e){return{subscribe:Rt(i,e).subscribe}}function Rt(i,e=je){let t;const n=new Set;function s(a){if(Ue(i,a)&&(i=a,t)){const l=!Ii.length;for(const c of n)c[1](),Ii.push(c,i);if(l){for(let c=0;c<Ii.length;c+=2)Ii[c][0](Ii[c+1]);Ii.length=0}}}function r(a){s(a(i))}function o(a,l=je){const c=[a,l];return n.add(c),n.size===1&&(t=e(s)||je),a(i),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}function Vp(i,e,t){const n=!Array.isArray(i),s=n?[i]:i,r=e.length<2;return Gl(t,o=>{let a=!1;const l=[];let c=0,u=je;const f=()=>{if(c)return;u();const p=e(n?l[0]:l,o);r?o(p):u=ri(p)?p:je},h=s.map((p,v)=>ra(p,m=>{l[v]=m,c&=~(1<<v),a&&f()},()=>{c|=1<<v}));return a=!0,f(),function(){Wn(h),u()}})}const Ys={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class fs{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Gp=new ma(-1,1,1,-1,0,1),ga=new Ot;ga.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3));ga.setAttribute("uv",new pt([0,2,0,0,2,0],2));class Hl{constructor(e){this._mesh=new un(ga,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Jo extends fs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gi.clone(e.uniforms),this.material=new It({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Qo extends fs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Hp extends fs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Wp{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Me);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Ys===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Jo===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Jo(Ys),this.clock=new Vl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qo!==void 0&&(o instanceof Qo?n=!0:o instanceof Hp&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new ma(-1,1,1,-1,0,1);const Wl=new Ot;Wl.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3));Wl.setAttribute("uv",new pt([0,2,0,0,2,0],2));class jl extends fs{constructor(e,t,n,s,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=s}}const jp=(i,e,t)=>{i.renderer=new Ul({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),i.composer=new Wp(i.renderer),i.composer.addPass(new jl(i.scene,Bn(i.camera)))},$o=(i,e,t)=>{!i.renderer||(e?i.renderer.outputEncoding=Hn:i.renderer.outputEncoding=et,t?i.renderer.toneMapping=vn:i.renderer.toneMapping=ca)},el=(i,e,t)=>{!i.renderer||!i.composer||(i.renderer.setSize(e.width,e.height),i.renderer.setPixelRatio(t),i.composer.setSize(e.width,e.height),i.composer.setPixelRatio(t))},tl=(i,e,t)=>{!i.renderer||(i.renderer.shadowMap.enabled=e,i.renderer.shadowMap.type=t)},$t=i=>i.userData,Xp=(i,e)=>{i.pointer.update(t=>i.renderer?t.set(e.offsetX/i.renderer.domElement.clientWidth*2-1,-(e.offsetY/i.renderer.domElement.clientHeight)*2+1):t)},Xl=(i,e,t,n)=>(i.raycaster.setFromCamera(e,t),i.raycaster.intersectObjects(n,!1)),qp=(i,e)=>i.object.uuid!==e.object.uuid||i.instanceId!==e.instanceId,Yp=(i,e,t)=>{let n=Bn(i.camera);const s=i.camera.subscribe(c=>n=c);dt(s);let r=Bn(i.pointer);const o=i.pointer.subscribe(c=>r=c);dt(o);let a;const l=c=>{var h,p;c.preventDefault();const u=c.type;i.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Xp(i,c);const f=Zp(e,r,n);if(u==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!Kp(f,a)){a=null;return}a=null}!f||(p=(h=$t(f.object)).eventDispatcher)==null||p.call(h,u,{...f,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Zp(i,e,t){if(i.interactiveObjects.size===0||i.raycastableObjects.size===0)return null;const n=Xl(i,e,t,Array.from(i.raycastableObjects));return n.length===0||!i.interactiveObjects.has(n[0].object)?null:n[0]}function Kp(i,e){return!i||!e?!1:i.object.uuid===e.object.uuid&&i.instanceId===e.instanceId}const Jp=(i,e)=>{let t=Bn(i.pointerOverCanvas);const n=i.pointerOverCanvas.subscribe(c=>t=c);dt(n);let s=Bn(i.camera);const r=i.camera.subscribe(c=>s=c);dt(r);let o=Bn(i.pointer);const a=i.pointer.subscribe(c=>o=c);return dt(a),{raycast:()=>{var f,h,p,v,m,d,_,x;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Xl(e,o,s,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&qp(e.lastIntersection,u)&&((d=(m=$t(e.lastIntersection.object)).eventDispatcher)==null||d.call(m,"pointerleave",e.lastIntersection),(x=(_=$t(u.object)).eventDispatcher)==null||x.call(_,"pointerenter",u)):(v=(p=$t(u.object)).eventDispatcher)==null||v.call(p,"pointerenter",u):e.lastIntersection&&((h=(f=$t(e.lastIntersection.object)).eventDispatcher)==null||h.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},ir=typeof window<"u",Qp=i=>{if(!ir)return;let e;const t=()=>{i(),e=requestAnimationFrame(t)};t(),dt(()=>{!e||cancelAnimationFrame(e)})},$p=(i,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let s=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++s}),s>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((s,r)=>r.order?!0:s,!1),n=i.clock.getDelta();t?Array.from(e.frameHandlers).sort((s,r)=>{var o,a;return((o=s.order)!=null?o:0)>((a=r.order)!=null?a:0)?1:-1}).forEach(s=>s.fn(i,n)):e.frameHandlers.forEach(s=>s.fn(i,n))},eg=i=>{!i.debugFrameloop||(i.frame+=1,console.log(`frame: ${i.frame}${Object.keys(i.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(i.invalidations).length>0&&console.table(i.invalidations),i.invalidations={})},tg=(i,e,t,n)=>{let s=Bn(i.camera);const r=i.camera.subscribe(a=>s=a);dt(r);const{raycast:o}=Jp(i,e);Qp(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!s||!i.composer||!i.renderer||($p(i,t),i.composer.passes.length>1?i.composer.render():i.renderer.render(i.scene,s),eg(t),t.frameInvalidated=!1,t.advance=!1))})},ng=()=>{const i=new Ct(75,0,.1,1e3);return $t(i).threlteDefaultCamera=!0,i.position.z=5,i.lookAt(0,0,0),i},ig=i=>{const e=i.size.subscribe(t=>{$t(Bn(i.camera)).threlteDefaultCamera&&i.camera.update(n=>{const s=n;return s.aspect=t.width/t.height,s.updateProjectionMatrix(),i.invalidate("Default camera: aspect ratio changed"),s})});dt(e)},sg=(i,e,t,n,s,r,o)=>{const a={audioListeners:new Map,addAudioListener:(_,x)=>{if(x=x!=null?x:"default",a.audioListeners.has(x)){console.warn(`An AudioListener with the id "${x}" has already been added, aborting.`);return}a.audioListeners.set(x,_)},removeAudioListener:_=>{if(_=_!=null?_:"default",!a.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}a.audioListeners.delete(_)},getAudioListener:_=>{if(_=_!=null?_:"default",!a.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}return a.audioListeners.get(_)}},l={debugFrameloop:r,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Vp([n,s],([_,x])=>_||x),pointer:Rt(new Me),pointerOverCanvas:Rt(!1),clock:new Vl,camera:Rt(ng()),scene:new Pp,renderer:void 0,composer:void 0,invalidate:_=>{l.frameInvalidated=!0,l.debugFrameloop&&_&&(l.invalidations[_]=l.invalidations[_]?l.invalidations[_]+1:1)},advance:()=>{l.advance=!0}},u={flat:Rt(e),linear:Rt(i),dpr:Rt(t),setCamera:_=>{c.camera.set(_),c.composer&&(c.composer.passes.forEach(x=>{x instanceof jl&&(x.camera=_)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Bp,lastIntersection:null,addRaycastableObject:_=>{u.raycastableObjects.add(_)},removeRaycastableObject:_=>{u.raycastableObjects.delete(_)},addInteractiveObject:_=>{u.interactiveObjects.add(_)},removeInteractiveObject:_=>{u.interactiveObjects.delete(_)},addPass:_=>{!c.composer||(c.composer.addPass(_),c.invalidate("Canvas: adding pass"))},removePass:_=>{!c.composer||(c.composer.removePass(_),c.invalidate("Canvas: removing pass"))}},f={dispose:async(_=!1)=>{await is(),!(!f.shouldDispose&&!_)&&(f.disposableObjects.forEach((x,w)=>{var b;(x===0||_)&&((b=w==null?void 0:w.dispose)==null||b.call(w),f.disposableObjects.delete(w))}),f.shouldDispose=!1)},collectDisposableObjects:(_,x)=>{const w=x!=null?x:[];return _&&((_==null?void 0:_.dispose)&&typeof _.dispose=="function"&&_.type!=="Scene"&&w.push(_),Object.entries(_).forEach(([b,S])=>{if(b==="parent"||b==="children"||typeof S!="object")return;const y=S;y!=null&&y.dispose&&f.collectDisposableObjects(y,w)})),w},addDisposableObjects:_=>{_.forEach(x=>{const w=f.disposableObjects.get(x);w?f.disposableObjects.set(x,w+1):f.disposableObjects.set(x,1)})},removeDisposableObjects:_=>{_.length!==0&&(_.forEach(x=>{const w=f.disposableObjects.get(x);w&&w>0&&f.disposableObjects.set(x,w-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return pn("threlte",c),pn("threlte-root",u),pn("threlte-render-context",l),pn("threlte-audio-context",a),pn("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function sr(i,e){const t=Rt(i);let n=i;const s=t.subscribe(a=>n=a);return dt(s),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Wt=()=>En("threlte");function rg(i){let e;const t=i[8].default,n=wt(t,i,i[7],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,[r]){n&&n.p&&(!e||r&128)&&St(n,t,s,s[7],e?Mt(t,s[7],r,null):yt(s[7]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}const ag=()=>({onChildMount:En("threlte-hierarchical-object-on-mount"),onChildDestroy:En("threlte-hierarchical-object-on-destroy")}),ql=()=>En("threlte-hierarchical-parent-context");function og(i,e,t){var _;let n,{$$slots:s={},$$scope:r}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=x=>{a.push(x),t(1,a),l==null||l(x)};let{onChildDestroy:u=void 0}=e;const f=x=>{const w=a.findIndex(b=>b.uuid===x.uuid);w!==-1&&a.splice(w,1),t(1,a),u==null||u(x)},{invalidate:h}=Wt(),p=ql();xt(i,p,x=>t(6,n=x));let{parent:v=n}=e;const m=ag();o&&((_=m.onChildMount)==null||_.call(m,o),h("HierarchicalObject: object added"));const d=sr(o,(x,w)=>{var b,S;w&&((b=m.onChildDestroy)==null||b.call(m,w),h("HierarchicalObject: object added")),x&&((S=m.onChildMount)==null||S.call(m,x),h("HierarchicalObject: object removed"))});return dt(()=>{var x;o&&((x=m.onChildDestroy)==null||x.call(m,o),h("HierarchicalObject: object removed"))}),pn("threlte-hierarchical-object-on-mount",c),pn("threlte-hierarchical-object-on-destroy",f),pn("threlte-hierarchical-parent-context",d),i.$$set=x=>{"object"in x&&t(3,o=x.object),"children"in x&&t(1,a=x.children),"onChildMount"in x&&t(4,l=x.onChildMount),"onChildDestroy"in x&&t(5,u=x.onChildDestroy),"parent"in x&&t(2,v=x.parent),"$$scope"in x&&t(7,r=x.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&t(2,v=n),i.$$.dirty&8&&d.set(o)},[p,a,v,o,l,u,n,r,s]}class lg extends Be{constructor(e){super(),ke(this,e,og,rg,Ue,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function cg(i){let e;const t=i[1].default,n=wt(t,i,i[4],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&16)&&St(n,t,s,s[4],e?Mt(t,s[4],r,null):yt(s[4]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function ug(i){let e,t;return e=new lg({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[cg]},$$scope:{ctx:i}}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p(n,[s]){const r={};s&1&&(r.object=n[0]),s&1&&(r.onChildMount=n[2]),s&1&&(r.onChildDestroy=n[3]),s&16&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function fg(i,e,t){let{$$slots:n={},$$scope:s}=e,{object:r}=e;const o=l=>r.add(l),a=l=>r.remove(l);return i.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,s=l.$$scope)},[r,n,o,a,s]}class Yl extends Be{constructor(e){super(),ke(this,e,fg,ug,Ue,{object:0})}}const hg=()=>{const i=Rt({width:0,height:0});let e={width:0,height:0};const t=i.subscribe(o=>e=o);dt(t);let n;const s=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&i.set({width:a,height:l})},r=o=>{n=o,s(),window.addEventListener("resize",s)};return ir?(dt(()=>{window.removeEventListener("resize",s)}),{parentSizeAction:r,parentSize:i}):{parentSize:i,parentSizeAction:r}};function nl(i){let e,t;return e=new Yl({props:{object:i[0].scene,$$slots:{default:[dg]},$$scope:{ctx:i}}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p(n,s){const r={};s[1]&4&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function dg(i){let e;const t=i[29].default,n=wt(t,i,i[33],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r[1]&4)&&St(n,t,s,s[33],e?Mt(t,s[33],r,null):yt(s[33]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function mg(i){let e,t,n,s,r=i[2]&&nl(i);return{c(){e=Bt("canvas"),r&&r.c(),Vt(e,"class","svelte-o3oskp")},m(o,a){ve(o,e,a),r&&r.m(e,null),i[30](e),t=!0,n||(s=[cc(i[3].call(null,e)),dn(e,"click",i[9]),dn(e,"contextmenu",i[10]),dn(e,"pointerup",i[13]),dn(e,"pointerdown",i[11]),dn(e,"pointermove",i[12]),dn(e,"pointerenter",i[31]),dn(e,"pointerleave",i[32])],n=!0)},p(o,a){o[2]?r?(r.p(o,a),a[0]&4&&j(r,1)):(r=nl(o),r.c(),j(r,1),r.m(e,null)):r&&(aa(),X(r,1,1,()=>{r=null}),oa())},i(o){t||(j(r),t=!0)},o(o){X(r),t=!1},d(o){o&&_e(e),r&&r.d(),i[30](null),n=!1,Wn(s)}}}const il=new Set;function pg(i,e,t){let n,s,r,o,{$$slots:a={},$$scope:l}=e,{dpr:c=ir?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:h="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:v=!0}=e,{shadowMapType:m=vl}=e,{size:d=void 0}=e,{rendererParameters:_=void 0}=e,x,w=!1;const b=Rt(d),{parentSize:S,parentSizeAction:y}=hg(),M=sg(f,u,c,b,S,p,h),{getCtx:g,renderCtx:A,disposalCtx:P}=M,{ctx:N,rootCtx:B,audioCtx:z}=M;ig(N),il.add(N.invalidate),dt(()=>{il.delete(N.invalidate)});const{size:U,scene:C}=N;xt(i,U,pe=>t(26,s=pe));const{flat:Y,linear:ie,dpr:q}=B;xt(i,Y,pe=>t(27,r=pe)),xt(i,ie,pe=>t(28,o=pe)),xt(i,q,pe=>t(25,n=pe)),pn("threlte-parent",Rt(C)),dc(()=>{!x||(jp(N,x,_),$o(N,o,r),el(N,s,n),tl(N,v,m),t(2,w=!0))}),tg(N,B,A,P);const{onClick:k,onContextMenu:H,onPointerDown:I,onPointerMove:ne,onPointerUp:re}=Yp(N,B,A);dt(()=>{P.dispose(!0)});function he(pe){Ke[pe?"unshift":"push"](()=>{x=pe,t(1,x)})}const Se=()=>g().pointerOverCanvas.set(!0),D=()=>g().pointerOverCanvas.set(!1);return i.$$set=pe=>{"dpr"in pe&&t(14,c=pe.dpr),"flat"in pe&&t(15,u=pe.flat),"linear"in pe&&t(16,f=pe.linear),"frameloop"in pe&&t(17,h=pe.frameloop),"debugFrameloop"in pe&&t(18,p=pe.debugFrameloop),"shadows"in pe&&t(19,v=pe.shadows),"shadowMapType"in pe&&t(20,m=pe.shadowMapType),"size"in pe&&t(21,d=pe.size),"rendererParameters"in pe&&t(22,_=pe.rendererParameters),"$$scope"in pe&&t(33,l=pe.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&2097152&&b.set(d),i.$$.dirty[0]&65536&&cr(ie,o=f,o),i.$$.dirty[0]&32768&&cr(Y,r=u,r),i.$$.dirty[0]&16384&&cr(q,n=c,n),i.$$.dirty[0]&402653184&&$o(g(),o,r),i.$$.dirty[0]&100663296&&el(g(),s,n),i.$$.dirty[0]&1572864&&tl(g(),v,m)},[N,x,w,y,g,U,Y,ie,q,k,H,I,ne,re,c,u,f,h,p,v,m,d,_,B,z,n,s,r,o,a,he,Se,D,l]}class gg extends Be{constructor(e){super(),ke(this,e,pg,mg,Ue,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const rr=()=>En("threlte-root"),_g=()=>En("threlte-disposal-context");function vg(i){let e;const t=i[9].default,n=wt(t,i,i[8],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,[r]){n&&n.p&&(!e||r&256)&&St(n,t,s,s[8],e?Mt(t,s[8],r,null):yt(s[8]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}const sl="threlte-disposable-object-context";function xg(i,e,t){var d;let n,s,{$$slots:r={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=_g();let{object:u=void 0}=e,f=u,{dispose:h=void 0}=e;const p=En(sl);xt(i,p,_=>t(7,s=_));const v=Rt((d=h!=null?h:s)!=null?d:!0);xt(i,v,_=>t(6,n=_)),pn(sl,v);let m=n?a(u):[];return l(m),dt(()=>{c(m)}),i.$$set=_=>{"object"in _&&t(2,u=_.object),"dispose"in _&&t(3,h=_.dispose),"$$scope"in _&&t(8,o=_.$$scope)},i.$$.update=()=>{var _;i.$$.dirty&136&&v.set((_=h!=null?h:s)!=null?_:!0),i.$$.dirty&116&&u!==f&&(c(m),t(5,m=n?a(u):[]),l(m),t(4,f=u))},[p,v,u,h,f,m,n,s,o,r]}class li extends Be{constructor(e){super(),ke(this,e,xg,vg,Ue,{object:2,dispose:3})}}function bg(i,e,t){let n,s,{object:r}=e;const o=sr(r);xt(i,o,c=>t(4,s=c));const a=En("threlte-layers");xt(i,a,c=>t(3,n=c));const{invalidate:l}=Wt();return i.$$set=c=>{"object"in c&&t(2,r=c.object)},i.$$.update=()=>{if(i.$$.dirty&4&&o.set(r),i.$$.dirty&24){if(n==="all")s.layers.enableAll();else if(n==="none")s.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?s.layers.enable(c):s.layers.disable(c)}else n!==void 0&&s.layers.set(n);l("LayerableObject")}},[o,a,r,n,s]}class wg extends Be{constructor(e){super(),ke(this,e,bg,null,Ue,{object:2})}}const fn=(i,e)=>{var a;if(!ir)return{start:()=>{},stop:()=>{},started:Gl(!1)};const t=En("threlte-render-context"),n={fn:i,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},s=Rt(!1),r=()=>{t.frameHandlers.delete(n),s.set(!1)},o=()=>{t.frameHandlers.add(n),s.set(!0)};return((a=e==null?void 0:e.autostart)==null||a)&&o(),dt(()=>{r()}),{start:o,stop:r,started:{subscribe:s.subscribe}}},Zl=()=>{const i=Rt(!1);return(async()=>{await is(),i.set(!0)})(),i};function Mg(i,e,t){let n,s,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new O,f=Zs(),{invalidate:h}=Wt(),p=Zl();xt(i,p,w=>t(8,s=w));const v=async()=>{s||await is(),f("transform")},m=async()=>{h("TransformableObject: transformed"),await v()};$t(r).onTransform=m;const{start:d,stop:_}=fn(async()=>{c&&!l&&c instanceof mt&&(c.getWorldPosition(u),r.lookAt(u),await v())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),x=sr(r);return xt(i,x,w=>t(7,n=w)),i.$$set=w=>{"object"in w&&t(2,r=w.object),"position"in w&&t(3,o=w.position),"scale"in w&&t(4,a=w.scale),"rotation"in w&&t(5,l=w.rotation),"lookAt"in w&&t(6,c=w.lookAt)},i.$$.update=()=>{var w,b,S,y,M,g,A,P,N,B,z,U,C;i.$$.dirty&4&&x.set(r),i.$$.dirty&232&&(o&&(n.position.set((w=o.x)!=null?w:0,(b=o.y)!=null?b:0,(S=o.z)!=null?S:0),m()),c&&!l&&(c instanceof mt?d():(_(),n.lookAt((y=c.x)!=null?y:0,(M=c.y)!=null?M:0,(g=c.z)!=null?g:0),m())),c||_()),i.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set((A=a.x)!=null?A:1,(P=a.y)!=null?P:1,(N=a.z)!=null?N:1),m()),i.$$.dirty&160&&l&&(n.rotation.set((B=l.x)!=null?B:0,(z=l.y)!=null?z:0,(U=l.z)!=null?U:0,(C=l.order)!=null?C:"XYZ"),m())},[p,x,r,o,a,l,c,n]}class Kl extends Be{constructor(e){super(),ke(this,e,Mg,null,Ue,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function Sg(i,e,t){let n,s,r,{object:o}=e,{viewportAware:a=!1}=e;const l=Zs(),{camera:c,invalidate:u}=Wt();xt(i,c,y=>t(8,r=y));const f=new $s,h=new Je,p=y=>y.type==="Mesh",v=new O,m=()=>r?(h.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),f.setFromProjectionMatrix(h),p(o)?f.intersectsObject(o):(o.getWorldPosition(v),f.containsPoint(v))):!0,d=Zl();xt(i,d,y=>t(7,s=y));let{inViewport:_=m()}=e;const x=async y=>{y?(s||await is(),l("viewportenter",o)):(s||await is(),l("viewportleave",o))},{start:w,stop:b,started:S}=fn(()=>{const y=m();_===void 0?(t(3,_=m()),x(_)):y!==_&&(x(y),t(3,_=y))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return xt(i,S,y=>t(6,n=y)),u("ViewportAwareObject"),i.$$set=y=>{"object"in y&&t(4,o=y.object),"viewportAware"in y&&t(5,a=y.viewportAware),"inViewport"in y&&t(3,_=y.inViewport)},i.$$.update=()=>{i.$$.dirty&96&&(a&&!n?w():!a&&n&&b())},[c,d,S,_,o,a,n]}class yg extends Be{constructor(e){super(),ke(this,e,Sg,null,Ue,{object:4,viewportAware:5,inViewport:3})}}function Tg(i){let e;const t=i[14].default,n=wt(t,i,i[18],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&262144)&&St(n,t,s,s[18],e?Mt(t,s[18],r,null):yt(s[18]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function Ag(i){let e,t;return e=new Yl({props:{object:i[1],$$slots:{default:[Tg]},$$scope:{ctx:i}}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p(n,s){const r={};s&2&&(r.object=n[1]),s&262144&&(r.$$scope={dirty:s,ctx:n}),e.$set(r)},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function Eg(i){let e,t,n,s,r,o,a,l,c;e=new wg({props:{object:i[1]}}),n=new Kl({props:{object:i[1],position:i[2],rotation:i[4],scale:i[3],lookAt:i[5]}}),r=new li({props:{object:i[1],dispose:i[7],$$slots:{default:[Ag]},$$scope:{ctx:i}}});function u(h){i[15](h)}let f={object:i[1],viewportAware:i[6]};return i[0]!==void 0&&(f.inViewport=i[0]),a=new yg({props:f}),Ke.push(()=>Ht(a,"inViewport",u)),a.$on("viewportenter",i[16]),a.$on("viewportleave",i[17]),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment),s=xe(),ee(r.$$.fragment),o=xe(),ee(a.$$.fragment)},m(h,p){Q(e,h,p),ve(h,t,p),Q(n,h,p),ve(h,s,p),Q(r,h,p),ve(h,o,p),Q(a,h,p),c=!0},p(h,[p]){const v={};p&2&&(v.object=h[1]),e.$set(v);const m={};p&2&&(m.object=h[1]),p&4&&(m.position=h[2]),p&16&&(m.rotation=h[4]),p&8&&(m.scale=h[3]),p&32&&(m.lookAt=h[5]),n.$set(m);const d={};p&2&&(d.object=h[1]),p&128&&(d.dispose=h[7]),p&262146&&(d.$$scope={dirty:p,ctx:h}),r.$set(d);const _={};p&2&&(_.object=h[1]),p&64&&(_.viewportAware=h[6]),!l&&p&1&&(l=!0,_.inViewport=h[0],Gt(()=>l=!1)),a.$set(_)},i(h){c||(j(e.$$.fragment,h),j(n.$$.fragment,h),j(r.$$.fragment,h),j(a.$$.fragment,h),c=!0)},o(h){X(e.$$.fragment,h),X(n.$$.fragment,h),X(r.$$.fragment,h),X(a.$$.fragment,h),c=!1},d(h){$(e,h),h&&_e(t),$(n,h),h&&_e(s),$(r,h),h&&_e(o),$(a,h)}}}function Cg(i,e,t){let{$$slots:n={},$$scope:s}=e,{object:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:m=void 0}=e,{visible:d=void 0}=e,{dispose:_=void 0}=e,{userData:x=void 0}=e;const{invalidate:w}=Wt(),b=()=>r;function S(g){f=g,t(0,f)}function y(g){Ee.call(this,i,g)}function M(g){Ee.call(this,i,g)}return i.$$set=g=>{"object"in g&&t(1,r=g.object),"position"in g&&t(2,o=g.position),"scale"in g&&t(3,a=g.scale),"rotation"in g&&t(4,l=g.rotation),"lookAt"in g&&t(5,c=g.lookAt),"viewportAware"in g&&t(6,u=g.viewportAware),"inViewport"in g&&t(0,f=g.inViewport),"castShadow"in g&&t(8,h=g.castShadow),"receiveShadow"in g&&t(9,p=g.receiveShadow),"frustumCulled"in g&&t(10,v=g.frustumCulled),"renderOrder"in g&&t(11,m=g.renderOrder),"visible"in g&&t(12,d=g.visible),"dispose"in g&&t(7,_=g.dispose),"userData"in g&&t(13,x=g.userData),"$$scope"in g&&t(18,s=g.$$scope)},i.$$.update=()=>{i.$$.dirty&16128&&(d!==void 0&&(b().visible=d),h!==void 0&&(b().castShadow=h),p!==void 0&&(b().receiveShadow=p),v!==void 0&&(b().frustumCulled=v),m!==void 0&&(b().renderOrder=m),x!==void 0&&(b().userData={...b().userData,...x}),w("Object3DInstance: props changed"))},[f,r,o,a,l,c,u,_,h,p,v,m,d,x,n,S,y,M,s]}class hs extends Be{constructor(e){super(),ke(this,e,Cg,Eg,Ue,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function Lg(i){let e;const t=i[17].default,n=wt(t,i,i[21],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&2097152)&&St(n,t,s,s[21],e?Mt(t,s[21],r,null):yt(s[21]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function Dg(i){let e,t,n;function s(o){i[18](o)}let r={object:i[1],lookAt:i[5],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],position:i[2],scale:i[3],rotation:i[4],viewportAware:i[6],visible:i[11],userData:i[12],dispose:i[13],$$slots:{default:[Lg]},$$scope:{ctx:i}};return i[0]!==void 0&&(r.inViewport=i[0]),e=new hs({props:r}),Ke.push(()=>Ht(e,"inViewport",s)),e.$on("viewportenter",i[19]),e.$on("viewportleave",i[20]),{c(){ee(e.$$.fragment)},m(o,a){Q(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Gt(()=>t=!1)),e.$set(l)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){X(e.$$.fragment,o),n=!1},d(o){$(e,o)}}}function Pg(i,e,t){let n,{$$slots:s={},$$scope:r}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:h=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:m=void 0}=e,{renderOrder:d=void 0}=e,{visible:_=void 0}=e,{userData:x=void 0}=e,{dispose:w=void 0}=e,{useCamera:b=!1}=e;const S=sr(o);xt(i,S,P=>t(16,n=P));const{setCamera:y}=rr();function M(P){h=P,t(0,h)}function g(P){Ee.call(this,i,P)}function A(P){Ee.call(this,i,P)}return i.$$set=P=>{"camera"in P&&t(1,o=P.camera),"position"in P&&t(2,a=P.position),"scale"in P&&t(3,l=P.scale),"rotation"in P&&t(4,c=P.rotation),"lookAt"in P&&t(5,u=P.lookAt),"viewportAware"in P&&t(6,f=P.viewportAware),"inViewport"in P&&t(0,h=P.inViewport),"castShadow"in P&&t(7,p=P.castShadow),"receiveShadow"in P&&t(8,v=P.receiveShadow),"frustumCulled"in P&&t(9,m=P.frustumCulled),"renderOrder"in P&&t(10,d=P.renderOrder),"visible"in P&&t(11,_=P.visible),"userData"in P&&t(12,x=P.userData),"dispose"in P&&t(13,w=P.dispose),"useCamera"in P&&t(15,b=P.useCamera),"$$scope"in P&&t(21,r=P.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&S.set(o),i.$$.dirty&98304&&b&&y(n)},[h,o,a,l,c,u,f,p,v,m,d,_,x,w,S,b,n,s,M,g,A,r]}class Rg extends Be{constructor(e){super(),ke(this,e,Pg,Dg,Ue,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function Ig(i){let e;const t=i[20].default,n=wt(t,i,i[24],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&16777216)&&St(n,t,s,s[24],e?Mt(t,s[24],r,null):yt(s[24]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function Og(i){let e,t,n;function s(o){i[21](o)}let r={camera:i[0],position:i[2],scale:i[3],rotation:i[4],castShadow:i[6],receiveShadow:i[7],frustumCulled:i[8],renderOrder:i[9],visible:i[10],userData:i[11],dispose:i[12],viewportAware:i[13],lookAt:i[5],useCamera:i[14],$$slots:{default:[Ig]},$$scope:{ctx:i}};return i[1]!==void 0&&(r.inViewport=i[1]),e=new Rg({props:r}),Ke.push(()=>Ht(e,"inViewport",s)),e.$on("viewportenter",i[22]),e.$on("viewportleave",i[23]),{c(){ee(e.$$.fragment)},m(o,a){Q(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&8192&&(l.viewportAware=o[13]),a&32&&(l.lookAt=o[5]),a&16384&&(l.useCamera=o[14]),a&16777216&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Gt(()=>t=!1)),e.$set(l)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){X(e.$$.fragment,o),n=!1},d(o){$(e,o)}}}function zg(i,e,t){let n,{$$slots:s={},$$scope:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:v=void 0}=e,{userData:m=void 0}=e,{dispose:d=void 0}=e,{viewportAware:_=!1}=e,{inViewport:x=!1}=e,{useCamera:w=!0}=e,{near:b=void 0}=e,{far:S=void 0}=e,{fov:y=void 0}=e;const{size:M,invalidate:g}=Wt();xt(i,M,z=>t(19,n=z));const A=new Ct(y,n.width/n.height,b,S);function P(z){x=z,t(1,x)}function N(z){Ee.call(this,i,z)}function B(z){Ee.call(this,i,z)}return i.$$set=z=>{"position"in z&&t(2,o=z.position),"scale"in z&&t(3,a=z.scale),"rotation"in z&&t(4,l=z.rotation),"lookAt"in z&&t(5,c=z.lookAt),"castShadow"in z&&t(6,u=z.castShadow),"receiveShadow"in z&&t(7,f=z.receiveShadow),"frustumCulled"in z&&t(8,h=z.frustumCulled),"renderOrder"in z&&t(9,p=z.renderOrder),"visible"in z&&t(10,v=z.visible),"userData"in z&&t(11,m=z.userData),"dispose"in z&&t(12,d=z.dispose),"viewportAware"in z&&t(13,_=z.viewportAware),"inViewport"in z&&t(1,x=z.inViewport),"useCamera"in z&&t(14,w=z.useCamera),"near"in z&&t(16,b=z.near),"far"in z&&t(17,S=z.far),"fov"in z&&t(18,y=z.fov),"$$scope"in z&&t(24,r=z.$$scope)},i.$$.update=()=>{i.$$.dirty&524289&&(t(0,A.aspect=n.width/n.height,A),A.updateProjectionMatrix(),g("PerspectiveCamera: aspect changed")),i.$$.dirty&458753&&(b!==void 0&&t(0,A.near=b,A),S!==void 0&&t(0,A.far=S,A),y!==void 0&&t(0,A.fov=y,A),A.updateProjectionMatrix(),g("PerspectiveCamera: props changed"))},[A,x,o,a,l,c,u,f,h,p,v,m,d,_,w,M,b,S,y,n,s,P,N,B,r]}class Fg extends Be{constructor(e){super(),ke(this,e,zg,Og,Ue,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const rl=[],Ng=(i,e)=>{const t=rl.find(s=>s instanceof i);if(t)return t;const n=e();return rl.push(n),n},al={type:"change"},Xr={type:"start"},ol={type:"end"};class Ug extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Xt),this._domElementKeyEvents=R},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(al),n.update(),r=s.NONE},this.update=function(){const R=new O,G=new fi().setFromUnitVectors(e.up,new O(0,1,0)),de=G.clone().invert(),be=new O,me=new fi,we=2*Math.PI;return function(){const He=n.object.position;R.copy(He).sub(n.target),R.applyQuaternion(G),a.setFromVector3(R),n.autoRotate&&r===s.NONE&&A(M()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let F=n.minAzimuthAngle,fe=n.maxAzimuthAngle;return isFinite(F)&&isFinite(fe)&&(F<-Math.PI?F+=we:F>Math.PI&&(F-=we),fe<-Math.PI?fe+=we:fe>Math.PI&&(fe-=we),F<=fe?a.theta=Math.max(F,Math.min(fe,a.theta)):a.theta=a.theta>(F+fe)/2?Math.max(F,a.theta):Math.min(fe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(a),R.applyQuaternion(de),He.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||be.distanceToSquared(n.object.position)>o||8*(1-me.dot(n.object.quaternion))>o?(n.dispatchEvent(al),be.copy(n.object.position),me.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Z),n.domElement.removeEventListener("pointerdown",ot),n.domElement.removeEventListener("pointercancel",zt),n.domElement.removeEventListener("wheel",jt),n.domElement.removeEventListener("pointermove",bt),n.domElement.removeEventListener("pointerup",ut),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Xt)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Ko,l=new Ko;let c=1;const u=new O;let f=!1;const h=new Me,p=new Me,v=new Me,m=new Me,d=new Me,_=new Me,x=new Me,w=new Me,b=new Me,S=[],y={};function M(){return 2*Math.PI/60/60*n.autoRotateSpeed}function g(){return Math.pow(.95,n.zoomSpeed)}function A(R){l.theta-=R}function P(R){l.phi-=R}const N=function(){const R=new O;return function(de,be){R.setFromMatrixColumn(be,0),R.multiplyScalar(-de),u.add(R)}}(),B=function(){const R=new O;return function(de,be){n.screenSpacePanning===!0?R.setFromMatrixColumn(be,1):(R.setFromMatrixColumn(be,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(de),u.add(R)}}(),z=function(){const R=new O;return function(de,be){const me=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;R.copy(we).sub(n.target);let Pe=R.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),N(2*de*Pe/me.clientHeight,n.object.matrix),B(2*be*Pe/me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(de*(n.object.right-n.object.left)/n.object.zoom/me.clientWidth,n.object.matrix),B(be*(n.object.top-n.object.bottom)/n.object.zoom/me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(R){h.set(R.clientX,R.clientY)}function ie(R){x.set(R.clientX,R.clientY)}function q(R){m.set(R.clientX,R.clientY)}function k(R){p.set(R.clientX,R.clientY),v.subVectors(p,h).multiplyScalar(n.rotateSpeed);const G=n.domElement;A(2*Math.PI*v.x/G.clientHeight),P(2*Math.PI*v.y/G.clientHeight),h.copy(p),n.update()}function H(R){w.set(R.clientX,R.clientY),b.subVectors(w,x),b.y>0?U(g()):b.y<0&&C(g()),x.copy(w),n.update()}function I(R){d.set(R.clientX,R.clientY),_.subVectors(d,m).multiplyScalar(n.panSpeed),z(_.x,_.y),m.copy(d),n.update()}function ne(R){R.deltaY<0?C(g()):R.deltaY>0&&U(g()),n.update()}function re(R){let G=!1;switch(R.code){case n.keys.UP:z(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),G=!0;break}G&&(R.preventDefault(),n.update())}function he(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),G=.5*(S[0].pageY+S[1].pageY);h.set(R,G)}}function Se(){if(S.length===1)m.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),G=.5*(S[0].pageY+S[1].pageY);m.set(R,G)}}function D(){const R=S[0].pageX-S[1].pageX,G=S[0].pageY-S[1].pageY,de=Math.sqrt(R*R+G*G);x.set(0,de)}function pe(){n.enableZoom&&D(),n.enablePan&&Se()}function Te(){n.enableZoom&&D(),n.enableRotate&&he()}function De(R){if(S.length==1)p.set(R.pageX,R.pageY);else{const de=Ce(R),be=.5*(R.pageX+de.x),me=.5*(R.pageY+de.y);p.set(be,me)}v.subVectors(p,h).multiplyScalar(n.rotateSpeed);const G=n.domElement;A(2*Math.PI*v.x/G.clientHeight),P(2*Math.PI*v.y/G.clientHeight),h.copy(p)}function ge(R){if(S.length===1)d.set(R.pageX,R.pageY);else{const G=Ce(R),de=.5*(R.pageX+G.x),be=.5*(R.pageY+G.y);d.set(de,be)}_.subVectors(d,m).multiplyScalar(n.panSpeed),z(_.x,_.y),m.copy(d)}function Xe(R){const G=Ce(R),de=R.pageX-G.x,be=R.pageY-G.y,me=Math.sqrt(de*de+be*be);w.set(0,me),b.set(0,Math.pow(w.y/x.y,n.zoomSpeed)),U(b.y),x.copy(w)}function Oe(R){n.enableZoom&&Xe(R),n.enablePan&&ge(R)}function Ae(R){n.enableZoom&&Xe(R),n.enableRotate&&De(R)}function ot(R){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",bt),n.domElement.addEventListener("pointerup",ut)),se(R),R.pointerType==="touch"?L(R):ft(R))}function bt(R){n.enabled!==!1&&(R.pointerType==="touch"?T(R):qe(R))}function ut(R){oe(R),S.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",bt),n.domElement.removeEventListener("pointerup",ut)),n.dispatchEvent(ol),r=s.NONE}function zt(R){oe(R)}function ft(R){let G;switch(R.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case _i.DOLLY:if(n.enableZoom===!1)return;ie(R),r=s.DOLLY;break;case _i.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;q(R),r=s.PAN}else{if(n.enableRotate===!1)return;Y(R),r=s.ROTATE}break;case _i.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;Y(R),r=s.ROTATE}else{if(n.enablePan===!1)return;q(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Xr)}function qe(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;k(R);break;case s.DOLLY:if(n.enableZoom===!1)return;H(R);break;case s.PAN:if(n.enablePan===!1)return;I(R);break}}function jt(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(Xr),ne(R),n.dispatchEvent(ol))}function Xt(R){n.enabled===!1||n.enablePan===!1||re(R)}function L(R){switch(ue(R),S.length){case 1:switch(n.touches.ONE){case vi.ROTATE:if(n.enableRotate===!1)return;he(),r=s.TOUCH_ROTATE;break;case vi.PAN:if(n.enablePan===!1)return;Se(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pe(),r=s.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Xr)}function T(R){switch(ue(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;De(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ge(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Oe(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(R),n.update();break;default:r=s.NONE}}function Z(R){n.enabled!==!1&&R.preventDefault()}function se(R){S.push(R)}function oe(R){delete y[R.pointerId];for(let G=0;G<S.length;G++)if(S[G].pointerId==R.pointerId){S.splice(G,1);return}}function ue(R){let G=y[R.pointerId];G===void 0&&(G=new Me,y[R.pointerId]=G),G.set(R.pageX,R.pageY)}function Ce(R){const G=R.pointerId===S[0].pointerId?S[1]:S[0];return y[G.pointerId]}n.domElement.addEventListener("contextmenu",Z),n.domElement.addEventListener("pointerdown",ot),n.domElement.addEventListener("pointercancel",zt),n.domElement.addEventListener("wheel",jt,{passive:!1}),this.update()}}function kg(i){let e,t,n,s;return e=new li({props:{dispose:i[2],object:i[0]}}),n=new Kl({props:{object:i[4],position:i[1]}}),n.$on("transform",i[5]),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment)},m(r,o){Q(e,r,o),ve(r,t,o),Q(n,r,o),s=!0},p(r,o){const a={};o[0]&4&&(a.dispose=r[2]),o[0]&1&&(a.object=r[0]),e.$set(a);const l={};o[0]&2&&(l.position=r[1]),n.$set(l)},i(r){s||(j(e.$$.fragment,r),j(n.$$.fragment,r),s=!0)},o(r){X(e.$$.fragment,r),X(n.$$.fragment,r),s=!1},d(r){$(e,r),r&&_e(t),$(n,r)}}}function Bg(i,e,t){let n,{autoRotate:s=void 0}=e,{autoRotateSpeed:r=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:h=void 0}=e,{keys:p=void 0}=e,{maxAzimuthAngle:v=void 0}=e,{maxDistance:m=void 0}=e,{maxPolarAngle:d=void 0}=e,{maxZoom:_=void 0}=e,{minAzimuthAngle:x=void 0}=e,{minDistance:w=void 0}=e,{minPolarAngle:b=void 0}=e,{minZoom:S=void 0}=e,{mouseButtons:y=void 0}=e,{panSpeed:M=void 0}=e,{rotateSpeed:g=void 0}=e,{screenSpacePanning:A=void 0}=e,{touches:P=void 0}=e,{zoomSpeed:N=void 0}=e,{target:B=void 0}=e,{dispose:z=void 0}=e;const U=ql();xt(i,U,D=>t(30,n=D));const{renderer:C,invalidate:Y}=Wt();if(!C)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof da))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const ie=Zs(),q=()=>{Y("Orbitcontrols: change event"),ie("change")},k=()=>ie("start"),H=()=>ie("end"),I=new Ug(n,C.domElement);$t(n).orbitControls=I,I.addEventListener("change",q),I.addEventListener("start",k),I.addEventListener("end",H),dt(()=>{n&&delete $t(n).orbitControls,I.removeEventListener("change",q),I.removeEventListener("start",k),I.removeEventListener("end",H)});const{start:ne,stop:re}=fn(()=>I.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),he=new mt,Se=()=>{t(0,I.target=he.position,I),I.update(),Y("OrbitControls: target changed")};return i.$$set=D=>{"autoRotate"in D&&t(6,s=D.autoRotate),"autoRotateSpeed"in D&&t(7,r=D.autoRotateSpeed),"dampingFactor"in D&&t(8,o=D.dampingFactor),"enableDamping"in D&&t(9,a=D.enableDamping),"enabled"in D&&t(10,l=D.enabled),"enablePan"in D&&t(11,c=D.enablePan),"enableRotate"in D&&t(12,u=D.enableRotate),"enableZoom"in D&&t(13,f=D.enableZoom),"keyPanSpeed"in D&&t(14,h=D.keyPanSpeed),"keys"in D&&t(15,p=D.keys),"maxAzimuthAngle"in D&&t(16,v=D.maxAzimuthAngle),"maxDistance"in D&&t(17,m=D.maxDistance),"maxPolarAngle"in D&&t(18,d=D.maxPolarAngle),"maxZoom"in D&&t(19,_=D.maxZoom),"minAzimuthAngle"in D&&t(20,x=D.minAzimuthAngle),"minDistance"in D&&t(21,w=D.minDistance),"minPolarAngle"in D&&t(22,b=D.minPolarAngle),"minZoom"in D&&t(23,S=D.minZoom),"mouseButtons"in D&&t(24,y=D.mouseButtons),"panSpeed"in D&&t(25,M=D.panSpeed),"rotateSpeed"in D&&t(26,g=D.rotateSpeed),"screenSpacePanning"in D&&t(27,A=D.screenSpacePanning),"touches"in D&&t(28,P=D.touches),"zoomSpeed"in D&&t(29,N=D.zoomSpeed),"target"in D&&t(1,B=D.target),"dispose"in D&&t(2,z=D.dispose)},i.$$.update=()=>{i.$$.dirty[0]&1073741761&&(s!==void 0&&t(0,I.autoRotate=s,I),r!==void 0&&t(0,I.autoRotateSpeed=r,I),o!==void 0&&t(0,I.dampingFactor=o,I),a!==void 0&&t(0,I.enableDamping=a,I),l!==void 0&&t(0,I.enabled=l,I),c!==void 0&&t(0,I.enablePan=c,I),u!==void 0&&t(0,I.enableRotate=u,I),f!==void 0&&t(0,I.enableZoom=f,I),h!==void 0&&t(0,I.keyPanSpeed=h,I),p!==void 0&&t(0,I.keys=p,I),v!==void 0&&t(0,I.maxAzimuthAngle=v,I),m!==void 0&&t(0,I.maxDistance=m,I),d!==void 0&&t(0,I.maxPolarAngle=d,I),_!==void 0&&t(0,I.maxZoom=_,I),x!==void 0&&t(0,I.minAzimuthAngle=x,I),w!==void 0&&t(0,I.minDistance=w,I),b!==void 0&&t(0,I.minPolarAngle=b,I),S!==void 0&&t(0,I.minZoom=S,I),y!==void 0&&t(0,I.mouseButtons=y,I),M!==void 0&&t(0,I.panSpeed=M,I),g!==void 0&&t(0,I.rotateSpeed=g,I),A!==void 0&&t(0,I.screenSpacePanning=A,I),P!==void 0&&t(0,I.touches=P,I),N!==void 0&&t(0,I.zoomSpeed=N,I),I.update(),Y("OrbitControls: props changed")),i.$$.dirty[0]&576&&(s||a?ne():re())},[I,B,z,U,he,Se,s,r,o,a,l,c,u,f,h,p,v,m,d,_,x,w,b,S,y,M,g,A,P,N]}class Vg extends Be{constructor(e){super(),ke(this,e,Bg,kg,Ue,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}function Gg(i,e,t){let{pass:n}=e;const{addPass:s,removePass:r}=rr();return s(n),fn(()=>{},{debugFrameloopMessage:"Pass component"}),dt(()=>{r(n)}),i.$$set=o=>{"pass"in o&&t(0,n=o.pass)},[n]}class Hg extends Be{constructor(e){super(),ke(this,e,Gg,null,Ue,{pass:0})}}const Wg=(i,e)=>e?new ze(i):new ze().setHex(new ze(i).getHex()).convertSRGBToLinear();function jg(i){let e;const t=i[18].default,n=wt(t,i,i[22],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&4194304)&&St(n,t,s,s[22],e?Mt(t,s[22],r,null):yt(s[22]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function Xg(i){let e,t,n;function s(o){i[19](o)}let r={object:i[0],lookAt:i[5],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],position:i[2],scale:i[3],rotation:i[4],viewportAware:i[6],visible:i[11],userData:i[12],dispose:i[13],$$slots:{default:[jg]},$$scope:{ctx:i}};return i[1]!==void 0&&(r.inViewport=i[1]),e=new hs({props:r}),Ke.push(()=>Ht(e,"inViewport",s)),e.$on("viewportenter",i[20]),e.$on("viewportleave",i[21]),{c(){ee(e.$$.fragment)},m(o,a){Q(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.object=o[0]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&4194304&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Gt(()=>t=!1)),e.$set(l)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){X(e.$$.fragment,o),n=!1},d(o){$(e,o)}}}function qg(i,e,t){let n,{$$slots:s={},$$scope:r}=e,{light:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:h=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:m=void 0}=e,{renderOrder:d=void 0}=e,{visible:_=void 0}=e,{userData:x=void 0}=e,{dispose:w=void 0}=e,{color:b=void 0}=e,{intensity:S=void 0}=e;const{invalidate:y}=Wt(),{linear:M}=rr();xt(i,M,N=>t(17,n=N));function g(N){h=N,t(1,h)}function A(N){Ee.call(this,i,N)}function P(N){Ee.call(this,i,N)}return i.$$set=N=>{"light"in N&&t(0,o=N.light),"position"in N&&t(2,a=N.position),"scale"in N&&t(3,l=N.scale),"rotation"in N&&t(4,c=N.rotation),"lookAt"in N&&t(5,u=N.lookAt),"viewportAware"in N&&t(6,f=N.viewportAware),"inViewport"in N&&t(1,h=N.inViewport),"castShadow"in N&&t(7,p=N.castShadow),"receiveShadow"in N&&t(8,v=N.receiveShadow),"frustumCulled"in N&&t(9,m=N.frustumCulled),"renderOrder"in N&&t(10,d=N.renderOrder),"visible"in N&&t(11,_=N.visible),"userData"in N&&t(12,x=N.userData),"dispose"in N&&t(13,w=N.dispose),"color"in N&&t(15,b=N.color),"intensity"in N&&t(16,S=N.intensity),"$$scope"in N&&t(22,r=N.$$scope)},i.$$.update=()=>{i.$$.dirty&229376&&(S!==void 0&&t(0,o.intensity=S,o),b!==void 0&&t(0,o.color=Wg(b,n),o),y("LightInstance: props changed"))},[o,h,a,l,c,u,f,p,v,m,d,_,x,w,M,b,S,n,s,g,A,P,r]}class Jl extends Be{constructor(e){super(),ke(this,e,qg,Xg,Ue,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function Yg(i){let e;const t=i[16].default,n=wt(t,i,i[20],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&1048576)&&St(n,t,s,s[20],e?Mt(t,s[20],r,null):yt(s[20]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function Zg(i){let e,t,n;function s(o){i[17](o)}let r={light:i[15],lookAt:i[4],position:i[1],scale:i[2],rotation:i[3],castShadow:i[5],receiveShadow:i[6],frustumCulled:i[7],renderOrder:i[8],visible:i[9],userData:i[10],dispose:i[11],viewportAware:i[12],color:i[13],intensity:i[14],$$slots:{default:[Yg]},$$scope:{ctx:i}};return i[0]!==void 0&&(r.inViewport=i[0]),e=new Jl({props:r}),Ke.push(()=>Ht(e,"inViewport",s)),e.$on("viewportenter",i[18]),e.$on("viewportleave",i[19]),{c(){ee(e.$$.fragment)},m(o,a){Q(e,o,a),n=!0},p(o,[a]){const l={};a&16&&(l.lookAt=o[4]),a&2&&(l.position=o[1]),a&4&&(l.scale=o[2]),a&8&&(l.rotation=o[3]),a&32&&(l.castShadow=o[5]),a&64&&(l.receiveShadow=o[6]),a&128&&(l.frustumCulled=o[7]),a&256&&(l.renderOrder=o[8]),a&512&&(l.visible=o[9]),a&1024&&(l.userData=o[10]),a&2048&&(l.dispose=o[11]),a&4096&&(l.viewportAware=o[12]),a&8192&&(l.color=o[13]),a&16384&&(l.intensity=o[14]),a&1048576&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Gt(()=>t=!1)),e.$set(l)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){X(e.$$.fragment,o),n=!1},d(o){$(e,o)}}}function Kg(i,e,t){let{$$slots:n={},$$scope:s}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{castShadow:c=void 0}=e,{receiveShadow:u=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:h=void 0}=e,{visible:p=void 0}=e,{userData:v=void 0}=e,{dispose:m=void 0}=e,{viewportAware:d=!1}=e,{inViewport:_=!1}=e,{color:x=void 0}=e,{intensity:w=void 0}=e;const b=new kp(x,w);function S(g){_=g,t(0,_)}function y(g){Ee.call(this,i,g)}function M(g){Ee.call(this,i,g)}return i.$$set=g=>{"position"in g&&t(1,r=g.position),"scale"in g&&t(2,o=g.scale),"rotation"in g&&t(3,a=g.rotation),"lookAt"in g&&t(4,l=g.lookAt),"castShadow"in g&&t(5,c=g.castShadow),"receiveShadow"in g&&t(6,u=g.receiveShadow),"frustumCulled"in g&&t(7,f=g.frustumCulled),"renderOrder"in g&&t(8,h=g.renderOrder),"visible"in g&&t(9,p=g.visible),"userData"in g&&t(10,v=g.userData),"dispose"in g&&t(11,m=g.dispose),"viewportAware"in g&&t(12,d=g.viewportAware),"inViewport"in g&&t(0,_=g.inViewport),"color"in g&&t(13,x=g.color),"intensity"in g&&t(14,w=g.intensity),"$$scope"in g&&t(20,s=g.$$scope)},[_,r,o,a,l,c,u,f,h,p,v,m,d,x,w,b,n,S,y,M,s]}class Jg extends Be{constructor(e){super(),ke(this,e,Kg,Zg,Ue,{position:1,scale:2,rotation:3,lookAt:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,viewportAware:12,inViewport:0,color:13,intensity:14,light:15})}get light(){return this.$$.ctx[15]}}function Qg(i){let e;const t=i[19].default,n=wt(t,i,i[23],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&8388608)&&St(n,t,s,s[23],e?Mt(t,s[23],r,null):yt(s[23]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function $g(i){let e,t,n;function s(o){i[20](o)}let r={light:i[0],lookAt:i[5],position:i[2],scale:i[3],rotation:i[4],castShadow:!!i[15],receiveShadow:i[6],frustumCulled:i[8],renderOrder:i[9],visible:i[10],userData:i[11],dispose:i[12],viewportAware:i[7],color:i[14],intensity:i[13],$$slots:{default:[Qg]},$$scope:{ctx:i}};return i[1]!==void 0&&(r.inViewport=i[1]),e=new Jl({props:r}),Ke.push(()=>Ht(e,"inViewport",s)),e.$on("viewportenter",i[21]),e.$on("viewportleave",i[22]),{c(){ee(e.$$.fragment)},m(o,a){Q(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.light=o[0]),a&32&&(l.lookAt=o[5]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&32768&&(l.castShadow=!!o[15]),a&64&&(l.receiveShadow=o[6]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&128&&(l.viewportAware=o[7]),a&16384&&(l.color=o[14]),a&8192&&(l.intensity=o[13]),a&8388608&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Gt(()=>t=!1)),e.$set(l)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){X(e.$$.fragment,o),n=!1},d(o){$(e,o)}}}function e0(i,e,t){let{$$slots:n={},$$scope:s}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{receiveShadow:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:v=void 0}=e,{userData:m=void 0}=e,{dispose:d=void 0}=e,{intensity:_=void 0}=e,{color:x=void 0}=e,{distance:w=void 0}=e,{decay:b=void 0}=e,{power:S=void 0}=e,{shadow:y=void 0}=e;const M=new Up(x,_,w,b),{invalidate:g}=Wt();function A(B){f=B,t(1,f)}function P(B){Ee.call(this,i,B)}function N(B){Ee.call(this,i,B)}return i.$$set=B=>{"position"in B&&t(2,r=B.position),"scale"in B&&t(3,o=B.scale),"rotation"in B&&t(4,a=B.rotation),"lookAt"in B&&t(5,l=B.lookAt),"receiveShadow"in B&&t(6,c=B.receiveShadow),"viewportAware"in B&&t(7,u=B.viewportAware),"inViewport"in B&&t(1,f=B.inViewport),"frustumCulled"in B&&t(8,h=B.frustumCulled),"renderOrder"in B&&t(9,p=B.renderOrder),"visible"in B&&t(10,v=B.visible),"userData"in B&&t(11,m=B.userData),"dispose"in B&&t(12,d=B.dispose),"intensity"in B&&t(13,_=B.intensity),"color"in B&&t(14,x=B.color),"distance"in B&&t(16,w=B.distance),"decay"in B&&t(17,b=B.decay),"power"in B&&t(18,S=B.power),"shadow"in B&&t(15,y=B.shadow),"$$scope"in B&&t(23,s=B.$$scope)},i.$$.update=()=>{if(i.$$.dirty&458752&&(w!==void 0&&t(0,M.distance=w,M),b!==void 0&&t(0,M.decay=b,M),S!==void 0&&t(0,M.power=S,M),g("PointLight: props changed")),i.$$.dirty&32769){if(y){const{mapSize:B=[512,512],camera:{near:z=.5,far:U=500}={},bias:C=0,radius:Y=1}=y===!0?{}:y;M.shadow.mapSize.set(B[0],B[1]),t(0,M.shadow.camera.near=z,M),t(0,M.shadow.camera.far=U,M),t(0,M.shadow.bias=C,M),t(0,M.shadow.radius=Y,M)}g("PointLight: shadow changed")}},[M,f,r,o,a,l,c,u,h,p,v,m,d,_,x,y,w,b,S,n,A,P,N,s]}class jn extends Be{constructor(e){super(),ke(this,e,e0,$g,Ue,{position:2,scale:3,rotation:4,lookAt:5,receiveShadow:6,viewportAware:7,inViewport:1,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,intensity:13,color:14,distance:16,decay:17,power:18,shadow:15,light:0})}get light(){return this.$$.ctx[0]}}function t0(i,e,t){let{object:n}=e,s=n,{interactive:r=!1}=e,{ignorePointer:o=!1}=e;const a=Zs(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:f}=rr(),{invalidate:h}=Wt(),p=m=>{f(m),c(m),delete $t(m).eventDispatcher},v=(m,d,_)=>{$t(m).eventDispatcher=a,d?(f(m),c(m)):(u(m),_?l(m):c(m))};return dt(()=>{p(n),h("InteractiveObject: object removed")}),i.$$set=m=>{"object"in m&&t(0,n=m.object),"interactive"in m&&t(1,r=m.interactive),"ignorePointer"in m&&t(2,o=m.ignorePointer)},i.$$.update=()=>{i.$$.dirty&15&&(n!==s?(p(s),v(n,o,r),h("InteractiveObject: object changed"),t(3,s=n)):n===s&&(v(n,o,r),h("InteractiveObject: props changed")))},[n,r,o,s]}class Ql extends Be{constructor(e){super(),ke(this,e,t0,null,Ue,{object:0,interactive:1,ignorePointer:2})}}function n0(i){let e;const t=i[16].default,n=wt(t,i,i[27],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&134217728)&&St(n,t,s,s[27],e?Mt(t,s[27],r,null):yt(s[27]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function i0(i){let e,t,n,s,r;function o(l){i[17](l)}let a={object:i[1],lookAt:i[5],position:i[2],scale:i[3],rotation:i[4],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],visible:i[11],userData:i[12],dispose:i[13],viewportAware:i[6],$$slots:{default:[n0]},$$scope:{ctx:i}};return i[0]!==void 0&&(a.inViewport=i[0]),e=new hs({props:a}),Ke.push(()=>Ht(e,"inViewport",o)),e.$on("viewportenter",i[18]),e.$on("viewportleave",i[19]),s=new Ql({props:{object:i[1],interactive:i[14],ignorePointer:i[15]}}),s.$on("click",i[20]),s.$on("contextmenu",i[21]),s.$on("pointerup",i[22]),s.$on("pointerdown",i[23]),s.$on("pointerenter",i[24]),s.$on("pointerleave",i[25]),s.$on("pointermove",i[26]),{c(){ee(e.$$.fragment),n=xe(),ee(s.$$.fragment)},m(l,c){Q(e,l,c),ve(l,n,c),Q(s,l,c),r=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Gt(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),s.$set(f)},i(l){r||(j(e.$$.fragment,l),j(s.$$.fragment,l),r=!0)},o(l){X(e.$$.fragment,l),X(s.$$.fragment,l),r=!1},d(l){$(e,l),l&&_e(n),$(s,l)}}}function s0(i,e,t){let{$$slots:n={},$$scope:s}=e,{mesh:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:m=void 0}=e,{visible:d=void 0}=e,{userData:_=void 0}=e,{dispose:x=void 0}=e,{interactive:w=!1}=e,{ignorePointer:b=!1}=e;function S(C){f=C,t(0,f)}function y(C){Ee.call(this,i,C)}function M(C){Ee.call(this,i,C)}function g(C){Ee.call(this,i,C)}function A(C){Ee.call(this,i,C)}function P(C){Ee.call(this,i,C)}function N(C){Ee.call(this,i,C)}function B(C){Ee.call(this,i,C)}function z(C){Ee.call(this,i,C)}function U(C){Ee.call(this,i,C)}return i.$$set=C=>{"mesh"in C&&t(1,r=C.mesh),"position"in C&&t(2,o=C.position),"scale"in C&&t(3,a=C.scale),"rotation"in C&&t(4,l=C.rotation),"lookAt"in C&&t(5,c=C.lookAt),"viewportAware"in C&&t(6,u=C.viewportAware),"inViewport"in C&&t(0,f=C.inViewport),"castShadow"in C&&t(7,h=C.castShadow),"receiveShadow"in C&&t(8,p=C.receiveShadow),"frustumCulled"in C&&t(9,v=C.frustumCulled),"renderOrder"in C&&t(10,m=C.renderOrder),"visible"in C&&t(11,d=C.visible),"userData"in C&&t(12,_=C.userData),"dispose"in C&&t(13,x=C.dispose),"interactive"in C&&t(14,w=C.interactive),"ignorePointer"in C&&t(15,b=C.ignorePointer),"$$scope"in C&&t(27,s=C.$$scope)},[f,r,o,a,l,c,u,h,p,v,m,d,_,x,w,b,n,S,y,M,g,A,P,N,B,z,U,s]}class r0 extends Be{constructor(e){super(),ke(this,e,s0,i0,Ue,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function a0(i){let e;const t=i[20].default,n=wt(t,i,i[31],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r[1]&1)&&St(n,t,s,s[31],e?Mt(t,s[31],r,null):yt(s[31]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function o0(i){let e,t,n,s,r,o,a;e=new li({props:{dispose:i[11],object:i[15]}}),n=new li({props:{dispose:i[11],object:i[16]}});function l(u){i[21](u)}let c={mesh:i[17],position:i[1],scale:i[2],rotation:i[3],lookAt:i[14],castShadow:i[5],receiveShadow:i[6],frustumCulled:i[7],renderOrder:i[8],visible:i[9],interactive:i[12],ignorePointer:i[13],userData:i[10],dispose:i[11],viewportAware:i[4],$$slots:{default:[a0]},$$scope:{ctx:i}};return i[0]!==void 0&&(c.inViewport=i[0]),r=new r0({props:c}),Ke.push(()=>Ht(r,"inViewport",l)),r.$on("click",i[22]),r.$on("contextmenu",i[23]),r.$on("pointerup",i[24]),r.$on("pointerdown",i[25]),r.$on("pointerenter",i[26]),r.$on("pointerleave",i[27]),r.$on("pointermove",i[28]),r.$on("viewportenter",i[29]),r.$on("viewportleave",i[30]),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment),s=xe(),ee(r.$$.fragment)},m(u,f){Q(e,u,f),ve(u,t,f),Q(n,u,f),ve(u,s,f),Q(r,u,f),a=!0},p(u,f){const h={};f[0]&2048&&(h.dispose=u[11]),f[0]&32768&&(h.object=u[15]),e.$set(h);const p={};f[0]&2048&&(p.dispose=u[11]),f[0]&65536&&(p.object=u[16]),n.$set(p);const v={};f[0]&2&&(v.position=u[1]),f[0]&4&&(v.scale=u[2]),f[0]&8&&(v.rotation=u[3]),f[0]&16384&&(v.lookAt=u[14]),f[0]&32&&(v.castShadow=u[5]),f[0]&64&&(v.receiveShadow=u[6]),f[0]&128&&(v.frustumCulled=u[7]),f[0]&256&&(v.renderOrder=u[8]),f[0]&512&&(v.visible=u[9]),f[0]&4096&&(v.interactive=u[12]),f[0]&8192&&(v.ignorePointer=u[13]),f[0]&1024&&(v.userData=u[10]),f[0]&2048&&(v.dispose=u[11]),f[0]&16&&(v.viewportAware=u[4]),f[1]&1&&(v.$$scope={dirty:f,ctx:u}),!o&&f[0]&1&&(o=!0,v.inViewport=u[0],Gt(()=>o=!1)),r.$set(v)},i(u){a||(j(e.$$.fragment,u),j(n.$$.fragment,u),j(r.$$.fragment,u),a=!0)},o(u){X(e.$$.fragment,u),X(n.$$.fragment,u),X(r.$$.fragment,u),a=!1},d(u){$(e,u),u&&_e(t),$(n,u),u&&_e(s),$(r,u)}}}function l0(i,e,t){let{$$slots:n={},$$scope:s}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:v=void 0}=e,{userData:m=void 0}=e,{dispose:d=void 0}=e,{interactive:_=!1}=e,{ignorePointer:x=!1}=e,{lookAt:w=void 0}=e,{geometry:b}=e,{material:S}=e,y=S,M=b;const{invalidate:g}=Wt(),A=new un(b,S),P=()=>A;function N(I){c=I,t(0,c)}function B(I){Ee.call(this,i,I)}function z(I){Ee.call(this,i,I)}function U(I){Ee.call(this,i,I)}function C(I){Ee.call(this,i,I)}function Y(I){Ee.call(this,i,I)}function ie(I){Ee.call(this,i,I)}function q(I){Ee.call(this,i,I)}function k(I){Ee.call(this,i,I)}function H(I){Ee.call(this,i,I)}return i.$$set=I=>{"position"in I&&t(1,r=I.position),"scale"in I&&t(2,o=I.scale),"rotation"in I&&t(3,a=I.rotation),"viewportAware"in I&&t(4,l=I.viewportAware),"inViewport"in I&&t(0,c=I.inViewport),"castShadow"in I&&t(5,u=I.castShadow),"receiveShadow"in I&&t(6,f=I.receiveShadow),"frustumCulled"in I&&t(7,h=I.frustumCulled),"renderOrder"in I&&t(8,p=I.renderOrder),"visible"in I&&t(9,v=I.visible),"userData"in I&&t(10,m=I.userData),"dispose"in I&&t(11,d=I.dispose),"interactive"in I&&t(12,_=I.interactive),"ignorePointer"in I&&t(13,x=I.ignorePointer),"lookAt"in I&&t(14,w=I.lookAt),"geometry"in I&&t(15,b=I.geometry),"material"in I&&t(16,S=I.material),"$$scope"in I&&t(31,s=I.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&327680&&(S!==y?(P().material=S,g("Mesh: material changed")):g("Mesh: material props changed"),t(18,y=S)),i.$$.dirty[0]&557056&&(b!==M?(P().geometry=b,g("Mesh: geometry changed")):g("Mesh: geometry props changed"),t(19,M=b))},[c,r,o,a,l,u,f,h,p,v,m,d,_,x,w,b,S,A,y,M,n,N,B,z,U,C,Y,ie,q,k,H,s]}class rt extends Be{constructor(e){super(),ke(this,e,l0,o0,Ue,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const $l=new mt;$l.scale.set(0,0,0);$l.matrix;new Je().fromArray(new Array(16).fill(0));new ze(16777215);function c0(i){let e;const t=i[14].default,n=wt(t,i,i[18],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&262144)&&St(n,t,s,s[18],e?Mt(t,s[18],r,null):yt(s[18]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function u0(i){let e,t,n;function s(o){i[15](o)}let r={object:i[13],position:i[1],scale:i[2],rotation:i[3],lookAt:i[4],frustumCulled:i[8],renderOrder:i[9],visible:i[10],userData:i[11],dispose:i[12],castShadow:i[6],receiveShadow:i[7],viewportAware:i[5],$$slots:{default:[c0]},$$scope:{ctx:i}};return i[0]!==void 0&&(r.inViewport=i[0]),e=new hs({props:r}),Ke.push(()=>Ht(e,"inViewport",s)),e.$on("viewportenter",i[16]),e.$on("viewportleave",i[17]),{c(){ee(e.$$.fragment)},m(o,a){Q(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.position=o[1]),a&4&&(l.scale=o[2]),a&8&&(l.rotation=o[3]),a&16&&(l.lookAt=o[4]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&32&&(l.viewportAware=o[5]),a&262144&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Gt(()=>t=!1)),e.$set(l)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){X(e.$$.fragment,o),n=!1},d(o){$(e,o)}}}function f0(i,e,t){let{$$slots:n={},$$scope:s}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:v=void 0}=e,{visible:m=void 0}=e,{userData:d=void 0}=e,{dispose:_=void 0}=e;const x=new es;function w(y){u=y,t(0,u)}function b(y){Ee.call(this,i,y)}function S(y){Ee.call(this,i,y)}return i.$$set=y=>{"position"in y&&t(1,r=y.position),"scale"in y&&t(2,o=y.scale),"rotation"in y&&t(3,a=y.rotation),"lookAt"in y&&t(4,l=y.lookAt),"viewportAware"in y&&t(5,c=y.viewportAware),"inViewport"in y&&t(0,u=y.inViewport),"castShadow"in y&&t(6,f=y.castShadow),"receiveShadow"in y&&t(7,h=y.receiveShadow),"frustumCulled"in y&&t(8,p=y.frustumCulled),"renderOrder"in y&&t(9,v=y.renderOrder),"visible"in y&&t(10,m=y.visible),"userData"in y&&t(11,d=y.userData),"dispose"in y&&t(12,_=y.dispose),"$$scope"in y&&t(18,s=y.$$scope)},[u,r,o,a,l,c,f,h,p,v,m,d,_,x,n,w,b,S,s]}class Xn extends Be{constructor(e){super(),ke(this,e,f0,u0,Ue,{position:1,scale:2,rotation:3,lookAt:4,viewportAware:5,inViewport:0,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,group:13})}get group(){return this.$$.ctx[13]}}function h0(i){let e;const t=i[16].default,n=wt(t,i,i[27],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&134217728)&&St(n,t,s,s[27],e?Mt(t,s[27],r,null):yt(s[27]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function d0(i){let e,t,n,s,r;function o(l){i[17](l)}let a={object:i[1],lookAt:i[5],position:i[2],scale:i[3],rotation:i[4],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],visible:i[11],userData:i[12],dispose:i[13],viewportAware:i[6],$$slots:{default:[h0]},$$scope:{ctx:i}};return i[0]!==void 0&&(a.inViewport=i[0]),e=new hs({props:a}),Ke.push(()=>Ht(e,"inViewport",o)),e.$on("viewportenter",i[18]),e.$on("viewportleave",i[19]),s=new Ql({props:{object:i[1],interactive:i[14],ignorePointer:i[15]}}),s.$on("click",i[20]),s.$on("contextmenu",i[21]),s.$on("pointerup",i[22]),s.$on("pointerdown",i[23]),s.$on("pointerenter",i[24]),s.$on("pointerleave",i[25]),s.$on("pointermove",i[26]),{c(){ee(e.$$.fragment),n=xe(),ee(s.$$.fragment)},m(l,c){Q(e,l,c),ve(l,n,c),Q(s,l,c),r=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Gt(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),s.$set(f)},i(l){r||(j(e.$$.fragment,l),j(s.$$.fragment,l),r=!0)},o(l){X(e.$$.fragment,l),X(s.$$.fragment,l),r=!1},d(l){$(e,l),l&&_e(n),$(s,l)}}}function m0(i,e,t){let{$$slots:n={},$$scope:s}=e,{line:r}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:m=void 0}=e,{visible:d=void 0}=e,{userData:_=void 0}=e,{dispose:x=void 0}=e,{interactive:w=!1}=e,{ignorePointer:b=!1}=e;function S(C){f=C,t(0,f)}function y(C){Ee.call(this,i,C)}function M(C){Ee.call(this,i,C)}function g(C){Ee.call(this,i,C)}function A(C){Ee.call(this,i,C)}function P(C){Ee.call(this,i,C)}function N(C){Ee.call(this,i,C)}function B(C){Ee.call(this,i,C)}function z(C){Ee.call(this,i,C)}function U(C){Ee.call(this,i,C)}return i.$$set=C=>{"line"in C&&t(1,r=C.line),"position"in C&&t(2,o=C.position),"scale"in C&&t(3,a=C.scale),"rotation"in C&&t(4,l=C.rotation),"lookAt"in C&&t(5,c=C.lookAt),"viewportAware"in C&&t(6,u=C.viewportAware),"inViewport"in C&&t(0,f=C.inViewport),"castShadow"in C&&t(7,h=C.castShadow),"receiveShadow"in C&&t(8,p=C.receiveShadow),"frustumCulled"in C&&t(9,v=C.frustumCulled),"renderOrder"in C&&t(10,m=C.renderOrder),"visible"in C&&t(11,d=C.visible),"userData"in C&&t(12,_=C.userData),"dispose"in C&&t(13,x=C.dispose),"interactive"in C&&t(14,w=C.interactive),"ignorePointer"in C&&t(15,b=C.ignorePointer),"$$scope"in C&&t(27,s=C.$$scope)},[f,r,o,a,l,c,u,h,p,v,m,d,_,x,w,b,n,S,y,M,g,A,P,N,B,z,U,s]}class p0 extends Be{constructor(e){super(),ke(this,e,m0,d0,Ue,{line:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function g0(i){let e;const t=i[23].default,n=wt(t,i,i[34],null);return{c(){n&&n.c()},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r[1]&8)&&St(n,t,s,s[34],e?Mt(t,s[34],r,null):yt(s[34]),null)},i(s){e||(j(n,s),e=!0)},o(s){X(n,s),e=!1},d(s){n&&n.d(s)}}}function _0(i){let e,t,n,s,r,o,a,l,c;e=new li({props:{dispose:i[11],object:i[15]}}),n=new li({props:{dispose:i[11],object:i[16]}}),r=new li({props:{dispose:!0,object:i[18]}});function u(h){i[24](h)}let f={line:i[17],position:i[1],scale:i[2],rotation:i[3],lookAt:i[14],castShadow:i[5],receiveShadow:i[6],frustumCulled:i[7],renderOrder:i[8],visible:i[9],userData:i[10],dispose:i[11],interactive:i[12],ignorePointer:i[13],viewportAware:i[4],$$slots:{default:[g0]},$$scope:{ctx:i}};return i[0]!==void 0&&(f.inViewport=i[0]),a=new p0({props:f}),Ke.push(()=>Ht(a,"inViewport",u)),a.$on("click",i[25]),a.$on("contextmenu",i[26]),a.$on("pointerup",i[27]),a.$on("pointerdown",i[28]),a.$on("pointerenter",i[29]),a.$on("pointerleave",i[30]),a.$on("pointermove",i[31]),a.$on("viewportenter",i[32]),a.$on("viewportleave",i[33]),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment),s=xe(),ee(r.$$.fragment),o=xe(),ee(a.$$.fragment)},m(h,p){Q(e,h,p),ve(h,t,p),Q(n,h,p),ve(h,s,p),Q(r,h,p),ve(h,o,p),Q(a,h,p),c=!0},p(h,p){const v={};p[0]&2048&&(v.dispose=h[11]),p[0]&32768&&(v.object=h[15]),e.$set(v);const m={};p[0]&2048&&(m.dispose=h[11]),p[0]&65536&&(m.object=h[16]),n.$set(m);const d={};p[0]&2&&(d.position=h[1]),p[0]&4&&(d.scale=h[2]),p[0]&8&&(d.rotation=h[3]),p[0]&16384&&(d.lookAt=h[14]),p[0]&32&&(d.castShadow=h[5]),p[0]&64&&(d.receiveShadow=h[6]),p[0]&128&&(d.frustumCulled=h[7]),p[0]&256&&(d.renderOrder=h[8]),p[0]&512&&(d.visible=h[9]),p[0]&1024&&(d.userData=h[10]),p[0]&2048&&(d.dispose=h[11]),p[0]&4096&&(d.interactive=h[12]),p[0]&8192&&(d.ignorePointer=h[13]),p[0]&16&&(d.viewportAware=h[4]),p[1]&8&&(d.$$scope={dirty:p,ctx:h}),!l&&p[0]&1&&(l=!0,d.inViewport=h[0],Gt(()=>l=!1)),a.$set(d)},i(h){c||(j(e.$$.fragment,h),j(n.$$.fragment,h),j(r.$$.fragment,h),j(a.$$.fragment,h),c=!0)},o(h){X(e.$$.fragment,h),X(n.$$.fragment,h),X(r.$$.fragment,h),X(a.$$.fragment,h),c=!1},d(h){$(e,h),h&&_e(t),$(n,h),h&&_e(s),$(r,h),h&&_e(o),$(a,h)}}}function v0(i,e,t){let{$$slots:n={},$$scope:s}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:v=void 0}=e,{userData:m=void 0}=e,{dispose:d=void 0}=e,{interactive:_=!1}=e,{ignorePointer:x=!1}=e,{lookAt:w=void 0}=e,{geometry:b=void 0}=e,{points:S=[]}=e,{material:y}=e,M=y,g=b,A=S;const P=new Ot,{invalidate:N}=Wt(),B=D=>{if(!D)return;const pe=D.map(Te=>Te instanceof O?Te:new O().fromArray(Te));P.setFromPoints(pe)},z=D=>!!D;b||B(S);const U=new Rp(z(b)?b:P,y),C=()=>U;function Y(D){c=D,t(0,c)}function ie(D){Ee.call(this,i,D)}function q(D){Ee.call(this,i,D)}function k(D){Ee.call(this,i,D)}function H(D){Ee.call(this,i,D)}function I(D){Ee.call(this,i,D)}function ne(D){Ee.call(this,i,D)}function re(D){Ee.call(this,i,D)}function he(D){Ee.call(this,i,D)}function Se(D){Ee.call(this,i,D)}return i.$$set=D=>{"position"in D&&t(1,r=D.position),"scale"in D&&t(2,o=D.scale),"rotation"in D&&t(3,a=D.rotation),"viewportAware"in D&&t(4,l=D.viewportAware),"inViewport"in D&&t(0,c=D.inViewport),"castShadow"in D&&t(5,u=D.castShadow),"receiveShadow"in D&&t(6,f=D.receiveShadow),"frustumCulled"in D&&t(7,h=D.frustumCulled),"renderOrder"in D&&t(8,p=D.renderOrder),"visible"in D&&t(9,v=D.visible),"userData"in D&&t(10,m=D.userData),"dispose"in D&&t(11,d=D.dispose),"interactive"in D&&t(12,_=D.interactive),"ignorePointer"in D&&t(13,x=D.ignorePointer),"lookAt"in D&&t(14,w=D.lookAt),"geometry"in D&&t(15,b=D.geometry),"points"in D&&t(19,S=D.points),"material"in D&&t(16,y=D.material),"$$scope"in D&&t(34,s=D.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&1114112&&(y!==M?(C().material=y,N("Line: material changed")):N("Line: material props changed"),t(20,M=y)),i.$$.dirty[0]&2129920&&(b!==g?z(b)&&(C().geometry=b,N("Line: geometry changed")):z(b)&&N("Line: geometry props changed"),t(21,g=b)),i.$$.dirty[0]&4751360&&A!==S&&(b||(B(S),C().geometry=P),t(22,A=S))},[c,r,o,a,l,u,f,h,p,v,m,d,_,x,w,b,y,U,P,S,M,g,A,n,Y,ie,q,k,H,I,ne,re,he,Se,s]}class _a extends Be{constructor(e){super(),ke(this,e,v0,_0,Ue,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,points:19,material:16,line:17},null,[-1,-1])}get line(){return this.$$.ctx[17]}}Ng(st,()=>new st);const ll={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Hi extends fs{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(r,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new tn(r,o);h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new tn(r,o);p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}ll===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=ll;this.highPassUniforms=Gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new It({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.texSize.value=new Me(r,o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Ys===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=Ys;this.copyUniforms=Gi.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new It({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Kr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ze,this.oldClearAlpha=1,this.basic=new ha,this.fsQuad=new Hl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.texSize.value=new Me(n,s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Hi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Hi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new It({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new It({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Hi.BlurDirectionX=new Me(1,0);Hi.BlurDirectionY=new Me(0,1);class x0 extends un{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new O(.70707,.70707,0),f=new ze(t.sunColor!==void 0?t.sunColor:16777215),h=new ze(t.waterColor!==void 0?t.waterColor:8355711),p=t.eye!==void 0?t.eye:new O(0,0,0),v=t.distortionScale!==void 0?t.distortionScale:20,m=t.side!==void 0?t.side:ci,d=t.fog!==void 0?t.fog:!1,_=new kn,x=new O,w=new O,b=new O,S=new Je,y=new O(0,0,-1),M=new Ze,g=new O,A=new O,P=new Ze,N=new Je,B=new Ct,z=new tn(s,r),U={uniforms:Gi.merge([ae.fog,ae.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Je},sunColor:{value:new ze(8355711)},sunDirection:{value:new O(.70707,.70707,0)},eye:{value:new O},waterColor:{value:new ze(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <fog_fragment>
				}`},C=new It({fragmentShader:U.fragmentShader,vertexShader:U.vertexShader,uniforms:Gi.clone(U.uniforms),lights:!0,side:m,fog:d});C.uniforms.mirrorSampler.value=z.texture,C.uniforms.textureMatrix.value=N,C.uniforms.alpha.value=a,C.uniforms.time.value=l,C.uniforms.normalSampler.value=c,C.uniforms.sunColor.value=f,C.uniforms.waterColor.value=h,C.uniforms.sunDirection.value=u,C.uniforms.distortionScale.value=v,C.uniforms.eye.value=p,n.material=C,n.onBeforeRender=function(Y,ie,q){if(w.setFromMatrixPosition(n.matrixWorld),b.setFromMatrixPosition(q.matrixWorld),S.extractRotation(n.matrixWorld),x.set(0,0,1),x.applyMatrix4(S),g.subVectors(w,b),g.dot(x)>0)return;g.reflect(x).negate(),g.add(w),S.extractRotation(q.matrixWorld),y.set(0,0,-1),y.applyMatrix4(S),y.add(b),A.subVectors(w,y),A.reflect(x).negate(),A.add(w),B.position.copy(g),B.up.set(0,1,0),B.up.applyMatrix4(S),B.up.reflect(x),B.lookAt(A),B.far=q.far,B.updateMatrixWorld(),B.projectionMatrix.copy(q.projectionMatrix),N.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),N.multiply(B.projectionMatrix),N.multiply(B.matrixWorldInverse),_.setFromNormalAndCoplanarPoint(x,w),_.applyMatrix4(B.matrixWorldInverse),M.set(_.normal.x,_.normal.y,_.normal.z,_.constant);const k=B.projectionMatrix;P.x=(Math.sign(M.x)+k.elements[8])/k.elements[0],P.y=(Math.sign(M.y)+k.elements[9])/k.elements[5],P.z=-1,P.w=(1+k.elements[10])/k.elements[14],M.multiplyScalar(2/M.dot(P)),k.elements[2]=M.x,k.elements[6]=M.y,k.elements[10]=M.z+1-o,k.elements[14]=M.w,p.setFromMatrixPosition(q.matrixWorld);const H=Y.getRenderTarget(),I=Y.xr.enabled,ne=Y.shadowMap.autoUpdate;n.visible=!1,Y.xr.enabled=!1,Y.shadowMap.autoUpdate=!1,Y.setRenderTarget(z),Y.state.buffers.depth.setMask(!0),Y.autoClear===!1&&Y.clear(),Y.render(ie,B),n.visible=!0,Y.xr.enabled=I,Y.shadowMap.autoUpdate=ne,Y.setRenderTarget(H);const re=q.viewport;re!==void 0&&Y.state.viewport(re)}}}const b0=""+new URL("waternormals.add9912b.jpg",import.meta.url).href,w0=""+new URL("earth.767ee1dc.jpg",import.meta.url).href,M0=""+new URL("jupiter.b0f04d00.jpg",import.meta.url).href,S0=""+new URL("mars.2d187f3e.jpg",import.meta.url).href,y0=""+new URL("mercury.5a5c8060.jpg",import.meta.url).href,T0=""+new URL("moon.2764ba65.jpg",import.meta.url).href,A0=""+new URL("neptune.cb42ea82.jpg",import.meta.url).href,E0=""+new URL("saturn.54a900ca.jpg",import.meta.url).href,C0=""+new URL("sun.ff0f076b.jpg",import.meta.url).href,L0=""+new URL("uranus.d15239d4.jpg",import.meta.url).href,D0=""+new URL("venus.dbe5db1c.jpg",import.meta.url).href,P0=""+new URL("stars.80c2259d.jpg",import.meta.url).href,va=new st().load(w0),xa=new st().load(M0),ba=new st().load(S0),wa=new st().load(y0),Ma=new st().load(T0),R0=new st().load(A0),Sa=new st().load(E0),Gn=new st().load(C0),I0=new st().load(L0),ya=new st().load(D0),Ta=new st().load(P0),O0=""+new URL("mesopotamia.7b34053f.jpg",import.meta.url).href,z0=""+new URL("stone.184fc8df.jpg",import.meta.url).href;function F0(i){let e,t,n,s,r,o;return e=new jn({props:{position:{y:10,x:10,z:20},intensity:.2}}),n=new rt({props:{geometry:new Cn(50,50),material:new $e({map:i[0]})}}),r=new rt({props:{rotation:{x:-Math.PI/2},geometry:new it(1e3),material:new $e({color:"#fca103",side:Jt,transparent:!0,opacity:20,alphaMap:Ta})}}),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment),s=xe(),ee(r.$$.fragment)},m(a,l){Q(e,a,l),ve(a,t,l),Q(n,a,l),ve(a,s,l),Q(r,a,l),o=!0},p:je,i(a){o||(j(e.$$.fragment,a),j(n.$$.fragment,a),j(r.$$.fragment,a),o=!0)},o(a){X(e.$$.fragment,a),X(n.$$.fragment,a),X(r.$$.fragment,a),o=!1},d(a){$(e,a),a&&_e(t),$(n,a),a&&_e(s),$(r,a)}}}function N0(i){const e=new x0(new di(100,50,50),{textureHeight:512,textureWidth:512,eye:new O(0,10,10),waterNormals:new st().load(b0,n=>{n.wrapS=n.wrapT=qs}),sunDirection:new O,sunColor:"#ffffff",waterColor:"#001e0f",distortionScale:3.7});e.material.side=Jt;const t=new st().load(O0);return new st().load(z0),fn((n,s)=>{e.material.uniforms.time.value+=s}),[t]}class U0 extends Be{constructor(e){super(),ke(this,e,N0,F0,Ue,{})}}const k0=""+new URL("nut.3904bd27.jpg",import.meta.url).href;function B0(i){let e,t,n,s;return e=new jn({props:{position:{y:10,x:10,z:20},intensity:.2}}),n=new rt({props:{geometry:new Cn(70,50),material:new $e({map:i[0]})}}),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment)},m(r,o){Q(e,r,o),ve(r,t,o),Q(n,r,o),s=!0},p:je,i(r){s||(j(e.$$.fragment,r),j(n.$$.fragment,r),s=!0)},o(r){X(e.$$.fragment,r),X(n.$$.fragment,r),s=!1},d(r){$(e,r),r&&_e(t),$(n,r)}}}function V0(i){return[new st().load(k0)]}class G0 extends Be{constructor(e){super(),ke(this,e,V0,B0,Ue,{})}}function H0(i){let e,t;return e=new rt({props:{position:{x:i[1]},material:new $e({map:i[0]}),geometry:new it(i[2])}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p(n,s){const r={};s&2&&(r.position={x:n[1]}),s&1&&(r.material=new $e({map:n[0]})),s&4&&(r.geometry=new it(n[2])),e.$set(r)},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function W0(i){let e,t,n,s;e=new rt({props:{material:new $e({transparent:!0,opacity:.05,color:"#dddddd"}),geometry:new it(i[1])}});let r={$$slots:{default:[H0]},$$scope:{ctx:i}};return n=new Xn({props:r}),i[5](n),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment)},m(o,a){Q(e,o,a),ve(o,t,a),Q(n,o,a),s=!0},p(o,[a]){const l={};a&2&&(l.geometry=new it(o[1])),e.$set(l);const c={};a&71&&(c.$$scope={dirty:a,ctx:o}),n.$set(c)},i(o){s||(j(e.$$.fragment,o),j(n.$$.fragment,o),s=!0)},o(o){X(e.$$.fragment,o),X(n.$$.fragment,o),s=!1},d(o){$(e,o),o&&_e(t),i[5](null),$(n,o)}}}function j0(i,e,t){let{texture:n}=e,{orbitRadius:s}=e,{planetRadius:r}=e,{orbitSpeed:o=1}=e,a;fn((c,u)=>{a.group.rotateY(u*o)});function l(c){Ke[c?"unshift":"push"](()=>{a=c,t(3,a)})}return i.$$set=c=>{"texture"in c&&t(0,n=c.texture),"orbitRadius"in c&&t(1,s=c.orbitRadius),"planetRadius"in c&&t(2,r=c.planetRadius),"orbitSpeed"in c&&t(4,o=c.orbitSpeed)},[n,s,r,a,o,l]}class ln extends Be{constructor(e){super(),ke(this,e,j0,W0,Ue,{texture:0,orbitRadius:1,planetRadius:2,orbitSpeed:4})}}function X0(i){let e,t,n,s;return e=new rt({props:{position:{x:20},material:new $e({map:Gn,lightMap:Gn,emissiveMap:Gn}),geometry:new it(2.5)}}),n=new jn({props:{position:{x:20},intensity:2}}),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment)},m(r,o){Q(e,r,o),ve(r,t,o),Q(n,r,o),s=!0},p:je,i(r){s||(j(e.$$.fragment,r),j(n.$$.fragment,r),s=!0)},o(r){X(e.$$.fragment,r),X(n.$$.fragment,r),s=!1},d(r){$(e,r),r&&_e(t),$(n,r)}}}function q0(i){let e,t,n,s,r,o,a,l,c,u,f,h,p,v,m,d,_,x,w,b;e=new rt({props:{geometry:new it(1,50,50),material:new $e({map:va})}}),n=new ln({props:{orbitRadius:5,planetRadius:.3,texture:Ma,orbitSpeed:1.6}}),r=new ln({props:{orbitRadius:10,planetRadius:.8,texture:wa,orbitSpeed:1.3}}),a=new ln({props:{orbitRadius:15,planetRadius:.9,texture:ya,orbitSpeed:1.2}}),c=new rt({props:{material:new $e({transparent:!0,opacity:.05,color:"#dddddd"}),geometry:new it(20)}});let S={$$slots:{default:[X0]},$$scope:{ctx:i}};f=new Xn({props:S}),i[2](f),p=new ln({props:{orbitRadius:25,planetRadius:.85,texture:ba,orbitSpeed:.5}}),m=new ln({props:{orbitRadius:30,planetRadius:2,texture:xa,orbitSpeed:.3}}),_=new ln({props:{orbitRadius:35,planetRadius:1.8,texture:Sa,orbitSpeed:.2}});let y={material:new $e({map:Ta,color:"#dddddd",side:Jt}),geometry:new it(200)};return w=new rt({props:y}),i[3](w),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment),s=xe(),ee(r.$$.fragment),o=xe(),ee(a.$$.fragment),l=xe(),ee(c.$$.fragment),u=xe(),ee(f.$$.fragment),h=xe(),ee(p.$$.fragment),v=xe(),ee(m.$$.fragment),d=xe(),ee(_.$$.fragment),x=xe(),ee(w.$$.fragment)},m(M,g){Q(e,M,g),ve(M,t,g),Q(n,M,g),ve(M,s,g),Q(r,M,g),ve(M,o,g),Q(a,M,g),ve(M,l,g),Q(c,M,g),ve(M,u,g),Q(f,M,g),ve(M,h,g),Q(p,M,g),ve(M,v,g),Q(m,M,g),ve(M,d,g),Q(_,M,g),ve(M,x,g),Q(w,M,g),b=!0},p(M,[g]){const A={};g&16&&(A.$$scope={dirty:g,ctx:M}),f.$set(A);const P={};w.$set(P)},i(M){b||(j(e.$$.fragment,M),j(n.$$.fragment,M),j(r.$$.fragment,M),j(a.$$.fragment,M),j(c.$$.fragment,M),j(f.$$.fragment,M),j(p.$$.fragment,M),j(m.$$.fragment,M),j(_.$$.fragment,M),j(w.$$.fragment,M),b=!0)},o(M){X(e.$$.fragment,M),X(n.$$.fragment,M),X(r.$$.fragment,M),X(a.$$.fragment,M),X(c.$$.fragment,M),X(f.$$.fragment,M),X(p.$$.fragment,M),X(m.$$.fragment,M),X(_.$$.fragment,M),X(w.$$.fragment,M),b=!1},d(M){$(e,M),M&&_e(t),$(n,M),M&&_e(s),$(r,M),M&&_e(o),$(a,M),M&&_e(l),$(c,M),M&&_e(u),i[2](null),$(f,M),M&&_e(h),$(p,M),M&&_e(v),$(m,M),M&&_e(d),$(_,M),M&&_e(x),i[3](null),$(w,M)}}}function Y0(i,e,t){let n,s;fn((a,l)=>{n.group.rotateY(l*1),s.mesh.rotateY(l*.01)});function r(a){Ke[a?"unshift":"push"](()=>{n=a,t(0,n)})}function o(a){Ke[a?"unshift":"push"](()=>{s=a,t(1,s)})}return[n,s,r,o]}class Z0 extends Be{constructor(e){super(),ke(this,e,Y0,q0,Ue,{})}}const K0=""+new URL("animal.2069678d.jpg",import.meta.url).href;function J0(i){let e,t,n,s;return e=new jn({props:{position:{y:10,x:10,z:20},intensity:.2}}),n=new rt({props:{geometry:new Cn(70,50),material:new $e({map:i[0]})}}),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment)},m(r,o){Q(e,r,o),ve(r,t,o),Q(n,r,o),s=!0},p:je,i(r){s||(j(e.$$.fragment,r),j(n.$$.fragment,r),s=!0)},o(r){X(e.$$.fragment,r),X(n.$$.fragment,r),s=!1},d(r){$(e,r),r&&_e(t),$(n,r)}}}function Q0(i){return[new st().load(K0)]}class $0 extends Be{constructor(e){super(),ke(this,e,Q0,J0,Ue,{})}}const e_=""+new URL("tree.211d29ff.png",import.meta.url).href,t_=""+new URL("maya-calendar.4f833fda.jpg",import.meta.url).href,n_=""+new URL("maya-calendar-normal.f39b0281.png",import.meta.url).href;function i_(i){let e,t,n,s,r,o;return e=new jn({props:{position:{y:10,x:10,z:20},intensity:.2}}),n=new rt({props:{geometry:new Cn(20,20),material:new $e({map:i[0]})}}),r=new rt({props:{position:{x:20,y:10},geometry:new Cn(20,20),material:new $e({map:i[1],alphaMap:i[1],transparent:!0,normalMap:i[2]})}}),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment),s=xe(),ee(r.$$.fragment)},m(a,l){Q(e,a,l),ve(a,t,l),Q(n,a,l),ve(a,s,l),Q(r,a,l),o=!0},p:je,i(a){o||(j(e.$$.fragment,a),j(n.$$.fragment,a),j(r.$$.fragment,a),o=!0)},o(a){X(e.$$.fragment,a),X(n.$$.fragment,a),X(r.$$.fragment,a),o=!1},d(a){$(e,a),a&&_e(t),$(n,a),a&&_e(s),$(r,a)}}}function s_(i){const e=new st().load(e_),t=new st().load(t_),n=new st().load(n_);return[e,t,n]}class r_ extends Be{constructor(e){super(),ke(this,e,s_,i_,Ue,{})}}const a_=""+new URL("mittelalter.428f7438.jpg",import.meta.url).href;function o_(i){let e,t,n,s;return e=new jn({props:{position:{y:10,x:10,z:20},intensity:.2}}),n=new rt({props:{geometry:new Cn(70,50),material:new $e({map:i[0]})}}),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment)},m(r,o){Q(e,r,o),ve(r,t,o),Q(n,r,o),s=!0},p:je,i(r){s||(j(e.$$.fragment,r),j(n.$$.fragment,r),s=!0)},o(r){X(e.$$.fragment,r),X(n.$$.fragment,r),s=!1},d(r){$(e,r),r&&_e(t),$(n,r)}}}function l_(i){return[new st().load(a_)]}class c_ extends Be{constructor(e){super(),ke(this,e,l_,o_,Ue,{})}}const u_=i=>({}),cl=i=>({}),f_=i=>({}),ul=i=>({});function h_(i){let e,t,n,s;const r=i[6].extension,o=wt(r,i,i[8],ul);t=new rt({props:{position:{x:i[3]},material:new $e({map:i[0]}),geometry:new it(i[1])}});const a=i[6].inner,l=wt(a,i,i[8],cl);return{c(){o&&o.c(),e=xe(),ee(t.$$.fragment),n=xe(),l&&l.c()},m(c,u){o&&o.m(c,u),ve(c,e,u),Q(t,c,u),ve(c,n,u),l&&l.m(c,u),s=!0},p(c,u){o&&o.p&&(!s||u&256)&&St(o,r,c,c[8],s?Mt(r,c[8],u,f_):yt(c[8]),ul);const f={};u&1&&(f.material=new $e({map:c[0]})),u&2&&(f.geometry=new it(c[1])),t.$set(f),l&&l.p&&(!s||u&256)&&St(l,a,c,c[8],s?Mt(a,c[8],u,u_):yt(c[8]),cl)},i(c){s||(j(o,c),j(t.$$.fragment,c),j(l,c),s=!0)},o(c){X(o,c),X(t.$$.fragment,c),X(l,c),s=!1},d(c){o&&o.d(c),c&&_e(e),$(t,c),c&&_e(n),l&&l.d(c)}}}function d_(i){let e,t,n,s;e=new _a({props:{rotation:{x:-Math.PI/2},material:new tr({color:"#ffffff"}),geometry:new nr(new di(i[3],50))}});let r={$$slots:{default:[h_]},$$scope:{ctx:i}};return n=new Xn({props:r}),i[7](n),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment)},m(o,a){Q(e,o,a),ve(o,t,a),Q(n,o,a),s=!0},p(o,[a]){const l={};a&259&&(l.$$scope={dirty:a,ctx:o}),n.$set(l)},i(o){s||(j(e.$$.fragment,o),j(n.$$.fragment,o),s=!0)},o(o){X(e.$$.fragment,o),X(n.$$.fragment,o),s=!1},d(o){$(e,o),o&&_e(t),i[7](null),$(n,o)}}}function m_(i,e,t){let{$$slots:n={},$$scope:s}=e,{texture:r}=e,{orbitRadius:o}=e,{planetRadius:a}=e,{orbitDuration:l}=e,c=o,u=1/l,f;fn((p,v)=>{f.group.rotateY(v*u*100)});function h(p){Ke[p?"unshift":"push"](()=>{f=p,t(2,f)})}return i.$$set=p=>{"texture"in p&&t(0,r=p.texture),"orbitRadius"in p&&t(4,o=p.orbitRadius),"planetRadius"in p&&t(1,a=p.planetRadius),"orbitDuration"in p&&t(5,l=p.orbitDuration),"$$scope"in p&&t(8,s=p.$$scope)},[r,a,f,c,o,l,n,h,s]}class Qn extends Be{constructor(e){super(),ke(this,e,m_,d_,Ue,{texture:0,orbitRadius:4,planetRadius:1,orbitDuration:5})}}function p_(i){let e,t;return e=new rt({props:{position:{x:20},material:new $e({map:Ma}),geometry:new it(2)}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function g_(i){let e,t,n,s,r,o;e=new rt({props:{position:{x:149.6},material:new $e({map:va}),geometry:new it(12.7)}}),n=new _a({props:{position:{x:149.6},rotation:{x:-Math.PI/2},material:new tr({color:"#ffffff"}),geometry:new nr(new di(20,50))}});let a={position:{x:149.6},$$slots:{default:[p_]},$$scope:{ctx:i}};return r=new Xn({props:a}),i[2](r),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment),s=xe(),ee(r.$$.fragment)},m(l,c){Q(e,l,c),ve(l,t,c),Q(n,l,c),ve(l,s,c),Q(r,l,c),o=!0},p(l,c){const u={};c&16&&(u.$$scope={dirty:c,ctx:l}),r.$set(u)},i(l){o||(j(e.$$.fragment,l),j(n.$$.fragment,l),j(r.$$.fragment,l),o=!0)},o(l){X(e.$$.fragment,l),X(n.$$.fragment,l),X(r.$$.fragment,l),o=!1},d(l){$(e,l),l&&_e(t),$(n,l),l&&_e(s),i[2](null),$(r,l)}}}function __(i){let e,t,n,s,r,o,a,l,c,u,f,h,p,v,m,d,_,x,w,b,S,y;e=new rt({props:{material:new $e({map:Gn,lightMap:Gn,lightMapIntensity:.7}),geometry:new it(10)}}),n=new jn({props:{intensity:.3}}),r=new Qn({props:{texture:wa,orbitRadius:57.9,planetRadius:4.8,orbitDuration:88}}),a=new Qn({props:{texture:ya,orbitRadius:108.2,planetRadius:12.1,orbitDuration:224.7}}),c=new _a({props:{rotation:{x:-Math.PI/2},material:new tr({color:"#ffffff"}),geometry:new nr(new di(149.6,50))}});let M={$$slots:{default:[g_]},$$scope:{ctx:i}};return f=new Xn({props:M}),i[3](f),p=new Qn({props:{texture:ba,orbitRadius:227.9,planetRadius:6.7,orbitDuration:687}}),m=new Qn({props:{texture:xa,orbitRadius:778.6,planetRadius:14.2,orbitDuration:4331}}),_=new Qn({props:{texture:Sa,orbitRadius:1433.5,planetRadius:12,orbitDuration:10747}}),w=new Qn({props:{texture:I0,orbitRadius:2872.5,planetRadius:51.725,orbitDuration:30589}}),S=new Qn({props:{texture:R0,orbitRadius:4900.5,planetRadius:44.5,orbitDuration:30589}}),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment),s=xe(),ee(r.$$.fragment),o=xe(),ee(a.$$.fragment),l=xe(),ee(c.$$.fragment),u=xe(),ee(f.$$.fragment),h=xe(),ee(p.$$.fragment),v=xe(),ee(m.$$.fragment),d=xe(),ee(_.$$.fragment),x=xe(),ee(w.$$.fragment),b=xe(),ee(S.$$.fragment)},m(g,A){Q(e,g,A),ve(g,t,A),Q(n,g,A),ve(g,s,A),Q(r,g,A),ve(g,o,A),Q(a,g,A),ve(g,l,A),Q(c,g,A),ve(g,u,A),Q(f,g,A),ve(g,h,A),Q(p,g,A),ve(g,v,A),Q(m,g,A),ve(g,d,A),Q(_,g,A),ve(g,x,A),Q(w,g,A),ve(g,b,A),Q(S,g,A),y=!0},p(g,[A]){const P={};A&18&&(P.$$scope={dirty:A,ctx:g}),f.$set(P)},i(g){y||(j(e.$$.fragment,g),j(n.$$.fragment,g),j(r.$$.fragment,g),j(a.$$.fragment,g),j(c.$$.fragment,g),j(f.$$.fragment,g),j(p.$$.fragment,g),j(m.$$.fragment,g),j(_.$$.fragment,g),j(w.$$.fragment,g),j(S.$$.fragment,g),y=!0)},o(g){X(e.$$.fragment,g),X(n.$$.fragment,g),X(r.$$.fragment,g),X(a.$$.fragment,g),X(c.$$.fragment,g),X(f.$$.fragment,g),X(p.$$.fragment,g),X(m.$$.fragment,g),X(_.$$.fragment,g),X(w.$$.fragment,g),X(S.$$.fragment,g),y=!1},d(g){$(e,g),g&&_e(t),$(n,g),g&&_e(s),$(r,g),g&&_e(o),$(a,g),g&&_e(l),$(c,g),g&&_e(u),i[3](null),$(f,g),g&&_e(h),$(p,g),g&&_e(v),$(m,g),g&&_e(d),$(_,g),g&&_e(x),$(w,g),g&&_e(b),$(S,g)}}}function v_(i,e,t){let n,s;fn((a,l)=>{n.group.rotateY(l*(1/365)*100),s.group.rotateY(l*(1/30)*100)});function r(a){Ke[a?"unshift":"push"](()=>{s=a,t(1,s)})}function o(a){Ke[a?"unshift":"push"](()=>{n=a,t(0,n)})}return[n,s,r,o]}class ec extends Be{constructor(e){super(),ke(this,e,v_,__,Ue,{})}}function x_(i){let e,t;return e=new rt({props:{position:{x:2},material:new $e({map:Ma}),geometry:new it(.3)}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function b_(i){let e,t,n,s;e=new rt({props:{position:{x:15},material:new $e({map:va}),geometry:new it(1)}});let r={position:{x:15},$$slots:{default:[x_]},$$scope:{ctx:i}};return n=new Xn({props:r}),i[3](n),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment)},m(o,a){Q(e,o,a),ve(o,t,a),Q(n,o,a),s=!0},p(o,a){const l={};a&64&&(l.$$scope={dirty:a,ctx:o}),n.$set(l)},i(o){s||(j(e.$$.fragment,o),j(n.$$.fragment,o),s=!0)},o(o){X(e.$$.fragment,o),X(n.$$.fragment,o),s=!1},d(o){$(e,o),o&&_e(t),i[3](null),$(n,o)}}}function w_(i){let e,t,n,s,r,o,a,l,c,u,f,h,p,v,m,d,_,x,w,b;e=new rt({props:{material:new $e({map:Gn,lightMap:Gn,emissiveMap:Gn}),geometry:new it(2.5)}}),n=new jn({props:{intensity:2}}),r=new ln({props:{orbitRadius:5,planetRadius:.8,texture:wa,orbitSpeed:1.6}}),a=new ln({props:{orbitRadius:10,planetRadius:.9,texture:ya,orbitSpeed:1.3}}),c=new rt({props:{material:new $e({transparent:!0,opacity:.05,color:"#dddddd"}),geometry:new it(15)}});let S={$$slots:{default:[b_]},$$scope:{ctx:i}};f=new Xn({props:S}),i[4](f),p=new ln({props:{orbitRadius:25,planetRadius:.8,texture:ba,orbitSpeed:.5}}),m=new ln({props:{orbitRadius:30,planetRadius:2,texture:xa,orbitSpeed:.3}}),_=new ln({props:{orbitRadius:35,planetRadius:1.8,texture:Sa,orbitSpeed:.2}});let y={material:new $e({map:Ta,color:"#dddddd",side:Jt}),geometry:new it(200)};return w=new rt({props:y}),i[5](w),{c(){ee(e.$$.fragment),t=xe(),ee(n.$$.fragment),s=xe(),ee(r.$$.fragment),o=xe(),ee(a.$$.fragment),l=xe(),ee(c.$$.fragment),u=xe(),ee(f.$$.fragment),h=xe(),ee(p.$$.fragment),v=xe(),ee(m.$$.fragment),d=xe(),ee(_.$$.fragment),x=xe(),ee(w.$$.fragment)},m(M,g){Q(e,M,g),ve(M,t,g),Q(n,M,g),ve(M,s,g),Q(r,M,g),ve(M,o,g),Q(a,M,g),ve(M,l,g),Q(c,M,g),ve(M,u,g),Q(f,M,g),ve(M,h,g),Q(p,M,g),ve(M,v,g),Q(m,M,g),ve(M,d,g),Q(_,M,g),ve(M,x,g),Q(w,M,g),b=!0},p(M,[g]){const A={};g&68&&(A.$$scope={dirty:g,ctx:M}),f.$set(A);const P={};w.$set(P)},i(M){b||(j(e.$$.fragment,M),j(n.$$.fragment,M),j(r.$$.fragment,M),j(a.$$.fragment,M),j(c.$$.fragment,M),j(f.$$.fragment,M),j(p.$$.fragment,M),j(m.$$.fragment,M),j(_.$$.fragment,M),j(w.$$.fragment,M),b=!0)},o(M){X(e.$$.fragment,M),X(n.$$.fragment,M),X(r.$$.fragment,M),X(a.$$.fragment,M),X(c.$$.fragment,M),X(f.$$.fragment,M),X(p.$$.fragment,M),X(m.$$.fragment,M),X(_.$$.fragment,M),X(w.$$.fragment,M),b=!1},d(M){$(e,M),M&&_e(t),$(n,M),M&&_e(s),$(r,M),M&&_e(o),$(a,M),M&&_e(l),$(c,M),M&&_e(u),i[4](null),$(f,M),M&&_e(h),$(p,M),M&&_e(v),$(m,M),M&&_e(d),$(_,M),M&&_e(x),i[5](null),$(w,M)}}}function M_(i,e,t){let n,s,r;fn((c,u)=>{n.mesh.rotateY(u*.01),s.group.rotateY(u*1.2),r.group.rotateY(u*5)});function o(c){Ke[c?"unshift":"push"](()=>{r=c,t(2,r)})}function a(c){Ke[c?"unshift":"push"](()=>{s=c,t(1,s)})}function l(c){Ke[c?"unshift":"push"](()=>{n=c,t(0,n)})}return[n,s,r,o,a,l]}class S_ extends Be{constructor(e){super(),ke(this,e,M_,w_,Ue,{})}}function y_(i){let e,t;return e=new Vg({props:{enableZoom:!0,target:{x:0,y:0,z:0}}}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},p:je,i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function T_(i){let e,t;return e=new ec({}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function A_(i){let e,t;return e=new ec({}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function E_(i){let e,t;return e=new S_({}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function C_(i){let e,t;return e=new c_({}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function L_(i){let e,t;return e=new r_({}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function D_(i){let e,t;return e=new $0({}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function P_(i){let e,t;return e=new Z0({}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function R_(i){let e,t;return e=new G0({}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function I_(i){let e,t;return e=new U0({}),{c(){ee(e.$$.fragment)},m(n,s){Q(e,n,s),t=!0},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){X(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function O_(i){let e,t,n,s;const r=[I_,R_,P_,D_,L_,C_,E_,A_,T_],o=[];function a(l,c){return l[0]==0?0:l[0]==1?1:l[0]==2?2:l[0]==3?3:l[0]==4?4:l[0]==5?5:l[0]==6?6:l[0]==7?7:l[0]==8?8:-1}return~(e=a(i))&&(t=o[e]=r[e](i)),{c(){t&&t.c(),n=uc()},m(l,c){~e&&o[e].m(l,c),ve(l,n,c),s=!0},p(l,c){let u=e;e=a(l),e!==u&&(t&&(aa(),X(o[u],1,1,()=>{o[u]=null}),oa()),~e?(t=o[e],t||(t=o[e]=r[e](l),t.c()),j(t,1),t.m(n.parentNode,n)):t=null)},i(l){s||(j(t),s=!0)},o(l){X(t),s=!1},d(l){~e&&o[e].d(l),l&&_e(n)}}}function z_(i){let e,t,n,s,r,o,a,l,c;t=new Fg({props:{position:{x:0,y:100,z:200},$$slots:{default:[y_]},$$scope:{ctx:i}}}),s=new Hg({props:{pass:new Hi(void 0,1,1,.5)}}),o=new Jg({props:{intensity:.1}});let u={position:{x:-60},$$slots:{default:[O_]},$$scope:{ctx:i}};return l=new Xn({props:u}),i[3](l),{c(){e=Bt("div"),ee(t.$$.fragment),n=xe(),ee(s.$$.fragment),r=xe(),ee(o.$$.fragment),a=xe(),ee(l.$$.fragment),Vt(e,"class","scene svelte-c2sxid")},m(f,h){ve(f,e,h),Q(t,e,null),Lt(e,n),Q(s,e,null),Lt(e,r),Q(o,e,null),Lt(e,a),Q(l,e,null),c=!0},p(f,[h]){const p={};h&512&&(p.$$scope={dirty:h,ctx:f}),t.$set(p);const v={};h&513&&(v.$$scope={dirty:h,ctx:f}),l.$set(v)},i(f){c||(j(t.$$.fragment,f),j(s.$$.fragment,f),j(o.$$.fragment,f),j(l.$$.fragment,f),c=!0)},o(f){X(t.$$.fragment,f),X(s.$$.fragment,f),X(o.$$.fragment,f),X(l.$$.fragment,f),c=!1},d(f){f&&_e(e),$(t),$(s),$(o),i[3](null),$(l)}}}function F_(i,e,t){let{current:n}=e,{fps:s=0}=e;const{camera:r,scene:o,renderer:a}=Wt();a.toneMapping=ca,new it(1,50,50),new nr(new di(1,75));let l;fn((u,f)=>{t(2,s=1/f)});function c(u){Ke[u?"unshift":"push"](()=>{l=u,t(1,l)})}return i.$$set=u=>{"current"in u&&t(0,n=u.current),"fps"in u&&t(2,s=u.fps)},[n,l,s,c]}class N_ extends Be{constructor(e){super(),ke(this,e,F_,z_,Ue,{current:0,fps:2})}}function U_(i){let e,t,n;function s(o){i[2](o)}let r={current:i[0]};return i[1]!==void 0&&(r.fps=i[1]),e=new N_({props:r}),Ke.push(()=>Ht(e,"fps",s)),{c(){ee(e.$$.fragment)},m(o,a){Q(e,o,a),n=!0},p(o,a){const l={};a&1&&(l.current=o[0]),!t&&a&2&&(t=!0,l.fps=o[1],Gt(()=>t=!1)),e.$set(l)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){X(e.$$.fragment,o),n=!1},d(o){$(e,o)}}}function k_(i){let e,t,n,s,r,o,a;n=new gg({props:{$$slots:{default:[U_]},$$scope:{ctx:i}}});function l(u){i[6](u)}let c={fps:i[1],onNext:i[3],onPrev:i[4],onHome:i[5]};return i[0]!==void 0&&(c.current=i[0]),r=new kc({props:c}),Ke.push(()=>Ht(r,"current",l)),{c(){e=Bt("div"),t=Bt("div"),ee(n.$$.fragment),s=xe(),ee(r.$$.fragment),Vt(t,"class","scene svelte-4okwgi"),Vt(e,"class","app svelte-4okwgi")},m(u,f){ve(u,e,f),Lt(e,t),Q(n,t,null),Lt(e,s),Q(r,e,null),a=!0},p(u,[f]){const h={};f&131&&(h.$$scope={dirty:f,ctx:u}),n.$set(h);const p={};f&2&&(p.fps=u[1]),f&1&&(p.onNext=u[3]),f&1&&(p.onPrev=u[4]),f&1&&(p.onHome=u[5]),!o&&f&1&&(o=!0,p.current=u[0],Gt(()=>o=!1)),r.$set(p)},i(u){a||(j(n.$$.fragment,u),j(r.$$.fragment,u),a=!0)},o(u){X(n.$$.fragment,u),X(r.$$.fragment,u),a=!1},d(u){u&&_e(e),$(n),$(r)}}}function B_(i,e,t){let n=0,s=0;function r(u){s=u,t(1,s)}const o=()=>{t(0,n++,n),t(0,n%=9)},a=()=>{t(0,n--,n),n<0&&t(0,n=8)},l=()=>{t(0,n=0)};function c(u){n=u,t(0,n)}return[n,s,r,o,a,l,c]}class V_ extends Be{constructor(e){super(),ke(this,e,B_,k_,Ue,{})}}new V_({target:document.getElementById("app")});
