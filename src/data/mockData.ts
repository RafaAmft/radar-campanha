import { CardItem, NoticiaItem, NarrativaItem, CanalItem } from '@/types';

export const METADATA_GERAL = {
  nomeRadar: 'Radar da Mobilização',
  slogan: 'Destaques do dia, guerra de narrativas e cards prontos para mandar no WhatsApp.',
  ultimaAtualizacao: 'Hoje às 09:42',
  totalCards: 18,
  totalPortais: 14,
  canaisMonitorados: 24,
};

export const MOCK_CARDS: CardItem[] = [
  {
    id: 'card-1',
    titulo: 'Salário Mínimo e Poder de Compra',
    fraseDestaque: 'Aumento real acima da inflação confirmado pelo 3º ano consecutivo.',
    subtitulo: 'Impacto direto no bolso de 54 milhões de trabalhadores e aposentados.',
    categoria: 'economia',
    badge: 'Economia Real',
    corBadge: 'bg-emerald-600',
    imagemUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80',
    textoZap: `🚨 *OLHA O DADO REAL QUE ELES NÃO QUEREM QUE VOCÊ VEJA:*

O salário mínimo teve aumento REAL acima da inflação pelo 3º ano consecutivo! São mais de 54 milhões de brasileiros beneficiados diretamente.

Enquanto a oposição tenta distorcer, os números oficiais do Dieese e Banco Central comprovam a recuperação do poder de compra.

📲 Compartilhe a verdade no seu grupo da família e do trabalho!`,
    fonte: 'Fonte: DIEESE / MTE (2026)',
    data: 'Hoje',
  },
  {
    id: 'card-2',
    titulo: 'Desmentindo a Fake News da Saúde',
    fraseDestaque: 'É FALSO que o programa de remédios gratuitos foi suspenso.',
    subtitulo: 'Farmácia Popular bateu recorde de distribuição de medicamentos para hipertensão e diabetes.',
    categoria: 'fakenews',
    badge: 'Checagem Urgente',
    corBadge: 'bg-rose-600',
    imagemUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    textoZap: `⚠️ *ALERTA DE FAKE NEWS NO WHATSAPP:*

Está circulando que a Farmácia Popular vai acabar ou foi suspensa. *ISSO É MENTIRA!*

✅ O fato: O programa foi ampliado e bateu recorde de remédios 100% gratuitos para diabetes, pressão alta e asma.

Não deixe seus parentes caírem em golpe! Mande esse aviso nos grupos agora.`,
    fonte: 'Checagem: Lupa / Ministério da Saúde',
    data: 'Há 1 hora',
  },
  {
    id: 'card-3',
    titulo: 'Tarifa Zero no Transporte aos Domingos',
    fraseDestaque: 'Projeto avança e garante mobilidade gratuita para lazer e cultura.',
    subtitulo: 'Mais de 120 municípios já adotaram o modelo com aprovação superior a 80%.',
    categoria: 'propostas',
    badge: 'Direito à Cidade',
    corBadge: 'bg-indigo-600',
    imagemUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    textoZap: `🚌 *TRANSPORTE PÚBLICO GRATUITO: UMA VITÓRIA CONCRETA!*

Você sabia que mais de 120 cidades já adotaram a Tarifa Zero aos domingos e feriados? 

Isso significa lazer para a família, comércio de bairro aquecido e direito de ir e vir garantido para quem mais precisa.

👉 Veja como apoiar o projeto na nossa região!`,
    fonte: 'Associação Nacional das Empresas de Transportes',
    data: 'Hoje',
  },
  {
    id: 'card-4',
    titulo: 'Geração de Empregos com Carteira Assinada',
    fraseDestaque: 'Brasil registra menor taxa de desemprego dos últimos 10 anos.',
    subtitulo: 'Saldo positivo puxado pelo setor de serviços, indústria e energias renováveis.',
    categoria: 'urgente',
    badge: 'Destaque Nacional',
    corBadge: 'bg-amber-600',
    imagemUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    textoZap: `🇧🇷 *EMPREGO EM ALTA: MENOR DESEMPREGO EM UMA DÉCADA!*

Os dados oficiais do CAGED/IBGE acabam de sair: o desemprego caiu para o menor patamar em 10 anos! Mais vagas com carteira assinada e direitos preservados.

Quando diziam que não era possível, o Brasil provou o contrário na prática.

Repasse pros indecisos verem a diferença!`,
    fonte: 'Fonte: IBGE / CAGED',
    data: 'Hoje cedo',
  },
  {
    id: 'card-5',
    titulo: 'Proteção Ambiental e Fundo Amazônia',
    fraseDestaque: 'Queda de 45% no desmatamento e retomada dos investimentos internacionais.',
    subtitulo: 'Fiscalização rigorosa e apoio aos povos originários recolocam o país na liderança climática.',
    categoria: 'social',
    badge: 'Meio Ambiente',
    corBadge: 'bg-teal-600',
    imagemUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80',
    textoZap: `🌳 *NOTÍCIA QUE ORGULHA O BRASIL NO MUNDO:*

Desmatamento em queda livre (-45%) e recorde de recursos recuperados para proteção das nossas florestas e reservas indígenas.

O Brasil voltou a ser respeitado lá fora e a cuidar do que é nosso aqui dentro.

📲 Ajude a espalhar as conquistas reais!`,
    fonte: 'INPE / Deter 2026',
    data: 'Ontem',
  },
  {
    id: 'card-6',
    titulo: 'Gás de Cozinha e Combustíveis',
    fraseDestaque: 'Fim da paridade de importação manteve o botijão acessível para quem precisa.',
    subtitulo: 'Auxílio Gás atende 5,6 milhões de famílias em situação de vulnerabilidade.',
    categoria: 'economia',
    badge: 'Custo de Vida',
    corBadge: 'bg-emerald-600',
    imagemUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    textoZap: `🔥 *GÁS NO PREÇO JUSTO:*

Lembram quando o gás passou dos R$ 130 por causa da política de dólar da Petrobras?

A mudança de rumo garantiu estabilidade no botijão e o Auxílio Gás pago a 100% para mais de 5,6 milhões de famílias.

Compartilhe com quem sentiu o alívio no fim do mês!`,
    fonte: 'ANP / MDS',
    data: 'Hoje',
  },
];

