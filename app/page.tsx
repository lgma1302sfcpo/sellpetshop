import { ArrowUpRight, BarChart3, CalendarDays, Check, PackageSearch, PawPrint, Scissors, ShieldCheck, ShoppingCart, Store, UsersRound, WalletCards } from 'lucide-react';

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
        <div className="metric-row"><div><small>Vendas hoje</small><strong>R$ 4.860</strong><em>+18,4%</em></div><div><small>Atendimentos</small><strong>24</strong><em>6 agendados</em></div><div><small>Ticket médio</small><strong>R$ 202</strong><em>+ R$ 31</em></div></div>
        <div className="data-row"><div className="chart-card"><span>Faturamento da semana</span><div className="bars">{[38,54,45,73,88,62,79].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div><div className="agenda-card"><span>Próximos atendimentos</span><p><b>09:30</b><i>Thor</i><small>Banho + hidratação</small></p><p><b>10:20</b><i>Luna</i><small>Tosa higiênica</small></p><p><b>11:15</b><i>Mel</i><small>Banho</small></p></div></div>
      </div>
    </div>
  </div>;
}

export default function Home() {
  return <main>
    <header className="site-header shell"><a className="brand" href="#topo"><span><PawPrint size={17}/></span> Luiz Guilherme</a><nav aria-label="Navegação principal"><a href="#solucao">Solução</a><a href="#projetos">Projetos</a><a href="#incluido">O que inclui</a></nav><a className="header-cta" href="https://wa.me/5513997688584" target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowUpRight size={15}/></a></header>
    <section className="hero shell" id="topo"><div className="hero-copy"><span className="eyebrow"><i/> SISTEMA PENSADO PARA PET SHOPS</span><h1>Menos planilhas.<br/>Mais controle.<br/><em>Mais tempo para cuidar.</em></h1><p>Eu desenvolvo e adapto um sistema de gestão para a rotina real do seu pet shop — vendas, estoque, clientes, agenda e caixa reunidos em um só lugar.</p><div className="actions"><a className="primary" href="https://wa.me/5513997688584" target="_blank" rel="noreferrer">Quero ver uma demonstração <ArrowUpRight size={17}/></a><a className="secondary" href="#projetos">Ver projetos</a></div><div className="trust"><span><Check/> Acesso pela internet</span><span><Check/> Várias lojas</span><span><Check/> Feito sob medida</span></div></div><div className="hero-product"><ProductMockup/><div className="floating-note"><ShieldCheck/><span><b>Dados organizados</b><small>Permissões por funcionário</small></span></div></div></section>
    <div className="ticker"><div>VENDAS <i/> ESTOQUE <i/> CLIENTES E PETS <i/> BANHO E TOSA <i/> CAIXA <i/> RELATÓRIOS <i/> MÚLTIPLAS LOJAS <i/> VENDAS <i/> ESTOQUE <i/> CLIENTES E PETS <i/> BANHO E TOSA <i/> CAIXA <i/> RELATÓRIOS</div></div>
    <section className="benefits shell" id="solucao"><div className="section-heading"><div><span>01 / NA ROTINA</span><h2>O que muda no<br/><em>dia a dia da loja.</em></h2></div><p>O sistema reduz tarefas repetitivas, evita informações espalhadas e entrega uma visão clara da operação — no balcão ou fora da loja.</p></div><div className="benefit-grid">{benefits.map(({icon:Icon,title,text},i)=><article key={title}><span className="number">0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="project-section shell" id="projetos"><div className="section-heading"><div><span>02 / PROJETOS REAIS</span><h2>Não é só ideia.<br/><em>Já está funcionando.</em></h2></div><p>Produtos desenvolvidos para o mercado pet, com experiência real em reservas, serviços e gestão operacional.</p></div>
      <article className="project-card system-card"><div className="project-visual"><ProductMockup/></div><div className="project-copy"><span>GESTÃO PET · WEB · 2026</span><h3>PetFlow</h3><p>Uma central de operação para pet shops. A equipe vende, agenda, movimenta estoque e fecha o caixa; o gestor acompanha tudo com relatórios e acessos controlados.</p><ul><li>PDV e caixa</li><li>Estoque</li><li>Agenda</li><li>Multi-loja</li></ul><a href="#incluido">Conhecer os recursos <ArrowUpRight size={16}/></a></div></article>
      <article className="project-card reserva-card"><div className="reserva-collage"><img className="reserva-main" src="/assets/reserva-hero.webp" alt="Página inicial do Reserva Pet com tutora e seu cachorro"/><img className="reserva-small one" src="/assets/reserva-hospedagem.webp" alt="Cães em hospedagem pet"/><img className="reserva-small two" src="/assets/reserva-banho.webp" alt="Profissional realizando cuidados em um cachorro"/></div><div className="project-copy"><span>MARKETPLACE PET · WEB · 2026</span><h3>Reserva Pet</h3><p>Plataforma para tutores encontrarem hospedagem, creche, banho e tosa. Um produto completo, da descoberta do serviço até a reserva.</p><ul><li>Busca</li><li>Reservas</li><li>Parceiros</li><li>Responsivo</li></ul><a href="https://reserva-pet.vercel.app/" target="_blank" rel="noreferrer">Visitar o projeto <ArrowUpRight size={16}/></a></div></article>
    </section>
    <section className="included shell" id="incluido"><div className="included-intro"><span>03 / O QUE PODE INCLUIR</span><h2>Uma base completa.<br/><em>Adaptada ao seu jeito.</em></h2><p>Você não precisa mudar toda a rotina para caber no sistema. Eu entendo como a loja trabalha e configuro os módulos necessários.</p></div><div className="included-list">{included.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p><Check/></div>)}</div></section>
    <section className="proof shell"><div><Store/><strong>Uma ou várias lojas</strong><span>Operações separadas, visão centralizada.</span></div><div><UsersRound/><strong>Acesso por função</strong><span>Cada funcionário vê o que precisa.</span></div><div><BarChart3/><strong>Decisão com dados</strong><span>Relatórios para acompanhar o negócio.</span></div><div><Scissors/><strong>Feito para o setor pet</strong><span>Fluxos de loja, banho e tosa.</span></div></section>
    <section className="contact shell"><span>04 / PRÓXIMO PASSO</span><h2>Quer ver como isso<br/>funcionaria <em>na sua loja?</em></h2><p>Em uma conversa rápida eu conheço sua rotina, mostro o sistema e explico o que pode ser adaptado para o seu pet shop.</p><a href="https://wa.me/5513997688584" target="_blank" rel="noreferrer">Agendar uma demonstração <ArrowUpRight/></a></section>
    <footer className="shell"><span>© 2026 Luiz Guilherme</span><span>Sistemas e produtos digitais para o mercado pet.</span><a href="#topo">Voltar ao topo ↑</a></footer>
  </main>;
}
