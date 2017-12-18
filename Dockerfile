# Set Node Version
FROM node:9.3.0

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

# Build this bitch.
RUN npx poi build

# Install Serve
RUN npm install -g serve

# Run serve when the image is run.
CMD serve --port=4000 -s dist

# Let Docker know about the port that serve runs on.
EXPOSE 4000
