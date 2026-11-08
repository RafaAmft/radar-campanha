import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. YouTube Channels
const CANAIS_MONITORADOS = [
  {
    id: 'ch-icl',
    nome: 'ICL Notícias',
    channelId: 'UCTnRtQ9IkBGmCKcLB31BcyA',
    handle: 'ICLNoticias',
    avatar: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=200&q=80',
    seguidores: '1.8M',
    plataforma: 'youtube',
    url: 'https://www.youtube.com/@ICLNoticias',
  },
  {
    id: 'ch-cartacapital',
    nome: 'CartaCapital',
    channelId: 'UCDGz2exMIsPQ4k9VrsuhKTA',
    handle: 'cartacapital',
    avatar: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=200&q=80',
    seguidores: '920k',
    plataforma: 'youtube',
    url: 'https://www.youtube.com/@cartacapital',
  },
  {
    id: 'ch-cnnbrasil',
    nome: 'CNN Brasil',
    channelId: 'UCupvZG-5ko_eiXAupbDfxWw',
    handle: 'CNNBrasil',
    avatar: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=200&q=80',
    seguidores: '4.9M',
    plataforma: 'youtube',
    url: 'https://www.youtube.com/@CNNBrasil',
  },
  {
    id: 'ch-meteoro',
    nome: 'Meteoro Brasil',
    channelId: 'UCk5BcU1rOy6hepflk7_q_Pw',
    handle: 'MeteoroBrasil',
    avatar: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80',
    seguidores: '1.2M',
    plataforma: 'youtube',
    url: 'https://www.youtube.com/@MeteoroBrasil',
  },
];

function formatTempoAtras(dataIso) {
  if (!dataIso) return 'Sem post recente';
  const agora = new Date();
  const post = new Date(dataIso);
  const diffMs = agora.getTime() - post.getTime();
  const diffHoras = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDias = Math.floor(diffHoras / 24);

  if (diffHoras < 1) {
    const diffMin = Math.max(1, Math.floor(diffMs / (1000 * 60)));
    return `Postou há ${diffMin} min`;
  }
  if (diffHoras < 24) {
    return `Postou há ${diffHoras} ${diffHoras === 1 ? 'hora' : 'horas'}`;
  }
  if (diffDias === 1) return 'Postou há 1 dia';
  return `Postou há ${diffDias} dias`;
}

function getStatus(dataIso) {
  if (!dataIso) return 'inativo';
  const diffHoras = (Date.now() - new Date(dataIso).getTime()) / (1000 * 60 * 60);
  if (diffHoras <= 24) return '24h';
  if (diffHoras <= 72) return '72h';
  return 'inativo';
}

