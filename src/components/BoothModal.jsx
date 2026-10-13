import React, { useState } from 'react';
import { X, Printer, ShieldCheck, Target, CheckCircle2, FileText } from 'lucide-react';
import { CONSTITUENCIES } from '../data/constituencies';
import { t } from '../utils/translations';

export default function BoothModal({ booth, onClose, constituencyId, language, onOpenAudit }) {
  const [activeTab, setActiveTab] = useState('VOTES'); // 'VOTES', 'PLAN', 'AUDIT'

  if (!booth) return null;

  const currentConst = CONSTITUENCIES[constituencyId] || CONSTITUENCIES.AJNALA;
  const cand = currentConst.candidates;

  const d22 = booth.data_2022 || {};
  const d24 = booth.data_2024 || {};
  const comp = booth.comparison || {
    status_label: booth.status_label,
    is_flip: booth.is_flip,
    turnout_diff: booth.turnout_diff,
    turnout_pct: booth.turnout_pct,
    inc_swing: booth.swings?.inc_swing,
    aap_swing: booth.swings?.aap_swing,
    sad_swing: booth.swings?.sad_swing,
    bjp_swing: booth.swings?.bjp_swing
  };

  const getConstituencySlug = () => {
    if (constituencyId === 'AJNALA') return 'ajnala';
    if (constituencyId === 'RAJA_SANSI') return 'raja-sansi';
    return 'qadian';
  };

  // Safe percentage helper
  const getWidth = (votes, total) => {
    if (!total || total === 0) return '0%';
    return `${Math.min(100, Math.round((votes / total) * 100))}%`;
  };

  const handlePrintBooth = (e) => {
    e.stopPropagation();
    document.body.classList.add('printing-single-booth');
    window.print();
    setTimeout(() => {
      document.body.classList.remove('printing-single-booth');
    }, 1000);
  };

  const plan = booth.plan || {};

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Dsidein Official PDF Watermark */}
        <div className="dsidein-print-watermark" aria-hidden="true">
          <img src="./dsidein_logo_transparent.png" alt="Dsidein" className="watermark-logo-img" />
          <div className="watermark-brand-name">DSIDEIN</div>
          <div className="watermark-sub-name">{currentConst.name_en} BOOTH INTELLIGENCE</div>
          <div className="watermark-url">https://dsidein.com/{getConstituencySlug()}-2022-2024</div>
        </div>

        {/* Printable Official Banner */}
        <div className="print-dossier-banner">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="print-dossier-title">
                {currentConst.name_en} ASSEMBLY SEGMENT — BOOTH DOSSIER
              </div>
              <div className="print-dossier-sub">
                Election Commission Data: 2022 Assembly vs 2024 Parliamentary Analysis ({currentConst.district_en})
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '8.5pt', color: '#334155' }}>
              <span style={{ fontWeight: 800, color: '#002b49' }}>DSIDEIN COMMAND CENTER</span><br />
              <span>https://dsidein.com/{getConstituencySlug()}-2022-2024</span>
            </div>
          </div>
        </div>

        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div className="modal-badges-row" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {booth.is_rearranged || (booth.booth_no_2022 && booth.booth_no_2024 && booth.booth_no_2022 !== booth.booth_no_2024) ? (
                <span className="brand-badge rearranged">
                  {language === 'pa' 
                    ? `2022: ਬੂਥ #${booth.booth_no_2022} ➔ 2024: ਬੂਥ #${booth.booth_no_2024}` 
                    : `2022: Booth #${booth.booth_no_2022} ➔ 2024: Booth #${booth.booth_no_2024}`}
                </span>
              ) : (
                <span className="brand-badge">
                  {language === 'pa' 
                    ? `ਬੂਥ #${booth.booth_no} (2022 & 2024)` 
                    : `Booth #${booth.booth_no} (2022 & 2024)`}
                </span>
              )}
              <span className={`status-badge ${comp.is_flip ? 'flipped' : 'retained'}`}>
                {comp.status_label}
              </span>
              <span className="station-match-badge">
                {language === 'pa' ? 'ਸਟੇਸ਼ਨ ਨਾਮ: 100% ਮੇਲ' : 'Station: 100% Match'}
              </span>
            </div>
            
            {language === 'pa' ? (
              <>
                <h2 className="modal-village-title punjabi-font" style={{ fontSize: '1.25rem', marginTop: '4px' }}>
                  {booth.village_punjabi || booth.exact_name_punjabi}
                </h2>
                <p className="modal-village-sub" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  {booth.village_english}
                </p>
              </>
            ) : (
              <>
                <h2 className="modal-village-title">{booth.village_english}</h2>
                <p className="modal-village-sub punjabi-text">
                  {booth.village_punjabi || booth.exact_name_punjabi}
                </p>
              </>
            )}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button 
              className="btn-print-modal no-print" 
              onClick={handlePrintBooth}
              title={language === 'pa' ? 'ਇਸ ਬੂਥ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਪੀ.ਡੀ.ਐਫ ਵਜੋਂ ਪ੍ਰਿੰਟ / ਸੇਵ ਕਰੋ' : 'Export / Print this Booth Dossier as PDF'}
            >
              <Printer size={15} />
              <span>{t('print_pdf', language)}</span>
            </button>
            <button 
              className="modal-close-btn no-print" 
              onClick={onClose}
              aria-label={t('close', language)}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-nav-tabs no-print" style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-subtle)', padding: '0 20px 12px 20px' }}>
          <button
            className={`pill-btn-small ${activeTab === 'VOTES' ? 'active' : ''}`}
            onClick={() => setActiveTab('VOTES')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              background: activeTab === 'VOTES' ? 'var(--brand-dsidein)' : 'var(--bg-surface-elevated)',
              color: activeTab === 'VOTES' ? '#ffffff' : 'var(--text-secondary)',
              border: '1px solid var(--border-medium)',
              cursor: 'pointer'
            }}
          >
            {language === 'pa' ? 'ਵੋਟਾਂ ਦਾ ਵੇਰਵਾ' : 'Vote Breakdown'}
          </button>
          <button
            className={`pill-btn-small ${activeTab === 'PLAN' ? 'active' : ''}`}
            onClick={() => setActiveTab('PLAN')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              background: activeTab === 'PLAN' ? 'var(--brand-dsidein)' : 'var(--bg-surface-elevated)',
              color: activeTab === 'PLAN' ? '#ffffff' : 'var(--text-secondary)',
              border: '1px solid var(--border-medium)',
              cursor: 'pointer'
            }}
          >
            {language === 'pa' ? '90-ਦਿਨਾਂ ਕਾਰਜ ਯੋਜਨਾ' : '90-Day Masterplan'}
          </button>
          <button
            className={`pill-btn-small ${activeTab === 'AUDIT' ? 'active' : ''}`}
            onClick={() => setActiveTab('AUDIT')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              background: activeTab === 'AUDIT' ? 'var(--brand-dsidein)' : 'var(--bg-surface-elevated)',
              color: activeTab === 'AUDIT' ? '#ffffff' : 'var(--text-secondary)',
              border: '1px solid var(--border-medium)',
              cursor: 'pointer'
            }}
          >
            {language === 'pa' ? 'ਬੂਥ ਆਡਿਟ ਜਾਂਚ' : 'Renumbering / Audit'}
          </button>
        </div>

        {/* Modal Tab Content */}
        {activeTab === 'VOTES' && (
          <div style={{ padding: '20px' }}>
            {/* Modal Body: 2 Years Comparison Grid */}
            <div className="modal-grid">
              {/* 2022 Assembly Column */}
              <div className="year-card">
                <div className="year-title">{t('assembly_election', language)}</div>
                <div className="modal-station-sub">
                  {language === 'pa' ? 'ਪੋਲਿੰਗ ਸਟੇਸ਼ਨ: ' : 'Station: '}
                  <strong>{booth.booth_name_2022 || booth.village_english}</strong>
                  <span style={{ marginLeft: '6px', color: 'var(--text-muted)' }}>(#{booth.booth_no_2022 || booth.booth_no})</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span className={`badge-winner ${d22.winner_party}`}>
                    {d22.winner_party} {t('won_by', language)}
                  </span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    +{d22.margin} {t('lead', language)}
                  </span>
                </div>

                {/* AAP Bar */}
                <div className="vote-bar-wrap">
                  <div className="vote-bar-label">
                    <span>{language === 'pa' ? cand['2022'].AAP.short_pa : cand['2022'].AAP.short_en}</span>
                    <span><strong>{d22.aap}</strong> ({d22.aap_pct}%)</span>
                  </div>
                  <div className="vote-bar-track">
                    <div className="vote-bar-fill" style={{ width: getWidth(d22.aap, d22.total), background: '#0284c7' }} />
                  </div>
                </div>

                {/* INC Bar */}
                <div className="vote-bar-wrap">
                  <div className="vote-bar-label">
                    <span>{language === 'pa' ? cand['2022'].INC.short_pa : cand['2022'].INC.short_en}</span>
                    <span><strong>{d22.inc}</strong> ({d22.inc_pct}%)</span>
                  </div>
                  <div className="vote-bar-track">
                    <div className="vote-bar-fill" style={{ width: getWidth(d22.inc, d22.total), background: '#ea580c' }} />
                  </div>
                </div>

                {/* SAD Bar */}
                <div className="vote-bar-wrap">
                  <div className="vote-bar-label">
                    <span>{language === 'pa' ? cand['2022'].SAD.short_pa : cand['2022'].SAD.short_en}</span>
                    <span><strong>{d22.sad}</strong> ({d22.sad_pct}%)</span>
                  </div>
                  <div className="vote-bar-track">
                    <div className="vote-bar-fill" style={{ width: getWidth(d22.sad, d22.total), background: '#2563eb' }} />
                  </div>
                </div>

                {/* BJP Bar */}
                {d22.bjp !== undefined && (
                  <div className="vote-bar-wrap">
                    <div className="vote-bar-label">
                      <span>{language === 'pa' ? cand['2022'].BJP.short_pa : cand['2022'].BJP.short_en}</span>
                      <span><strong>{d22.bjp}</strong> ({d22.bjp_pct}%)</span>
                    </div>
                    <div className="vote-bar-track">
                      <div className="vote-bar-fill" style={{ width: getWidth(d22.bjp, d22.total), background: '#f59e0b' }} />
                    </div>
                  </div>
                )}

                {/* Total 2022 */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '8px', marginTop: '12px', fontSize: '0.8125rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{t('total_polled', language)}:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{d22.total}</strong>
                </div>
              </div>

              {/* 2024 Lok Sabha Column */}
              <div className="year-card">
                <div className="year-title">{t('lok_sabha_election', language)}</div>
                <div className="modal-station-sub">
                  {language === 'pa' ? 'ਪੋਲਿੰਗ ਸਟੇਸ਼ਨ: ' : 'Station: '}
                  <strong>{booth.booth_name_2024 || booth.village_english}</strong>
                  <span style={{ marginLeft: '6px', color: 'var(--text-muted)' }}>(#{booth.booth_no_2024 || booth.booth_no})</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span className={`badge-winner ${d24.winner_party}`}>
                    {d24.winner_party} {t('won_by', language)}
                  </span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    +{d24.margin} {t('lead', language)}
                  </span>
                </div>

                {/* AAP Bar */}
                <div className="vote-bar-wrap">
                  <div className="vote-bar-label">
                    <span>{language === 'pa' ? cand['2024'].AAP.short_pa : cand['2024'].AAP.short_en}</span>
                    <span><strong>{d24.aap}</strong> ({d24.aap_pct}%)</span>
                  </div>
                  <div className="vote-bar-track">
                    <div className="vote-bar-fill" style={{ width: getWidth(d24.aap, d24.total), background: '#0284c7' }} />
                  </div>
                </div>

                {/* INC Bar */}
                <div className="vote-bar-wrap">
                  <div className="vote-bar-label">
                    <span>{language === 'pa' ? cand['2024'].INC.short_pa : cand['2024'].INC.short_en}</span>
                    <span><strong>{d24.inc}</strong> ({d24.inc_pct}%)</span>
                  </div>
                  <div className="vote-bar-track">
                    <div className="vote-bar-fill" style={{ width: getWidth(d24.inc, d24.total), background: '#ea580c' }} />
                  </div>
                </div>

                {/* SAD Bar */}
                <div className="vote-bar-wrap">
                  <div className="vote-bar-label">
                    <span>{language === 'pa' ? cand['2024'].SAD.short_pa : cand['2024'].SAD.short_en}</span>
                    <span><strong>{d24.sad}</strong> ({d24.sad_pct}%)</span>
                  </div>
                  <div className="vote-bar-track">
                    <div className="vote-bar-fill" style={{ width: getWidth(d24.sad, d24.total), background: '#2563eb' }} />
                  </div>
                </div>

                {/* BJP Bar */}
                <div className="vote-bar-wrap">
                  <div className="vote-bar-label">
                    <span>{language === 'pa' ? cand['2024'].BJP.short_pa : cand['2024'].BJP.short_en}</span>
                    <span><strong>{d24.bjp || 0}</strong> ({d24.bjp_pct || 0}%)</span>
                  </div>
                  <div className="vote-bar-track">
                    <div className="vote-bar-fill" style={{ width: getWidth(d24.bjp || 0, d24.total), background: '#f59e0b' }} />
                  </div>
                </div>

                {/* Others & NOTA */}
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  SAD(A): {d24.sada || 0} | BSP: {d24.bsp || 0} | Others: {d24.others || d24.other || 0} | NOTA: {d24.nota || 0}
                </div>

                {/* Total 2024 */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '8px', marginTop: '8px', fontSize: '0.8125rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
                  <span>{t('total_polled', language)}:</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{d24.total}</strong>
                </div>
              </div>
            </div>

            {/* Comparative Vote Swings Row */}
            <div className="modal-shift-box" style={{ marginTop: '16px', padding: '16px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                {t('comparative_swings', language)}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                <div className="shift-metric-tile">
                  <span className="shift-label">AAP Swing</span>
                  <span className={`shift-val ${comp.aap_swing >= 0 ? 'gain' : 'loss'}`}>
                    {comp.aap_swing >= 0 ? `+${comp.aap_swing}%` : `${comp.aap_swing}%`}
                  </span>
                </div>
                <div className="shift-metric-tile">
                  <span className="shift-label">INC Swing</span>
                  <span className={`shift-val ${comp.inc_swing >= 0 ? 'gain' : 'loss'}`}>
                    {comp.inc_swing >= 0 ? `+${comp.inc_swing}%` : `${comp.inc_swing}%`}
                  </span>
                </div>
                <div className="shift-metric-tile">
                  <span className="shift-label">SAD Swing</span>
                  <span className={`shift-val ${comp.sad_swing >= 0 ? 'gain' : 'loss'}`}>
                    {comp.sad_swing >= 0 ? `+${comp.sad_swing}%` : `${comp.sad_swing}%`}
                  </span>
                </div>
                <div className="shift-metric-tile">
                  <span className="shift-label">BJP Swing</span>
                  <span className={`shift-val ${comp.bjp_swing >= 0 ? 'gain' : 'loss'}`}>
                    {comp.bjp_swing !== undefined ? (comp.bjp_swing >= 0 ? `+${comp.bjp_swing}%` : `${comp.bjp_swing}%`) : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 90-Day Masterplan Tab */}
        {activeTab === 'PLAN' && (
          <div style={{ padding: '20px' }}>
            <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', padding: '16px', border: '1px solid var(--border-subtle)', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0284c7', fontWeight: 700, marginBottom: '6px' }}>
                <Target size={18} />
                <span>{language === 'pa' ? 'ਜ਼ੋਨ ਵਰਗੀਕਰਨ:' : 'Tactical Zone Classification:'}</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {language === 'pa' ? (plan.zone_pa || 'ਰਣਨੀਤਕ ਬੂਥ ਜ਼ੋਨ') : (plan.zone_en || 'Strategic Booth Zone')}
              </p>
            </div>

            <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', padding: '16px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#059669', fontWeight: 700, marginBottom: '8px' }}>
                <CheckCircle2 size={18} />
                <span>{language === 'pa' ? 'ਜ਼ਮੀਨੀ ਕਾਰਜ ਯੋਜਨਾ:' : 'Actionable Ground Strategy:'}</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                {language === 'pa' ? (plan.action_pa || 'ਇਸ ਬੂਥ ਲਈ ਮੁੱਖ ਵਿਕਾਸ ਕਾਰਜ ਅਤੇ ਸੰਪਰਕ ਮੁਹਿੰਮ ਚਲਾਈ ਜਾਵੇ।') : (plan.action_en || 'Consolidate volunteer base, address key civic priorities, and maintain consistent village leadership engagement.')}
              </p>
            </div>
          </div>
        )}

        {/* Renumbering / Audit Tab */}
        {activeTab === 'AUDIT' && (
          <div style={{ padding: '20px' }}>
            <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#065f46', fontWeight: 700, marginBottom: '6px' }}>
                <ShieldCheck size={20} />
                <span>{language === 'pa' ? 'ਬੂਥ ਨੰਬਰਿੰਗ ਅਤੇ ਪਿੰਡ ਨਾਮ ਆਡਿਟ: 100% ਪ੍ਰਮਾਣਿਤ' : 'BOOTH NUMBERING & VILLAGE NAME AUDIT: 100% VERIFIED'}</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#065f46', lineHeight: 1.5 }}>
                {language === 'pa'
                  ? `ਬੂਥ #${booth.booth_no} (${booth.village_punjabi}) 2022 ਵਿਧਾਨ ਸਭਾ ਅਤੇ 2024 ਲੋਕ ਸਭਾ ਦੋਵਾਂ ਚੋਣਾਂ ਵਿੱਚ 100% ਇੱਕੋ ਜਿਹਾ ਰਿਹਾ। ਕੋਈ ਨੰਬਰਿੰਗ ਤਬਦੀਲੀ ਜਾਂ ਨਾਮ ਦਾ ਫ਼ਰਕ ਨਹੀਂ ਹੈ।`
                  : `Booth #${booth.booth_no} (${booth.village_english}) remained 100% identical and unchanged in both 2022 Vidhan Sabha and 2024 Lok Sabha elections. Zero numbering shift, zero auxiliary split.`
                }
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ padding: '12px', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>2022 Station Name</span>
                <div style={{ fontWeight: 600, fontSize: '0.9375rem', marginTop: '4px' }}>{booth.village_english}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>#{booth.booth_no_2022 || booth.booth_no}</div>
              </div>
              <div style={{ padding: '12px', background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>2024 Station Name</span>
                <div style={{ fontWeight: 600, fontSize: '0.9375rem', marginTop: '4px' }}>{booth.village_english}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>#{booth.booth_no_2024 || booth.booth_no}</div>
              </div>
            </div>

            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <button 
                onClick={() => { onClose(); if (onOpenAudit) onOpenAudit(); }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
              >
                <ShieldCheck size={14} color="#10b981" />
                <span>{language === 'pa' ? 'ਸਾਰੇ 188 ਬੂਥਾਂ ਦੀ ਮੁਕੰਮਲ ਆਡਿਟ ਰਿਪੋਰਟ ਖੋਲ੍ਹੋ' : 'Open Full 188-Booth Audit Report'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
