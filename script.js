/* CONFIGURAÇÃO DO CARDÁPIO DIGITAL ZIPITTUS */
const CONFIG = {
  nome: 'Zipittus Pizzaria Forno à Lenha',
  info: 'Quarta a domingo, das 18h às 22h30 · Entrega e retirada',
  whatsapp: '5519999999999', // Digite o WhatsApp oficial aqui (DDI + DDD + Número)

  // Categorias do Cardápio
  categorias: [
    {
      id: 'salgadas',
      nome: '🍕 Pizzas Salgadas',
      tamanhos: ['Grande', 'Média', 'Pequena'],
      hasSizes: true,
      itens: [
        ['001', 'MUSSARELA', 'mussarela, rodelas de tomate', 56.0],
        ['002', 'MARGUERITA', 'mussarela, rodelas de tomate, parmesão, manjericão', 62.0],
        ['003', 'PIZZA DO PITY', 'mussarela, peito de peru, ricota, gorgonzola, alcaparras', 79.0],
        ['004', 'RÚCULA', 'mussarela, tomate seco, rúcula', 65.0],
        ['005', 'ALCACHOFRA', 'mussarela, alcachofra, parmesão', 81.0],
        ['006', 'CATUPIRY', 'mussarela, catupiry', 69.0],
        ['007', 'QUATRO QUEIJOS', 'rodelas de tomate, mussarela, provolone, parmesão, catupiry', 72.0],
        ['008', 'PEITO DE PERU COM POLENGUINHO', 'mussarela, peito de peru, polenguinho, parmesão', 76.0],
        ['009', 'LOMBO CANADENSE COM POLENGUINHO', 'lombo, polenguinho, mussarela, parmesão', 68.0],
        ['010', 'QUATRO QUEIJOS COM ALHO', 'rodelas de tomate, mussarela, provolone, gorgonzola, catupiry, alho', 76.0],
        ['011', 'PEITO DE PERU COM TOMATE SECO', 'mussarela, peito de peru, tomate seco, cheddar', 78.0],
        ['012', 'CINCO QUEIJOS', 'rodelas de tomate, mussarela, provolone, parmesão, catupiry, gorgonzola', 75.0],
        ['013', 'MISTO QUENTE', 'presunto, mussarela, rodelas de tomate', 63.0],
        ['014', 'PALMITO', 'mussarela, creme de leite, palmito', 72.0],
        ['015', 'PALMITO COM FRANGO', 'mussarela, creme de leite, palmito, peito de frango', 76.0],
        ['016', 'CHAMPIGNON', 'mussarela, champignon, creme de leite', 63.0],
        ['017', 'SHITAKE', 'mussarela, shitake, parmesão', 77.0],
        ['018', 'ALFACE AMERICANA', 'mussarela, rodelas de tomate, alface, bacon, creme de leite, alho', 64.0],
        ['019', 'BRÓCOLIS COM BACON E ALHO', 'mussarela, brócolis, bacon, alho', 66.0],
        ['020', 'BRÓCOLIS COM BACALHAU', 'mussarela, brócolis, bacalhau', 72.0],
        ['021', 'BRÓCOLIS COM SHITAKE', 'mussarela, brócolis, shitake, parmesão', 79.0],
        ['022', 'ESCAROLA COM BACON E ALHO', 'mussarela, escarola, bacon, alho', 63.0],
        ['023', 'ESCAROLA COM ALICHE', 'mussarela, escarola, aliche', 65.0],
        ['024', 'NATURAL', 'mussarela, ervilha, cenoura, palmito, champignon, creme de leite', 69.0],
        ['025', 'FRANGO COM CATUPIRY', 'mussarela, frango, catupiry', 75.0],
        ['026', 'FRANGO COM CHAMPIGNON', 'mussarela, frango, creme de leite, champignon', 70.0],
        ['027', 'CALABRESA', 'mussarela, calabresa', 64.0],
        ['028', 'CALABRESA COM CEBOLAS', 'mussarela, calabresa, cebola', 66.0],
        ['029', 'CALABRESA COM CATUPIRY', 'mussarela, calabresa, catupiry', 71.0],
        ['030', 'CALABRESA COM GORGONZOLA', 'mussarela, calabresa, gorgonzola', 73.0],
        ['031', 'PALMITO COM TOMATE SECO', 'mussarela, palmito, tomate seco', 75.0],
        ['032', 'ESCAROLA COM CALABRESA', 'mussarela, escarola, calabresa', 64.0],
        ['033', 'LOMBINHO COM CEBOLAS', 'mussarela, lombinho, cebola', 63.0],
        ['034', 'LOMBINHO COM CATUPIRY', 'mussarela, lombinho, catupiry', 71.0],
        ['035', 'LOMBINHO COM CHEDDAR', 'mussarela, lombinho, cheddar', 72.0],
        ['036', 'BRÓCOLIS COM GORGONZOLA', 'mussarela, brócolis, gorgonzola, ricota', 74.0],
        ['037', 'ALHO PORÓ', 'mussarela, alho poró, cebola, bacon, parmesão', 72.0],
        ['038', 'MUSSARELA BÚFALA C/ TOMATE SECO', 'mussarela de búfala, tomate seco, rúcula', 80.0],
        ['039', 'PORTUGUESA', 'presunto, mussarela, calabresa, ervilha, milho, palmito', 66.0],
        ['040', 'PORTUGUESA COM CEBOLAS E OVOS', 'presunto, mussarela, calabresa, ervilha, milho, palmito, ovo, cebola', 72.0],
        ['041', 'ATUM COM PALMITO', 'mussarela, atum, palmito', 79.0],
        ['042', 'ATUM COM CEBOLAS', 'mussarela, atum, cebola', 73.0],
        ['043', 'ALICHE', 'mussarela, aliche', 65.0],
        ['044', 'BACALHAU', 'mussarela, bacalhau, cebola', 76.0],
        ['045', 'CAMARÃO COM CEBOLAS E CATUPIRY', 'mussarela, camarão, cebola, catupiry', 101.0],
        ['046', 'CAMARÃO COM CATUPIRY', 'mussarela, camarão, catupiry', 99.0],
        ['047', 'ZIPITTUS', 'mussarela, lombinho, creme de leite, parmesão', 64.0],
        ['048', 'ZIPITTINHO', 'mussarela, parma, parmesão, cebola', 86.0],
        ['049', 'PRESUNTO ITALIANO C/ MUSSARELA BÚFALA', 'mussarela, parma, tomate seco, mussarela de búfala, rúcula', 93.0],
        ['050', 'FILÉ MIGNON', 'mussarela, filé, champignon, catupiry', 86.0],
        ['051', 'FILÉ MIGNON COM SHITAKE', 'mussarela, shitake, filé, parmesão', 92.0],
        ['052', 'PEPERONE', 'mussarela, peperone, cebola', 82.0],
        ['053', 'PALMITO AOS 3 QUEIJOS', 'presunto picado, parmesão, mussarela, palmito, rodelas de tomate, gorgonzola', 82.0],
        ['054', 'BAIANA', 'mussarela, calabresa moída, pimenta dedo de moça, cebola', 70.0],
        ['055', 'PIZZA DO TALLES', 'mussarela de búfala, alho poró, champignon, peperone, catupiry', 97.0],
        ['056', 'PEITO DE PERU C/ PALMITO', 'peito de peru, palmito, mussarela, champignon, catupiry', 84.0],
        ['057', 'FRANCESA', 'mussarela, catupiry, frango, batata palha', 79.0],
        ['058', 'ALFACE AMERICANA C/ GORGONZOLA', 'mussarela, rodelas de tomate, alface, gorgonzola, alho', 68.0],
        ['059', 'MARGUERITA DE BÚFALA', 'mussarela de búfala, rodela de tomate, parmesão e manjericão', 82.0],
        ['060', 'ATUM COM CATUPIRY E PALMITO', 'mussarela, atum, palmito, catupiry', 87.0],
        ['061', 'A GRANDE PIZZA', 'mussarela, alho, cebola, gorgonzola, rodelas de tomate', 70.0],
        ['062', 'BRÓCOLIS ESPECIAL', 'mussarela, brócolis, alho, bacon, catupiry', 77.0],
        ['063', 'FRANGO ESPECIAL', 'frango, mussarela, palmito, milho, catupiry', 81.0],
        ['064', 'FILÉ MIGNON COM CHEDDAR', 'tomate, filé mignon, cebola ao shoyu, cheddar', 92.0],
        ['065', 'TOMATINE', 'mussarela de búfala, parmesão, tomate morango, manjericão', 74.0],
        ['066', 'FILÉ MIGNON COM FUNGHI', 'tomate, filé mignon, creme de leite, catupiry, funghi, mussarela', 100.0],
        ['067', 'PALMITO COM ALCAPARRAS', 'mussarela, palmito, parmesão, cebola, gorgonzola, alcaparras', 80.0],
        ['068', 'ROMANESCA', 'mussarela, aliche, tomate cereja e parmesão', 77.0],
        ['069', 'CATUPIRY C/ PARMESÃO, CEBOLA E BACON', 'mussarela, catupiry, parmesão, cebola, bacon', 75.0],
        ['070', 'ATUM C/ PIMENTA DEDO DE MOÇA', 'mussarela, atum, rodelas de tomate, palmito, pimenta dedo de moça', 83.0],
        ['071', 'PIZZA CATALANO', 'mussarela, rodelas de tomate, milho, bacon, alho', 65.0],
        ['072', 'ABOBRINHA', 'mussarela, parmesão, abobrinha, cream cheese', 66.0],
        ['073', 'PRESUNTO ITALIANO COM ABOBRINHA', 'parma, mussarela de búfala, parmesão, abobrinha, cream cheese, tomate morango, rúcula', 101.0],
        ['074', 'SHIMEJI', 'mussarela, shimeji, parmesão', 77.0],
        ['075', 'CAMARÃO COM SHIMEJI', 'mussarela, camarão, shimeji, parmesão, catupiry, alho', 104.0],
        ['076', 'FILÉ MIGNON COM SHIMEJI', 'mussarela, filé mignon, shimeji, alho, parmesão, cebolinha', 89.0],
        ['077', 'AQUELA - PIZZA LÉO FRANCHI', 'mussarela, palmito, champignon, bacon, tomate seco, catupiry', 83.0],
        ['078', 'CAPRESE', 'molho especial, mussarela, tomate caqui, mussarela de búfala, manjericão, pesto de azeitonas', 85.0],
        ['079', 'VEGETARIANA', 'mussarela de búfala, tomate morango, alface, rúcula, cebola roxa, azeitona preta, parmesão', 75.0],
        ['080', 'PRESUNTO ITALIANO COM ALHO PORÓ', 'mussarela de búfala, presunto italiano, alho poró, parmesão, azeitona preta', 93.0],
        ['081', 'RICOTTA FRESCA', 'ricota de búfala artesanal, gorgonzola, tomate morango e cebola roxa', 76.0],
        ['082', 'QUATRO FORMAGLIO COM FUNGHI', 'mussarela, catupiry, gorgonzola, provolone e funghi', 102.0],
        ['083', 'CARBONARA', 'mussarela, bacon, ovos, provolone e pimenta dedo de moça', 76.0],
        ['084', 'NAPOLITANA', 'mussarela, rodelas de tomate e parmesão', 62.0],
      ],
    },
    {
      id: 'bordas',
      nome: '🧀 Bordas Recheadas',
      tamanhos: ['Adicional'],
      hasSizes: false,
      itens: [
        ['100', 'Borda de Catupiry', 'Recheio cremoso sabor Catupiry', 19.0],
        ['101', 'Borda de Cheddar', 'Cheddar especial para borda', 22.0],
        ['102', 'Borda de Frango com Catupiry', 'Frango desfiado com Catupiry', 24.0],
        ['103', 'Borda de Calabresa com Catupiry', 'Calabresa moída com Catupiry', 24.0],
        ['105', 'Borda de Lombo Canadense com Catupiry', 'Lombo canadense moído com Catupiry', 24.0],
        ['104', 'Borda de Camarão com Catupiry', 'Camarão refogado com Catupiry', 34.0],
        ['106', 'Borda de Nutella', 'Nutella original', 27.0],
        ['107', 'Borda de Doce de Leite', 'Doce de leite cremoso', 24.0],
        ['108', 'Borda de Goiabada', 'Goiabada cremosa estilo Romeu e Julieta', 22.0],
      ],
    },
    {
      id: 'doces',
      nome: '🍫 Pizzas Doces',
      tamanhos: ['Grande', 'Média', 'Pequena'],
      hasSizes: true,
      itens: [
        ['951', 'DOCE DE LEITE COM MORANGO', 'doce de leite, morango, chocolate meio amargo, creme de leite', 48.0],
        ['952', 'BANANA', 'goiabada, mussarela, banana, mel e canela', 45.0],
        ['953', 'BANANA COM CHOCOLATE', 'goiabada, mussarela, banana, canela e chocolate meio amargo', 48.0],
        ['954', 'JOÃO E MARIA', 'raspas de chocolate branco, doce de leite, catupiry e mussarela', 48.0],
        ['955', 'NUTELLA COM CHOCOLATE MEIO AMARGO', 'nutella com chocolate meio amargo', 53.0],
        ['956', 'ROMEU E JULIETA', 'goiabada e mussarela', 43.0],
        ['957', 'BRIGADEIRO', 'brigadeiro com granulado', 48.0],
        ['958', 'MESCLADA', 'chocolate preto e chocolate branco', 48.0],
        ['959', 'NUTELLA COM BANANA', 'nutella, banana, chocolate meio amargo', 56.0],
        ['960', 'NUTELLA COM MORANGO', 'nutella, morango, chocolate meio amargo, creme de leite', 58.0],
        ['961', 'MORANGO COM CHOCOLATE', 'goiabada, morango, mussarela, chocolate meio amargo, creme de leite', 53.0],
        ['962', 'ROCAMBOLE DE DOCE DE LEITE C/ MORANGO', 'doce de leite, nutella, morango, chocolate meio amargo', 66.0],
        ['963', 'MAÇÃ', 'mussarela, maçãs fatiadas com leve toque de leite condensado e canela', 45.0],
      ],
    },
    {
      id: 'saladas',
      nome: '🥗 Saladas & Petiscos',
      tamanhos: ['Porção'],
      hasSizes: false,
      itens: [
        ['156', 'SALADA ZIPITTUS', 'alface crocante, rúcula, tomate seco, palmito, azeitonas pretas e crótons', 35.0],
        ['157', 'SALADA CAPRESE', 'tomate caqui, mussarela de búfala artesanal, manjericão, pesto de azeitonas, azeite', 25.0],
        ['158', 'SALADA LIGHT', 'alface americana, peito de peru, tomate seco, ricota de búfala artesanal, molho de ervas', 25.0],
        ['159', 'SALADA TROPICAL', 'alface, frango desfiado, cenoura, mussarela búfala, tomate morango, batata palha, molho queijo', 25.0],
        ['151', 'PORÇÃO DE PROVOLONE', 'fatias de queijo provolone aperitivo', 28.0],
        ['152', 'PORÇÃO DE PARMESÃO', 'queijo parmesão em cubos/fatias', 32.0],
        ['153', 'PORÇÃO DE PALMITO', 'palmito de primeira qualidade em rodelas', 30.0],
        ['154', 'AZEITONAS CHILENAS', 'porção de azeitonas pretas selecionadas', 20.0],
        ['155', 'APERITIVO ZIPITTUS', 'massa crocante com molho especial, gorgonzola, parmesão e alho', 32.0],
      ],
    },
    {
      id: 'bebidas',
      nome: '🥤 Bebidas & Cervejas',
      tamanhos: ['Unidade'],
      hasSizes: false,
      itens: [
        ['200', 'Água sem Gás', 'Garrafa 500ml', 6.0],
        ['201', 'Água com Gás', 'Garrafa 500ml', 6.0],
        ['202', 'Refrigerante Lata', '350ml (Coca-Cola, Guaraná, Fanta, Sprite)', 7.5],
        ['203', 'Refrigerante 2L', 'Garrafa 2 Litros', 15.0],
        ['204', 'H2O / Schweppes Citrus', 'Garrafa 500ml', 9.0],
        ['205', 'Suco Natural (Copo)', 'Laranja ou Limão', 10.0],
        ['206', 'Suco Natural (Jarra)', 'Laranja ou Limão', 22.0],
        ['403', 'Cerveja Antarctica 600ml', 'Garrafa 600ml', 14.0],
        ['404', 'Cerveja Original 600ml', 'Garrafa 600ml', 16.0],
        ['437', 'Cerveja Heineken 600ml', 'Garrafa 600ml', 18.0],
        ['417', 'Heineken Long Neck', '330ml', 11.0],
        ['408', 'Corona Long Neck', '330ml', 12.0],
      ],
    },
  ],
};

