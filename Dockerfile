FROM node:22

WORKDIR /app

COPY app.js /app/app.js

EXPOSE 3001

CMD ["node", "app.js"]
