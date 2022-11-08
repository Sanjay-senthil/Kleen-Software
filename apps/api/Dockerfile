FROM node:14.19.3-alpine3.16

# Create app directory
WORKDIR /app

# Bundle app source
COPY ./dist/apps/api .

# Set environment variables
ENV BASE_PATH assets

EXPOSE 3000
CMD ["node", "main.js"]
