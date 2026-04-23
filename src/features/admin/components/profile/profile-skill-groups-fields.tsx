import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ReturnTypeUseProfileForm } from "@/features/admin/components/profile/profile-form.types";
import { parseLines } from "@/utils/text";

interface ProfileSkillGroupsFieldsProps {
  form: ReturnTypeUseProfileForm["form"];
}

export function ProfileSkillGroupsFields({ form }: ProfileSkillGroupsFieldsProps) {
  const skillGroups = form.watch("skillGroups");

  return (
    <Card>
      <CardContent className="grid gap-4 p-6">
        <Label>Stacks por categoria</Label>
        {skillGroups.map((group, index) => (
          <div key={`${group.title}-${index}`} className="rounded-[1.5rem] border border-white/10 p-4">
            <Input
              className="mb-3"
              value={group.title}
              onChange={(event) =>
                form.setValue(`skillGroups.${index}.title`, event.target.value, { shouldDirty: true })
              }
            />
            <Textarea
              className="min-h-24"
              value={group.items.join("\n")}
              onChange={(event) =>
                form.setValue(`skillGroups.${index}.items`, parseLines(event.target.value), {
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
