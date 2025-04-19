// Simple logging utility for the application

export type LogLevel = "debug" | "info" | "warn" | "error";

interface LogOptions {
  context?: string;
  data?: any;
}

// Default log level is 'info' for production, 'debug' for development
const LOG_LEVEL =
  (process.env.NEXT_PUBLIC_LOG_LEVEL as LogLevel) ||
  (process.env.NODE_ENV === "production" ? "info" : "debug");

// Numerical values for log levels for comparison
const LOG_LEVEL_VALUES: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

// Check if current level should be logged
const shouldLog = (level: LogLevel): boolean => {
  return LOG_LEVEL_VALUES[level] >= LOG_LEVEL_VALUES[LOG_LEVEL];
};

// Format the log message
const formatLog = (
  level: LogLevel,
  message: string,
  options?: LogOptions
): string => {
  const timestamp = new Date().toISOString();
  const context = options?.context ? `[${options.context}]` : "";
  return `${timestamp} ${level.toUpperCase()} ${context} ${message}`;
};

// Primary logging function
export function log(
  level: LogLevel,
  message: string,
  options?: LogOptions
): void {
  if (!shouldLog(level)) return;

  const formattedMessage = formatLog(level, message, options);

  // Print to console based on level
  switch (level) {
    case "debug":
      console.debug(formattedMessage, options?.data || "");
      break;
    case "info":
      console.info(formattedMessage, options?.data || "");
      break;
    case "warn":
      console.warn(formattedMessage, options?.data || "");
      break;
    case "error":
      console.error(formattedMessage, options?.data || "");
      break;
  }
}

// Convenience methods
export const logger = {
  debug: (message: string, options?: LogOptions) =>
    log("debug", message, options),
  info: (message: string, options?: LogOptions) =>
    log("info", message, options),
  warn: (message: string, options?: LogOptions) =>
    log("warn", message, options),
  error: (message: string, options?: LogOptions) =>
    log("error", message, options),
};
