FROM my-app:latest AS front-end
WORKDIR /usr/src/app/my-app
RUN npm run build

FROM api:latest AS back-end
WORKDIR /usr/src/app/api

COPY --from=front-end /usr/src/app/my-app/dist ../my-app/dist/

EXPOSE 3080

CMD ["npm", "run", "dev"]