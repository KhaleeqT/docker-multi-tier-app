# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the backend dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app will run on
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
