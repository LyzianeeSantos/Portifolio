import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ReturnTypeUseProfileForm } from "@/features/admin/components/profile/profile-form.types";

interface ProfileSocialLinksFieldsProps {
  form: ReturnTypeUseProfileForm["form"];
}

export function ProfileSocialLinksFields({ form }: ProfileSocialLinksFieldsProps) {
  const socialLinks = form.watch("socialLinks");

  return (
    <Card>
      <CardContent className="grid gap-4 p-6">
        <Label>Redes sociais</Label>
        {socialLinks.map((social, index) => (
          <div
            key={`${social.platform}-${index}`}
            className="rounded-[1.5rem] border border-white/10 p-4"
          >
            <Input
              className="mb-3"
              value={social.platform}
              onChange={(event) =>
                form.setValue(`socialLinks.${index}.platform`, event.target.value, {
                  shouldDirty: true,
                })
              }
            />
            <Input
              className="mb-3"
              value={social.label}
              onChange={(event) =>
                form.setValue(`socialLinks.${index}.label`, event.target.value, {
                  shouldDirty: true,
                })
              }
            />
            <Input
              value={social.url}
              onChange={(event) =>
                form.setValue(`socialLinks.${index}.url`, event.target.value, {
                  shouldDirty: true,
                })
              }
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
