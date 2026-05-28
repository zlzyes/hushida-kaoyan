// 通用思维导图树组件（增强版：支持节点点击查看知识详情）
const MindMap = {
  activeDetailNode: null,

  // 渲染整棵思维导图树
  render(containerId, treeData, options) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    var root = this._createTree(treeData, options || {});
    container.appendChild(root);
  },

  _createTree(node, options, depth) {
    if (depth === undefined) depth = 0;
    var wrapper = document.createElement('div');
    wrapper.className = 'mindmap-tree';

    var nodeEl = this._createNode(node, options, depth);

    if (node.children && node.children.length > 0) {
      var childrenContainer = document.createElement('div');
      childrenContainer.className = 'mindmap-children';
      if (depth >= 2) {
        childrenContainer.classList.add('collapsed');
      }
      for (var i = 0; i < node.children.length; i++) {
        childrenContainer.appendChild(this._createTree(node.children[i], options, depth + 1));
      }
      wrapper.appendChild(nodeEl);
      wrapper.appendChild(childrenContainer);
    } else {
      wrapper.appendChild(nodeEl);
    }

    return wrapper;
  },

  _createNode(node, options, depth) {
    if (depth === undefined) depth = 0;
    var el = document.createElement('div');
    el.className = 'mindmap-node';

    var labelRow = document.createElement('div');
    labelRow.className = 'mindmap-label-row';

    var hasChildren = node.children && node.children.length > 0;
    var hasContent = node.content && (node.content.definition || node.content.keyPoints || node.content.summary);

    // 展开/折叠按钮
    var toggle = document.createElement('span');
    toggle.className = 'mindmap-toggle';
    if (hasChildren) {
      toggle.innerHTML = depth >= 2 ? '&#9654;' : '&#9660;';
      toggle.classList.add('has-children');
      if (depth < 2) toggle.classList.add('expanded');
    } else if (hasContent) {
      toggle.innerHTML = '&#9679;';
      toggle.classList.add('has-content');
    } else {
      toggle.innerHTML = '&#8226;';
      toggle.classList.add('no-children');
    }
    labelRow.appendChild(toggle);

    // 节点文字
    var text = document.createElement('span');
    text.className = 'mindmap-text';
    if (depth === 0) text.classList.add('root');
    if (depth === 1) text.classList.add('chapter');
    if (hasContent) text.classList.add('clickable');
    text.textContent = node.title || node.label || '';
    if (hasContent) text.title = '点击查看详细内容';
    labelRow.appendChild(text);

    // 知识标签（如果有内容）
    if (hasContent) {
      var badge = document.createElement('span');
      badge.className = 'mindmap-badge';
      badge.textContent = '详';
      labelRow.appendChild(badge);
    }

    el.appendChild(labelRow);

    // 展开/折叠（仅子节点）
    if (hasChildren) {
      labelRow.addEventListener('click', (function(e) {
        e.stopPropagation();
        var parentTree = el.parentElement;
        var childrenContainer = parentTree.querySelector(':scope > .mindmap-children');
        if (childrenContainer) {
          var isCollapsed = childrenContainer.classList.contains('collapsed');
          if (isCollapsed) {
            childrenContainer.classList.remove('collapsed');
            toggle.innerHTML = '&#9660;';
            toggle.classList.add('expanded');
          } else {
            childrenContainer.classList.add('collapsed');
            toggle.innerHTML = '&#9654;';
            toggle.classList.remove('expanded');
          }
        }
      }));
    }

    // 点击文字查看知识详情
    if (hasContent) {
      text.addEventListener('click', (function(e) {
        e.stopPropagation();
        MindMap._showDetail(node, text);
      }));
      // 也允许点击整行
      if (!hasChildren) {
        labelRow.addEventListener('click', (function(e) {
          MindMap._showDetail(node, text);
        }));
      }
    }

    return el;
  },

  // 显示知识详情面板
  _showDetail(node, sourceEl) {
    var panel = document.getElementById('mindmap-detail-panel');
    if (!panel) {
      panel = this._createDetailPanel();
    }

    // 高亮当前节点
    if (this.activeDetailNode) {
      this.activeDetailNode.classList.remove('mindmap-active');
    }
    sourceEl.classList.add('mindmap-active');
    this.activeDetailNode = sourceEl;

    var c = node.content || {};

    var html = '';
    html += '<div class="detail-header">';
    html += '<h3 class="detail-title">' + (node.title || '') + '</h3>';
    html += '<button class="detail-close" onclick="MindMap._closeDetail()">&times;</button>';
    html += '</div>';
    html += '<div class="detail-body">';

    // 定义/概述
    if (c.definition) {
      html += '<div class="detail-section">';
      html += '<h4 class="detail-section-title">概念释义</h4>';
      html += '<p class="detail-text">' + c.definition + '</p>';
      html += '</div>';
    }

    // 核心要点
    if (c.keyPoints && c.keyPoints.length > 0) {
      html += '<div class="detail-section">';
      html += '<h4 class="detail-section-title">核心要点</h4>';
      html += '<ul class="detail-list">';
      for (var i = 0; i < c.keyPoints.length; i++) {
        html += '<li>' + c.keyPoints[i] + '</li>';
      }
      html += '</ul></div>';
    }

    // 关联概念
    if (c.relatedConcepts && c.relatedConcepts.length > 0) {
      html += '<div class="detail-section">';
      html += '<h4 class="detail-section-title">关联概念</h4>';
      html += '<div class="detail-tags">';
      for (var j = 0; j < c.relatedConcepts.length; j++) {
        html += '<span class="detail-tag">' + c.relatedConcepts[j] + '</span>';
      }
      html += '</div></div>';
    }

    // 易混淆辨析
    if (c.compareWith) {
      html += '<div class="detail-section">';
      html += '<h4 class="detail-section-title">易混淆辨析</h4>';
      html += '<p class="detail-text compare-text">' + c.compareWith + '</p>';
      html += '</div>';
    }

    // 考试提示
    if (c.examTips) {
      html += '<div class="detail-section exam-tips-section">';
      html += '<h4 class="detail-section-title">考试提示</h4>';
      html += '<p class="detail-text">' + c.examTips + '</p>';
      html += '</div>';
    }

    // 记忆口诀
    if (c.mnemonic) {
      html += '<div class="detail-section mnemonic-section">';
      html += '<h4 class="detail-section-title">记忆口诀</h4>';
      html += '<p class="detail-text mnemonic-text">' + c.mnemonic + '</p>';
      html += '</div>';
    }

    html += '</div>';

    panel.innerHTML = html;
    panel.classList.add('open');
  },

  _createDetailPanel() {
    var panel = document.createElement('div');
    panel.id = 'mindmap-detail-panel';
    panel.className = 'mindmap-detail-panel';
    document.body.appendChild(panel);
    return panel;
  },

  _closeDetail() {
    var panel = document.getElementById('mindmap-detail-panel');
    if (panel) {
      panel.classList.remove('open');
    }
    if (this.activeDetailNode) {
      this.activeDetailNode.classList.remove('mindmap-active');
      this.activeDetailNode = null;
    }
  },

  // 展开所有节点
  expandAll(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var allCollapsed = container.querySelectorAll('.mindmap-children.collapsed');
    for (var i = 0; i < allCollapsed.length; i++) {
      allCollapsed[i].classList.remove('collapsed');
    }
    var allToggles = container.querySelectorAll('.mindmap-toggle.has-children');
    for (var j = 0; j < allToggles.length; j++) {
      allToggles[j].innerHTML = '&#9660;';
      allToggles[j].classList.add('expanded');
    }
  },

  // 折叠所有节点
  collapseAll(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var allChildren = container.querySelectorAll('.mindmap-children');
    for (var i = 0; i < allChildren.length; i++) {
      allChildren[i].classList.add('collapsed');
    }
    var allToggles = container.querySelectorAll('.mindmap-toggle.has-children');
    for (var j = 0; j < allToggles.length; j++) {
      allToggles[j].innerHTML = '&#9654;';
      allToggles[j].classList.remove('expanded');
    }
  }
};
