import { ArrowUpRight, BarChart3, CalendarDays, Check, PackageSearch, PawPrint, PiggyBank, Scissors, ShieldCheck, ShoppingCart, Store, UsersRound, WalletCards } from 'lucide-react';
import type { CSSProperties } from 'react';
import { CountUp, DogBall, GrowthArrows, NotificationCycle, PawTrail, Reveal } from './reveal';

const heroToasts = [
  { icon: '💰', title: 'Nova venda registrada', sub: 'R$ 89,90 · Pix' },
  { icon: '📅', title: 'Novo agendamento', sub: 'Banho e tosa · 14:30' },
];

const dashToasts = [
  { icon: '🐾', title: 'Novo pet cadastrado', sub: 'Thor · Golden Retriever' },
  { icon: '📦', title: 'Estoque atualizado', sub: 'Ração premium · +40un' },
  { icon: '✂️', title: 'Banho e tosa agendado', sub: 'Amanhã · 09:30' },
];

const benefits = [
  { icon: ShoppingCart, title: 'Venda sem atrito', text: 'PDV rápido, Pix, dinheiro e cartões — inclusive produtos vendidos por peso.' },
  { icon: PackageSearch, title: 'Estoque sob controle', text: 'Custos, fornecedores, alertas e saldo separado por loja.' },
  { icon: CalendarDays, title: 'Agenda que se organiza', text: 'Banho e tosa com duração, profissional, comissão e bloqueio de horários.' },
  { icon: WalletCards, title: 'Caixa que fecha', text: 'Abertura, sangria, suprimento e conferência por forma de pagamento.' },
];

const included = [
  'Produtos, categorias, marcas, fornecedores, preços e custos',
  'Clientes, vários pets por tutor e histórico de compras',
  'Relatórios de vendas, faturamento, espécies e pagamentos',
  'Usuários com permissões específicas e registro de ações',
  'Uma ou mais lojas com estoques e caixas separados',
  'Importação de produtos e estoque por planilha',
  'Lembretes de agendamento pelo WhatsApp',
  'Área fiscal configurada para a realidade da empresa',
];

function ProductMockup() {
  return <div className="product-window" aria-label="Prévia do sistema de gestão PetFlow">
    <div className="window-bar"><i/><i/><i/><span>PetFlow · Visão geral</span></div>
    <div className="product-layout">
      <aside className="product-side"><div className="mini-brand"><PawPrint size={16}/><b>PetFlow</b></div>{['Visão geral','Vendas','Estoque','Clientes','Banho & tosa','Caixa'].map((item,index)=><div className={index===0?'active':''} key={item}>{item}</div>)}</aside>
      <div className="product-main">
        <div className="product-title"><div><small>SEGUNDA-FEIRA, 14 SET</small><strong>Bom dia, equipe 👋</strong></div><button>+ Nova venda</button></div>
        <div className="metric-row"><div><small>Vendas hoje</small><strong><CountUp value={4860} prefix="R$ "/></strong><em>+18,4%</em></div><div><small>Atendimentos</small><strong><CountUp value={24}/></strong><em>6 agendados</em></div><div><small>Ticket médio</small><strong><CountUp value={202} prefix="R$ "/></strong><em>+ R$ 31</em></div></div>
        <div className="data-row"><div className="chart-card"><span>Faturamento da semana</span><div className="bars mount">{[38,54,45,73,88,62,79].map((h,i)=><i key={i} style={{'--h':`${h}%`,animationDelay:`${i*70}ms`} as CSSProperties}/>)}</div></div><div className="agenda-card"><span>Próximos atendimentos</span><p><b>09:30</b><i>Thor</i><small>Banho + hidratação</small></p><p><b>10:20</b><i>Luna</i><small>Tosa higiênica</small></p><p><b>11:15</b><i>Mel</i><small>Banho</small></p></div></div>
      </div>
    </div>
  </div>;
}

function DashCash() {
  return <div className="dash-highlight-wrap">
    <div className="product-window dash-mini" aria-label="Prévia da tela de caixa">
      <div className="window-bar"><i/><i/><i/><span>PetFlow · Caixa</span></div>
      <div className="dash-body">
        <div className="dash-total"><small>SALDO EM CAIXA HOJE</small><strong><CountUp value={2418} prefix="R$ "/></strong><em>Fechamento previsto às 19h</em></div>
        <div className="dash-rows"><div><span>Dinheiro</span><b>R$ 320</b></div><div><span>Pix</span><b>R$ 1.240</b></div><div><span>Cartão</span><b>R$ 858</b></div></div>
      </div>
    </div>
    <NotificationCycle messages={dashToasts} className="toast-anchor"/>
  </div>;
}

