export type CategoriaCard = 'urgente' | 'economia' | 'fakenews' | 'propostas' | 'social';

export interface CardItem {
  id: string;
  titulo: string;
  fraseDestaque: string;
  subtitulo?: string;
  categoria: CategoriaCard;
  badge: string;
  corBadge: string;
  imagemUrl: string;
  textoZap: string;
  fonte?: string;
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

export interface NarrativaItem {
  id: string;
  tema: string;
  ladoAtaque: {
    nome: string;
    narrativa: string;
    volumeEstimado: string;
  };
  ladoDefesa: {
    nome: string;
    fatoReal: string;
    argumentoChave: string;
    fonteOficial: string;
    linkOficial?: string;
  };
  impacto: 'critico' | 'alto' | 'moderado';
  viewsHora: string;
  compartilhamentos: string;
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
