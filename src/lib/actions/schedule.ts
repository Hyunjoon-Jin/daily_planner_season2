'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function getTimeBlocks() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('time_blocks')
        .select('*')
        .order('start_time', { ascending: true });

    if (error) throw new Error(error.message);
    return data;
}

export async function createTimeBlock(formData: any) {
    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) throw new Error('Unauthorized');

    const { data, error } = await supabase
        .from('time_blocks')
        .insert([
            {
                user_id: session.user.id,
                title: formData.title,
                description: formData.description,
                start_time: formData.start_time,
                end_time: formData.end_time,
                category_id: formData.category_id,
                metadata: formData.metadata || {},
            },
        ])
        .select();

    if (error) throw new Error(error.message);

    revalidatePath('/dashboard');
    return data[0];
}

export async function updateTimeBlock(id: string, formData: any) {
    const supabase = await createClient();
    const { error } = await supabase
        .from('time_blocks')
        .update({
            title: formData.title,
            description: formData.description,
            start_time: formData.start_time,
            end_time: formData.end_time,
            category_id: formData.category_id,
            metadata: formData.metadata,
        })
        .eq('id', id);

    if (error) throw new Error(error.message);

    revalidatePath('/dashboard');
}

export async function deleteTimeBlock(id: string) {
    const supabase = await createClient();
    const { error } = await supabase
        .from('time_blocks')
        .delete()
        .eq('id', id);

    if (error) throw new Error(error.message);

    revalidatePath('/dashboard');
}