function DashReports() {
  return <div className="product-window dash-mini" aria-label="Prévia da tela de relatórios">
    <div className="window-bar"><i/><i/><i/><span>PetFlow · Relatórios</span></div>
    <div className="dash-body">
      <span className="dash-label">FATURAMENTO POR CATEGORIA</span>
      <div className="bars small">{[30,55,40,70,50,65,80].map((h,i)=><i key={i} style={{'--h':`${h}%`,transitionDelay:`${i*60}ms`} as CSSProperties}/>)}</div>
      <div className="dash-legend"><span><i className="dot dot1"/>Produtos · 48%</span><span><i className="dot dot2"/>Serviços · 34%</span><span><i className="dot dot3"/>Banho e tosa · 18%</span></div>
    </div>
  </div>;
}

function DashRevenue() {
  return <div className="dash-highlight-wrap">
    <div className="product-window dash-mini" aria-label="Prévia da tela financeira">
      <div className="window-bar"><i/><i/><i/><span>PetFlow · Financeiro</span></div>
      <div className="dash-body">
        <small>FATURAMENTO DO MÊS</small><strong><CountUp value={18240} prefix="R$ "/></strong><em>+22% vs. mês anterior</em>
        <div className="mini-spark">{[24,38,30,52,44,68,60,80].map((h,i)=><i key={i} style={{'--h':`${h}%`,transitionDelay:`${i*50}ms`} as CSSProperties}/>)}</div>
        <div className="coin-fx" aria-hidden="true"><span>R$</span><span>R$</span><span>R$</span></div>
      </div>
    </div>
    <GrowthArrows count={3}/>
  </div>;
}

function DashEconomy() {
  return <div className="product-window dash-mini" aria-label="Prévia de economia">
    <div className="window-bar"><i/><i/><i/><span>PetFlow · Economia</span></div>
    <div className="dash-body dash-economy">
      <span className="dash-label">GASTOS ANTES x DEPOIS</span>
      <div className="econ-compare">
        <div className="econ-col"><div className="econ-bars scattered"><i/><i/><i/><i/></div><small>Sem controle</small></div>
        <div className="econ-arrow">→</div>
        <div className="econ-col"><div className="econ-bars organized"><i/></div><small>Com o sistema</small></div>
      </div>
      <div className="econ-result"><PiggyBank size={16}/><span>Economia estimada <b><CountUp value={640} prefix="R$ "/>/mês</b></span></div>
    </div>
  </div>;
}

