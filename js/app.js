// ================================================================
// 湖师大马克思专业考研 - 主应用逻辑 v2
// ================================================================

var Storage = {
  save: function(key, data) {
    try { localStorage.setItem('hushida_' + key, JSON.stringify(data)); } catch(e) {}
  },
  load: function(key) {
    try { var v = localStorage.getItem('hushida_' + key); return v ? JSON.parse(v) : null; } catch(e) { return null; }
  }
};

var MistakeBook = {
  getList: function() { return Storage.load('mistakes') || []; },
  add: function(item) {
    var list = this.getList();
    for (var i = 0; i < list.length; i++) { if (list[i].id === item.id) return; }
    list.push(item); Storage.save('mistakes', list);
  },
  remove: function(id) {
    var list = this.getList().filter(function(x) { return x.id !== id; });
    Storage.save('mistakes', list);
  },
  has: function(id) {
    var list = this.getList();
    for (var i = 0; i < list.length; i++) { if (list[i].id === id) return true; }
    return false;
  },
  toggle: function(item) {
    if (this.has(item.id)) { this.remove(item.id); }
    else { this.add(item); }
  }
};

var App = {
  currentPage: null, currentTab: null, currentMockPaperId: null,
  mockTimer: null, mockSeconds: 0,

  init: function() {
    this._bindNav(); this._handleRoute();
    window.addEventListener('hashchange', function() { App._handleRoute(); });
    this._bindSubNav(); this._createDetailOverlay();
  },

  _createDetailOverlay: function() {
    var overlay = document.createElement('div');
    overlay.id = 'mindmap-detail-overlay';
    overlay.className = 'mindmap-detail-overlay';
    overlay.addEventListener('click', function() { MindMap._closeDetail(); });
    document.body.appendChild(overlay);
  },

  _updateDetailOverlay: function() {
    var panel = document.getElementById('mindmap-detail-panel');
    var overlay = document.getElementById('mindmap-detail-overlay');
    if (panel && overlay) overlay.classList.toggle('show', panel.classList.contains('open'));
  },

  _bindNav: function() {
    var items = document.querySelectorAll('.nav-item');
    for (var i = 0; i < items.length; i++)
      items[i].addEventListener('click', function() { window.location.hash = this.dataset.page; });
    var toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.addEventListener('click', function() { document.body.classList.toggle('nav-open'); });
    var overlay = document.getElementById('nav-overlay');
    if (overlay) overlay.addEventListener('click', function() { document.body.classList.remove('nav-open'); });
  },

  _bindSubNav: function() {
    var cc = document.getElementById('page-courses');
    if (cc) cc.addEventListener('click', function(e) {
      var tab = e.target.closest('.sub-tab'); if (!tab) return;
      var sub = tab.dataset.sub; if (!sub) return;
      var all = cc.querySelectorAll('.sub-tab');
      for (var i = 0; i < all.length; i++) all[i].classList.remove('active');
      tab.classList.add('active'); App._renderCourseContent(sub);
    });
    var tf = document.getElementById('paper-type-filter'), yf = document.getElementById('paper-year-filter');
    if (tf) tf.addEventListener('change', function() { App._renderPapers(); });
    if (yf) yf.addEventListener('change', function() { App._renderPapers(); });
  },

  _handleRoute: function() {
    var hash = window.location.hash.replace('#', '') || 'dashboard';
    this._navigateTo(hash);
  },

  _navigateTo: function(page) {
    if (this.currentPage === page && page !== 'courses' && page !== 'mock') return;
    this.currentPage = page;
    var navItems = document.querySelectorAll('.nav-item');
    for (var i = 0; i < navItems.length; i++)
      navItems[i].classList.toggle('active', navItems[i].dataset.page === page || (page === 'courses' && navItems[i].dataset.page === 'courses'));
    var pages = document.querySelectorAll('.page');
    for (var j = 0; j < pages.length; j++) pages[j].classList.remove('active');
    var pm = {'dashboard':'page-dashboard','courses':'page-courses','public':'page-public','papers':'page-papers','mock':'page-mock','timeline':'page-timeline','mistakes':'page-mistakes'};
    var tid = pm[page]; if (tid) { var t = document.getElementById(tid); if (t) t.classList.add('active'); }
    if (this.mockTimer) { clearInterval(this.mockTimer); this.mockTimer = null; }
    switch (page) {
      case 'dashboard': this._renderDashboard(); break;
      case 'courses': this._renderCoursesPage(); break;
      case 'public': this._renderPublicPage(); break;
      case 'papers': this._renderPapers(); break;
      case 'mock': this._renderMockPage(); break;
      case 'timeline': this._renderTimeline(); break;
      case 'mistakes': this._renderMistakeBook(); break;
    }
    document.body.classList.remove('nav-open');
  },
  _renderDashboard: function() {
    var c = document.getElementById('page-dashboard'); if (!c) return;
    var d = Math.ceil((new Date(2026, 11, 26) - new Date()) / 86400000);
    if (d < 0) d = 0;
    var urgency = d > 180 ? ' calm' : d > 90 ? ' moderate' : d > 30 ? ' urgent' : ' critical';
    var saved = Storage.load('dailyTasks') || {};
    var tasks = [
      { id:'words', t: '词汇背诵 100新词+复习旧词' },
      { id:'mayuan', t: '马原教材通读 + 思维导图梳理' },
      { id:'politics', t: '政治1000题 每日30题' },
      { id:'reading', t: '英语阅读精练 1篇（逐句分析）' },
      { id:'maogai', t: '毛概/习思通读 + 知识框架整理' }
    ];
    var taskHtml = '';
    for (var i = 0; i < tasks.length; i++) {
      var t = tasks[i], chk = saved[t.id] ? '' : ' unchecked';
      taskHtml += '<li onclick="App._toggleDailyTask(\'' + t.id + '\')" style="cursor:pointer"><span class="dash-check'+chk+'"></span> ' + t.t + '</li>';
    }
    c.innerHTML = '<div class="dashboard-grid">'
      + '<div class="dash-card countdown-card'+urgency+'"><div class="countdown-number">'+d+'</div><div class="countdown-label">天倒计时</div><div class="countdown-sub">距离2026年考研初试</div><div class="countdown-date">预计考试日期：2026年12月26日</div></div>'
      + '<div class="dash-card"><h3 class="dash-card-title">📋 今日备考任务</h3><ul class="dash-today-list">' + taskHtml + '</ul></div>'
      + '<div class="dash-card quick-links"><h3 class="dash-card-title">⚡ 快速入口</h3><div class="quick-link-grid"><a href="#courses" class="quick-link-item"><span class="ql-icon">📖</span><span>专业课思维导图</span></a><a href="#public" class="quick-link-item"><span class="ql-icon">📝</span><span>英语/政治路径</span></a><a href="#mock" class="quick-link-item"><span class="ql-icon">📋</span><span>模拟试题</span></a><a href="#papers" class="quick-link-item"><span class="ql-icon">📄</span><span>历年真题</span></a><a href="#mistakes" class="quick-link-item"><span class="ql-icon">📌</span><span>错题本</span></a><a href="#timeline" class="quick-link-item"><span class="ql-icon">📅</span><span>备考时间线</span></a></div></div>'
      + '<div class="dash-card"><h3 class="dash-card-title">ℹ️ 考试信息</h3><div class="dash-info-list"><div class="dash-info-row"><span class="dash-info-label">目标院校</span><span class="dash-info-value">湖南师范大学</span></div><div class="dash-info-row"><span class="dash-info-label">目标专业</span><span class="dash-info-value">马克思主义理论</span></div><div class="dash-info-row"><span class="dash-info-label">招生学院</span><span class="dash-info-value">马克思主义学院</span></div><div class="dash-info-row"><span class="dash-info-label">备考起点</span><span class="dash-info-value">2026年6月</span></div><div class="dash-info-row"><span class="dash-info-label">考试科目</span><span class="dash-info-value">政治 / 英语(一) / 796马原 / 896毛概+习思</span></div></div></div></div>';
  },

  _toggleDailyTask: function(id) {
    var saved = Storage.load('dailyTasks') || {};
    saved[id] = !saved[id];
    Storage.save('dailyTasks', saved);
    this._renderDashboard();
  },

  _renderCoursesPage: function() {
    var c = document.getElementById('page-courses'); if (!c) return;
    c.innerHTML = '<div id="answer-templates-section"></div><div class="sub-tabs"><button class="sub-tab active" data-page="courses" data-sub="ma-yuan">📘 马原</button><button class="sub-tab" data-page="courses" data-sub="mao-gai">📙 毛概</button><button class="sub-tab" data-page="courses" data-sub="xi-si">📗 习思</button></div><div id="courses-content"></div>';
    this._renderCourseContent('ma-yuan');
    this._renderAnswerTemplates();
  },

  _renderAnswerTemplates: function() {
    var c = document.getElementById('answer-templates-section'); if (!c) return;
    c.innerHTML = '<details class="templates-details"><summary class="templates-summary">📝 专业课答题模板（点击展开）</summary><div class="templates-grid">'
      + '<div class="template-card"><h4>名词解释答题模板（5分）</h4><p><strong>结构：</strong>定义1-2句 + 内涵1-2句 + 意义/评价1句</p><p><strong>示例：</strong>XX是指……（核心定义）。其内容包括……（要点展开）。XX具有……的重要地位/意义。</p><p><strong>字数：</strong>80-150字，3-4个要点</p></div>'
      + '<div class="template-card"><h4>简答题模板（10分）</h4><p><strong>结构：</strong>总起1句 + 分点答3-5个要点(每点一句话) + 总结1句</p><p><strong>答题模式：</strong>XX的主要内容包括以下几个方面：第一，……；第二，……；第三，……；等等。以上体现了……</p><p><strong>字数：</strong>200-400字</p></div>'
      + '<div class="template-card"><h4>论述题模板（20分）</h4><p><strong>结构：</strong>第一部分(总)理论阐述 → 第二部分(分)多角度展开论证 → 第三部分(总)现实意义/方法论启示</p><p><strong>答题模式：</strong>一、理论阐述…… 二、展开分析：(1)……(2)……(3)…… 三、现实意义……</p><p><strong>字数：</strong>500-800字，条理清晰，层次分明</p></div>'
      + '<div class="template-card"><h4>材料分析题模板（15分）</h4><p><strong>结构：</strong>点明原理+结合材料+方法论</p><p><strong>模板：</strong>以上材料体现了XX原理。该原理认为……（阐释）。从材料中可以看到……（结合）。因此我们应该……（实践指导）。</p></div>'
      + '</div></details>';
  },
  _renderCourseContent: function(sub) {
    var c = document.getElementById('courses-content'); if (!c) return;
    var map = {
      'ma-yuan': { d: MaYuanData, l: '马克思主义基本原理', i: '📘' },
      'mao-gai': { d: MaoGaiData, l: '毛泽东思想和中国特色社会主义理论体系概论', i: '📙' },
      'xi-si': { d: XiSiData, l: '习近平新时代中国特色社会主义思想概论', i: '📗' }
    };
    var cfg = map[sub]; if (!cfg) return;
    this.currentTab = sub;
    c.innerHTML = '<div class="courses-header"><h2 class="page-title">'+cfg.i+' '+cfg.l+'</h2><div class="mindmap-toolbar"><input type="text" class="mindmap-search" id="mindmap-search" placeholder="搜索知识点..." oninput="App._searchMindmap()"><button class="btn btn-sm" onclick="MindMap.expandAll(\'mindmap-container\')">全部展开</button><button class="btn btn-sm btn-outline" onclick="MindMap.collapseAll(\'mindmap-container\')">全部折叠</button></div></div><div class="courses-layout"><div class="courses-mindmap" id="mindmap-container"></div><div class="courses-keypoints" id="keypoints-container"></div></div>';
    setTimeout(function() { MindMap.render('mindmap-container', cfg.d.mindmap); }, 10);
    if (cfg.d.keyPoints) this._renderKeyPoints('keypoints-container', cfg.d.keyPoints);
  },

  _searchMindmap: function() {
    var input = document.getElementById('mindmap-search');
    if (!input) return;
    var query = input.value.trim().toLowerCase();
    var container = document.getElementById('mindmap-container');
    if (!container) return;
    var prev = container.querySelectorAll('.mindmap-search-highlight');
    for (var i = 0; i < prev.length; i++) prev[i].classList.remove('mindmap-search-highlight');
    if (!query) return;
    MindMap.expandAll('mindmap-container');
    var texts = container.querySelectorAll('.mindmap-text');
    for (var j = 0; j < texts.length; j++) {
      if (texts[j].textContent.toLowerCase().indexOf(query) !== -1) {
        texts[j].classList.add('mindmap-search-highlight');
        texts[j].scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      }
    }
  },

  _renderKeyPoints: function(cid, pts) {
    var c = document.getElementById(cid); if (!c) return;
    var h = '<h3 class="kp-title">★ 重难点突破</h3>';
    for (var i = 0; i < pts.length; i++) {
      var k = pts[i], s = '';
      for (var j = 0; j < k.difficulty; j++) s += '★';
      for (var j = k.difficulty; j < 3; j++) s += '☆';
      h += '<div class="kp-card diff-' + k.difficulty + '"><div class="kp-card-header"><span class="kp-chapter">' + k.chapter + '</span><span class="kp-difficulty">' + s + '</span></div><ul class="kp-list">';
      for (var j = 0; j < k.points.length; j++) h += '<li>' + k.points[j] + '</li>';
      h += '</ul></div>';
    }
    c.innerHTML = h;
  },
  _renderPublicPage: function() {
    var c = document.getElementById('page-public'); if (!c) return;
    var eng = EnglishData, pol = PoliticsData, h = '';

    h += '<div class="public-section"><h2 class="page-title">📝 ' + eng.overview.title + '</h2>';
    h += '<div class="exam-info-bar">';
    for (var i = 0; i < eng.overview.examStructure.length; i++)
      h += '<span class="exam-info-item">' + eng.overview.examStructure[i].section + ': ' + eng.overview.examStructure[i].score + '（' + eng.overview.examStructure[i].count + '）</span>';
    h += '</div><p class="target-score">🎯 目标分数：' + eng.overview.targetScore + '</p>';

    h += '<div class="study-focus-section"><h3>🔑 备考重点知识</h3><div class="focus-grid">';
    h += '<div class="focus-card"><h4>📖 阅读理解（40分）</h4><p>核心技巧：定位+同义替换。先读题干划关键词→回原文定位→对比选项。主旨题关注首尾段，细节题定位关键句，推断题基于原文不臆测。每篇控制在18分钟以内。</p></div>';
    h += '<div class="focus-card"><h4>✍️ 大作文（20分）</h4><p>三段式结构：描述图画（2-3句）→分析寓意+展开论证（5-6句）→总结建议（2-3句）。准备正面、负面、哲理三类模板，积累20个万能句式。字数控制在160-200词。</p></div>';
    h += '<div class="focus-card"><h4>📝 小作文（10分）</h4><p>掌握书信（建议信/推荐信/道歉信/邀请信）、通知、备忘录的格式。开头和结尾固定句式必须背熟。正文2-3句说清要点即可。字数100词左右。</p></div>';
    h += '<div class="focus-card"><h4>🌐 翻译（10分）</h4><p>英译汉，5句话。关键：拆长句→理清主干→重组汉语。注意被动语态转主动、定语从句前置、抽象名词具体化。每天练1篇保持手感。</p></div>';
    h += '<div class="focus-card"><h4>📚 词汇（贯穿全程）</h4><p>核心2000高频词必须熟练掌握。建议：每天100词（新词+复习），用APP碎片化记忆。重点掌握一词多义和熟词僻义（如school=学派、share=股份）。</p></div>';
    h += '<div class="focus-card"><h4>🔤 长难句</h4><p>三大从句（定语从句/名词性从句/状语从句）+非谓语动词+倒装省略是考研英语长难句的核心。每天精析5-8句，划主干→找修饰→翻译全句。</p></div>';
    h += '</div></div>';

    h += '<div class="stages-grid">';
    for (var s = 0; s < eng.stages.length; s++) {
      var st = eng.stages[s];
      h += '<div class="stage-card"><div class="stage-header"><h3>' + st.stage + '</h3><span class="stage-period">' + st.period + '</span></div><p class="stage-focus">🎯 ' + st.focus + '</p><ul class="stage-tasks">';
      for (var t = 0; t < st.tasks.length; t++) h += '<li><strong>' + st.tasks[t].task + '</strong><span class="task-time">[' + st.tasks[t].dailyTime + ']</span><p>' + st.tasks[t].detail + '</p></li>';
      h += '</ul></div>';
    }
    h += '</div><div class="resources-section"><h3>📚 资料推荐</h3><div class="resources-grid">';
    for (var r = 0; r < eng.resources.length; r++) h += '<div class="resource-item"><strong>' + eng.resources[r].name + '</strong>: ' + eng.resources[r].rec + '</div>';
    h += '</div></div><div class="tips-section"><h3>💡 备考提示</h3><ul>';
    for (var tp = 0; tp < eng.tips.length; tp++) h += '<li>' + eng.tips[tp] + '</li>';
    h += '</ul></div></div>';


    h += '<div class="public-section"><h2 class="page-title">🇨🇳 ' + pol.overview.title + '</h2>';
    h += '<div class="exam-info-bar">';
    for (var i2 = 0; i2 < pol.overview.examStructure.length; i2++)
      h += '<span class="exam-info-item">' + pol.overview.examStructure[i2].section + ': ' + pol.overview.examStructure[i2].score + '（' + pol.overview.examStructure[i2].count + '）</span>';
    h += '</div><p class="target-score">🎯 目标分数：' + pol.overview.targetScore + '</p>';
    h += '<div class="subjects-bar">';
    for (var i3 = 0; i3 < pol.overview.subjects.length; i3++) h += '<span class="subject-tag">' + pol.overview.subjects[i3].name + ' ' + pol.overview.subjects[i3].weight + '</span>';
    h += '</div>';

    h += '<div class="study-focus-section"><h3>🔑 各板块备考重点</h3><div class="focus-grid">';
    h += '<div class="focus-card"><h4>📘 马原（24%）</h4><p>最难板块，重在理解。唯物辩证法（对立统一规律）和认识论（真理与价值）是分析题最爱。政治经济学部分理解劳动价值论和剩余价值论即可。选择题注意区分易混淆概念。</p></div>';
    h += '<div class="focus-card"><h4>📙 毛中特（30%）</h4><p>分值最高。毛泽东思想重点掌握新民主主义革命理论（三大法宝、道路）和活的灵魂。邓小平理论重点记社会主义本质论和市场经济论。习近平新时代中国特色社会主义思想是重中之重。</p></div>';
    h += '<div class="focus-card"><h4>📜 史纲（14%）</h4><p>梳理1840年至今的时间线。重点：列强侵华+救亡运动+中共成立+抗战+解放战争+建国+改革开放。会议和文献专题整理（如遵义会议、十一届三中全会等）。</p></div>';
    h += '<div class="focus-card"><h4>📕 思修（16%）</h4><p>最简单板块。人生观价值观+理想信念+中国精神+核心价值观+道德+法律。以背诵为主，分析题答题模板固定。法律部分重点记宪法的地位和全面依法治国框架。</p></div>';
    h += '<div class="focus-card"><h4>📰 时政（16%）</h4><p>贯穿全年。重点关注：习近平总书记重要讲话、重大会议（二十大/两会）、国内重大政策、国际大事件、中国外交主张。11月开始系统整理，12月突击背诵。</p></div>';
    h += '<div class="focus-card"><h4>✅ 选择题技巧</h4><p>单选题用排除法，多选题宁缺毋滥（错选或漏选全题0分）。马原多选最难——注意绝对化表述（一定/必然/所有）通常是错误选项。毛中特多选倾向于全选。</p></div>';
    h += '</div></div>';

    h += '<div class="stages-grid">';
    for (var s2 = 0; s2 < pol.stages.length; s2++) {
      var ps = pol.stages[s2];
      h += '<div class="stage-card"><div class="stage-header"><h3>' + ps.stage + '</h3><span class="stage-period">' + ps.period + '</span></div><p class="stage-focus">🎯 ' + ps.focus + '</p><ul class="stage-tasks">';
      for (var t2 = 0; t2 < ps.tasks.length; t2++) {
        var pt = ps.tasks[t2];
        h += '<li><strong>' + pt.task + '</strong>' + (pt.dailyTime ? '<span class="task-time">[' + pt.dailyTime + ']</span>' : '') + (pt.week ? '<span class="task-week">' + pt.week + '</span>' : '') + '<p>' + pt.detail + '</p></li>';
      }
      h += '</ul></div>';
    }
    h += '</div><div class="resources-section"><h3>📚 资料推荐</h3><div class="resources-grid">';
    for (var r2 = 0; r2 < pol.resources.length; r2++) h += '<div class="resource-item"><strong>' + pol.resources[r2].name + '</strong>: ' + pol.resources[r2].rec + '</div>';
    h += '</div></div><div class="tips-section"><h3>💡 备考提示</h3><ul>';
    for (var tp2 = 0; tp2 < pol.tips.length; tp2++) h += '<li>' + pol.tips[tp2] + '</li>';
    h += '</ul></div></div>';

    c.innerHTML = h;
  },
  _renderPapers: function() {
    var c = document.getElementById('page-papers'); if (!c) return;
    var tf = document.getElementById('paper-type-filter'), yf = document.getElementById('paper-year-filter');
    var st = tf ? tf.value : 'all', sy = yf ? yf.value : 'all', h = '';
    for (var y = 0; y < PapersData.years.length; y++) {
      var yd = PapersData.years[y];
      if (sy !== 'all' && yd.year !== sy) continue;
      var fq = yd.questions;
      if (st !== 'all') fq = fq.filter(function(q) { return q.type === st; });
      if (fq.length === 0) continue;
      h += '<div class="paper-year-group"><div class="paper-year-header"><h2>' + yd.examName + '</h2><span class="paper-subject">' + yd.subject + '（' + yd.code + '）</span></div><div class="paper-questions">';
      for (var q = 0; q < fq.length; q++) {
        var qu = fq[q];
        h += '<div class="question-card"><div class="question-header"><span class="question-type type-' + qu.type + '">' + qu.type + '</span><span class="question-score">' + qu.score + '分</span><span class="mistake-star" id="mt-paper-' + yd.year + '-' + qu.id + '" onclick="App._togglePaperMistake(\'' + yd.year + '\',' + qu.id + ')" title="添加到错题本/移除">☆</span><div class="question-tags">';
        for (var tg = 0; tg < qu.tags.length; tg++) h += '<span class="tag">' + qu.tags[tg] + '</span>';
        h += '</div></div><div class="question-body"><p class="question-text"><strong>题目：</strong>' + qu.question + '</p><details class="question-answer"><summary>查看参考答案</summary><div class="answer-content">' + qu.answer.replace(/\n/g, '<br>') + '</div></details></div></div>';
      }
      h += '</div></div>';
    }
    c.innerHTML = h || '<div class="empty-state">暂无匹配的真题，请调整筛选条件</div>';
    this._updatePaperMistakeStars();
  },

  _togglePaperMistake: function(year, qid) {
    for (var i = 0; i < PapersData.years.length; i++) {
      if (PapersData.years[i].year === year) {
        var yd = PapersData.years[i];
        for (var j = 0; j < yd.questions.length; j++) {
          if (yd.questions[j].id === qid) {
            var qu = yd.questions[j];
            var mid = 'paper-' + year + '-' + qid;
            MistakeBook.toggle({ id: mid, type: qu.type, question: qu.question, answer: qu.answer, source: year + '年真题 ' + yd.subject, tags: qu.tags || [] });
            this._updatePaperMistakeStars();
            return;
          }
        }
      }
    }
  },

  _updatePaperMistakeStars: function() {
    var stars = document.querySelectorAll('[id^="mt-paper-"]');
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var mid = s.id.replace('mt-', '');
      s.textContent = MistakeBook.has(mid) ? '★' : '☆';
      s.style.color = MistakeBook.has(mid) ? '#e8912d' : '';
    }
  },

  _renderMockPage: function() {
    var c = document.getElementById('page-mock'); if (!c) return;
    var cats = MockExamsData.categories;
    var html = '<h2 class="page-title">📋 模拟试题</h2>';
    html += '<div class="mock-category-tabs">';
    for (var i = 0; i < cats.length; i++)
      html += '<button class="mock-cat-tab' + (i === 0 ? ' active' : '') + '" data-cat="' + cats[i].id + '" onclick="App._switchMockCategory(\'' + cats[i].id + '\')">' + cats[i].icon + ' ' + cats[i].label + '</button>';
    html += '</div><div id="mock-content"></div>';
    c.innerHTML = html;
    this._switchMockCategory(cats[0].id);
  },

  _switchMockCategory: function(catId) {
    var tabs = document.querySelectorAll('.mock-cat-tab');
    for (var i = 0; i < tabs.length; i++) tabs[i].classList.toggle('active', tabs[i].dataset.cat === catId);
    this._renderMockCategory(catId);
  },

  _renderMockCategory: function(catId) {
    var container = document.getElementById('mock-content'); if (!container) return;
    var papers = MockExamsData.getPapersByCategory(catId);
    if (papers.length === 0) {
      container.innerHTML = '<div class="empty-state">该科目暂无模拟试题，敬请期待后续更新</div>';
      return;
    }
    var html = '<p class="mock-cat-desc">共 ' + papers.length + ' 套模拟卷</p><div class="mock-paper-list">';
    for (var p = 0; p < papers.length; p++) {
      var paper = papers[p];
      html += '<div class="mock-paper-item" id="mpi-' + paper.id + '">';
      html += '<div class="mpi-header" onclick="App._toggleMockPaper(\'' + paper.id + '\')"><span class="mpi-expand" id="mpe-' + paper.id + '">▶</span><span class="mpi-title">' + paper.title + '</span><span class="mpi-diff">' + paper.difficulty + '</span></div>';
      html += '<div class="mpi-body" id="mpb-' + paper.id + '" style="display:none"></div></div>';
    }
    html += '</div>';
    container.innerHTML = html;
  },

  _toggleMockPaper: function(paperId) {
    var body = document.getElementById('mpb-' + paperId);
    var expand = document.getElementById('mpe-' + paperId);
    if (!body || !expand) return;
    if (body.style.display === 'none') {
      expand.textContent = '▼'; body.style.display = 'block';
      if (!body.dataset.rendered) { this._renderMockPaperContent(paperId, body); body.dataset.rendered = '1'; }
    } else {
      expand.textContent = '▶'; body.style.display = 'none';
    }
  },
  _renderMockPaperContent: function(paperId, container) {
    var paper = null;
    for (var i = 0; i < MockExamsData.allPapers.length; i++) { if (MockExamsData.allPapers[i].id === paperId) { paper = MockExamsData.allPapers[i]; break; } }
    if (!paper) return;
    var cat = MockExamsData.categories.filter(function(x) { return x.id === paper.category; })[0] || {};
    var savedAnswers = this._loadMockAnswers(paperId);
    var html = '';
    html += '<div class="mock-paper-meta"><span>' + cat.icon + ' ' + cat.label + '</span><span>⏱ ' + paper.duration + '分钟</span><span>📊 总分：' + paper.totalScore + '分</span><span>🎯 ' + paper.focus + '</span></div>';
    html += '<div class="mock-timer-card" style="margin-top:12px"><div><div class="mock-timer-label">计时</div><div class="mock-timer-display" id="mtimer-' + paperId + '">' + paper.duration + ':00</div></div><div class="mock-timer-actions"><button class="btn btn-sm" onclick="App._startPaperTimer(\'' + paperId + '\',' + paper.duration + ')">▶ 开始计时</button><button class="btn btn-sm btn-reset" onclick="App._resetPaperTimer(\'' + paperId + '\',' + paper.duration + ')">↺ 重置计时</button><button class="btn btn-sm" onclick="App._togglePaperAllAnswers(\'' + paperId + '\')">📖 展开全部答案</button></div></div>';
    html += '<div class="mock-questions">';
    for (var q = 0; q < paper.questions.length; q++) {
      var qu = paper.questions[q], sa = savedAnswers['' + q] || '';
      html += '<div class="mock-question-card"><div class="mock-question-header"><span class="mock-q-num">第' + (q + 1) + '题</span><span class="question-type type-' + qu.type + '">' + qu.type + '</span><span class="mock-question-score">' + qu.score + '分</span><span class="mistake-star" id="mt-' + paperId + '-' + q + '" onclick="App._toggleMistake(\'' + paperId + '\',' + q + ')" title="添加到错题本/移除">☆</span><div class="question-tags">';
      for (var tg = 0; tg < qu.tags.length; tg++) html += '<span class="tag">' + qu.tags[tg] + '</span>';
      html += '</div></div>';
      html += '<p class="question-text"><strong>题目：</strong>' + qu.question.replace(/\n/g, '<br>') + '</p>';
      html += '<div class="mock-answer-area"><label class="mock-answer-label">✏️ 你的作答：</label><textarea class="mock-answer-input" id="a-' + paperId + '-' + q + '" placeholder="在此输入你的答案..." onblur="App._saveMockAnswer(\'' + paperId + '\',' + q + ')">' + sa + '</textarea></div>';
      html += '<div class="mock-ref-section"><span class="mock-answer-toggle" onclick="App._toggleMockAnswer(this)">查看参考答案</span><div class="mock-answer-content"><strong>📖 参考答案：</strong><br>' + qu.referenceAnswer.replace(/\n/g, '<br>') + '</div></div>';
      html += '<div class="mock-self-score"><label>📊 自评得分：</label><input type="number" class="mock-score-input" id="s-' + paperId + '-' + q + '" min="0" max="' + qu.score + '" value="' + (qu.selfScore || 0) + '" onchange="App._saveMockScore(\'' + paperId + '\',' + q + ');App._updatePaperScore(\'' + paperId + '\')"> / ' + qu.score + ' 分</div>';
      html += '</div>';
    }
    html += '</div>';
    html += '<div class="mock-score-summary"><div class="score-summary-inner"><span class="score-label">📊 自评总分：</span><span class="score-value" id="st-' + paperId + '">0</span><span class="score-max"> / ' + paper.totalScore + ' 分</span><span class="score-pct" id="sp-' + paperId + '"></span></div><div id="score-history-' + paperId + '" class="score-history"></div></div>';
    container.innerHTML = html;
    this._updatePaperScore(paperId);
    this._updateMistakeStars(paperId);
    this._renderScoreHistory(paperId);
  },

  _toggleMockAnswer: function(el) {
    var answer = el.nextElementSibling;
    if (answer) {
      if (answer.classList.contains('open')) { answer.classList.remove('open'); el.textContent = '查看参考答案'; }
      else { answer.classList.add('open'); el.textContent = '隐藏参考答案'; }
    }
  },

  _startPaperTimer: function(pid, dur) {
    if (this.mockTimer) clearInterval(this.mockTimer);
    this.mockSeconds = dur * 60;
    var disp = document.getElementById('mtimer-' + pid), self = this;
    this.mockTimer = setInterval(function() {
      self.mockSeconds--;
      if (self.mockSeconds <= 0) { clearInterval(self.mockTimer); self.mockTimer = null; self.mockSeconds = 0; }
      var m = Math.floor(self.mockSeconds / 60), s = self.mockSeconds % 60;
      if (disp) disp.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    }, 1000);
  },

  _resetPaperTimer: function(pid, dur) {
    if (this.mockTimer) { clearInterval(this.mockTimer); this.mockTimer = null; }
    this.mockSeconds = dur * 60;
    var disp = document.getElementById('mtimer-' + pid);
    if (disp) disp.textContent = dur + ':00';
  },

  _togglePaperAllAnswers: function(pid) {
    var body = document.getElementById('mpb-' + pid); if (!body) return;
    var answers = body.querySelectorAll('.mock-answer-content');
    var toggles = body.querySelectorAll('.mock-answer-toggle');
    var allOpen = answers.length > 0 && answers[0].classList.contains('open');
    for (var i = 0; i < answers.length; i++) {
      if (allOpen) { answers[i].classList.remove('open'); toggles[i].textContent = '查看参考答案'; }
      else { answers[i].classList.add('open'); toggles[i].textContent = '隐藏参考答案'; }
    }
  },

  _saveMockAnswer: function(pid, qid) {
    var inp = document.getElementById('a-' + pid + '-' + qid); if (!inp) return;
    var saved = Storage.load('mockAnswers') || {};
    if (!saved[pid]) saved[pid] = {};
    saved[pid][qid] = inp.value;
    Storage.save('mockAnswers', saved);
  },

  _loadMockAnswers: function(pid) { var s = Storage.load('mockAnswers') || {}; return s[pid] || {}; },

  _saveMockScore: function(pid, qid) {
    var inp = document.getElementById('s-' + pid + '-' + qid); if (!inp) return;
    var saved = Storage.load('mockScores') || {};
    if (!saved[pid]) saved[pid] = {};
    saved[pid][qid] = parseInt(inp.value) || 0;
    Storage.save('mockScores', saved);
  },

  _loadMockScores: function(pid) { var s = Storage.load('mockScores') || {}; return s[pid] || {}; },

  _toggleMistake: function(pid, qid) {
    var paper = null;
    for (var i = 0; i < MockExamsData.allPapers.length; i++) { if (MockExamsData.allPapers[i].id === pid) { paper = MockExamsData.allPapers[i]; break; } }
    if (!paper || !paper.questions[qid]) return;
    var qu = paper.questions[qid], mid = pid + '-' + qid;
    MistakeBook.toggle({ id: mid, type: qu.type, question: qu.question, answer: qu.referenceAnswer, source: paper.title, tags: qu.tags || [] });
    this._updateMistakeStars(pid);
  },

  _updateMistakeStars: function(pid) {
    for (var q = 0; ; q++) {
      var el = document.getElementById('mt-' + pid + '-' + q); if (!el) break;
      var mid = pid + '-' + q;
      el.textContent = MistakeBook.has(mid) ? '★' : '☆';
      el.style.color = MistakeBook.has(mid) ? '#e8912d' : '';
    }
  },

  _updatePaperScore: function(pid) {
    var paper = null;
    for (var i = 0; i < MockExamsData.allPapers.length; i++) { if (MockExamsData.allPapers[i].id === pid) { paper = MockExamsData.allPapers[i]; break; } }
    if (!paper) return;
    var total = 0;
    for (var q = 0; q < paper.questions.length; q++) {
      var inp = document.getElementById('s-' + pid + '-' + q);
      if (inp) { var v = parseInt(inp.value) || 0; paper.questions[q].selfScore = v; total += v; App._saveMockScore(pid, q); }
    }
    var sd = document.getElementById('st-' + pid), sp = document.getElementById('sp-' + pid);
    if (sd) sd.textContent = total;
    if (sp) {
      var pct = paper.totalScore > 0 ? Math.round(total / paper.totalScore * 100) : 0;
      sp.textContent = '（' + pct + '%）';
      sp.style.color = pct >= 80 ? '#3a8f5e' : pct >= 60 ? '#e8912d' : '#d14343';
      App._recordPaperScore(pid, total, pct);
    }
  },
  _renderScoreHistory: function(pid) {
    var div = document.getElementById('score-history-' + pid);
    if (!div) return;
    var history = Storage.load('scoreHistory') || {};
    var h = history[pid] || [];
    if (h.length === 0) { div.innerHTML = ''; return; }
    var html = '<div class="score-history-title">📈 历史成绩</div>';
    for (var i = h.length - 1; i >= 0; i--)
      html += '<span class="score-history-item">第' + (i+1) + '次: ' + h[i].score + '分 (' + h[i].pct + '%) ' + h[i].date + '</span>';
    div.innerHTML = html;
  },

  _recordPaperScore: function(pid, total, pct) {
    var history = Storage.load('scoreHistory') || {};
    if (!history[pid]) history[pid] = [];
    var now = new Date();
    var dateStr = (now.getMonth()+1) + '/' + now.getDate();
    history[pid].push({ score: total, pct: pct, date: dateStr });
    if (history[pid].length > 10) history[pid] = history[pid].slice(-10);
    Storage.save('scoreHistory', history);
    this._renderScoreHistory(pid);
  },

  _renderMistakeBook: function() {
    var c = document.getElementById('page-mistakes'); if (!c) return;
    var list = MistakeBook.getList();
    if (list.length === 0) {
      c.innerHTML = '<h2 class="page-title">📌 错题本</h2><div class="empty-state">还没有收藏错题，在模拟试题和真题中点击 ☆ 即可将题目加入错题本</div>';
      return;
    }
    var html = '<h2 class="page-title">📌 错题本（' + list.length + ' 题）</h2><div class="mistake-list">';
    for (var i = 0; i < list.length; i++) {
      var m = list[i];
      html += '<div class="mistake-item"><div class="mistake-header"><span class="question-type type-' + m.type + '">' + m.type + '</span><span class="mistake-source">来源：' + m.source + '</span><button class="btn btn-sm btn-outline" onclick="MistakeBook.remove(\'' + m.id + '\');App._renderMistakeBook();">✕ 移除</button></div><p class="question-text"><strong>题目：</strong>' + m.question + '</p><details class="question-answer"><summary>查看参考答案</summary><div class="answer-content">' + m.answer.replace(/\n/g, '<br>') + '</div></details></div>';
    }
    html += '</div>';
    c.innerHTML = html;
  },

  _renderTimeline: function() {
    var c = document.getElementById('page-timeline'); if (!c) return;
    var td = [
      { m: '6月', p: '基础起步', t: ['英语单词第一轮开始（每天100词）','马原教材通读 + 思维导图梳理','政治徐涛强化课马原部分','确定湖师大马克思专业参考书目'], cl: '#4a90d9' },
      { m: '7月', p: '暑假攻坚', t: ['英语长难句 + 阅读早年真题','毛概教材通读 + 思维导图','马原重难点第二轮精读','政治史纲部分强化课','专业课每天保证3-4小时'], cl: '#50b86c' },
      { m: '8月', p: '暑假攻坚', t: ['英语阅读精练（2000-2010年真题）','习思教材通读 + 思维导图','政治毛中特 + 思修强化课','专业课第一轮背诵开始','整理三本书的背诵提纲'], cl: '#50b86c' },
      { m: '9月', p: '强化提升', t: ['英语阅读2011-2018年真题','政治1000题一刷','专业课第二轮背诵 + 真题模拟','开始接触湖师大历年真题','英语翻译 + 新题型专项训练'], cl: '#f0a040' },
      { m: '10月', p: '强化提升', t: ['英语阅读2019-2023年真题','政治1000题二刷（错题重点）','专业课第三轮背诵','专业课真题名词解释和简答专项练习','英语作文模板初步整理'], cl: '#f0a040' },
      { m: '11月', p: '冲刺模考', t: ['英语全真模考（每周1次）','政治肖八选择题 + 分析题思路','政治时政专题整理','专业课全真模考（按湖师大真题格式）','英语作文模板定型 + 每周2篇练习'], cl: '#e05555' },
      { m: '12月', p: '最后冲刺', t: ['英语最新2年真题模考 + 作文背诵','政治肖四全部背诵（核心！）','专业课第四轮快速过 + 查漏补缺','调整作息 + 模拟考场环境','考前一周：回顾错题 + 保持手感'], cl: '#e05555' }
    ];
    var h = '';
    for (var i = 0; i < td.length; i++) {
      var it = td[i];
      h += '<div class="timeline-item"><div class="timeline-line"><div class="timeline-dot" style="background-color:' + it.cl + '"></div>' + (i < td.length - 1 ? '<div class="timeline-connector"></div>' : '') + '</div><div class="timeline-content"><div class="timeline-card" style="border-left:4px solid ' + it.cl + '"><div class="timeline-card-header"><span class="timeline-month">' + it.m + '</span><span class="timeline-phase" style="background:' + it.cl + '">' + it.p + '</span></div><ul class="timeline-tasks">';
      for (var j = 0; j < it.t.length; j++) h += '<li>' + it.t[j] + '</li>';
      h += '</ul></div></div></div>';
    }
    c.innerHTML = h;
  }
};

(function() {
  var origShow = MindMap._showDetail;
  MindMap._showDetail = function(n, s) { origShow.call(MindMap, n, s); App._updateDetailOverlay(); };
  var origClose = MindMap._closeDetail;
  MindMap._closeDetail = function() { origClose.call(MindMap); App._updateDetailOverlay(); };
})();
