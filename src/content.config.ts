import { defineCollection, z } from 'astro:content';

const contentSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  type: z.enum(['policy', 'standard', 'tool', 'communication', 'news']),
  status: z.enum(['active', 'published', 'draft', 'deprecated', 'beta']).default('published'),
  date: z.coerce.date().optional(),
  author: z.string().optional(),
  tags: z.array(z.string()).default([]),
  version: z.string().optional(),
  richDocument: z.boolean().optional(),
  effectiveDate: z.coerce.date().optional(),
  lastReviewed: z.coerce.date().optional(),
  nextReviewDate: z.coerce.date().optional(),
  owner: z.string().optional(),
});

const politicas = defineCollection({ type: 'content', schema: contentSchema });
const padroes = defineCollection({ type: 'content', schema: contentSchema });
const ferramentas = defineCollection({ type: 'content', schema: contentSchema });
const comunicacoes = defineCollection({ type: 'content', schema: contentSchema });
const noticias = defineCollection({ type: 'content', schema: contentSchema });

export const collections = { politicas, padroes, ferramentas, comunicacoes, noticias };
