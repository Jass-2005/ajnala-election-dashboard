// 11-Ajnala Bilingual Localization Dictionary (English & Gurmukhi Punjabi)

export const translations = {
  en: {
    // Header
    header_section: 'DASHBOARD',
    header_crumb: '11-AJNALA',
    search_placeholder_desktop: 'Search 188 booths, localities, numbers...',
    search_placeholder_mobile: 'Search booth number, village, or locality...',
    theme_switch_light: 'Switch to Light Mode',
    theme_switch_dark: 'Switch to Dark Mode',
    lang_name: 'English',
    lang_code: 'EN',

    // Sidebar
    nav_dashboard: 'Dashboard',
    nav_party_hub: 'Party Hub',
    nav_booths: '188 Booths',
    nav_audit: 'Booth Audit',
    nav_analytics: 'Analytics',
    nav_master_excel: 'Master Excel',
    nav_exec_report: 'Executive Report',
    nav_portal: 'Dsidein Portal',

    // Title Bar & Actions
    segment_tag: '11-AJNALA ASSEMBLY SEGMENT',
    main_title: 'Comparative Booth Intelligence',
    main_subtitle: '2022 Vidhan Sabha vs 2024 Lok Sabha Polling Telemetry across all 188 Polling Stations (Amritsar PC)',
    action_excel: 'Master Excel',
    action_excel_title: 'Download Master Analysis Spreadsheet (Excel .xlsx with AAP/INC/SAD/BJP Sheets)',
    action_audit: 'Booth Numbering Audit',
    action_audit_title: 'View Strict Booth Numbering Alignment Verification between 2022 & 2024',
    action_export_pdf: 'Export PDF',
    action_export_pdf_title: 'Export Current View as PDF with Dsidein Watermark',

    // Renumbering / Alignment Audit Banner
    audit_banner_title: 'BOOTH NUMBERING AUDIT: 100% IDENTICAL IN BOTH ELECTIONS',
    audit_banner_desc: 'Strict sequential and mathematical analysis proves Booths #1 to #188 remained 100% unchanged between 2022 Vidhan Sabha and 2024 Lok Sabha. Correlation: 0.9148. Zero auxiliary/split booths.',
    audit_banner_btn: 'View Full Audit Report',

    // KPI Cards
    kpi_booths_label: 'POLLING STATIONS',
    kpi_booths_val: '188 Booths',
    kpi_booths_sub: '● 100% Monitored & Verified',
    kpi_evm_label: '2024 EVM POLLED',
    kpi_evm_val: '107,896',
    kpi_evm_sub: '● 100% Form-20 EVM Match',
    kpi_aap_label: 'AAP (KULDEEP DHALIWAL)',
    kpi_aap_val: '35,344',
    kpi_aap_sub: '● 92 Wins (32.8% Share | +5,035 Lead)',
    kpi_inc_label: 'INC (GURJEET AUJLA)',
    kpi_inc_val: '30,309',
    kpi_inc_sub: '● 65 Wins (28.1% Share | Runner-up)',
    kpi_sad_label: 'SAD (ANIL JOSHI)',
    kpi_sad_val: '17,946',
    kpi_sad_sub: '● 12 Wins (16.6% Share | 3rd)',
    kpi_bjp_label: 'BJP (TARANJIT SANDHU)',
    kpi_bjp_val: '14,404',
    kpi_bjp_sub: '● 19 Wins (13.4% Share | 4th)',

    // Registry Header & Toolbar
    registry_title: 'Booth Performance Registry',
    registry_subtitle: 'Detailed booth-by-booth vote tally, turnout, winners, and margin shifts across 11-Ajnala',
    booths_count: 'Booths',
    reset_all: 'Reset All',
    search_registry_all: 'Search all 188 booths by number or locality (e.g. 1, 50, Ajnala, Ramdas)...',
    search_registry_party: 'Search {party} performance by booth no. or locality...',
    sort_order_label: 'Sort order',
    label_booth_2024: '2024 Booth',
    label_booth_2022: '2022 Booth',
    pill_unchanged: 'Unchanged (1-to-1)',

    // Party Tabs
    tab_all: 'All 188 Booths',
    tab_aap: 'AAP Analysis',
    tab_inc: 'INC Analysis',
    tab_sad: 'SAD Analysis',
    tab_bjp: 'BJP Analysis',

    // Quick Filters
    filter_all: 'All',
    filter_aap_wins: 'AAP Wins (92)',
    filter_inc_wins: 'INC Wins (65)',
    filter_bjp_wins: 'BJP Wins (19)',
    filter_sad_wins: 'SAD Wins (12)',
    filter_flipped: 'Flipped (92)',
    filter_retained: 'Retained (96)',

    // Sort Options
    sort_booth_asc: 'Booth No (1 → 188)',
    sort_booth_desc: 'Booth No (188 → 1)',
    sort_turnout_desc: 'Turnout 2024 (High → Low)',
    sort_turnout_asc: 'Turnout 2024 (Low → High)',
    sort_margin_desc: 'Lead Margin (Highest Win)',
    sort_aap_desc: 'AAP Votes (High → Low)',
    sort_inc_desc: 'INC Votes (High → Low)',
    sort_sad_desc: 'SAD Votes (High → Low)',
    sort_bjp_desc: 'BJP Votes (High → Low)',

    // Table Headers
    th_no: 'Booth',
    th_locality: 'Locality / Polling Station',
    th_winner_22: '2022 Winner',
    th_winner_24: '2024 Winner',
    th_status: 'Transition',
    th_turnout: '2024 Turnout',
    th_shift: 'Turnout Shift',
    th_action: 'Details',

    // Modal
    modal_title: 'Booth Intelligence Dossier',
    modal_telemetry: 'Vote Telemetry & Strategic Analysis',
    modal_tab_telemetry: 'Vote Breakdown',
    modal_tab_strategy: '90-Day Masterplan',
    modal_tab_audit: 'Numbering Audit',
    modal_close: 'Close',

    // Masterplan in Modal
    mp_strategic_zone: 'Strategic Action Zone',
    mp_core_directives: 'Core Tactical Directives',
    mp_phased_milestones: '90-Day Tactical Phased Roadmap',
    mp_phase_1: 'Phase 1: Days 1-30',
    mp_phase_2: 'Phase 2: Days 31-60',
    mp_phase_3: 'Phase 3: Days 61-90',

    // Audit Info
    audit_title: 'Strict Booth Numbering Verification Audit',
    audit_summary: 'In 11-Ajnala, both the 2022 Vidhan Sabha and 2024 Lok Sabha elections had exactly 188 active polling stations with identical 1-to-1 sequencing (#1 to #188). Unlike other constituencies that had auxiliary booths (e.g. 27A in Majitha) or urban boundary shifts (Amritsar South), Ajnala had zero renumbering.',
    audit_stat_correl: 'Turnout Correlation (2022 vs 2024)',
    audit_stat_diff: 'Booth Count Difference',
    audit_stat_status: 'Alignment Status'
  },

  pa: {
    // Header
    header_section: 'ਡੈਸ਼ਬੋਰਡ',
    header_crumb: '11-ਅਜਨਾਲਾ',
    search_placeholder_desktop: 'ਸਾਰੇ 188 ਬੂਥ, ਪਿੰਡ ਜਾਂ ਨੰਬਰ ਖੋਜੋ...',
    search_placeholder_mobile: 'ਬੂਥ ਨੰਬਰ, ਪਿੰਡ ਜਾਂ ਮੁਹੱਲਾ ਖੋਜੋ...',
    theme_switch_light: 'ਲਾਈਟ ਮੋਡ ਚੁਣੋ',
    theme_switch_dark: 'ਡਾਰਕ ਮੋਡ ਚੁਣੋ',
    lang_name: 'ਪੰਜਾਬੀ',
    lang_code: 'ਪੰਜਾਬੀ',

    // Sidebar
    nav_dashboard: 'ਡੈਸ਼ਬੋਰਡ',
    nav_party_hub: 'ਪਾਰਟੀ ਹੱਬ',
    nav_booths: '188 ਬੂਥ',
    nav_audit: 'ਬੂਥ ਆਡਿਟ',
    nav_analytics: 'ਵਿਸ਼ਲੇਸ਼ਣ',
    nav_master_excel: 'ਮਾਸਟਰ ਐਕਸਲ',
    nav_exec_report: 'ਐਗਜ਼ੈਕਟਿਵ ਰਿਪੋਰਟ',
    nav_portal: 'ਡੀਸਾਈਡਇਨ ਪੋਰਟਲ',

    // Title Bar & Actions
    segment_tag: '11-ਅਜਨਾਲਾ ਵਿਧਾਨ ਸਭਾ ਹਲਕਾ',
    main_title: 'ਤੁਲਨਾਤਮਕ ਬੂਥ ਇੰਟੈਲੀਜੈਂਸ',
    main_subtitle: 'ਅੰਮ੍ਰਿਤਸਰ ਲੋਕ ਸਭਾ ਸੀਟ ਅਧੀਨ ਸਾਰੇ 188 ਬੂਥਾਂ ਦਾ 2022 ਬਨਾਮ 2024 ਪੋਲਿੰਗ ਡਾਟਾ ਵਿਸ਼ਲੇਸ਼ਣ',
    action_excel: 'ਮਾਸਟਰ ਐਕਸਲ',
    action_excel_title: 'ਸੰਪੂਰਨ ਵਿਸ਼ਲੇਸ਼ਣ ਸਪਰੈੱਡਸ਼ੀਟ ਡਾਊਨਲੋਡ ਕਰੋ (ਐਕਸਲ .xlsx)',
    action_audit: 'ਬੂਥ ਨੰਬਰਿੰਗ ਆਡਿਟ',
    action_audit_title: '2022 ਅਤੇ 2024 ਵਿਚਕਾਰ ਬੂਥ ਨੰਬਰਾਂ ਦੀ ਸਖ਼ਤ ਜਾਂਚ ਵੇਖੋ',
    action_export_pdf: 'ਪੀ.ਡੀ.ਐੱਫ ਐਕਸਪੋਰਟ',
    action_export_pdf_title: 'ਵਾਟਰਮਾਰਕ ਸਮੇਤ ਪੀ.ਡੀ.ਐੱਫ ਡਾਊਨਲੋਡ ਕਰੋ',

    // Renumbering / Alignment Audit Banner
    audit_banner_title: 'ਬੂਥ ਨੰਬਰਿੰਗ ਆਡਿਟ: ਦੋਵਾਂ ਚੋਣਾਂ ਵਿੱਚ 100% ਇੱਕੋ ਜਿਹੇ',
    audit_banner_desc: 'ਸਖ਼ਤ ਵਿਗਿਆਨਕ ਅਤੇ ਗਣਿਤਕ ਵਿਸ਼ਲੇਸ਼ਣ ਨੇ ਸਿੱਧ ਕੀਤਾ ਹੈ ਕਿ 2022 ਵਿਧਾਨ ਸਭਾ ਅਤੇ 2024 ਲੋਕ ਸਭਾ ਵਿੱਚ ਬੂਥ ਨੰਬਰ 1 ਤੋਂ 188 ਬਿਲਕੁਲ ਇੱਕੋ ਜਿਹੇ ਅਤੇ ਅਣਬਦਲੇ ਰਹੇ। ਸਹਿ-ਸੰਬੰਧ 0.9148 ਹੈ। ਕੋਈ ਸਹਾਇਕ ਜਾਂ ਵੰਡਿਆ ਬੂਥ ਨਹੀਂ ਹੈ।',
    audit_banner_btn: 'ਪੂਰੀ ਆਡਿਟ ਰਿਪੋਰਟ ਵੇਖੋ',

    // KPI Cards
    kpi_booths_label: 'ਪੋਲਿੰਗ ਸਟੇਸ਼ਨ',
    kpi_booths_val: '188 ਬੂਥ',
    kpi_booths_sub: '● 100% ਪ੍ਰਮਾਣਿਤ ਤੇ ਨਿਰੀਖਣ ਕੀਤਾ',
    kpi_evm_label: '2024 ਕੁੱਲ ਈ.ਵੀ.ਐੱਮ ਵੋਟਾਂ',
    kpi_evm_val: '1,07,896',
    kpi_evm_sub: '● 100% ਫਾਰਮ-20 ਨਾਲ ਮੇਲ',
    kpi_aap_label: 'ਆਪ (ਕੁਲਦੀਪ ਸਿੰਘ ਧਾਲੀਵਾਲ)',
    kpi_aap_val: '35,344',
    kpi_aap_sub: '● 92 ਜਿੱਤਾਂ (32.8% ਹਿੱਸਾ | +5,035 ਲੀਡ)',
    kpi_inc_label: 'ਕਾਂਗਰਸ (ਗੁਰਜੀਤ ਸਿੰਘ ਔਜਲਾ)',
    kpi_inc_val: '30,309',
    kpi_inc_sub: '● 65 ਜਿੱਤਾਂ (28.1% ਹਿੱਸਾ | ਦੂਜਾ ਨੰਬਰ)',
    kpi_sad_label: 'ਅਕਾਲੀ ਦਲ (ਅਨਿਲ ਜੋਸ਼ੀ)',
    kpi_sad_val: '17,946',
    kpi_sad_sub: '● 12 ਜਿੱਤਾਂ (16.6% ਹਿੱਸਾ | ਤੀਜਾ ਨੰਬਰ)',
    kpi_bjp_label: 'ਭਾਜਪਾ (ਤਰਨਜੀਤ ਸਿੰਘ ਸੰਧੂ)',
    kpi_bjp_val: '14,404',
    kpi_bjp_sub: '● 19 ਜਿੱਤਾਂ (13.4% ਹਿੱਸਾ | ਚੌਥਾ ਨੰਬਰ)',

    // Registry Header & Toolbar
    registry_title: 'ਬੂਥ ਕਾਰਗੁਜ਼ਾਰੀ ਰਜਿਸਟਰੀ',
    registry_subtitle: '11-ਅਜਨਾਲਾ ਦੇ ਹਰ ਬੂਥ ਦਾ ਵੋਟ ਵੇਰਵਾ, ਪੋਲਿੰਗ ਫ਼ਰਕ, ਜੇਤੂ ਅਤੇ ਮਾਰਜਿਨ ਸ਼ਿਫਟ',
    booths_count: 'ਬੂਥ',
    reset_all: 'ਸਭ ਰੀਸੈੱਟ ਕਰੋ',
    search_registry_all: 'ਸਾਰੇ 188 ਬੂਥਾਂ ਵਿੱਚੋਂ ਨੰਬਰ ਜਾਂ ਪਿੰਡ ਲੱਭੋ (ਜਿਵੇਂ 1, 50, ਅਜਨਾਲਾ, ਰਮਦਾਸ)...',
    search_registry_party: 'ਬੂਥ ਨੰਬਰ ਜਾਂ ਪਿੰਡ ਅਨੁਸਾਰ {party} ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਲੱਭੋ...',
    sort_order_label: 'ਕ੍ਰਮ',
    label_booth_2024: '2024 ਬੂਥ',
    label_booth_2022: '2022 ਬੂਥ',
    pill_unchanged: 'ਅਣਬਦਲਿਆ (1-ਬਰਾਬਰ-1)',

    // Party Tabs
    tab_all: 'ਸਾਰੇ 188 ਬੂਥ',
    tab_aap: 'ਆਪ ਵਿਸ਼ਲੇਸ਼ਣ',
    tab_inc: 'ਕਾਂਗਰਸ ਵਿਸ਼ਲੇਸ਼ਣ',
    tab_sad: 'ਅਕਾਲੀ ਦਲ ਵਿਸ਼ਲੇਸ਼ਣ',
    tab_bjp: 'ਭਾਜਪਾ ਵਿਸ਼ਲੇਸ਼ਣ',

    // Quick Filters
    filter_all: 'ਸਾਰੇ',
    filter_aap_wins: 'ਆਪ ਜਿੱਤਾਂ (92)',
    filter_inc_wins: 'ਕਾਂਗਰਸ ਜਿੱਤਾਂ (65)',
    filter_bjp_wins: 'ਭਾਜਪਾ ਜਿੱਤਾਂ (19)',
    filter_sad_wins: 'ਅਕਾਲੀ ਦਲ ਜਿੱਤਾਂ (12)',
    filter_flipped: 'ਪਾਰਟੀ ਬਦਲੀ (92)',
    filter_retained: 'ਬਰਕਰਾਰ ਰਹੇ (96)',

    // Sort Options
    sort_booth_asc: 'ਬੂਥ ਨੰਬਰ (1 → 188)',
    sort_booth_desc: 'ਬੂਥ ਨੰਬਰ (188 → 1)',
    sort_turnout_desc: 'ਵੋਟਾਂ 2024 (ਵੱਧ ਤੋਂ ਘੱਟ)',
    sort_turnout_asc: 'ਵੋਟਾਂ 2024 (ਘੱਟ ਤੋਂ ਵੱਧ)',
    sort_margin_desc: 'ਜਿੱਤ ਦਾ ਫ਼ਰਕ (ਵੱਡੀ ਲੀਡ)',
    sort_aap_desc: 'ਆਪ ਵੋਟਾਂ (ਵੱਧ ਤੋਂ ਘੱਟ)',
    sort_inc_desc: 'ਕਾਂਗਰਸ ਵੋਟਾਂ (ਵੱਧ ਤੋਂ ਘੱਟ)',
    sort_sad_desc: 'ਅਕਾਲੀ ਦਲ ਵੋਟਾਂ (ਵੱਧ ਤੋਂ ਘੱਟ)',
    sort_bjp_desc: 'ਭਾਜਪਾ ਵੋਟਾਂ (ਵੱਧ ਤੋਂ ਘੱਟ)',

    // Table Headers
    th_no: 'ਬੂਥ',
    th_locality: 'ਪਿੰਡ / ਪੋਲਿੰਗ ਸਟੇਸ਼ਨ',
    th_winner_22: '2022 ਜੇਤੂ',
    th_winner_24: '2024 ਜੇਤੂ',
    th_status: 'ਤਬਦੀਲੀ',
    th_turnout: '2024 ਕੁੱਲ ਵੋਟਾਂ',
    th_shift: 'ਵੋਟ ਸ਼ਿਫਟ',
    th_action: 'ਵੇਰਵੇ',

    // Modal
    modal_title: 'ਬੂਥ ਇੰਟੈਲੀਜੈਂਸ ਰਿਪੋਰਟ',
    modal_telemetry: 'ਵੋਟਾਂ ਦਾ ਵੇਰਵਾ ਅਤੇ ਰਣਨੀਤਕ ਵਿਸ਼ਲੇਸ਼ਣ',
    modal_tab_telemetry: 'ਵੋਟਾਂ ਦਾ ਵੇਰਵਾ',
    modal_tab_strategy: '90-ਦਿਨਾ ਮਾਸਟਰ ਪਲਾਨ',
    modal_tab_audit: 'ਨੰਬਰਿੰਗ ਆਡਿਟ',
    modal_close: 'ਬੰਦ ਕਰੋ',

    // Masterplan in Modal
    mp_strategic_zone: 'ਰਣਨੀਤਕ ਕਾਰਵਾਈ ਜ਼ੋਨ',
    mp_core_directives: 'ਮੁੱਖ ਰਣਨੀਤਕ ਹਦਾਇਤਾਂ',
    mp_phased_milestones: '90 ਦਿਨਾਂ ਦਾ ਪੜਾਅਵਾਰ ਰੋਡਮੈਪ',
    mp_phase_1: 'ਪੜਾਅ 1: ਦਿਨ 1-30',
    mp_phase_2: 'ਪੜਾਅ 2: ਦਿਨ 31-60',
    mp_phase_3: 'ਪੜਾਅ 3: ਦਿਨ 61-90',

    // Audit Info
    audit_title: 'ਸਖ਼ਤ ਬੂਥ ਨੰਬਰਿੰਗ ਪੜਤਾਲ ਆਡਿਟ',
    audit_summary: '11-ਅਜਨਾਲਾ ਵਿੱਚ 2022 ਵਿਧਾਨ ਸਭਾ ਅਤੇ 2024 ਲੋਕ ਸਭਾ ਦੋਵਾਂ ਚੋਣਾਂ ਵਿੱਚ ਬਿਲਕੁਲ 188 ਪੋਲਿੰਗ ਸਟੇਸ਼ਨ ਸਨ ਜੋ 1 ਤੋਂ 188 ਤੱਕ ਬਿਨਾਂ ਕਿਸੇ ਤਬਦੀਲੀ ਦੇ ਬਰਾਬਰ ਰਹੇ। ਹੋਰ ਹਲਕਿਆਂ ਵਾਂਗ ਇੱਥੇ ਕੋਈ ਸਹਾਇਕ ਬੂਥ (ਜਿਵੇਂ ਮਜੀਠਾ ਵਿੱਚ 27A) ਜਾਂ ਵਾਰਡ ਤਬਦੀਲੀ ਨਹੀਂ ਹੋਈ।',
    audit_stat_correl: 'ਟਰਨਆਊਟ ਸਹਿ-ਸੰਬੰਧ (2022 ਬਨਾਮ 2024)',
    audit_stat_diff: 'ਬੂਥ ਗਿਣਤੀ ਫ਼ਰਕ',
    audit_stat_status: 'ਸਥਿਤੀ'
  }
};

