#!/usr/bin/env bash
set -e

echo "🚀 Launching Docker Container for Shreyans Portfolio..."

# Ensure Docker daemon is accessible
if ! command -v docker &> /dev/null; then
    echo "❌ Error: Docker is not installed or not in PATH."
    exit 1
fi

# Build image and run container
IMAGE_NAME="shreyans-portfolio:latest"
CONTAINER_NAME="shreyans_portfolio_app"

echo "📦 Building Docker image ($IMAGE_NAME)..."
docker build -t "$IMAGE_NAME" .

echo "🧹 Cleaning up old containers if present..."
docker stop "$CONTAINER_NAME" 2>/dev/null || true
docker rm "$CONTAINER_NAME" 2>/dev/null || true

echo "⚡ Starting Docker container on http://localhost:8000 ..."
docker run -d \
  --name "$CONTAINER_NAME" \
  -p 8000:3000 \
  --restart unless-stopped \
  "$IMAGE_NAME"

echo ""
echo "✅ Application successfully launched!"
echo "🌐 Open browser: http://localhost:8000"
