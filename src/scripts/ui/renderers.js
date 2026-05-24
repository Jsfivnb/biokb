window.BioKB = window.BioKB || {};

(function(App) {
  App.renderers = {
    initCategories: function() {
      var container = document.getElementById('categoryPills');
      var cats = App.categories;
      var active = App.state.activeCategory;

      container.innerHTML = cats.map(function(c) {
        return '<span class="cat-pill' + (c.id === active ? ' active' : '') + '" data-cat="' + c.id + '">' + c.icon + ' ' + c.label + '</span>';
      }).join('');

      container.querySelectorAll('.cat-pill').forEach(function(pill) {
        pill.addEventListener('click', function() {
          App.state.activeCategory = this.dataset.cat;
          App.renderers.initCategories();
          App.renderers.renderKnowledgeList();
        });
      });
    },

    renderKnowledgeList: function() {
      var list = document.getElementById('knowledgeList');
      var filtered = App.utils.getFilteredKnowledge();
      var activeId = App.state.activeKnowledgeId;

      if (filtered.length === 0) {
        list.innerHTML = '<div class="empty-state"><div class="empty-icon">\uD83D\uDD2C</div><div style="font-weight:600;">无匹配结果</div><div style="font-size:0.8rem;">尝试更改搜索条件或分类</div></div>';
      } else {
        list.innerHTML = filtered.map(function(kb) {
          return '<div class="kb-item' + (kb.id === activeId ? ' active' : '') + '" data-id="' + kb.id + '">' +
            '<div class="kb-item-header">' +
              '<div class="kb-item-title">' + kb.title + '</div>' +
              '<span class="kb-item-badge ' + kb.badgeClass + '">' + kb.badge + '</span>' +
            '</div>' +
            '<div class="kb-item-meta">' +
              '<span>\uD83D\uDCC5 ' + kb.date + '</span>' +
              '<span class="kb-item-score"><span class="score-dot"></span> 置信度 ' + kb.confidence + '%</span>' +
            '</div>' +
          '</div>';
        }).join('');

        list.querySelectorAll('.kb-item').forEach(function(item) {
          item.addEventListener('click', function() {
            App.state.activeKnowledgeId = parseInt(this.dataset.id);
            App.renderers.renderKnowledgeList();
            App.renderers.renderPreview();
          });
        });
      }

      document.getElementById('kbCount').textContent = filtered.length + ' \u6761\u77E5\u8BC6';
    },

    renderStats: function() {
      var total = App.knowledgeBase.length;
      var avg = (App.knowledgeBase.reduce(function(s, k) { return s + k.confidence; }, 0) / total).toFixed(1);
      var tags = [...new Set(App.knowledgeBase.flatMap(function(k) { return k.tags; }))].length;

      var stats = [
        { icon: '\uD83D\uDCDA', iconClass: 'green', value: total, label: '\u77E5\u8BC6\u6761\u76EE' },
        { icon: '\uD83C\uDFAF', iconClass: 'cyan', value: avg + '%', label: '\u5E73\u5747\u7F6E\u4FE1\u5EA6' },
        { icon: '\uD83C\uDFF7\uFE0F', iconClass: 'purple', value: tags, label: '\u72EC\u7279\u6807\u7B7E' },
        { icon: '\u26A1', iconClass: 'pink', value: '7 \u6761/\u5929', label: '\u751F\u6210\u901F\u7387' },
      ];

      document.getElementById('statsBar').innerHTML = stats.map(function(s) {
        return '<div class="glass-card stat-card">' +
          '<div class="stat-icon ' + s.iconClass + '">' + s.icon + '</div>' +
          '<div class="stat-info">' +
            '<div class="stat-value">' + s.value + '</div>' +
            '<div class="stat-label">' + s.label + '</div>' +
          '</div>' +
        '</div>';
      }).join('');
    },

    renderPreview: function() {
      var kb = App.knowledgeBase.find(function(k) { return k.id === App.state.activeKnowledgeId; });
      var titleEl = document.getElementById('previewTitle');
      var tagsEl = document.getElementById('previewTags');
      var contentEl = document.getElementById('previewContent');

      if (!kb) {
        titleEl.textContent = '\u9009\u62E9\u4E00\u6761\u77E5\u8BC6\u4EE5\u9884\u89C8';
        tagsEl.innerHTML = '';
        contentEl.innerHTML = '<div class="empty-state"><div class="empty-icon">\uD83D\uDCDA</div><div style="font-weight:600;">\u6D4F\u89C8\u77E5\u8BC6\u5E93</div><div style="font-size:0.8rem;">\u4ECE\u5DE6\u4FA7\u9009\u62E9\u4E00\u4E2A\u6761\u76EE\u4EE5\u67E5\u770B\u8BE6\u7EC6\u5185\u5BB9</div></div>';
        return;
      }

      titleEl.textContent = kb.title;
      titleEl.classList.add('fade-transition');
      setTimeout(function() { titleEl.classList.remove('fade-transition'); }, 350);

      tagsEl.innerHTML = kb.tags.map(function(t) { return '<span class="preview-tag">#' + t + '</span>'; }).join('');

      contentEl.innerHTML = '<div class="fade-transition">' +
        '<div class="preview-section"><h3>\uD83D\uDCDD \u6458\u8981</h3><p>' + kb.summary + '</p></div>' +
        '<div class="preview-highlights">' +
          kb.highlights.map(function(h) {
            return '<div class="highlight-item">' +
              '<div class="highlight-label">' + h.label + '</div>' +
              '<div class="highlight-value' + (h.accent ? ' accent' : '') + '">' + h.value + '</div>' +
            '</div>';
          }).join('') +
        '</div>' +
        '<div class="preview-section"><h3>\uD83D\uDCD6 \u8BE6\u7EC6\u5185\u5BB9</h3><p>' + kb.content + '</p></div>' +
      '</div>';
    },
  };
})(window.BioKB);
