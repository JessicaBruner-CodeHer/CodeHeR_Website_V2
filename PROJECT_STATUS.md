Project: CodeHeR Website V2
Stack: MERN

Structure
client/
  src/
    App.jsx
    services/
      api.js
      quoteService.js

server/
  src/
    app.js
    server.js
    controllers/
      quoteController.js
    routes/
      quoteRoutes.js
    models/
      Quote.js

Database
MongoDB local
database: codeher
collection: quotes

Working Features
- React frontend running on localhost:5173
- Express backend running on localhost:5000
- API health endpoint working
- Quote submission endpoint working
- React form successfully submits to backend
- Quotes saved to MongoDB
- Axios service layer configured
- Vite environment variable configured

Next Planned Steps
1. Clean up backend structure
2. Add validation middleware
3. Add logging
4. Prepare production build
5. Deploy to Hostinger VPS
6. Configure Nginx reverse proxy
7. Connect domain