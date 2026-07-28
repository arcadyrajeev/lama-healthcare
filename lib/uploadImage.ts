type Bucket = "blog-covers" | "blog-content";

export async function uploadImage(file: File, bucket: Bucket): Promise<string> {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("bucket", bucket);

  const res = await fetch("/api/admin/upload", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message ?? "Upload failed.");
  }

  return data.url;
}
