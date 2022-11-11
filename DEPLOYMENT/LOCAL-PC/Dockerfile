FROM example-application1-vue:latest AS example-application1-vue
WORKDIR /usr/src/app/example-application1-vue

ENV VUE_APP_AAA='DEV FRONT..##..'

RUN npm run build



FROM example-application1-api:latest AS example-application1-api
WORKDIR /usr/src/app/example-application1-api

COPY --from=example-application1-vue /usr/src/app/example-application1-vue/dist ../example-application1-vue/dist/

ENV XXX='DEV BACK..##..'

# RUN npm run build

EXPOSE 3080

# CMD ["npm", "run", "start"]
CMD ["npm", "run", "dev"]
