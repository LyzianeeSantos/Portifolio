"use client";

import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProfileValues } from "@/schemas/forms";
import { useProfileForm } from "@/features/admin/hooks/use-profile-form";
import { ProfileBasicFields } from "@/features/admin/components/profile/profile-basic-fields";
import { ProfileEducationFields } from "@/features/admin/components/profile/profile-education-fields";
import { ProfileMediaFields } from "@/features/admin/components/profile/profile-media-fields";
import { ProfileSkillGroupsFields } from "@/features/admin/components/profile/profile-skill-groups-fields";
import { ProfileSocialLinksFields } from "@/features/admin/components/profile/profile-social-links-fields";

interface ProfileFormProps {
  defaultValues: ProfileValues;
}

export function ProfileForm({ defaultValues }: ProfileFormProps) {
  const { form, onSubmit } = useProfileForm(defaultValues);

  return (
    <form className="grid gap-6" onSubmit={onSubmit}>
      <div className="grid gap-6 xl:grid-cols-2">
        <ProfileBasicFields form={form} />
        <ProfileMediaFields form={form} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <ProfileSkillGroupsFields form={form} />
        <ProfileEducationFields form={form} />
        <ProfileSocialLinksFields form={form} />
      </div>

      <div className="flex justify-end">
        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          <Save className="h-4 w-4" />
          {form.formState.isSubmitting ? "Salvando..." : "Salvar alteracoes"}
        </Button>
      </div>
    </form>
  );
}
