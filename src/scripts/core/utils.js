window.BioKB = window.BioKB || {};

(function(App) {
  App.utils = {
    getFilteredKnowledge: function() {
      var kb = App.knowledgeBase;
      var cat = App.state.activeCategory;
      var query = App.state.searchQuery;
      return kb.filter(function(item) {
        var catMatch = cat === 'all' || item.category === cat;
        var searchMatch = !query ||
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.tags.some(function(t) { return t.toLowerCase().includes(query.toLowerCase()); }) ||
          item.summary.toLowerCase().includes(query.toLowerCase());
        return catMatch && searchMatch;
      });
    },

    showToast: function(message) {
      var container = document.getElementById('toastContainer');
      var toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = '<span style="font-size:1.2rem;">\u2728</span> ' + message;
      container.appendChild(toast);
      setTimeout(function() { toast.remove(); }, 3000);
    },
  };
})(window.BioKB);
