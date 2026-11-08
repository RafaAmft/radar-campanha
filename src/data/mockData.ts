import { CardItem, NoticiaItem, DossieItem, PautaAcaoItem, CanalItem, AssuntoMomentoItem, VideoAssuntoItem } from '@/types';

export const METADATA_GERAL = {
  nomeRadar: 'Nexo Popular',
  slogan: 'Inteligência cidadã, dados oficiais e ferramentas de diálogo para o WhatsApp.',
  ultimaAtualizacao: 'Hoje às 11:15',
  totalCards: 12,
  totalPortais: 14,
  canaisMonitorados: 24,
};

export const MOCK_PAUTAS_ACAO: PautaAcaoItem[] = [
  {
    id: 'pauta-6x1',
    pauta: 'Implementação da Escala 5x2 (Fim do 6x1)',
    status: 'Emenda Constitucional promulgada; regulamentação em andamento',
    contexto: 'Garante 2 dias de folga semanal e jornada de 40h sem redução salarial. Setores empresariais tentam adiar a vigência nos estados.',
    acaoCidada: {
      tipo: 'votacao',
      textoBotao: 'Opinar na Consulta Pública do Senado',
      url: 'https://www12.senado.leg.br/ecidadania',
    },
  },
  {
    id: 'pauta-bets',
    pauta: 'Restrição e Bloqueio de Apostas Iseguras (Bets)',
    status: 'Julgamento no STF e projeto de lei em debate na Câmara',
    contexto: 'Proteção do orçamento das famílias de baixa renda e do Bolsa Família contra o endividamento predatório das plataformas de apostas.',
    acaoCidada: {
      tipo: 'contato_parlamentar',
      textoBotao: 'Acompanhar Votação na Câmara',
      url: 'https://www.camara.leg.br',
    },
  },
  {
    id: 'pauta-ir',
    pauta: 'Isenção do Imposto de Renda até R$ 5.000',
    status: 'Em tramitação no Congresso Nacional',
    contexto: 'Mais de 10 milhões de trabalhadores de classe média e baixa deixarão de pagar imposto de renda, compensado por tributação de super-ricos.',
    acaoCidada: {
      tipo: 'votacao',
      textoBotao: 'Votar a Favor no e-Cidadania',
      url: 'https://www12.senado.leg.br/ecidadania',
    },
  },
];

