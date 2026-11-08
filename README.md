# 🌐 Nexo Popular

Plataforma de **inteligência cidadã, dados abertos e mobilização social permanente**, desenvolvida para fortalecer o debate público com dados verificados e ferramentas de diálogo para o WhatsApp.

🌐 **Acesse ao vivo:** [https://radar-campanha.pages.dev/](https://radar-campanha.pages.dev/)

---

## 🎯 Da Campanha à Militância Esclarecida

O **Nexo Popular** nasceu da evolução dos radares eleitorais para uma ferramenta de cidadania ativa e permanente:
* **Sem linguagem militarizada:** Em vez de "soldados e trincheira", empoderamos cidadãos conscientes com repertório e dados.
* **Seletor de Tom no WhatsApp:** Todo material possui opção de envio em **Modo Diálogo** (empático, reflexivo, sem jargões para conversar com a família) ou **Modo Fatos & Dados** (técnico, com números e artigos de lei).
* **Pautas no Congresso & Pressão Cidadã:** Acompanhamento das disputas legislativas ativas (ex: *Escala 5x2*, *Regulamentação das Bets*, *Isenção do IR*) com link direto para enquetes oficiais do **e-Cidadania** do Senado e da Câmara.
* **Dossiês Mito vs. Fato com a "Pergunta de Ouro":** Método pedagógico para desarmar a desinformação através de perguntas reflexivas em vez de confronto direto.

---

## 🧱 Arquitetura e Módulos

| Módulo | Componente | Função |
| :--- | :--- | :--- |
| **Header com Busca** | `src/components/Header.tsx` | Barra de busca instantânea que filtra cards, dossiês e notícias por palavra-chave |
| **Pautas Legislativas** | `src/components/BriefingLegislativo.tsx` | Painel de pressão cidadã com status legislativo e links de consulta pública |
| **Kit de Diálogo** | `src/components/KitConversa.tsx` | Cards temáticos com seletor de tom (Diálogo vs Dados), download e envio no WhatsApp |
| **Dossiês Mito vs Fato** | `src/components/DossiesMitoFato.tsx` | Pedagogia em 3 passos: o boato, os dados reais e a Pergunta de Ouro socrática |
| **Panorama de Imprensa** | `src/components/PainelAgora.tsx` | Feed em tempo real das principais matérias políticas dos portais via RSS |
| **Rede de Criadores** | `src/components/RedeCriadores.tsx` | Monitor ao vivo de canais independentes com status de publicação em 24h/72h |

---

## 🚀 Como Executar Localmente

```bash
cd radar-campanha
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Para atualizar os dados ao vivo e fazer o deploy para a Cloudflare:
```bash
npm run deploy
```
