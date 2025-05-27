FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Ensure all dependencies (including dev) are installed
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
