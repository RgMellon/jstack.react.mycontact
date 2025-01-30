# 📱 Contacts App - Arquitetura MVVM

Este projeto foi desenvolvido utilizando React e implementa a arquitetura MVVM (Model-View-ViewModel) para melhor organização do código, separação de responsabilidades e escalabilidade.

## 📂 Estrutura do Projeto

```
src/
│── app/
│   ├── contacts/ # Módulo de contatos (Home)
│   │   ├── page.js # ViewModel: Conecta a Model com a View
│   │   ├── page.model.js # Model: Gerencia estado e regras de negócio
│   │   ├── page.view.js # View: Apenas renderiza a interface
│   │   ├── page.style.js # Estilos utilizando styled-components
│
│── services/ # Serviços externos (ex: API)
│── components/ # Componentes reutilizáveis
│── assets/ # Imagens e ícones
│── errors/ # Tratamento de erros
```

## 🎯 Por que usamos MVVM?

A implementação da arquitetura MVVM trouxe diversos benefícios para o projeto:

### ✅ 1. Melhor Separação de Responsabilidades (SoC - Separation of Concerns)

- **Model (page.model.js)** → Gerencia o estado e regras de negócio.
- **View (page.view.js)** → Apenas renderiza os dados recebidos.
- **ViewModel (page.js)** → Faz a ponte entre a Model e a View.

🔥 **Benefício:** Código mais limpo, modular e fácil de manter.

### ✅ 2. Facilidade de Testes Unitários 🧪

- A lógica da aplicação (**useContactsModel**) está separada da UI.
- Podemos testar as regras de negócio sem precisar renderizar a interface gráfica.

🔥 **Benefício:** Menos bugs e maior cobertura de testes.

### ✅ 3. Maior Reutilização de Código 📦

- O hook **useContactsModel** pode ser reutilizado em outras telas sem duplicação de código.
- Qualquer página que precise de contatos pode importar e usar a mesma lógica.

🔥 **Benefício:** Reuso eficiente e manutenção simplificada.

### ✅ 4. Código Mais Legível e Manutenível 🛠️

- Cada arquivo tem um propósito bem definido.
- Bugs são mais fáceis de encontrar e corrigir.
- Novos desenvolvedores entendem rapidamente a estrutura.

🔥 **Benefício:** Código sustentável e fácil de evoluir.

### ✅ 5. Escalabilidade 📈

- À medida que o projeto cresce, a separação de camadas evita componentes muito grandes e difíceis de gerenciar.
- Facilita a adição de novas funcionalidades sem comprometer a organização do código.

🔥 **Benefício:** O projeto pode crescer sem perder qualidade.

## 🚀 Conclusão

A adoção da arquitetura MVVM foi uma excelente escolha para tornar o código modular, reutilizável, testável e escalável.
Com essa estrutura, garantimos que o projeto se mantenha organizado e sustentável a longo prazo.

## 📌 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/RgMellon/jstack.react.mycontact.git

# Acesse o diretório do projeto
cd jstack.react.mycontact

# Instale as dependências
npm install

# Execute o projeto
npm start
```

💡 Sinta-se à vontade para contribuir e sugerir melhorias! 😃🚀
