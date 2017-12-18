# Set Node Version
FROM node:9.3.0

ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
RUN npm install -g serve
CMD serve -s build
EXPOSE 4000

# Install all dependencies of the current project.
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

# Build this bitch.
RUN npx poi build