export const MOCK_CARDS: CardItem[] = [
  {
    id: 'card-6x1',
    titulo: 'Fim da Escala 6x1: Duas Folgas Semanais',
    fraseDestaque: '68% dos brasileiros apoiam o descanso semanal digno sem redução de salário.',
    subtitulo: 'Aprovado por 75 a 1 no Senado. Entenda como funciona a transição para a jornada 5x2.',
    categoria: 'trabalho',
    badge: 'Direito do Trabalho',
    corBadge: 'bg-emerald-600',
    imagemUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    textoZapDialogo: `Oi gente! Queria compartilhar uma reflexão tranquila sobre o fim da escala 6x1 que tem saído tanto nas notícias:

Muita gente acha que folgar dois dias por semana vai quebrar o comércio. Mas países que já adotaram a jornada de 40h tiveram aumento de produtividade e os trabalhadores passaram a gastar mais no próprio comércio de bairro nos fins de semana.

Quem trabalha com dignidade consome mais e adoece menos. Vale muito a pena ler os dados com calma:
🔗 https://radar-campanha.pages.dev/#cards`,
    textoZapDados: `📊 *DADOS OFICIAIS: FIM DA ESCALA 6x1 NO BRASIL*

• *Aprovação:* 75 votos a 1 no Senado Federal (PEC 141/2026).
• *Pesquisa de Opinião:* 68% da população apoia a medida (Genial/Quaest).
• *Garantia Legal:* Duas folgas semanais com manutenção integral do salário.

Fontes: Agência Senado e Relatório Técnico DIEESE.
Mais detalhes e checagem: https://radar-campanha.pages.dev/#cards`,
    fontes: [
      { nome: 'Agência Senado', veiculo: 'Senado Federal', url: 'https://www12.senado.leg.br' },
      { nome: 'Pesquisa Genial/Quaest', veiculo: 'Quaest', url: 'https://www.moneytimes.com.br' },
    ],
    data: 'Em destaque',
  },
  {
    id: 'card-bets',
    titulo: 'Proteção às Famílias contra as Bets',
    fraseDestaque: 'Mais de R$ 3 bilhões/mês deixam de ir para comida e comércio por causa de apostas ilegais.',
    subtitulo: 'Regulamentação rigorosa e proibição do uso de cartões e benefícios sociais para jogos de azar.',
    categoria: 'economia',
    badge: 'Cuidado Social',
    corBadge: 'bg-amber-600',
    imagemUrl: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=800&q=80',
    textoZapDialogo: `Pessoal, vejam que ponto importante sobre essa questão dos aplicativos de apostas (bets):

Não é sobre proibir a liberdade de ninguém, mas sim impedir que empresas estrangeiras sem sede no Brasil levem embora o dinheiro do arroz e feijão das nossas famílias através de algoritmos viciantes.

Proteger o salário do trabalhador é dever de qualquer país sério. O que vocês acham dessa medida?`,
    textoZapDados: `⚖️ *REGULAMENTAÇÃO DAS APOSTAS DIGITAIS (BETS)*

• *Impacto Econômico:* Relatório do Banco Central apontou evasão de R$ 3 bilhões mensais do comércio de varejo.
• *Medida em vigor:* Bloqueio de plataformas sem outorga federal e veto absoluto ao uso de Pix de programas sociais para jogos.
• *Finalidade:* Proteger a renda alimentar e prevenir endividamento crônico de famílias.

Fonte: Banco Central do Brasil & Ministério da Fazenda.`,
    fontes: [
      { nome: 'Relatório de Apostas', veiculo: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br' },
    ],
    data: 'Hoje',
  },
  {
    id: 'card-saude',
    titulo: 'Medicamentos Gratuitos na Farmácia Popular',
    fraseDestaque: 'Programa foi ampliado: 100% dos remédios de hipertensão, diabetes e asma sem custo.',
    subtitulo: 'Desmentindo boatos de suspensão. Mais de 22 milhões de brasileiros atendidos em 2026.',
    categoria: 'saude',
    badge: 'Saúde Pública',
    corBadge: 'bg-rose-600',
    imagemUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    textoZapDialogo: `Gente, caso alguém no grupo da família comente que a Farmácia Popular vai acabar: avisem que é boato! 

Minha mãe/conhecidos pegam remédio todo mês no posto e na farmácia credenciada. O programa na verdade foi ampliado para cobrir de graça remédios de colesterol e osteoporose também.

Avisem nossos idosos para não deixarem de buscar seus remédios! ❤️`,
    textoZapDados: `💊 *CHECAGEM OFICIAL: FARMÁCIA POPULAR*

• *Situação:* Programa ativo e ampliado para 41 itens de distribuição gratuita.
• *Cobertura:* Hipertensão, diabetes, asma, osteoporose e anticoncepcionais com gratuidade de 100%.
• *Como retirar:* Basta apresentar receita médica válida e CPF em qualquer farmácia credenciada com o selo do programa.

Checagem: Projeto Comprova / Ministério da Saúde.`,
    fontes: [
      { nome: 'Portal Oficial', veiculo: 'Ministério da Saúde', url: 'https://www.gov.br/saude' },
    ],
    data: 'Checado',
  },
  {
    id: 'card-renda',
    titulo: 'Poder de Compra e Salário Mínimo Real',
    fraseDestaque: 'Recuperação do ganho real acima da inflação pelo 3º ano consecutivo.',
    subtitulo: 'Regra permanente de valorização devolve o fôlego financeiro para 54 milhões de famílias.',
    categoria: 'economia',
    badge: 'Economia Real',
    corBadge: 'bg-teal-600',
    imagemUrl: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80',
    textoZapDialogo: `Um dado interessante para quem gosta de acompanhar as contas de casa:

A regra que garante aumento do salário mínimo sempre acima da inflação fez com que o valor real voltasse a subir depois de anos congelado. Quando o salário mínimo sobe, o aposentado gasta na padaria, no mercado da esquina, e todo o bairro ganha junto.

Economia boa é aquela em que o dinheiro circula na mão do povo trabalhador.`,
    textoZapDados: `📈 *POLÍTICA PERMANENTE DE VALORIZAÇÃO DO SALÁRIO MÍNIMO*

• *Regra:* Inflação acumulada (INPC) + variação positiva do PIB de 2 anos anteriores.
• *População alcançada:* 54,3 milhões de pessoas (trabalhadores ativos, aposentados e beneficiários do BPC).
• *Efeito econômico:* Injeção de R$ 69,9 bilhões na economia doméstica anual.

Fonte: Departamento Intersindical de Estatística e Estudos Socioeconômicos (DIEESE).`,
    fontes: [
      { nome: 'Boletim do Salário Mínimo', veiculo: 'DIEESE', url: 'https://www.dieese.org.br' },
    ],
    data: 'Consolidado',
  },
];

export const MOCK_DOSSIES: DossieItem[] = [
  {
    id: 'dossie-6x1',
    tema: 'Escala de Trabalho 6x1 vs. Jornada 5x2',
    statusLegislativo: 'Emenda Constitucional 141/2026 Promulgada',
    truqueRetorico: 'Pânico Econômico e Espantalho (jogar pequeno empresário contra trabalhador)',
    aQuemInteressa: 'Grandes redes de varejo e fast-food que dependem de escala exaustiva sem pagar hora extra.',
    oBoato: {
      resumo: '"O fim do 6x1 vai gerar demissões em massa e quebrar os pequenos comerciantes."',
      origem: 'Declarações de lideranças corporativas e correntes em redes sociais.',
    },
    oFatoVerificado: {
      explicacao: 'A transição de jornada foi planejada com prazo de adaptação de 60 dias e compensação por produtividade. Em testes globais e nacionais, a redução para 40h reduziu o absenteísmo médico em 42% e estimulou novas contratações no setor de serviços.',
      dadosChave: [
        'Aprovada por 75 votos a 1 no Senado em dois turnos.',
        '68% de apoio na sociedade geral e 55% mesmo entre eleitores de centro-direita (Quaest).',
        'Sem corte nos salários dos trabalhadores.',
      ],
      fontes: [
        { nome: 'Votação da PEC', veiculo: 'Agência Senado', url: 'https://www12.senado.leg.br' },
        { nome: 'Pesquisa Nacional', veiculo: 'Genial/Quaest', url: 'https://www.moneytimes.com.br' },
      ],
    },
    perguntaDeOuro: 'Se a tecnologia e as máquinas aumentaram a produtividade nos últimos 30 anos, por que o trabalhador ainda deveria ter que trabalhar 6 dias por semana para ter direito a descansar apenas um?',
    impacto: 'critico',
  },
  {
    id: 'dossie-bets',
    tema: 'Regulamentação das Bets & Jogos Online',
    statusLegislativo: 'Votação de Restrições em Pauta na Câmara e STF',
    truqueRetorico: 'Falsa Defesa da Liberdade Individual (disfarce de lobby bilionário predatório)',
    aQuemInteressa: 'Casas de aposta sediadas em paraísos fiscais que drenam R$ 3 bilhões mensais sem pagar impostos.',
    oBoato: {
      resumo: '"O governo quer controlar a liberdade das pessoas de apostarem onde quiserem."',
      origem: 'Campanhas publicitárias de operadores de jogos e influenciadores digitais.',
    },
    oFatoVerificado: {
      explicacao: 'O objetivo da regulamentação é combater a lavagem de dinheiro, proibir a publicidade enganosa voltada a crianças e jovens, e banir o endividamento predatório com cartão de crédito e recursos de assistência alimentar.',
      dadosChave: [
        'Mais de 2.000 sites irregulares foram desativados pela Anatel.',
        'Obrigação de sede fiscal no Brasil e pagamento de impostos como qualquer empresa.',
        'Mecanismos obrigatórios de limite de perdas e autoexclusão de apostadores.',
      ],
      fontes: [
        { nome: 'Portaria de Regulamentação', veiculo: 'Ministério da Fazenda', url: 'https://www.gov.br/fazenda' },
      ],
    },
    perguntaDeOuro: 'Você acha justo que empresas com sede em paraísos fiscais no exterior lucrem bilhões tirando dinheiro do comércio do seu bairro sem pagar impostos nem responder na Justiça brasileira?',
    impacto: 'alto',
  },
  {
    id: 'dossie-educacao',
    tema: 'Programa Pé-de-Meia (Poupança Estudantil)',
    statusLegislativo: 'Lei Federal 14.818 em plena execução',
    truqueRetorico: 'Estigmatização Meritocrática (rotular qualquer proteção social como "esmola")',
    aQuemInteressa: 'Grupos que lucram com a precarização da juventude e mão de obra barata sem formação.',
    oBoato: {
      resumo: '"Estão distribuindo dinheiro para jovens sem qualquer contrapartida ou exigência."',
      origem: 'Postagens de oposição qualificando o benefício como mero assistencialismo.',
    },
    oFatoVerificado: {
      explicacao: 'O incentivo financeiro só é liberado para alunos do Ensino Médio público que comprovarem frequência escolar mínima de 80%, participação em exames do Saeb e inscrição no Enem.',
      dadosChave: [
        'Redução comprovada de 32% na evasão escolar de jovens de baixa renda.',
        'Mais de 3,7 milhões de estudantes matriculados e monitorados.',
        'Poupança liberada apenas na conclusão do 3º ano com aprovação.',
      ],
      fontes: [
        { nome: 'Censo Escolar e Monitoramento', veiculo: 'MEC / Inep', url: 'https://www.gov.br/mec' },
      ],
    },
    perguntaDeOuro: 'O que custa mais caro para o Brasil: investir R$ 200 por mês para manter um jovem pobre estudando na escola, ou ter esse jovem abandonando os estudos e caindo no desemprego e na vulnerabilidade?',
    impacto: 'moderado',
  },
];

export const MOCK_NOTICIAS: NoticiaItem[] = [
  {
    id: 'noticia-1',
    hora: '09:35',
    portal: 'Agência Senado',
    titulo: 'Comissão avança na regulamentação da jornada 5x2 sem redução de salários.',
    url: 'https://www12.senado.leg.br',
    urgente: true,
    resumo: 'Relatório prevê incentivos fiscais para pequenas empresas nos primeiros 12 meses de transição.',
    categoria: 'Trabalho',
  },
  {
    id: 'noticia-2',
    hora: '09:12',
    portal: 'G1',
    titulo: 'Banco Central e Fazenda intensificam bloqueio de contas ligadas a apostas ilegais.',
    url: 'https://g1.globo.com',
    categoria: 'Economia',
  },
  {
    id: 'noticia-3',
    hora: '08:45',
    portal: 'Folha de S.Paulo',
    titulo: 'Isenção do IR para quem ganha até R$ 5.000 ganha apoio multipartidário no Congresso.',
    url: 'https://folha.uol.com.br',
    urgente: true,
    resumo: 'Proposta prevê alíquota progressiva para rendas superiores a R$ 50 mil mensais.',
    categoria: 'Justiça Tributária',
  },
];

export const MOCK_CANAIS: CanalItem[] = [
  {
    id: 'ch-icl',
    nome: 'ICL Notícias',
    avatar: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=200&q=80',
    seguidores: '1.8M',
    plataforma: 'youtube',
    url: 'https://www.youtube.com/@ICLNoticias',
    status: '24h',
    ultimoVideo: {
      titulo: 'Análise econômica popular e os rumos das reformas trabalhistas',
      tempoAtras: 'Postou há 3 horas',
      link: 'https://www.youtube.com/@ICLNoticias',
    },
  },
  {
    id: 'ch-carta',
    nome: 'CartaCapital',
    avatar: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=200&q=80',
    seguidores: '920k',
    plataforma: 'youtube',
    url: 'https://www.youtube.com/@cartacapital',
    status: '24h',
    ultimoVideo: {
      titulo: 'O papel do movimento popular na garantia dos direitos sociais',
      tempoAtras: 'Postou há 5 horas',
      link: 'https://www.youtube.com/@cartacapital',
    },
  },
];

export const MOCK_ASSUNTOS_MOMENTO: AssuntoMomentoItem[] = [
  {
    id: 'assunto-6x1',
    termo: 'Fim da Escala 6x1',
    campo: 'nosso',
    redes: ['x', 'tiktok', 'google'],
    volume: '380k menções',
    velocidade: 'acelerando',
    contextoCurto: 'Mobilização nacional pela jornada de 40h com 2 folgas semanais sem perda salarial.',
    contraNarrativa: 'Extrema direita espalha que o comércio vai falir; o fato é que reduz absenteísmo e estimula consumo local.',
    dossieIdRef: 'dossie-6x1',
  },
  {
    id: 'assunto-ir5k',
    termo: 'Isenção do IR até R$ 5.000',
    campo: 'nosso',
    redes: ['google', 'x'],
    volume: '210k buscas',
    velocidade: 'pico',
    contextoCurto: 'Justiça tributária que isenta 10 milhões de trabalhadores e taxa rendas superiores a R$ 50 mil.',
    contraNarrativa: 'Oposição alega rombo fiscal; Fazenda comprova compensação com tributação progressiva de super-ricos.',
    dossieIdRef: 'dossie-6x1',
  },
  {
    id: 'assunto-fake-pix',
    termo: 'Boato da "Taxação do Pix"',
    campo: 'deles',
    redes: ['kwai', 'tiktok', 'x'],
    volume: '490k visualizações',
    velocidade: 'acelerando',
    contextoCurto: 'Cortes reciclados de vídeos enganosos sugerindo que transações diárias do cidadão serão tarifadas.',
    contraNarrativa: 'Banco Central e Lei 14.818 garantem gratuidade irrestrita para pessoas físicas. Fake requentada para gerar medo.',
    dossieIdRef: 'dossie-bets',
  },
  {
    id: 'assunto-bets',
    termo: 'Regulamentação das Bets',
    campo: 'nosso',
    redes: ['x', 'google', 'kwai'],
    volume: '320k menções',
    velocidade: 'estavel',
    contextoCurto: 'Bloqueio de 2.000 sites ilegais e proibição de apostas com cartão de crédito e recursos assistenciais.',
    contraNarrativa: 'Lobby de jogos tenta usar o argumento de liberdade individual para mascarar lavagem de dinheiro.',
    dossieIdRef: 'dossie-bets',
  },
  {
    id: 'assunto-pe-meia',
    termo: 'Poupança Pé-de-Meia',
    campo: 'nosso',
    redes: ['google', 'tiktok'],
    volume: '150k buscas',
    velocidade: 'estavel',
    contextoCurto: 'Mais de 3,7 milhões de estudantes do ensino médio público com frequência monitorada e evasão em queda.',
    contraNarrativa: 'Rotulado falsamente de mero assistencialismo sem exigência; regra cobra 80% de frequência e aprovação.',
    dossieIdRef: 'dossie-educacao',
  },
  {
    id: 'assunto-panico-fiscal',
    termo: 'Pânico Fiscal & Corte de Gastos',
    campo: 'deles',
    redes: ['x', 'google'],
    volume: '280k menções',
    velocidade: 'pico',
    contextoCurto: 'Narrativa da grande mídia e oposição pressionando por corte na saúde e educação em vez de taxar o andar de cima.',
    contraNarrativa: 'Orçamento protege piso constitucional de saúde e educação e foca contenção em supersalários e emendas sem transparência.',
    dossieIdRef: 'dossie-6x1',
  },
];

export const MOCK_VIDEOS_ASSUNTO: VideoAssuntoItem[] = [
  {
    id: 'vid-6x1-1',
    tema: 'Escala 6x1',
    titulo: 'Por que o fim do 6x1 é bom para o comércio de bairro: a economia que ninguém te conta',
    canal: 'ICL Notícias',
    plataforma: 'youtube',
    duracao: '4:12',
    urlVideo: 'https://www.youtube.com/@ICLNoticias',
    thumbnail: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80',
    resumo: 'Explicação didática de como a produtividade aumenta e como duas folgas semanais fazem o salário circular no comércio local.',
    campo: 'nosso',
  },
  {
    id: 'vid-6x1-2',
    tema: 'Escala 6x1',
    titulo: 'Desmontando os mitos dos patrões sobre a jornada 5x2 no Senado',
    canal: 'CartaCapital',
    plataforma: 'youtube',
    duracao: '6:45',
    urlVideo: 'https://www.youtube.com/@cartacapital',
    thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80',
    resumo: 'Os números reais da votação de 75 a 1 e o lobby corporativo que tentou barrar a PEC.',
    campo: 'nosso',
  },
  {
    id: 'vid-bets-1',
    tema: 'Bets e Jogos',
    titulo: 'Como as Bets tiram R$ 3 bilhões por mês da comida do trabalhador',
    canal: 'Eduardo Moreira',
    plataforma: 'youtube',
    duracao: '5:20',
    urlVideo: 'https://www.youtube.com/@ICLNoticias',
    thumbnail: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80',
    resumo: 'Análise do relatório do Banco Central sobre a evasão de renda familiar para sites de apostas em paraísos fiscais.',
    campo: 'nosso',
  },
  {
    id: 'vid-ir-1',
    tema: 'Isenção IR',
    titulo: 'Quem ganha até R$ 5 mil não paga: quem vai pagar a conta agora?',
    canal: 'Meteoro Brasil',
    plataforma: 'youtube',
    duracao: '7:15',
    urlVideo: 'https://www.youtube.com/@cartacapital',
    thumbnail: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=600&q=80',
    resumo: 'A compensação tributária sobre os 0,1% mais ricos e por que isso equilibra as contas sem sacrificar o trabalhador.',
    campo: 'nosso',
  },
  {
    id: 'vid-pe-meia-1',
    tema: 'Pé-de-Meia',
    titulo: 'O impacto real da poupança estudantil na redução da evasão escolar',
    canal: 'TV Brasil Gov',
    plataforma: 'youtube',
    duracao: '3:50',
    urlVideo: 'https://www.youtube.com/@cartacapital',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    resumo: 'Dados de matrícula e permanência escolar comprovam o sucesso do programa que a oposição tenta ridicularizar.',
    campo: 'nosso',
  },
];
