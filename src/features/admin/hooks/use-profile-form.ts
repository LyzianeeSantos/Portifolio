"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/sonner";
import { profileSchema, type ProfileValues } from "@/schemas/forms";
import { updateProfile } from "@/features/admin/services/admin-api";

export function useProfileForm(defaultValues: ProfileValues) {
  const form = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await updateProfile(values);
      toast.success("Perfil atualizado.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao salvar perfil.");
    }
  });

  return {
    form,
    onSubmit,
  };
}
