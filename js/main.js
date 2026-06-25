const tabs = ['Todos','Saúde da Mulher','Gestação','Doppler','Elastografia','Especializados','Geral'];
const miniCards = document.querySelector('#miniCards');
const tabsBox = document.querySelector('#serviceTabs');
const servicesGrid = document.querySelector('#servicesGrid');
const testimonialsGrid = document.querySelector('#testimonialsGrid');

// Renderiza os mini cards da seção Sobre de forma dinâmica e reutilizável.
miniCards.innerHTML = MINI_CARDS.map(item => `<article>${item}</article>`).join('');

// Cria o menu de filtros de serviços.
tabsBox.innerHTML = tabs.map(tab => `<button class="tab-btn ${tab === 'Todos' ? 'active' : ''}" data-tab="${tab}">${tab}</button>`).join('');

// Renderiza os cards conforme a categoria selecionada pelo usuário.
function renderServices(category = 'Todos') {
  const filtered = category === 'Todos' ? SERVICES : SERVICES.filter(service => service.category === category);
  servicesGrid.innerHTML = filtered.map(service => `
    <article class="service-card">
      <img src="${service.image}" alt="${service.title}">
      <div class="service-body">
        <h3>${service.title}</h3>
        <h4>${service.subtitle}</h4>
        ${service.points.map(point => `<p><span>✦</span>${point}</p>`).join('')}
        <button class="service-btn" onclick="window.open('https://wa.me/5591983996452?text=Olá! Quero agendar: ${encodeURIComponent(service.title)}', '_blank')"><span>Agendar exame</span><img src="./assets/whatsapp.png" alt=""></button>
      </div>
    </article>
  `).join('');
}

// Renderiza depoimentos estáticos no site, sem dependência de CRM/API.
function renderTestimonials() {
  testimonialsGrid.innerHTML = TESTIMONIALS.map(item => `
    <article class="testimonial-card">
      <div class="testimonial-stars" aria-label="Avaliação cinco estrelas">★★★★★</div>
      <p>"${item.text}"</p>
      <div class="testimonial-person">
        <span class="testimonial-avatar">${item.initials}</span>
        <div>
          <strong>${item.name}</strong>
          <small>${item.label}</small>
        </div>
      </div>
    </article>
  `).join('');
}

// Controla o clique nas categorias de serviços.
tabsBox.addEventListener('click', event => {
  const button = event.target.closest('.tab-btn');
  if (!button) return;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  renderServices(button.dataset.tab);
});

// Revela blocos no scroll usando IntersectionObserver nativo.
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelector('#menuToggle').addEventListener('click', () => document.querySelector('#navMenu').classList.toggle('active'));
document.querySelector('#whatsappFloat').addEventListener('click', () => document.querySelector('#whatsappBox').classList.toggle('active'));
// Envia a solicitação para o WhatsApp da unidade selecionada no formulário de contato.
document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();

  const form = event.target;
  const name = form.nome.value.trim();
  const phone = form.telefone.value.trim();
  const clinic = form.clinica.value;
  const exam = form.exame.value;
  const message = form.mensagem.value.trim();

  const clinics = {
    'belem': { label: 'Unidade Belém', phone: '5591983996452' },
    'sao-felix': { label: 'Unidade São Félix', phone: '5594992364486' }
  };

  const selectedClinic = clinics[clinic];
  if (!selectedClinic) return;

  const whatsappText = `Olá! Vim pelo site e gostaria de falar com alguém da ${selectedClinic.label}.\n\nNome: ${name}\nTelefone: ${phone}\nExame: ${exam}${message ? `\nMensagem: ${message}` : ''}`;

  window.open(`https://wa.me/${selectedClinic.phone}?text=${encodeURIComponent(whatsappText)}`, '_blank');
});

renderServices();
renderTestimonials();
