# TicketPlace MVP

Ce projet est une version basique de [ticket place](https://ticketplace.io), développée avec les technologies suivantes :

- **Next.js 15**
- **React 19**
- **PostgreSQL**
- **NextAuth** (Authentification)
- **ShadCN UI** (UI Components)
- **Prisma** (ORM)

## 🚀 Installation

### Prérequis
Assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version compatible avec Next.js 15)
- [PostgreSQL](https://www.postgresql.org/)

### Configuration

1. **Cloner le projet :**
   ```sh
   git clone https://github.com/Tiavina-Andriamamivony/Ticket-place-mvp.git
   cd Ticket-place-mvp
   ```

2. **Installer les dépendances :**
   ```sh
   npm install
   ```

3. **Configurer les variables d'environnement :**
   - Dupliquez le fichier `.env.example` et renommez-le en `.env`
   - Remplissez les informations nécessaires, notamment celles pour PostgreSQL et NextAuth



4. **Générer le schéma de la base avec Prisma :**
   ```sh
   npx prisma migrate dev --name init
   ```

5. **Démarrer le serveur Next.js :**
   ```sh
   npm run dev
   ```

## 🛠️ Fonctionnalités
- Authentification avec **NextAuth**
- Gestion des utilisateurs et des événements avec **Prisma** & **PostgreSQL**
- UI moderne avec **ShadCN UI**
- API REST/GraphQL pour la gestion des tickets (à venir)

## 📜 Licence
Ce projet est sous licence MIT.

## 📩 Contact
Si vous avez des questions ou souhaitez contribuer, contactez-moi à [votre.email@example.com](mailto:votre.email@example.com).
