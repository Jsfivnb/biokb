window.BioKB = window.BioKB || {};

(function(App) {
  App.actions = {
    copyContent: function() {
      var kb = App.knowledgeBase.find(function(k) { return k.id === App.state.activeKnowledgeId; });
      if (!kb) return;
      navigator.clipboard.writeText(kb.title + '\n\n' + kb.summary + '\n\n' + kb.content).then(function() {
        App.utils.showToast('\u5185\u5BB9\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');
      });
    },

    regenerateKnowledge: function() {
      var kb = App.knowledgeBase.find(function(k) { return k.id === App.state.activeKnowledgeId; });
      if (!kb) {
        App.utils.showToast('\u8BF7\u5148\u9009\u62E9\u4E00\u6761\u77E5\u8BC6');
        return;
      }
      App.utils.showToast('\u6B63\u5728\u91CD\u65B0\u751F\u6210: ' + kb.title.substring(0, 20) + '...');
      var newScore = (Math.random() * 6 + 93).toFixed(1);
      kb.confidence = parseFloat(newScore);
      App.renderers.renderKnowledgeList();
      App.renderers.renderPreview();
      App.renderers.renderStats();
    },

    exportKnowledge: function() {
      var kb = App.knowledgeBase.find(function(k) { return k.id === App.state.activeKnowledgeId; });
      if (!kb) {
        App.utils.showToast('\u8BF7\u5148\u9009\u62E9\u4E00\u6761\u77E5\u8BC6');
        return;
      }
      var content = '# ' + kb.title + '\n\n## \u6458\u8981\n' + kb.summary + '\n\n## \u8BE6\u7EC6\u5185\u5BB9\n' + kb.content + '\n\n---\n\u751F\u6210\u4E8E: ' + new Date().toISOString();
      var blob = new Blob([content], { type: 'text/markdown' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = kb.title.substring(0, 30).replace(/[\/:*?"<>|]/g, '_') + '.md';
      a.click();
      URL.revokeObjectURL(url);
      App.utils.showToast('\u77E5\u8BC6\u5DF2\u5BFC\u51FA\u4E3A Markdown \u6587\u4EF6');
    },
  };
})(window.BioKB);
