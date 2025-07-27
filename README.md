# Portfolio MouridDev – Cheikh Diallo

Ce projet est un portfolio personnel moderne, responsive et animé, réalisé en HTML, CSS et JavaScript pur.

## 🚀 Héberger sur GitHub Pages

Voici les étapes pour mettre ce portfolio en ligne gratuitement avec GitHub Pages :

### 1. Créer un dépôt GitHub
- Connecte-toi à [github.com](https://github.com/)
- Clique sur **New repository**
- Donne-lui un nom (ex : `portfolio`)
- Clique sur **Create repository**

### 2. Ajouter les fichiers du portfolio
- Clone le dépôt sur ton ordinateur :
  ```bash
  git clone https://github.com/<ton-utilisateur>/<ton-depot>.git
  ```
- Copie tous les fichiers de ce projet dans le dossier du dépôt (index.html, style.css, script.js, assets, etc.)
- Ajoute, commit et pousse :
  ```bash
  git add .
  git commit -m "Ajout du portfolio"
  git push origin main
  ```

### 3. Activer GitHub Pages
- Va dans les **Settings** du dépôt sur GitHub
- Clique sur l’onglet **Pages** (ou "Pages" dans le menu latéral)
- Dans la section **Build and deployment** :
  - Source : choisis **Deploy from a branch**
  - Branch : choisis `main` et `/ (root)`
- Clique sur **Save**

### 4. Accéder à ton site
- Après quelques secondes, ton site sera disponible à l’adresse :
  
  `https://<ton-utilisateur>.github.io/<ton-depot>/`

### 5. Conseils
- Pour que la page d’accueil s’affiche, le fichier doit s’appeler **index.html** et être à la racine du projet.
- Pour les images et assets, utilise des chemins relatifs (ex : `assets/monimage.png`).
- Si tu fais des modifications, n’oublie pas de refaire `git add .`, `git commit` et `git push`.

---

**Besoin d’aide ?**
- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Aide Markdown](https://www.markdownguide.org/)

---

© 2024 Cheikh Diallo – MouridDev 