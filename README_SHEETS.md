# 📊 Integração com Google Sheets (Dra. Roberta Quinn)

Este site foi preparado para que a **Dra. Roberta Quinn** possa alterar os textos mais importantes (como títulos, biografias e chamadas) de forma instantânea diretamente de uma **Planilha do Google Sheets**, sem precisar mexer em códigos ou no GitHub!

---

## 🛠️ Passo a Passo para Configurar a Planilha

### Passo 1: Criar a Planilha no Google Drive
Crie uma planilha com exatamente as seguintes colunas (tudo em minúsculo na primeira linha):
1. **id** (A chave que o site usa para achar o texto)
2. **secao** (Apenas para organização visual da Dra. Roberta saber onde o texto aparece)
3. **texto** (O texto final que aparecerá no site. Suporta quebras de linha com `\n`)

> **💡 Dica:** [Clique aqui para abrir um modelo pré-pronto de planilha](https://docs.google.com/spreadsheets/d/1W2vD8VqD1VzU6RzW_I_yZ_t5xM3N_eS_L-9m5Y-E0_Q) que você pode copiar no seu Google Drive (Arquivo -> Fazer uma cópia).

---

### Passo 2: Publicar a Planilha na Web (Extremamente Importante)
Para que o site consiga ler a planilha, ela precisa estar pública em formato CSV:
1. No menu superior da sua Planilha Google, clique em **Arquivo** (File) -> **Compartilhar** (Share) -> **Publicar na Web** (Publish to Web).
2. Na janela que abrir:
   - Em vez de "Página da Web", altere para **Valores separados por vírgulas (.csv)** (Comma-separated values).
3. Clique em **Publicar** (Publish).
4. *Pode fechar a caixinha do link que ele gerar.*

---

### Passo 3: Configurar o ID da Planilha no Site
Toda planilha tem um código único na barra de endereços do seu navegador. 
Exemplo:
`https://docs.google.com/spreadsheets/d/1W2vD8VqD1VzU6RzW_I_yZ_t5xM3N_eS_L-9m5Y-E0_Q/edit`
O ID dela é o código que fica entre `/d/` e `/edit`. No caso acima, é:
`1W2vD8VqD1VzU6RzW_I_yZ_t5xM3N_eS_L-9m5Y-E0_Q`

Para aplicar o seu ID no site, você tem duas opções:

#### Opção A (Recomendada - Sem reinstalar):
Abra o arquivo `/src/context/TextContext.tsx` e troque o ID que está na linha 74 pelo ID da sua nova planilha:
```typescript
const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID || "COLE_O_ID_DA_SUA_PLANILHA_AQUI";
```

#### Opção B (Por variável de ambiente):
Adicione no seu arquivo `.env` ou nas configurações do seu servidor (Vercel/GitHub Actions):
```env
VITE_GOOGLE_SHEET_ID=seu_id_da_planilha_aqui
```

---

## 🔑 Tabela de Chaves de Textos (IDs)

Aqui está a lista de chaves (`id`) que a Dra. Roberta pode colocar na primeira coluna da planilha para editar os textos correspondentes:

| id | secao | Descrição / Exemplo |
| :--- | :--- | :--- |
| **hero_tagline** | Hero | Linha roxa acima do título: *"Fisioterapia · Gyrotonic® · Canolu"* |
| **hero_title** | Hero | Título principal: *"Movimento com mais segurança, postura..."* |
| **hero_subtitle** | Hero | Subtítulo principal: *"Atendimento individualizado para dor..."* |
| **hero_cta** | Hero | Botão principal de agendamento: *"Agendar avaliação no WhatsApp"* |
| **hero_maps_btn** | Hero | Botão do Google Maps: *"Ver no Google Maps"* |
| **hero_footer_tagline** | Hero | Tagline de rodapé da seção: *"Itaim Bibi · São Paulo — presencial..."* |
| **services_eyebrow** | Serviços | Mini-título da seção: *"Serviços"* |
| **services_title** | Serviços | Título principal: *"Cada atendimento parte de uma avaliação..."* |
| **services_subtitle** | Serviços | Descrição sutil abaixo do título |
| **service_group_fisioterapia_e_reabilitacao_no_itaim_bibi_em_sao_paulo_sp** | Serviços | Cabeçalho do Grupo 1: *"Fisioterapia e Reabilitação no Itaim Bibi, em São Paulo, SP"* |
| **service_group_metodos_e_especialidades** | Serviços | Cabeçalho do Grupo 2: *"Métodos e Especialidades"* |
| **service_group_formato_de_atendimento** | Serviços | Cabeçalho do Grupo 3: *"Formato de Atendimento"* |
| **service_item_avaliacao_nome** | Serviços | Nome do serviço Avaliação de Movimento |
| **service_item_avaliacao_desc** | Serviços | Descrição do serviço Avaliação de Movimento |
| **service_item_dor-lombar_nome** | Serviços | Nome do serviço Fisioterapia para Dor Lombar |
| **service_item_dor-lombar_desc** | Serviços | Descrição do serviço Fisioterapia para Dor Lombar |
| **service_item_dtm_nome** | Serviços | Nome do serviço Bruxismo, DTM e Dor na Mandíbula |
| **service_item_dtm_desc** | Serviços | Descrição do serviço Bruxismo, DTM e Dor na Mandíbula |
| **service_item_cervical_nome** | Serviços | Nome do serviço Fisioterapia para Dor Cervical e Ombros |
| **service_item_cervical_desc** | Serviços | Descrição do serviço Fisioterapia para Dor Cervical e Ombros |
| **service_item_pos-cirurgico_nome** | Serviços | Nome do serviço Reabilitação Pós-Cirúrgica |
| **service_item_pos-cirurgico_desc** | Serviços | Descrição do serviço Reabilitação Pós-Cirúrgica |
| **service_item_lesao-esportiva_nome** | Serviços | Nome do serviço Reabilitação de Lesão Esportiva |
| **service_item_lesao-esportiva_desc** | Serviços | Descrição do serviço Reabilitação de Lesão Esportiva |
| **service_item_home-office_nome** | Serviços | Nome do serviço Fisioterapia para Postura (Home Office) |
| **service_item_home-office_desc** | Serviços | Descrição do serviço Fisioterapia para Postura (Home Office) |
| **service_item_gyrotonic_nome** | Serviços | Nome do serviço Método GYROTONIC® |
| **service_item_gyrotonic_desc** | Serviços | Descrição do serviço Método GYROTONIC® |
| **service_item_canolu_nome** | Serviços | Nome do serviço Método Canolu |
| **service_item_canolu_desc** | Serviços | Descrição do serviço Método Canolu |
| **service_item_mobilidade_nome** | Serviços | Nome do serviço Mobilidade e Envelhecimento Ativo |
| **service_item_mobilidade_desc** | Serviços | Descrição do serviço Mobilidade e Envelhecimento Ativo |
| **service_item_presencial_nome** | Serviços | Nome do serviço Atendimento Presencial — Itaim Bibi |
| **service_item_presencial_desc** | Serviços | Descrição do serviço Atendimento Presencial |
| **service_item_online_nome** | Serviços | Nome do serviço Atendimento Online |
| **service_item_online_desc** | Serviços | Descrição do serviço Atendimento Online |
| **services_action_text** | Serviços | Texto do botão de chamada: *"Falar sobre este serviço →"* |
| **diferenciais_eyebrow** | Método | Mini-título da seção: *"Método"* |
| **diferenciais_title** | Método | Título: *"Fisioterapia, GYROTONIC® e Canolu como parte..."* |
| **diferenciais_item_0_titulo** | Método | Título do Item 1: *"Avaliação antes do plano"* |
| **diferenciais_item_0_texto** | Método | Texto do Item 1: *"Nenhum atendimento começa com..."* |
| **diferenciais_item_1_titulo** | Método | Título do Item 2: *"Master Trainer GYROTONIC®"* |
| **diferenciais_item_1_texto** | Método | Texto do Item 2: *"Roberta é Master Trainer certificada..."* |
| **diferenciais_item_2_titulo** | Método | Título do Item 3: *"Presencial e online"* |
| **diferenciais_item_2_texto** | Método | Texto do Item 3: *"Consultório no Itaim Bibi para..."* |
| **diferenciais_item_3_titulo** | Método | Título do Item 4: *"Alinhamento com outros profissionais"* |
| **diferenciais_item_3_texto** | Método | Texto do Item 4: *"Quando o caso pede, o acompanhamento..."* |
| **about_eyebrow** | Sobre Roberta | Selo de cima: *"Trajetória & Autoridade de Elite"* |
| **about_name** | Sobre Roberta | Nome: *"Dra. Roberta Quinn"* |
| **about_role** | Sobre Roberta | Subtítulo profissional: *"Fisioterapeuta (Crefito-3) • Gyrotonic®..."* |
| **about_tab_story** | Sobre Roberta | Texto da aba de biografia: *"Minha Trajetória"* |
| **about_tab_certs** | Sobre Roberta | Texto da aba de cursos: *"Especializações & Cursos"* |
| **about_story_p1** | Sobre Roberta | Primeiro parágrafo da biografia |
| **about_story_p2** | Sobre Roberta | Segundo parágrafo da biografia |
| **about_story_p3** | Sobre Roberta | Terceiro parágrafo da biografia |
| **about_highlight_1_val** | Sobre Roberta | Indicador esquerdo em negrito: *"Master Trainer"* |
| **about_highlight_1_lbl** | Sobre Roberta | Legenda do indicador esquerdo: *"Gyrotonic® System"* |
| **about_highlight_2_val** | Sobre Roberta | Indicador direito em negrito: *"Reabilitação"* |
| **about_highlight_2_lbl** | Sobre Roberta | Legenda do indicador direito: *"Alemanha & Brasil"* |
| **about_cta** | Sobre Roberta | Botão de WhatsApp: *"Conversar no WhatsApp"* |
| **espaco_eyebrow** | Tour Virtual | Selo superior: *"Tour Virtual"* |
| **espaco_title** | Tour Virtual | Título principal: *"Conheça o nosso Espaço"* |
| **espaco_desc_1** | Tour Virtual | Primeiro parágrafo descritivo do espaço clínico |
| **espaco_desc_2** | Tour Virtual | Segundo parágrafo focado no tratamento e biomecânica |
| **espaco_cta_whatsapp** | Tour Virtual | Botão de agendamento: *"Agendar sessão e visita"* |
| **espaco_cta_maps** | Tour Virtual | Botão de localização: *"Ver localização no Itaim Bibi"* |
| **faq_eyebrow** | FAQ | Mini-título: *"Dúvidas frequentes"* |
| **faq_title** | FAQ | Título principal: *"Antes de agendar"* |
| **faq_item_0_pergunta** | FAQ | Pergunta 1: *"Preciso de encaminhamento médico para agendar?"* |
| **faq_item_0_resposta** | FAQ | Resposta 1: *"Não necessariamente. A primeira avaliação..."* |
| **faq_item_1_pergunta** | FAQ | Pergunta 2: *"Qual a diferença entre GYROTONIC® e Pilates?"* |
| **faq_item_1_resposta** | FAQ | Resposta 2: *"São métodos diferentes..."* |
| **faq_item_2_pergunta** | FAQ | Pergunta 3: *"O atendimento online funciona para dor na coluna?"* |
| **faq_item_2_resposta** | FAQ | Resposta 3: *"Depende do quadro..."* |
| **faq_item_3_pergunta** | FAQ | Pergunta 4: *"Atende reabilitação pós-cirúrgica?"* |
| **faq_item_3_resposta** | FAQ | Resposta 4: *"Sim, com progressão segura..."* |
| **faq_item_4_pergunta** | FAQ | Pergunta 5: *"Como funciona a primeira consulta?"* |
| **faq_item_4_resposta** | FAQ | Resposta 5: *"Começa com uma avaliação..."* |
| **faq_item_5_pergunta** | FAQ | Pergunta 6: *"Qual a diferença entre a Simetria Craniomandibular e o GYROTONIC®?"* |
| **faq_item_5_resposta** | FAQ | Resposta 6: *"São abordagens complementares..."* |
| **video_faq_eyebrow** | Vídeo FAQ | Selo superior: *"Dra. Roberta Responde"* |
| **video_faq_title** | Vídeo FAQ | Título principal: *"FAQ em Vídeo"* |
| **video_faq_subtitle** | Vídeo FAQ | Subtítulo descritivo dos shorts de vídeo |
| **contact_title** | Contato | Título da seção final: *"O primeiro passo é uma avaliação..."* |
| **contact_subtitle** | Contato | Descrição da seção final: *"Conte o que você está sentindo..."* |
| **contact_cta** | Contato | Botão da seção final: *"Agendar avaliação no WhatsApp"* |

---

## 🛡️ Mecanismo de Segurança (Anti-Falhas)

Se por acaso a planilha ficar offline, for apagada sem querer ou o ID estiver errado, **o site não vai ficar em branco ou travar!** Ele usará de forma automática e silenciosa os textos originais (*fallbacks*) que já estão programados no código do site. 

Isso garante estabilidade máxima de 100% no ar, sempre.
