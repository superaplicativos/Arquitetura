# Deploy para GitHub Pages

## Passos para Deploy

### 1. Build do Projeto
```bash
pnpm run build
```

### 2. Criar arquivo .nojekyll
Crie um arquivo vazio chamado `.nojekyll` na pasta `out/` após o build.

### 3. Inicializar Git (se ainda não foi feito)
```bash
cd D:\CURSOS-2026\cruip\template
git init
git add .
git commit -m "Initial commit - Landing Page Curso IA Arquitetura"
```

### 4. Adicionar Remote do GitHub
```bash
git remote add origin https://github.com/superaplicativos/Arquitetura.git
git branch -M main
```

### 5. Push para GitHub
```bash
git push -u origin main
```

### 6. Deploy da pasta `out` para GitHub Pages
```bash
cd out
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/superaplicativos/Arquitetura.git
git push -f origin gh-pages
```

## Configuração do GitHub Pages

1. Acesse: https://github.com/superaplicativos/Arquitetura/settings/pages
2. Em "Source", selecione: **Branch: gh-pages** / **/ (root)**
3. Clique em "Save"
4. Aguarde alguns minutos
5. Acesse: https://superaplicativos.github.io/Arquitetura/

## Atualizações Futuras

Para atualizar o site:

```bash
# 1. Faça as alterações no código
# 2. Build novamente
pnpm run build

# 3. Deploy da pasta out
cd out
git add .
git commit -m "Update site"
git push -f origin gh-pages
```

## Links Importantes

- **Site**: https://superaplicativos.github.io/Arquitetura/
- **Repositório**: https://github.com/superaplicativos/Arquitetura
- **Curso Hotmart**: https://pay.hotmart.com/C106369391H
- **WhatsApp**: https://wa.me/5511966161611
- **Instagram**: https://www.instagram.com/guimiranda.tech/
- **LinkedIn**: https://www.linkedin.com/in/desenvolvimentodeaplicativos

## Estrutura do Projeto

```
template/
├── app/
│   └── (default)/
│       └── page.tsx          # Página principal
├── components/
│   ├── hero-home.tsx         # Hero Section
│   ├── three-pillars.tsx     # 5 Técnicas do Curso
│   ├── before-after.tsx      # Antes e Depois
│   ├── pricing.tsx           # Planos (R$ 39,90 e R$ 499,90)
│   ├── cta.tsx              # CTA Final
│   └── ui/
│       ├── header.tsx        # Header
│       ├── footer.tsx        # Footer
│       └── logo.tsx          # Logo GuiMiranda.Tech
├── public/
│   └── images/
│       └── cursoproducaoarquitetosdesigners.jpg
└── next.config.js           # Configuração para GitHub Pages
```

## Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **Tailwind CSS 4** - Estilização
- **TypeScript** - Tipagem
- **AOS** - Animações on scroll
- **GitHub Pages** - Hospedagem

## Suporte

Para dúvidas ou problemas:
- WhatsApp: (11) 96616-1611
- Instagram: @guimiranda.tech