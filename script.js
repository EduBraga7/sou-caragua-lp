(() => {
  const PORTAL_URL = 'https://soutransportes.com.br/caraguatatuba/';

  // Real municipal bus lines of Caraguatatuba operated by SOU Caraguá
  const CARAGUA_LINES = [
    {
      code: '100',
      name: 'Tinga – Olaria via Rodoviária',
      regions: ['centro'],
      regionLabel: 'Centro & Bairros',
      route: 'Tinga • Terminal Rodoviário • Centro • Olaria',
      keywords: 'tinga olaria rodoviaria centro jardim jaqueira',
    },
    {
      code: '101',
      name: 'Gaivotas via Martim de Sá / Rodoviária',
      regions: ['centro'],
      regionLabel: 'Centro & Praias',
      route: 'Gaivotas • Praia Martim de Sá • Prainha • Centro • Rodoviária',
      keywords: 'gaivotas martim de sa prainha centro rodoviaria praia',
    },
    {
      code: '102',
      name: 'Morro do Algodão via Pontal / Golfinho',
      regions: ['sul'],
      regionLabel: 'Região Sul',
      route: 'Morro do Algodão • Pontal Santa Marina • Golfinho • Centro',
      keywords: 'morro do algodao pontal santa marina golfinho centro sul',
    },
    {
      code: '103',
      name: 'Morro do Algodão',
      regions: ['sul'],
      regionLabel: 'Região Sul',
      route: 'Morro do Algodão • Av. Rio Branco • Centro',
      keywords: 'morro do algodao centro sul',
    },
    {
      code: '104',
      name: 'Pegorelli / Tarumãs via UPA Sul',
      regions: ['sul', 'saude'],
      regionLabel: 'Sul & Saúde',
      route: 'Pegorelli • Tarumãs • UPA Sul • Travessão • Centro',
      keywords: 'pegorelli tarumas upa sul travessao saude centro',
    },
    {
      code: '105',
      name: 'Pegorelli / Tarumãs via Perequê',
      regions: ['sul'],
      regionLabel: 'Região Sul',
      route: 'Pegorelli • Tarumãs • Perequê-Mirim • Centro',
      keywords: 'pegorelli tarumas pereque mirim sul centro',
    },
    {
      code: '106',
      name: 'Jaraguá Noturno',
      regions: ['sul'],
      regionLabel: 'Região Sul (Noturno)',
      route: 'Jaraguá • Barranco Alto • Travessão • Centro (atendimento noturno)',
      keywords: 'jaragua noturno barranco alto travessao sul',
    },
    {
      code: '107',
      name: 'Jaraguá via Barranco Alto',
      regions: ['sul'],
      regionLabel: 'Região Sul',
      route: 'Jaraguá • Barranco Alto • Porto Novo • Centro',
      keywords: 'jaragua barranco alto porto novo sul centro',
    },
    {
      code: '108',
      name: 'Jaraguá',
      regions: ['sul'],
      regionLabel: 'Região Sul',
      route: 'Bairro Jaraguá • Rodovia SP-055 • Centro',
      keywords: 'jaragua sp-055 sul centro',
    },
    {
      code: '109',
      name: 'Vapapesca',
      regions: ['sul'],
      regionLabel: 'Região Sul',
      route: 'Vapapesca • Travessão • Perequê-Mirim • Centro',
      keywords: 'vapapesca travessao pereque mirim sul',
    },
    {
      code: '112',
      name: 'Golfinho – Pró-Mulher via Rodoviária',
      regions: ['sul', 'saude'],
      regionLabel: 'Sul & Saúde',
      route: 'Golfinho • Terminal Rodoviário • Pró-Mulher • Centro',
      keywords: 'golfinho pro-mulher pro mulher rodoviaria saude sul',
    },
    {
      code: '115',
      name: 'Travessão – Nova Caraguá II via Barranco Alto',
      regions: ['sul'],
      regionLabel: 'Região Sul',
      route: 'Travessão • Nova Caraguá II • Barranco Alto • Centro',
      keywords: 'travessao nova caragua ii barranco alto sul',
    },
    {
      code: '116',
      name: 'Vapapesca via Praias',
      regions: ['sul', 'centro'],
      regionLabel: 'Praias & Sul',
      route: 'Vapapesca • Orla das Praias Sul • Indaiá • Centro',
      keywords: 'vapapesca praias indaia orla sul centro',
    },
    {
      code: '117',
      name: 'Jaraguá via Praias',
      regions: ['sul', 'centro'],
      regionLabel: 'Praias & Sul',
      route: 'Jaraguá • Praias do Sul • Porto Novo • Indaiá • Centro',
      keywords: 'jaragua praias porto novo indaia sul centro',
    },
    {
      code: '201',
      name: 'Porto Novo – Colônias via Rodoviária',
      regions: ['sul', 'centro'],
      regionLabel: 'Sul & Rodoviária',
      route: 'Porto Novo • Colônias • Serramar Shopping • Rodoviária • Centro',
      keywords: 'porto novo colonias serramar shopping rodoviaria centro sul',
    },
    {
      code: '302',
      name: 'Tabatinga Direto',
      regions: ['norte'],
      regionLabel: 'Região Norte',
      route: 'Praia da Tabatinga • Massaguaçu • Cocanha • Centro',
      keywords: 'tabatinga direto massaguacu cocanha mococa norte praias',
    },
    {
      code: '306',
      name: 'Tabatinga – Massaguaçu via Jetuba',
      regions: ['norte'],
      regionLabel: 'Região Norte',
      route: 'Tabatinga • Massaguaçu • Capricórnio • Jetuba • Centro',
      keywords: 'tabatinga massaguacu jetuba capricornio norte praias',
    },
    {
      code: '401',
      name: 'Rio do Ouro',
      regions: ['centro'],
      regionLabel: 'Centro & Bairros',
      route: 'Rio do Ouro • Cantagalo • Centro',
      keywords: 'rio do ouro cantagalo centro serra',
    },
    {
      code: '403',
      name: 'Morada do Mar via Pró-Mulher',
      regions: ['norte', 'saude'],
      regionLabel: 'Norte & Saúde',
      route: 'Morada do Mar • Pró-Mulher • Martim de Sá • Centro',
      keywords: 'morada do mar pro-mulher pro mulher martim de sa norte saude',
    },
    {
      code: '405',
      name: 'Jetuba',
      regions: ['norte'],
      regionLabel: 'Região Norte',
      route: 'Jetuba • Capricórnio • Massaguaçu • Centro',
      keywords: 'jetuba capricornio massaguacu norte',
    },
    {
      code: '406',
      name: 'Hospital Regional – Jaraguazinho',
      regions: ['centro', 'saude'],
      regionLabel: 'Saúde & Bairros',
      route: 'Hospital Regional do Litoral Norte • Jaraguazinho • Centro',
      keywords: 'hospital regional jaraguazinho saude centro',
    },
    {
      code: '407',
      name: 'Hospital Regional – Massaguaçu via Jetuba',
      regions: ['norte', 'saude'],
      regionLabel: 'Norte & Saúde',
      route: 'Hospital Regional • Massaguaçu • Jetuba • Centro',
      keywords: 'hospital regional massaguacu jetuba norte saude',
    },
    {
      code: '1010',
      name: 'CDP – Fundação Casa',
      regions: ['saude'],
      regionLabel: 'Serviços Públicos',
      route: 'Centro • Rodovia dos Tamoios • CDP / Fundação Casa',
      keywords: 'cdp fundacao casa tamoios servicos',
    },
  ];

  // Utility: normalize text for accent-free search
  const normalizeText = (value) =>
    (value || '')
      .toString()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  // 1. Header scroll effect & mobile drawer
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  window.addEventListener(
    'scroll',
    () => {
      if (!header) return;
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    },
    { passive: true }
  );

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = !mobileDrawer.hidden;
      mobileDrawer.hidden = isOpen;
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.hidden = true;
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Hero Live Route Ticker
  const featuredRoutes = [
    {
      code: '101',
      title: 'Gaivotas via Martim de Sá / Rodoviária',
      meta: 'Ar-Condicionado • Wi-Fi • USB • GPS Ativo',
    },
    {
      code: '306',
      title: 'Tabatinga – Massaguaçu via Jetuba',
      meta: 'Região Norte • Praias • Integração 90 min',
    },
    {
      code: '201',
      title: 'Porto Novo – Colônias via Rodoviária',
      meta: 'Região Sul • Serramar Shopping • 100% Acessível',
    },
    {
      code: '406',
      title: 'Hospital Regional – Jaraguazinho',
      meta: 'Atendimento Saúde • Frota Renovada Euro 6',
    },
  ];

  const liveRouteDisplay = document.getElementById('liveRouteDisplay');
  const liveDots = document.querySelectorAll('.live-dot');
  let activeRouteIdx = 0;

  function renderLiveRoute(idx) {
    if (!liveRouteDisplay) return;
    activeRouteIdx = idx;
    const item = featuredRoutes[idx];
    liveRouteDisplay.innerHTML = `
      <div class="live-route-code">${item.code}</div>
      <div class="live-route-info">
        <strong>${item.title}</strong>
        <span>${item.meta}</span>
      </div>
      <a href="#linhas" class="live-route-action" data-jump-code="${item.code}" title="Buscar linha ${item.code}">Ver →</a>
    `;

    liveDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });

    const jumpBtn = liveRouteDisplay.querySelector('[data-jump-code]');
    if (jumpBtn) {
      jumpBtn.addEventListener('click', () => {
        const searchInput = document.getElementById('lineSearchInput');
        if (searchInput) {
          searchInput.value = item.code;
          searchInput.dispatchEvent(new Event('input'));
        }
      });
    }
  }

  if (liveDots.length) {
    liveDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const idx = Number(dot.getAttribute('data-route')) || 0;
        renderLiveRoute(idx);
      });
    });

    setInterval(() => {
      renderLiveRoute((activeRouteIdx + 1) % featuredRoutes.length);
    }, 4500);
  }

  // 3. Interactive Line & Neighborhood Finder
  const searchInput = document.getElementById('lineSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const filterChips = document.querySelectorAll('.filter-chip');
  const quickTags = document.querySelectorAll('.quick-tag');
  const linesGrid = document.getElementById('linesGrid');
  const linesCountInfo = document.getElementById('linesCountInfo');
  const toggleAllLinesBtn = document.getElementById('toggleAllLinesBtn');

  let currentRegion = 'all';
  let showAllLines = false;

  function renderLines() {
    if (!linesGrid) return;
    const rawQuery = searchInput ? searchInput.value.trim() : '';
    const query = normalizeText(rawQuery);

    if (clearSearchBtn) {
      clearSearchBtn.hidden = rawQuery.length === 0;
    }

    const filtered = CARAGUA_LINES.filter((line) => {
      const matchesRegion = currentRegion === 'all' || line.regions.includes(currentRegion);
      if (!matchesRegion) return false;
      if (!query) return true;
      const haystack = normalizeText(`${line.code} ${line.name} ${line.route} ${line.keywords}`);
      return haystack.includes(query);
    });

    const isDefaultCompact = currentRegion === 'all' && !query && !showAllLines;
    const visibleLines = isDefaultCompact ? filtered.slice(0, 9) : filtered;

    if (toggleAllLinesBtn) {
      if (currentRegion !== 'all' || query) {
        toggleAllLinesBtn.hidden = true;
      } else {
        toggleAllLinesBtn.hidden = false;
        toggleAllLinesBtn.textContent = showAllLines
          ? 'Mostrar resumo (9 linhas principais)'
          : `Ver todas as ${CARAGUA_LINES.length} linhas de Caraguá`;
      }
    }

    if (linesCountInfo) {
      if (filtered.length === 0) {
        linesCountInfo.textContent = `Nenhuma linha encontrada para "${rawQuery}".`;
      } else if (isDefaultCompact) {
        linesCountInfo.textContent = `Exibindo 9 de ${filtered.length} linhas municipais de Caraguatatuba.`;
      } else {
        linesCountInfo.textContent = `${filtered.length} ${filtered.length === 1 ? 'linha encontrada' : 'linhas encontradas'} em Caraguatatuba.`;
      }
    }

    if (visibleLines.length === 0) {
      linesGrid.innerHTML = `
        <div class="lines-empty">
          <h3>Não encontrou o bairro exato?</h3>
          <p>Consulte o mapa completo de itinerários e horários diretamente no portal oficial da SOU Caraguatatuba.</p>
          <br>
          <a href="${PORTAL_URL}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
            Abrir Portal SOU Caraguá ↗
          </a>
        </div>
      `;
      return;
    }

    linesGrid.innerHTML = visibleLines
      .map(
        (line) => `
      <article class="line-card">
        <div>
          <div class="line-card__top">
            <span class="line-number">Linha ${line.code}</span>
            <span class="line-region">${line.regionLabel}</span>
          </div>
          <h3>${line.name}</h3>
          <p>${line.route}</p>
        </div>
        <div>
          <div class="line-amenities" style="margin-bottom: 0.85rem;">
            <span class="amenity-badge">❄️ Ar</span>
            <span class="amenity-badge">📶 Wi-Fi</span>
            <span class="amenity-badge">🔌 USB</span>
            <span class="amenity-badge">♿ Acessível</span>
          </div>
          <a href="${PORTAL_URL}" target="_blank" rel="noopener noreferrer" class="line-cta">
            <span>Ver Quadro de Horários Oficial</span>
            <span>↗</span>
          </a>
        </div>
      </article>
    `
      )
      .join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', renderLines);
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      renderLines();
      searchInput.focus();
    });
  }

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      currentRegion = chip.getAttribute('data-region') || 'all';
      renderLines();
    });
  });

  quickTags.forEach((tag) => {
    tag.addEventListener('click', () => {
      const q = tag.getAttribute('data-query') || '';
      if (searchInput) {
        searchInput.value = q;
        currentRegion = 'all';
        filterChips.forEach((c) => c.classList.toggle('active', c.getAttribute('data-region') === 'all'));
        renderLines();
      }
    });
  });

  if (toggleAllLinesBtn) {
    toggleAllLinesBtn.addEventListener('click', () => {
      showAllLines = !showAllLines;
      renderLines();
    });
  }

  renderLines();

  // 4. Cartão SOU Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabBtns.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', String(isActive));
      });
      tabPanels.forEach((panel) => {
        const match = panel.id === `tab-${target}`;
        panel.classList.toggle('active', match);
        panel.hidden = !match;
      });
    });
  });

  // 5. Savings Simulator (Integration 90 min)
  const FARE = 5.0;
  const WEEKS_PER_MONTH = 4.4;
  const daysSlider = document.getElementById('daysPerWeek');
  const daysLabel = document.getElementById('daysLabel');
  const calcOptions = document.querySelectorAll('.calc-option');
  const monthlySavingsEl = document.getElementById('monthlySavings');
  const annualSavingsEl = document.getElementById('annualSavings');
  const costWithoutEl = document.getElementById('costWithout');
  const costWithEl = document.getElementById('costWith');

  let dailyIntegrations = 2;

  const formatBRL = (value) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  function updateCalculator() {
    if (!daysSlider) return;
    const days = Number(daysSlider.value) || 5;
    if (daysLabel) {
      daysLabel.textContent = `${days} ${days === 1 ? 'dia' : 'dias'} / semana`;
    }

    // Paid trips per day with SOU card (always 2 base trips: outbound + return)
    const baseTripsPerDay = 2;
    const savedTripsPerDay = dailyIntegrations;
    const totalTripsWithout = baseTripsPerDay + savedTripsPerDay;

    const monthlyWith = days * WEEKS_PER_MONTH * baseTripsPerDay * FARE;
    const monthlyWithout = days * WEEKS_PER_MONTH * totalTripsWithout * FARE;
    const monthlySaved = monthlyWithout - monthlyWith;
    const annualSaved = monthlySaved * 12;

    if (monthlySavingsEl) {
      monthlySavingsEl.innerHTML = `${formatBRL(monthlySaved)}<span>/mês</span>`;
    }
    if (annualSavingsEl) {
      annualSavingsEl.textContent = formatBRL(annualSaved);
    }
    if (costWithoutEl) {
      costWithoutEl.textContent = `${formatBRL(monthlyWithout)}/mês`;
    }
    if (costWithEl) {
      costWithEl.textContent = `${formatBRL(monthlyWith)}/mês`;
    }
  }

  if (daysSlider) {
    daysSlider.addEventListener('input', updateCalculator);
  }

  calcOptions.forEach((opt) => {
    opt.addEventListener('click', () => {
      calcOptions.forEach((o) => o.classList.remove('active'));
      opt.classList.add('active');
      dailyIntegrations = Number(opt.getAttribute('data-trips')) || 2;
      updateCalculator();
    });
  });

  updateCalculator();

  // 6. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const willOpen = !item.classList.contains('active');
      faqItems.forEach((other) => {
        other.classList.remove('active');
        const otherBtn = other.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