export function formatStatus(statusStr, lang = 'en') {
  if (lang !== 'pa') return statusStr;
  return statusStr
    .replace('Retained', 'ਬਰਕਰਾਰ')
    .replace('AAP', 'ਆਪ')
    .replace('INC', 'ਕਾਂਗਰਸ')
    .replace('SAD', 'ਅਕਾਲੀ ਦਲ')
    .replace('BJP', 'ਭਾਜਪਾ');
}

export function formatCategory(catCode, lang = 'en') {
  const mapEn = {
    'WON_BOTH': 'Stronghold (Won Both)',
    'GAINED': 'Gained in 2024',
    'LOST_24': 'Lost in 2024',
    'LOST_BOTH': 'Lost Both Elections',
    'WEAK': 'Weak (< 20%)'
  };
  const mapPa = {
    'WON_BOTH': 'ਪੱਕਾ ਗੜ੍ਹ (ਦੋਵੇਂ ਜਿੱਤੇ)',
    'GAINED': '2024 ਵਿੱਚ ਨਵਾਂ ਜਿੱਤਿਆ',
    'LOST_24': '2024 ਵਿੱਚ ਗਵਾਇਆ',
    'LOST_BOTH': 'ਦੋਵੇਂ ਵਾਰ ਹਾਰੇ',
    'WEAK': 'ਕਮਜ਼ੋਰ (< 20%)'
  };
  return lang === 'pa' ? (mapPa[catCode] || catCode) : (mapEn[catCode] || catCode);
}
