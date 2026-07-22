import { notFound } from "next/navigation";

import services from "@/data/services";
import type { Service } from "@/types/service";

/**
 * Get all services
 */
export function getServices(): Service[] {
  return services;
}

/**
 * Get a service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/**
 * Get a service or return 404
 */
export function getServiceOrThrow(slug: string): Service {
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return service;
}

/**
 * Get all service slugs
 */
export function getServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

/**
 * Generate static params
 */
export function getServiceParams() {
  return services.map(({ slug }) => ({
    slug,
  }));
}

/**
 * Get related services
 */
export function getRelatedServices(currentSlug: string, limit = 3): Service[] {
  return services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, limit);
}

/**
 * Check if a slug exists
 */
export function serviceExists(slug: string): boolean {
  return services.some((service) => service.slug === slug);
}
