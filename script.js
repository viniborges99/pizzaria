/* CONFIGURAÇÃO DO CARDÁPIO DIGITAL ZIPITTUS */
const CONFIG = {
  nome: 'Zipittus Pizzaria Forno à Lenha',
  info: 'Quarta a domingo, das 18h às 22h30 · Entrega e retirada',
  whatsapp: '5519991705884',
  bairros: [
    { nome: 'Centro', taxa: 5.0 },
    { nome: 'Alto da Serra', taxa: 8.0 },
    { nome: 'Santa Tereza', taxa: 8.0 },
    { nome: 'Bela Vista', taxa: 7.0 },
    { nome: 'vale 1', taxa: 6.0 },
    { nome: 'vale 2', taxa: 6.0 },
    { nome: 'vale 3', taxa: 6.0 },
    { nome: 'vale 4', taxa: 6.0 },
    { nome: 'Santo Antônio', taxa: 5.0 },
    { nome: 'Cassuci', taxa: 8.0 },
    { nome: 'Buenos Aires', taxa: 6.0 },
    { nome: 'Portal Buenos Aires', taxa: 7.0 },
    { nome: 'Bonsucesso', taxa: 8.0 },
    { nome: 'Colina Verde 1', taxa: 6.0 },
    { nome: 'Colina Verde 2', taxa: 8.0 },
    { nome: 'Colinas São José', taxa: 6.0 },
    { nome: 'Natal Merli', taxa: 7.0 },
    { nome: 'Dionysio Guedes Barretto', taxa: 8.0 },
    { nome: 'Distrito', taxa: 6.0 },
    { nome: 'Macaubas', taxa: 8.0 },
    { nome: 'Fartura', taxa: 6.0 },
    { nome: 'Jardim Aeroporto', taxa: 7.0 },
    { nome: 'Jardim Bela Vista', taxa: 8.0 },
    { nome: 'Jardim Eunice', taxa: 6.0 },
    { nome: 'Jardim Luciana', taxa: 8.0 },
    { nome: 'Jardim Margarida', taxa: 6.0 },
    { nome: 'Jardim Mercedes', taxa: 7.0 },
    { nome: 'Nova Belmonte', taxa: 8.0 },
    { nome: 'Jardim Santos Dumont', taxa: 6.0 },
    { nome: 'Jardim São Bento', taxa: 8.0 },
    { nome: 'São Roque', taxa: 6.0 },
    { nome: 'João de Souza', taxa: 7.0 },
    { nome: 'José Maldonado Peres', taxa: 8.0 },
    { nome: 'Mantovani', taxa: 6.0 },
    { nome: 'Maria Boaro', taxa: 8.0 },
    { nome: 'Maria Maldonado', taxa: 6.0 },
    { nome: 'Natal Merli 2', taxa: 7.0 },
    { nome: 'Beira Rio', taxa: 8.0 },
    { nome: 'Domingo de Sylos', taxa: 6.0 },
    { nome: 'Otto Bittencourt', taxa: 8.0 },
    { nome: 'Parque Novo Mundo', taxa: 6.0 },
    { nome: 'João de Oliveira Machado', taxa: 7.0 },
    { nome: 'São Domingos', taxa: 8.0 },
    { nome: 'Paula Lima', taxa: 6.0 },
    { nome: 'Portal dos Ypês', taxa: 8.0 },
    { nome: 'Chico Xavier', taxa: 6.0 },
    { nome: 'Residencial dos Lagos', taxa: 7.0 },
    { nome: 'Mano Merli', taxa: 8.0 },
    { nome: 'Monte Carlo', taxa: 6.0 },
    { nome: 'Residencial Por do Sol', taxa: 8.0 },
    { nome: 'Residencial Vila do Sol', taxa: 6.0 },
    { nome: 'Santa Luzia', taxa: 7.0 },
    { nome: 'Sitio Novo', taxa: 10.0 },
    { nome: 'Vila Maschietto', taxa: 6.0 },
    { nome: 'Vila Brasil', taxa: 8.0 },
    { nome: 'Vila dos Comerciarios', taxa: 6.0 },
    { nome: 'Vila Formosa', taxa: 7.0 },
    { nome: 'Vila Pereira', taxa: 10.0 },
    { nome: 'Vila Verde', taxa: 6.0 },
  ],

  // Categorias do Cardápio
  categorias: [
    {
      id: 'salgadas',
      nome: '🍕 Pizzas Salgadas',
      tamanhos: ['Grande', 'Média', 'Pequena'],
      hasSizes: true,
      isPizzaType: true,
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
      isPizzaType: false,
      itens: [
        ['100', 'Borda de Catupiry', 'Recheio cremoso sabor Catupiry', 19.0],
        ['101', 'Borda de Cheddar', 'Cheddar especial para borda', 22.0],
        ['102', 'Borda de Frango com Catupiry', 'Frango desfiado com Catupiry', 24.0],
        ['103', 'Borda de Calabresa com Catupiry', 'Calabresa moída com Catupiry', 24.0],
        ['105', 'Borda de Lombo Canadense com Catupiry', 'Lombo canadense moído com Catupiry', 24.0],
        ['104', 'Borda de Camarão com Catupiry', 'Camarão refogado com Catupiry', 34.0],
        ['106', 'Borda de Nutella', 'Nutella original', 30.0],
        ['107', 'Borda de Doce de Leite', 'Doce de leite cremoso', 24.0],
        ['108', 'Borda de Goiabada', 'Goiabada cremosa estilo Romeu e Julieta', 22.0],
      ],
    },
    {
      id: 'doces',
      nome: '🍫 Pizzas Doces',
      tamanhos: ['Grande', 'Média', 'Pequena'],
      hasSizes: true,
      isPizzaType: true,
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
      id: 'bebidas',
      nome: '🥤 Bebidas & Cervejas',
      tamanhos: ['Unidade'],
      hasSizes: false,
      isPizzaType: false,
      itens: [
        ['200', 'Água sem Gás', 'Garrafa 500ml', 5.0],
        ['201', 'Água com Gás', 'Garrafa 500ml', 6.0],
        ['202', 'Refrigerante Lata', '350ml (Coca-Cola, Guaraná, Fanta, Sprite)', 8.0],
        ['203', 'Refrigerante 2L', 'Garrafa 2 Litros', 16.0],
        ['204', 'H2O / Schweppes Citrus', 'Garrafa 500ml', 10.0],
        ['205', 'Suco Natural (Copo)', 'Laranja ou Limão', 8.0],
        ['206', 'Suco Natural (Jarra)', 'Laranja ou Limão', 16.0],
        ['417', 'Heineken Long Neck', '330ml', 11.0],
        ['408', 'Corona Long Neck', '330ml', 12.0],
      ],
    },
  ],
};

