import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageUploadField } from "@/features/admin/components/shared/image-upload-field";
import type { ReturnTypeUseProfileForm } from "@/features/admin/components/profile/profile-form.types";

interface ProfileMediaFieldsProps {
  form: ReturnTypeUseProfileForm["form"];
}

export function ProfileMediaFields({ form }: ProfileMediaFieldsProps) {
  return (
    <Card>
      <CardContent className="grid gap-5 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <Label>Localizacao</Label>
            <Input {...form.register("location")} />
          </div>
          <div className="grid gap-2">
            <Label>Hero label</Label>
            <Input {...form.register("heroLabel")} />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <Label>E-mail</Label>
            <Input {...form.register("email")} />
          </div>
          <div className="grid gap-2">
            <Label>Telefone</Label>
            <Input {...form.register("phone")} />
          </div>
        </div>
        <ImageUploadField
          label="Imagem do hero"
          value={form.watch("heroImage")}
          onChange={(value) => form.setValue("heroImage", value, { shouldDirty: true })}
        />
        <ImageUploadField
          label="Imagem do sobre"
          value={form.watch("aboutImage")}
          onChange={(value) => form.setValue("aboutImage", value, { shouldDirty: true })}
        />
      </CardContent>
    </Card>
  );
}
