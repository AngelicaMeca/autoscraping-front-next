'use client';

import './hero-visual.css';

type Props = { className?: string };

export default function HeroVisualCaosOrden({ className = '' }: Props) {
  return (
    <div className={`hvco-stage ${className}`} aria-hidden="true">
      <div className="hvco-labels">
        <span className="hvco-pill hvco-pill--caos"><span className="hvco-dot" />HTML crudo</span>
        <span className="hvco-pill hvco-pill--orden"><span className="hvco-dot" />Datos listos</span>
      </div>

      <div className="hvco-split">
        <div className="hvco-caos">
          <div className="hvco-code">
            <div className="hvco-code-bar">
              <span /><span /><span />
              <span className="hvco-filename">product_listing.html</span>
            </div>
            <pre className="hvco-pre">
              <span className="hvco-ln"><span className="hvco-nm">01</span><span className="hvco-tag">{`<div`}</span> <span className="hvco-attr">class</span>=<span className="hvco-str">&quot;prod-card_v3&quot;</span><span className="hvco-tag">{`>`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">02</span>  <span className="hvco-tag">{`<span`}</span> <span className="hvco-attr">data-px</span>=<span className="hvco-str">&quot;$1.299,00&quot;</span><span className="hvco-tag">{`>`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">03</span>    <span className="hvco-strike">USD 1,299.00</span> <span className="hvco-err">{`<!--ARS?-->`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">04</span>  <span className="hvco-tag">{`</span`}</span><span className="hvco-err">  </span><span className="hvco-miss">[unclosed]</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">05</span>  <span className="hvco-tag">{`<img`}</span> <span className="hvco-attr">src</span>=<span className="hvco-str">&quot;data:image/...&quot;</span> <span className="hvco-err">{`/>`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">06</span>  <span className="hvco-tag">{`<script>`}</span><span className="hvco-txt">window.__d=</span><span className="hvco-err">{`{...}`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">07</span>  <span className="hvco-tag">{`</script>`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">08</span>  <span className="hvco-tag">{`<div`}</span> <span className="hvco-attr">class</span>=<span className="hvco-str">&quot;stk&quot;</span><span className="hvco-tag">{`>`}</span><span className="hvco-txt">Sin&nbsp;</span><span className="hvco-err">stoc</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">09</span>  <span className="hvco-tag">{`</div>`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">10</span>  <span className="hvco-tag">{`<a`}</span> <span className="hvco-attr">href</span>=<span className="hvco-str">{`"/p?id=8AF2&..."`}</span><span className="hvco-tag">{`>`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">11</span>    <span className="hvco-txt">Ver más</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">12</span>  <span className="hvco-tag">{`</a>`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">13</span><span className="hvco-tag">{`</div>`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">14</span><span className="hvco-err">{`// 403 Forbidden · retry #4`}</span></span>{'\n'}
              <span className="hvco-ln"><span className="hvco-nm">15</span><span className="hvco-err">{`// captcha detected`}</span></span>
            </pre>
          </div>
          <div className="hvco-scribbles">
            <span className="hvco-tag-err hvco-tag-err--t1">moneda mixta</span>
            <span className="hvco-tag-err hvco-tag-err--t2">tag sin cerrar</span>
            <span className="hvco-tag-err hvco-tag-err--t3">stock truncado</span>
          </div>
        </div>

        <div className="hvco-orden">
          <div className="hvco-card">
            <div className="hvco-card-head">
              <span>products.csv</span>
              <span className="hvco-sep">·</span>
              <span>1.842 filas</span>
              <span className="hvco-live"><span className="hvco-pulse" />live</span>
            </div>
            <table className="hvco-table">
              <thead>
                <tr><th>SKU</th><th>Producto</th><th>Precio</th><th>Stock</th></tr>
              </thead>
              <tbody>
                {([
                  ['8AF2-PR', 'Notebook 14"',     '1.299,00', 'in stock'],
                  ['9KX1-PR', 'Mouse inalámbrico', '24,90',   'in stock'],
                  ['3MQ7-PR', 'Monitor 27"',       '389,00',  'low'],
                  ['5VC3-PR', 'Teclado mecánico',  '119,50',  'in stock'],
                  ['7HD9-PR', 'Webcam 4K',         '89,00',   'in stock'],
                  ['2NB4-PR', 'Hub USB-C',         '45,00',   'in stock'],
                ] as [string, string, string, string][]).map(([sku, name, price, stock]) => (
                  <tr key={sku}>
                    <td>{sku}</td>
                    <td>{name}</td>
                    <td className="hvco-num">{price}</td>
                    <td><span className={`hvco-badge${stock === 'low' ? ' hvco-badge--low' : ''}`}>{stock}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="hvco-meta-row">
            <div className="hvco-meta">
              <div className="hvco-k">Frecuencia</div>
              <div className="hvco-v"><span className="hvco-accent">6h</span></div>
            </div>
            <div className="hvco-meta">
              <div className="hvco-k">Cobertura</div>
              <div className="hvco-v">99,7<span className="hvco-accent">%</span></div>
            </div>
            <div className="hvco-meta">
              <div className="hvco-k">Formato</div>
              <div className="hvco-v"><span className="hvco-pinkc">CSV</span> · API</div>
            </div>
          </div>
        </div>
      </div>

      <span className="hvco-stream" />
      <span className="hvco-stream hvco-stream--s2" />
      <span className="hvco-stream hvco-stream--s3" />
      <div className="hvco-ring hvco-ring--r2" />
      <div className="hvco-ring" />
      <div className="hvco-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </div>

      <div className="hvco-caption">
        <div className="hvco-cap-l">de <strong>HTML crudo</strong></div>
        <div className="hvco-cap-r">a <strong>datos listos</strong></div>
      </div>
    </div>
  );
}
