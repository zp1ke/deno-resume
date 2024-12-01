# https://hub.docker.com/r/denoland/deno/tags
FROM denoland/deno:bin-2.1.2 AS deno
# https://mcr.microsoft.com/en-us/artifact/mar/devcontainers/typescript-node/tags
FROM mcr.microsoft.com/devcontainers/typescript-node:dev-22

COPY --from=deno /deno /usr/local/bin/deno