const R = (v) => 'R$ ' + v.toFixed(2).replace('.', ',');
const $ = (id) => document.getElementById(id);
const cart = {};

let taxaEntrega = 0.0;
let bairroSelecionado = null;

let montagemAtual = {
  catId: null,
  tamanho: 'Grande',
  qtdSabores: 1,
  sabores: [],
  indexEditando: null,
};

const nav = $('nav'),
  menu = $('menu');

function buildMenu() {
  nav.innerHTML = '';
  menu.innerHTML = '';

  CONFIG.categorias.forEach((cat) => {
    const b = document.createElement('button');
    b.id = 'btn-nav-' + cat.id;
    b.innerHTML = cat.nome;
    b.onclick = () => {
      const target = $('cat-' + cat.id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    };
    nav.appendChild(b);

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
        const btnG = document.createElement('button');
        btnG.innerHTML = `<span class="tam">Grande</span>${R(precoG)}`;
        btnG.onclick = () => iniciarMontagemPizza(cat.id, cod, nome, precoG, 'Grande');
        optsEl.appendChild(btnG);

        const btnM = document.createElement('button');
        btnM.innerHTML = `<span class="tam">Média (-R$2)</span>${R(precoG - 2.0)}`;
        btnM.onclick = () => iniciarMontagemPizza(cat.id, cod, nome, precoG, 'Média');
        optsEl.appendChild(btnM);

        const btnP = document.createElement('button');
        btnP.innerHTML = `<span class="tam">Pequena (-R$5)</span>${R(precoG - 5.0)}`;
        btnP.onclick = () => {
          addPizzaDireta(cat.id, [[cod, nome, precoG]], 'Pequena');
        };
        optsEl.appendChild(btnP);
      } else {
        const btn = document.createElement('button');
        btn.innerHTML = `<span class="tam">${cat.tamanhos[0]}</span>${R(precoG)}`;
        btn.onclick = () => addSimples(cod, nome, cat.tamanhos[0], precoG);
        optsEl.appendChild(btn);
      }

      menu.appendChild(itemEl);
    });
  });
}

