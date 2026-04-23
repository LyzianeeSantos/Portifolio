import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ReturnTypeUseProfileForm } from "@/features/admin/components/profile/profile-form.types";

interface ProfileEducationFieldsProps {
  form: ReturnTypeUseProfileForm["form"];
}

export function ProfileEducationFields({ form }: ProfileEducationFieldsProps) {
  const educationItems = form.watch("educationItems");

  return (
    <Card>
      <CardContent className="grid gap-4 p-6">
        <Label>Educacao</Label>
        {educationItems.map((item, index) => (
          <div key={`${item.title}-${index}`} className="rounded-[1.5rem] border border-white/10 p-4">
            <Input
              className="mb-3"
              value={item.title}
              onChange={(event) =>
                form.setValue(`educationItems.${index}.title`, event.target.value, {
                  shouldDirty: true,
                })
              }
            />
            <Input
              className="mb-3"
              value={item.subtitle}
              onChange={(event) =>
                form.setValue(`educationItems.${index}.subtitle`, event.target.value, {
                  shouldDirty: true,
                })
              }
            />
            <Input
              className="mb-3"
              value={item.period}
              onChange={(event) =>
                form.setValue(`educationItems.${index}.period`, event.target.value, {
                  shouldDirty: true,
                })
              }
            />
            <Textarea
              className="min-h-24"
              value={item.description}
              onChange={(event) =>
                form.setValue(`educationItems.${index}.description`, event.target.value, {
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