export default function Home() {
  return <main>
    <header className="site-header shell"><a className="brand" href="#topo"><span><PawPrint size={17}/></span><span className="brand-text">Luiz Guilherme<small>Sistemas de gestão para Pet Shops</small></span></a><nav aria-label="Navegação principal"><a href="#solucao">Solução</a><a href="#projetos">Projetos</a><a href="#incluido">O que inclui</a></nav><a className="header-cta" href="https://wa.me/5513997688584" target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowUpRight size={15}/></a></header>
    <section className="hero shell" id="topo"><div className="hero-copy"><span className="eyebrow"><i/> SISTEMA PENSADO PARA PET SHOPS</span><h1>Menos planilhas.<br/>Mais controle.<br/><em>Mais tempo para cuidar.</em></h1><p>Eu desenvolvo e adapto um sistema de gestão para a rotina real do seu pet shop — vendas, estoque, clientes, agenda e caixa reunidos em um só lugar.</p><div className="actions"><a className="primary" href="https://wa.me/5513997688584" target="_blank" rel="noreferrer">Quero ver uma demonstração <ArrowUpRight size={17}/></a><a className="secondary" href="#projetos">Ver projetos</a></div><div className="trust"><span><Check/> Acesso pela internet</span><span><Check/> Várias lojas</span><span><Check/> Feito sob medida</span></div></div><div className="hero-product"><div className="hero-float"><ProductMockup/><div className="floating-note"><ShieldCheck/><span><b>Dados organizados</b><small>Permissões por funcionário</small></span></div><NotificationCycle messages={heroToasts} className="toast-hero"/></div></div></section>
    <div className="ticker" aria-label="Módulos do sistema"><span className="ticker-label">TUDO EM UM SÓ SISTEMA</span><div className="ticker-track"><div className="ticker-scroll">{[0,1,2,3].map(g=><div className="ticker-group" key={g} aria-hidden={g>0}>{['VENDAS','ESTOQUE','CLIENTES E PETS','BANHO E TOSA','CAIXA','RELATÓRIOS','MÚLTIPLAS LOJAS'].map(item=><span key={item}>{item}<i/></span>)}</div>)}</div></div></div>
    <PawTrail/>
    <section className="included-wrap shell"><Reveal className="included" id="incluido" variant="left"><div className="included-intro"><span className="badge">01 / O QUE VOCÊ VAI TER</span><h2>Veja tudo que vai ter<br/>no <em>seu sistema.</em></h2><p>Chega de planilha perdida, caderno de agendamento e estoque no chute. Aqui está o pacote completo que organiza sua loja — e você só paga pelo que precisa.</p></div><div className="included-list">{included.map((item,i)=><div key={item} style={{transitionDelay:`${i*60}ms`}}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p><span className="check-badge"><Check/></span></div>)}</div></Reveal></section>
    <section className="dash-strip shell"><span className="dash-strip-label">TELAS QUE VOCÊ USA TODO DIA</span><div className="dash-grid">
      <Reveal variant="up" delay={0}><DashCash/></Reveal>
      <Reveal variant="scale" delay={110}><DashReports/></Reveal>
      <Reveal variant="up" delay={220}><DashRevenue/></Reveal>
      <Reveal variant="right" delay={330}><DashEconomy/></Reveal>
    </div></section>
    <section className="benefits shell" id="solucao"><Reveal className="section-heading" variant="left"><div><span>02 / NA ROTINA</span><h2>O que muda no<br/><em>dia a dia da loja.</em></h2></div><p>O sistema reduz tarefas repetitivas, evita informações espalhadas e entrega uma visão clara da operação — no balcão ou fora da loja.</p></Reveal><div className="benefit-grid">{benefits.map(({icon:Icon,title,text},i)=><Reveal key={title} variant="scale" delay={i*90}><article><span className="number">0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></section>
    <div className="ball-strip shell"><DogBall/><p>Simples de aprender, fácil de usar todo santo dia.</p></div>
    <section className="project-section shell" id="projetos"><Reveal className="section-heading" variant="left"><div><span>03 / PROJETOS REAIS</span><h2>Não é só ideia.<br/><em>Já está funcionando.</em></h2></div><p>Produtos desenvolvidos para o mercado pet, com experiência real em reservas, serviços e gestão operacional.</p></Reveal>
      <Reveal variant="scale"><article className="project-card system-card"><div className="project-visual"><ProductMockup/></div><div className="project-copy"><span>GESTÃO PET · WEB · 2026</span><h3>PetFlow</h3><p>Uma central de operação para pet shops. A equipe vende, agenda, movimenta estoque e fecha o caixa; o gestor acompanha tudo com relatórios e acessos controlados.</p><ul><li>PDV e caixa</li><li>Estoque</li><li>Agenda</li><li>Multi-loja</li></ul><a href="#incluido">Conhecer os recursos <ArrowUpRight size={16}/></a></div></article></Reveal>
      <Reveal variant="right" delay={120}><article className="project-card reserva-card"><div className="reserva-collage"><img className="reserva-main" src="/assets/reserva-hero.webp" alt="Página inicial do Reserva Pet com tutora e seu cachorro"/><img className="reserva-small one" src="/assets/reserva-hospedagem.webp" alt="Cães em hospedagem pet"/><img className="reserva-small two" src="/assets/reserva-banho.webp" alt="Profissional realizando cuidados em um cachorro"/></div><div className="project-copy"><span>MARKETPLACE PET · WEB · 2026</span><h3>Reserva Pet</h3><p>Plataforma para tutores encontrarem hospedagem, creche, banho e tosa. Um produto completo, da descoberta do serviço até a reserva.</p><ul><li>Busca</li><li>Reservas</li><li>Parceiros</li><li>Responsivo</li></ul><a href="https://reserva-pet.vercel.app/" target="_blank" rel="noreferrer">Visitar o projeto <ArrowUpRight size={16}/></a></div></article></Reveal>
    </section>
    <section className="proof shell">{[{Icon:Store,title:'Uma ou várias lojas',text:'Operações separadas, visão centralizada.'},{Icon:UsersRound,title:'Acesso por função',text:'Cada funcionário vê o que precisa.'},{Icon:BarChart3,title:'Decisão com dados',text:'Relatórios para acompanhar o negócio.'},{Icon:Scissors,title:'Feito para o setor pet',text:'Fluxos de loja, banho e tosa.'}].map(({Icon,title,text},i)=><Reveal key={title} variant="up" delay={i*80}><div><Icon/><strong>{title}</strong><span>{text}</span></div></Reveal>)}</section>
    <section className="contact shell"><Reveal variant="scale"><span>04 / PRÓXIMO PASSO</span><h2>Quer ver como isso<br/>funcionaria <em>na sua loja?</em></h2><p>Em uma conversa rápida eu conheço sua rotina, mostro o sistema e explico o que pode ser adaptado para o seu pet shop.</p><a href="https://wa.me/5513997688584" target="_blank" rel="noreferrer">Agendar uma demonstração <ArrowUpRight/></a></Reveal></section>
    <footer className="shell"><span>© 2026 Luiz Guilherme</span><span>Sistemas e produtos digitais para o mercado pet.</span><a href="#topo">Voltar ao topo ↑</a></footer>
  </main>;
}
