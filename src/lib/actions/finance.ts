'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function getTransactions() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('asset_transactions')
        .select('*')
        .order('transaction_date', { ascending: false });

    if (error) throw new Error(error.message);
    return data;
}

export async function createTransaction(formData: any) {
    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) throw new Error('Unauthorized');

    const { data, error } = await supabase
        .from('asset_transactions')
        .insert([
            {
                user_id: session.user.id,
                title: formData.title,
                amount: formData.amount,
                transaction_type: formData.transaction_type,
                category: formData.category,
                transaction_date: formData.transaction_date || new Date().toISOString(),
                time_block_id: formData.time_block_id,
            },
        ])
        .select();

    if (error) throw new Error(error.message);

    revalidatePath('/dashboard/life/asset');
    return data[0];
}

export async function deleteTransaction(id: string) {
    const supabase = await createClient();
    const { error } = await supabase
        .from('asset_transactions')
        .delete()
        .eq('id', id);

    if (error) throw new Error(error.message);

    revalidatePath('/dashboard/life/asset');
}
