FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
# ✅ Use npm install (no lockfile needed)
RUN npm install --omit=dev
COPY . .
EXPOSE 3000
CMD ["npm", "start"]