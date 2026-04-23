import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ReturnTypeUseProfileForm } from "@/features/admin/components/profile/profile-form.types";

interface ProfileBasicFieldsProps {
  form: ReturnTypeUseProfileForm["form"];
}

export function ProfileBasicFields({ form }: ProfileBasicFieldsProps) {
  return (
    <Card>
      <CardContent className="grid gap-5 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <Label>Nome</Label>
            <Input {...form.register("name")} />
          </div>
          <div className="grid gap-2">
            <Label>Idade</Label>
            <Input type="number" {...form.register("age", { valueAsNumber: true })} />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-2">
            <Label>Profissao</Label>
            <Input {...form.register("profession")} />
          </div>
          <div className="grid gap-2">
            <Label>Formacao</Label>
            <Input {...form.register("degree")} />
          </div>
        </div>
        <div className="grid gap-2">
          <Label>Headline principal</Label>
          <Textarea className="min-h-28" {...form.register("headline")} />
        </div>
        <div className="grid gap-2">
          <Label>Tagline introdutoria</Label>
          <Textarea className="min-h-24" {...form.register("introTagline")} />
        </div>
        <div className="grid gap-2">
          <Label>Sobre mim</Label>
          <Textarea className="min-h-44" {...form.register("about")} />
        </div>
        <div className="grid gap-2">
          <Label>Citacao de destaque</Label>
          <Textarea className="min-h-24" {...form.register("accentQuote")} />
        </div>
      </CardContent>
    </Card>
  );
}
