window.BioKB = window.BioKB || {};

(function(App) {
  var canvas, ctx, particles, mouseX, mouseY;

  function initParticles() {
    particles = [];
    var count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 150);
    for (var i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.8 + 0.4,
        glow: Math.random() * 0.5 + 0.3,
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var accent = '0, 255, 136';
    var cyan = '0, 212, 255';

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + accent + ', ' + (p.glow * 0.6) + ')';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + accent + ', ' + (p.glow * 0.06) + ')';
      ctx.fill();

      for (var j = i + 1; j < particles.length; j++) {
        var q = particles[j];
        var dx = p.x - q.x;
        var dy = p.y - q.y;
        var dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          var alpha = (1 - dist / 120) * 0.12;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(' + (dist < 60 ? accent : cyan) + ', ' + alpha + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      var mx = p.x - mouseX;
      var my = p.y - mouseY;
      var mDist = Math.sqrt(mx * mx + my * my);
      if (mDist < 180) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        var alpha = (1 - mDist / 180) * 0.15;
        ctx.strokeStyle = 'rgba(' + accent + ', ' + alpha + ')';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
    requestAnimationFrame(drawParticles);
  }

  App.particles = {
    init: function() {
      canvas = document.getElementById('particleCanvas');
      ctx = canvas.getContext('2d');
      mouseX = 0;
      mouseY = 0;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      });

      window.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      initParticles();
      drawParticles();
    },
  };
})(window.BioKB);
