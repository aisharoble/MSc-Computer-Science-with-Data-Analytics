// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav (SlickNav if available)
(function(){
  var ok = (window.jQuery && $.fn && $.fn.slicknav);
  if(ok){
    $('#mainNav > ul').slicknav({ label: 'Menu' });
  } else {
    // fallback: keep desktop nav visible
    const nav = document.getElementById('mainNav');
    if(nav) nav.style.display = 'block';
  }
})();

// Registration form: validation + data summary
$(function(){
  const $f = $('#registerForm');
  if(!$f.length) return;

  $f.on('submit', function(e){
    e.preventDefault();
    const form = this;
    if(!form.checkValidity()){ form.reportValidity(); return; }

    const name = form.fullname.value.trim();
    const tel  = form.telephone.value.trim();
    const tier = form.tier.value || '—';
    const ints = [...form.querySelectorAll('input[name="int"]:checked')].map(i=>i.value).join(', ') || 'None';

    const msg = document.getElementById('formMsg');
    msg.textContent = `Thanks, ${name}! Selected plan: ${tier}. Interests: ${ints}. We’ll call you on ${tel}.`;
    form.reset();
  });
});
