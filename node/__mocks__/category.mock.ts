/**
 * Similación de datos que se obtendran del archivo alojado en
 * https://exito.vteximg.com.br/arquivos/nav.json.xml.
 * Dicho archivo contiene el árbol de navegación del sitio.
 */
export const baseMockCategories = [
  { id: '0', name: 'Mercado', href: '/mercado/', slug: 'mercado', parent: null },
  {
    id: '1',
    name: 'Pollo, Carnes y Pescado',
    href: '/mercado/pollo-carne-y-pescado/',
    slug: 'pollo-carne-y-pescado',
    parent: '0',
  },
  { id: '2', name: 'Pollo', href: '/mercado/pollo-carne-y-pescado/pollo/', slug: 'pollo', parent: '1' },
  { id: '3', name: 'Res', href: '/mercado/pollo-carne-y-pescado/res/', slug: 'res', parent: '1' },
  { id: '4', name: 'Cerdo', href: '/mercado/pollo-carne-y-pescado/cerdo/', slug: 'cerdo', parent: '1' },
];

/**
 * Respuesta plana (fomato: text/plain) del archivo que define el árbol de navegación del sitio.
 */
export const mockCategoriesResponse = JSON.stringify({ categories: baseMockCategories });

/**
 * Respuesta formateada para la consulta `categories`.
 */
export const mockCategories = baseMockCategories;
