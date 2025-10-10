FROM node:18-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM base AS production
WORKDIR /app

ENV NODE_ENV production 
ENV NEXT_SHARP_PATH "/app/node_modules/sharp"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=deps /app/public ./public

RUN mkdir .next && chown nextjs:nodejs .next

COPY --from=deps /app/next.config.ts ./
COPY --from=deps /app/.next/standalone ./.next/standalone
COPY --from=deps /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080

ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

CMD ["node", ".next/standalone/server.js"]
