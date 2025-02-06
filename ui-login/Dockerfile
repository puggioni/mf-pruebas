FROM node as builder

COPY . /app
WORKDIR /app
RUN npm install && npm run build

FROM node:alpine

COPY --from=builder /app/build /app/build
WORKDIR /app
RUN npm install -g serve
EXPOSE 3000
ENTRYPOINT ["serve", "-s", "build"]
