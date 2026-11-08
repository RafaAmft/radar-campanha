export type CategoriaCard = 'trabalho' | 'economia' | 'fakenews' | 'saude' | 'legislativo';

export interface FonteItem {
  nome: string;
  veiculo: string;
  url: string;
}

export interface CardItem {
  id: string;
  titulo: string;
  fraseDestaque: string;
  subtitulo?: string;
  categoria: CategoriaCard;
  badge: string;
  corBadge: string;
  imagemUrl: string;
  // Dois tons de mensagem para WhatsApp
  textoZapDialogo: string; // Tom amigável, empático, para familiares e colegas
  textoZapDados: string;   // Tom técnico com dados, fontes e artigos oficiais
  fontes: FonteItem[];
  data: string;
}

export interface NoticiaItem {
  id: string;
  hora: string;
  portal: string;
  titulo: string;
  url: string;
  urgente?: boolean;
  resumo?: string;
  categoria: string;
}

export interface DossieItem {
  id: string;
  tema: string;
  statusLegislativo?: string;
  truqueRetorico?: string;
  aQuemInteressa?: string;
  oBoato: {
    resumo: string;
    origem: string;
  };
  oFatoVerificado: {
    explicacao: string;
    dadosChave: string[];
    fontes: FonteItem[];
  };
  perguntaDeOuro: string; // Pergunta socrática para abrir diálogo sem briga
  impacto: 'critico' | 'alto' | 'moderado';
}

export interface PautaAcaoItem {
  id: string;
  pauta: string;
  status: string;
  contexto: string;
  acaoCidada: {
    tipo: 'votacao' | 'abaixo_assinado' | 'contato_parlamentar';
    textoBotao: string;
    url: string;
  };
}

export interface CanalItem {
  id: string;
  nome: string;
  avatar: string;
  seguidores: string;
  plataforma: 'youtube' | 'instagram' | 'tiktok' | 'podcast';
  url: string;
  status: '24h' | '72h' | 'inativo';
  ultimoVideo: {
    titulo: string;
    tempoAtras: string;
    link: string;
  };
}

export type CampoPolitico = 'nosso' | 'deles' | 'geral';

export interface AssuntoMomentoItem {
  id: string;
  termo: string;
  campo: CampoPolitico;
  redes: ('x' | 'google' | 'tiktok' | 'kwai')[];
  volume: string;
  velocidade: 'acelerando' | 'pico' | 'estavel';
  contextoCurto: string;
  contraNarrativa?: string;
  dossieIdRef?: string;
}

export interface VideoAssuntoItem {
  id: string;
  tema: string;
  titulo: string;
  canal: string;
  plataforma: 'youtube' | 'tiktok' | 'kwai';
  duracao: string;
  urlVideo: string;
  thumbnail: string;
  resumo: string;
  campo: 'nosso' | 'deles';
}
