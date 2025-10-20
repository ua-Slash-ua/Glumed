import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const data = {
            title: body.title || 'Заявка з сайту Glumed',
            source_id: body.source_id,             // беремо те, що прийшло з фронтенду
            manager_comment: body.manager_comment || body.message || '',
            // manager_id: body.manager_id || undefined,
            // pipeline_id: body.pipeline_id || undefined,
            contact: {
                full_name: body.contact?.full_name || 'Не вказано',
                phone: body.contact?.phone || '',
                // email: body.contact?.email || '',      // якщо є email
            },
            utm_source: body.utm_source,
            utm_medium: body.utm_medium,
            utm_campaign: body.utm_campaign,
            utm_term: body.utm_term,
            utm_content: body.utm_content,

        };

        const res = await fetch('https://openapi.keycrm.app/v1/pipelines/cards', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.KEYCRM_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        const logPath = path.join(process.cwd(), 'logs', 'keycrm.log');
        fs.mkdirSync(path.dirname(logPath), { recursive: true });
        fs.appendFileSync(
            logPath,
            `[${new Date().toISOString()}] ${JSON.stringify(result)}\n`
        );

        return Response.json({ success: true, result });
    } catch (err) {
        const errorMsg =
            err instanceof Error ? err.message : JSON.stringify(err);

        const logPath = path.join(process.cwd(), 'logs', 'keycrm-error.log');
        fs.mkdirSync(path.dirname(logPath), { recursive: true });
        fs.appendFileSync(
            logPath,
            `[${new Date().toISOString()}] ${errorMsg}\n`
        );

        return Response.json({ success: false, error: errorMsg }, { status: 500 });
    }
}
