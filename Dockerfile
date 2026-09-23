# Lightweight Alpine node image serving static web app via serve
FROM node:20-alpine

WORKDIR /app

# Copy all static website assets
COPY . .

# Install light static file server
RUN npm install -g serve

EXPOSE 3000

# Serve static directory (index.html at root)
CMD ["serve", "-s", ".", "-l", "3000"]
