// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonLdSchema = Record<string, any> | Record<string, any>[];

interface JsonLdProps {
  schema: JsonLdSchema;
}

/**
 * Renders one or more JSON-LD structured data blocks.
 * Works in both server and client components.
 */
export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
