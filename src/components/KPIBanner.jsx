import React from 'react';
import { Compass, Activity, BarChart3, CheckCircle2 } from 'lucide-react';
import { CONSTITUENCIES } from '../data/constituencies';
import { t } from '../utils/translations';

export default function KPIBanner({ summary, constituencyId, language, onOpenAudit }) {
  const currentConst = CONSTITUENCIES[constituencyId] || CONSTITUENCIES.AJNALA;
  const isAjnala = constituencyId === 'AJNALA';
  const isRajaSansi = constituencyId === 'RAJA_SANSI';
  const isQadian = constituencyId === 'QADIAN';

  const totalBooths = currentConst.total_booths || (isAjnala ? 188 : (isRajaSansi ? 222 : 223));
  const tot24 = summary?.total_votes_2024?.toLocaleString() || (isAjnala ? '107,896' : (isRajaSansi ? '113,833' : '118,991'));
  
  const turnoutPct = isAjnala ? '67.5%' : (isRajaSansi ? '70.1%' : '72.1%');
  const turnoutShift = isAjnala ? '-11.2%' : (isRajaSansi ? '-14.6%' : '-9.5%');

  // Party #1 & #2 Stats (AAP is #1 in Ajnala with 35,344 votes; INC is #1 in Raja Sansi and Qadian)
  let p1Label, p1Votes, p1Sub, p1IconColor, p1Class;
  let p2Label, p2Votes, p2Sub, p2IconColor, p2Class;

  if (isAjnala) {
    // AAP is #1 winner in Ajnala (2024)
    p1Label = language === 'pa' ? 'ਆਪ (ਧਾਲੀਵਾਲ)' : 'AAP (DHALIWAL)';
    p1Votes = '35,344';
    p1Sub = language === 'pa' ? '● 92 ਜਿੱਤਾਂ (32.8% | +5,035 ਲੀਡ)' : '● 92 Wins (32.8% | +5,035 Lead)';
    p1IconColor = 'icon-blue';
    p1Class = 'aap-kpi';

    // INC is #2 in Ajnala (2024)
    p2Label = language === 'pa' ? 'ਕਾਂਗਰਸ (INC)' : 'CONGRESS (INC)';
    p2Votes = '30,309';
    p2Sub = language === 'pa' ? '● 65 ਜਿੱਤਾਂ (28.1% | 2024 ਮੁਕਾਬਲਾ)' : '● 65 Wins (28.1% | +27 vs ’22)';
    p2IconColor = 'icon-orange';
    p2Class = 'inc-kpi';
  } else if (isRajaSansi) {
    p1Label = language === 'pa' ? 'ਕਾਂਗਰਸ (INC)' : 'CONGRESS (INC)';
    p1Votes = '42,408';
    p1Sub = language === 'pa' ? '● 112 ਜਿੱਤਾਂ (37.3% | +4,543 ਲੀਡ)' : '● 112 Wins (37.3% | +4,543 Lead)';
    p1IconColor = 'icon-orange';
    p1Class = 'inc-kpi';

    p2Label = language === 'pa' ? 'ਆਪ (ਧਾਲੀਵਾਲ)' : 'AAP (DHALIWAL)';
    p2Votes = '37,865';
    p2Sub = language === 'pa' ? '● 69 ਜਿੱਤਾਂ (33.3% | +11 ਲਾਭ)' : '● 69 Wins (33.3% | +11 Gains)';
    p2IconColor = 'icon-blue';
    p2Class = 'aap-kpi';
  } else {
    p1Label = language === 'pa' ? 'ਕਾਂਗਰਸ (INC)' : 'CONGRESS (INC)';
    p1Votes = '41,806';
    p1Sub = language === 'pa' ? '● 111 ਜਿੱਤਾਂ (35.1% | +3,152 ਲੀਡ)' : '● 111 Wins (35.1% | +3,152 Lead)';
    p1IconColor = 'icon-orange';
    p1Class = 'inc-kpi';

    p2Label = language === 'pa' ? 'ਆਪ (ਕਲਸੀ)' : 'AAP (KALSI)';
    p2Votes = '38,654';
    p2Sub = language === 'pa' ? '● 81 ਜਿੱਤਾਂ (32.5% | +63 ਲਾਭ)' : '● 81 Wins (32.5% | +63 Gains)';
    p2IconColor = 'icon-blue';
    p2Class = 'aap-kpi';
  }

  return (
    <section className="dsidein-kpi-grid" aria-label="Election Highlights and Summary Metrics">
      {/* KPI 1: Live Telemetry & Polling Stations */}
      <div className="dsidein-kpi-card">
        <div className="kpi-top-row">
          <div className="kpi-icon-pill icon-blue">
            <Compass size={18} />
          </div>
        </div>
        <div className="kpi-label">
          {language === 'pa' ? 'ਕੁੱਲ ਪੋਲਿੰਗ ਸਟੇਸ਼ਨ' : 'POLLING STATIONS'}
        </div>
        <div className="kpi-value text-blue">
          {totalBooths} {language === 'pa' ? 'ਬੂਥ' : 'Booths'}
        </div>
        <div 
          className="kpi-sub-pill text-blue"
          onClick={onOpenAudit}
          style={{ cursor: onOpenAudit ? 'pointer' : 'default' }}
          title={language === 'pa' ? '100% ਆਡਿਟ ਰਿਪੋਰਟ ਖੋਲ੍ਹੋ' : 'Click to view 100% Numbering & Village Audit Report'}
        >
          ● {language === 'pa' ? '100% ਪ੍ਰਮਾਣਿਤ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਿਤ' : '100% Monitored & Verified'}
        </div>
      </div>

      {/* KPI 2: Total 2024 Turnout */}
      <div className="dsidein-kpi-card">
        <div className="kpi-top-row">
          <div className="kpi-icon-pill icon-orange">
            <Activity size={18} />
          </div>
        </div>
        <div className="kpi-label">
          {language === 'pa' ? '2024 ਕੁੱਲ ਵੈਧ ਵੋਟਾਂ' : '2024 VALID VOTES'}
        </div>
        <div className="kpi-value">{tot24}</div>
        <div className="kpi-sub-pill text-orange">
          ● {turnoutPct} {language === 'pa' ? 'ਪੋਲਿੰਗ' : 'Valid Polled'} ({turnoutShift} {language === 'pa' ? 'ਬਨਾਮ ’22' : 'vs ’22'})
        </div>
      </div>

      {/* KPI 3 */}
      <div className={`dsidein-kpi-card ${p1Class}`}>
        <div className="kpi-top-row">
          <div className={`kpi-icon-pill ${p1IconColor}`}>
            {isAjnala ? <CheckCircle2 size={18} /> : <BarChart3 size={18} />}
          </div>
        </div>
        <div className="kpi-label">{p1Label}</div>
        <div className={`kpi-value ${isAjnala ? 'text-blue' : 'text-orange'}`}>{p1Votes}</div>
        <div className={`kpi-sub-pill ${isAjnala ? 'text-blue' : 'text-orange'}`}>
          {p1Sub}
        </div>
      </div>

      {/* KPI 4 */}
      <div className={`dsidein-kpi-card ${p2Class}`}>
        <div className="kpi-top-row">
          <div className={`kpi-icon-pill ${p2IconColor}`}>
            {isAjnala ? <BarChart3 size={18} /> : <CheckCircle2 size={18} />}
          </div>
        </div>
        <div className="kpi-label">{p2Label}</div>
        <div className={`kpi-value ${isAjnala ? 'text-orange' : 'text-blue'}`}>{p2Votes}</div>
        <div className={`kpi-sub-pill ${isAjnala ? 'text-orange' : 'text-blue'}`}>
          {p2Sub}
        </div>
      </div>
    </section>
  );
}