const R = (v) => 'R$ ' + v.toFixed(2).replace('.', ',');
const $ = (id) => document.getElementById(id);
const cart = {}; // armazena o pedido por chave: "cod|tamanho"

const nav = $('nav'),
  menu = $('menu');

// Inicializa a construção da interface
function buildMenu() {
  nav.innerHTML = '';
  menu.innerHTML = '';

  CONFIG.categorias.forEach((cat, ci) => {
    // Cria Botão do Nav
    const b = document.createElement('button');
    b.id = 'btn-nav-' + cat.id;
    b.innerHTML = cat.nome;
    b.onclick = () => {
      const target = $('cat-' + cat.id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    };
    nav.appendChild(b);

    // Cria Seção no Menu
    const h = document.createElement('h2');
    h.className = 'cat-title';
    h.id = 'cat-' + cat.id;
    h.textContent = cat.nome;
    menu.appendChild(h);

    cat.itens.forEach(([cod, nome, desc, precoG]) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'item';
      itemEl.setAttribute('data-search', `${cod} ${nome} ${desc}`.toLowerCase());

      itemEl.innerHTML = `
        <div class="item-header">
          <h3>${nome}</h3>
          <span class="code">#${cod}</span>
        </div>
        <p>${desc}</p>
        <div class="opts"></div>
      `;

      const optsEl = itemEl.querySelector('.opts');

      if (cat.hasSizes) {
        // Opções Grande, Média (-2.00), Pequena (-5.00)
        const tamanhos = [
          { nome: 'Grande', desc: 'Grande', preco: precoG },
          { nome: 'Média', desc: 'Média (-R$2)', preco: precoG - 2.0 },
          { nome: 'Pequena', desc: 'Pequena (-R$5)', preco: precoG - 5.0 },
        ];

        tamanhos.forEach((t) => {
          const btn = document.createElement('button');
          btn.innerHTML = `<span class="tam">${t.desc}</span>${R(t.preco)}`;
          btn.onclick = () => add(cod, nome, t.nome, t.preco);
          optsEl.appendChild(btn);
        });
      } else {
        // Preço único
        const btn = document.createElement('button');
        btn.innerHTML = `<span class="tam">${cat.tamanhos[0]}</span>${R(precoG)}`;
        btn.onclick = () => add(cod, nome, cat.tamanhos[0], precoG);
        optsEl.appendChild(btn);
      }

      menu.appendChild(itemEl);
    });
  });
}

