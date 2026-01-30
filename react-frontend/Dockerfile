# Step 1: Node image
FROM node:22

# Step 2: working directory
WORKDIR /app

# Step 3: copy package files
COPY package.json ./

# Step 4: install dependencies
RUN npm install

# Step 5: copy source code
COPY . .

# Step 6: expose port
EXPOSE 5173

# Step 7: start react app
CMD ["npm", "run", "dev", "--", "--host"]
