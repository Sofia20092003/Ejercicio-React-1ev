// Ediciones impresas en español usadas como referencia; no necesariamente coinciden con la portada.
export interface EdicionLibro {
  editorial: string
  ano: number
  paginas: number | null
  isbn: string
  fuente: string
}

export const edicionesLibros: Record<number, EdicionLibro> = {
  1: { editorial: 'Editorial Planeta', ano: 2023, paginas: 736, isbn: '9788408279990', fuente: 'https://www.planetadelibros.com/libro-alas-de-sangre-empireo-1/384147' },
  2: { editorial: 'Crossbooks', ano: 2022, paginas: 456, isbn: '9788408257103', fuente: 'https://www.planetadelibros.com/libro-una-corte-de-rosas-y-espinas/349402' },
  3: { editorial: 'Editorial Hidra', ano: 2018, paginas: 432, isbn: '9788417390617', fuente: 'https://www.casadellibro.com/libro-el-principe-cruel-saga-los-habitantes-del-aire-1/9788417390617/8526012' },
  4: { editorial: 'Puck', ano: 2021, paginas: 672, isbn: '9788417854317', fuente: 'https://www.casadellibro.com/libro-de-sangre-y-cenizas/9788417854317/12568791' },
  5: { editorial: 'Editorial Planeta', ano: 2022, paginas: 400, isbn: '9788408258360', fuente: 'https://www.planetadelibros.com/libro-romper-el-circulo-it-ends-with-us/350156' },
  6: { editorial: 'Contraluz Editorial', ano: 2022, paginas: 488, isbn: '9788418945182', fuente: 'https://www.contraluzeditorial.es/libro/contraluz/la-hipotesis-del-amor-ali-hazelwood-9788418945182/' },
  7: { editorial: 'Montena', ano: 2021, paginas: 496, isbn: '9788418483448', fuente: 'https://www.elcorteingles.es/la-tienda-en-casa/A40424881-antes-de-diciembre-edicion-revisada-por-la-autora-meses-a-tu-lado-1-tapa-blanda/' },
  8: { editorial: 'Crossbooks', ano: 2020, paginas: 288, isbn: '9788408224228', fuente: 'https://www.planetadelibros.com/libro-heartstopper-1-dos-chicos-juntos/310432?soporte=310432' },
  9: { editorial: 'Alfaguara', ano: 2012, paginas: 264, isbn: '9788420403540', fuente: 'https://www.casadellibro.com/libro-las-ventajas-de-ser-un-marginado/9788420403540/2026012' },
  10: { editorial: 'Montena', ano: 2022, paginas: 360, isbn: '9788419169181', fuente: 'https://www.casadellibro.com/libro-boulevard-libro-1/9788419169181/12733223' },
  11: { editorial: 'Editorial Hidra', ano: 2020, paginas: 524, isbn: '9788418359262', fuente: 'https://www.casadellibro.com/libro-la-novena-casa-alex-stern-1/9788418359262/11934031' },
  12: { editorial: 'Editorial Hidra', ano: 2016, paginas: 544, isbn: '9788416387588', fuente: 'https://www.casadellibro.com.co/libro-seis-de-cuervos/9788416387588/3097785' },
  13: { editorial: 'Ediciones B', ano: 2016, paginas: 672, isbn: '9788466658898', fuente: 'https://www.fnac.es/a1277484/Brandon-Sanderson-Nacidos-de-la-bruma-1-El-imperio-final' },
  14: { editorial: 'Editorial Planeta', ano: 2024, paginas: 896, isbn: '9788408284550', fuente: 'https://www.planetadelibros.com/libro-alas-de-hierro-empireo-2/390749' },
  15: { editorial: 'Crossbooks', ano: 2022, paginas: 592, isbn: '9788408257110', fuente: 'https://www.planetadelibros.com/libro-una-corte-de-niebla-y-furia/349408' },
  16: { editorial: 'Editorial Planeta', ano: 2024, paginas: 576, isbn: '9788408292470', fuente: 'https://www.casadellibro.com/libro-la-serpiente-y-las-alas-de-la-noche/9788408292470/16157745' },
  17: { editorial: 'Plaza & Janés', ano: 2011, paginas: 880, isbn: '9788401352348', fuente: 'https://www.casadellibro.com/libro-el-nombre-del-viento-tapa-dura-saga-cronica-del-asesino-de-rey-es-1/9788401352348/1943067' },
  18: { editorial: 'Roca Editorial', ano: 2019, paginas: 864, isbn: '9788417541538', fuente: 'https://www.casadellibro.com/libro-el-priorato-del-naranjo/9788417541538/9654129' },
  19: { editorial: 'Contraluz Editorial', ano: 2024, paginas: 480, isbn: '9788419822192', fuente: 'https://www.contraluzeditorial.es/libro/contraluz-bolsillo/la-teoria-del-amor-bolsillo-ali-hazelwood-9788419822192/' },
  20: { editorial: 'Editorial Planeta', ano: 2023, paginas: 400, isbn: '9788408275763', fuente: 'https://www.planetadelibros.com/libro-gente-que-conocemos-en-vacaciones/378425?soporte=397098' },
  21: { editorial: 'Editorial Planeta', ano: 2024, paginas: 592, isbn: '9788408283461', fuente: 'https://www.planetadelibros.com/libro-todos-los-lugares-que-mantuvimos-en-secreto/390037' },
  22: { editorial: 'Nube de Tinta', ano: 2018, paginas: 304, isbn: '9788416588435', fuente: 'https://www.penguinrandomhouse.com/books/592430/invisible--invisible-by-eloy-moreno/' },
  23: { editorial: 'Crossbooks', ano: 2022, paginas: 272, isbn: '9788408208532', fuente: 'https://www.planetadelibros.com/libro-el-verano-en-que-me-enamore/292438' },
  24: { editorial: 'B de Bolsillo', ano: 2023, paginas: 416, isbn: '9788413147963', fuente: 'https://www.elcorteingles.es/libros/A47477015-a-traves-de-mi-ventana-trilogia-hermano-tapa-blanda/' },
}