export const MOCK_NOTICIAS: NoticiaItem[] = [
  {
    id: 'noticia-1',
    hora: '09:35',
    portal: 'G1',
    titulo: 'Inflação fecha o mês abaixo das expectativas do mercado financeiro e projeta corte de juros.',
    url: 'https://g1.globo.com',
    urgente: true,
    resumo: 'Alimentos da cesta básica puxam queda e aliviam despesas das famílias de menor renda.',
    categoria: 'Economia',
  },
  {
    id: 'noticia-2',
    hora: '09:12',
    portal: 'Folha de S.Paulo',
    titulo: 'Pesquisa mostra avanço na aprovação das medidas sociais e consolidação de votos entre indecisos.',
    url: 'https://folha.uol.com.br',
    categoria: 'Pesquisas',
  },
  {
    id: 'noticia-3',
    hora: '08:45',
    portal: 'UOL Notícias',
    titulo: 'Tribunal Eleitoral endurece regras e determina remoção imediata de montagens com inteligência artificial.',
    url: 'https://uol.com.br',
    urgente: true,
    resumo: 'Decisão visa conter disparos em massa e proteger o debate público na reta final.',
    categoria: 'Justiça',
  },
  {
    id: 'noticia-4',
    hora: '08:15',
    portal: 'Agência Brasil',
    titulo: 'Investimento em infraestrutura e novas linhas de metrô e ferrovia ultrapassam meta anual.',
    url: 'https://agenciabrasil.ebc.com.br',
    categoria: 'Obras',
  },
  {
    id: 'noticia-5',
    hora: '07:50',
    portal: 'Nexo Jornal',
    titulo: 'Como a mobilização descentralizada no WhatsApp está superando os velhos métodos de panfletagem.',
    url: 'https://nexojornal.com.br',
    categoria: 'Estratégia',
  },
];

