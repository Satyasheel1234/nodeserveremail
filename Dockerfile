# Use a Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the server.js file to the working directory
COPY server.js .

# Expose the desired port the server will listen on
EXPOSE 3000

# Start the server when the container starts
CMD [ "node", "server.js" ]