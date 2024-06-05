# Use Node.js as the base image
FROM node:18.15.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Install dependencies
RUN npm install

# Copy the app's source code to the container
COPY . .

# Install PM2 globally
RUN npm install pm2 -g

# Expose the port the app runs on
EXPOSE 3000

# Use PM2 as the command to start your app
CMD ["pm2-runtime", "main.js"]