'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

// HEALTH ACTIONS
export async function createHealthLog(formData: any) {
    const supabase = createServerActionClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Unauthorized');

    const { data, error } = await supabase
        .from('health_logs')
        .insert([{
            user_id: session.user.id,
            log_type: formData.log_type,
            data: formData.data,
            time_block_id: formData.time_block_id,
        }])
        .select();

    if (error) throw new Error(error.message);
    revalidatePath('/dashboard/life/health');
    return data[0];
}

// WORK ACTIONS (Tasks)
export async function createWorkTask(formData: any) {
    const supabase = createServerActionClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Unauthorized');

    const { data, error } = await supabase
        .from('tasks')
        .insert([{
            user_id: session.user.id,
            project_id: formData.project_id,
            title: formData.title,
            priority: formData.priority || 'medium',
            status: formData.status || 'todo',
            estimated_time: formData.estimated_time,
            due_date: formData.due_date,
        }])
        .select();

    if (error) throw new Error(error.message);
    revalidatePath('/dashboard/work/projects');
    return data[0];
}

// KNOWLEDGE ACTIONS
export async function createKnowledgeEntry(formData: any) {
    const supabase = createServerActionClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error('Unauthorized');

    const { data, error } = await supabase
        .from('knowledge_archives')
        .insert([{
            user_id: session.user.id,
            title: formData.title,
            content: formData.content,
            archive_type: formData.archive_type,
            source_url: formData.source_url,
            ai_summary: formData.ai_summary,
            sentiment: formData.sentiment,
            tags: formData.tags,
        }])
        .select();

    if (error) throw new Error(error.message);
    revalidatePath('/dashboard/life/knowledge');
    return data[0];
}
