# Prática em Desenvolvimento de Software 2023/2

# Sistema de Gestão de Tarefas

# Membros

Ana Luiza - Frontend <br/>
Thiago Campos - Frontend <br/>
Rodolfo Lins - Backend <br/>
Otávio Meira - Backend <br/>

# Backlog do Produto

1 - Como usuário, eu gostaria de criar uma tarefa <br/>
2 - Como usuário, eu gostaria de editar e deletar minhas tarefas <br/>
3 - Como usuário, eu gostaria de visualizar minhas tarefas no formato Kanban <br/>
4 - Como usuário, eu gostaria de criar categorias para minhas tarefas <br/>
5 - Como usuário, eu gostaria de editar e deletar categorias <br/>
6 - Como usuário, eu gostaria de adicionar colaboradores em minhas tarefas <br/>
7 - Como usuário, eu gostaria de remover colaboradores em minhas tarefas <br/>
8 - Como usuário, eu gostaria de exportar minhas tarefas para um arquivo no formato JSON <br/>
9 - Como usuário, eu gostaria de importar minhas tarefas para o sistema, a partir de um arquivo no formato JSON <br/>
10 - Como usuário, eu gostaria de visualizar minhas tarefas agendadas em um calendário que permita enxergar de forma gráfica a linha do tempo, sobreposição de tarefas e início e fim de cada tarefa. <br/> 
11 - Como usuário, eu gostaria que, ao adicionar mais tempo a uma tarefa, todas as demais tarefas se ajustassem no calendário de acordo com a nova previsão de entrega. <br/>
12 - Como usuário, eu gostaria de acessar o sistema por meio de uma autenticação, com usuário e senha <br/>
13 - Como usuário, eu gostaria de visualizar e alterar minha foto de perfil <br/>
14 - Como admin, eu gostaria de editar ou remover tarefas de qualquer usuário <br/>
15 - Como admin, eu gostaria de bloquear o acesso de qualquer usuário <br/>

# Backlog do Sprint

**História #1**

1 - Como usuário, eu gostaria de criar uma tarefa <br/>
2 - Como usuário, eu gostaria de editar e deletar minhas tarefas <br/>

Tarefas e responsáveis:

Instalar banco de dados e criar primeiras tabelas [ Rodolfo ] <br/>
Instalar node.js e Express [ Rodolfo ] <br/>
Implementar no backend a lógica de criar, editar, listar e deletar tarefas [ Otávio ] <br/>

**História #2**

3 - Como usuário, eu gostaria de visualizar minhas tarefas no formato Kanban <br/>

Tarefas e responsáveis:

Instalar Vue.js [ Ana ] <br/>
Implementar menu lateral e visualização Kanban [ Rodolfo ] <br/>
Implementar conexão entre o Backend e Frontend para CRUD de tarefas [ Thiago ] <br/>

**História #3**

4 - Como usuário, eu gostaria de criar categorias para minhas tarefas <br/>
5 - Como usuário, eu gostaria de editar e deletar categorias <br/>

Tarefas e responsáveis:

Implementar no backend a lógica de criar, editar, listar e deletar categorias [Rodolfo] <br/>

**História #4**

6 - Como usuário, eu gostaria de adicionar colaboradores em minhas tarefas <br/>
7 - Como usuário, eu gostaria de remover colaboradores em minhas tarefas <br/>

Tarefas e responsáveis:

Implementar no backend a lógica de adicionar e remover colaboradores dentro de uma tarefa [Otávio] <br/>

**História #5**

8 - Como usuário, eu gostaria de exportar minhas tarefas para um arquivo no formato JSON <br/>

Tarefas e responsáveis: 

Definir formato exportação JSON [Rodolfo] <br/>
Implementar e testar exportação do arquivo JSON [Rodolfo] <br/>

**História #6**

9 - Como usuário, eu gostaria de importar minhas tarefas para o sistema, a partir de um arquivo no formato JSON <br/>

Tarefas e responsáveis: 

Definir formato de importação JSON [Otávio] <br/>
Implementar e testar importação do arquivo JSON [Otávio] <br/>

**História #7**

10 - Como usuário, eu gostaria de visualizar minhas tarefas agendadas em um calendário <br/>

Tarefas e responsáveis:

Criar calendário com dias da semana. As tarefas serão organizadas no calendário automaticamente, de acordo com o início do projeto e irão ocupar os dias necessários à execução de acordo com a previsão de término das demais tarefas. [Ana] <br/>
Implementar calendário e conectar com dados das tarefas [Ana] <br/>

**História #8**

11 - Como usuário, eu gostaria que, ao adicionar mais tempo a uma tarefa, todas as demais tarefas se ajustassem no calendário de acordo com a nova previsão de entrega. <br/> 

Tarefas e responsáveis:

Implementar Lógica de Conflitos de Horário [Rodolfo] <br/>
Criar Alertas [Rodolfo] <br/>
Integrar na Interface do Usuário [Thiago] <br/>

# Tecnologias

Node (Express), SQLite e Vue.js
