# 📡 Radar da Mobilização (Inspirado no Radar da Virada)

Plataforma de alta performance para salas de situação, campanhas e mobilização social, inspirada na dinâmica do [Radar da Virada](https://radardavirada.pages.dev/).

🌐 **Deploy ao vivo:** [https://radar-campanha.pages.dev/](https://radar-campanha.pages.dev/)

O projeto foi construído em **Next.js 15 (App Router)** com **Tailwind CSS**, **TypeScript** e **Lucide Icons**, com foco total em experiência mobile e compartilhamento instantâneo via WhatsApp.

---

## 🚀 Como Executar Localmente

No terminal, dentro da pasta `radar-campanha`:

```bash
# 1. Entrar na pasta do projeto
cd radar-campanha

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador ou acesse pelo celular na mesma rede Wi-Fi.

Para gerar a versão de produção otimizada:
```bash
npm run build
npm run start
```

---

## 🗂️ Onde os Dados Ficam e Como Editar

Todos os dados atuais estão concentrados em um único arquivo de fácil leitura e edição:

📁 **`src/data/mockData.ts`**

Neste arquivo você pode alterar:
- **`METADATA_GERAL`**: Nome do radar, slogan, carimbo de horário e contadores.
- **`MOCK_CARDS`**: Lista de cards da seção *"Pra Mandar Agora"*. Cada card possui:
  - Título e frase de impacto
  - Categoria (`urgente`, `fakenews`, `economia`, `propostas`, `social`)
  - URL da imagem
  - Texto completo formatado para WhatsApp com emojis e quebras de linha
  - Fonte e data
- **`MOCK_NARRATIVAS`**: Dados do comparador *"Do que cada lado fala"*:
  - O que a oposição/boato diz
  - O fato real com argumento-chave e link da fonte
  - Volume de menções e métricas de impacto
- **`MOCK_NOTICIAS`**: Feed cronológico do *"Agora / Painel da Imprensa"*:
  - Horário, portal (G1, Folha, UOL, etc.), título e link original
- **`MOCK_CANAIS`**: Monitor da *"Rede de Criadores"*:
  - Nome do canal, plataforma, seguidores e status (`24h`, `72h` ou `inativo`)

---

## 🧱 Componentes Principais

| Componente | Arquivo | Função |
| :--- | :--- | :--- |
| **Header** | `src/components/Header.tsx` | Barra fixa com badge "AO VIVO", horário e âncoras rápidas |
| **HeroAlert** | `src/components/HeroAlert.tsx` | Alerta urgente do dia e contadores em tempo real |
| **PraMandarAgora** | `src/components/PraMandarAgora.tsx` | Cards com 1-clique para WhatsApp (`wa.me/?text=`), download e cópia |
| **GuerraNarrativa** | `src/components/GuerraNarrativa.tsx` | Comparativo lado a lado de narrativas com botão de copiar resposta |
| **PainelAgora** | `src/components/PainelAgora.tsx` | Feed de notícias da imprensa com badges de urgência e links |
| **RedeCriadores** | `src/components/RedeCriadores.tsx` | Monitor de atividade dos canais parceiros (verde 24h, amarelo 72h, cinza inativo) |

---

## 🔌 Próximo Passo: Conectar com Google Sheets

Para que a equipe de redação alimente o radar sem precisar mexer em código:
1. Criar uma planilha pública ou com API Service Account no Google Cloud.
2. Trocar a importação de `mockData.ts` em `src/app/page.tsx` por uma rota `fetch` com revalidação automática a cada 60 segundos (`next: { revalidate: 60 }`).
