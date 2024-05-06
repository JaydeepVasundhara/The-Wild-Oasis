import supabase, { supabaseUrl } from "./supabase";

export async function getcabins() {
    const { data, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.log(error);

        throw new Error("cabins could not be loaded!");
    }

    return data;
}

export async function createEditCabin(newCabin, id) {

    console.log(newCabin.image?.name, newCabin.image);

    const hasImaghePath = newCabin.image?.startsWith?.(supabaseUrl)

    const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll("/", "");

    const imagePath = hasImaghePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    let query = supabase.from("cabins")

    if (!id) query = query.insert([{ ...newCabin, image: imagePath }])
    if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id)


    const { data, error } = await query.select().single();

    if (error) {
        console.log(error);

        throw new Error("cabins could not be created")
    }

    if (hasImaghePath) return data

    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);

        throw new Error("cabin image not be uploaded and cabin was not created!");

    }

    return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) {
        console.log(error);
        throw new Error("cabins could not be deleted");
    }

    return data;
}
