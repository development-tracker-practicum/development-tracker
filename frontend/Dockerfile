FROM node:lts-alpine as dist
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
RUN cp -r dist result_build
# CMD ["npx", "-y", "http-server", "-p", "8000", "/app/build/"]