// Filtro de busca em tempo real
function filterItems() {
  const q = $('search').value.toLowerCase().trim();
  const items = document.querySelectorAll('.item');
  items.forEach((el) => {
    const text = el.getAttribute('data-search');
    el.style.display = text.includes(q) ? 'block' : 'none';
  });
}

// Observador de rolagem para destacar botão ativo na barra superior
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const catId = e.target.id.replace('cat-', '');
        document.querySelectorAll('nav button').forEach((b) => {
          b.classList.toggle('on', b.id === 'btn-nav-' + catId);
        });
        const btnOn = $('btn-nav-' + catId);
        if (btnOn) btnOn.scrollIntoView({ inline: 'center', block: 'nearest' });
      }
    });
  },
  { rootMargin: '-70px 0px -60% 0px' }
);

// Adicionar ao carrinho
function add(cod, nome, tam, preco) {
  const k = `${cod}|${tam}`;
  if (!cart[k]) {
    cart[k] = { cod, nome, tam, preco, q: 0 };
  }
  cart[k].q++;
  updateCart();
}

// Alterar quantidade
function change(k, d) {
  if (cart[k]) {
    cart[k].q += d;
    if (cart[k].q <= 0) delete cart[k];
    updateCart();
  }
}

// Atualizar modal e barra inferior
function updateCart() {
  const keys = Object.keys(cart);
  const totalQtd = keys.reduce((s, k) => s + cart[k].q, 0);
  const totalVal = keys.reduce((s, k) => s + cart[k].q * cart[k].preco, 0);

  $('bar').classList.toggle('show', totalQtd > 0);
  $('qtd').textContent = `Ver pedido (${totalQtd} ${totalQtd === 1 ? 'item' : 'itens'})`;
  $('sub').textContent = R(totalVal);
  $('total').textContent = R(totalVal);

  const lista = $('lista');
  lista.innerHTML = '';

  if (keys.length === 0) {
    lista.innerHTML = "<p style='text-align:center; color:#8c7365; padding:20px 0;'>Seu carrinho está vazio.</p>";
  }

  keys.forEach((k) => {
    const item = cart[k];
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
      <div>
        <strong>#${item.cod} ${item.nome}</strong><br>
        <small>${item.tam ? item.tam + ' · ' : ''}${R(item.preco)} cada</small>
      </div>
      <div class="qty">
        <button onclick="change('${k}', -1)">−</button>
        <span>${item.q}</span>
        <button onclick="change('${k}', 1)">+</button>
      </div>
    `;
    lista.appendChild(row);
  });

  if (totalQtd === 0) {
    $('veil').classList.remove('show');
  }
}

// Eventos dos botões de navegação e modal
$('abrir').onclick = () => $('veil').classList.add('show');
$('fechar').onclick = () => $('veil').classList.remove('show');
$('veil').onclick = (e) => {
  if (e.target === $('veil')) $('veil').classList.remove('show');
};

// Enviar pedido para o WhatsApp
$('enviar').onclick = () => {
  const keys = Object.keys(cart);
  if (keys.length === 0) return;

  const nome = $('cli').value.trim();
  const end = $('end').value.trim();
  const obs = $('obs').value.trim();

  if (!nome || !end) {
    alert('Por favor, preencha seu nome e endereço para que possamos realizar a entrega!');
    return;
  }

  let total = 0;
  let msg = `🍕 *NOVO PEDIDO - ZIPITTUS PIZZARIA* 🍕\n\n`;
  msg += `👤 *Cliente:* ${nome}\n`;
  msg += `📍 *Endereço:* ${end}\n`;
  if (obs) msg += `📝 *Obs:* ${obs}\n`;
  msg += `-----------------------------------\n\n`;
  msg += `*ITENS DO PEDIDO:*\n`;

  keys.forEach((k) => {
    const item = cart[k];
    const sub = item.q * item.preco;
    total += sub;
    msg += `• *${item.q}x* #${item.cod} ${item.nome} (${item.tam}) - ${R(sub)}\n`;
  });

  msg += `\n-----------------------------------\n`;
  msg += `💰 *TOTAL: ${R(total)}*\n\n`;
  msg += `Obrigado por pedir na Zipittus! 🍕✨`;

  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
};

// Inicialização da Página
window.onload = () => {
  buildMenu();
  CONFIG.categorias.forEach((cat) => {
    const el = $('cat-' + cat.id);
    if (el) io.observe(el);
  });
};
