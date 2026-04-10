import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      product,
      profiles,
      subProduct,
      seniorities,
      languages,
      languageLevels,
      quantities,
      additionalInfo,
      contact
    } = body;

    const nombre = contact?.fullName || '';
    const email = contact?.email || '';
    const telefono = contact?.phone || '';
    const pais = contact?.country || '';

    const task_title = `autoscraping.com - ${nombre}`;

    // Nombres legibles
    const productName = product === 'datasquad' ? 'Data Squad' : 'Data Factory';
    let dataFactoryOption = '';
    if (subProduct === 'automation') dataFactoryOption = 'Automation';
    else if (subProduct === 'daas') dataFactoryOption = 'Data as a Service';
    else if (subProduct === 'datadock') dataFactoryOption = 'DataDock';

    // Generar bloque de cantidades
    let quantitiesStr = '';
    if (quantities && typeof quantities === 'object') {
      for (const [key, val] of Object.entries(quantities)) {
         // Formatear la clave (e.g., 'semi-senior' a 'Semi Senior')
         const niceKey = key.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
         quantitiesStr += `   . ${niceKey}: ${val}\n`;
      }
    }

    const task_notes = `INFORMACIÓN DEL LEAD

Product: ${productName}

DATA SQUAD
- Perfiles: ${profiles?.join(', ') || '-'}
- Seniority: ${seniorities?.join(', ') || '-'}
- Lenguaje: ${languages?.join(', ') || '-'}
- Lenguaje Nivel: ${languageLevels?.join(', ') || '-'}
- Cantidad:
${quantitiesStr || '   -'}

DATA FACTORY
- Data Factory: ${dataFactoryOption || '-'}

COMENTARIO
${additionalInfo || '-'}

DATOS PERSONALES
- Nombre:    ${nombre}
- Email:     ${email}
- Teléfono:  ${telefono}
- País:      ${pais}
`;

    let unidad_negocio = '';
    if (product === 'datasquad') {
      unidad_negocio = '1208364976463842';
    } else if (product === 'datafactory') {
      unidad_negocio = '1211496805710206';
    }

    const projectId = process.env.ASANA_PROJECT_ID || '1207932529612201';
    const asanaToken = process.env.ASANA_TOKEN;

    if (!asanaToken) {
      return NextResponse.json({ error: 'ASANA_TOKEN not configured' }, { status: 500 });
    }

    const data = {
      data: {
        name: task_title,
        notes: task_notes,
        projects: [projectId],
        assignee: '1200406301286304',
        custom_fields: {
          '1207924907815057': '1211497116209656', // Fuente: web
          '1208364656285594': unidad_negocio, // Unidad de negocio
          '1211494644261322': '1211494644261324', // Entrevistado: No
          '1211494644908422': '1211494644908426', // Medio: organico
          '1211494644908452': nombre,
          '1211494644908454': email,
          '1211494644908456': telefono,
        },
      },
    };

    const response = await fetch('https://app.asana.com/api/1.0/tasks', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${asanaToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const asanaData = await response.json();

    if (!response.ok) {
      console.error('Error al enviar a Asana:', asanaData);
      return NextResponse.json({ error: 'Error submitting to Asana' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: asanaData });
  } catch (error) {
    console.error('Error en API route de Asana:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
 