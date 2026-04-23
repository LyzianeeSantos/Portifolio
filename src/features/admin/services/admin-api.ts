import type { ProfileValues, ProjectValues } from "@/schemas/forms";

async function parseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error("Nao foi possivel concluir a requisicao.");
  }

  return (await response.json()) as T;
}

export async function updateProfile(values: ProfileValues) {
  const response = await fetch("/api/admin/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  return parseResponse<{ ok: true }>(response);
}

export async function createProject(values: ProjectValues) {
  const response = await fetch("/api/admin/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  return parseResponse<ProjectValues>(response);
}

export async function updateProject(values: ProjectValues) {
  const response = await fetch(`/api/admin/projects/${values.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  return parseResponse<ProjectValues>(response);
}

export async function deleteProject(id: string) {
  const response = await fetch(`/api/admin/projects/${id}`, {
    method: "DELETE",
  });

  return parseResponse<{ ok: true }>(response);
}