function carregarListaBairros() {
  const selectBairro = $('select-bairro');
  if (!selectBairro) return;

  selectBairro.innerHTML = '<option value="">-- Escolha seu bairro --</option>';
  CONFIG.bairros.forEach((b) => {
    const opt = document.createElement('option');
    opt.value = b.taxa;
    opt.dataset.nome = b.nome;
    opt.textContent = `${b.nome} (+${R(b.taxa)})`;
    selectBairro.appendChild(opt);
  });
}

function alternarTipoEntrega() {
  const tipo = $('tipo-entrega').value;
  const boxBairro = $('box-bairro');
  const campoEnd = $('end');

  if (tipo === 'retirada') {
    boxBairro.style.display = 'none';
    taxaEntrega = 0.0;
    bairroSelecionado = 'Retirada no Balcão';
    campoEnd.placeholder = 'Ponto de referência (Opcional)';
  } else {
    boxBairro.style.display = 'block';
    campoEnd.placeholder = 'Rua, Número e Complemento';
    atualizarTaxaPorBairro();
  }
  updateCart();
}

function atualizarTaxaPorBairro() {
  const selectBairro = $('select-bairro');
  if (selectBairro && selectBairro.selectedIndex > 0) {
    taxaEntrega = parseFloat(selectBairro.value);
    bairroSelecionado = selectBairro.options[selectBairro.selectedIndex].dataset.nome;
  } else {
    taxaEntrega = 0.0;
    bairroSelecionado = null;
  }
  updateCart();
}

function iniciarMontagemPizza(catId, codInicial, nomeInicial, precoInicial, tamanhoEscolhido, editKey = null) {
  montagemAtual = {
    catId: catId,
    tamanho: tamanhoEscolhido,
    qtdSabores: 1,
    sabores: [[codInicial, nomeInicial, precoInicial]],
    indexEditando: editKey,
  };
  abrirModalFracao();
}

function abrirModalFracao() {
  let modal = $('modal-fracao');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal-fracao';
    modal.className = 'veil show';
    document.body.appendChild(modal);
  } else {
    modal.classList.add('show');
  }
  renderizarConteudoModalFracao();
}

