# Select a Node.js base image
FROM node:14

# Create an application directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the application directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy all application files to the application directory
COPY . .

# Define environment variables
ENV AUTHOR_NAME "Piotr Kowalczyk"

# Expose the port the server is running on
EXPOSE 8080

# Run the script after the container starts
CMD [ "node", "skrypt.js" ]
