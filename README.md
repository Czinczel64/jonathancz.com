# Jonathan CZ — portfólio audiovisual

Site estático em HTML, CSS e JavaScript, com o domínio existente registrado em `CNAME`. Não precisa de Node, gerenciador de pacotes ou build.

## Desenvolvimento

Use o checkout existente. Cada tarefa na nuvem já tem um ambiente isolado; não crie worktrees, a menos que isso seja solicitado.

```sh
cd /workspace/jonathancz.com
python3 -m http.server 8000 --bind 127.0.0.1
```

Em outro terminal, confirme que a página responde e que as mídias são servidas. O servidor acima serve apenas para desenvolvimento; GitHub Pages serve a versão publicada.

## Arquivos

- `index.html`: página principal, textos, trabalhos anteriores e metadados.
- `assets/portfolio.css` e `assets/portfolio.js`: serviços, galeria, filtros e player acessível.
- `assets/ai-videos/`: nove MP4, miniaturas WebP e inventário técnico. Os MP4 foram reorganizados com `faststart`, preservando os fluxos de vídeo e áudio, resolução e duração.
- `assets/audiovisual-social.jpg`: imagem de compartilhamento.

Os nomes exibidos nos nove novos vídeos são descrições editoriais das cenas. Não representam clientes, resultados ou nomes oficiais de projetos. Os trabalhos anteriores, seus arquivos e âncoras continuam acessíveis.

## Publicação

O repositório que corresponde ao domínio é `Czinczel64/jonathancz.com`. Preserve o arquivo `CNAME` e a configuração existente do GitHub Pages. Antes de enviar alterações, confira se o remoto avançou e valide a reprodução dos vídeos, os filtros e o layout mobile. A publicação pelo GitHub depende da permissão de escrita no repositório e da fonte configurada em Settings → Pages.

O demo reel e as fontes já existentes usam serviços externos. No ambiente da nuvem, o acesso de leitura a esses destinos depende da política de rede. Credenciais e valores de variáveis não devem ser colocados nos arquivos do site.

Legendas/transcrições dos novos vídeos não foram fornecidas. Os players têm controles nativos e não iniciam com som ao carregar a página.