export const MOCK_NARRATIVAS: NarrativaItem[] = [
  {
    id: 'nar-1',
    tema: 'Custo dos Alimentos & Cesta Básica',
    ladoAtaque: {
      nome: 'Oposição / Bots',
      narrativa: '"O preço dos alimentos continua alto e o poder de compra está destruído."',
      volumeEstimado: '185k menções/dia',
    },
    ladoDefesa: {
      nome: 'Nossa Resposta / Fato Real',
      fatoReal: 'A cesta básica caiu pelo 4º mês seguido em 14 capitais (DIEESE), e o aumento do salário mínimo superou a inflação acumulada.',
      argumentoChave: 'Não compare com boatos, compare com os dados: o arroz e o óleo caíram em média 12% no atacado.',
      fonteOficial: 'Relatório Nacional DIEESE & Cepea/Esalq',
      linkOficial: 'https://www.dieese.org.br',
    },
    impacto: 'critico',
    viewsHora: '34.200 views/h',
    compartilhamentos: '14.800 shares',
  },
  {
    id: 'nar-2',
    tema: 'Segurança Pública & Policiamento',
    ladoAtaque: {
      nome: 'Oposição / Grupos de Zap',
      narrativa: '"Estão desmontando a polícia e favorecendo o crime com leis brandas."',
      volumeEstimado: '142k menções/dia',
    },
    ladoDefesa: {
      nome: 'Nossa Resposta / Fato Real',
      fatoReal: 'Foram investidos R$ 4,2 bilhões em armamento moderno, câmeras corporais, inteligência e apreensão recorde de drogas e fuzis nas fronteiras.',
      argumentoChave: 'Segurança séria se faz com inteligência e corte no dinheiro do crime organizado, não com discurso vazio.',
      fonteOficial: 'Ministério da Justiça e Segurança Pública',
      linkOficial: 'https://www.gov.br/mj',
    },
    impacto: 'alto',
    viewsHora: '28.900 views/h',
    compartilhamentos: '9.400 shares',
  },
  {
    id: 'nar-3',
    tema: 'Educação & Bolsas de Estudo',
    ladoAtaque: {
      nome: 'Oposição',
      narrativa: '"Os programas de permanência estudantil são assistencialismo sem critério."',
      volumeEstimado: '88k menções/dia',
    },
    ladoDefesa: {
      nome: 'Nossa Resposta / Fato Real',
      fatoReal: 'O programa Pé-de-Meia reduziu a evasão escolar no Ensino Médio em 32% no primeiro ano de aplicação com frequência comprovada.',
      argumentoChave: 'Garantir que o jovem pobre termine a escola é o maior investimento contra o desemprego do futuro.',
      fonteOficial: 'Censo Escolar / MEC',
      linkOficial: 'https://www.gov.br/mec',
    },
    impacto: 'moderado',
    viewsHora: '19.500 views/h',
    compartilhamentos: '7.100 shares',
  },
];

export const MOCK_CANAIS: CanalItem[] = [
  {
    id: 'ch-1',
    nome: 'Galera da Virada Oficial',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    seguidores: '450k',
    plataforma: 'youtube',
    url: 'https://youtube.com',
    status: '24h',
    ultimoVideo: {
      titulo: 'URGENTE: Como responder as últimas fakes do zap com argumentos irrefutáveis',
      tempoAtras: 'Postou há 3 horas',
      link: 'https://youtube.com',
    },
  },
  {
    id: 'ch-2',
    nome: 'Jornalismo Independente & Povo',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    seguidores: '820k',
    plataforma: 'youtube',
    url: 'https://youtube.com',
    status: '24h',
    ultimoVideo: {
      titulo: 'Os dados do PIB que a grande mídia escondeu na página 12',
      tempoAtras: 'Postou há 6 horas',
      link: 'https://youtube.com',
    },
  },
  {
    id: 'ch-3',
    nome: 'Voz da Periferia Podcast',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    seguidores: '210k',
    plataforma: 'podcast',
    url: 'https://spotify.com',
    status: '24h',
    ultimoVideo: {
      titulo: 'Episódio #48: A força do voto jovem e a mobilização nas ruas',
      tempoAtras: 'Postou há 12 horas',
      link: 'https://spotify.com',
    },
  },
  {
    id: 'ch-4',
    nome: 'Desmistificando a Política',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    seguidores: '340k',
    plataforma: 'tiktok',
    url: 'https://tiktok.com',
    status: '72h',
    ultimoVideo: {
      titulo: '3 mentiras sobre os impostos explicadas em 60 segundos',
      tempoAtras: 'Postou há 2 dias',
      link: 'https://tiktok.com',
    },
  },
  {
    id: 'ch-5',
    nome: 'Coletivo Mobiliza Brasil',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    seguidores: '160k',
    plataforma: 'instagram',
    url: 'https://instagram.com',
    status: '72h',
    ultimoVideo: {
      titulo: 'Carrossel de dados: Por que o Brasil não pode voltar atrás',
      tempoAtras: 'Postou há 2 dias',
      link: 'https://instagram.com',
    },
  },
  {
    id: 'ch-6',
    nome: 'Canal Cidadania em Foco',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    seguidores: '95k',
    plataforma: 'youtube',
    url: 'https://youtube.com',
    status: 'inativo',
    ultimoVideo: {
      titulo: 'Análise de conjuntura eleitoral e os rumos das reformas',
      tempoAtras: 'Sem vídeos nos últimos 4 dias',
      link: 'https://youtube.com',
    },
  },
];
