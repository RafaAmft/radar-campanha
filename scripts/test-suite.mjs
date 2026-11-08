import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const results = [];

function assert(description, condition, details = '') {
  if (condition) {
    results.push({ status: 'PASS', description, details });
    console.log(`✅ [PASS] ${description}`);
  } else {
    results.push({ status: 'FAIL', description, details });
    console.error(`❌ [FAIL] ${description} - ${details}`);
  }
}

async function runTestSuite() {
  console.log('🧪 Iniciando Bateria de Testes do Nexo Popular...\n');

  // TESTE 1: Integridade dos Arquivos Estruturais
  console.log('--- 1. Arquitetura e Arquivos Estruturais ---');
  const requiredFiles = [
    'src/types/index.ts',
    'src/data/mockData.ts',
    'src/data/liveFeeds.json',
    'src/components/Header.tsx',
    'src/components/BriefingLegislativo.tsx',
    'src/components/KitConversa.tsx',
    'src/components/DossiesMitoFato.tsx',
    'src/components/PainelAgora.tsx',
    'src/components/RedeCriadores.tsx',
    'src/components/Footer.tsx',
    'src/app/page.tsx',
    'src/app/layout.tsx',
    'scripts/update-feeds.mjs',
  ];

  for (const relPath of requiredFiles) {
    const fullPath = path.join(projectRoot, relPath);
    assert(`Arquivo existe: ${relPath}`, fs.existsSync(fullPath));
  }

  // TESTE 2: Validação dos Dados em liveFeeds.json
  console.log('\n--- 2. Integridade dos Dados Coletados (liveFeeds.json) ---');
  const liveFeedsPath = path.join(projectRoot, 'src/data/liveFeeds.json');
  let liveData = null;
  try {
    liveData = JSON.parse(fs.readFileSync(liveFeedsPath, 'utf-8'));
    assert('liveFeeds.json é um JSON válido', true);
  } catch (err) {
    assert('liveFeeds.json é um JSON válido', false, err.message);
  }

  if (liveData) {
    assert('Timestamp de geração presente', !!liveData.geradoEm);
    assert('Array de notícias presente e preenchido', Array.isArray(liveData.noticias) && liveData.noticias.length > 0, `Qtd: ${liveData.noticias?.length}`);
    assert('Array de canais presente e preenchido', Array.isArray(liveData.canais) && liveData.canais.length > 0, `Qtd: ${liveData.canais?.length}`);
    assert('Array de cards presente e preenchido', Array.isArray(liveData.cards) && liveData.cards.length > 0, `Qtd: ${liveData.cards?.length}`);
    assert('Array de dossiês presente e preenchido', Array.isArray(liveData.dossies) && liveData.dossies.length > 0, `Qtd: ${liveData.dossies?.length}`);

    // Validar se os cards possuem os dois tons de texto para WhatsApp
    const cardsComDoisTons = liveData.cards.filter(c => c.textoZapDialogo && c.textoZapDados);
    assert('Cards possuem Modo Diálogo e Modo Dados', cardsComDoisTons.length === liveData.cards.length, `${cardsComDoisTons.length}/${liveData.cards.length} cards com ambos os tons`);

    // Validar se os dossiês possuem Pergunta de Ouro
    const dossiesComPergunta = liveData.dossies.filter(d => d.perguntaDeOuro && d.oBoato && d.oFatoVerificado);
    assert('Dossiês possuem Pergunta de Ouro e 3 passos', dossiesComPergunta.length === liveData.dossies.length, `${dossiesComPergunta.length}/${liveData.dossies.length} dossiês válidos`);

    // Validar se os canais possuem status válido
    const canaisValidos = liveData.canais.filter(ch => ['24h', '72h', 'inativo'].includes(ch.status));
    assert('Canais possuem status válido (24h/72h/inativo)', canaisValidos.length === liveData.canais.length, `${canaisValidos.length}/${liveData.canais.length}`);
  }

  // TESTE 3: Build de Produção e Export Estático
  console.log('\n--- 3. Verificação do Build de Produção (out/) ---');
  const outIndex = path.join(projectRoot, 'out/index.html');
  const outExists = fs.existsSync(outIndex);
  assert('Pasta out/ e index.html compilados existem', outExists);

  if (outExists) {
    const htmlContent = fs.readFileSync(outIndex, 'utf-8');
    assert('HTML contém título "Nexo Popular"', htmlContent.includes('Nexo Popular'));
    assert('HTML contém âncora #acao (Pautas no Congresso)', htmlContent.includes('id="acao"'));
    assert('HTML contém âncora #cards (Kit de Diálogo)', htmlContent.includes('id="cards"'));
    assert('HTML contém âncora #dossies (Mito vs. Fato)', htmlContent.includes('id="dossies"'));
    assert('HTML contém âncora #agora (Imprensa)', htmlContent.includes('id="agora"'));
    assert('HTML contém âncora #canais (Canais)', htmlContent.includes('id="canais"'));
    assert('HTML contém metatag theme-color (#059669)', htmlContent.includes('content="#059669"'));
    assert('HTML contém menção à consulta pública do Senado (e-Cidadania)', htmlContent.includes('ecidadania'));
  }

  // TESTE 4: Teste de Conectividade com a Produção no Cloudflare
  console.log('\n--- 4. Teste de Conectividade e CDN ao Vivo ---');
  const targetUrl = 'https://radar-campanha.pages.dev/';
  try {
    const t0 = Date.now();
    const res = await fetch(targetUrl);
    const latencyMs = Date.now() - t0;
    assert('Cloudflare Pages responde HTTP 200 OK', res.status === 200, `Status: ${res.status}`);
    assert('Latência de resposta < 1500ms', latencyMs < 1500, `Tempo: ${latencyMs}ms`);

    const liveHtml = await res.text();
    assert('Site ao vivo renderiza "Nexo Popular"', liveHtml.includes('Nexo Popular'));
    assert('Site ao vivo tem links de WhatsApp', liveHtml.includes('wa.me') || liveHtml.includes('WhatsApp'));
    assert('Site ao vivo possui links do e-Cidadania', liveHtml.includes('ecidadania'));
  } catch (err) {
    assert('Conexão com Cloudflare Pages', false, err.message);
  }

  // Resumo Final
  console.log('\n=========================================');
  const passed = results.filter(r => r.status === 'PASS').length;
  const failed = results.filter(r => r.status === 'FAIL').length;
  console.log(`📊 TOTAL DE TESTES: ${results.length}`);
  console.log(`✅ APROVADOS: ${passed}`);
  console.log(`❌ FALHAS: ${failed}`);
  console.log('=========================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTestSuite();