function renderizarConteudoModalFracao() {
  const modal = $('modal-fracao');
  const catSalgadas = CONFIG.categorias.find((c) => c.id === 'salgadas');
  const catDoces = CONFIG.categorias.find((c) => c.id === 'doces');
  const todasAsPizzas = [...catSalgadas.itens, ...catDoces.itens];

  let saboresHtml = '';
  for (let i = 0; i < montagemAtual.qtdSabores; i++) {
    const saborAtual = montagemAtual.sabores[i] || montagemAtual.sabores[0];
    saboresHtml += `
      <div class="sabor-row">
        <label><strong>Sabor ${i + 1}:</strong></label>
        <select class="select-sabor" data-index="${i}">
          ${todasAsPizzas.map(([c, n, d, p]) => `<option value="${c}" ${saborAtual[0] === c ? 'selected' : ''}>#${c} - ${n} (${R(p)})</option>`).join('')}
        </select>
      </div>
    `;
  }

  modal.innerHTML = `
    <div class="sheet" role="dialog">
      <h2>🍕 ${montagemAtual.indexEditando ? 'Editar Pizza' : 'Montar Pizza'} (${montagemAtual.tamanho})</h2>
      <p style="font-size:0.85rem; color:#6a584d; margin-bottom:12px;">Escolha quantos sabores sua pizza ${montagemAtual.tamanho} vai ter:</p>
      
      <div class="opts" style="margin-bottom:16px;">
        <button type="button" class="${montagemAtual.qtdSabores === 1 ? 'active-fracao' : ''}" onclick="mudarQtdSabores(1)">1 Sabor (Inteira)</button>
        <button type="button" class="${montagemAtual.qtdSabores === 2 ? 'active-fracao' : ''}" onclick="mudarQtdSabores(2)">2 Sabores (1/2)</button>
        <button type="button" class="${montagemAtual.qtdSabores === 3 ? 'active-fracao' : ''}" onclick="mudarQtdSabores(3)">3 Sabores (1/3)</button>
      </div>

      <div id="lista-sabores-container">${saboresHtml}</div>

      <div style="margin: 16px 0; font-weight:800; font-size:1.1rem; text-align:center; color:var(--green);" id="preview-preco">
        Preço calculado: ${R(calcularPrecoAtual())}
      </div>

      <button class="send" onclick="salvarPizzaMontada()">✅ ${montagemAtual.indexEditando ? 'Salvar Alterações' : 'Adicionar ao Pedido'}</button>
      <button class="close" onclick="$('modal-fracao').classList.remove('show')">Cancelar</button>
    </div>
  `;

  modal.querySelectorAll('.select-sabor').forEach((sel) => {
    sel.onchange = (e) => {
      const idx = parseInt(e.target.dataset.index);
      const cod = e.target.value;
      const itemData = todasAsPizzas.find((it) => it[0] === cod);
      montagemAtual.sabores[idx] = [itemData[0], itemData[1], itemData[3]];
      document.getElementById('preview-preco').textContent = 'Preço calculado: ' + R(calcularPrecoAtual());
    };
  });
}

function mudarQtdSabores(qtd) {
  montagemAtual.qtdSabores = qtd;
  while (montagemAtual.sabores.length < qtd) {
    montagemAtual.sabores.push(montagemAtual.sabores[0]);
  }
  montagemAtual.sabores = montagemAtual.sabores.slice(0, qtd);
  renderizarConteudoModalFracao();
}

function calcularPrecoAtual() {
  let maiorPreco = 0;
  montagemAtual.sabores.forEach((s) => {
    if (s[2] > maiorPreco) maiorPreco = s[2];
  });
  if (montagemAtual.tamanho === 'Média') maiorPreco -= 2.0;
  if (montagemAtual.tamanho === 'Pequena') maiorPreco -= 5.0;
  return maiorPreco > 0 ? maiorPreco : 0;
}

function salvarPizzaMontada() {
  const precoFinal = calcularPrecoAtual();
  const nomesSabores = montagemAtual.sabores.map((s) => `#${s[0]} ${s[1]}`).join(' / ');
  const nomeCompleto = `Pizza ${montagemAtual.tamanho} (${montagemAtual.sabores.length} Sabor${montagemAtual.sabores.length > 1 ? 'es' : ''}: ${nomesSabores})`;

  if (montagemAtual.indexEditando) {
    delete cart[montagemAtual.indexEditando];
  }

  const chaveCarrinho = `${montagemAtual.catId}|${montagemAtual.tamanho}|${nomesSabores}`;
  if (!cart[chaveCarrinho]) {
    cart[chaveCarrinho] = {
      nome: nomeCompleto,
      tam: montagemAtual.tamanho,
      preco: precoFinal,
      q: 0,
      isPizzaFracionada: true,
      catId: montagemAtual.catId,
      saboresOriginais: [...montagemAtual.sabores],
    };
  }
  cart[chaveCarrinho].q++;

  $('modal-fracao').classList.remove('show');
  updateCart();
}

function addPizzaDireta(catId, sabores, tamanho) {
  const precoBase = sabores[0][2];
  let precoFinal = precoBase;
  if (tamanho === 'Média') precoFinal -= 2.0;
  if (tamanho === 'Pequena') precoFinal -= 5.0;

  const nomeCompleto = `Pizza ${tamanho} (#${sabores[0][0]} ${sabores[0][1]})`;
  const chave = `${catId}|${tamanho}|${sabores[0][0]}`;

  if (!cart[chave]) {
    cart[chave] = { nome: nomeCompleto, tam: tamanho, preco: precoFinal, q: 0 };
  }
  cart[chave].q++;
  updateCart();
}

function addSimples(cod, nome, tam, preco) {
  const k = `${cod}|${tam}`;
  if (!cart[k]) {
    cart[k] = { nome: `#${cod} ${nome}`, tam: tam, preco: preco, q: 0 };
  }
  cart[k].q++;
  updateCart();
}

function change(k, d) {
  if (cart[k]) {
    cart[k].q += d;
    if (cart[k].q <= 0) delete cart[k];
    updateCart();
  }
}

function editarItemCarrinho(k) {
  const item = cart[k];
  if (item && item.isPizzaFracionada) {
    montagemAtual = {
      catId: item.catId,
      tamanho: item.tam,
      qtdSabores: item.saboresOriginais.length,
      sabores: JSON.parse(JSON.stringify(item.saboresOriginais)),
      indexEditando: k,
    };
    abrirModalFracao();
  }
}

function updateCart() {
  const keys = Object.keys(cart);
  const totalQtd = keys.reduce((s, k) => s + cart[k].q, 0);
  const subtotalVal = keys.reduce((s, k) => s + cart[k].q * cart[k].preco, 0);
  const totalVal = subtotalVal > 0 ? subtotalVal + taxaEntrega : 0;

  $('bar').classList.toggle('show', totalQtd > 0);
  $('qtd').textContent = `Ver pedido (${totalQtd} ${totalQtd === 1 ? 'item' : 'itens'})`;
  $('sub').textContent = R(subtotalVal);
  $('total').textContent = R(totalVal);

  const lista = $('lista');
  lista.innerHTML = '';

  if (keys.length === 0) {
    lista.innerHTML = "<p style='text-align:center; color:#8c7365; padding:20px 0;'>Seu carrinho está vazio.</p>";
  } else {
    keys.forEach((k) => {
      const item = cart[k];
      const row = document.createElement('div');
      row.className = 'row';

      let botaoEditar = '';
      if (item.isPizzaFracionada) {
        botaoEditar = `<button type="button" onclick="editarItemCarrinho('${k}')" style="background:none; border:none; color:var(--green); font-size:0.75rem; font-weight:800; cursor:pointer; padding:0; margin-top:2px;">✏️ Editar sabores</button>`;
      }

      row.innerHTML = `
        <div>
          <strong>${item.nome}</strong><br>
          <small>${R(item.preco)} cada</small><br>
          ${botaoEditar}
        </div>
        <div class="qty">
          <button onclick="change('${k}', -1)">−</button>
          <span>${item.q}</span>
          <button onclick="change('${k}', 1)">+</button>
        </div>
      `;
      lista.appendChild(row);
    });

    // Linha Informativa da Taxa no Carrinho
    const tipo = $('tipo-entrega') ? $('tipo-entrega').value : 'entrega';
    const rowTaxa = document.createElement('div');
    rowTaxa.className = 'row';
    rowTaxa.style.background = '#fcf8f5';
    rowTaxa.style.padding = '8px 10px';
    rowTaxa.style.borderRadius = '8px';

    if (tipo === 'retirada') {
      rowTaxa.innerHTML = `<div><strong>🏪 Retirada no Balcão</strong></div><div style="font-weight:800; color:var(--green);">R$ 0,00</div>`;
    } else {
      rowTaxa.innerHTML = `<div><strong>🛵 Taxa de Entrega (${bairroSelecionado || 'Selecione o Bairro'})</strong></div><div style="font-weight:800; color:var(--red);">${R(taxaEntrega)}</div>`;
    }
    lista.appendChild(rowTaxa);
  }

  if (totalQtd === 0) {
    $('veil').classList.remove('show');
  }
}

function filterItems() {
  const q = $('search').value.toLowerCase().trim();
  const items = document.querySelectorAll('.item');
  items.forEach((el) => {
    const text = el.getAttribute('data-search');
    el.style.display = text.includes(q) ? 'block' : 'none';
  });
}

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

$('abrir').onclick = () => $('veil').classList.add('show');
$('fechar').onclick = () => $('veil').classList.remove('show');
$('veil').onclick = (e) => {
  if (e.target === $('veil')) $('veil').classList.remove('show');
};

// ENVIAR PEDIDO PARA O WHATSAPP
$('enviar').onclick = () => {
  const keys = Object.keys(cart);
  if (keys.length === 0) return;

  const nome = $('cli').value.trim();
  const end = $('end').value.trim();
  const obs = $('obs').value.trim();
  const tipo = $('tipo-entrega').value;

  if (!nome) {
    alert('Por favor, preencha seu nome!');
    return;
  }

  if (tipo === 'entrega') {
    if (!bairroSelecionado) {
      alert('Por favor, selecione seu bairro para calcular a entrega!');
      return;
    }
    if (!end) {
      alert('Por favor, preencha o endereço de entrega (Rua e Número)!');
      return;
    }
  }

  let subtotal = 0;
  let msg = `*NOVO PEDIDO - ZIPITTUS PIZZARIA*\n\n`;
  msg += `*Cliente:* ${nome}\n`;

  if (tipo === 'retirada') {
    msg += `*Tipo:* Retirada no Balcão (Sem taxa)\n`;
  } else {
    msg += `*Endereço:* ${end}\n`;
    msg += `*Bairro:* ${bairroSelecionado}\n`;
  }

  if (obs) msg += `*Obs:* ${obs}\n`;
  msg += `-----------------------------------\n\n`;
  msg += `*ITENS DO PEDIDO:*\n`;

  keys.forEach((k) => {
    const item = cart[k];
    const sub = item.q * item.preco;
    subtotal += sub;
    msg += `• *${item.q}x* ${item.nome} - ${R(sub)}\n`;
  });

  const totalGeral = subtotal + taxaEntrega;

  msg += `\n-----------------------------------\n`;
  msg += `Subtotal: ${R(subtotal)}\n`;

  if (tipo === 'retirada') {
    msg += `Taxa de Entrega: R$ 0,00 (Retirada)\n`;
  } else {
    msg += `Taxa de Entrega (${bairroSelecionado}): ${R(taxaEntrega)}\n`;
  }

  msg += `*TOTAL GERAL: ${R(totalGeral)}*\n\n`;

  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

  // 1. Abre a conversa no WhatsApp
  window.open(url, '_blank');

  // 2. Limpa os itens do carrinho
  Object.keys(cart).forEach((k) => delete cart[k]);

  // 3. Limpa os campos do formulário
  $('cli').value = '';
  $('end').value = '';
  $('obs').value = '';

  // 4. Atualiza a tela e fecha o modal de pedido
  updateCart();
  $('veil').classList.remove('show');
};
window.onload = () => {
  buildMenu();
  carregarListaBairros();
  CONFIG.categorias.forEach((cat) => {
    const el = $('cat-' + cat.id);
    if (el) io.observe(el);
  });
};
