# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Install an HTTP server to serve the build
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Run the app (serve from dist folder)
CMD ["serve", "-s", "dist", "-l", "3000"]
