import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaDocker,
  FaArrowLeft,
  FaCheck,
  FaCopy,
  FaServer,
  FaDatabase,
  FaTerminal,
  FaLayerGroup,
  FaLightbulb,
  FaExclamationTriangle,
  FaBookOpen,
} from "react-icons/fa";
import { HiOutlineClock, HiOutlineCalendar } from "react-icons/hi2";

export default function DockerGuide() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const dockerignoreSnippet = `node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.gitignore
.env
.env.local
dist
coverage`;

  const dockerfileSnippet = `# Stage 1: Base Alpine Environment
FROM node:20-alpine AS base
WORKDIR /usr/src/app

# Stage 2: Install Dependencies (Cached Layer)
FROM base AS dependencies
WORKDIR /usr/src/app
COPY package*.json ./
# npm ci ensures clean, deterministic, reproducible installs
RUN npm ci --only=production

# Stage 3: Final Production Runner Image
FROM node:20-alpine AS runner
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=5000

# Security: Never run containers as root in production!
USER node

# Copy node_modules from dependencies stage with correct ownership
COPY --chown=node:node --from=dependencies /usr/src/app/node_modules ./node_modules
# Copy application source code
COPY --chown=node:node . .

EXPOSE 5000

# Use array syntax so node receives OS process signals (SIGTERM/SIGINT) directly
CMD ["node", "src/server.js"]`;

  const dockerComposeSnippet = `version: '3.8'

services:
  # 1. Backend Node.js API Service
  api:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: my_backend_api
    restart: unless-stopped
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - PORT=5000
      - DATABASE_URL=postgresql://app_user:secret_password@postgres_db:5432/production_db?schema=public
    # Wait for PostgreSQL to be completely healthy before booting the API
    depends_on:
      postgres_db:
        condition: service_healthy
    networks:
      - backend_network

  # 2. PostgreSQL 16 Database Service
  postgres_db:
    image: postgres:16-alpine
    container_name: postgres_db
    restart: unless-stopped
    environment:
      POSTGRES_USER: app_user
      POSTGRES_PASSWORD: secret_password
      POSTGRES_DB: production_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app_user -d production_db"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - backend_network

volumes:
  postgres_data:
    driver: local

networks:
  backend_network:
    driver: bridge`;

  const prismaMigrationSnippet = `# Run migrations inside the active API container:
docker compose exec api npx prisma migrate deploy

# Generate Prisma Client:
docker compose exec api npx prisma generate`;

  const quickCommands = [
    {
      command: "docker compose up -d --build",
      description: "Builds images from source and starts all containers in the background (detached mode).",
    },
    {
      command: "docker compose logs -f api",
      description: "Follows real-time streaming application logs with auto-scroll.",
    },
    {
      command: "docker compose ps",
      description: "Lists all running project containers, their ports, and their health statuses.",
    },
    {
      command: "docker compose exec api sh",
      description: "Opens an interactive shell terminal directly inside the running Node.js container.",
    },
    {
      command: "docker compose down",
      description: "Safely stops and removes containers and internal virtual networks.",
    },
    {
      command: "docker system prune -a --volumes",
      description: "Reclaims disk space by purging unused containers, dangling images, and anonymous volumes.",
    },
  ];

  return (
    <article className="px-6 py-12 sm:px-12 lg:px-16 max-w-5xl mx-auto">
      {/* Top Back Navigation */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-zinc-800 light:border-zinc-200 bg-zinc-900/60 light:bg-zinc-100 text-zinc-300 light:text-zinc-700 hover:text-teal-400 light:hover:text-teal-600 hover:border-teal-500/50 transition-all shadow-sm"
        >
          <FaArrowLeft className="text-xs" />
          <span>Back to Home</span>
        </Link>
        <span className="text-xs text-zinc-500 font-mono">DevOps Series #01</span>
      </div>

      {/* Article Header */}
      <header className="mb-14 pb-8 border-b border-zinc-800/60 light:border-zinc-200/80">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 light:bg-sky-50 text-sky-400 light:text-sky-700 border border-sky-500/30 light:border-sky-200">
            <FaDocker className="text-sm" />
            Complete Educational Guide
          </span>
          <span className="flex items-center gap-1.5 text-xs text-zinc-400 light:text-zinc-500 font-medium">
            <HiOutlineCalendar className="text-sm" />
            Updated 2025
          </span>
          <span className="flex items-center gap-1.5 text-xs text-zinc-400 light:text-zinc-500 font-medium">
            <HiOutlineClock className="text-sm" />
            10 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight leading-tight">
          The Definitive Guide to Dockerizing Node.js & PostgreSQL Backend Architectures
        </h1>

        <p className="mt-4 text-base sm:text-lg text-zinc-300 light:text-zinc-600 leading-relaxed max-w-3xl">
          Learn how to containerize modern backend services from scratch. From writing lightweight multi-stage Dockerfiles and configuring resilient Docker Compose stacks, to handling database migrations and production security hardening.
        </p>

        {/* Author Bio Banner */}
        <div className="flex items-center gap-3.5 mt-8 p-4 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/40 light:bg-zinc-50">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 text-white font-bold text-sm shadow-md">
            AO
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-100 light:text-zinc-900">Ahmed Osama</div>
            <div className="text-xs text-zinc-400 light:text-zinc-500">Backend Engineer & Systems Architect • CS @ Zagazig University</div>
          </div>
        </div>
      </header>

      {/* Table of Contents Box */}
      <nav className="mb-14 p-6 sm:p-7 rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/60 light:bg-zinc-50 shadow-md">
        <div className="flex items-center gap-2 text-sm font-bold text-teal-400 light:text-teal-700 uppercase tracking-wider mb-4">
          <FaBookOpen />
          <span>Table of Contents</span>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-zinc-300 light:text-zinc-700 font-medium">
          <li><a href="#why-docker" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">1. Why Docker Matters for Backend Engineers</a></li>
          <li><a href="#core-concepts" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">2. Core Concepts: Images vs Containers vs Volumes</a></li>
          <li><a href="#dockerignore" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">3. Step 1: Crafting the .dockerignore file</a></li>
          <li><a href="#dockerfile" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">4. Step 2: Multi-Stage Production Dockerfile</a></li>
          <li><a href="#docker-compose" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">5. Step 3: Orchestrating with docker-compose.yml</a></li>
          <li><a href="#migrations" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">6. Step 4: Database Migrations with Prisma</a></li>
          <li><a href="#commands" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">7. Step 5: Essential CLI Commands Cheat Sheet</a></li>
          <li><a href="#best-practices" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">8. Step 6: Production Security Checklist</a></li>
        </ol>
      </nav>

      {/* Main Educational Content */}
      <div className="space-y-16 text-zinc-300 light:text-zinc-700 leading-relaxed text-sm sm:text-base">

        {/* 1. Why Docker */}
        <section id="why-docker" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-sm font-bold">1</span>
            <span>Why Docker Matters for Backend Engineers</span>
          </h2>
          <p>
            Every software engineer has encountered the infamous phrase: <em className="text-zinc-100 light:text-zinc-900 font-semibold">&ldquo;It works on my machine!&rdquo;</em>. A backend project might run smoothly on your local machine with Node v20 and local PostgreSQL, but fails catastrophically when deployed to an Ubuntu server with Node v18 or missing environment libraries.
          </p>
          <p>
            <strong>Docker solves this permanently</strong> by packaging your application code, runtime, system dependencies, libraries, and configurations into a standardized, self-contained unit known as an <strong>Image</strong>.
          </p>

          <div className="p-4 rounded-2xl border border-teal-500/30 bg-teal-500/10 light:bg-teal-50 flex items-start gap-3 mt-4">
            <FaLightbulb className="text-teal-400 light:text-teal-600 text-lg shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-zinc-200 light:text-zinc-800">
              <strong>Core Benefit:</strong> A Docker container guarantees 100% parity between local development, staging servers, and live production Kubernetes/VPS clusters.
            </div>
          </div>
        </section>

        {/* 2. Core Concepts */}
        <section id="core-concepts" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-sm font-bold">2</span>
            <span>Core Concepts Explained</span>
          </h2>
          <p>Before diving into syntax, let&apos;s clarify the 4 fundamental building blocks:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-white shadow-sm">
              <div className="flex items-center gap-2 text-teal-400 light:text-teal-600 font-bold text-sm mb-2">
                <FaLayerGroup />
                <span>Docker Image</span>
              </div>
              <p className="text-xs text-zinc-400 light:text-zinc-600">
                An immutable, read-only template built from instructions in a Dockerfile. Think of an Image as the compiled blueprint of your application.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-white shadow-sm">
              <div className="flex items-center gap-2 text-sky-400 light:text-sky-600 font-bold text-sm mb-2">
                <FaServer />
                <span>Docker Container</span>
              </div>
              <p className="text-xs text-zinc-400 light:text-zinc-600">
                A live, running instance of an Image. It operates in an isolated sandbox with its own virtual filesystem, network interfaces, and environment variables.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-white shadow-sm">
              <div className="flex items-center gap-2 text-amber-400 light:text-amber-600 font-bold text-sm mb-2">
                <FaDatabase />
                <span>Docker Volumes</span>
              </div>
              <p className="text-xs text-zinc-400 light:text-zinc-600">
                Containers are stateless by default (data is destroyed when container stops). Volumes provide persistent storage outside the container lifecycle (crucial for databases).
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-white shadow-sm">
              <div className="flex items-center gap-2 text-indigo-400 light:text-indigo-600 font-bold text-sm mb-2">
                <FaTerminal />
                <span>Docker Network</span>
              </div>
              <p className="text-xs text-zinc-400 light:text-zinc-600">
                An internal software bridge allowing containers to discover and securely communicate with each other by service name (e.g. <code className="text-teal-400">api</code> talks to <code className="text-teal-400">postgres_db</code>).
              </p>
            </div>
          </div>
        </section>

        {/* 3. Step 1: .dockerignore */}
        <section id="dockerignore" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-sm font-bold">3</span>
            <span>Step 1: Crafting the .dockerignore file</span>
          </h2>
          <p>
            Just like <code className="text-teal-400 font-mono text-xs">.gitignore</code>, a <code className="text-teal-400 font-mono text-xs">.dockerignore</code> file prevents massive unnecessary files from polluting your build context, keeping your build times lightning-fast and preventing secret credentials (<code className="text-rose-400 font-mono text-xs">.env</code>) from leaking into images.
          </p>

          <div className="rounded-2xl border border-zinc-800 light:border-zinc-200 bg-zinc-950 p-4 font-mono text-xs text-zinc-300 overflow-x-auto relative shadow-inner">
            <div className="flex justify-between items-center pb-2 mb-2 border-b border-zinc-800 text-[11px] text-zinc-500">
              <span>.dockerignore</span>
              <button
                type="button"
                onClick={() => handleCopy(dockerignoreSnippet, "ignore")}
                className="hover:text-teal-400 flex items-center gap-1 transition-colors"
              >
                {copiedId === "ignore" ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                <span>{copiedId === "ignore" ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <pre><code>{dockerignoreSnippet}</code></pre>
          </div>
        </section>

        {/* 4. Step 2: Dockerfile */}
        <section id="dockerfile" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-sm font-bold">4</span>
            <span>Step 2: Multi-Stage Production Dockerfile</span>
          </h2>
          <p>
            Standard amateur Dockerfiles often result in <strong>1GB+</strong> image sizes and run with root privileges. Here is a production-hardened <strong>Multi-Stage Dockerfile</strong> optimized for performance, layer caching, and security:
          </p>

          <div className="rounded-2xl border border-zinc-800 light:border-zinc-200 bg-zinc-950 p-5 font-mono text-xs text-zinc-300 overflow-x-auto relative shadow-xl">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-zinc-800 text-[11px] text-zinc-500">
              <span className="font-semibold text-teal-400">Dockerfile</span>
              <button
                type="button"
                onClick={() => handleCopy(dockerfileSnippet, "dockerfile")}
                className="hover:text-teal-400 flex items-center gap-1 transition-colors"
              >
                {copiedId === "dockerfile" ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                <span>{copiedId === "dockerfile" ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <pre><code>{dockerfileSnippet}</code></pre>
          </div>

          <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-zinc-50 space-y-2 mt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 light:text-teal-700">Detailed Instruction Breakdown:</h4>
            <ul className="space-y-1.5 text-xs text-zinc-300 light:text-zinc-700">
              <li>• <code className="font-mono text-teal-400">node:20-alpine</code>: Uses a minimal Alpine Linux distribution (~50MB instead of ~1GB Debian).</li>
              <li>• <code className="font-mono text-teal-400">npm ci --only=production</code>: Installs exact package versions from package-lock.json without devDependencies.</li>
              <li>• <code className="font-mono text-teal-400">USER node</code>: Changes execution privilege from root to the unprivileged <code className="font-mono">node</code> user.</li>
              <li>• <code className="font-mono text-teal-400">COPY --chown=node:node</code>: Ensures copied files are owned by the non-root user so Node can read/write without permission conflicts.</li>
            </ul>
          </div>
        </section>

        {/* 5. Step 3: Docker Compose */}
        <section id="docker-compose" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-sm font-bold">5</span>
            <span>Step 3: Orchestrating with docker-compose.yml</span>
          </h2>
          <p>
            In a real application, your backend requires a database. Running commands like <code className="font-mono text-xs text-teal-400">docker run ...</code> manually each time is cumbersome and error-prone. <strong>Docker Compose</strong> lets you declare and boot your entire multi-container architecture in one single declarative file.
          </p>

          <div className="rounded-2xl border border-zinc-800 light:border-zinc-200 bg-zinc-950 p-5 font-mono text-xs text-zinc-300 overflow-x-auto relative shadow-xl">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-zinc-800 text-[11px] text-zinc-500">
              <span className="font-semibold text-sky-400">docker-compose.yml</span>
              <button
                type="button"
                onClick={() => handleCopy(dockerComposeSnippet, "compose")}
                className="hover:text-teal-400 flex items-center gap-1 transition-colors"
              >
                {copiedId === "compose" ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                <span>{copiedId === "compose" ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <pre><code>{dockerComposeSnippet}</code></pre>
          </div>

          <div className="p-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 light:bg-amber-50 flex items-start gap-3 mt-4">
            <FaExclamationTriangle className="text-amber-400 light:text-amber-600 text-base shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-zinc-200 light:text-zinc-800">
              <strong>The Startup Race Condition:</strong> Notice <code className="font-mono text-teal-400">condition: service_healthy</code>. By default, <code className="font-mono text-teal-400">depends_on</code> only waits for the database container to <em>start</em>, not for PostgreSQL to finish loading its internal engine. Adding an explicit <code className="font-mono text-teal-400">healthcheck</code> prevents your Node.js API from crashing on boot!
            </div>
          </div>
        </section>

        {/* 6. Step 4: Migrations */}
        <section id="migrations" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-sm font-bold">6</span>
            <span>Step 4: Database Migrations with Prisma in Docker</span>
          </h2>
          <p>
            When using ORMs like <strong>Prisma</strong> or <strong>TypeORM</strong> with PostgreSQL, how do you apply migrations to the containerized database? You execute the migration command directly inside the container without needing local PostgreSQL CLI installed on your host machine:
          </p>

          <div className="rounded-2xl border border-zinc-800 light:border-zinc-200 bg-zinc-950 p-4 font-mono text-xs text-zinc-300 overflow-x-auto relative shadow-inner">
            <div className="flex justify-between items-center pb-2 mb-2 border-b border-zinc-800 text-[11px] text-zinc-500">
              <span>Terminal</span>
              <button
                type="button"
                onClick={() => handleCopy(prismaMigrationSnippet, "prisma")}
                className="hover:text-teal-400 flex items-center gap-1 transition-colors"
              >
                {copiedId === "prisma" ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                <span>{copiedId === "prisma" ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <pre><code>{prismaMigrationSnippet}</code></pre>
          </div>
        </section>

        {/* 7. Step 5: Essential Commands */}
        <section id="commands" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-sm font-bold">7</span>
            <span>Step 5: Essential CLI Commands Cheat Sheet</span>
          </h2>
          <p>The daily commands you will use 99% of the time as a backend engineer:</p>

          <div className="space-y-3 pt-2">
            {quickCommands.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/40 light:bg-zinc-50"
              >
                <code className="text-xs font-mono font-bold text-teal-400 light:text-teal-700 bg-zinc-950 light:bg-zinc-100 px-2.5 py-1 rounded-lg border border-zinc-800 light:border-zinc-200">
                  {item.command}
                </code>
                <span className="text-xs text-zinc-400 light:text-zinc-600 sm:max-w-md">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Best Practices */}
        <section id="best-practices" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 text-sm font-bold">8</span>
            <span>Step 6: Production Security & Optimization Checklist</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-white flex items-start gap-3">
              <FaCheck className="text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-zinc-100 light:text-zinc-900">Pin Explicit Image Versions</h4>
                <p className="text-xs text-zinc-400 light:text-zinc-600 mt-1">Never use <code className="text-teal-400">node:latest</code>. Always specify exact tags like <code className="text-teal-400">node:20-alpine</code> to prevent surprise breaking changes.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-white flex items-start gap-3">
              <FaCheck className="text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-zinc-100 light:text-zinc-900">Leverage Docker Layer Caching</h4>
                <p className="text-xs text-zinc-400 light:text-zinc-600 mt-1">Copy <code className="text-teal-400">package.json</code> and run <code className="text-teal-400">npm ci</code> <em>before</em> copying the rest of your app code so dependencies aren&apos;t reinstalled on every code edit.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-white flex items-start gap-3">
              <FaCheck className="text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-zinc-100 light:text-zinc-900">Least Privilege (No Root)</h4>
                <p className="text-xs text-zinc-400 light:text-zinc-600 mt-1">Always run containers as a dedicated service account like <code className="text-teal-400">USER node</code> to prevent container breakout exploits.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-white flex items-start gap-3">
              <FaCheck className="text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-zinc-100 light:text-zinc-900">Graceful Shutdown Handling</h4>
                <p className="text-xs text-zinc-400 light:text-zinc-600 mt-1">Listen for <code className="text-teal-400">SIGTERM</code> and <code className="text-teal-400">SIGINT</code> in your Express server so active HTTP connections close gracefully before the container terminates.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