// 2. Fetch YouTube Feeds
async function fetchYouTubeFeeds() {
  console.log('📡 [Nexo Popular] Monitorando canais no YouTube...');
  const results = [];

  for (const canal of CANAIS_MONITORADOS) {
    try {
      const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${canal.channelId}`;
      const res = await fetch(rssUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      });
      const xml = await res.text();
      const entryMatch = xml.match(/<entry>([\s\S]*?)<\/entry>/);
      if (entryMatch) {
        const entry = entryMatch[1];
        const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
        const pubMatch = entry.match(/<published>([^<]+)<\/published>/);
        const linkMatch = entry.match(/<link rel="alternate" href="([^"]+)"/);
        const published = pubMatch ? pubMatch[1] : null;

        results.push({
          id: canal.id,
          nome: canal.nome,
          avatar: canal.avatar,
          seguidores: canal.seguidores,
          plataforma: canal.plataforma,
          url: canal.url,
          status: getStatus(published),
          ultimoVideo: {
            titulo: titleMatch ? titleMatch[1].replace(/&amp;/g, '&') : 'Vídeo recente',
            tempoAtras: formatTempoAtras(published),
            link: linkMatch ? linkMatch[1] : canal.url,
          },
        });
      } else {
        results.push({
          ...canal,
          status: 'inativo',
          ultimoVideo: {
            titulo: 'Sem vídeos recentes',
            tempoAtras: 'Sem atualização',
            link: canal.url,
          },
        });
      }
    } catch (err) {
      console.error(`Erro ao buscar ${canal.nome}:`, err.message);
    }
  }

  return results;
}

// 3. Fetch Google News RSS
async function fetchGoogleNews() {
  console.log('📰 [Nexo Popular] Coletando notícias no Google News RSS...');
  const newsUrl = 'https://news.google.com/rss/headlines/section/topic/POLITICS?hl=pt-BR&gl=BR&ceid=BR:pt-419';
  
  try {
    const res = await fetch(newsUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    const xml = await res.text();
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];
    const noticias = [];

    for (let i = 0; i < Math.min(items.length, 6); i++) {
      const item = items[i];
      const titleRaw = item.match(/<title>(.*?)<\/title>/)?.[1] || '';
      const link = item.match(/<link>(.*?)<\/link>/)?.[1] || '';
      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';
      const sourceMatch = item.match(/<source[^>]*>(.*?)<\/source>/)?.[1];

      let titulo = titleRaw.replace(/&amp;/g, '&').replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1');
      let portal = sourceMatch || 'Imprensa';
      if (titulo.includes(' - ')) {
        const parts = titulo.split(' - ');
        portal = parts.pop().trim();
        titulo = parts.join(' - ').trim();
      }

      const dataObj = pubDate ? new Date(pubDate) : new Date();
      const hora = dataObj.toLocaleTimeString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
      });

      noticias.push({
        id: `news-real-${i + 1}`,
        hora,
        portal,
        titulo,
        url: link,
        urgente: i === 0,
        categoria: 'Cidadania',
      });
    }

    return noticias;
  } catch (err) {
    console.error('Erro ao buscar notícias:', err.message);
    return [];
  }
}

// 4. Ingest Open Repositories
async function fetchOpenRepositories() {
  console.log('🌐 [Nexo Popular] Integrando repositórios abertos de checagem...');
  try {
    const [videosRes, contraRes, aspasRes] = await Promise.all([
      fetch('https://radardavirada.pages.dev/videos.json').then(r => r.json()).catch(() => ({})),
      fetch('https://radardavirada.pages.dev/contra.json').then(r => r.json()).catch(() => ({})),
      fetch('https://radardavirada.pages.dev/aspas.json').then(r => r.json()).catch(() => ({})),
    ]);

    const cards = [];

    // Map videos
    const videos = videosRes.videos || [];
    for (const v of videos) {
      cards.push({
        id: `card-video-${v.id}`,
        titulo: `${v.fonte} (${Math.round(v.views / 1000)}k views)`,
        fraseDestaque: v.titulo,
        subtitulo: `Vídeo em debate público nas redes com ${v.vph.toLocaleString('pt-BR')} views/hora.`,
        categoria: 'trabalho',
        badge: `🔥 ${v.vph.toLocaleString('pt-BR')} views/h`,
        corBadge: 'bg-indigo-600',
        imagemUrl: `https://radardavirada.pages.dev/${v.capa}`,
        textoZapDialogo: `Oi gente! Vi esse vídeo com uma reflexão muito lúcida sobre o que está sendo debatido hoje no país:\n\n"${v.titulo}"\n\nVale a pena assistir (é rapidinho):\n👉 ${v.url}\n\nO que acham desse ponto?`,
        textoZapDados: `📹 *REGISTRO DE DEBATE PÚBLICO:*\n\n"${v.titulo}"\n• Fonte: ${v.fonte}\n• Alcance: ${v.views.toLocaleString('pt-BR')} visualizações\n\nAssista à íntegra: ${v.url}`,
        fontes: [{ nome: v.fonte, veiculo: 'Redes Sociais', url: v.url }],
        data: 'Em debate',
      });
    }

    // Map temas from contra.json
    const temas = contraRes.temas || [];
    const imagensTema = [
      'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    ];

    temas.forEach((t, i) => {
      cards.push({
        id: `card-contra-${t.id}`,
        titulo: t.titulo,
        fraseDestaque: t.gancho,
        subtitulo: t.fato.slice(0, 190) + '...',
        categoria: i === 0 ? 'trabalho' : 'economia',
        badge: t.prova?.num ? `${t.prova.num} apoiam` : 'Pauta Cidadã',
        corBadge: 'bg-emerald-600',
        imagemUrl: imagensTema[i % imagensTema.length],
        textoZapDialogo: `Pessoal, para quem estiver conversando sobre ${t.titulo.toLowerCase()}:\n\n${t.pergunta || t.gancho}\n\nTem uma síntese muito boa dos números reais aqui:\n🔗 https://radar-campanha.pages.dev/#dossies`,
        textoZapDados: `📊 *SÍNTESE INFORMATIVA: ${t.titulo.toUpperCase()}*\n\n${t.zap}\n\nFonte: ${t.prova?.f || 'Fontes Oficiais'}\nVerificação completa: https://radar-campanha.pages.dev/#cards`,
        fontes: (t.fontes || []).map(f => ({ nome: f.f, veiculo: f.t, url: f.u })),
        data: 'Consolidado',
      });
    });

    // Map Dossies
    const dossies = [];
    temas.forEach((t, i) => {
      const aspa = (aspasRes.aspas || []).find(a => a.tema === t.id || a.tema === t.dor) || (aspasRes.aspas || [])[i];

      dossies.push({
        id: `dossie-${t.id}`,
        tema: t.titulo,
        statusLegislativo: 'Em pauta na sociedade e no Congresso',
        oBoato: {
          resumo: aspa ? `"${aspa.frase}"` : t.gancho,
          origem: aspa ? `${aspa.quem} (${aspa.cargo || aspa.veiculo})` : 'Discurso de oposição e redes sociais',
        },
        oFatoVerificado: {
          explicacao: t.fato,
          dadosChave: [
            t.prova?.num ? `${t.prova.num} dos brasileiros apoiam a medida (${t.prova.f})` : 'Apoio amplamente majoritário nas pesquisas.',
            'Aprovado por 75 votos a 1 no Senado Federal.',
            'Manutenção integral dos salários e compensação por produtividade.',
          ],
          fontes: (t.fontes || []).map(f => ({ nome: f.f, veiculo: f.t, url: f.u })),
        },
        perguntaDeOuro: t.pergunta || 'Se a tecnologia aumentou a produtividade, por que o trabalhador ainda deveria ter que trabalhar 6 dias para folgar apenas um?',
        impacto: i === 0 ? 'critico' : 'alto',
      });
    });

    return { cards, dossies };
  } catch (err) {
    console.error('Erro ao conectar com repositórios abertos:', err.message);
    return { cards: [], dossies: [] };
  }
}

// Main Runner
async function main() {
  const [canais, noticias, repoData] = await Promise.all([
    fetchYouTubeFeeds(),
    fetchGoogleNews(),
    fetchOpenRepositories(),
  ]);

  const outputData = {
    geradoEm: new Date().toISOString(),
    ultimaAtualizacaoFormatada: `Hoje às ${new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' })}`,
    noticias,
    canais,
    cards: repoData.cards,
    dossies: repoData.dossies,
  };

  const outputPath = path.resolve(__dirname, '../src/data/liveFeeds.json');
  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8');
  console.log(`✅ [Nexo Popular] Base atualizada e salva em ${outputPath}`);
}

main();
