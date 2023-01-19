FROM node:16
# Create app directory

# Install dependencies
RUN npm install pm2 -g

# Copy source code
COPY ./bin/api-backend-linux /app/backend
COPY ./.env /app/.env

# Change working directory
WORKDIR /app

RUN ls -l

# Expose API port to the outside
EXPOSE 3000

RUN chmod +x api-backend

# Launch application
CMD [ "pm2-runtime", "start", "api-backend", "--", "--search" ]