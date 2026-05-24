window.BioKB = window.BioKB || {};

(function(App) {
  App.init = function() {
    App.particles.init();
    App.renderers.initCategories();
    App.renderers.renderKnowledgeList();
    App.renderers.renderStats();
    App.charts.init();

    // Auto-select first item for demo
    setTimeout(function() {
      App.state.activeKnowledgeId = 1;
      App.renderers.renderKnowledgeList();
      App.renderers.renderPreview();
    }, 400);

    // Search input listener
    document.getElementById('searchInput').addEventListener('input', function(e) {
      App.state.searchQuery = e.target.value;
      App.renderers.renderKnowledgeList();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
      }
      if (e.key === 'Escape') {
        App.state.activeKnowledgeId = null;
        App.renderers.renderKnowledgeList();
        App.renderers.renderPreview();
      }
    });
  };

  // Expose actions to global onclick handlers
  window.copyContent = App.actions.copyContent;
  window.regenerateKnowledge = App.actions.regenerateKnowledge;
  window.exportKnowledge = App.actions.exportKnowledge;

  document.addEventListener('DOMContentLoaded', App.init);
})(window.BioKB);
